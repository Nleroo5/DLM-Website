'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Competitor {
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

interface MapResults {
  center: { lat: number; lng: number };
  formattedAddress: string;
  searchRadius: number;
  businessType: string;
  competitors: Competitor[];
  stats: {
    totalCompetitors: number;
    avgRating: number;
    avgReviews: number;
    withWebsite: number;
    withoutWebsite: number;
    highestRated: string | null;
    mostReviewed: string | null;
    mostReviewedCount: number;
  };
}

interface SpeedResult {
  score: number;
  lcp: string;
  url: string;
}

// ─── Business Types ──────────────────────────────────────────────────────────

const BUSINESS_TYPES = [
  { value: 'dentist', label: 'Dentist' },
  { value: 'doctor', label: 'Doctor / Medical' },
  { value: 'lawyer', label: 'Lawyer / Attorney' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'cafe', label: 'Cafe / Coffee Shop' },
  { value: 'hair_salon', label: 'Hair Salon' },
  { value: 'beauty_salon', label: 'Beauty Salon / Spa' },
  { value: 'gym', label: 'Gym / Fitness' },
  { value: 'car_repair', label: 'Auto Repair' },
  { value: 'car_dealer', label: 'Car Dealer' },
  { value: 'plumber', label: 'Plumber' },
  { value: 'electrician', label: 'Electrician' },
  { value: 'real_estate_agency', label: 'Real Estate Agency' },
  { value: 'insurance_agency', label: 'Insurance Agency' },
  { value: 'accounting', label: 'Accountant / CPA' },
  { value: 'veterinary_care', label: 'Veterinarian' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'pet_store', label: 'Pet Store' },
  { value: 'clothing_store', label: 'Clothing Store' },
  { value: 'home_goods_store', label: 'Home Goods Store' },
  { value: 'moving_company', label: 'Moving Company' },
  { value: 'roofing_contractor', label: 'Roofing Contractor' },
  { value: 'painter', label: 'Painter' },
  { value: 'locksmith', label: 'Locksmith' },
  { value: 'florist', label: 'Florist' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'bar', label: 'Bar / Lounge' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'school', label: 'School / Education' },
  { value: 'church', label: 'Church / Place of Worship' },
];

// ─── Radius Options ──────────────────────────────────────────────────────────

const RADIUS_OPTIONS = [
  { value: 3200, label: '2 miles' },
  { value: 8000, label: '5 miles' },
  { value: 16000, label: '10 miles' },
  { value: 32000, label: '20 miles' },
];

// ─── Star Rating Component ───────────────────────────────────────────────────

function Stars({ rating }: { rating: number | null }) {
  if (rating === null) return <span className="text-gray-500 text-sm">No rating</span>;
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.3;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < full ? 'text-yellow-400' : i === full && hasHalf ? 'text-yellow-400/50' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-white font-heading text-sm font-semibold ml-1">{rating}</span>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function CompetitorMap() {
  const [businessType, setBusinessType] = useState('');
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState(8000);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<MapResults | null>(null);
  const [error, setError] = useState('');
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null);
  const [speedResults, setSpeedResults] = useState<Record<string, SpeedResult | 'loading' | 'error'>>({});
  const [mapsLoaded, setMapsLoaded] = useState(false);

  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || '';

  // ── Initialize Map ──

  const initMap = useCallback((center: { lat: number; lng: number }, competitors: Competitor[]) => {
    if (!mapRef.current || !window.google) return;

    // Clear previous markers
    markersRef.current.forEach(m => m.map = null);
    markersRef.current = [];

    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom: 12,
      mapId: 'competitor-map',
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#1a1a2e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a2e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#8892b0' }] },
        { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2d2d44' }] },
        { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#8892b0' }] },
        { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1a2b' }] },
        { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#1f1f35' }] },
        { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6b7280' }] },
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });

    googleMapRef.current = map;
    infoWindowRef.current = new google.maps.InfoWindow();

    // Add center marker (user location)
    const centerPin = document.createElement('div');
    centerPin.innerHTML = `<div style="background:#5FA99F;width:20px;height:20px;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(95,169,159,0.5);"></div>`;

    new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      content: centerPin,
      title: 'Your Location',
    });

    // Add competitor markers
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(center);

    competitors.forEach((comp, index) => {
      const position = { lat: comp.lat, lng: comp.lng };
      bounds.extend(position);

      const pinEl = document.createElement('div');
      const bgColor = comp.rating && comp.rating >= 4.5 ? '#22c55e' : comp.rating && comp.rating >= 4.0 ? '#eab308' : comp.rating && comp.rating >= 3.0 ? '#f97316' : '#ef4444';
      pinEl.innerHTML = `<div style="background:${bgColor};color:white;padding:4px 8px;border-radius:8px;font-size:12px;font-weight:bold;box-shadow:0 2px 8px rgba(0,0,0,0.3);cursor:pointer;white-space:nowrap;">${index + 1}. ${comp.rating ?? 'N/A'}</div>`;

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        content: pinEl,
        title: comp.name,
      });

      marker.addListener('click', () => {
        setSelectedCompetitor(comp.id);
        infoWindowRef.current?.setContent(`
          <div style="color:#000;padding:4px;max-width:220px;">
            <strong style="font-size:14px;">${comp.name}</strong>
            <p style="margin:4px 0;font-size:12px;color:#666;">${comp.address}</p>
            ${comp.rating ? `<p style="margin:2px 0;font-size:13px;">Rating: <strong>${comp.rating}</strong> (${comp.reviewCount} reviews)</p>` : ''}
            ${comp.phone ? `<p style="margin:2px 0;font-size:12px;">${comp.phone}</p>` : ''}
          </div>
        `);
        infoWindowRef.current?.open(map, marker);
      });

      markersRef.current.push(marker);
    });

    map.fitBounds(bounds, 50);
  }, []);

  // ── Render map when results change and Maps is loaded ──

  useEffect(() => {
    if (results && mapsLoaded) {
      initMap(results.center, results.competitors);
    }
  }, [results, mapsLoaded, initMap]);

  // ── Handle Search ──

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !location.trim()) return;

    setLoading(true);
    setError('');
    setResults(null);
    setSelectedCompetitor(null);
    setSpeedResults({});

    try {
      const res = await fetch('/api/competitor-map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, location: location.trim(), radius }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Search failed.');
        return;
      }

      if (data.competitors.length === 0) {
        setError('No businesses found for this type and location. Try a larger radius or different business type.');
        return;
      }

      setResults(data);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Check Website Speed ──

  const checkSpeed = async (competitorId: string, url: string) => {
    setSpeedResults(prev => ({ ...prev, [competitorId]: 'loading' }));
    try {
      const res = await fetch('/api/competitor-map/speed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSpeedResults(prev => ({ ...prev, [competitorId]: 'error' }));
        return;
      }
      setSpeedResults(prev => ({ ...prev, [competitorId]: data }));
    } catch {
      setSpeedResults(prev => ({ ...prev, [competitorId]: 'error' }));
    }
  };

  const getSelectedLabel = () => {
    return BUSINESS_TYPES.find(t => t.value === businessType)?.label || '';
  };

  return (
    <main className="min-h-screen bg-[#000000] relative">
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Google Maps Script */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=marker&v=weekly`}
        strategy="lazyOnload"
        onLoad={() => setMapsLoaded(true)}
      />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">Free Tool</span>
            <h1 className="text-white font-heading text-h1 font-bold leading-[1.1] mt-4 mb-6">
              Competitor Map
            </h1>
            <p className="text-gray-300 font-body text-body-lg leading-relaxed max-w-2xl mx-auto mb-10">
              See every competitor near you on an interactive map. Real Google data: ratings, reviews, websites, and phone numbers. Know exactly who you are competing against.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-3 mb-3">
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.3)] rounded-[12px] px-4 py-4 text-white font-body text-body focus:outline-none focus:border-[#5FA99F] transition-colors appearance-none"
                  disabled={loading}
                >
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City, zip code, or address"
                  className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.3)] rounded-[12px] px-4 py-4 text-white font-body text-body placeholder-gray-500 focus:outline-none focus:border-[#5FA99F] transition-colors"
                  disabled={loading}
                />

                <select
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.3)] rounded-[12px] px-4 py-4 text-white font-body text-body focus:outline-none focus:border-[#5FA99F] transition-colors appearance-none"
                  disabled={loading}
                >
                  {RADIUS_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !businessType || !location.trim()}
                className="w-full sm:w-auto bg-[#5FA99F] hover:bg-[#4D9189] disabled:bg-[#5FA99F]/50 disabled:cursor-not-allowed text-white font-heading font-semibold px-10 py-4 rounded-[12px] transition-colors"
              >
                {loading ? 'Searching...' : 'Find Competitors'}
              </button>
            </form>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 bg-red-500/10 border border-red-500/30 rounded-[12px] p-4 max-w-2xl mx-auto"
                >
                  <p className="text-red-400 font-body text-body-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {loading && (
              <div className="mt-10 flex justify-center">
                <div className="w-12 h-12 border-4 border-[#1A1A1A] border-t-[#5FA99F] rounded-full animate-spin" />
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.section
            ref={resultsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pb-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-5 text-center">
                  <div className="text-[2rem] font-heading font-bold text-white">{results.stats.totalCompetitors}</div>
                  <div className="text-gray-400 font-body text-body-sm mt-1">{getSelectedLabel()}s Found</div>
                </div>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-5 text-center">
                  <div className="text-[2rem] font-heading font-bold text-yellow-400">{results.stats.avgRating}</div>
                  <div className="text-gray-400 font-body text-body-sm mt-1">Avg Rating</div>
                </div>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-5 text-center">
                  <div className="text-[2rem] font-heading font-bold text-white">{results.stats.avgReviews}</div>
                  <div className="text-gray-400 font-body text-body-sm mt-1">Avg Reviews</div>
                </div>
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-5 text-center">
                  <div className="text-[2rem] font-heading font-bold text-[#5FA99F]">{results.stats.withWebsite}</div>
                  <div className="text-gray-400 font-body text-body-sm mt-1">Have a Website</div>
                </div>
              </motion.div>

              {/* Map + List Layout */}
              <div className="grid lg:grid-cols-5 gap-6">

                {/* Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:col-span-3 bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[24px] overflow-hidden"
                >
                  <div className="p-4 border-b border-[rgba(95,169,159,0.1)]">
                    <p className="text-gray-400 font-body text-body-sm">
                      Showing {results.stats.totalCompetitors} {getSelectedLabel().toLowerCase()}s near <span className="text-white font-semibold">{results.formattedAddress}</span>
                    </p>
                  </div>
                  <div ref={mapRef} className="w-full h-[500px]" />
                </motion.div>

                {/* Competitor List */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="lg:col-span-2 space-y-3 max-h-[600px] overflow-y-auto pr-1"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: '#5FA99F33 transparent' }}
                >
                  {results.competitors.map((comp, index) => (
                    <div
                      key={comp.id}
                      onClick={() => {
                        setSelectedCompetitor(comp.id);
                        if (googleMapRef.current) {
                          googleMapRef.current.panTo({ lat: comp.lat, lng: comp.lng });
                          googleMapRef.current.setZoom(15);
                        }
                      }}
                      className={`bg-gradient-to-br from-[#1A1A1A] to-[#111111] border rounded-[16px] p-5 cursor-pointer transition-all ${
                        selectedCompetitor === comp.id
                          ? 'border-[#5FA99F] shadow-[0_0_15px_rgba(95,169,159,0.2)]'
                          : 'border-[rgba(95,169,159,0.15)] hover:border-[rgba(95,169,159,0.4)]'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#5FA99F]/20 text-[#5FA99F] w-6 h-6 rounded-full flex items-center justify-center text-xs font-heading font-bold">{index + 1}</span>
                          <h3 className="text-white font-heading text-[1rem] font-semibold">{comp.name}</h3>
                        </div>
                        {comp.isOpen !== null && (
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${comp.isOpen ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {comp.isOpen ? 'Open' : 'Closed'}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-500 font-body text-[0.8rem] mb-2">{comp.address}</p>

                      <div className="flex items-center justify-between mb-3">
                        <Stars rating={comp.rating} />
                        <span className="text-gray-400 font-body text-[0.8rem]">{comp.reviewCount} reviews</span>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        {comp.phone && (
                          <a
                            href={`tel:${comp.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#5FA99F] bg-[#5FA99F]/10 border border-[#5FA99F]/20 px-3 py-1 rounded-full font-body text-[0.75rem] hover:bg-[#5FA99F]/20 transition-colors"
                          >
                            {comp.phone}
                          </a>
                        )}
                        {comp.website && (
                          <>
                            <a
                              href={comp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-body text-[0.75rem] hover:text-white hover:bg-white/10 transition-colors"
                            >
                              Website
                            </a>
                            {/* Speed Check Button */}
                            {!speedResults[comp.id] && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  checkSpeed(comp.id, comp.website!);
                                }}
                                className="text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full font-body text-[0.75rem] hover:bg-yellow-500/20 transition-colors"
                              >
                                Check Speed
                              </button>
                            )}
                            {speedResults[comp.id] === 'loading' && (
                              <span className="text-gray-400 font-body text-[0.75rem] flex items-center gap-1">
                                <div className="w-3 h-3 border-2 border-gray-600 border-t-[#5FA99F] rounded-full animate-spin" />
                                Testing...
                              </span>
                            )}
                            {speedResults[comp.id] === 'error' && (
                              <span className="text-red-400 font-body text-[0.75rem]">Speed check failed</span>
                            )}
                            {speedResults[comp.id] && typeof speedResults[comp.id] === 'object' && speedResults[comp.id] !== null && (
                              <span className={`font-body text-[0.75rem] font-semibold px-3 py-1 rounded-full border ${
                                (speedResults[comp.id] as SpeedResult).score >= 90
                                  ? 'text-green-400 bg-green-500/10 border-green-500/20'
                                  : (speedResults[comp.id] as SpeedResult).score >= 50
                                  ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20'
                                  : 'text-red-400 bg-red-500/10 border-red-500/20'
                              }`}>
                                Speed: {(speedResults[comp.id] as SpeedResult).score}/100
                              </span>
                            )}
                          </>
                        )}
                        {!comp.website && (
                          <span className="text-red-400/70 font-body text-[0.75rem]">No website</span>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Market Insights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[24px] p-8"
              >
                <h2 className="text-white font-heading text-[1.3rem] font-bold mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Market Insights
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-gray-400 font-body text-body-sm mb-1">Most Reviewed</p>
                    <p className="text-white font-heading text-[1rem] font-semibold">{results.stats.mostReviewed}</p>
                    <p className="text-[#5FA99F] font-body text-body-sm">{results.stats.mostReviewedCount} reviews</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-body text-body-sm mb-1">Highest Rated</p>
                    <p className="text-white font-heading text-[1rem] font-semibold">{results.stats.highestRated}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-body text-body-sm mb-1">Without a Website</p>
                    <p className="text-white font-heading text-[1rem] font-semibold">{results.stats.withoutWebsite} of {results.stats.totalCompetitors} businesses</p>
                    <p className="text-gray-500 font-body text-body-sm">
                      {results.stats.withoutWebsite > 0 ? 'These businesses are invisible online.' : 'Everyone has a website.'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 bg-gradient-to-br from-[#5FA99F]/10 to-[#1A1A1A] border border-[#5FA99F]/30 rounded-[24px] p-8 sm:p-10 text-center"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-4">
                  Want to Outrank These Competitors?
                </h2>
                <p className="text-gray-300 font-body text-body leading-relaxed max-w-2xl mx-auto mb-8">
                  We build fast, custom websites and run targeted Meta ad campaigns that put you ahead of every business on this map. Real results for Atlanta businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/book" className="bg-[#5FA99F] hover:bg-[#4D9189] text-white font-heading font-semibold px-8 py-4 rounded-[12px] transition-colors no-underline">
                    Get a Free Consultation
                  </Link>
                  <Link href="/case-studies" className="bg-transparent border border-[#5FA99F] text-[#5FA99F] hover:bg-[#5FA99F]/10 font-heading font-semibold px-8 py-4 rounded-[12px] transition-colors no-underline">
                    See Our Results
                  </Link>
                </div>
              </motion.div>

              {/* Data Source */}
              <div className="text-center mt-6">
                <p className="text-gray-600 font-body text-[0.8rem]">
                  All business data from Google Places API. Speed scores from Google PageSpeed Insights API.
                  <br />
                  Map powered by Google Maps JavaScript API. Every data point is real and verified by Google.
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* How It Works (no results) */}
      {!results && !loading && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-heading text-h2 font-bold text-center mb-12">What You Get</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', title: 'Interactive Map', desc: 'Every competitor plotted on a Google Map, color-coded by rating.' },
                { icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', title: 'Real Ratings', desc: 'Google star ratings and review counts for every business.' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Speed Check', desc: 'One-click website speed test for any competitor on the list.' },
                { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Market Stats', desc: 'Average rating, review count, and how many lack a website.' },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                  <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 font-body text-body-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </main>
  );
}
