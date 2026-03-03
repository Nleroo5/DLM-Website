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
                viewBox="0 0 16 16"
                className="w-[1.2em] h-[1.2em] inline-block"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(0,128,251,0.7)) drop-shadow(0 0 16px rgba(0,128,251,0.4)) drop-shadow(0 0 30px rgba(111,90,246,0.3))',
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
                  fillRule="evenodd"
                  fill="url(#meta-gradient)"
                  d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
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
