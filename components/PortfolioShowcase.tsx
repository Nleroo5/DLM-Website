'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const row1 = [
  '/Videos/portfolio/1.webm',
  '/Videos/portfolio/2.webm',
  '/Videos/portfolio/3.webm',
  '/Videos/portfolio/4.webm',
  '/Videos/portfolio/5.webm',
  '/Videos/portfolio/6.webm',
  '/Videos/portfolio/7.webm',
];

const row2 = [
  '/Videos/portfolio/8.webm',
  '/Videos/portfolio/9.webm',
  '/Videos/portfolio/10.webm',
  '/Videos/portfolio/11.webm',
  '/Videos/portfolio/12.webm',
  '/Videos/portfolio/13.webm',
  '/Videos/portfolio/15.webm',
];

function PortfolioCard({ src }: { src: string }) {
  return (
    <div className="relative w-[300px] sm:w-[350px] lg:w-[420px] h-[200px] sm:h-[250px] lg:h-[280px] flex-shrink-0 rounded-[16px] overflow-hidden">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0d1b2a]/20 mix-blend-multiply pointer-events-none" />
    </div>
  );
}

export default function PortfolioShowcase() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest mb-3 block">Our Work</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold">
            Websites That Drive Results
          </h2>
        </motion.div>
      </div>

      {/* Angled marquee wrapper */}
      <div className="-rotate-2 py-4">
        {/* Row 1 - scrolls left */}
        <div className="mb-4 overflow-hidden">
          <div className="flex gap-4 animate-marquee-left" style={{ width: 'max-content' }}>
            {[...row1, ...row1].map((src, i) => (
              <PortfolioCard key={`r1-${i}`} src={src} />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-marquee-right" style={{ width: 'max-content' }}>
            {[...row2, ...row2].map((src, i) => (
              <PortfolioCard key={`r2-${i}`} src={src} />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center text-[#5FA99F] font-heading font-semibold text-[1rem] hover:text-white transition-colors duration-300 group"
          >
            View Case Studies
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
