'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGrowthPlan } from '@/components/growth-plan/GrowthPlanProvider';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';
import GoogleRating from '@/components/GoogleRating';

// /book is linked from the nav, footer, blog posts and old redirects, so it
// stays live: it opens the intake questionnaire instead of a calendar.
const NEXT_STEPS = [
  { title: 'Answer 4 quick questions', body: 'What you need, your industry, your budget and timing, and how to reach you.' },
  { title: 'We review your business', body: 'Before we reach out, we look at your website and how your ads land.' },
  { title: 'We reach out the same business day', body: 'By phone or email, with ideas specific to your business. No pressure.' },
];

export default function BookPage() {
  const { open } = useGrowthPlan();
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    open('book_page');
  }, [open]);

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

      <div className="relative z-10 max-w-[760px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] lg:text-[1rem] font-heading uppercase tracking-widest mb-3 block">
            Free · No obligation
          </span>
          <h1 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[3rem] text-white font-bold mb-4">
            Let&apos;s Find Your Next Customers
          </h1>
          <p className="text-gray-400 font-body text-[1rem] sm:text-[1.125rem] leading-relaxed max-w-[560px] mx-auto mb-8">
            Tell us a little about your business and we&apos;ll reach out the same business day.
          </p>
          <GrowthPlanButton
            source="book_page"
            className="inline-block font-ui text-[1rem] px-10 py-4 bg-[#5FA99F] text-[#061210] font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:bg-[#6fbbb0] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] hover:scale-[1.02] transition-all duration-300"
          >
            Get started: it&apos;s free →
          </GrowthPlanButton>
          <div className="mt-5 flex justify-center">
            <GoogleRating />
          </div>
        </motion.div>

        <motion.ol
          className="grid gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {NEXT_STEPS.map((s, i) => (
            <li
              key={s.title}
              className="grid grid-cols-[36px_1fr] gap-4 items-start bg-[#141614] border border-[#5FA99F]/15 rounded-2xl px-5 py-4"
            >
              <span className="w-9 h-9 rounded-full grid place-items-center bg-[#5FA99F]/15 text-[#5FA99F] font-semibold">
                {i + 1}
              </span>
              <span>
                <span className="block text-white font-body font-semibold text-[1.05rem]">{s.title}</span>
                <span className="block text-gray-400 font-body text-[0.95rem]">{s.body}</span>
              </span>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
