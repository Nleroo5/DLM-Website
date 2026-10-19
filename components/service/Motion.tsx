'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Motion for the service pages. One easing and tempo (see the "Service page
// motion" block in globals.css); every move plays once. Content is visible
// without JavaScript: elements are only "armed" (hidden, ready to animate) by
// the script, and only when they start below the fold.

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Adds .go when the element scrolls into view. Elements already on screen at
// load play immediately; elements below the fold are armed first.
export function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  threshold = 0.3,
}: {
  as?: 'div' | 'section' | 'dl' | 'ol' | 'table';
  className?: string;
  children: React.ReactNode;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92;
    if (inView) {
      el.classList.add('go');
      return;
    }
    el.setAttribute('data-armed', '');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('go');
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  );
}

// Silent looping video: downloads only when near the viewport, plays only
// while on screen (after `delay`), pauses when off screen. Reduce Motion and
// iOS Low Power Mode keep the poster.
export function LoopVideo({
  src,
  poster,
  label,
  delay = 0,
  sizes,
  className = '',
}: {
  src: string;
  poster: string;
  label: string;
  delay?: number;
  sizes: string;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el || reducedMotion()) return;
    let timer = 0;
    const near = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setLoad(true); near.disconnect(); }
    }, { rootMargin: '400px 0px' });
    const vis = new IntersectionObserver(([e]) => {
      const v = video.current;
      if (!v) return;
      window.clearTimeout(timer);
      if (e.isIntersecting) timer = window.setTimeout(() => v.play().catch(() => {}), delay);
      else v.pause();
    }, { threshold: 0.35 });
    near.observe(el);
    vis.observe(el);
    return () => { near.disconnect(); vis.disconnect(); window.clearTimeout(timer); };
  }, [delay]);

  // Start once the file is attached (the visibility observer may have fired first).
  useEffect(() => {
    const v = video.current;
    if (!load || !v) return;
    const r = wrap.current?.getBoundingClientRect();
    if (r && r.top < window.innerHeight && r.bottom > 0) {
      const t = window.setTimeout(() => v.play().catch(() => {}), delay);
      return () => window.clearTimeout(t);
    }
  }, [load, delay]);

  return (
    <div ref={wrap} className={`relative overflow-hidden bg-[#111] ${className}`}>
      <Image src={poster} alt={label} fill sizes={sizes} className="object-cover object-top" />
      {load && (
        <video
          ref={video}
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
