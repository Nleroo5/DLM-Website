'use client';

import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1A1A1A] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5FA99F] opacity-[0.07] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[800px] mx-auto text-center px-6">
        <motion.h2
          className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Drive More Leads?
        </motion.h2>
        <motion.p
          className="text-gray-400 font-body text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop guessing. Start growing. Let&apos;s build your next campaign together.
        </motion.p>
        <motion.a
          href="#contact-form"
          className="inline-block font-heading text-[1rem] px-10 py-4 bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get Your Free Estimate
        </motion.a>
      </div>
    </section>
  );
}
