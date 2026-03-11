'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProblemSolution() {
  return (
    <section className="relative bg-white py-[clamp(40px,8vw,80px)] overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#F2A922] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-[#85C7B3] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-[60px]"
        >
          <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] font-bold text-[#2A2A2A] mb-6 leading-[1.1]">
            Tired of Expensive Ads That Don't Convert?
          </h2>
          <p className="font-body text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#5FA99F] max-w-[800px] mx-auto leading-[1.6]">
            Most businesses waste thousands of dollars showing ads to people who will never buy.
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[80px]"
        >
          <ProblemCard
            title="Wasted Budget"
            description="Paying for ads that reach everyone instead of your ideal customers"
          />
          <ProblemCard
            title="No Results"
            description="Spending money with no way to track if it's actually working"
          />
          <ProblemCard
            title="Overwhelmed"
            description="Too complicated to manage yourself, too expensive to hire an agency"
          />
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-[#F8F6F3] backdrop-blur-xl rounded-[24px] p-[clamp(30px,6vw,60px)] border-2 border-[#5FA99F] relative overflow-hidden shadow-xl"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(242,169,34,0.1)] to-transparent opacity-50 pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-[#5FA99F] rounded-full">
              <span className="font-ui text-[clamp(0.9rem,2vw,1.1rem)] text-white font-semibold">
                The Solution
              </span>
            </div>

            <h3 className="font-heading text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-[#2A2A2A] mb-6 leading-[1.2]">
              We Only Show Ads to People Already Interested in Your Service
            </h3>

            <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] text-[#2A2A2A] max-w-[700px] mx-auto leading-[1.7] mb-8">
              Using Meta's powerful targeting, we reach people based on their{' '}
              <span className="text-[#5FA99F] font-semibold">age, location, interests, and behavior</span>
              {' '}— so every dollar you spend reaches someone likely to become a customer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book"
                className="inline-block font-ui text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#5FA99F] text-white font-bold rounded-full hover:bg-[#4E8B82] hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Your Free Strategy Call
              </Link>
              <Link
                href="/targeted-ads"
                className="inline-block font-ui text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-[#5FA99F] text-[#5FA99F] font-bold rounded-full hover:bg-[#5FA99F] hover:text-white transition-all duration-300 hover:scale-105"
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

function ProblemCard({ title, description }: { icon?: string; title: string; description: string }) {
  return (
    <div
      className="bg-[#F8F6F3] backdrop-blur-lg rounded-[20px] p-6 border-2 border-gray-200 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center"
    >
      <h3 className="font-heading text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] font-bold text-[#2A2A2A] mb-3">
        {title}
      </h3>
      <p className="font-body text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] text-[#5FA99F] leading-[1.6]">
        {description}
      </p>
    </div>
  );
}
