import dynamic from 'next/dynamic';
import Hero, { MobileCTASection } from '@/components/Hero';
import ParticleTextSection from '@/components/ParticleTextSection';

// Dynamic imports for below-fold components to reduce initial bundle size
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const MeetTheTeam = dynamic(() => import('@/components/MeetTheTeam'), { ssr: true });
const TargetedAdsCTA = dynamic(() => import('@/components/TargetedAdsCTA'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <MeetTheTeam />
      <ParticleTextSection />
      <MobileCTASection />
      <TargetedAdsCTA />
    </main>
  );
}
