import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Facebook Ads Aren\'t Delivering (2026): 12 Reasons & Fixes',
  description: 'Facebook ads not delivering? Discover 12 verified reasons your Meta ads aren\'t spending budget with exact fixes for learning limited status, pixel errors, and account restrictions in 2026.',
  keywords: 'facebook ads not delivering, meta ads not spending, learning limited status, facebook ads stuck in learning phase, facebook ad account restricted, meta ads delivery issues, facebook pixel not tracking, facebook ads budget problems',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Why Your Facebook Ads Aren\'t Delivering (2026): 12 Reasons & Fixes',
    description: 'Facebook ads not delivering? Discover 12 verified reasons your Meta ads aren\'t spending budget with exact fixes for learning limited status, pixel errors, and account restrictions.',
    type: 'article',
    publishedTime: '2026-01-11T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/facebook-ads-not-delivering-2026',
    images: [{
      url: 'https://driveleadmedia.com/images/facebook-ads-not-delivering-frustrated-advertiser-analytics.webp',
      width: 1920,
      height: 1281,
      alt: 'Frustrated advertiser looking at Facebook ads not delivering in Meta Ads Manager with analytics dashboard showing delivery issues',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Facebook Ads Aren\'t Delivering (2026): 12 Reasons & Fixes',
    description: 'Facebook ads not delivering? Learn 12 verified reasons your Meta ads aren\'t spending budget and exact fixes for 2026.',
    images: ['https://driveleadmedia.com/images/facebook-ads-not-delivering-frustrated-advertiser-analytics.webp'],
  },
  alternates: {
    canonical: '/blog/facebook-ads-not-delivering-2026',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
