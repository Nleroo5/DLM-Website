'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const row1 = [
  { title: 'Village Pediatrics', industry: 'Healthcare', thumbnail: '/images/atlanta-pediatric-website-design-healthcare-patient-portal.webp' },
  { title: 'Southern Tents & Events', industry: 'Event Services', thumbnail: '/images/atlanta-event-rental-website-tent-equipment-services.webp' },
  { title: 'Set Life Casting', industry: 'Entertainment', thumbnail: '/images/professional-landing-page-design-conversion-optimization.webp' },
  { title: 'Marietta Antique Mall', industry: 'Retail', thumbnail: '/images/marietta-antique-mall-website-vendor-booth-directory.webp' },
];

const row2 = [
  { title: 'Marietta Antique Mall', industry: 'Retail', thumbnail: '/images/marietta-antique-mall-website-vendor-booth-directory.webp' },
  { title: 'Set Life Casting', industry: 'Entertainment', thumbnail: '/images/professional-landing-page-design-conversion-optimization.webp' },
  { title: 'Village Pediatrics', industry: 'Healthcare', thumbnail: '/images/atlanta-pediatric-website-design-healthcare-patient-portal.webp' },
  { title: 'Southern Tents & Events', industry: 'Event Services', thumbnail: '/images/atlanta-event-rental-website-tent-equipment-services.webp' },
];

function PortfolioCard({ title, industry, thumbnail }: { title: string; industry: string; thumbnail: string }) {
  return (
    <div className="relative w-[300px] sm:w-[350px] h-[200px] sm:h-[250px] flex-shrink-0 rounded-[16px] overflow-hidden group cursor-pointer">
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="350px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <p className="text-[#5FA99F] text-xs uppercase tracking-wider font-heading">{industry}</p>
        <h4 className="text-white font-heading text-lg font-semibold">{title}</h4>
      </div>
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

      {/* Row 1 - scrolls left */}
      <div className="mb-4 overflow-hidden group">
        <div className="flex gap-4 animate-marquee-left" style={{ width: 'max-content' }}>
          {[...row1, ...row1].map((item, i) => (
            <PortfolioCard key={`r1-${i}`} {...item} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="overflow-hidden group">
        <div className="flex gap-4 animate-marquee-right" style={{ width: 'max-content' }}>
          {[...row2, ...row2].map((item, i) => (
            <PortfolioCard key={`r2-${i}`} {...item} />
          ))}
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
            href="/portfolio"
            className="inline-flex items-center text-[#5FA99F] font-heading font-semibold text-[1rem] hover:text-white transition-colors duration-300 group"
          >
            View Full Portfolio
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
