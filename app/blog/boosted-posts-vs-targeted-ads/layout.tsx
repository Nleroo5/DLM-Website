import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boosted Posts vs Targeted Ads: The Real Cost Difference | DLM',
  description: 'Facebook\'s Boost button delivers 2-3X worse results than targeted ads. See the industry benchmarks, technical breakdown, and real cost comparison.',
  keywords: 'boosted posts vs targeted ads, facebook boost post vs ads manager, should i boost my facebook posts, meta ads manager vs boost, facebook advertising atlanta, targeted advertising',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Boosted Posts vs. Targeted Ads: Why That Blue Button Is Costing You Money',
    description: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than proper targeted ads. Industry benchmarks and technical insights.',
    type: 'article',
    publishedTime: '2025-12-09T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/boosted-posts-vs-targeted-ads',
    images: [{
      url: 'https://driveleadmedia.com/images/facebook-boosted-posts-vs-meta-ads-manager-comparison.webp',
      width: 1200,
      height: 630,
      alt: 'Facebook boosted posts vs Meta Ads Manager targeted ads comparison',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boosted Posts vs. Targeted Ads: Stop Wasting Money',
    description: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than targeted ads.',
    images: ['https://driveleadmedia.com/images/facebook-boosted-posts-vs-meta-ads-manager-comparison.webp'],
  },
  alternates: {
    canonical: '/blog/boosted-posts-vs-targeted-ads',
  },
};

export default function BoostedPostsVsTargetedAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
