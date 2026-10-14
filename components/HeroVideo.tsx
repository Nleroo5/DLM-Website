'use client';

import { useEffect, useRef } from 'react';

// Vertical (9:16) explainer video for the homepage hero: what happens after
// someone clicks an ad. Muted autoplay loop; paused with controls for visitors
// who prefer reduced motion.
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      video.controls = true;
    }
  }, []);

  return (
    <div className="relative mx-auto w-[min(78vw,320px)] sm:w-[340px] lg:w-auto lg:h-[min(72vh,640px)] aspect-[9/16] rounded-[28px] overflow-hidden border border-[#5FA99F]/30 bg-[#0b2a30] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/dlm-after-the-click-poster.jpg"
        aria-label="Animation: what happens after someone clicks your ad. The ad earns the click, the page explains the offer, one clear next step, and they're on their way."
      >
        <source src="/Videos/dlm-after-the-click.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
