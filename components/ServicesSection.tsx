'use client';

import { motion } from 'framer-motion';
import { Globe, Clapperboard, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  {
    category: 'Web Design',
    title: 'Custom Website Design',
    description: "Fast, modern websites built to convert. If your site isn't pulling its weight, we'll rebuild it from scratch.",
    icon: Globe,
  },
  {
    category: 'Creative',
    title: 'Video & Image Ads',
    description: "Motion graphics, drone footage, and scroll-stopping images built for Meta. No more generic stock photos or DIY content.",
    icon: Clapperboard,
  },
  {
    category: 'Tracking',
    title: 'Data & Analytics Setup',
    description: "We set up tracking on your website and ads so you can see exactly where every lead comes from, what's working, and what's not.",
    icon: BarChart3,
  },
  {
    category: 'Optimization',
    title: 'Continuous Improvement',
    description: "We test new ads, adjust budgets, and remove what's not working. Your campaigns get better every week.",
    icon: TrendingUp,
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

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] lg:text-[1rem] font-heading uppercase tracking-widest mb-3 block">Our Services</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[3.25rem] text-white font-bold">
            Everything You Need to Grow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] p-8 lg:p-16 hover:border-[#5FA99F] transition-all duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="w-14 h-14 lg:w-20 lg:h-20 mb-5 lg:mb-8 rounded-2xl bg-[#5FA99F]/10 flex items-center justify-center group-hover:bg-[#5FA99F]/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 lg:w-10 lg:h-10 text-[#f2a921]" strokeWidth={1.5} />
              </div>
              <span className="text-[#5FA99F] text-xs lg:text-[0.9rem] uppercase tracking-widest font-heading font-semibold">
                {service.category}
              </span>
              <h3 className="text-white font-heading text-[1.25rem] lg:text-[2rem] font-semibold mt-4 mb-5 lg:mb-7">
                {service.title}
              </h3>
              <p className="text-gray-400 font-body text-[0.95rem] lg:text-[1.2rem] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
