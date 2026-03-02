'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroDashboard from '@/components/HeroDashboard';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[90px] xs:pt-[100px] sm:pt-[110px] pb-16 sm:pb-20 px-4 xs:px-5 sm:px-6"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center gap-10 sm:gap-14 lg:gap-16">
        {/* Headline + Subheadline + CTA */}
        <motion.div
          className="text-center max-w-[900px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-4 sm:mb-6">
            We Build Your Ads, Find Your Customers, Drive Them to Your Site
          </h1>
          <p className="font-ui text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-[700px] mx-auto">
            Data-driven Meta advertising and conversion-focused web design that turns clicks into customers.
          </p>
          <Link
            href="/contact"
            className="inline-block font-ui text-[1rem] px-10 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border-white/80 transition-all duration-400 hover:transform hover:scale-105 backdrop-blur-sm"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}
