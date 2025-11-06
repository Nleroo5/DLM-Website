import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads ROI Calculator | Facebook & Instagram Ads Cost Calculator Atlanta',
  description: 'Free Meta ads calculator. Calculate costs, leads & ROI for Facebook & Instagram campaigns. Industry-specific data for Atlanta businesses. Get instant projections.',
  keywords: 'meta ads calculator, facebook ads cost calculator atlanta, instagram ads budget, meta advertising cost atlanta, facebook ads roi calculator, cost per lead calculator, ad budget estimator atlanta',
  openGraph: {
    title: 'Meta Ads ROI Calculator | Facebook & Instagram Ads Cost Calculator',
    description: 'Free Meta ads calculator with real industry data. Calculate your Facebook & Instagram advertising costs, leads, and ROI instantly.',
    type: 'website',
  },
  alternates: {
    canonical: '/resources/meta-ads-calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
