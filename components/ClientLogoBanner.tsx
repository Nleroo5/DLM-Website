'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ClientLogoBannerProps {
  variant?: 'light' | 'dark';
  heading?: string;
}

export default function ClientLogoBanner({ variant = 'light', heading }: ClientLogoBannerProps) {
  const isDark = variant === 'dark';

  // Numbers refer to /images/client-logos/<n>.webp.
  // #18 is a duplicate "Local Wildlife Experts" (the larger green version); we
  // keep the grey #17 and drop this one.
  const excludedLogos = new Set([18]);

  // Light artwork baked onto a dark shape (e.g. Set Life's cream text on a black
  // clapperboard). Plain `invert` keeps both tones legible on the dark banner.
  const detailedLogos = new Set([3]);

  // Detailed grey/silver illustrations that collapse into a featureless white
  // blob under `brightness-0 invert`. They already read well on the dark banner,
  // so render them as-is to preserve their detail.
  const naturalLogos = new Set([4, 12, 16]);

  // Colored logos we show desaturated (greys + white) so they don't clash with
  // the monochrome banner. #20 is Quality Wildlife Solutions (blue accents).
  const grayscaleLogos = new Set([20]);

  const allLogos = Array.from({ length: 23 }, (_, i) => i + 1)
    .filter((n) => !excludedLogos.has(n))
    .map((n) => ({
      name: `Client ${n}`,
      src: `/images/client-logos/${n}.webp`,
      detailed: detailedLogos.has(n),
      natural: naturalLogos.has(n),
      grayscale: grayscaleLogos.has(n),
    }));

  // The dark-mode filter applied to each logo (nothing in light mode).
  const darkFilter = (logo: { detailed: boolean; natural: boolean; grayscale: boolean }) => {
    if (!isDark) return '';
    if (logo.grayscale) return 'grayscale';
    if (logo.natural) return '';
    return logo.detailed ? 'invert' : 'brightness-0 invert';
  };

  // Split into two rows
  const row1 = allLogos.slice(0, 11);
  const row2 = allLogos.slice(11);

  const displayHeading = heading || (isDark ? "You're in good company" : 'Trusted by Leading Brands');
  const fadeBg = isDark ? '#141414' : 'white';

  return (
    <section className={`${isDark ? 'bg-[#141414] border-y border-[rgba(95,169,159,0.2)]' : 'bg-white border-y border-[rgba(95,169,159,0.12)]'} py-12 overflow-hidden`}>
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
          <div className="absolute left-0 top-0 bottom-0 w-[80px] sm:w-[120px] z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${fadeBg}, transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-[80px] sm:w-[120px] z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${fadeBg}, transparent)` }} />

          <div className="flex animate-marquee-left-slow" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((logo, index) => (
              <div
                key={`r1-${index}`}
                className="flex-shrink-0 w-[130px] sm:w-[180px] lg:w-[210px] h-[100px] sm:h-[130px] lg:h-[140px] flex items-center justify-center mx-2 sm:mx-4 lg:mx-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={140}
                  loading="lazy"
                  className={`object-contain max-h-[80px] sm:max-h-[100px] lg:max-h-[110px] ${darkFilter(logo)}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[80px] sm:w-[120px] z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${fadeBg}, transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-[80px] sm:w-[120px] z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${fadeBg}, transparent)` }} />

          <div className="flex animate-marquee-right-slow" style={{ width: 'max-content' }}>
            {[...row2, ...row2].map((logo, index) => (
              <div
                key={`r2-${index}`}
                className="flex-shrink-0 w-[130px] sm:w-[180px] lg:w-[210px] h-[100px] sm:h-[130px] lg:h-[140px] flex items-center justify-center mx-2 sm:mx-4 lg:mx-5 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={240}
                  height={140}
                  loading="lazy"
                  className={`object-contain max-h-[80px] sm:max-h-[100px] lg:max-h-[110px] ${darkFilter(logo)}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
