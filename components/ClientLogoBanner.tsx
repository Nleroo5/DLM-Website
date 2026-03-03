'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ClientLogoBannerProps {
  variant?: 'light' | 'dark';
  heading?: string;
}

export default function ClientLogoBanner({ variant = 'light', heading }: ClientLogoBannerProps) {
  const logos = Array.from({ length: 17 }, (_, i) => ({
    name: `Client ${i + 1}`,
    src: `/images/client-logos/${i + 1}.png`,
  }));

  const isDark = variant === 'dark';
  const displayHeading = heading || (isDark ? "You're in good company" : 'Trusted by Leading Brands');

  return (
    <section className={`${isDark ? 'bg-[#0a0a0a] border-y border-[rgba(95,169,159,0.15)]' : 'bg-white border-y border-[rgba(95,169,159,0.12)]'} py-12 overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.h3
          className={`text-center text-[#5FA99F] text-[1rem] font-medium uppercase tracking-widest mb-8 font-heading`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {displayHeading}
        </motion.h3>

        <div className="relative w-full overflow-hidden group">
          {/* Left fade */}
          <div className={`absolute left-0 top-0 bottom-0 w-[80px] sm:w-[120px] ${isDark ? 'bg-gradient-to-r from-[#0a0a0a]' : 'bg-gradient-to-r from-white'} to-transparent z-10 pointer-events-none`} />
          {/* Right fade */}
          <div className={`absolute right-0 top-0 bottom-0 w-[80px] sm:w-[120px] ${isDark ? 'bg-gradient-to-l from-[#0a0a0a]' : 'bg-gradient-to-l from-white'} to-transparent z-10 pointer-events-none`} />

          <div className="flex animate-marquee-left-fast" style={{ width: 'max-content' }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 w-[120px] sm:w-[150px] h-[70px] sm:h-[90px] flex items-center justify-center mx-4 sm:mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={80}
                  loading="lazy"
                  className={`object-contain max-h-[50px] sm:max-h-[60px] ${isDark ? 'brightness-0 invert' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
