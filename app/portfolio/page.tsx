import PortfolioHero from '@/components/PortfolioHero';
import VideoGrid from '@/components/VideoGrid';
import ActorLedVideos from '@/components/ActorLedVideos';
import MotionGraphics from '@/components/MotionGraphics';
import ClientLogoBanner from '@/components/ClientLogoBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Work - Meta Ad Portfolio | Drive Lead Media",
  description: "Meta advertising that converts. From 15-second hooks to full campaigns. View our portfolio of actor-led videos, motion graphics, and high-performing Meta ads for local businesses.",
  keywords: "meta ads portfolio, facebook ads examples, instagram ads portfolio, video ad examples, actor-led video ads, motion graphics ads, meta advertising case studies, social media ad portfolio, atlanta ad agency portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driveleadmedia.com/portfolio",
    siteName: "Drive Lead Media",
    title: "Our Work - Meta Ad Portfolio | Drive Lead Media",
    description: "Meta advertising that converts. From 15-second hooks to full campaigns. View our portfolio of actor-led videos, motion graphics, and high-performing Meta ads.",
    images: [
      {
        url: "/images/dlm-logo.png",
        width: 1200,
        height: 630,
        alt: "Drive Lead Media Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - Meta Ad Portfolio | Drive Lead Media",
    description: "Meta advertising that converts. From 15-second hooks to full campaigns. View our portfolio of actor-led videos and motion graphics.",
    images: ["/images/dlm-logo.png"],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <VideoGrid />
      <ActorLedVideos />
      <MotionGraphics />
      <ClientLogoBanner />
    </main>
  );
}
