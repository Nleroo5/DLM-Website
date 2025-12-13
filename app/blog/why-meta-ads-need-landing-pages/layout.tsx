import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Meta Ads Need a Dedicated Landing Page | Drive Lead Media',
  description: 'Learn how dedicated landing pages 2-3x your Meta ads conversion rates. Expert guide covering 5 essential elements & ROI optimization. Get the guide.',
  keywords: 'meta ads landing pages, facebook ads landing page, instagram ads conversion, landing page optimization, meta ads ROI, conversion rate optimization',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    description: 'The one change that can 2-3x your conversion rates and transform your advertising ROI.',
    type: 'article',
    publishedTime: '2025-10-20T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/why-meta-ads-need-landing-pages',
    images: [{
      url: 'https://driveleadmedia.com/images/professional-landing-page-design-conversion-optimization.webp',
      width: 1200,
      height: 630,
      alt: 'Meta Ads Landing Page Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    description: 'The one change that can 2-3x your Meta ads conversion rates. Learn the 5 essential elements.',
    images: ['https://driveleadmedia.com/images/professional-landing-page-design-conversion-optimization.webp'],
  },
  alternates: {
    canonical: '/blog/why-meta-ads-need-landing-pages',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
