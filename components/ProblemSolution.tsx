'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProblemSolution() {
  return (
    <section className="relative py-[clamp(40px,8vw,80px)] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#F2A922] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-[#85C7B3] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[60px]"
        >
          <h2 className="font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#EEF4D9] mb-6 leading-[1.1]">
            Tired of Expensive Ads That Don't Convert?
          </h2>
          <p className="font-serif text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#85C7B3] max-w-[800px] mx-auto leading-[1.6]">
            Most businesses waste thousands of dollars showing ads to people who will never buy.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[80px]">
          <ProblemCard
            title="Wasted Budget"
            description="Paying for ads that reach everyone instead of your ideal customers"
            delay={0.2}
          />
          <ProblemCard
            title="No Results"
            description="Spending money with no way to track if it's actually working"
            delay={0.3}
          />
          <ProblemCard
            title="Overwhelmed"
            description="Too complicated to manage yourself, too expensive to hire an agency"
            delay={0.4}
          />
        </div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-[rgba(242,169,34,0.15)] to-[rgba(133,199,179,0.15)] backdrop-blur-xl rounded-[24px] p-[clamp(30px,6vw,60px)] border-2 border-[rgba(242,169,34,0.3)] relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(242,169,34,0.1)] to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-[rgba(242,169,34,0.2)] rounded-full border border-[rgba(242,169,34,0.4)]">
              <span className="font-serif text-[clamp(0.9rem,2vw,1.1rem)] text-[#F2A922] font-semibold">
                The Solution
              </span>
            </div>

            <h3 className="font-serif text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-[#EEF4D9] mb-6 leading-[1.2]">
              We Only Show Ads to People Already Interested in Your Service
            </h3>

            <p className="font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] text-[#EEF4D9] max-w-[700px] mx-auto leading-[1.7] mb-8">
              Using Meta's powerful targeting, we reach people based on their{' '}
              <span className="text-[#F2A922] font-semibold">age, location, interests, and behavior</span>
              {' '}— so every dollar you spend reaches someone likely to become a customer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#F2A922] to-[#85C7B3] text-[#012E40] font-bold rounded-full hover:shadow-[0_0_30px_rgba(242,169,34,0.6)] transition-all duration-300 hover:scale-105"
              >
                Get Your Free Strategy Call
              </Link>
              <Link
                href="/targeted-ads"
                className="inline-block font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#EEF4D9] text-[#EEF4D9] font-bold rounded-full hover:bg-[rgba(238,244,217,0.1)] transition-all duration-300 hover:scale-105"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemCard({ title, description, delay }: { icon?: string; title: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#0A192F] backdrop-blur-lg rounded-[20px] p-6 border border-[rgba(212,165,116,0.3)] hover:border-[rgba(212,165,116,0.5)] transition-all duration-300 hover:-translate-y-2 text-center"
    >
      <h3 className="font-serif text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] font-bold text-[#EEF4D9] mb-3">
        {title}
      </h3>
      <p className="font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] text-[#85C7B3] leading-[1.6]">
        {description}
      </p>
    </motion.div>
  );
}
