import PortfolioHero from '@/components/PortfolioHero';
import VideoGrid from '@/components/VideoGrid';
import ActorLedVideos from '@/components/ActorLedVideos';
import MotionGraphics from '@/components/MotionGraphics';
import ClientLogoBanner from '@/components/ClientLogoBanner';
import Link from 'next/link';

export default function VideoAdsPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-black pt-[140px] sm:pt-[160px] px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/case-studies"
            className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors text-sm font-heading font-semibold tracking-wide"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </div>
      <PortfolioHero />
      <VideoGrid />
      <ActorLedVideos />
      <MotionGraphics />
      <ClientLogoBanner />
    </main>
  );
}
