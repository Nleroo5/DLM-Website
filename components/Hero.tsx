'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackVideoEngagement } from '@/components/GoogleAnalytics';
import { trackVideoEvent } from '@/components/MetaPixel';

export default function Hero() {
  const [showArrow, setShowArrow] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoSources, setVideoSources] = useState<{ webm: string; mp4: string }>({
    webm: '/Videos/drive-lead-media-digital-marketing-hero-desktop.webm',
    mp4: '/Videos/drive-lead-media-digital-marketing-hero-desktop.mp4'
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect optimal video resolution based on screen size and orientation
  useEffect(() => {
    const selectVideoSource = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPortrait = height > width;

      // Portrait mode - use portrait video
      if (isPortrait && width <= 768) {
        return {
          webm: '/Videos/drive-lead-media-digital-marketing-hero-mobile-portrait.webm',
          mp4: '/Videos/drive-lead-media-digital-marketing-hero-mobile-portrait.mp4'
        };
      }

      // Landscape mode - select based on screen width
      if (width < 640) {
        return {
          webm: '/Videos/drive-lead-media-digital-marketing-hero-mobile-landscape.webm',
          mp4: '/Videos/drive-lead-media-digital-marketing-hero-mobile-landscape.mp4'
        };
      } else if (width < 1024) {
        return {
          webm: '/Videos/drive-lead-media-digital-marketing-hero-tablet.webm',
          mp4: '/Videos/drive-lead-media-digital-marketing-hero-tablet.mp4'
        };
      } else {
        return {
          webm: '/Videos/drive-lead-media-digital-marketing-hero-desktop.webm',
          mp4: '/Videos/drive-lead-media-digital-marketing-hero-desktop.mp4'
        };
      }
    };

    setVideoSources(selectVideoSource());

    // Don't allow resize to interrupt playback
    const handleResize = () => {
      if (!hasPlayedRef.current) {
        setVideoSources(selectVideoSource());
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Comprehensive video playback handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setVideoEnded(true);
      setShowArrow(true);
      hasPlayedRef.current = true;

      // Track video completion (GA4 & Meta Pixel)
      trackVideoEngagement('Hero Video', 'complete', 100);
      trackVideoEvent('complete', 'Hero Video', 100);

      // Dispatch custom event for navigation to listen to
      window.dispatchEvent(new CustomEvent('heroVideoEnded'));

      // Clear timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handlePlaying = () => {
      // Track video start (GA4 & Meta Pixel)
      trackVideoEngagement('Hero Video', 'start', 0);
      trackVideoEvent('start', 'Hero Video', 0);

      // Safety timeout: force end sequence if video doesn't end naturally
      // Video is 8 seconds, add 2 second buffer
      timeoutRef.current = setTimeout(() => {
        if (!videoEnded) {
          console.warn('Video timeout reached, forcing end sequence');
          handleVideoEnd();
        }
      }, 10000);
    };

    const handleError = (e: Event) => {
      console.error('Video playback error:', e);
      // On error, skip to logo immediately
      handleVideoEnd();
    };

    const handleCanPlay = () => {
      // Aggressively try to play when video can play
      video.play().catch((error) => {
        console.warn('Play attempt failed:', error);
        // Retry play on next interaction
        const retryPlay = () => {
          video.play().catch(console.error);
          document.removeEventListener('touchstart', retryPlay);
          document.removeEventListener('click', retryPlay);
        };
        document.addEventListener('touchstart', retryPlay, { once: true });
        document.addEventListener('click', retryPlay, { once: true });
      });
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [videoEnded]);


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
          poster="/Videos/hero-poster.webp"
          className="w-full h-full object-cover"
          key={`${videoSources.webm}-${videoSources.mp4}`}
        >
          <source src={videoSources.webm} type="video/webm" />
          <source src={videoSources.mp4} type="video/mp4" />
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

      {/* Scroll Arrow - Appears after video ends */}
      <AnimatePresence>
        {showArrow && (
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            style={{ zIndex: 10 }}
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

