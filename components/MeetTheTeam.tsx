'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function MeetTheTeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Trigger animation when section enters viewport
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.01 && !hasTriggered) {
        setHasTriggered(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasTriggered]);

  const teamMembers = [
    {
      name: "Nicolas Leroo",
      role: "Co-Founder & COO",
      bio: "Nicolas brings Meta Certification in Digital Marketing with expertise in Facebook, Instagram advertising, and web design. He builds campaigns that reach the right audience and deliver measurable ROI.",
      image: "/images/1.png"
    },
    {
      name: "Tommy Duda",
      role: "Co-Founder & Chief Creative Officer",
      bio: "Tommy is a specialist in video production and ad creative, leading the direction of every project. He ensures ads look professional, capture attention, and convert viewers into customers.",
      image: "/images/2.png"
    },
    {
      name: "Brenna Skalski Kirillov",
      role: "VP of Sales & Business Development",
      bio: "As VP of Sales & Business Development, Brenna leads client acquisition and account management. She ensures new clients are set up for success and existing partnerships continue to grow.",
      image: "/images/3.png"
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-[60px] md:py-[120px] px-6 bg-[#000000] overflow-hidden"
      style={{ zIndex: 7 }}
    >
      {/* SVG Filters for Laser Glow Effects */}
      <svg className="absolute w-0 h-0">
        <defs>
          {/* Intense glow filter for laser beam */}
          <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur1"/>
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2"/>
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur3"/>
            <feMerge>
              <feMergeNode in="blur3"/>
              <feMergeNode in="blur2"/>
              <feMergeNode in="blur1"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Edge glow for etched content */}
          <filter id="edgeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
            <feFlood floodColor="#5FA99F" floodOpacity="0.8" result="color"/>
            <feComposite in="color" in2="blur" operator="in" result="glow"/>
            <feMerge>
              <feMergeNode in="glow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated gradient orbs */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header with Laser Writing Animation */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-center mb-[80px] relative">
        {/* Mobile heading */}
        <h2 className="md:hidden font-heading font-bold text-white mb-6 leading-[1.1]" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}>
          Meet Our Team
        </h2>

        {/* Desktop heading with laser animation */}
        <h2
          className="hidden md:block font-heading font-bold text-white mb-6 leading-[1.1] relative overflow-hidden whitespace-nowrap"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 5rem)' }}
        >
          {"The Team Behind Your Success".split('').map((char, index) => {
            const letterDelay = index * 0.01; // 10ms per letter (faster)
            const totalChars = "The Team Behind Your Success".length;

            return (
              <motion.span
                key={index}
                className="relative inline-block"
                style={{
                  whiteSpace: char === ' ' ? 'pre' : 'normal'
                }}
                initial={{ opacity: 0 }}
                animate={hasTriggered ? {
                  opacity: [0, 0, 1, 1],
                  textShadow: [
                    '0 0 30px #5FA99F, 0 0 60px #5FA99F, 0 0 90px rgba(95,169,159,0.8)',
                    '0 0 30px #5FA99F, 0 0 60px #5FA99F, 0 0 90px rgba(95,169,159,0.8)',
                    '0 0 20px rgba(95,169,159,0.5)',
                    '0 0 20px rgba(95,169,159,0.5)'
                  ]
                } : {}}
                transition={{
                  duration: 0.15,
                  delay: letterDelay,
                  times: [0, 0.2, 0.7, 1],
                  ease: "linear"
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </h2>
      </div>

      {/* Team Grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {teamMembers.map((member, index) => {
          const cardDelay = 0.3;
          const laserDuration = 1.2;

          return (
            <div key={member.name} className="group relative">
              {/* Progressive reveal mask - builds from top to bottom */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent 0%, #000000 0%)',
                }}
                initial={{
                  background: 'linear-gradient(to bottom, transparent 0%, #000000 0%)'
                }}
                animate={hasTriggered ? {
                  background: [
                    'linear-gradient(to bottom, transparent 0%, #000000 0%)',
                    'linear-gradient(to bottom, transparent 100%, #000000 100%)'
                  ]
                } : {}}
                transition={{
                  duration: laserDuration,
                  delay: cardDelay,
                  ease: "linear"
                }}
              />

              {/* Laser scanning beam - moves top to bottom */}
              {hasTriggered && (
                <motion.div
                  className="absolute left-0 right-0 h-[3px] pointer-events-none z-20"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #5FA99F 20%, #ffffff 50%, #5FA99F 80%, transparent)',
                    filter: 'url(#laserGlow)',
                    boxShadow: '0 0 20px #5FA99F, 0 0 40px #5FA99F, 0 0 60px #5FA99F, 0 0 80px rgba(95,169,159,0.4)'
                  }}
                  initial={{ top: 0, opacity: 0 }}
                  animate={{
                    top: ['0%', '100%'],
                    opacity: [0, 1, 1, 0.3, 0]
                  }}
                  transition={{
                    duration: laserDuration,
                    delay: cardDelay,
                    times: [0, 0.05, 0.95, 0.98, 1],
                    ease: "linear"
                  }}
                />
              )}

              {/* Holographic glass card with laser etching reveal */}
              <motion.div
                className="relative h-full bg-[#1A1A1A]/40 backdrop-blur-xl rounded-[32px] border-2 border-[#5FA99F]/30 p-8 lg:p-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500"
                initial={{
                  opacity: 0,
                  boxShadow: '0 0 0 rgba(95,169,159,0)'
                }}
                animate={hasTriggered ? {
                  opacity: 1,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                } : {}}
                transition={{
                  duration: laserDuration,
                  delay: cardDelay,
                  ease: "easeOut"
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glowing edge effect */}
                <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5FA99F] to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5FA99F] to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-[180px] h-[180px] rounded-full p-1 bg-gradient-to-br from-[#5FA99F] via-[#85C7B3] to-[#5FA99F] group-hover:shadow-[0_0_50px_rgba(95,169,159,0.6)] transition-all duration-500">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-center mb-6">
                    <h3
                      className="font-heading font-bold text-white mb-2 group-hover:text-[#5FA99F] transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        textShadow: '0 0 10px rgba(95,169,159,0.3)'
                      }}
                    >
                      {member.name}
                    </h3>
                    <p className="font-body text-[#5FA99F] font-semibold" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-gray-300 leading-[1.7] text-center" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.0625rem)' }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
