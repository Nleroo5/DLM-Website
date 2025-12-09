import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boosted Posts vs. Targeted Ads: Why That Blue Button Is Costing You Money',
  description: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than proper targeted ads. Industry benchmarks, technical insights, and the real cost difference.',
  keywords: 'boosted posts vs targeted ads, facebook boost post vs ads manager, should i boost my facebook posts, meta ads manager vs boost, facebook advertising atlanta, targeted advertising',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Boosted Posts vs. Targeted Ads: Why That Blue Button Is Costing You Money',
    description: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than proper targeted ads. Industry benchmarks and technical insights.',
    type: 'article',
    publishedTime: '2025-12-09T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    images: ['/images/hero-meta-boosted.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boosted Posts vs. Targeted Ads: Stop Wasting Money',
    description: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than targeted ads.',
    images: ['/images/hero-meta-boosted.webp'],
  },
};

export default function BoostedPostsVsTargetedAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
