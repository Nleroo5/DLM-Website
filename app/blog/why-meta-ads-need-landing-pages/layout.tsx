import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Meta Ads Need a Dedicated Landing Page | Drive Lead Media',
  description: 'Learn how dedicated landing pages can 2-3x your Meta ads conversion rates. Expert guide covering the 5 essential elements, message match, and ROI optimization.',
  keywords: 'meta ads landing pages, facebook ads landing page, instagram ads conversion, landing page optimization, meta ads ROI, conversion rate optimization',
  openGraph: {
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    description: 'The one change that can 2-3x your conversion rates and transform your advertising ROI.',
    type: 'article',
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
