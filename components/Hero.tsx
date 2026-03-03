'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroDashboard from '@/components/HeroDashboard';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-[100px] xs:pt-[110px] sm:pt-[120px] pb-16 sm:pb-20 px-4 xs:px-5 sm:px-6"
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

      {/* Split screen layout: stacked on mobile, side-by-side on lg+ */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
        {/* Left: Text */}
        <motion.div
          className="text-center lg:text-left lg:w-1/2 lg:flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-bold text-white leading-[1.1] mb-5 sm:mb-7">
            We Find Your Customers Before They Find Your Competitors
          </h1>
          <p className="font-ui text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.125rem] xl:text-[1.25rem] text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-[600px] mx-auto lg:mx-0">
            Data-driven{' '}
            <span className="inline-flex items-center align-middle mx-1">
              <svg
                viewBox="0 0 512 512"
                className="w-[1.1em] h-[1.1em] inline-block"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0,136,255,0.6)) drop-shadow(0 0 20px rgba(0,136,255,0.3))',
                }}
              >
                <defs>
                  <linearGradient id="meta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0080FB" />
                    <stop offset="50%" stopColor="#6F5AF6" />
                    <stop offset="100%" stopColor="#A033FF" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#meta-gradient)"
                  d="M412.7 105.5c-30.4-44.5-73.8-68.4-118.7-68.4-40.3 0-73.7 20.4-103.7 62.4L170 130.5l-20.3-31c-30-45.9-63.4-62.4-103.7-62.4C17.8 37.1 0 63.5 0 131.7c0 62.2 30.3 133.3 77.5 192.3C118.2 374.4 157 404 197 428c15.3 9.2 31.2 20.7 46.7 34.2 6.5 5.7 14.8 8.8 23.3 8.8 8.5 0 16.8-3.1 23.3-8.8 15.5-13.5 31.4-25 46.7-34.2 40-24 78.8-53.6 119.5-104 47.2-59 77.5-130.1 77.5-192.3 0-68.2-17.8-94.6-46-126.2h-75.3zM256 386c-15.2-14.7-28.7-26.2-41.2-33.7-35.8-21.5-70.6-48-107-94.3C67.2 206.7 42 146.7 42 131.7c0-46.8 8-52.6 4 52.6 24 0 26 11.2 42 32.7l68.5 104.5c6 9.2 16.2 14.8 27.2 14.8s21.2-5.6 27.2-14.8l48.8-74.8c20-30.7 41.7-50.3 68.3-50.3s64.2 14.4 87.4 48.4c11.7 17.2 18.6 26.8 18.6 69.6 0 15-25.2 75-65.8 126.3-36.4 46.3-71.2 72.8-107 94.3-12.5 7.5-26 19-41.2 33.7z"
                />
              </svg>
            </span>
            {' '}advertising and conversion-focused web design that turns clicks into customers.
          </p>
          <Link
            href="/contact"
            className="inline-block font-ui text-[1rem] px-10 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border-white/80 transition-all duration-400 hover:transform hover:scale-105 backdrop-blur-sm"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Right: Dashboard */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          {/* Glow behind the dashboard */}
          <div
            className="absolute -inset-4 rounded-3xl opacity-40 blur-[60px] pointer-events-none"
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
