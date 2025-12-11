import PortfolioHero from '@/components/PortfolioHero';
import VideoGrid from '@/components/VideoGrid';
import ActorLedVideos from '@/components/ActorLedVideos';
import MotionGraphics from '@/components/MotionGraphics';
import ClientLogoBanner from '@/components/ClientLogoBanner';
import { VideoObjectSchema } from '@/components/StructuredDataSchemas';

export default function VideoAdsPortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* VideoObject Schemas for SEO */}
      <VideoObjectSchema
        name="Dream Pediatric Dentistry - Meta Ad Campaign Video"
        description="Professional video ad for Dream Pediatric Dentistry and Orthodontics showcasing dental services for children in Atlanta"
        thumbnailUrl="/images/dream-big-atlanta-business-consulting-brand-logo.webp"
        contentUrl="https://www.youtube.com/watch?v=2qwhz4K9ZXg"
        uploadDate="2024-01-15"
        duration="PT1M"
        embedUrl="https://www.youtube.com/embed/2qwhz4K9ZXg"
      />
      <VideoObjectSchema
        name="The Yoga Lounge - Meta Ad Campaign Video"
        description="Engaging video advertisement for The Yoga Lounge in Atlanta promoting yoga classes and wellness services"
        thumbnailUrl="/images/yoga-atlanta-creative-director-designer-team-member.webp"
        contentUrl="https://www.youtube.com/watch?v=eoGhu1NU3jk"
        uploadDate="2024-02-20"
        duration="PT30S"
        embedUrl="https://www.youtube.com/embed/eoGhu1NU3jk"
      />
      <VideoObjectSchema
        name="Village Pediatrics - Healthcare Marketing Video"
        description="Professional healthcare marketing video for Village Pediatrics of St. Augustine featuring Dr. Austin Dupont"
        thumbnailUrl="/images/business-owner-testimonial-satisfied-client-five-star-review.webp"
        contentUrl="https://www.youtube.com/watch?v=MkbWGedLbVY"
        uploadDate="2024-03-10"
        duration="PT1M"
        embedUrl="https://www.youtube.com/embed/MkbWGedLbVY"
      />
      <VideoObjectSchema
        name="Actor-Led Facebook Ad Production - Sample"
        description="Professional actor-led video ad production for Facebook and Instagram advertising campaigns, no filming required from clients"
        thumbnailUrl="/images/atlanta-facebook-instagram-video-ads-production-agency.webp"
        contentUrl="https://www.youtube.com/watch?v=4JKRwEdejUE"
        uploadDate="2024-04-05"
        duration="PT45S"
        embedUrl="https://www.youtube.com/embed/4JKRwEdejUE"
      />

      <PortfolioHero />
      <VideoGrid />
      <ActorLedVideos />
      <MotionGraphics />
      <ClientLogoBanner />
    </main>
  );
}
