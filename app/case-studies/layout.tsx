import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Drive Lead Media - Real Results for Local Businesses',
  description:
    'See how Drive Lead Media helps local businesses grow with Meta ads, custom websites, and professional video creative. Real results from real clients.',
  keywords: [
    'case studies',
    'digital marketing results',
    'Meta ads case studies',
    'Facebook ads results',
    'local business marketing',
    'Drive Lead Media portfolio',
    'Atlanta marketing agency results',
  ],
  openGraph: {
    title: 'Case Studies | Drive Lead Media',
    description:
      'See how Drive Lead Media helps local businesses grow with Meta ads, custom websites, and professional video creative.',
    url: 'https://driveleadmedia.com/case-studies',
    siteName: 'Drive Lead Media',
    type: 'website',
    images: [{
      url: "https://driveleadmedia.com/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Drive Lead Media - Custom Websites & Meta Advertising in Atlanta",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Drive Lead Media',
    description:
      'See how Drive Lead Media helps local businesses grow with Meta ads, custom websites, and professional video creative.',
    images: ["https://driveleadmedia.com/images/og-image.webp"],
  },
  alternates: {
    canonical: 'https://driveleadmedia.com/case-studies',
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
