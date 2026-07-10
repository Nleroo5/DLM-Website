'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
}

type ProjectLayout = 'hero' | 'medium' | 'tall' | 'small' | 'half';

interface CaseStudyProject {
  title: string;
  industry: string;
  videoUrl?: string;
  imageUrl?: string; // Static screenshot / OG image, shown when there's no walkthrough video
  liveUrl?: string;
  liveUrlLabel?: string;
  services?: string[];
  testimonial?: Testimonial;
  videoAds?: string[];
  testimonialVideoUrl?: string;
  layout: ProjectLayout;
  // Set to false to keep an entry wired up but hidden from the live grid until
  // its walkthrough video + poster assets are added. Defaults to shown.
  ready?: boolean;
}

const projects: CaseStudyProject[] = [
  {
    title: 'Pain Treatment Centers of Georgia',
    industry: 'Healthcare - Pain Management',
    videoUrl: '/images/case-studies/pain-treatment-centers/ptc-health.webm',
    liveUrl: 'https://book.ptchealth.com/',
    liveUrlLabel: 'Visit Landing Page',
    services: ['Meta Ads', 'Landing Page', 'Video Creative'],
    videoAds: [
      '/images/case-studies/pain-treatment-centers/ptc-ad-1-audio.webm',
      '/images/case-studies/pain-treatment-centers/ptc-ad-2-audio.webm',
    ],
    layout: 'small',
  },
  {
    title: 'Set Life Casting',
    industry: 'Entertainment - Casting',
    videoUrl: '/images/case-studies/setlife-casting/setlife.webm',
    liveUrl: 'https://www.setlifecasting.com/',
    services: ['Fully Custom Website', 'Casting Platform', 'Talent Database'],
    layout: 'medium',
  },
  {
    title: 'Village Pediatrics of St. Augustine',
    industry: 'Healthcare - Pediatrics',
    videoUrl: '/images/case-studies/village-pediatrics/villagepeds.webm',
    liveUrl: 'https://www.myvillagepeds.com/',
    services: ['Fully Custom Website', 'SEO', 'Meta Ads', 'Tracking Setup'],
    testimonialVideoUrl: '/images/case-studies/village-pediatrics/testimonial.webm',
    layout: 'tall',
  },
  {
    title: 'Marietta Antique Mall',
    industry: 'Retail - Antiques',
    videoUrl: '/images/case-studies/marietta-antique-mall/marietta-antique.webm',
    liveUrl: 'https://www.mariettaantiquemall.com/',
    services: ['Fully Custom Website', 'Meta Ads', 'Video Creative'],
    videoAds: [
      '/images/case-studies/marietta-antique-mall/marietta-ad-1-audio.webm',
      '/images/case-studies/marietta-antique-mall/marietta-ad-2-audio.webm',
    ],
    layout: 'small',
  },
  {
    title: 'Wilcox Tax Firm',
    industry: 'Financial Services - Tax',
    videoUrl: '/images/case-studies/wilcox-tax-firm/wilcox-tax.webm',
    liveUrl: 'https://www.wilcox-tax.com/',
    services: ['Fully Custom Website', 'Meta Ads', 'Video Creative'],
    videoAds: [
      '/images/case-studies/wilcox-tax-firm/wilcox-ad-1.webm',
      '/images/case-studies/wilcox-tax-firm/wilcox-ad-2.webm',
    ],
    layout: 'small',
  },
  {
    title: 'The Yoga Lounge',
    industry: 'Fitness & Wellness',
    videoUrl: '/images/case-studies/the-yoga-lounge/yoga.webm',
    services: ['Meta Ads', 'Video Creative', 'Ad Strategy'],
    videoAds: [
      '/images/case-studies/the-yoga-lounge/yoga-ad-1-audio.webm',
      '/images/case-studies/the-yoga-lounge/yoga-ad-2-audio.webm',
    ],
    layout: 'half',
  },
  {
    title: 'Southern Tents & Events',
    industry: 'Event Services',
    videoUrl: '/images/case-studies/southern-tents/southern-tents.webm',
    liveUrl: 'https://southerntentsandevents.com/',
    services: ['Website Rebuild', 'Meta Ads', 'SEO'],
    layout: 'half',
  },
  {
    title: 'Greekfest Fayette',
    industry: 'Events - Festival',
    imageUrl: '/images/case-studies/greekfest-fayette/greekfest-og.webp',
    liveUrl: 'https://greekfestfayette.com/',
    liveUrlLabel: 'Visit Landing Page',
    services: ['Meta Ads', 'Landing Page', 'Video Creative'],
    layout: 'half',
  },
  {
    title: 'Bière de Mac',
    industry: 'Food & Beverage - Brewery',
    imageUrl: '/images/case-studies/biere-de-mac/biere-de-mac-og.webp',
    liveUrl: 'https://bieredemac.com/',
    services: ['Fully Custom Website'],
    layout: 'tall',
  },
];

// Grid span classes per layout. Mobile is always full-width single column.
const layoutClasses: Record<ProjectLayout, string> = {
  hero: 'col-span-1 lg:col-span-12',
  medium: 'col-span-1 lg:col-span-8',
  tall: 'col-span-1 lg:col-span-4 lg:row-span-2',
  small: 'col-span-1 lg:col-span-4',
  half: 'col-span-1 lg:col-span-6',
};

// Aspect ratio per layout (video area)
const aspectClasses: Record<ProjectLayout, string> = {
  hero: 'aspect-[21/9]',
  medium: 'aspect-[16/9]',
  tall: 'aspect-[4/5]',
  small: 'aspect-[16/9]',
  half: 'aspect-[16/9]',
};

function posterFromVideo(src: string): string {
  return src.replace(/\.(webm|mp4|mov)$/i, '-poster.webp');
}

/**
 * Lazy hover video. Renders <img loading="lazy"> by default so the
 * poster respects browser lazy loading. Only mounts the <video>
 * element after first hover, then keeps it mounted (cached) and
 * pauses on mouseleave for instant subsequent plays.
 */
function ProjectVideo({ src, className = '' }: { src: string; className?: string }) {
  const [activated, setActivated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (!activated) setActivated(true);
    // Use rAF so the video element exists before we try to play it on first hover
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  const poster = posterFromVideo(src);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Poster image as the default static visual. Browser lazy-loads it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activated ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* Video only mounts after the first hover */}
      {activated && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: CaseStudyProject;
  onPlayVideo: (src: string) => void;
}

function ProjectCard({ project, onPlayVideo }: ProjectCardProps) {
  const isHero = project.layout === 'hero';

  return (
    <article
      className={`${layoutClasses[project.layout]} group relative overflow-hidden rounded-[20px] bg-[#0E0E0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500`}
    >
      {/* Video / image area */}
      {(project.videoUrl || project.imageUrl) && (
        <div className={`relative w-full ${aspectClasses[project.layout]} overflow-hidden bg-black`}>
          {project.videoUrl ? (
            <ProjectVideo src={project.videoUrl} />
          ) : (
            // Static screenshot / OG image (no walkthrough video)
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
            />
          )}
          {/* Bottom gradient overlay so overlaid text stays legible */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

          {/* Title block overlaid on video */}
          <div className={`absolute inset-x-0 bottom-0 p-6 sm:p-8 ${isHero ? 'lg:p-10' : ''}`}>
            <p className="font-heading text-[#5FA99F] text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] mb-2">
              {project.industry}
            </p>
            <h2
              className={`font-heading font-bold text-white leading-[1.05] ${
                isHero
                  ? 'text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] max-w-[700px]'
                  : project.layout === 'medium'
                  ? 'text-[1.5rem] sm:text-[2rem]'
                  : 'text-[1.25rem] sm:text-[1.5rem]'
              }`}
            >
              {project.title}
            </h2>
          </div>
        </div>
      )}

      {/* Card meta — services + CTAs */}
      <div className={`px-6 sm:px-8 ${isHero ? 'lg:px-10' : ''} pt-5 pb-6 sm:pt-6 sm:pb-7`}>
        {project.services && project.services.length > 0 && (
          <p className="font-body text-white/45 text-[0.7rem] sm:text-[0.75rem] tracking-wide mb-5">
            {project.services.join(' · ')}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-heading text-[0.85rem] tracking-wide border-b border-white/30 hover:border-[#5FA99F] hover:text-[#5FA99F] transition-colors duration-300 pb-0.5"
            >
              <span>{project.liveUrlLabel || 'View Live'}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}

          {project.videoAds && project.videoAds.length > 0 && (
            <button
              onClick={() => project.videoAds && onPlayVideo(project.videoAds[0])}
              className="inline-flex items-center gap-2 text-white/70 font-heading text-[0.85rem] tracking-wide border-b border-white/15 hover:border-[#5FA99F] hover:text-[#5FA99F] transition-colors duration-300 pb-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>
                Watch {project.videoAds.length > 1 ? `${project.videoAds.length} Ads` : 'Ad'}
              </span>
            </button>
          )}

          {project.testimonialVideoUrl && (
            <button
              onClick={() => project.testimonialVideoUrl && onPlayVideo(project.testimonialVideoUrl)}
              className="inline-flex items-center gap-2 text-white/70 font-heading text-[0.85rem] tracking-wide border-b border-white/15 hover:border-[#5FA99F] hover:text-[#5FA99F] transition-colors duration-300 pb-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Watch Testimonial</span>
            </button>
          )}
        </div>

        {/* Render extra ad buttons if more than one */}
        {project.videoAds && project.videoAds.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.videoAds.map((ad, i) => (
              <button
                key={ad}
                onClick={() => onPlayVideo(ad)}
                className="text-[0.7rem] text-white/40 hover:text-[#5FA99F] transition-colors font-heading tracking-wide uppercase"
              >
                Ad {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

const testimonials = [
  {
    quote:
      "Working with Drive Lead Media has been a great experience. Our patient bookings increased by more than 40% in the first month, and they built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate. I highly recommend them.",
    name: 'Dr. Austin Dupont',
    role: 'Owner, Village Pediatrics',
    image: '/images/dr-austin-dupont.webp',
    imagePosition: 'center center',
  },
  {
    quote:
      "I came to Drive Lead Media with a big ask — a custom website, a casting platform, and a talent database all built from the ground up. They delivered on all of it. The site looks amazing, our traffic has completely blown up, and we're showing up at the top of Google and even ChatGPT now. I recommend them to everyone I know.",
    name: 'Chaz Yu',
    role: 'Owner, Set Life Casting',
    image: '/images/case-studies/setlife-casting/chaz.jpeg',
    imagePosition: 'center 30%',
  },
  {
    quote:
      "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and it was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe. Within days we started seeing new leads coming in. I'm so grateful and would definitely recommend them.",
    name: 'Jenn',
    role: 'Owner, The Yoga Lounge',
    image: '/images/jenn-yoga-lounge.webp',
    imagePosition: 'center center',
  },
  {
    quote:
      "After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly. Our traffic has exploded with better Google rankings and a huge uptick in leads from Facebook and Instagram ads. Nicolas and Drive Lead Media are the real deal!",
    name: 'Perla Rieder',
    role: 'Owner, Southern Tents and Events',
    image: '/images/perla.webp',
    imagePosition: 'center 20%',
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const handleDotClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(index);
    timerRef.current = setInterval(next, 6000);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative pb-[80px] sm:pb-[100px] px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-white mb-10"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="font-heading text-white/90 text-[0.95rem] sm:text-[1.1rem] leading-relaxed max-w-[650px] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {t.image && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#5FA99F]/40 flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: t.imagePosition || 'center center' }}
                      sizes="48px"
                    />
                  </div>
                )}
                <div className="text-left">
                  <p className="font-heading text-white font-bold text-[0.85rem]">{t.name}</p>
                  <p className="font-body text-white/60 text-[0.75rem]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2.5 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-[#5FA99F] scale-110'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredCreatives = [
  { src: '/images/case-studies/featured/converted/dream-ad-5.webm', label: 'Dream Pediatric Dentistry' },
  { src: '/images/case-studies/featured/converted/dream-ad-1.webm', label: "Flora D'Italia" },
  { src: '/images/case-studies/featured/converted/soa-testimonial-1.webm', label: 'School of Orthodontic Assisting' },
  { src: '/images/case-studies/featured/converted/ptc-savannah.webm', label: 'Pain Treatment Centers of Georgia' },
  { src: '/images/case-studies/featured/converted/fayette-care.webm', label: 'Fayette Care Clinic' },
  { src: '/images/case-studies/featured/converted/maven-ad.webm', label: 'Maven Baseball Lab' },
  { src: '/images/case-studies/featured/converted/maven-ad-2.webm', label: 'Maven Baseball Lab' },
  { src: '/images/case-studies/featured/converted/dream-ad-3.webm', label: 'Dream Pediatric Dentistry' },
  { src: '/images/case-studies/featured/converted/antique-mall-ad.webm', label: 'Marietta Antique Mall' },
  { src: '/images/case-studies/featured/converted/soa-testimonial-2.webm', label: 'School of Orthodontic Assisting' },
  { src: '/images/case-studies/featured/converted/yoga-ad.webm', label: 'Yoga Lounge' },
  { src: '/images/case-studies/featured/converted/dream-ad-4.webm', label: 'Dream Pediatric Dentistry' },
  { src: '/images/case-studies/featured/converted/fcc-video.webm', label: 'Fayette Care Clinic' },
  { src: '/images/case-studies/featured/converted/soa-testimonial-3.webm', label: 'School of Orthodontic Assisting' },
  { src: '/images/case-studies/featured/converted/dream-ad-2.webm', label: 'Dream Pediatric Dentistry' },
];

function PhoneFrame({ src, label, onPlay }: { src: string; label: string; onPlay: (src: string) => void }) {
  const [activated, setActivated] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (!activated) setActivated(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <button
      onClick={() => onPlay(src)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex-shrink-0 group cursor-pointer"
    >
      <div className="relative w-[180px] sm:w-[200px] rounded-[24px] overflow-hidden border-2 border-white/10 bg-[#111] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-[#5FA99F]/40 transition-all duration-300 group-hover:scale-[1.03]">
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterFromVideo(src)}
            alt={label}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activated ? 'opacity-0' : 'opacity-100'}`}
          />
          {activated && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              loop
              preload="auto"
            >
              <source src={src} type="video/webm" />
            </video>
          )}

          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 ml-0.5 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent" />
            </div>
          </div>
        </div>

        <div className="py-2.5 px-3 text-center">
          <p className="font-heading text-white/70 text-[0.65rem] uppercase tracking-wider truncate">{label}</p>
        </div>
      </div>
    </button>
  );
}

function FeaturedCreativeReel({ onPlay }: { onPlay: (src: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pb-[80px] sm:pb-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-end justify-between"
        >
          <div>
            <span className="text-[#5FA99F] text-[0.65rem] font-heading uppercase tracking-widest mb-2 block">
              Our Work
            </span>
            <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-white">
              Featured Creative
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#5FA99F]/50 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#5FA99F]/50 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />
        {featuredCreatives.map((creative, i) => (
          <div key={i}>
            <PhoneFrame src={creative.src} label={creative.label} onPlay={onPlay} />
          </div>
        ))}
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />
      </div>
    </section>
  );
}

/**
 * Founder Venture feature — Antique Partner. A distinct band that sets our own
 * product apart from client case studies. The browser mockup shows the live
 * site's OG image (public/images/ventures/antique-partner-og.webp).
 */
function FounderVenture() {
  return (
    <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1280px] mx-auto"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-[#5FA99F]/25 bg-[#0E0E0E] shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] bg-[#5FA99F] opacity-[0.12] rounded-full blur-[120px]" />

          <div className="grid lg:grid-cols-2">
            {/* Copy */}
            <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-[#5FA99F]/40 bg-[#5FA99F]/10 px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FA99F]" />
                <span className="font-heading text-[#5FA99F] text-[0.6rem] uppercase tracking-[0.2em]">
                  Founder Venture · Built &amp; Owned by Us
                </span>
              </span>

              <h2 className="font-heading font-bold text-white text-[2rem] sm:text-[2.75rem] leading-[1.05] mb-4">
                Antique Partner
              </h2>

              <p className="font-body text-white/70 text-[1rem] sm:text-[1.075rem] leading-relaxed mb-8 max-w-[520px]">
                The largest online directory of antique stores, thrift shops, and flea markets in North
                America, with over 40,000 listings across the U.S. and Canada. Shoppers browse an
                interactive map to find stores near them and discover vintage finds, while store owners
                get a free listing in front of serious collectors. A platform we founded, designed, and
                built ourselves.
              </p>

              <a
                href="https://antiquepartner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white font-heading font-bold text-[0.9rem] tracking-wide px-6 py-3 rounded-xl hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_30px_rgba(95,169,159,0.35)]"
              >
                <span>Visit Antique Partner</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Browser mockup — swap the gradient "screen" for a real screenshot later */}
            <div className="relative min-h-[280px] lg:min-h-[440px] bg-gradient-to-br from-[#141414] to-[#0A0A0A] p-6 sm:p-10 lg:p-12 flex items-center justify-center">
              <div className="w-full max-w-[540px] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#1b1b1b] border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-black/40 px-3 py-1 font-body text-white/40 text-[0.7rem]">
                    antiquepartner.com
                  </span>
                </div>
                {/* Screen — live site OG image */}
                <div className="relative aspect-[16/10] bg-[#0A0A0A]">
                  <Image
                    src="/images/ventures/antique-partner-og.webp"
                    alt="Antique Partner — antique & thrift store directory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 540px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function CaseStudiesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeVideoIsVertical, setActiveVideoIsVertical] = useState(true);

  const handlePlayVideo = (src: string) => {
    // Heuristic: ads are 9:16 vertical, testimonial/walkthrough videos are 16:9
    const verticalHints = ['ad-', '-ad', '9x16', 'creative'];
    const isVertical = verticalHints.some((hint) => src.includes(hint));
    setActiveVideoIsVertical(isVertical);
    setActiveVideo(src);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#5FA99F] text-sm font-heading uppercase tracking-widest mb-4 block">
              Real Results
            </span>
            <h1 className="font-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white mb-6 leading-[1.1]">
              Case Studies
            </h1>
            <p className="font-body text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[800px] leading-relaxed text-gray-300">
              See how we help local businesses grow with custom websites, Meta ads, and high-converting creative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Venture — our own product (lead feature) */}
      <FounderVenture />

      {/* Editorial Masonry Grid */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7 auto-rows-auto"
        >
          {projects
            .filter((project) => project.ready !== false)
            .map((project) => (
              <ProjectCard key={project.title} project={project} onPlayVideo={handlePlayVideo} />
            ))}
        </motion.div>
      </section>

      {/* Featured Creative Reel */}
      <FeaturedCreativeReel onPlay={handlePlayVideo} />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[900px] mx-auto bg-[#1A1A1A]/40 backdrop-blur-xl rounded-[32px] border-2 border-[#5FA99F]/30 p-8 sm:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500"
        >
          <h2 className="font-heading text-[2rem] sm:text-[3rem] font-bold text-white mb-4 leading-tight">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="font-body text-gray-300 text-[1.125rem] mb-8 leading-relaxed max-w-[600px] mx-auto">
            Book a free strategy call and let&apos;s map out how to grow your business.
          </p>
          <Link
            href="/book"
            className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-4 text-[1.125rem] rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)]"
          >
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-h-[90vh] ${activeVideoIsVertical ? 'max-w-[400px]' : 'max-w-[900px]'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl font-bold"
                aria-label="Close video"
              >
                ✕
              </button>
              <video
                className="w-full rounded-2xl"
                autoPlay
                controls
                playsInline
              >
                <source src={activeVideo} type={activeVideo.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
