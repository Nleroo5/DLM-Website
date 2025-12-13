'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ServiceSchema, BreadcrumbSchema } from '@/components/StructuredDataSchemas';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animated List Item Component with Opacity Wave
function AnimatedListItem({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0.4 }}
      animate={isInView ? {
        opacity: [0.4, 1, 0.7, 1],
      } : { opacity: 0.4 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut"
      }}
      className="flex items-start gap-3"
    >
      {children}
    </motion.li>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#000000] relative">
      {/* Structured Data for SEO */}
      <ServiceSchema
        serviceName="Meta Advertising Management"
        description="Professional Facebook and Instagram advertising campaign setup, management, and optimization for Atlanta businesses. Includes audience targeting, ad creative, Meta Pixel setup, and ongoing performance optimization."
        url="https://driveleadmedia.com/services"
      />
      <ServiceSchema
        serviceName="Custom Website Design & Development"
        description="Mobile-responsive website design and development with Next.js and React. Fast, modern websites engineered to convert visitors into customers and rank well in search results."
        url="https://driveleadmedia.com/services"
      />
      <ServiceSchema
        serviceName="Video Ad Production"
        description="Professional video ad creation for Facebook and Instagram. Actor-led videos, motion graphics, and custom video content optimized for Meta advertising campaigns."
        url="https://driveleadmedia.com/services"
      />
      <ServiceSchema
        serviceName="Landing Page Design & Optimization"
        description="High-converting landing pages optimized for Meta ad campaigns. Conversion-focused architecture built specifically for paid advertising traffic."
        url="https://driveleadmedia.com/services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />
      {/* Background gradient orbs */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#5FA99F] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] bg-[#85C7B3] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-[#5FA99F] opacity-10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-[140px] pb-[80px] px-6 bg-gradient-to-br from-[#0A0A0A] to-[#000000] relative">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-heading text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] font-bold text-white mb-6 leading-[1.1]">
            We Build Your Ads, Find Your Customers, Drive Them to Your Site
          </h1>
          <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.25rem] text-[#5FA99F] max-w-[800px] mx-auto leading-[1.6]">
            Complete Meta advertising and web design for businesses ready to grow
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[80px] px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Service 1: Custom Websites */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-6">
                  Custom Website Design
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.1875rem] text-gray-300 leading-[1.7] mb-6">
                  Fast, modern websites engineered to convert visitors into customers and rank well in search results.
                </p>
                <ul className="space-y-4 mb-8">
                  <AnimatedListItem index={0}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Mobile-optimized design that performs flawlessly across all devices</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={1}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Fully custom, professional websites built from the ground up, no templates</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={2}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Optimized page speed for improved search visibility</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={3}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Conversion-focused architecture built for ad traffic</span>
                  </AnimatedListItem>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.3)] hover:border-[#5FA99F]/50 hover:shadow-[0_0_40px_rgba(95,169,159,0.4)] transition-all duration-400">
                  <Image
                    src="/images/custom-website-design-development-services-icon.webp"
                    alt="Custom Website Design"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Video & Image Ads */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.3)] hover:border-[#5FA99F]/50 hover:shadow-[0_0_40px_rgba(95,169,159,0.4)] transition-all duration-400">
                  <Image
                    src="/images/creative-design-services-custom-branding-icon.webp"
                    alt="Video and Image Ads"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-6">
                  Professional Video & Image Ads
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.1875rem] text-gray-300 leading-[1.7] mb-6">
                  High-quality video and image ads designed to capture attention and drive qualified clicks on Facebook and Instagram.
                </p>
                <ul className="space-y-4 mb-8">
                  <AnimatedListItem index={0}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Professional creative that represents your brand effectively</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={1}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Strategic messaging tailored to your target audience</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={2}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Multiple ad variations for performance testing</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={3}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Mobile-optimized formats for maximum impact</span>
                  </AnimatedListItem>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: Complete Campaign Setup */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-6">
                  Complete Campaign Setup
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.1875rem] text-gray-300 leading-[1.7] mb-6">
                  Full campaign configuration and audience targeting, from identifying your ideal customers to tracking every lead that comes through.
                </p>
                <ul className="space-y-4 mb-8">
                  <AnimatedListItem index={0}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Precision audience targeting based on demographics, interests, and behavior</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={1}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Strategic budget allocation across your campaigns</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={2}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Complete conversion tracking for leads and sales</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={3}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Professional account structure for long-term performance</span>
                  </AnimatedListItem>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.3)] hover:border-[#5FA99F]/50 hover:shadow-[0_0_40px_rgba(95,169,159,0.4)] transition-all duration-400">
                  <Image
                    src="/images/audience-targeting-strategy-marketing-services-icon.webp"
                    alt="Complete Campaign Setup"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Continuous Improvement */}
          <div className="mb-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.3)] hover:border-[#5FA99F]/50 hover:shadow-[0_0_40px_rgba(95,169,159,0.4)] transition-all duration-400">
                  <Image
                    src="/images/website-performance-optimization-speed-testing-icon.webp"
                    alt="Continuous Improvement"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-6">
                  Continuous Improvement
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] lg:text-[1.1875rem] text-gray-300 leading-[1.7] mb-6">
                  Ongoing testing, optimization, and budget management to maximize results and eliminate underperforming elements.
                </p>
                <ul className="space-y-4 mb-8">
                  <AnimatedListItem index={0}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Regular testing of new ad creative and messaging</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={1}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Data-driven budget adjustments to improve cost efficiency</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={2}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Performance analysis and optimization recommendations</span>
                  </AnimatedListItem>
                  <AnimatedListItem index={3}>
                    <span className="text-[#5FA99F] text-[1.25rem] font-bold">✓</span>
                    <span className="font-body text-[1rem] md:text-[1.0625rem] lg:text-[1.125rem] text-gray-300">Strategic refinements based on campaign results</span>
                  </AnimatedListItem>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] px-6 bg-gradient-to-br from-[#0A0A0A] to-[#000000] relative">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold text-white mb-6">
            Ready to See What We Can Do For You?
          </h2>
          <p className="font-body text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] text-[#5FA99F] mb-8 leading-[1.6]">
            Schedule a free strategy call to discuss your business and how we can help you grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 35px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block rounded-lg"
            >
              <Link
                href="/contact"
                className="inline-block font-heading text-sm px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                Schedule Your Free Call
              </Link>
            </motion.div>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 35px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="inline-block rounded-lg"
            >
              <Link
                href="/portfolio"
                className="inline-block font-heading text-sm px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
