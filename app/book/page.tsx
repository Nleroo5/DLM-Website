'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'strategy-session' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] min-h-screen pt-[140px] sm:pt-[160px] pb-20 px-4 sm:px-6">
      {/* Background gradient orbs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5FA99F 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5FA99F 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] lg:text-[1rem] font-heading uppercase tracking-widest mb-3 block">
            Free Strategy Session
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] text-white font-bold mb-4">
            Book a Free Strategy Call
          </h1>
          <p className="text-gray-400 font-body text-[1rem] sm:text-[1.125rem] leading-relaxed max-w-[600px] mx-auto">
            Pick a time that works for you. We&apos;ll review your current marketing, identify what&apos;s costing you leads, and map out a plan to grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden"
        >
          <Cal
            namespace="strategy-session"
            calLink="drive-lead-media/strategy-session"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{
              layout: 'month_view',
              useSlotsViewOnSmallScreen: 'true',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
