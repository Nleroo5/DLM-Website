'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ClientLogoBannerProps {
  variant?: 'light' | 'dark';
  heading?: string;
}

export default function ClientLogoBanner({ variant = 'light', heading }: ClientLogoBannerProps) {
  const allLogos = Array.from({ length: 17 }, (_, i) => ({
    name: `Client ${i + 1}`,
    src: `/images/client-logos/${i + 1}.png`,
  }));

  // Split into two rows
  const row1 = allLogos.slice(0, 9);
  const row2 = allLogos.slice(9);

  const isDark = variant === 'dark';
  const displayHeading = heading || (isDark ? "You're in good company" : 'Trusted by Leading Brands');
  const fadeBg = isDark ? '#0a0a0a' : 'white';

  return (
    <section className={`${isDark ? 'bg-[#0a0a0a] border-y border-[rgba(95,169,159,0.15)]' : 'bg-white border-y border-[rgba(95,169,159,0.12)]'} py-12 overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.h3
          className="text-center text-[#5FA99F] text-[1rem] font-medium uppercase tracking-widest mb-8 font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {displayHeading}
        </motion.h3>

        {/* Row 1 — scrolls left */}
        <div className="relative w-full overflow-hidden mb-6">
          <div className={`absolute left-0 top-0 bottom-0 w-[80px] sm:w-[120px] bg-gradient-to-r from-[${fadeBg}] to-transparent z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 bottom-0 w-[80px] sm:w-[120px] bg-gradient-to-l from-[${fadeBg}] to-transparent z-10 pointer-events-none`} />

          <div className="flex animate-marquee-left-slow" style={{ width: 'max-content' }}>
            {[...row1, ...row1, ...row1].map((logo, index) => (
              <div
                key={`r1-${index}`}
                className="flex-shrink-0 w-[180px] sm:w-[260px] lg:w-[320px] h-[100px] sm:h-[130px] lg:h-[160px] flex items-center justify-center mx-5 sm:mx-10 lg:mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={140}
                  loading="lazy"
                  className={`object-contain max-h-[80px] sm:max-h-[100px] lg:max-h-[130px] ${isDark ? 'mix-blend-screen' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative w-full overflow-hidden">
          <div className={`absolute left-0 top-0 bottom-0 w-[80px] sm:w-[120px] bg-gradient-to-r from-[${fadeBg}] to-transparent z-10 pointer-events-none`} />
          <div className={`absolute right-0 top-0 bottom-0 w-[80px] sm:w-[120px] bg-gradient-to-l from-[${fadeBg}] to-transparent z-10 pointer-events-none`} />

          <div className="flex animate-marquee-right-slow" style={{ width: 'max-content' }}>
            {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <div
                key={`r2-${index}`}
                className="flex-shrink-0 w-[180px] sm:w-[260px] lg:w-[320px] h-[100px] sm:h-[130px] lg:h-[160px] flex items-center justify-center mx-5 sm:mx-10 lg:mx-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={140}
                  loading="lazy"
                  className={`object-contain max-h-[80px] sm:max-h-[100px] lg:max-h-[130px] ${isDark ? 'mix-blend-screen' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
