'use client';

import { useState, useRef, useEffect, useCallback, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
}

interface CaseStudyProject {
  title: string;
  industry: string;
  thumbnail?: string;
  videoUrl?: string;
  liveUrl?: string;
  liveUrlLabel?: string;
  services?: string[];
  metrics?: Metric[];
  testimonial?: Testimonial;
  videoAds?: string[];
  testimonialVideoUrl?: string;
}

const projects: CaseStudyProject[] = [
  {
    title: 'Pain Treatment Centers of Georgia',
    industry: 'Healthcare - Pain Management',
    videoUrl: '/images/case-studies/pain-treatment-centers/ptc-health.webm',
    liveUrl: 'https://book.ptchealth.com/',
    liveUrlLabel: 'Visit Landing Page',
    services: ['Meta Ads', 'Landing Page', 'Video Creative'],
    metrics: [
      { value: '$14.63', label: 'Cost Per Lead' },
      { value: '90+', label: 'Leads (1st Month)' },
      { value: '+40%', label: 'Website Traffic' },
    ],
    videoAds: [
      '/images/case-studies/pain-treatment-centers/ptc-ad-1-audio.webm',
      '/images/case-studies/pain-treatment-centers/ptc-ad-2-audio.webm',
    ],
  },
  {
    title: 'Set Life Casting',
    industry: 'Entertainment - Casting',
    videoUrl: '/images/case-studies/setlife-casting/setlife.webm',
    liveUrl: 'https://www.setlifecasting.com/',
    services: ['Fully Custom Website', 'Casting Platform', 'Talent Database'],
    metrics: [
      { value: '#3', label: 'Google Rankings' },
      { value: '#1', label: 'ChatGPT Rankings' },
      { value: '+800%', label: 'Website Traffic' },
    ],
    testimonial: {
      quote:
        "I came to Drive Lead Media with a big ask — a custom website, a casting platform, and a talent database all built from the ground up. They delivered on all of it. The site looks amazing, our traffic has completely blown up, and we're showing up at the top of Google and even ChatGPT now. I recommend them to everyone I know.",
      name: 'Chaz Yu',
      role: 'Owner, Set Life Casting',
      image: '/images/case-studies/setlife-casting/chaz.jpeg',
      imagePosition: 'center 30%',
    },
  },
  {
    title: 'Village Pediatrics of St. Augustine',
    industry: 'Healthcare - Pediatrics',
    thumbnail: '/images/case-studies/village-pediatrics/thumbnail.webp',
    videoUrl: '/images/case-studies/village-pediatrics/villagepeds.webm',
    liveUrl: 'https://www.myvillagepeds.com/',
    services: ['Fully Custom Website', 'SEO', 'Meta Ads', 'Tracking Setup'],
    metrics: [
      { value: '+40%', label: 'Patient Bookings (1st Month)' },
      { value: '6.8x', label: 'ROAS' },
      { value: '+1700%', label: 'Website Traffic' },
    ],
    testimonial: {
      quote:
        "Working with Drive Lead Media has been a great experience. Our patient bookings increased by more than 40% in the first month, and they built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate. I highly recommend them.",
      name: 'Dr. Austin Dupont',
      role: 'Owner, Village Pediatrics',
      image: '/images/dr-austin-dupont.webp',
    },
    testimonialVideoUrl: '/images/case-studies/village-pediatrics/testimonial.webm',
  },
  {
    title: 'Marietta Antique Mall',
    industry: 'Retail - Antiques',
    videoUrl: '/images/case-studies/marietta-antique-mall/marietta-antique.webm',
    liveUrl: 'https://www.mariettaantiquemall.com/',
    services: ['Fully Custom Website', 'Meta Ads', 'Video Creative'],
    metrics: [
      { value: '+1200%', label: 'Website Traffic' },
      { value: 'Back-to-Back', label: 'Record Sales Months' },
      { value: '#4', label: 'Google Rankings' },
    ],
    videoAds: [
      '/images/case-studies/marietta-antique-mall/marietta-ad-1-audio.webm',
      '/images/case-studies/marietta-antique-mall/marietta-ad-2-audio.webm',
    ],
  },
  {
    title: 'Wilcox Tax Firm',
    industry: 'Financial Services - Tax',
    videoUrl: '/images/case-studies/wilcox-tax-firm/wilcox-tax.webm',
    liveUrl: 'https://www.wilcox-tax.com/',
    services: ['Fully Custom Website', 'Meta Ads', 'Video Creative'],
    metrics: [
      { value: '8.2x', label: 'ROAS' },
      { value: '$11', label: 'Cost Per Lead' },
      { value: '+640%', label: 'Website Traffic' },
    ],
    videoAds: [
      '/images/case-studies/wilcox-tax-firm/wilcox-ad-1.webm',
      '/images/case-studies/wilcox-tax-firm/wilcox-ad-2.webm',
    ],
  },
  {
    title: 'The Yoga Lounge',
    industry: 'Fitness & Wellness',
    videoUrl: '/images/case-studies/the-yoga-lounge/yoga.webm',
    services: ['Meta Ads', 'Video Creative', 'Ad Strategy'],
    metrics: [
      { value: '$3.73', label: 'Cost Per Lead' },
      { value: '$250', label: 'Ad Spend' },
      { value: '67', label: 'Leads Generated' },
    ],
    testimonial: {
      quote:
        "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and it was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe. Within days we started seeing new leads coming in. I'm so grateful and would definitely recommend them.",
      name: 'Jenn',
      role: 'Owner, The Yoga Lounge',
      image: '/images/jenn-yoga-lounge.webp',
    },
    videoAds: [
      '/images/case-studies/the-yoga-lounge/yoga-ad-1-audio.webm',
      '/images/case-studies/the-yoga-lounge/yoga-ad-2-audio.webm',
    ],
  },
  {
    title: 'Southern Tents & Events',
    industry: 'Event Services',
    videoUrl: '/images/case-studies/southern-tents/southern-tents.webm',
    liveUrl: 'https://southerntentsandevents.com/',
    services: ['Website Rebuild', 'Meta Ads', 'SEO'],
    metrics: [
      { value: '#3', label: 'Google Rankings (1st Month)' },
      { value: '+500%', label: 'Increase in Leads' },
      { value: '4.2x', label: 'ROAS' },
    ],
    testimonial: {
      quote:
        "After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly. Our traffic has exploded with better Google rankings and a huge uptick in leads from Facebook and Instagram ads. Nicolas and Drive Lead Media are the real deal!",
      name: 'Perla Rieder',
      role: 'Owner, Southern Tents and Events',
      image: '/images/perla.webp',
      imagePosition: 'center 20%',
    },
  },
];

function ElevatorDoorVideo({ videoUrl }: { videoUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doorsOpened, setDoorsOpened] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const leftDoorXRaw = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '-100%']);
  const rightDoorXRaw = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '100%']);
  const videoOpacityRaw = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v >= 0.45 && !doorsOpened) {
      setDoorsOpened(true);
    }
  });

  const leftDoorX = doorsOpened ? '-100%' : leftDoorXRaw;
  const rightDoorX = doorsOpened ? '100%' : rightDoorXRaw;
  const videoOpacity = doorsOpened ? 1 : videoOpacityRaw;

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black rounded-2xl overflow-hidden">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <motion.video
          ref={videoRef}
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
          controls={isPlaying}
          playsInline
          preload="metadata"
        >
          <source src={videoUrl} type={videoUrl.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </motion.video>

        <AnimatePresence>
          {!isPlaying && (
            <motion.button
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handlePlay}
              className="absolute inset-0 z-[5] flex items-center justify-center group cursor-pointer"
              aria-label="Play video"
            >
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-[#5FA99F]/20 animate-ping" />
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5FA99F] to-[#85C7B3] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(95,169,159,0.4)] group-hover:shadow-[0_0_40px_rgba(95,169,159,0.6)]">
                  <div className="w-0 h-0 ml-1.5 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent" />
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Elevator Doors */}
        <motion.div
          style={{ x: leftDoorX }}
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[hsl(204,97%,15%)] to-[hsl(204,97%,20%)] z-10 flex items-center justify-end pr-4 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_2px_0_0_rgba(255,255,255,0.4)]"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="text-white text-2xl font-bold opacity-50 relative z-10">&blacktriangleright;</div>
        </motion.div>

        <motion.div
          style={{ x: rightDoorX }}
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[hsl(204,97%,15%)] to-[hsl(204,97%,20%)] z-10 flex items-center justify-start pl-4 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_-2px_0_0_rgba(255,255,255,0.4)]"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="text-white text-2xl font-bold opacity-50 relative z-10">&blacktriangleleft;</div>
        </motion.div>
      </div>
    </div>
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

  // Auto-rotate every 6 seconds
  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  // Reset timer on manual navigation
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              {/* Quote */}
              <p className="font-heading text-white/90 text-[0.95rem] sm:text-[1.1rem] leading-relaxed max-w-[650px] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client info */}
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

        {/* Navigation dots */}
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
  return (
    <button
      onClick={() => onPlay(src)}
      className="flex-shrink-0 group cursor-pointer"
    >
      {/* Phone frame */}
      <div className="relative w-[180px] sm:w-[200px] rounded-[24px] overflow-hidden border-2 border-white/10 bg-[#111] shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-[#5FA99F]/40 transition-all duration-300 group-hover:scale-[1.03]">
        {/* Screen area - 9:16 ratio */}
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
          >
            <source src={src} type="video/webm" />
          </video>

          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-0 h-0 ml-0.5 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent" />
            </div>
          </div>
        </div>

        {/* Label */}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

      {/* Scrolling reel */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Left spacer to align with max-w-[1200px] */}
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />
        {featuredCreatives.map((creative, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <PhoneFrame src={creative.src} label={creative.label} onPlay={onPlay} />
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-[max(0px,calc((100vw-1200px)/2))]" />
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

      {/* Projects */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Fragment key={project.title}>
              {/* Testimonial Video - centred, spanning full row */}
              {project.testimonialVideoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="self-center"
                >
                  <p className="font-heading text-[#5FA99F] text-[0.65rem] uppercase tracking-widest mb-3">Client Testimonial</p>
                  <ElevatorDoorVideo videoUrl={project.testimonialVideoUrl} />
                </motion.div>
              )}
            {(() => {
            // Standard card
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[20px] overflow-hidden"
              >
                {/* Video or Image Preview */}
                {project.videoUrl ? (
                  <div className="relative w-full overflow-hidden bg-black flex justify-center">
                    <video
                      className="max-w-full max-h-[400px]"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.videoUrl} type={project.videoUrl.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                    </video>
                  </div>
                ) : project.thumbnail ? (
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 580px"
                    />
                  </div>
                ) : null}

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {/* Industry + Title */}
                  <span className="text-[#5FA99F] text-[0.65rem] font-heading uppercase tracking-widest">
                    {project.industry}
                  </span>
                  <h2 className="font-heading text-[1.15rem] sm:text-[1.3rem] font-bold text-white mt-1 mb-3">
                    {project.title}
                  </h2>

                  {/* Service Tags — only if they exist */}
                  {project.services && project.services.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="font-body text-[0.6rem] text-[#5FA99F] bg-[#5FA99F]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Metrics — only if they exist */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex justify-between mb-4 py-3 border-y border-[rgba(95,169,159,0.1)]">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center flex-1">
                          <p className="font-heading text-[1.5rem] font-bold text-[#f2a921] leading-none">
                            {metric.value}
                          </p>
                          <p className="font-body text-gray-400 text-[0.65rem] uppercase tracking-wider mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Video Ads — only if they exist */}
                  {project.videoAds && project.videoAds.length > 0 && (
                    <div className="mb-4">
                      <p className="font-heading text-white/60 text-[0.7rem] uppercase tracking-wider mb-3">Video Ads</p>
                      <div className="flex gap-3">
                        {project.videoAds.map((ad, adIndex) => (
                          <button
                            key={adIndex}
                            onClick={() => setActiveVideo(ad)}
                            className="flex-1 inline-flex items-center justify-center gap-2 border border-[rgba(95,169,159,0.3)] bg-[rgba(95,169,159,0.05)] text-[#5FA99F] px-4 py-2.5 rounded-xl font-heading font-bold text-[0.8rem] hover:border-[#5FA99F] hover:bg-[rgba(95,169,159,0.1)] hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Video Ad {adIndex + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Visit Website Button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-[rgba(95,169,159,0.3)] bg-[rgba(95,169,159,0.05)] text-[#5FA99F] px-5 py-2.5 rounded-xl font-heading font-bold text-[0.85rem] hover:border-[#5FA99F] hover:bg-[rgba(95,169,159,0.1)] hover:text-white transition-all duration-300 w-full"
                    >
                      <span>{project.liveUrlLabel || 'Visit Website'}</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            );
            })()}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Featured Creative Reel */}
      <FeaturedCreativeReel onPlay={setActiveVideo} />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              className="relative max-w-[400px] w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl font-bold"
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
