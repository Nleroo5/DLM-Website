'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhatWeDo() {
  return (
    // SECTION 2: PARTICLE FORMATION AREA - Where particle text forms (WhatWeDo component)
    // Height: 150vh provides optimal scroll space for particle animation phases:
    // - Fade in (15vh), Formation (30vh), Hold (60vh), Fade out (45vh)
    // Hidden on mobile - desktop only for particle animation
    <section className="hidden md:flex relative h-[80vh] items-center overflow-hidden" style={{ zIndex: 2 }}>
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#5FA99F] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-[#85C7B3] opacity-5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
