'use client';

import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Check if mobile device (screen width < 768px)
    const isMobile = window.innerWidth < 768;

    setShouldReduceMotion(mediaQuery.matches || isMobile);

    // Listen for changes
    const handleChange = () => {
      const isMobileNow = window.innerWidth < 768;
      setShouldReduceMotion(mediaQuery.matches || isMobileNow);
    };

    mediaQuery.addEventListener('change', handleChange);
    window.addEventListener('resize', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  return shouldReduceMotion;
}
