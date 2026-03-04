'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ClientLogoBanner from '@/components/ClientLogoBanner';
import { trackEvent } from '@/components/MetaPixel';
import { LocalBusinessSchema, OrganizationSchema } from '@/components/StructuredDataSchemas';

// Dynamic imports for below-fold components
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: true });
const PortfolioShowcase = dynamic(() => import('@/components/PortfolioShowcase'), { ssr: true });
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), { ssr: true });
const CTABanner = dynamic(() => import('@/components/CTABanner'), { ssr: true });

export default function Home() {
  useEffect(() => {
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
      <ClientLogoBanner variant="dark" heading="You're in good company" />
      <AboutSection />
      <PortfolioShowcase />
      <ServicesSection />
      <CTABanner />
    </main>
  );
}
