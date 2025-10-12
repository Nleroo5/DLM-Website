import PortfolioHero from '@/components/PortfolioHero';
import VideoGrid from '@/components/VideoGrid';
import ActorLedVideos from '@/components/ActorLedVideos';
import ClientLogoBanner from '@/components/ClientLogoBanner';

export const metadata = {
  title: "Our Work - Drive Lead Media",
  description: "Meta advertising that converts. From 15-second hooks to full campaigns.",
};

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <PortfolioHero />
      <VideoGrid />
      <ActorLedVideos />
      <ClientLogoBanner />
    </main>
  );
}
