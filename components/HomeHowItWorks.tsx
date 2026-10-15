'use client';

import { motion } from 'framer-motion';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';

// "How it works": a real three-step sequence that mirrors the intake form and
// ends with the CTA. Stacks into a vertical timeline on phones.
const STEPS = [
  {
    when: 'About 60 seconds',
    title: 'Tell us about your business',
    body: 'Four quick questions: what you need, your industry, your budget and timing.',
  },
  {
    when: 'Same business day',
    title: 'We review it and reach out',
    body: 'We look at your site and ads, then call or email you with ideas for your business.',
  },
  {
    when: 'Then every week',
    title: 'We build, launch and improve',
    body: 'Ads, video creative and your website, built together and tuned every week.',
  },
];

export default function HomeHowItWorks() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 lg:py-28 px-4 sm:px-6">
      <motion.div
        className="max-w-[1100px] mx-auto flex flex-col gap-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest">How it works</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold">
            From First Message to More Customers
          </h2>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-5">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={`relative flex flex-col gap-2 pl-9 pb-8 ml-[18px] border-l-2 md:ml-0 md:pl-7 md:pr-7 md:py-7 md:border md:rounded-[20px] md:bg-[#1A1A1A] md:border-[#5FA99F]/15 ${
                i === STEPS.length - 1 ? 'border-l-transparent md:border-l-[#5FA99F]/15' : 'border-l-[#5FA99F]/35'
              }`}
            >
              <span
                className="absolute -left-[19px] -top-0.5 md:static w-9 h-9 rounded-full bg-[#5FA99F] text-[#061210] grid place-items-center font-ui font-bold"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="font-ui text-[0.75rem] uppercase tracking-[0.12em] text-[#f2a921] font-semibold md:mt-2">{s.when}</span>
              <h3 className="font-heading text-white text-[1.2rem] font-bold leading-tight">{s.title}</h3>
              <p className="font-body text-gray-400 text-[0.95rem] leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col items-center gap-3">
          <GrowthPlanButton
            source="how_it_works"
            className="inline-block font-ui text-[1rem] px-10 py-4 bg-[#5FA99F] text-[#061210] font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:bg-[#6fbbb0] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)] hover:scale-[1.02] transition-all duration-300"
          >
            Get started: it&apos;s free →
          </GrowthPlanButton>
          <span className="font-ui text-gray-500 text-[0.85rem]">4 quick questions · About 60 seconds</span>
        </div>
      </motion.div>
    </section>
  );
}
