'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    number: '01',
    title: 'Why We Exist',
    description: "We kept seeing the same thing, local businesses handing their money to agencies that overpromise and underdeliver. Ads that don't convert. Cookie-cutter websites that looked outdated the day they launched. We started Drive Lead Media to fix that.",
  },
  {
    number: '02',
    title: 'Our Approach',
    description: "We don't just run ads. We build the whole thing, the Meta campaigns, the video creatives and the website people actually convert on. It all works together because we built it that way.",
  },
  {
    number: '03',
    title: 'How We Deliver',
    description: "We don't hand you a dashboard and wish you luck. You get a dedicated team handling your campaigns, your creatives, and your budget, while you stay focused on what you're actually good at. You'll see the leads. We'll show you what drove them.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} className="relative bg-[#000000] py-24 lg:py-36 px-4 sm:px-6">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="text-center mb-14">
          <span className="text-[#5FA99F] text-[0.95rem] font-heading uppercase tracking-widest mb-4 block">Who We Are</span>
          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-white font-bold">
            About Drive Lead Media
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Team photo with parallax */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full w-full"
            style={{ y: photoY }}
          >
            <Image
              src="/images/DLM-About.webp"
              alt="The Drive Lead Media team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {cards.map((card) => (
              <div
                key={card.number}
                className="relative overflow-hidden bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[20px] p-6 lg:p-8 hover:border-[rgba(95,169,159,0.4)] transition-all duration-300"
              >
                <span
                  className="absolute -top-4 -right-3 lg:-top-5 lg:-right-4 text-[5rem] lg:text-[7rem] font-heading font-bold leading-none -rotate-12 text-[#f2a921]/50 select-none pointer-events-none"
                >
                  {card.number}
                </span>
                <div className="relative z-10 mb-3">
                  <h3 className="text-white font-heading text-[1.15rem] lg:text-[1.35rem] font-semibold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-400 font-body text-[0.95rem] lg:text-[1.15rem] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
