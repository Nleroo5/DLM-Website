// Shared homepage motion presets, so every section reveals the same way.
// Guidance followed: 100–400ms, ease-out, play once, transform/opacity only.
// Reduced motion is handled globally by <MotionConfig reducedMotion="user">.

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Cards rising into view: 16px, 400ms, 90ms stagger, once.
export function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: EASE_OUT, delay: index * 0.09 },
  } as const;
}
