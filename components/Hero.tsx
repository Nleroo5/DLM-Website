'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MorphingParticles } from '@/components/ConstellationHero/MorphingParticles';
import { Z_INDEX } from '@/components/ConstellationHero/constants';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Show arrow and logo when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      setShowArrow(true);
      // Dispatch custom event for navigation to listen to
      window.dispatchEvent(new CustomEvent('heroVideoEnded'));
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);


  return (
    // SECTION 1: HERO - Main hero section with particle animation container and background video
    // Fixed height ensures predictable scroll timing for particle animation trigger
    <section
      className="relative w-full h-screen flex items-end justify-center overflow-hidden pt-[100px] xs:pt-[110px] sm:pt-[120px] px-4 xs:px-5 sm:px-6"
      suppressHydrationWarning
      style={{ zIndex: 1, backgroundColor: '#000000' }}
    >
      {/* Layer 0: Background Video - Must be behind everything */}
      <motion.div
        className="absolute inset-0"
        style={{
          zIndex: -1,  // Negative z-index to ensure it's behind particles
        }}
        animate={{
          opacity: videoEnded ? 0 : 1
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/Videos/dlm-hero-v1.webm" type="video/webm" />
          <source src="/Videos/dlm-hero-v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Layer 0.5: Animated Logo - Appears when video ends */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            <motion.div
              className="relative"
              initial={{
                scale: 0,
                filter: 'blur(20px)'
              }}
              animate={{
                scale: [0, 1.2, 1],
                filter: ['blur(20px)', 'blur(5px)', 'blur(0px)']
              }}
              transition={{
                duration: 0.8,
                delay: 0,
                times: [0, 0.6, 1],
                ease: [0.34, 1.56, 0.64, 1] // Custom warp/elastic easing
              }}
            >
              <motion.img
                src="/images/dlm-logo.webp"
                alt="Drive Lead Media Logo"
                className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Layer 1: Morphing Particles with Text Formation */}
      <MorphingParticles />

      {/* Layer 2: Hero Content - Empty, particles are the visual */}
      <motion.div
        className="relative text-center max-w-[1200px] text-white w-full"
        style={{ zIndex: Z_INDEX.content }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      </motion.div>

      {/* Layer 3: Scroll Arrow - Appears after video ends */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{ zIndex: Z_INDEX.content + 1 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.4))',
              }}
            >
              <ChevronDown
                className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 text-white"
                strokeWidth={2.5}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

// Mobile CTA Section - Static section between MeetTheTeam and Footer
export function MobileCTASection() {
  return (
    <section className="block md:hidden relative bg-black py-10 px-6">
      <div className="flex items-center justify-center">
        <Link href="/contact" className="block">
          <motion.button
            className="relative px-8 py-4 bg-transparent rounded-xl font-heading font-bold text-white text-lg cursor-pointer"
            style={{
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
              border: '3px solid rgba(255, 255, 255, 0.9)',
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 45px rgba(255, 255, 255, 0.6), 0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut'
            }}
          >
            Start Driving Leads
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

// CTA Button Portal - Desktop only, animated version
export function CTAButton() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      // Desktop: Show CTA after particles completely disappear
      const whatWeDoStart = viewportHeight * 6.0;
      const whatWeDoScrollRange = viewportHeight * 1.5;
      const adjustedScroll = Math.max(0, currentScroll - whatWeDoStart);
      const progress = Math.min(adjustedScroll / whatWeDoScrollRange, 1);
      const shouldShowCTA = progress >= 0.98;
      setShowCTA(shouldShowCTA);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showCTA && (
        <motion.div
          className="hidden md:flex fixed inset-0 items-center justify-center"
          style={{
            zIndex: 99999,
            pointerEvents: 'none'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            <Link href="/contact" className="block">
              <motion.button
                className="relative px-8 py-4 bg-transparent rounded-xl font-heading font-bold text-white text-lg overflow-hidden group cursor-pointer"
                style={{
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 12px 32px rgba(0, 0, 0, 0.4)',
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
                    '0 0 40px rgba(255, 255, 255, 0.5), 0 10px 28px rgba(0, 0, 0, 0.3)',
                    '0 0 30px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
                  ],
                  borderColor: [
                    'rgba(255, 255, 255, 0.9)',
                    'rgba(95, 250, 159, 0.9)',
                    'rgba(255, 255, 255, 0.9)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  },
                  borderColor: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }
                }}
              >
                {/* Animated border - separate element for better control */}
                <motion.div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    border: '3px solid rgba(255, 255, 255, 0.9)',
                  }}
                  animate={{
                    borderColor: [
                      'rgba(255, 255, 255, 0.9)',
                      'rgba(95, 250, 159, 0.9)',
                      'rgba(255, 255, 255, 0.9)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />

                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="relative flex items-center gap-2 pointer-events-none">
                  Start Driving Leads
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
