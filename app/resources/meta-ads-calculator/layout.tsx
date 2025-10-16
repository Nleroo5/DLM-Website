import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Cost Calculator - Free Budget Estimator | Drive Lead Media',
  description: 'Calculate your Meta advertising costs with our free, data-driven calculator. Get instant estimates for Facebook and Instagram ad budgets, cost per lead, ROI projections, and reach based on real industry benchmarks.',
  keywords: 'meta ads calculator, facebook ads cost calculator, instagram ads budget, meta advertising cost, facebook ads pricing, cost per lead calculator, ad budget calculator',
  openGraph: {
    title: 'Meta Ads Cost Calculator - Drive Lead Media',
    description: 'Free Meta advertising cost calculator with real industry data. Estimate your Facebook and Instagram ad costs instantly.',
    type: 'website',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
