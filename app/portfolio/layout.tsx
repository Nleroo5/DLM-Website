import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Websites & Video Ads | Drive Lead Media',
  description: 'View our portfolio of custom websites and Meta advertising video content built for Atlanta businesses. Professional web design, development, and video production.',
  keywords: 'portfolio, web design portfolio, video ads portfolio, Atlanta web design, meta ads creative, website development, video production, social media ads',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://driveleadmedia.com/portfolio',
    siteName: 'Drive Lead Media',
    title: 'Our Portfolio | Drive Lead Media',
    description: 'Custom websites and Meta advertising content built for Atlanta businesses.',
    images: [
      {
        url: '/images/dlm-logo.png',
        width: 1200,
        height: 630,
        alt: 'Drive Lead Media Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | Drive Lead Media',
    description: 'Custom websites and Meta advertising content for Atlanta businesses.',
    images: ['/images/dlm-logo.png'],
  },
  alternates: {
    canonical: '/portfolio',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
