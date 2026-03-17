'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export default function ScrollFadeIn({ children, className = '', as: Tag = 'div' }: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('scroll-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`scroll-fade-in ${className}`}>
      {children}
    </Tag>
  );
}
