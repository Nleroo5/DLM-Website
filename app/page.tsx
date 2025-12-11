'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ParticleTextSection from '@/components/ParticleTextSection';
import { trackEvent } from '@/components/MetaPixel';

// Dynamic imports for below-fold components to reduce initial bundle size
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const MeetTheTeam = dynamic(() => import('@/components/MeetTheTeam'), { ssr: true });
const TargetedAdsCTA = dynamic(() => import('@/components/TargetedAdsCTA'), { ssr: true });

export default function Home() {
  useEffect(() => {
    // Track ViewContent for homepage
    trackEvent('ViewContent', {
      content_name: 'Homepage',
      content_type: 'page',
      content_category: 'Home'
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#000000]">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <MeetTheTeam />
      <ParticleTextSection />
      <TargetedAdsCTA />
    </main>
  );
}
