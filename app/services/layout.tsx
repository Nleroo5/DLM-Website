import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook & Instagram Advertising Services | Drive Lead Media',
  description: 'Full-service Meta advertising in Atlanta: custom websites, professional video ads, campaign setup & optimization. Digital marketing services. Learn more.',
  keywords: 'facebook advertising services, instagram ads services, meta advertising agency, video ad production, custom website design, social media advertising atlanta, facebook ad campaigns, instagram marketing services',
  openGraph: {
    title: 'Facebook & Instagram Advertising Services | Drive Lead Media',
    description: 'Full-service Meta advertising including websites, video ads, and campaign management for Atlanta businesses.',
    type: 'website',
    url: 'https://driveleadmedia.com/services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook & Instagram Advertising Services | Drive Lead Media',
    description: 'Full-service Meta advertising including websites, video ads, and campaign management.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
