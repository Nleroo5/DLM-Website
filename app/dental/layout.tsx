import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facebook Ads for Dental Practices in Atlanta | Drive Lead Media',
  description: 'Meta advertising for Atlanta dental practices. Professional video ads, patient targeting & campaign management. No filming required. Book a consultation today.',
  keywords: 'dental practice facebook ads atlanta, dentist instagram advertising, dental marketing atlanta, facebook ads for dentists, dental practice social media ads',
  openGraph: {
    title: 'Facebook Ads for Dental Practices in Atlanta',
    description: 'Professional Meta advertising for dental practices. Actor-led videos, patient targeting, and proven results.',
    type: 'website',
    url: 'https://driveleadmedia.com/dental',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Ads for Dental Practices in Atlanta',
    description: 'Professional Meta advertising for dental practices. No filming required, 14-day launch.',
  },
  alternates: {
    canonical: '/dental',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DentalIntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
