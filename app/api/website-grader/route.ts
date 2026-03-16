import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

interface LighthouseCategory {
  score: number | null;
  title: string;
}

interface LighthouseAudit {
  score: number | null;
  title: string;
  description: string;
  displayValue?: string;
  numericValue?: number;
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

function getLetterGrade(score: number): string {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}

function getGradeColor(grade: string): string {
  switch (grade) {
    case 'A': return '#22c55e';
    case 'B': return '#84cc16';
    case 'C': return '#eab308';
    case 'D': return '#f97316';
    case 'F': return '#ef4444';
    default: return '#6b7280';
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL format
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

    // Fetch both mobile and desktop results in parallel
    const [mobileRes, desktopRes] = await Promise.all([
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&key=${API_KEY}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices`,
        { next: { revalidate: 0 } }
      ),
      fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(cleanUrl)}&key=${API_KEY}&strategy=desktop&category=performance&category=accessibility&category=seo&category=best-practices`,
        { next: { revalidate: 0 } }
      ),
    ]);

    if (!mobileRes.ok || !desktopRes.ok) {
      const errorData = await mobileRes.json().catch(() => null);
      const errorMessage = errorData?.error?.message || 'Failed to analyze website. Make sure the URL is accessible.';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const mobileData: PageSpeedResult = await mobileRes.json();
    const desktopData: PageSpeedResult = await desktopRes.json();

    // Extract scores (multiply by 100 to get 0-100)
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

    // Extract key metrics from mobile audits
    const audits = mobileData.lighthouseResult.audits;
    const metrics = {
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
      cls: audits['cumulative-layout-shift']?.displayValue || 'N/A',
      tbt: audits['total-blocking-time']?.displayValue || 'N/A',
      speedIndex: audits['speed-index']?.displayValue || 'N/A',
      interactive: audits['interactive']?.displayValue || 'N/A',
      fcpNumeric: audits['first-contentful-paint']?.numericValue || 0,
      lcpNumeric: audits['largest-contentful-paint']?.numericValue || 0,
      clsNumeric: audits['cumulative-layout-shift']?.numericValue || 0,
      tbtNumeric: audits['total-blocking-time']?.numericValue || 0,
    };

    // Check HTTPS
    const isHttps = cleanUrl.startsWith('https://');

    // Calculate overall score (weighted average favoring mobile)
    // Mobile matters more for SEO, so weight it 70/30
    const mobileOverall = (mobile.performance * 0.35) + (mobile.seo * 0.30) + (mobile.accessibility * 0.20) + (mobile.bestPractices * 0.15);
    const desktopOverall = (desktop.performance * 0.35) + (desktop.seo * 0.30) + (desktop.accessibility * 0.20) + (desktop.bestPractices * 0.15);
    const overallScore = Math.round((mobileOverall * 0.7) + (desktopOverall * 0.3));

    const grade = getLetterGrade(overallScore);
    const gradeColor = getGradeColor(grade);

    // Generate recommendations based on scores
    const recommendations: Array<{ category: string; issue: string; impact: string; priority: 'high' | 'medium' | 'low' }> = [];

    if (mobile.performance < 50) {
      recommendations.push({
        category: 'Performance',
        issue: 'Your mobile site is critically slow. This is costing you over half your visitors.',
        impact: '53% of mobile users leave sites that take over 3 seconds to load.',
        priority: 'high',
      });
    } else if (mobile.performance < 80) {
      recommendations.push({
        category: 'Performance',
        issue: 'Your mobile performance needs improvement. Speed directly affects your Google rankings.',
        impact: 'A 0.1-second speed improvement can increase conversions by 8.4%.',
        priority: 'medium',
      });
    }

    if (mobile.seo < 80) {
      recommendations.push({
        category: 'SEO',
        issue: 'Your site has SEO issues that are hurting your Google rankings.',
        impact: 'Fixing technical SEO issues can improve rankings within 30-90 days.',
        priority: 'high',
      });
    }

    if (mobile.accessibility < 80) {
      recommendations.push({
        category: 'Accessibility',
        issue: 'Your site has accessibility issues that affect usability and SEO.',
        impact: 'Accessible websites rank better and serve a wider audience.',
        priority: 'medium',
      });
    }

    if (mobile.bestPractices < 80) {
      recommendations.push({
        category: 'Best Practices',
        issue: 'Your site is missing web development best practices.',
        impact: 'Modern best practices improve security, speed, and user trust.',
        priority: 'medium',
      });
    }

    if (!isHttps) {
      recommendations.push({
        category: 'Security',
        issue: 'Your site is not using HTTPS. Browsers show a "Not Secure" warning to visitors.',
        impact: '75% of consumers judge credibility based on website design and security.',
        priority: 'high',
      });
    }

    if (metrics.lcpNumeric > 2500) {
      recommendations.push({
        category: 'Core Web Vitals',
        issue: `Your Largest Contentful Paint is ${metrics.lcp}. Google wants this under 2.5 seconds.`,
        impact: 'LCP is a Core Web Vital that directly affects your search rankings.',
        priority: 'high',
      });
    }

    if (metrics.clsNumeric > 0.1) {
      recommendations.push({
        category: 'Core Web Vitals',
        issue: `Your Cumulative Layout Shift is ${metrics.cls}. Google wants this under 0.1.`,
        impact: 'Layout shifts frustrate users and hurt your Core Web Vitals score.',
        priority: 'medium',
      });
    }

    if (mobile.performance >= 90 && mobile.seo >= 90 && mobile.accessibility >= 90) {
      recommendations.push({
        category: 'Overall',
        issue: 'Your website is performing well across all major categories.',
        impact: 'Keep monitoring your Core Web Vitals to maintain your competitive edge.',
        priority: 'low',
      });
    }

    // Sort recommendations by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    recommendations.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return NextResponse.json({
      url: cleanUrl,
      overallScore,
      grade,
      gradeColor,
      mobile,
      desktop,
      metrics,
      isHttps,
      recommendations,
    });
  } catch (error) {
    console.error('Website grader error:', error);
    return NextResponse.json(
      { error: 'An error occurred while analyzing the website. Please try again.' },
      { status: 500 }
    );
  }
}
