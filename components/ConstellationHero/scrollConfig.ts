/**
 * Professional Scroll Animation Configuration
 * All values are normalized 0-1 representing progress through scroll range
 * This eliminates "magic numbers" and makes timing predictable across all viewports
 */

export const PARTICLE_ANIMATION = {
  // Particle lifecycle phases (normalized 0-1)
  fadeIn: { start: 0, end: 0.1 },          // First 10% - particles appear
  formation: { start: 0.1, end: 0.3 },     // 10-30% - morph into text
  hold: { start: 0.3, end: 0.7 },          // 30-70% - text visible and readable
  fadeOut: { start: 0.7, end: 1.0 },       // 70-100% - fade away

  // Logo timing (appear during formation, visible during hold)
  logos: {
    fadeIn: { start: 0.15, end: 0.25 },    // Appear after text starts forming
    visible: { start: 0.25, end: 0.65 },   // Fully visible during hold phase
    fadeOut: { start: 0.65, end: 0.75 },   // Disappear before particles fade
  },
} as const;

/**
 * Calculate the exact scroll progress value for a given phase
 * @param phase - The animation phase name
 * @param position - 'start' or 'end'
 * @returns The normalized scroll progress value (0-1)
 */
export function getPhaseProgress(
  phase: keyof typeof PARTICLE_ANIMATION,
  position: 'start' | 'end'
): number {
  const phaseConfig = PARTICLE_ANIMATION[phase];
  if ('start' in phaseConfig && 'end' in phaseConfig) {
    return phaseConfig[position];
  }
  throw new Error(`Invalid phase: ${phase}`);
}
