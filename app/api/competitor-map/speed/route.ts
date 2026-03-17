import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url || !API_KEY) {
      return NextResponse.json({ error: 'URL and API key required.' }, { status: 400 });
    }

    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    const res = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&key=${API_KEY}&strategy=mobile&category=performance`
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Could not analyze this website.' }, { status: 400 });
    }

    const data = await res.json();
    const score = Math.round((data.lighthouseResult?.categories?.performance?.score || 0) * 100);
    const lcp = data.lighthouseResult?.audits?.['largest-contentful-paint']?.displayValue || 'N/A';

    return NextResponse.json({ score, lcp, url: cleanUrl });
  } catch {
    return NextResponse.json({ error: 'Speed check failed.' }, { status: 500 });
  }
}
