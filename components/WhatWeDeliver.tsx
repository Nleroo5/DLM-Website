'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WhatWeDeliver() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  const cards = [
    {
      icon: '/images/creative-icon.png',
      title: 'Video and Image Ads',
      content: 'Actor-led videos and scroll-stopping images made for Meta. No more generic stock photos or DIY footage.'
    },
    {
      icon: '/images/target-icon.png',
      title: 'Full Campaign Setup',
      content: 'We build your targeting, tracking, and conversion sequences. You get campaigns that actually reach the right people.'
    },
    {
      icon: '/images/performance-icon.png',
      title: 'Ongoing Optimization',
      content: 'We test new creative, adjust budgets, and kill what\'s not working. Your campaigns get better every week.'
    },
    {
      icon: '/images/website-icon.png',
      title: 'Custom Website Design',
      content: 'Fast, modern websites built to convert. If your site isn\'t pulling its weight, we\'ll rebuild it from scratch.'
    }
  ];

  return (
    <section className="bg-transparent text-[#5FA99F] py-[100px] px-6 font-sans my-0 md:py-[80px] md:px-5">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="font-serif text-[1.75rem] sm:text-[2.25rem] lg:text-[3.5rem] mb-3 sm:mb-5 lg:mb-6 text-[#F8F6F3] font-normal leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What We Deliver
        </motion.h2>

        {/* Section Subtitle */}
        <motion.p
          className="text-[#5FA99F] text-[0.95rem] sm:text-[1.125rem] lg:text-[1.5rem] mb-6 sm:mb-10 lg:mb-12 font-sans font-normal leading-[1.6] opacity-90 max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need. No guesswork.
        </motion.p>

        {/* Cards Container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-[#0B1D2E] border border-[rgba(95,169,159,0.12)] rounded-[20px] md:rounded-[24px] lg:rounded-[32px] p-4 sm:p-5 md:p-6 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-md min-h-[240px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[380px] flex flex-col justify-start transition-all duration-400 hover:transform hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.12)] hover:border-[rgba(212,165,116,0.25)] hover:bg-[#0B1D2E]"
            >
              <div>
                {/* Icon */}
                <div className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-6 block transition-all duration-400 [filter:drop-shadow(0_4px_12px_rgba(95,169,159,0.2))]">
                  <Image
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    width={112}
                    height={112}
                    className="w-auto h-full mx-auto object-contain"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-[#F8F6F3] text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.875rem] mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-5 font-semibold font-serif transition-all duration-400 leading-[1.3] text-center">
                  {card.title}
                </h3>
              </div>

              {/* Card Content */}
              <p className="text-[#5FA99F] text-[0.8rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem] xl:text-[1.3rem] font-normal font-sans leading-[1.5] sm:leading-[1.55] md:leading-[1.6] transition-all duration-400 opacity-90 text-center">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
