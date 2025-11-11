import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Meta Ads Need a Dedicated Landing Page | Drive Lead Media',
  description: 'Learn how dedicated landing pages can 2-3x your Meta ads conversion rates. Expert guide covering the 5 essential elements, message match, and ROI optimization.',
  keywords: 'meta ads landing pages, facebook ads landing page, instagram ads conversion, landing page optimization, meta ads ROI, conversion rate optimization',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    description: 'The one change that can 2-3x your conversion rates and transform your advertising ROI.',
    type: 'article',
    publishedTime: '2025-10-20T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    images: [{
      url: '/images/dlm-logo2.png',
      width: 1200,
      height: 630,
      alt: 'Meta Ads Landing Page Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    description: 'The one change that can 2-3x your Meta ads conversion rates. Learn the 5 essential elements.',
    images: ['/images/dlm-logo2.png'],
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
