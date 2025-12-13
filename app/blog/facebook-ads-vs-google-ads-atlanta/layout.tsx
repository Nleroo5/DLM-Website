import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses? (2025)',
  description: 'Compare Facebook Ads vs Google Ads costs, targeting, and ROI with data from WordStream, Meta, and Google. Industry benchmarks and sourced research to help Atlanta businesses choose the right platform.',
  keywords: 'facebook ads vs google ads, google ads vs facebook ads atlanta, should i use facebook or google ads, facebook ads or google ads for small business, meta ads vs google ads cost, which is better facebook or google ads, facebook vs google advertising atlanta, social media ads vs search ads',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses?',
    description: 'Compare costs, targeting, and ROI using data from WordStream, Meta, and Google. Real industry benchmarks to help you choose the right platform.',
    type: 'article',
    publishedTime: '2025-12-13T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/facebook-ads-vs-google-ads-atlanta',
    images: [{
      url: 'https://driveleadmedia.com/images/facebook-vs-google-ads-comparison-hero.webp',
      width: 1200,
      height: 630,
      alt: 'Facebook Ads vs Google Ads comparison showing cost differences and platform strengths for Atlanta businesses',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses?',
    description: 'Compare costs, targeting, and ROI with sourced data from WordStream, Meta, and Google research.',
    images: ['https://driveleadmedia.com/images/facebook-vs-google-ads-comparison-hero.webp'],
  },
  alternates: {
    canonical: '/blog/facebook-ads-vs-google-ads-atlanta',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
