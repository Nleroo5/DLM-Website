'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    category: 'Web Design',
    title: 'Custom Website Design',
    description: "Fast, modern websites built to convert. If your site isn't pulling its weight, we'll rebuild it from scratch.",
  },
  {
    category: 'Creative',
    title: 'Video & Image Ads',
    description: "Actor-led videos and scroll-stopping images made for Meta. No more generic stock photos or DIY footage.",
  },
  {
    category: 'Strategy',
    title: 'Complete Campaign Setup',
    description: "We build everything for you — from finding your ideal customers to tracking your results.",
  },
  {
    category: 'Optimization',
    title: 'Continuous Improvement',
    description: "We test new ads, adjust budgets, and remove what's not working. Your campaigns get better every week.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#000000] py-20 lg:py-28 px-4 sm:px-6">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest mb-3 block">Our Services</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold">
            Everything You Need to Grow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] p-6 lg:p-8 hover:border-[#5FA99F] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="text-[#5FA99F] text-xs uppercase tracking-widest font-heading font-semibold">
                {service.category}
              </span>
              <h3 className="text-white font-heading text-[1.25rem] lg:text-[1.5rem] font-semibold mt-3 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 font-body text-[0.95rem] leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-[#5FA99F] font-ui font-medium text-sm group-hover:text-white transition-colors duration-300"
              >
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
