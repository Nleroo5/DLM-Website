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
    description: "You don't have to learn Meta ads. You don't have to shoot your own content. You don't have to wonder if it's working. We handle it and you see the leads come in. Simple as that.",
  },
];

function ScrollCard({ card, index, totalCards }: { card: typeof cards[0]; index: number; totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderOpacity = useTransform(scrollYProgress, [0.5, 1], [0.15, 0.5]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-[#1A1A1A] rounded-[20px] p-6 lg:p-8 transition-colors duration-300"
      style={{
        opacity,
        y,
        scale,
        border: '1px solid rgba(95,169,159,0.15)',
        position: 'sticky',
        top: `${140 + index * 20}px`,
        zIndex: index,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          border: '1px solid',
          borderColor: useTransform(borderOpacity, (v) => `rgba(95,169,159,${v})`),
        }}
      />
      <div className="flex items-center gap-4 mb-3">
        <motion.span
          className="text-[2rem] lg:text-[2.5rem] font-heading font-bold leading-none"
          style={{
            background: 'linear-gradient(135deg, #5FA99F, #85C7B3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {card.number}
        </motion.span>
        <h3 className="text-white font-heading text-[1.15rem] lg:text-[1.35rem] font-semibold">
          {card.title}
        </h3>
      </div>
      <p className="text-gray-400 font-body text-[0.95rem] lg:text-[1.15rem] leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const photoScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.95, 1, 1]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const headingOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  return (
    <section ref={sectionRef} className="relative bg-[#000000] py-24 lg:py-36 px-4 sm:px-6">
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
          style={{ opacity: headingOpacity, y: headingY }}
        >
          <span className="text-[#5FA99F] text-[0.95rem] font-heading uppercase tracking-widest mb-4 block">Who We Are</span>
          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.25rem] text-white font-bold">
            About Drive Lead Media
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Team photo with parallax */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-full w-full lg:sticky lg:top-24"
            style={{
              y: photoY,
              scale: photoScale,
              opacity: photoOpacity,
            }}
          >
            <Image
              src="/images/aboutus.jpg"
              alt="The Drive Lead Media team"
              fill
              className="object-cover object-[center_70%] scale-150"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </motion.div>

          {/* Cards with stacking scroll effect */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {cards.map((card, i) => (
              <ScrollCard key={card.number} card={card} index={i} totalCards={cards.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
