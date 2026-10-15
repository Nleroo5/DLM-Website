'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';
import GoogleRating from '@/components/GoogleRating';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-[130px] xs:pt-[140px] sm:pt-[120px] pb-28 sm:pb-24 lg:pb-20 px-4 xs:px-5 sm:px-6"
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
      {/* Phones: headline, then video, then the rest. Desktop: text left (headline over
          the rest), video right spanning both rows. */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 sm:gap-y-10 lg:gap-y-0 lg:gap-x-16">
        {/* Left: Headline */}
        <motion.div
          className="relative z-10 text-center lg:text-left lg:col-start-1 lg:row-start-1 lg:self-end"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-[1.75rem] xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] font-bold text-white leading-[1.1] lg:mb-7">
            We Find Your Customers Before They Find Your Competitors
          </h1>
        </motion.div>

        {/* Left: Description, buttons, rating */}
        <motion.div
          className="relative z-10 order-3 lg:order-none text-center lg:text-left lg:col-start-1 lg:row-start-2 lg:self-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
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
          <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <GrowthPlanButton
              source="homepage_hero"
              className="group cta-sheen relative overflow-hidden inline-block font-ui text-[1rem] px-8 sm:px-10 py-4 bg-[#5FA99F] text-[#061210] font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:bg-[#6fbbb0] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] hover:scale-[1.02] active:scale-[0.97] active:duration-100 transition-all duration-300"
            >
              Get started: it&apos;s free <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </GrowthPlanButton>
            <Link
              href="#work"
              className="inline-block font-ui text-[1rem] px-8 py-4 text-white font-semibold rounded-xl border border-white/25 hover:border-white/60 transition-[border-color,transform] duration-200 active:scale-[0.97] active:duration-100"
            >
              See our work
            </Link>
          </div>
          <div className="mt-5 flex flex-col items-center lg:items-start gap-1.5">
            <GoogleRating animate="load" />
            <p className="font-ui text-[0.85rem] text-gray-500">
              4 quick questions · About 60 seconds · Reviewed by a real person
            </p>
          </div>
        </motion.div>

        {/* Right: "After the click" explainer video */}
        <motion.div
          className="w-full relative order-2 lg:order-none flex justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Glow in the video's own background colors (#002E3F top, #002A38 middle,
                #001C28 bottom) so the faded video edges melt into the hero. */}
            <div
              className="hero-glow-breathe absolute -inset-x-[90%] -inset-y-[6%] lg:-inset-x-[45%] lg:-inset-y-[14%] rounded-[50%] blur-[60px] lg:blur-[70px] pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, #002e3f, #002a38 50%, #001c28)' }}
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -inset-x-[120%] -inset-y-[40%] pointer-events-none"
              style={{ background: 'radial-gradient(closest-side, rgba(0,42,56,0.55), rgba(0,42,56,0.18) 55%, rgba(0,42,56,0) 100%)' }}
              aria-hidden="true"
            />
            <HeroVideo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
