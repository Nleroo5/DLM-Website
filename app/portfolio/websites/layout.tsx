import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Portfolio - Custom Web Design & Development | Drive Lead Media',
  description: 'View our portfolio of custom websites built for Atlanta businesses. Mobile-responsive, fast-loading websites designed to convert visitors into customers.',
  keywords: 'web design portfolio, website development portfolio, Atlanta web design, custom websites, Next.js websites, responsive web design, business websites',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://driveleadmedia.com/portfolio/websites',
    siteName: 'Drive Lead Media',
    title: 'Website Portfolio | Drive Lead Media',
    description: 'Custom websites built for Atlanta businesses. Mobile-responsive, fast-loading, and designed to convert.',
    images: [
      {
        url: '/images/drive-lead-media-full-service-marketing-agency-brand.webp',
        width: 1200,
        height: 630,
        alt: 'Drive Lead Media Website Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Portfolio | Drive Lead Media',
    description: 'Custom websites built for Atlanta businesses.',
    images: ['/images/drive-lead-media-full-service-marketing-agency-brand.webp'],
  },
  alternates: {
    canonical: '/portfolio/websites',
  },
};

export default function WebsitesPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
