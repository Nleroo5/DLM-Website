'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const newProgress = Math.min((scrolled / maxHeight) * 100, 100);
      setProgress(newProgress);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgressBar);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgressBar();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[clamp(3px,0.5vw,4px)] bg-[rgba(238,244,217,0.3)] z-[10000]">
      <div
        className="h-full bg-gradient-to-r from-[#F2A922] to-[#05908C] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
