import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Ads Portfolio - Meta Advertising Creative | Drive Lead Media',
  description: 'View our portfolio of Meta advertising video content for Facebook and Instagram. Engaging video ads created for Atlanta businesses.',
  keywords: 'video ads portfolio, meta ads creative, facebook video ads, instagram video ads, social media video production, meta advertising portfolio, video ad examples',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://driveleadmedia.com/portfolio/video-ads',
    siteName: 'Drive Lead Media',
    title: 'Video Ads Portfolio | Drive Lead Media',
    description: 'Meta advertising video content for Facebook and Instagram. Engaging video ads created for Atlanta businesses.',
    images: [
      {
        url: '/images/drive-lead-media-atlanta-digital-marketing-agency-logo.png',
        width: 1200,
        height: 630,
        alt: 'Drive Lead Media Video Ads Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Ads Portfolio | Drive Lead Media',
    description: 'Meta advertising video content created for Atlanta businesses.',
    images: ['/images/drive-lead-media-atlanta-digital-marketing-agency-logo.png'],
  },
  alternates: {
    canonical: '/portfolio/video-ads',
  },
};

export default function VideoAdsPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
