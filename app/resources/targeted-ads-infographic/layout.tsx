import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Meta Ads Infographic | Targeted Advertising Guide Atlanta | Drive Lead Media',
  description: 'Download free Meta targeted ads infographic. One-page visual guide to Facebook & Instagram advertising. Learn audience targeting, ad costs & strategy from Atlanta experts.',
  keywords: 'meta ads infographic, facebook ads guide, targeted advertising infographic, meta advertising guide atlanta, facebook ads cheat sheet, instagram ads guide download',
  openGraph: {
    title: 'Free Meta Targeted Ads Infographic Download',
    description: 'Visual guide to Meta advertising. Download our free infographic on Facebook & Instagram ad targeting strategies.',
    type: 'website',
  },
  alternates: {
    canonical: '/resources/targeted-ads-infographic',
  },
};

export default function TargetedAdsInfographicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
