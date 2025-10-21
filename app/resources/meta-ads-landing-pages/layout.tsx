import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Your Meta Ads Need a Dedicated Landing Page | Drive Lead Media',
  description: 'Learn why dedicated landing pages convert 3-5X better than homepages for Meta ads. Discover the 5 essential elements that turn expensive clicks into customers.',
  keywords: 'Meta ads landing pages, Facebook ads landing page, Instagram ads conversion, landing page optimization, Meta ads conversion rate, dedicated landing page',
  openGraph: {
    title: 'Why Your Meta Ads Need a Dedicated Landing Page (Not Just Your Homepage)',
    description: 'Stop wasting your Meta ad budget on homepage traffic. Learn how dedicated landing pages can 2-3x your conversion rates.',
    type: 'article',
  },
};

export default function MetaAdsLandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
