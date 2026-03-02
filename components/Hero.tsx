'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroDashboard from '@/components/HeroDashboard';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[100px] xs:pt-[110px] sm:pt-[120px] pb-20 sm:pb-28 px-4 xs:px-5 sm:px-6"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5FA99F 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5FA99F 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #67E8F9 0%, transparent 70%)' }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center gap-12 sm:gap-16 lg:gap-20">
        {/* Headline + Subheadline + CTA */}
        <motion.div
          className="text-center max-w-[900px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] mb-5 sm:mb-7">
            We Find Your Customers Before They Find Your Competitors
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

        {/* Dashboard with glow effect */}
        <motion.div
          className="w-full flex justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          {/* Glow behind the dashboard */}
          <div
            className="absolute inset-0 -inset-x-4 -inset-y-4 rounded-3xl opacity-40 blur-[60px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, rgba(95,169,159,0.3) 0%, transparent 70%)' }}
          />
          <div className="relative">
            <HeroDashboard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
