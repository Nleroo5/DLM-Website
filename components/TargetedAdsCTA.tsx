'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TargetedAdsCTA() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-[#E8D5B7] to-[#A8C5BA] py-16 border border-[rgba(255,255,255,0.1)] w-[calc(100%-48px)] rounded-[32px] mx-auto my-[100px] md:py-14 md:my-[80px] md:w-[calc(100%-40px)] md:rounded-[24px] sm:py-12 sm:my-[60px] sm:w-[calc(100%-32px)] sm:rounded-[20px]"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,165,116,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(44,120,115,0.08)_0%,transparent_50%)] z-[1] pointer-events-none"></div>

      {/* Content container */}
      <div className="max-w-full w-full mx-auto text-center relative z-[2] px-12 md:px-8 sm:px-6">
        {/* Section Title */}
        <motion.h2
          className="font-serif text-[clamp(2rem,5vw,3.5rem)] text-[#2A2A2A] font-normal mb-6 leading-[1.2] cursor-pointer transition-all duration-400 relative break-words md:mb-4 md:leading-[1.3] sm:mb-4 sm:leading-[1.25]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Are Targeted Ads?
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          className="font-sans text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-[#2A2A2A] mb-6 sm:mb-7 lg:mb-8 max-w-[95%] mx-auto leading-[1.6] sm:leading-[1.6] lg:leading-[1.7] font-normal break-words px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Stop wasting money on people who don't want what you're selling. Learn how to get your ads in front of the right people at the right time.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center items-center mt-8 px-3 sm:mt-7 sm:px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/targeted-ads"
            className="group relative inline-flex items-center justify-center bg-[#2A2A2A] text-[#F8F6F3] font-sans text-[1rem] font-medium px-9 py-4 no-underline rounded-2xl transition-all duration-400 shadow-[0_8px_32px_rgba(0,0,0,0.15),0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden min-h-[44px] min-w-[44px] whitespace-nowrap select-none cursor-pointer hover:bg-[#1a1a1a] hover:transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.98] md:px-8 md:py-4 md:text-[1rem] md:min-h-[48px] md:max-w-[calc(100vw-80px)] sm:px-7 sm:py-3 sm:text-[0.9375rem] sm:rounded-xl sm:min-h-[44px] sm:max-w-[calc(100vw-60px)] focus:outline focus:outline-2 focus:outline-[#2A2A2A] focus:outline-offset-4"
          >
            <span className="relative z-10">Learn More</span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
