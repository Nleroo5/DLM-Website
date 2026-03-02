import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Landing Pages Guide | How to Convert Facebook & Instagram Ad Clicks Atlanta',
  description: 'Dedicated landing pages convert 3-5X better than homepages for Meta ads. Learn the 5 essential elements that turn Facebook & Instagram clicks into customers.',
  keywords: 'meta ads landing pages, facebook ads landing page atlanta, instagram ads conversion, landing page optimization, meta ads conversion rate atlanta, dedicated landing page design',
  openGraph: {
    title: 'Why Your Meta Ads Need a Dedicated Landing Page | Convert More Facebook & Instagram Clicks',
    description: 'Stop wasting Meta ad budget. Dedicated landing pages convert 2-3X better than homepages. Free guide from Atlanta Meta ads experts.',
    type: 'article',
  },
  alternates: {
    canonical: '/resources/meta-ads-landing-pages',
  },
};

export default function MetaAdsLandingPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
