'use client';

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [doorsOpened, setDoorsOpened] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Doors slide open based on scroll, but once fully open they stay open
  const leftDoorXRaw = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '-100%']);
  const rightDoorXRaw = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '100%']);
  const videoOpacityRaw = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  // Lock doors open once they've fully opened
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v >= 0.45 && !doorsOpened) {
      setDoorsOpened(true);
    }
  });

  const leftDoorX = doorsOpened ? '-100%' : leftDoorXRaw;
  const rightDoorX = doorsOpened ? '100%' : rightDoorXRaw;
  const videoOpacity = doorsOpened ? 1 : videoOpacityRaw;

  return (
    // SECTION 3: CLIENT TESTIMONIAL VIDEO - Elevator door animation reveals video on scroll
    // Reduced padding for less empty scroll space, more professional pacing
    <section ref={containerRef} className="relative min-h-screen pt-[15vh] md:pt-[25vh] pb-[12px] md:pb-[25vh] overflow-hidden" style={{ zIndex: 3 }}>
      {/* Black to transparent gradient blend at top */}
      <div className="absolute top-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-black via-black/50 to-transparent pointer-events-none" style={{ zIndex: -1 }} />

      <div className="max-w-[900px] mx-auto px-4 md:px-6 relative z-10">
        {/* Video Container */}
        <div className="relative">
          {/* Video - 16:9 aspect ratio */}
          <div className="relative bg-black rounded-2xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* YouTube Embed */}
              <motion.iframe
                style={{ opacity: videoOpacity }}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/YBLniwOCtKU?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1${isPlaying ? '&autoplay=1' : ''}`}
                title="Village Pediatrics of St. Augustine Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Branded Teal Play Button Overlay - Only fades when clicked */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 z-[5] flex items-center justify-center group cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      {/* Branded teal circular button */}
                      <div className="w-20 h-20 rounded-full bg-[#5FA99F] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a8a81] shadow-lg group-hover:shadow-[0_0_30px_rgba(95,169,159,0.6)]">
                        {/* Play triangle */}
                        <div className="w-0 h-0 ml-1 border-t-[14px] border-t-transparent border-l-[22px] border-l-white border-b-[14px] border-b-transparent" />
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
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                  }}
                />
                <div className="text-white text-2xl font-bold opacity-50 relative z-10">▶</div>
              </motion.div>

              <motion.div
                style={{ x: rightDoorX }}
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[hsl(204,97%,15%)] to-[hsl(204,97%,20%)] z-10 flex items-center justify-start pl-4 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_-2px_0_0_rgba(255,255,255,0.4)]"
              >
                {/* Grid pattern overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                  }}
                />
                <div className="text-white text-2xl font-bold opacity-50 relative z-10">◀</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
