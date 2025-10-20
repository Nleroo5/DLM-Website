'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  // Set video playback speed
  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  // Animation variants for staggered fade-in effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full min-h-screen flex items-end justify-center overflow-hidden pt-[120px] pb-[80px] px-6" suppressHydrationWarning>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src="/Videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/65 z-[1]"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-[1200px] text-white w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Main Headline */}
        <motion.h1
          className="font-serif text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[4rem] xl:text-[5rem] font-semibold leading-[1.1] text-[#F8F6F3] mb-[clamp(60px,15vh,120px)] md:mb-[clamp(105px,21vh,180px)]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          suppressHydrationWarning
        >
          Stop wasting money on ads that don't work
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col gap-6 justify-center items-center md:flex-row md:gap-8"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.7 }}
          suppressHydrationWarning
        >
          {/* Primary CTA */}
          <Link
            href="/portfolio"
            className="relative overflow-hidden bg-transparent text-[#F8F6F3] px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 border border-[rgba(248,246,243,0.2)] rounded-xl text-[0.9rem] sm:text-[0.95rem] md:text-[1.0625rem] font-medium font-sans no-underline inline-block cursor-pointer transition-all duration-300 backdrop-blur-sm hover:transform hover:-translate-y-0.5 hover:border-[rgba(95,169,159,0.4)] hover:bg-[rgba(95,169,159,0.05)] hover:shadow-[0_8px_20px_rgba(95,169,159,0.15)] focus:outline focus:outline-2 focus:outline-[#5FA99F] focus:outline-offset-4 w-full max-w-[320px] group text-center"
          >
            <span className="relative z-10">View Our Work</span>
          </Link>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="relative overflow-hidden bg-transparent text-[#F8F6F3] px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 border border-[rgba(248,246,243,0.2)] rounded-xl text-[0.9rem] sm:text-[0.95rem] md:text-[1.0625rem] font-medium font-sans no-underline inline-block cursor-pointer transition-all duration-300 backdrop-blur-sm hover:transform hover:-translate-y-0.5 hover:border-[rgba(95,169,159,0.4)] hover:bg-[rgba(95,169,159,0.05)] hover:shadow-[0_8px_20px_rgba(95,169,159,0.15)] focus:outline focus:outline-2 focus:outline-[#5FA99F] focus:outline-offset-4 w-full max-w-[320px] group text-center"
          >
            <span className="relative z-10">See How It Works</span>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-14"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[0.75rem] sm:text-[0.85rem] md:text-[0.9375rem] lg:text-[1.0625rem] font-medium font-sans backdrop-blur-sm">
              Video + Image Ads
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[0.75rem] sm:text-[0.85rem] md:text-[0.9375rem] lg:text-[1.0625rem] font-medium font-sans backdrop-blur-sm">
              Custom Websites
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[0.75rem] sm:text-[0.85rem] md:text-[0.9375rem] lg:text-[1.0625rem] font-medium font-sans backdrop-blur-sm">
              Full Campaign Management
            </div>
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[0.75rem] sm:text-[0.85rem] md:text-[0.9375rem] lg:text-[1.0625rem] font-medium font-sans backdrop-blur-sm">
              Data-Driven Strategy
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
