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
          <p className="font-ui text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.625rem] text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-[650px] mx-auto lg:mx-0">
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
            {' '}
            <span className="inline-flex items-center align-middle mx-0.5">
              <svg viewBox="0 0 16 16" className="w-[1.1em] h-[1.1em] inline-block" style={{ filter: 'drop-shadow(0 0 6px rgba(24,119,242,0.7)) drop-shadow(0 0 16px rgba(24,119,242,0.4))' }}>
                <path fill="#1877F2" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
            </span>
            {' '}
            <span className="inline-flex items-center align-middle mx-0.5">
              <svg viewBox="0 0 16 16" className="w-[1.1em] h-[1.1em] inline-block" style={{ filter: 'drop-shadow(0 0 6px rgba(228,64,95,0.7)) drop-shadow(0 0 16px rgba(228,64,95,0.4))' }}>
                <defs>
                  <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#E1306C" />
                    <stop offset="75%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>
                <path fill="url(#ig-gradient)" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
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
