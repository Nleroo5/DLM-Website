import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Tell If Your Facebook Ads Are Working (5 Simple Metrics) | Atlanta',
  description: 'Learn the 5 simple Facebook ad metrics that tell you if your ads are working. No jargon - just clear benchmarks for impressions, clicks, CPC, CPL, and ROAS with actionable advice.',
  keywords: 'are my facebook ads working, facebook ad metrics explained, how to measure facebook ads, facebook advertising metrics atlanta, meta ads performance metrics, facebook ads cost per lead, facebook ads roi, facebook ctr benchmarks',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'How to Tell If Your Facebook Ads Are Working (5 Simple Metrics)',
    description: 'Learn the 5 simple Facebook ad metrics that tell you if your ads are working. Clear benchmarks and actionable advice for Atlanta businesses.',
    type: 'article',
    publishedTime: '2024-12-12T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/how-to-tell-if-facebook-ads-working',
    images: [{
      url: 'https://driveleadmedia.com/images/facebook-ads-lead-demographics-hero.webp',
      width: 2446,
      height: 1888,
      alt: 'Facebook Ads performance metrics showing 67 leads at $3.73 cost per lead with demographics breakdown',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Tell If Your Facebook Ads Are Working (5 Simple Metrics)',
    description: 'Learn the 5 simple Facebook ad metrics that tell you if your ads are working. No jargon - just clear benchmarks and actionable advice.',
    images: ['https://driveleadmedia.com/images/facebook-ads-lead-demographics-hero.webp'],
  },
  alternates: {
    canonical: '/blog/how-to-tell-if-facebook-ads-working',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
