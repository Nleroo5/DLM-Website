import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;
const GEMINI_MODEL = 'gemini-2.5-flash';

// ─── Types ───────────────────────────────────────────────────────────────────

interface LighthouseCategory {
  score: number | null;
}

interface LighthouseAudit {
  score: number | null;
  title: string;
  description: string;
  displayValue?: string;
  numericValue?: number;
  details?: {
    items?: Array<Record<string, unknown>>;
  };
}

interface PageSpeedResult {
  lighthouseResult: {
    categories: {
      performance: LighthouseCategory;
      accessibility: LighthouseCategory;
      seo: LighthouseCategory;
      'best-practices': LighthouseCategory;
    };
    audits: Record<string, LighthouseAudit>;
  };
}

interface HtmlAnalysis {
  metaTitle: string | null;
  metaTitleLength: number;
  metaDescription: string | null;
  metaDescriptionLength: number;
  h1Tags: string[];
  h2Count: number;
  h3Count: number;
  imagesTotal: number;
  imagesMissingAlt: number;
  hasOgTitle: boolean;
  hasOgDescription: boolean;
  hasOgImage: boolean;
  hasTwitterCard: boolean;
  hasCanonical: boolean;
  hasFavicon: boolean;
  hasViewport: boolean;
  hasLangAttribute: boolean;
  schemas: string[];
  externalScripts: string[];
  hasRobotsTxt: boolean;
  hasSitemap: boolean;
  internalLinks: number;
  externalLinks: number;
  totalPageSizeKb: number;
}

// ─── HTML Parsing ────────────────────────────────────────────────────────────

function analyzeHtml(html: string, baseUrl: string): HtmlAnalysis {
  // Meta title
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaTitle = titleMatch ? titleMatch[1].trim() : null;

  // Meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*\/?>/i)
    || html.match(/<meta[^>]*content=["']([\s\S]*?)["'][^>]*name=["']description["'][^>]*\/?>/i);
  const metaDescription = descMatch ? descMatch[1].trim() : null;

  // H1 tags
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1Tags = h1Matches.map(h => h.replace(/<[^>]+>/g, '').trim()).filter(Boolean);

  // H2 and H3 counts
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;

  // Images
  const imgMatches = html.match(/<img[^>]*>/gi) || [];
  const imagesTotal = imgMatches.length;
  const imagesMissingAlt = imgMatches.filter(img => {
    // alt="" is valid for decorative images, so only flag truly missing alt attributes
    const hasAlt = /\balt=["']/i.test(img);
    return !hasAlt;
  }).length;

  // OG tags
  const hasOgTitle = /<meta[^>]*property=["']og:title["'][^>]*>/i.test(html);
  const hasOgDescription = /<meta[^>]*property=["']og:description["'][^>]*>/i.test(html);
  const hasOgImage = /<meta[^>]*property=["']og:image["'][^>]*>/i.test(html);

  // Twitter card
  const hasTwitterCard = /<meta[^>]*name=["']twitter:card["'][^>]*>/i.test(html);

  // Canonical
  const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);

  // Favicon
  const hasFavicon = /<link[^>]*rel=["'](?:icon|shortcut icon|apple-touch-icon)["'][^>]*>/i.test(html);

  // Viewport
  const hasViewport = /<meta[^>]*name=["']viewport["'][^>]*>/i.test(html);

  // Lang attribute
  const hasLangAttribute = /<html[^>]*lang=["'][^"']+["'][^>]*>/i.test(html);

  // Schema markup (JSON-LD)
  const schemaMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  const schemas: string[] = [];
  schemaMatches.forEach(match => {
    const jsonContent = match.replace(/<script[^>]*>|<\/script>/gi, '').trim();
    try {
      const parsed = JSON.parse(jsonContent);
      if (parsed['@type']) {
        schemas.push(parsed['@type']);
      } else if (Array.isArray(parsed['@graph'])) {
        parsed['@graph'].forEach((item: Record<string, unknown>) => {
          if (item['@type']) schemas.push(item['@type'] as string);
        });
      }
    } catch {
      // Skip invalid JSON-LD
    }
  });

  // External scripts (detect analytics, pixels, etc.)
  const scriptMatches = html.match(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi) || [];
  const knownScripts: Record<string, string> = {
    'googletagmanager': 'Google Tag Manager',
    'google-analytics': 'Google Analytics',
    'gtag': 'Google Analytics (gtag)',
    'fbevents': 'Meta Pixel',
    'connect.facebook.net': 'Meta Pixel',
    'hotjar': 'Hotjar',
    'clarity.ms': 'Microsoft Clarity',
    'hubspot': 'HubSpot',
    'intercom': 'Intercom',
    'tawk.to': 'Tawk.to Chat',
    'crisp': 'Crisp Chat',
    'drift': 'Drift',
    'calendly': 'Calendly',
    'mailchimp': 'Mailchimp',
    'klaviyo': 'Klaviyo',
    'stripe': 'Stripe',
    'jquery': 'jQuery',
    'bootstrap': 'Bootstrap',
    'unpkg.com/react': 'React',
    'cdnjs.cloudflare.com': 'Cloudflare CDN',
  };

  const externalScripts: string[] = [];
  scriptMatches.forEach(tag => {
    const srcMatch = tag.match(/src=["']([^"']+)["']/i);
    if (srcMatch) {
      const src = srcMatch[1].toLowerCase();
      for (const [pattern, name] of Object.entries(knownScripts)) {
        if (src.includes(pattern) && !externalScripts.includes(name)) {
          externalScripts.push(name);
        }
      }
    }
  });

  // Links
  const linkMatches = html.match(/<a[^>]*href=["']([^"'#]+)["'][^>]*>/gi) || [];
  let internalLinks = 0;
  let externalLinks = 0;
  const urlHost = new URL(baseUrl).hostname;
  linkMatches.forEach(link => {
    const hrefMatch = link.match(/href=["']([^"'#]+)["']/i);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.startsWith('/') || href.includes(urlHost)) {
        internalLinks++;
      } else if (href.startsWith('http')) {
        externalLinks++;
      }
    }
  });

  return {
    metaTitle,
    metaTitleLength: metaTitle?.length || 0,
    metaDescription,
    metaDescriptionLength: metaDescription?.length || 0,
    h1Tags,
    h2Count,
    h3Count,
    imagesTotal,
    imagesMissingAlt,
    hasOgTitle,
    hasOgDescription,
    hasOgImage,
    hasTwitterCard,
    hasCanonical,
    hasFavicon,
    hasViewport,
    hasLangAttribute,
    schemas,
    externalScripts,
    hasRobotsTxt: false, // checked separately
    hasSitemap: false, // checked separately
    internalLinks,
    externalLinks,
    totalPageSizeKb: 0, // set from PageSpeed data
  };
}

// ─── Gemini AI Report ────────────────────────────────────────────────────────

async function generateStrategyReport(
  url: string,
  mobile: Record<string, number>,
  desktop: Record<string, number>,
  metrics: Record<string, string | number>,
  htmlData: HtmlAnalysis,
  failedAudits: Array<{ title: string; description: string; displayValue?: string }>
): Promise<string> {
  const prompt = `You are a senior web developer and SEO expert hired to analyze a real website. Below is REAL data from Google Lighthouse and a full HTML analysis of the website at ${url}. Every number is verified. Do not make up any data.

Write a strategy report in plain English that a small business owner can understand. Be direct, specific, and actionable. Reference the actual numbers below. Do not use emojis. Do not use long dashes (em dashes). Use short sentences.

REAL PERFORMANCE DATA:
- Mobile Performance: ${mobile.performance}/100
- Mobile SEO: ${mobile.seo}/100
- Mobile Accessibility: ${mobile.accessibility}/100
- Mobile Best Practices: ${mobile.bestPractices}/100
- Desktop Performance: ${desktop.performance}/100
- Desktop SEO: ${desktop.seo}/100
- Desktop Accessibility: ${desktop.accessibility}/100
- Desktop Best Practices: ${desktop.bestPractices}/100

CORE WEB VITALS:
- Largest Contentful Paint (LCP): ${metrics.lcp} (Google wants under 2.5s)
- Cumulative Layout Shift (CLS): ${metrics.cls} (Google wants under 0.1)
- Total Blocking Time (TBT): ${metrics.tbt} (Google wants under 200ms)
- First Contentful Paint (FCP): ${metrics.fcp}
- Speed Index: ${metrics.speedIndex}

HTML ANALYSIS:
- Meta Title: ${htmlData.metaTitle ? `"${htmlData.metaTitle}" (${htmlData.metaTitleLength} characters)` : 'MISSING'}
- Meta Description: ${htmlData.metaDescription ? `"${htmlData.metaDescription.substring(0, 80)}..." (${htmlData.metaDescriptionLength} characters)` : 'MISSING'}
- H1 Tags Found: ${htmlData.h1Tags.length} ${htmlData.h1Tags.length > 0 ? `["${htmlData.h1Tags.join('", "')}"]` : ''}
- H2 Tags: ${htmlData.h2Count}, H3 Tags: ${htmlData.h3Count}
- Images: ${htmlData.imagesTotal} total, ${htmlData.imagesMissingAlt} missing alt text
- Open Graph Tags: Title=${htmlData.hasOgTitle}, Description=${htmlData.hasOgDescription}, Image=${htmlData.hasOgImage}
- Twitter Card: ${htmlData.hasTwitterCard}
- Canonical URL: ${htmlData.hasCanonical}
- Favicon: ${htmlData.hasFavicon}
- Viewport Meta: ${htmlData.hasViewport}
- Language Attribute: ${htmlData.hasLangAttribute}
- Schema Markup: ${htmlData.schemas.length > 0 ? htmlData.schemas.join(', ') : 'NONE FOUND'}
- robots.txt: ${htmlData.hasRobotsTxt ? 'Found' : 'Not found'}
- sitemap.xml: ${htmlData.hasSitemap ? 'Found' : 'Not found'}
- Internal Links: ${htmlData.internalLinks}
- External Links: ${htmlData.externalLinks}
- Tracking/Scripts Detected: ${htmlData.externalScripts.length > 0 ? htmlData.externalScripts.join(', ') : 'None detected'}

TOP LIGHTHOUSE ISSUES:
${failedAudits.slice(0, 10).map(a => `- ${a.title}${a.displayValue ? ` (${a.displayValue})` : ''}`).join('\n')}

FORMAT YOUR RESPONSE EXACTLY LIKE THIS (use these exact headings with ## markdown):

## The Big Picture
(2-3 sentences summarizing the overall state of this website. Be honest but constructive.)

## What Is Working Well
(List 3-5 specific things this site does right, referencing real data. If very little is working, still find something positive.)

## Critical Issues to Fix Now
(List the top 3-5 issues that are actively hurting this business, ordered by impact. For each one, explain what the problem is, why it matters, and exactly how to fix it. Use the real numbers.)

## Quick Wins
(List 3-4 things that can be fixed in under an hour each and would make an immediate difference.)

## 90-Day Action Plan
(A numbered list of 5-7 steps in priority order. Be specific about what to do, not vague. Each step should be one sentence.)

Do not add any sections beyond these five. Do not add a conclusion or sign-off. End after the 90-Day Action Plan.`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4096,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    console.error('Gemini API error:', errorData);
    throw new Error('Failed to generate AI report');
  }

  const data = await response.json();

  // Gemini may return multiple parts (thinking + response). Get the text part.
  const parts = data?.candidates?.[0]?.content?.parts || [];
  let text = '';
  for (const part of parts) {
    if (part.text) {
      text = part.text;
    }
  }

  if (!text) {
    throw new Error('Empty response from AI');
  }

  // Strip any thinking blocks that Gemini 2.5 might include
  text = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

  return text;
}

// ─── Main Handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 3 per minute (very expensive: PageSpeed + Gemini)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = rateLimit(ip, 3, 60 * 1000);
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    try {
      new URL(cleanUrl);
    } catch {
      return NextResponse.json({ error: 'Invalid URL format' }, { status: 400 });
    }

    if (!API_KEY) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // ── Step 1: Parallel fetch - PageSpeed (mobile + desktop) + HTML + robots + sitemap ──

    const [mobileRes, desktopRes, htmlRes, robotsRes, sitemapRes] = await Promise.all([
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&key=${API_KEY}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices`
      ),
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&key=${API_KEY}&strategy=desktop&category=performance&category=accessibility&category=seo&category=best-practices`
      ),
      fetch(cleanUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DLMBot/1.0)' },
        redirect: 'follow',
      }).catch(() => null),
      fetch(new URL('/robots.txt', cleanUrl).href, { redirect: 'follow' }).catch(() => null),
      fetch(new URL('/sitemap.xml', cleanUrl).href, { redirect: 'follow' }).catch(() => null),
    ]);

    if (!mobileRes.ok || !desktopRes.ok) {
      return NextResponse.json(
        { error: 'Failed to analyze website. Make sure the URL is publicly accessible.' },
        { status: 400 }
      );
    }

    const mobileData: PageSpeedResult = await mobileRes.json();
    const desktopData: PageSpeedResult = await desktopRes.json();

    // ── Step 2: Extract PageSpeed scores ──

    const mobile = {
      performance: Math.round((mobileData.lighthouseResult.categories.performance.score || 0) * 100),
      accessibility: Math.round((mobileData.lighthouseResult.categories.accessibility.score || 0) * 100),
      seo: Math.round((mobileData.lighthouseResult.categories.seo.score || 0) * 100),
      bestPractices: Math.round((mobileData.lighthouseResult.categories['best-practices'].score || 0) * 100),
    };

    const desktop = {
      performance: Math.round((desktopData.lighthouseResult.categories.performance.score || 0) * 100),
      accessibility: Math.round((desktopData.lighthouseResult.categories.accessibility.score || 0) * 100),
      seo: Math.round((desktopData.lighthouseResult.categories.seo.score || 0) * 100),
      bestPractices: Math.round((desktopData.lighthouseResult.categories['best-practices'].score || 0) * 100),
    };

    const audits = mobileData.lighthouseResult.audits;
    const metrics = {
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
      tbt: audits['total-blocking-time']?.displayValue || 'N/A',
      speedIndex: audits['speed-index']?.displayValue || 'N/A',
      lcpNumeric: audits['largest-contentful-paint']?.numericValue || 0,
      clsNumeric: audits['cumulative-layout-shift']?.numericValue || 0,
      tbtNumeric: audits['total-blocking-time']?.numericValue || 0,
    };

    // Get failed audits for the AI report
    const failedAudits = Object.values(audits)
      .filter(audit => audit.score !== null && audit.score < 0.9 && audit.title)
      .sort((a, b) => (a.score || 0) - (b.score || 0))
      .map(audit => ({
        title: audit.title,
        description: audit.description?.replace(/\[.*?\]\(.*?\)/g, '').substring(0, 200) || '',
        displayValue: audit.displayValue,
      }));

    // Get total page size from network audit
    const totalBytes = audits['total-byte-weight']?.numericValue || 0;

    // ── Step 3: Parse HTML ──

    let htmlAnalysis: HtmlAnalysis;
    if (htmlRes && htmlRes.ok) {
      const html = await htmlRes.text();
      htmlAnalysis = analyzeHtml(html, cleanUrl);
    } else {
      htmlAnalysis = {
        metaTitle: null, metaTitleLength: 0,
        metaDescription: null, metaDescriptionLength: 0,
        h1Tags: [], h2Count: 0, h3Count: 0,
        imagesTotal: 0, imagesMissingAlt: 0,
        hasOgTitle: false, hasOgDescription: false, hasOgImage: false,
        hasTwitterCard: false, hasCanonical: false, hasFavicon: false,
        hasViewport: false, hasLangAttribute: false,
        schemas: [], externalScripts: [],
        hasRobotsTxt: false, hasSitemap: false,
        internalLinks: 0, externalLinks: 0, totalPageSizeKb: 0,
      };
    }

    // Check robots.txt and sitemap (verify content type to avoid soft 404s)
    let hasRobots = false;
    if (robotsRes && robotsRes.ok) {
      const robotsContentType = robotsRes.headers.get('content-type') || '';
      const robotsBody = await robotsRes.text().catch(() => '');
      hasRobots = robotsContentType.includes('text/plain') || robotsBody.toLowerCase().includes('user-agent');
    }

    let hasSitemap = false;
    if (sitemapRes && sitemapRes.ok) {
      const sitemapContentType = sitemapRes.headers.get('content-type') || '';
      const sitemapBody = await sitemapRes.text().catch(() => '');
      hasSitemap = sitemapContentType.includes('xml') || sitemapBody.includes('<urlset') || sitemapBody.includes('<sitemapindex');
    }

    htmlAnalysis.hasRobotsTxt = hasRobots;
    htmlAnalysis.hasSitemap = hasSitemap;
    htmlAnalysis.totalPageSizeKb = Math.round(totalBytes / 1024);

    // ── Step 4: Generate AI Strategy Report ──

    let aiReport: string;
    try {
      aiReport = await generateStrategyReport(
        cleanUrl, mobile, desktop, metrics, htmlAnalysis, failedAudits
      );
    } catch (err) {
      console.error('Gemini error:', err);
      aiReport = 'AI report generation failed. The technical data below is still 100% accurate.';
    }

    // ── Step 5: Build checklist from HTML analysis ──

    const checklist = [
      { label: 'HTTPS Secure', passed: cleanUrl.startsWith('https://') },
      { label: 'Meta Title', passed: htmlAnalysis.metaTitle !== null },
      { label: 'Meta Title Length (under 70 chars)', passed: htmlAnalysis.metaTitleLength > 0 && htmlAnalysis.metaTitleLength <= 70 },
      { label: 'Meta Description', passed: htmlAnalysis.metaDescription !== null },
      { label: 'Meta Description Length (120-160 chars)', passed: htmlAnalysis.metaDescriptionLength >= 120 && htmlAnalysis.metaDescriptionLength <= 160 },
      { label: 'Single H1 Tag', passed: htmlAnalysis.h1Tags.length === 1 },
      { label: 'Heading Hierarchy (H2s present)', passed: htmlAnalysis.h2Count > 0 },
      { label: 'All Images Have Alt Text', passed: htmlAnalysis.imagesMissingAlt === 0 },
      { label: 'Open Graph Title', passed: htmlAnalysis.hasOgTitle },
      { label: 'Open Graph Description', passed: htmlAnalysis.hasOgDescription },
      { label: 'Open Graph Image', passed: htmlAnalysis.hasOgImage },
      { label: 'Twitter Card', passed: htmlAnalysis.hasTwitterCard },
      { label: 'Canonical URL', passed: htmlAnalysis.hasCanonical },
      { label: 'Favicon', passed: htmlAnalysis.hasFavicon },
      { label: 'Viewport Meta Tag', passed: htmlAnalysis.hasViewport },
      { label: 'Language Attribute', passed: htmlAnalysis.hasLangAttribute },
      { label: 'Structured Data (Schema)', passed: htmlAnalysis.schemas.length > 0 },
      { label: 'robots.txt', passed: htmlAnalysis.hasRobotsTxt },
      { label: 'sitemap.xml', passed: htmlAnalysis.hasSitemap },
      { label: 'Mobile Performance (50+)', passed: mobile.performance >= 50 },
      { label: 'Mobile SEO Score (80+)', passed: mobile.seo >= 80 },
      { label: 'LCP under 2.5s', passed: metrics.lcpNumeric <= 2500 },
      { label: 'CLS under 0.1', passed: metrics.clsNumeric <= 0.1 },
      { label: 'TBT under 200ms', passed: metrics.tbtNumeric <= 200 },
    ];

    const passedCount = checklist.filter(c => c.passed).length;
    const overallScore = Math.round((passedCount / checklist.length) * 100);

    return NextResponse.json({
      url: cleanUrl,
      overallScore,
      passedCount,
      totalChecks: checklist.length,
      mobile,
      desktop,
      metrics,
      htmlAnalysis: {
        metaTitle: htmlAnalysis.metaTitle,
        metaTitleLength: htmlAnalysis.metaTitleLength,
        metaDescription: htmlAnalysis.metaDescription ? htmlAnalysis.metaDescription.substring(0, 200) : null,
        metaDescriptionLength: htmlAnalysis.metaDescriptionLength,
        h1Tags: htmlAnalysis.h1Tags,
        h2Count: htmlAnalysis.h2Count,
        imagesTotal: htmlAnalysis.imagesTotal,
        imagesMissingAlt: htmlAnalysis.imagesMissingAlt,
        schemas: htmlAnalysis.schemas,
        externalScripts: htmlAnalysis.externalScripts,
        totalPageSizeKb: htmlAnalysis.totalPageSizeKb,
      },
      checklist,
      aiReport,
    });
  } catch (error) {
    console.error('Website strategy error:', error);
    return NextResponse.json(
      { error: 'An error occurred while analyzing the website. Please try again.' },
      { status: 500 }
    );
  }
}
