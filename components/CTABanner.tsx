'use client';

import { motion } from 'framer-motion';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';
import GoogleRating from '@/components/GoogleRating';

export default function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1A1A1A] to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5FA99F] opacity-[0.07] blur-[120px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-[800px] mx-auto text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] text-white font-bold mb-4">
          Ready to Drive More Leads?
        </h2>
        <p className="text-gray-400 font-body text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] mb-10 leading-relaxed">
          Stop guessing. Start growing. Let&apos;s build your next campaign together.
        </p>
        <GrowthPlanButton
          source="homepage_cta_banner"
          className="group inline-block font-ui text-[1rem] px-10 py-4 bg-[#5FA99F] text-[#061210] font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:bg-[#6fbbb0] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] hover:scale-[1.02] active:scale-[0.97] active:duration-100 transition-all duration-300"
        >
          Get started: it&apos;s free <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
        </GrowthPlanButton>
        <div className="mt-5">
          <GoogleRating animate="view" />
        </div>
      </motion.div>
    </section>
  );
}
