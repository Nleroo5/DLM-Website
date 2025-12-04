'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Advanced morphing particle system with scroll-driven text formation
 * Features:
 * - Particles morph from scattered to spell marketing headline (0-15% scroll)
 * - Text stays formed briefly (15-25% scroll)
 * - Particles fade out and disappear (25-35% scroll)
 * - Uses canvas text rendering for perfect letter shapes
 * - Instagram + Facebook logos fade in after text formation
 */

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  opacity: number;
}

// Easing function for smooth transitions
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Linear interpolation
function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function MorphingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // CRITICAL FIX: Use refs instead of state to prevent re-renders (60+ per second!)
  const scrollProgressRef = useRef(0);
  const smoothScrollRef = useRef(0);  // LERP interpolation for buttery-smooth animation
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const lastScrollPosition = useRef(0);
  const scrollVelocity = useRef(0);

  // Only use state for UI elements that need re-render
  const [showLogos, setShowLogos] = useState(false);
  const showLogosRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // PRODUCTION-GRADE FIX: Safeguards for resize handling
    let isResizing = false;
    let resizeTimeout: NodeJS.Timeout | null = null;
    let animationPaused = false;

    // Generate particle positions from text
    const createTextPositions = (canvasWidth: number, canvasHeight: number): Array<{x: number, y: number}> => {
      const positions: Array<{x: number, y: number}> = [];

      // Create temporary canvas for text rendering
      const textCanvas = document.createElement('canvas');
      const textCtx = textCanvas.getContext('2d', { willReadFrequently: true });
      if (!textCtx) return positions;

      // Marketing message about precise targeting
      const text = 'target your exact audience\nwithout wasting ad spend';
      const lines = text.split('\n');

      // Responsive font size with breakpoint-aware scaling
      let fontSize: number;
      if (canvasWidth < 640) {
        // Mobile: smaller text
        fontSize = Math.min(canvasWidth * 0.08, 50);
      } else if (canvasWidth < 768) {
        // Large mobile: slightly larger
        fontSize = Math.min(canvasWidth * 0.08, 60);
      } else if (canvasWidth < 1024) {
        // Tablet/small desktop: optimized for medium screens
        fontSize = Math.min(canvasWidth * 0.075, 70);
      } else {
        // Desktop: full size
        fontSize = Math.min(canvasWidth * 0.08, 80);
      }
      textCanvas.width = canvasWidth;
      textCanvas.height = canvasHeight;

      textCtx.font = `bold ${fontSize}px Arial, sans-serif`;
      textCtx.fillStyle = '#FFFFFF';
      textCtx.textAlign = 'center';
      textCtx.textBaseline = 'middle';

      // Draw text on temp canvas
      const centerY = canvasHeight * 0.4;
      const lineHeight = fontSize * 1.3;
      const startY = centerY - ((lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, index) => {
        const y = startY + index * lineHeight;
        textCtx.fillText(line, canvasWidth / 2, y);
      });

      // Sample pixels to get particle positions
      const imageData = textCtx.getImageData(0, 0, textCanvas.width, textCanvas.height);
      const pixels = imageData.data;

      // Ultra-dense sampling for font-like precision
      const samplingRate = window.innerWidth < 768 ? 1.5 : 0.8; // Sub-pixel sampling on desktop

      for (let y = 0; y < textCanvas.height; y += samplingRate) {
        for (let x = 0; x < textCanvas.width; x += samplingRate) {
          const index = (Math.floor(y) * textCanvas.width + Math.floor(x)) * 4;
          const alpha = pixels[index + 3];

          // If pixel is part of text (not transparent)
          if (alpha > 128) {
            // Zero randomness for crisp, font-like edges
            positions.push({
              x: x,
              y: y
            });
          }
        }
      }

      return positions;
    };

    // Mouse tracking for particle repulsion
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Adaptive particle counts - optimized for crisp font-like rendering with better performance
    const getOptimalParticleCount = () => {
      const width = window.innerWidth;
      if (width < 768) return 0;         // Mobile: ZERO (truly disabled - no wasted resources)
      if (width < 1024) return 1500;     // Tablet: balanced performance (was 3500)
      if (width < 1920) return 3500;     // Desktop: optimized quality (was 8000)
      return 5000;                        // 4K: high quality without excess
    };

    // Initialize background particles (always floating)
    const backgroundParticles: Array<{x: number, y: number, vx: number, vy: number}> = [];
    const bgCount = window.innerWidth < 768 ? 30 : 100;

    for (let i = 0; i < bgCount; i++) {
      backgroundParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    // Initialize text-forming particles (only appear on scroll)
    let particles: Particle[] = [];

    // PRODUCTION-GRADE: Initialize particles with proper state management
    const initializeParticles = () => {
      const textPositions = createTextPositions(canvas.width, canvas.height);
      const particleCount = Math.min(textPositions.length, getOptimalParticleCount());

      // Create new particles array
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const homeX = Math.random() * canvas.width;
        const homeY = Math.random() * canvas.height;
        const targetPos = textPositions[Math.floor(i * textPositions.length / particleCount)];

        newParticles.push({
          x: homeX,
          y: homeY,
          homeX,
          homeY,
          targetX: targetPos.x,
          targetY: targetPos.y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          opacity: 1
        });
      }

      // Replace particles array atomically
      particles = newParticles;
    };

    // Initialize particles on mount
    initializeParticles();

    // PRODUCTION-GRADE: Debounced resize handler with animation pause
    const resizeCanvas = () => {
      // Clear any pending resize timeout
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      // Set resizing flag
      isResizing = true;

      // Update canvas dimensions immediately
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2;

      // Debounce particle regeneration (200ms after resize stops)
      resizeTimeout = setTimeout(() => {
        // Pause animation during particle rebuild
        animationPaused = true;

        // Regenerate particles with new dimensions
        initializeParticles();

        // Resume animation after rebuild
        requestAnimationFrame(() => {
          animationPaused = false;
          isResizing = false;
        });
      }, 200);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);


    // Professional scroll tracking with velocity detection for adaptive quality
    const handleScroll = () => {
      const now = Date.now();
      const currentScroll = window.scrollY;
      const deltaTime = now - lastScrollTime.current;
      const deltaScroll = Math.abs(currentScroll - lastScrollPosition.current);

      // Calculate scroll velocity (pixels per millisecond)
      scrollVelocity.current = deltaScroll / (deltaTime || 1);

      lastScrollTime.current = now;
      lastScrollPosition.current = currentScroll;

      const viewportHeight = window.innerHeight;

      // CURRENT PAGE ORDER:
      // Hero section = 0-100vh (h-screen)
      // HowItWorks section = 100vh-400vh (h-[300vh])
      // Testimonials section = 400vh-500vh (min-h-screen with pt-[50vh] pb-[50vh])
      // MeetTheTeam section = 500vh-600vh (min-h-screen)
      // WhatWeDo section = 600vh-750vh (h-[150vh])
      // Particles trigger during WhatWeDo section (600vh-750vh)
      const whatWeDoStart = viewportHeight * 6.0;  // 600vh - WhatWeDo section starts here
      const whatWeDoScrollRange = viewportHeight * 1.5;  // 150vh - WhatWeDo section height

      // Calculate progress through WhatWeDo section (0-1)
      const adjustedScroll = Math.max(0, currentScroll - whatWeDoStart);
      const progress = Math.min(adjustedScroll / whatWeDoScrollRange, 1);

      // Update ref, not state - NO RE-RENDERS!
      scrollProgressRef.current = progress;

      // Logo visibility - fade out before explosion starts (0.83)
      const shouldShowLogos = progress >= 0.15 && progress <= 0.83;
      if (shouldShowLogos !== showLogosRef.current) {
        showLogosRef.current = shouldShowLogos;
        setShowLogos(shouldShowLogos);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Animation loop with LERP interpolation for buttery-smooth scrolling
    function animate() {
      if (!ctx || !canvas) return;

      // PRODUCTION-GRADE: Pause animation during resize rebuild
      if (animationPaused) {
        requestAnimationFrame(animate);
        return;
      }

      // Pause when tab is hidden (performance optimization)
      if (document.hidden) {
        requestAnimationFrame(animate);
        return;
      }

      // LERP: Smoothly interpolate toward target scroll position
      // 0.1 = ease factor (lower = smoother but more lag, higher = faster response)
      // This creates professional smooth motion even during fast scrolling
      smoothScrollRef.current += (scrollProgressRef.current - smoothScrollRef.current) * 0.1;
      const scrollProgress = smoothScrollRef.current;

      // Adaptive quality: detect fast scrolling
      const velocity = scrollVelocity.current;
      const isFastScrolling = velocity > 2; // Threshold: 2px/ms

      // Clear canvas with transparency (allows video to show through)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background particles (always visible, always floating)
      backgroundParticles.forEach(p => {
        // Mouse repulsion force
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150 && dist > 0) {
          // Repel particles away from cursor
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        // Damping - gradually slow down particles
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Simple floating motion
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw background particle
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#5FA99F';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Calculate animation phases for text particles using normalized ranges (0-1)
      // Formation phase: 0.1 to 0.3 (particles morph into text)
      const formationStart = 0.1;
      const formationEnd = 0.3;
      const formationProgress = Math.max(0, Math.min(1, (scrollProgress - formationStart) / (formationEnd - formationStart)));
      const easedFormation = easeInOutCubic(formationProgress);

      // Explosion phase: 0.85 to 0.95 (Professional radial scatter explosion)
      const explosionStart = 0.85;
      const explosionEnd = 0.95;
      const explosionProgress = Math.max(0, Math.min(1, (scrollProgress - explosionStart) / (explosionEnd - explosionStart)));

      // Fade out phase: 0.92 to 0.98 (particles fade as they scatter)
      const fadeOutStart = 0.92;
      const fadeOutEnd = 0.98;
      const fadeOutProgress = Math.max(0, Math.min(1, (scrollProgress - fadeOutStart) / (fadeOutEnd - fadeOutStart)));

      // Update and draw text-forming particles with adaptive rendering
      particles.forEach((p, index) => {
        // Adaptive rendering: Skip every 3rd particle during fast scrolling (40-60% performance boost)
        if (isFastScrolling && index % 3 !== 0) return;

        // Reset explosion flag if we scroll back before explosion starts
        if (explosionProgress === 0 && (p as any).hasExploded) {
          (p as any).hasExploded = false;
        }

        // PROFESSIONAL RADIAL EXPLOSION: Smooth scatter outward from center
        if (explosionProgress > 0 && explosionProgress < 1) {
          // Apply smooth explosion force at the start
          if (explosionProgress < 0.15 && !(p as any).hasExploded) {
            const centerX = canvas.width / 2;
            const centerY = canvas.height * 0.4; // Match text center position
            const explosionDx = p.x - centerX;
            const explosionDy = p.y - centerY;
            const explosionDist = Math.sqrt(explosionDx * explosionDx + explosionDy * explosionDy);

            if (explosionDist > 0) {
              // Professional scatter with controlled variation
              const randomMultiplier = 0.7 + Math.random() * 0.6; // 0.7-1.3x smooth variation
              const baseForce = 45; // Balanced force for smooth scatter
              const explosionForce = baseForce * randomMultiplier;
              const explosionAngle = Math.atan2(explosionDy, explosionDx);

              // Subtle rotation for organic feel
              const rotationOffset = (Math.random() - 0.5) * 0.3; // Gentle rotation

              // Smooth distance-based force - closer particles scatter faster
              const distMultiplier = 1.2 - (explosionDist / Math.max(canvas.width, canvas.height)) * 0.3;

              p.vx = Math.cos(explosionAngle + rotationOffset) * explosionForce * distMultiplier;
              p.vy = Math.sin(explosionAngle + rotationOffset) * explosionForce * distMultiplier;

              (p as any).hasExploded = true;
            }
          }

          // Smooth damping for professional deceleration
          p.vx *= 0.985;
          p.vy *= 0.985;

          // Update position with explosion velocity
          p.x += p.vx;
          p.y += p.vy;
        }
        // Bidirectional particle movement based on scroll position
        else if (fadeOutProgress >= 1) {
          // Reset explosion flag when fully faded
          (p as any).hasExploded = false;
          // Fully faded out - particles scattered and floating
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around screen edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        } else {
          // Normal formation state - mouse interaction + text formation
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150 && dist > 0) {
            // Repel particles away from cursor
            const force = (150 - dist) / 150;
            p.vx += (dx / dist) * force * 0.3;
            p.vy += (dy / dist) * force * 0.3;
          }

          // ALWAYS pull particles back to text position (not just when mouse is near)
          const toTargetX = p.targetX - p.x;
          const toTargetY = p.targetY - p.y;
          const distToTarget = Math.sqrt(toTargetX * toTargetX + toTargetY * toTargetY);

          // Constant attraction to maintain text formation
          if (distToTarget > 1) {
            const attractionStrength = 0.08; // Gentle but constant pull
            p.vx += (toTargetX / distToTarget) * attractionStrength;
            p.vy += (toTargetY / distToTarget) * attractionStrength;
          }

          // Apply damping to settle particles
          p.vx *= 0.95;
          p.vy *= 0.95;

          // Smooth bidirectional interpolation between scattered and text formation
          const baseX = lerp(p.homeX, p.targetX, easedFormation);
          const baseY = lerp(p.homeY, p.targetY, easedFormation);

          // Apply velocity influence on top of formation position
          p.x = baseX + p.vx * 10;
          p.y = baseY + p.vy * 10;
        }

        // Calculate particle opacity based on scroll progress (bidirectional)
        let particleOpacity = 1;

        if (fadeOutProgress >= 1) {
          // Completely faded out after fade-out phase
          particleOpacity = 0;
        } else if (fadeOutProgress > 0) {
          // Fade out/in phase - works bidirectionally
          particleOpacity = 1 - fadeOutProgress;
        } else if (formationProgress < 0.15) {
          // Smooth fade in/out at the beginning - works bidirectionally
          particleOpacity = formationProgress / 0.15;
        } else {
          // Fully visible during formation and hold
          particleOpacity = 1;
        }

        p.opacity = particleOpacity;

        // Draw particle only if visible with glow effect for better readability
        if (p.opacity > 0) {
          ctx.globalAlpha = p.opacity;

          // Enhanced visual during explosion
          let radius = isFastScrolling ? 1.8 : 2.8;
          let shadowBlur = isFastScrolling ? 2 : 4;
          let fillStyle = '#FFFFFF';
          let shadowColor = '#5FA99F';

          // Professional visual effects during explosion
          if (explosionProgress > 0 && explosionProgress < 1) {
            // Smooth size increase as particles scatter
            radius = isFastScrolling ? 2.2 : 3.2;

            // Elegant glow that fades with distance
            shadowBlur = isFastScrolling ? 4 : 8;

            // Smooth color transition from white to teal
            const colorProgress = explosionProgress;
            if (colorProgress < 0.3) {
              fillStyle = '#FFFFFF'; // Pure white at start
              shadowColor = '#FFFFFF';
            } else if (colorProgress < 0.7) {
              // Smooth gradient from white to teal
              const t = (colorProgress - 0.3) / 0.4;
              const r = Math.floor(255 + (95 - 255) * t);
              const g = Math.floor(255 + (169 - 255) * t);
              const b = Math.floor(255 + (159 - 255) * t);
              fillStyle = `rgb(${r}, ${g}, ${b})`;
              shadowColor = fillStyle;
            } else {
              fillStyle = '#5FA99F'; // Brand teal
              shadowColor = '#5FA99F';
            }
          }

          ctx.fillStyle = fillStyle;
          ctx.shadowColor = shadowColor;
          ctx.shadowBlur = shadowBlur;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Connection lines disabled - cleaner text formation without lines

      // Decay velocity over time
      scrollVelocity.current *= 0.95;

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // PRODUCTION-GRADE: Clear pending resize timeout on cleanup
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // CRITICAL: Empty dependency array - only initialize once, no re-renders!

  return (
    <>
      <canvas
        ref={canvasRef}
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '120vh',
          pointerEvents: 'none',
          zIndex: 0,
          willChange: 'transform',
          transform: 'translateZ(0)', // GPU acceleration for better performance
        }}
      />

      {/* Glitch Logo Animation - Instagram and Facebook - Hidden on mobile */}
      <AnimatePresence>
        {showLogos && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              marginTop: 'clamp(120px, 20vh, 250px)',
              zIndex: 100,
              pointerEvents: 'none',
            }}
            className="hidden md:flex gap-4 xs:gap-6 sm:gap-8 items-center"
          >
            {/* Instagram Logo with Glitch Effect */}
            <motion.div
              animate={{
                x: [0, -2, 2, -1, 1, 0],
                filter: [
                  'hue-rotate(0deg) contrast(100%)',
                  'hue-rotate(45deg) contrast(120%)',
                  'hue-rotate(90deg) contrast(100%)',
                  'hue-rotate(45deg) contrast(120%)',
                  'hue-rotate(0deg) contrast(100%)',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/instagram-icon.png"
                alt="Instagram"
                width={80}
                height={80}
                className="drop-shadow-[0_0_10px_rgba(228,64,95,0.5)] w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-14 md:h-14"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(228, 64, 95, 0.5))'
                }}
              />
            </motion.div>

            {/* Facebook Logo with Glitch Effect */}
            <motion.div
              animate={{
                x: [0, 2, -2, 1, -1, 0],
                filter: [
                  'hue-rotate(0deg) contrast(100%)',
                  'hue-rotate(45deg) contrast(120%)',
                  'hue-rotate(90deg) contrast(100%)',
                  'hue-rotate(45deg) contrast(120%)',
                  'hue-rotate(0deg) contrast(100%)',
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
                delay: 0.6, // Offset from Instagram
              }}
            >
              <Image
                src="/images/facebook-icon.png"
                alt="Facebook"
                width={80}
                height={80}
                className="drop-shadow-[0_0_10px_rgba(24,119,242,0.5)] w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-14 md:h-14"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(24, 119, 242, 0.5))'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
