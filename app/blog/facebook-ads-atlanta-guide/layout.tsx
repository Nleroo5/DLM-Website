import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Ads Atlanta: Complete Guide for Local Businesses (2025) | Drive Lead Media',
  description: 'Complete guide to Facebook advertising for Atlanta businesses. Learn costs, targeting, ROI benchmarks, and why 200+ local businesses choose Meta ads over billboards.',
  keywords: 'facebook ads atlanta, atlanta facebook ads, facebook advertising atlanta, meta ads atlanta, instagram ads atlanta, social media advertising atlanta, atlanta facebook ads agency',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Facebook Ads Atlanta: Complete Guide for Local Businesses (2025)',
    description: 'Complete guide to Facebook advertising for Atlanta businesses. Learn costs, targeting strategies, and proven tactics from 200+ local campaigns.',
    type: 'article',
    publishedTime: '2025-12-11T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/facebook-ads-atlanta-guide',
    images: [{
      url: 'https://driveleadmedia.com/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp',
      width: 1200,
      height: 630,
      alt: 'Facebook Ads Atlanta Complete Guide for Local Businesses',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Ads Atlanta: Complete Guide for Local Businesses (2025)',
    description: 'Learn costs, targeting, and ROI benchmarks for Facebook ads in Atlanta. Complete guide for local businesses.',
    images: ['https://driveleadmedia.com/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp'],
  },
  alternates: {
    canonical: '/blog/facebook-ads-atlanta-guide',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
