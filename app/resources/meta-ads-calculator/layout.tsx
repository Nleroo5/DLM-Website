import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads ROI Calculator: Facebook & Instagram Costs | DLM',
  description: 'Free Meta ads calculator: estimate costs, leads and ROI for Facebook and Instagram campaigns, using industry benchmarks for Atlanta businesses.',
  keywords: 'meta ads calculator, facebook ads cost calculator atlanta, instagram ads budget, meta advertising cost atlanta, facebook ads roi calculator, cost per lead calculator, ad budget estimator atlanta',
  openGraph: {
    title: 'Meta Ads ROI Calculator | Facebook & Instagram Ads Cost Calculator',
    description: 'Free Meta ads calculator with real industry data. Calculate your Facebook & Instagram advertising costs, leads, and ROI instantly.',
    type: 'website',
    url: 'https://driveleadmedia.com/resources/meta-ads-calculator',
    images: [{
      url: 'https://driveleadmedia.com/images/meta-ads-calculator-og.webp',
      width: 1200,
      height: 630,
      alt: 'Meta Ads ROI Calculator - Free Facebook & Instagram advertising budget tool',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Meta Ads ROI Calculator',
    description: 'Calculate your Facebook & Instagram advertising costs, leads, and ROI instantly.',
    images: ['https://driveleadmedia.com/images/meta-ads-calculator-og.webp'],
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
