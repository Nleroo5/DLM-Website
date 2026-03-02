import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta\'s Andromeda Algorithm Explained (2026): Complete Guide for Advertisers',
  description: 'Learn how Meta\'s Andromeda algorithm is revolutionizing Facebook and Instagram ads in 2026. Discover how creative-based targeting delivers 8-17% better conversions with proven strategies and real examples.',
  keywords: 'meta andromeda algorithm, facebook ads 2026, meta advantage plus, creative based targeting, facebook algorithm update, meta ai advertising, instagram ads optimization, advantage plus creative, meta ads machine learning, facebook advertising strategy 2026',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Meta\'s Andromeda Algorithm Explained (2026): Complete Guide for Advertisers',
    description: 'Learn how Meta\'s Andromeda algorithm is revolutionizing Facebook and Instagram ads in 2026. Discover how creative-based targeting delivers 8-17% better conversions with proven strategies and real examples.',
    type: 'article',
    publishedTime: '2026-01-07T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/meta-andromeda-algorithm-2026',
    images: [{
      url: 'https://driveleadmedia.com/images/meta-andromeda-algorithm-ai-neural-network-hero.webp',
      width: 1920,
      height: 1280,
      alt: 'Meta Andromeda algorithm 2026 - AI neural network visualization showing machine learning technology powering Facebook and Instagram advertising optimization',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta\'s Andromeda Algorithm Explained (2026): Complete Guide',
    description: 'Learn how Meta\'s Andromeda algorithm is revolutionizing Facebook and Instagram ads in 2026. Creative-based targeting delivers 8-17% better conversions.',
    images: ['https://driveleadmedia.com/images/meta-andromeda-algorithm-ai-neural-network-hero.webp'],
  },
  alternates: {
    canonical: '/blog/meta-andromeda-algorithm-2026',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
