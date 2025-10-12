'use client';

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="bg-transparent text-[#5FA99F] pt-[140px] pb-[80px] px-6 font-sans md:pt-[120px] md:pb-[60px]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Title */}
        <motion.h1
          className="font-serif text-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] text-[#F8F6F3] font-normal leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h1>
      </div>
    </section>
  );
}
