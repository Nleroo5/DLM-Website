'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { trackCustomEvent } from '@/components/MetaPixel';

// Homepage "Our Work" section: a Village Pediatrics spotlight (video testimonial)
// followed by ad → website pairs. Every video is a still poster until tapped,
// so the section costs ~150 KB on load instead of the old 9 MB autoplay strip.

function TapVideo({
  src,
  poster,
  label,
  sizes,
  className = '',
  small = false,
}: {
  src: string;
  poster: string;
  label: string;
  sizes: string;
  className?: string;
  small?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {playing ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            trackCustomEvent('WorkVideoPlay', { video_name: label });
          }}
          aria-label={`Play video: ${label}`}
          className="group absolute inset-0 w-full h-full"
        >
          <Image src={poster} alt="" fill sizes={sizes} className="object-cover" />
          <span className="absolute inset-0 grid place-items-center">
            <span
              className={`${small ? 'w-10 h-10' : 'w-16 h-16'} rounded-full bg-black/60 border-2 border-white/80 grid place-items-center transition-transform duration-300 group-hover:scale-110`}
            >
              <span
                className={`${small ? 'border-l-[11px] border-y-[7px]' : 'border-l-[16px] border-y-[10px]'} border-l-white border-y-transparent ml-1`}
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="font-ui text-[0.75rem] text-[#5FA99F] border border-[#5FA99F]/25 rounded-md px-2 py-0.5">
          {s}
        </span>
      ))}
    </div>
  );
}

const PAIRS = [
  {
    client: 'Marietta Antique Mall',
    industry: 'Local retail',
    description: 'Scroll-stopping video ads that send shoppers to a new site built to get them through the door.',
    services: ['Website', 'Meta ads', 'Video creative'],
    adVideo: '/Videos/work/antique-mall-ad.mp4',
    adPoster: '/images/work/antique-mall-ad-poster.webp',
    siteImage: '/images/case-studies/marietta-antique-mall/marietta-antique-poster.webp',
    siteLabel: 'The website',
    liveUrl: 'https://www.mariettaantiquemall.com/',
  },
  {
    client: 'Pain Treatment Centers of Georgia',
    industry: 'Medical',
    description: 'Meta ads for new patients, each landing on a booking page built for that one offer.',
    services: ['Meta ads', 'Landing page', 'Video creative'],
    adVideo: '/Videos/work/ptc-savannah.mp4',
    adPoster: '/images/work/ptc-savannah-poster.webp',
    siteImage: '/images/case-studies/pain-treatment-centers/ptc-health-poster.webp',
    siteLabel: 'Landing page',
    liveUrl: 'https://book.ptchealth.com/',
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="relative bg-[#0a0a0a] py-20 lg:py-28 px-4 sm:px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 lg:gap-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] font-heading uppercase tracking-widest mb-3 block">Our Work</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold">
            Real Businesses. Real Results.
          </h2>
        </motion.div>

        {/* Spotlight: Village Pediatrics */}
        <article className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] bg-[#1A1A1A] border border-[#5FA99F]/20 rounded-[24px] overflow-hidden">
          <TapVideo
            src="/Videos/work/village-pediatrics-testimonial.mp4"
            poster="/images/work/village-pediatrics-testimonial-poster.webp"
            label="Dr. Austin Dupont, Village Pediatrics testimonial"
            sizes="(max-width: 1024px) 100vw, 640px"
            className="aspect-video lg:aspect-auto lg:min-h-[360px]"
          />
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <span className="font-ui text-[0.75rem] uppercase tracking-[0.12em] text-[#f2a921] font-semibold">
              Medical · Village Pediatrics
            </span>
            <h3 className="font-heading text-white text-[1.75rem] sm:text-[2.1rem] font-bold leading-[1.08]">
              &ldquo;A <span className="text-[#5FA99F]">game changer</span> for Village Pediatrics.&rdquo;
            </h3>
            <blockquote className="font-body text-[1rem] sm:text-[1.05rem] text-gray-300 leading-relaxed">
              &ldquo;They completely transformed our outdated website into something modern and professional&hellip; the best
              part is that I haven&apos;t had to manage any of it.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 font-ui text-[0.9rem] text-gray-400">
              <span className="text-[#FBBC04] tracking-[1px]" aria-label="5 stars">★★★★★</span>
              <span>
                <span className="block text-white font-semibold">Dr. Austin Dupont</span>
                Owner, Village Pediatrics
              </span>
            </div>
            <Chips items={['Website', 'SEO', 'Meta ads', 'Tracking']} />
          </div>
        </article>

        {/* Ad → website pairs */}
        <div className="flex flex-col gap-4">
          {PAIRS.map((p) => (
            <article
              key={p.client}
              className="grid grid-cols-[96px_20px_minmax(0,1fr)] md:grid-cols-[140px_32px_minmax(0,1fr)_minmax(0,0.85fr)] gap-3 md:gap-5 items-center bg-[#1A1A1A] border border-[#5FA99F]/15 rounded-[20px] p-3.5 sm:p-5"
            >
              <div className="relative">
                <TapVideo
                  src={p.adVideo}
                  poster={p.adPoster}
                  label={`${p.client} Meta ad`}
                  sizes="140px"
                  className="aspect-[9/16] rounded-[14px] border border-white/15"
                  small
                />
                <span className="pointer-events-none absolute top-1.5 left-1.5 font-ui text-[0.6rem] uppercase tracking-[0.1em] font-bold text-[#f2a921] bg-black/75 rounded px-1.5 py-0.5">
                  The ad
                </span>
              </div>
              <span className="text-[#5FA99F] text-[1.4rem] md:text-[1.8rem] text-center" aria-hidden="true">→</span>
              <div className="relative rounded-[12px] overflow-hidden border border-white/10 bg-[#111]">
                <div className="h-4 md:h-5 bg-[#1c1f1e] flex items-center gap-1 px-2" aria-hidden="true">
                  <i className="w-1.5 h-1.5 rounded-full bg-[#3a3f3d]" />
                  <i className="w-1.5 h-1.5 rounded-full bg-[#3a3f3d]" />
                  <i className="w-1.5 h-1.5 rounded-full bg-[#3a3f3d]" />
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.siteImage}
                    alt={`${p.client} ${p.siteLabel.toLowerCase()}`}
                    fill
                    sizes="(max-width: 768px) 60vw, 360px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute top-6 md:top-7 left-1.5 font-ui text-[0.6rem] uppercase tracking-[0.1em] font-bold text-[#5FA99F] bg-black/75 rounded px-1.5 py-0.5">
                  {p.siteLabel}
                </span>
              </div>
              <div className="col-span-3 md:col-span-1 flex flex-col gap-2">
                <span className="font-ui text-[0.75rem] uppercase tracking-[0.12em] text-[#f2a921] font-semibold">{p.industry}</span>
                <h3 className="font-heading text-white text-[1.2rem] font-bold leading-tight">{p.client}</h3>
                <p className="font-body text-[0.95rem] text-gray-400 leading-relaxed">{p.description}</p>
                <Chips items={p.services} />
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-[0.9rem] text-[#5FA99F] hover:text-[#85C7B3] font-semibold w-fit"
                >
                  Visit the live site ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/case-studies" className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#85C7B3] font-semibold">
            See all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
