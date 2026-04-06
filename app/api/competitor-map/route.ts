import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

// ─── Types ───────────────────────────────────────────────────────────────────

interface PlaceResult {
  id: string;
  displayName: { text: string };
  formattedAddress?: string;
  rating?: number;
  userRatingCount?: number;
  websiteUri?: string;
  nationalPhoneNumber?: string;
  currentOpeningHours?: {
    openNow?: boolean;
    weekdayDescriptions?: string[];
  };
  regularOpeningHours?: {
    openNow?: boolean;
    weekdayDescriptions?: string[];
  };
  photos?: Array<{ name: string }>;
  primaryType?: string;
  primaryTypeDisplayName?: { text: string };
  location: {
    latitude: number;
    longitude: number;
  };
  businessStatus?: string;
}

interface CompetitorData {
  id: string;
  name: string;
  address: string;
  rating: number | null;
  reviewCount: number;
  website: string | null;
  phone: string | null;
  isOpen: boolean | null;
  photoCount: number;
  category: string | null;
  lat: number;
  lng: number;
  businessStatus: string | null;
}

// ─── Main Handler ────────────────────────────────────────────────────────────

// Valid business types for Google Places API
const VALID_BUSINESS_TYPES = new Set([
  'dentist', 'doctor', 'lawyer', 'restaurant', 'cafe', 'hair_salon',
  'beauty_salon', 'gym', 'car_repair', 'car_dealer', 'plumber',
  'electrician', 'real_estate_agency', 'insurance_agency', 'accounting',
  'veterinary_care', 'pharmacy', 'pet_store', 'clothing_store',
  'home_goods_store', 'moving_company', 'roofing_contractor', 'painter',
  'locksmith', 'florist', 'bakery', 'bar', 'hotel', 'school', 'church',
]);

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 10 per minute
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = rateLimit(ip, 10, 60 * 1000);
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { businessType, location, radius } = await request.json();

    if (!businessType || !location) {
      return NextResponse.json(
        { error: 'Business type and location are required.' },
        { status: 400 }
      );
    }

    // Validate business type against whitelist
    if (!VALID_BUSINESS_TYPES.has(businessType)) {
      return NextResponse.json(
        { error: 'Invalid business type.' },
        { status: 400 }
      );
    }

    // Validate location length
    if (typeof location !== 'string' || location.length > 200) {
      return NextResponse.json(
        { error: 'Invalid location.' },
        { status: 400 }
      );
    }

    // Validate and bound radius (1km to 50km)
    const searchRadiusRaw = typeof radius === 'number' ? radius : 8000;
    const searchRadiusBounded = Math.max(1000, Math.min(50000, searchRadiusRaw));

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured.' }, { status: 500 });
    }

    // ── Step 1: Geocode the location ──

    const geocodeRes = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${API_KEY}`
    );

    if (!geocodeRes.ok) {
      return NextResponse.json({ error: 'Failed to geocode location.' }, { status: 400 });
    }

    const geocodeData = await geocodeRes.json();

    if (geocodeData.status !== 'OK' || !geocodeData.results?.length) {
      return NextResponse.json(
        { error: 'Could not find that location. Try entering a city name or zip code.' },
        { status: 400 }
      );
    }

    const { lat, lng } = geocodeData.results[0].geometry.location;
    const formattedAddress = geocodeData.results[0].formatted_address;

    // ── Step 2: Search for nearby businesses ──

    const searchRadius = searchRadiusBounded;

    const placesRes = await fetch(
      'https://places.googleapis.com/v1/places:searchNearby',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': API_KEY,
          'X-Goog-FieldMask': [
            'places.id',
            'places.displayName',
            'places.formattedAddress',
            'places.rating',
            'places.userRatingCount',
            'places.websiteUri',
            'places.nationalPhoneNumber',
            'places.currentOpeningHours',
            'places.regularOpeningHours',
            'places.photos',
            'places.primaryType',
            'places.primaryTypeDisplayName',
            'places.location',
            'places.businessStatus',
          ].join(','),
        },
        body: JSON.stringify({
          includedTypes: [businessType],
          locationRestriction: {
            circle: {
              center: { latitude: lat, longitude: lng },
              radius: searchRadius,
            },
          },
          maxResultCount: 20,
        }),
      }
    );

    if (!placesRes.ok) {
      const errorData = await placesRes.json().catch(() => null);
      console.error('Places API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to search for businesses. The business type may not be supported.' },
        { status: 400 }
      );
    }

    const placesData = await placesRes.json();
    const places: PlaceResult[] = placesData.places || [];

    // ── Step 3: Format results ──

    const competitors: CompetitorData[] = places.map((place) => ({
      id: place.id,
      name: place.displayName?.text || 'Unknown',
      address: place.formattedAddress || '',
      rating: place.rating ?? null,
      reviewCount: place.userRatingCount || 0,
      website: place.websiteUri || null,
      phone: place.nationalPhoneNumber || null,
      isOpen: place.currentOpeningHours?.openNow ?? place.regularOpeningHours?.openNow ?? null,
      photoCount: place.photos?.length || 0,
      category: place.primaryTypeDisplayName?.text || place.primaryType || null,
      lat: place.location.latitude,
      lng: place.location.longitude,
      businessStatus: place.businessStatus || null,
    }));

    // Sort by review count (most reviews first)
    competitors.sort((a, b) => b.reviewCount - a.reviewCount);

    // ── Step 4: Calculate market stats ──

    const withRatings = competitors.filter(c => c.rating !== null);
    const avgRating = withRatings.length > 0
      ? Math.round((withRatings.reduce((sum, c) => sum + (c.rating || 0), 0) / withRatings.length) * 10) / 10
      : 0;
    const avgReviews = competitors.length > 0
      ? Math.round(competitors.reduce((sum, c) => sum + c.reviewCount, 0) / competitors.length)
      : 0;
    const withWebsite = competitors.filter(c => c.website !== null).length;
    const totalCompetitors = competitors.length;

    return NextResponse.json({
      center: { lat, lng },
      formattedAddress,
      searchRadius,
      businessType,
      competitors,
      stats: {
        totalCompetitors,
        avgRating,
        avgReviews,
        withWebsite,
        withoutWebsite: totalCompetitors - withWebsite,
        highestRated: withRatings.length > 0
          ? (() => { const best = withRatings.reduce((b, c) => (c.rating || 0) > (b.rating || 0) ? c : b); return best.name; })()
          : null,
        highestRatedScore: withRatings.length > 0
          ? withRatings.reduce((b, c) => (c.rating || 0) > (b.rating || 0) ? c : b).rating
          : null,
        mostReviewed: competitors.length > 0 ? competitors[0].name : null,
        mostReviewedCount: competitors.length > 0 ? competitors[0].reviewCount : 0,
      },
    });
  } catch (error) {
    console.error('Competitor map error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
