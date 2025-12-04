'use client';

import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="bg-[#000000] text-[#5FA99F] pt-[140px] pb-[80px] px-6 md:pt-[120px] md:pb-[60px]">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Title */}
        <motion.h1
          className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white font-bold leading-[1.1]"
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
