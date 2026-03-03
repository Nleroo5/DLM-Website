'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    number: '01',
    title: 'Why We Exist',
    description: "Too many small businesses burn money on ads that don't work. We started Drive Lead Media because we believe every local business deserves a marketing partner that treats their budget like their own — no vanity metrics, no fluff, just customers walking through the door.",
  },
  {
    number: '02',
    title: 'Our Approach',
    description: "We build the entire system — Meta ad campaigns, actor-led video creative, and conversion-focused websites — all working together. Every dollar is tracked, every click has a purpose, and every week your campaigns get sharper.",
  },
  {
    number: '03',
    title: 'How We Deliver',
    description: "You focus on running your business. We handle everything: creative production, audience targeting, campaign optimization, and detailed reporting. No guesswork, no DIY headaches — just measurable growth from day one.",
  },
];

export default function AboutSection() {
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
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest mb-3 block">Who We Are</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold">
            About Drive Lead Media
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] p-8 lg:p-10 hover:border-[rgba(95,169,159,0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <span
                className="block text-[3rem] font-heading font-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg, #5FA99F, #85C7B3)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {card.number}
              </span>
              <h3 className="text-white font-heading text-[1.25rem] lg:text-[1.5rem] font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 font-body text-[0.95rem] lg:text-[1rem] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
