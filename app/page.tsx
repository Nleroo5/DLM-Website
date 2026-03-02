'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ParticleTextSection from '@/components/ParticleTextSection';
import { trackEvent } from '@/components/MetaPixel';
import { LocalBusinessSchema, OrganizationSchema } from '@/components/StructuredDataSchemas';

// Dynamic imports for below-fold components to reduce initial bundle size
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const FeaturedGuides = dynamic(() => import('@/components/FeaturedGuides'), { ssr: true });
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
      {/* Structured Data for SEO */}
      <LocalBusinessSchema />
      <OrganizationSchema />

      <Hero />
      <HowItWorks />

      {/* Unified background wrapper for Testimonials and all sections below */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[hsl(204,97%,15%)] to-[hsl(204,97%,20%)]">
        {/* Unified grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <Testimonials />
        <MeetTheTeam />
        <ParticleTextSection />
        <FeaturedGuides />
        <TargetedAdsCTA />
      </div>
    </main>
  );
}
