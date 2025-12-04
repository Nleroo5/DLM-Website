'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Track section as it moves through viewport - standard pattern for smooth scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]  // Full viewport tracking: section enters bottom → exits top
  });

  // Doors start CLOSED (0%) and slide apart - complete opening when video is just past halfway up screen
  // Earlier completion (0.45) means doors fully open when video crosses screen center
  const leftDoorX = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '-100%']);
  const rightDoorX = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '100%']);

  // Video fades in as doors open (25% → 45%)
  const videoOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  return (
    // SECTION 3: CLIENT TESTIMONIAL VIDEO - Elevator door animation reveals video on scroll
    // Reduced padding for less empty scroll space, more professional pacing
    <section ref={containerRef} className="relative min-h-screen pt-[15vh] md:pt-[25vh] pb-[10vh] md:pb-[25vh]" style={{ zIndex: 3 }}>
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* Video Container */}
        <div className="relative">
          {/* Video - 16:9 aspect ratio */}
          <div className="relative bg-black rounded-2xl overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* YouTube Embed */}
              <motion.iframe
                style={{ opacity: videoOpacity }}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/YBLniwOCtKU?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=1${isPlaying ? '&autoplay=1&mute=0' : ''}`}
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
                className="absolute top-0 left-0 w-1/2 h-full bg-black z-10 flex items-center justify-end pr-4 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_2px_0_0_rgba(255,255,255,0.4)]"
              >
                <div className="text-white text-2xl font-bold opacity-50">▶</div>
              </motion.div>

              <motion.div
                style={{ x: rightDoorX }}
                className="absolute top-0 right-0 w-1/2 h-full bg-black z-10 flex items-center justify-start pl-4 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_-2px_0_0_rgba(255,255,255,0.4)]"
              >
                <div className="text-white text-2xl font-bold opacity-50">◀</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
