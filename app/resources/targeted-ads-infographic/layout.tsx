import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Targeted Ads Infographic - Free Download | Drive Lead Media',
  description: 'Download our free one-page infographic guide to Meta Targeted Ads. Learn how to reach your ideal customers with precision advertising.',
};

export default function TargetedAdsInfographicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
