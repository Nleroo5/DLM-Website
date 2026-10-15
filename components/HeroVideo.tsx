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
    <div
      // Phones: full screen width, cropped to 18:25. Every scene's content sits
      // between 13% and 79% of the frame height, so the crop only removes empty
      // teal above and below, and the video gets 28% bigger at the same height.
      // max-w-none: the global mobile rule caps elements at their parent's width.
      // ml-[50%] + -translate-x-1/2 centers it on the screen past the hero padding.
      className="hero-video-frame relative ml-[50%] -translate-x-1/2 sm:mx-auto sm:translate-x-0 w-screen max-w-none aspect-[18/25] sm:w-[340px] sm:aspect-[9/16] lg:w-auto lg:h-[min(82vh,780px)] overflow-hidden bg-[#002a38]"
    >
      <video
        ref={videoRef}
        className="hero-video w-full h-full object-cover object-[50%_26%] sm:object-center"
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
