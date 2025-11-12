import PortfolioHero from '@/components/PortfolioHero';
import VideoGrid from '@/components/VideoGrid';
import ActorLedVideos from '@/components/ActorLedVideos';
import MotionGraphics from '@/components/MotionGraphics';
import ClientLogoBanner from '@/components/ClientLogoBanner';

export default function VideoAdsPortfolioPage() {
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
