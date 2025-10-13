'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  // Animation variants for staggered fade-in effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[120px] pb-[180px] px-6">
      {/* Hero Content - No background box */}
      <motion.div
        className="relative z-10 text-center max-w-[1200px] text-white"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Main Headline */}
        <motion.h1
          className="font-serif text-[4.5rem] font-semibold leading-[1.1] text-[#F8F6F3] mb-8 md:text-[2.5rem] sm:text-[1.75rem]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Stop wasting money on ads that don't work
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-sans text-[1.625rem] font-normal text-[#5FA99F] mb-12 leading-[1.6] max-w-[900px] mx-auto md:text-[1.1rem] md:mb-8 sm:text-[1rem]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We create Meta ad campaigns AND high-converting websites that actually bring you customers. Video, images, targeting, website design, and strategy, all handled for you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-8 justify-center flex-wrap md:flex-col md:items-center md:gap-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="relative overflow-hidden bg-gradient-to-br from-[#D4A574] to-[#E8D5B7] text-[#2A2A2A] px-10 py-4 rounded-xl text-[1.0625rem] font-semibold font-sans no-underline inline-block cursor-pointer transition-all duration-300 shadow-[0_8px_24px_rgba(212,165,116,0.2)] border border-[rgba(255,255,255,0.1)] hover:transform hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(212,165,116,0.3)] focus:outline focus:outline-2 focus:outline-[#D4A574] focus:outline-offset-4 md:min-w-[280px] md:max-w-[320px] group"
          >
            <span className="relative z-10">Book Your Strategy Call</span>
          </Link>

          {/* Secondary CTA */}
          <a
            href="#how-it-works"
            className="relative overflow-hidden bg-transparent text-[#F8F6F3] px-10 py-4 border border-[rgba(248,246,243,0.2)] rounded-xl text-[1.0625rem] font-medium font-sans no-underline inline-block cursor-pointer transition-all duration-300 backdrop-blur-sm hover:transform hover:-translate-y-0.5 hover:border-[rgba(95,169,159,0.4)] hover:bg-[rgba(95,169,159,0.05)] hover:shadow-[0_8px_20px_rgba(95,169,159,0.15)] focus:outline focus:outline-2 focus:outline-[#5FA99F] focus:outline-offset-4 md:min-w-[280px] md:max-w-[320px] group"
          >
            <span className="relative z-10">See How It Works</span>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-14"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex justify-center gap-4 flex-wrap md:gap-3">
            <div className="px-5 py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[1.0625rem] font-medium font-sans backdrop-blur-sm md:text-[0.9375rem] md:px-4 md:py-2">
              Video + Image Ads
            </div>
            <div className="px-5 py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[1.0625rem] font-medium font-sans backdrop-blur-sm md:text-[0.9375rem] md:px-4 md:py-2">
              Custom Websites
            </div>
            <div className="px-5 py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[1.0625rem] font-medium font-sans backdrop-blur-sm md:text-[0.9375rem] md:px-4 md:py-2">
              Full Campaign Management
            </div>
            <div className="px-5 py-2.5 bg-[rgba(248,246,243,0.04)] border border-[rgba(248,246,243,0.1)] rounded-full text-[#F8F6F3] text-[1.0625rem] font-medium font-sans backdrop-blur-sm md:text-[0.9375rem] md:px-4 md:py-2">
              Data-Driven Strategy
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
