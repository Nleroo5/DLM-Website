'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// "Who you'll work with": named team cards. Headshots are placeholders until the
// new shoot; swap the image paths below when the new photos land.
const TEAM = [
  {
    name: 'Nicolas Leroo',
    role: 'Co-Founder · Strategy & Meta ads',
    line: 'Plans your campaigns and makes sure every dollar is tracked back to a lead.',
    image: '/images/nicolas-leroo-atlanta-digital-marketing-agency-founder.webp',
  },
  {
    name: 'Tommy Duda',
    role: 'Co-Founder · Creative & video',
    line: 'Films and edits the ads people actually stop scrolling for.',
    image: '/images/tommy-atlanta-marketing-strategist-team-member.webp',
  },
];

export default function TeamSection() {
  return (
    <section className="relative bg-[#000000] py-20 lg:py-28 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <motion.div
        className="relative z-10 max-w-[1000px] mx-auto flex flex-col gap-8 lg:gap-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="text-center flex flex-col items-center gap-3">
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest">Who you&apos;ll work with</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold max-w-[20ch]">
            A Small Atlanta Team. You&apos;ll Know Us by Name.
          </h2>
          <p className="font-body text-gray-400 text-[1rem] sm:text-[1.1rem] max-w-[52ch]">
            The people below run your ads, make your creative and answer your calls.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="grid content-start grid-cols-[72px_1fr] sm:grid-cols-1 items-center sm:items-start gap-x-4 gap-y-2 sm:gap-3 bg-[#1A1A1A] border border-[#5FA99F]/15 rounded-[20px] p-5 sm:p-7"
            >
              <Image
                src={m.image}
                alt={`${m.name}, ${m.role.split(' · ')[0]} at Drive Lead Media`}
                width={112}
                height={112}
                className="row-span-2 sm:row-span-1 w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] rounded-full object-cover"
              />
              <h3 className="font-heading text-white text-[1.15rem] sm:text-[1.3rem] font-bold leading-tight self-end sm:self-auto">
                {m.name}
              </h3>
              <span className="font-ui text-[#5FA99F] text-[0.85rem] font-semibold self-start sm:self-auto">{m.role}</span>
              <p className="col-span-2 sm:col-span-1 font-body text-gray-400 text-[0.95rem] leading-relaxed">{m.line}</p>
            </article>
          ))}
        </div>

        {/* Why we started. A behind-the-scenes photo can sit beside this once it's shot. */}
        <figure className="bg-[#1A1A1A] border border-[#5FA99F]/15 rounded-[20px] p-6 sm:p-8 text-center">
          <blockquote className="font-heading text-white text-[1.15rem] sm:text-[1.35rem] leading-snug max-w-[46ch] mx-auto">
            &ldquo;We kept seeing the same thing: local businesses handing their money to agencies that overpromise and
            underdeliver. We started Drive Lead Media to fix that.&rdquo;
          </blockquote>
          <figcaption className="font-ui text-[#5FA99F] text-[0.9rem] font-semibold mt-4">Why we started DLM</figcaption>
        </figure>
      </motion.div>
    </section>
  );
}
