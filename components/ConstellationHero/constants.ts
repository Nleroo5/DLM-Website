/**
 * Configuration constants for the Constellation Particle System
 * Optimized settings for desktop, tablet, and mobile devices
 */

import type { ConstellationConfig } from './types';

/**
 * Brand colors from DLM design system
 */
export const COLORS = {
  teal: '#5FA99F',
  tealDark: '#4E8B82',
  charcoal: '#2A2A2A',
  white: '#FFFFFF',
  cream: '#F8F6F3',
} as const;

/**
 * Responsive breakpoints (matches Tailwind defaults)
 */
export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
} as const;

/**
 * Complete constellation configuration optimized for all devices
 */
export const CONSTELLATION_CONFIG: ConstellationConfig = {
  // ============================================================================
  // DESKTOP CONFIGURATION - Simple star field with mouse repulsion
  // ============================================================================
  desktop: {
    particles: {
      count: 100,
      minRadius: 1.5,
      maxRadius: 2.5,
      minSpeed: 0.05, // Barely moving
      maxSpeed: 0.05,
      color: COLORS.teal,
      opacity: 0.7,
      glowIntensity: 6, // Subtle glow
    },
    connections: {
      enabled: false, // No connections - individual stars only
      maxDistance: 0,
      color: COLORS.teal,
      opacity: 0,
      width: 0,
      fadeWithDistance: false,
    },
    interaction: {
      enabled: true,
      radius: 150, // Repel radius
      mode: 'repel', // Simple repulsion only
      strength: 0.5, // Research-backed strength
      smoothing: 1, // No smoothing needed
    },
    performance: {
      targetFPS: 60,
      adaptiveQuality: true,
      minFPS: 45,
      fpsAverageFrames: 30,
      useGPUAcceleration: true,
    },
    accessibility: {
      respectReducedMotion: true,
      reducedMotionFallback: 'minimal',
    },
  },

  // ============================================================================
  // TABLET CONFIGURATION - Simple star field with mouse repulsion
  // ============================================================================
  tablet: {
    particles: {
      count: 70,
      minRadius: 1.5,
      maxRadius: 2.5,
      minSpeed: 0.05, // Barely moving
      maxSpeed: 0.05,
      color: COLORS.teal,
      opacity: 0.7,
      glowIntensity: 6,
    },
    connections: {
      enabled: false, // No connections
      maxDistance: 0,
      color: COLORS.teal,
      opacity: 0,
      width: 0,
      fadeWithDistance: false,
    },
    interaction: {
      enabled: true,
      radius: 150,
      mode: 'repel',
      strength: 0.5,
      smoothing: 1,
    },
    performance: {
      targetFPS: 60,
      adaptiveQuality: true,
      minFPS: 40,
      fpsAverageFrames: 30,
      useGPUAcceleration: true,
    },
    accessibility: {
      respectReducedMotion: true,
      reducedMotionFallback: 'minimal',
    },
  },

  // ============================================================================
  // MOBILE CONFIGURATION - Simple star field (no interaction)
  // ============================================================================
  mobile: {
    particles: {
      count: 50,
      minRadius: 1.5,
      maxRadius: 2.5,
      minSpeed: 0.05, // Barely moving
      maxSpeed: 0.05,
      color: COLORS.teal,
      opacity: 0.7,
      glowIntensity: 6,
    },
    connections: {
      enabled: false, // No connections
      maxDistance: 0,
      color: COLORS.teal,
      opacity: 0,
      width: 0,
      fadeWithDistance: false,
    },
    interaction: {
      enabled: false, // Disabled on mobile for performance
      radius: 0,
      mode: 'repel',
      strength: 0,
      smoothing: 0,
    },
    performance: {
      targetFPS: 60,
      adaptiveQuality: true,
      minFPS: 30,
      fpsAverageFrames: 20,
      useGPUAcceleration: true,
    },
    accessibility: {
      respectReducedMotion: true,
      reducedMotionFallback: 'static',
    },
  },
};

/**
 * Spatial hash configuration for performance optimization
 * Cell size should be approximately equal to connection maxDistance
 */
export const SPATIAL_HASH_CONFIG = {
  desktop: {
    cellSize: 200,
  },
  tablet: {
    cellSize: 180,
  },
  mobile: {
    cellSize: 150,
  },
} as const;

/**
 * Animation timing constants
 */
export const ANIMATION = {
  /** Maximum delta time to prevent huge jumps (ms) */
  maxDeltaTime: 100,
  /** Throttle interval for mouse tracking (ms) */
  mouseThrottle: 16, // ~60fps
  /** Debounce interval for resize events (ms) */
  resizeDebounce: 150,
  /** Damping factor for velocity (0-1, higher = more damping) */
  damping: 0.98,
  /** Boundary behavior: 'wrap' | 'bounce' */
  boundaryBehavior: 'wrap' as const,
} as const;

/**
 * Reduced motion fallback configurations
 */
export const REDUCED_MOTION_CONFIG = {
  static: {
    // Completely static particles
    particleSpeed: 0,
    interactionEnabled: false,
    connectionOpacity: 0.1,
  },
  minimal: {
    // Very subtle movement
    particleSpeed: 0.05,
    interactionEnabled: false,
    connectionOpacity: 0.15,
  },
  disable: {
    // No constellation at all
    render: false,
  },
} as const;

/**
 * Performance thresholds for adaptive quality
 */
export const PERFORMANCE_THRESHOLDS = {
  /** FPS threshold to reduce particle count */
  reduceFPS: 45,
  /** FPS threshold to increase particle count */
  increaseFPS: 55,
  /** Minimum particle count (never go below) */
  minParticles: 20,
  /** Maximum particle count (never go above) */
  maxParticles: 100,
  /** Percentage to reduce/increase particle count */
  adjustmentRate: 0.1, // 10%
  /** Cooldown between adjustments (ms) */
  adjustmentCooldown: 2000,
} as const;

/**
 * Development/debugging configuration
 */
export const DEBUG_CONFIG = {
  /** Show FPS counter */
  showFPS: process.env.NODE_ENV === 'development',
  /** Show particle count */
  showParticleCount: process.env.NODE_ENV === 'development',
  /** Show spatial hash grid */
  showSpatialGrid: false,
  /** Show particle IDs */
  showParticleIDs: false,
  /** Show connection distances */
  showConnectionDistances: false,
  /** Console log performance warnings */
  logPerformance: process.env.NODE_ENV === 'development',
} as const;

/**
 * Canvas rendering configuration
 */
export const CANVAS_CONFIG = {
  /** Alpha channel (transparency) */
  alpha: true,
  /** Antialiasing */
  antialias: false, // Disabled for performance
  /** Preserve drawing buffer */
  preserveDrawingBuffer: false,
  /** Desynchronized for better performance */
  desynchronized: true,
  /** Image smoothing (affects quality vs performance) */
  imageSmoothingEnabled: true,
  /** Image smoothing quality */
  imageSmoothingQuality: 'high' as ImageSmoothingQuality,
} as const;

/**
 * Z-index layering system
 */
export const Z_INDEX = {
  constellation: 1,
  gradientOverlay: 2,
  content: 3,
  performanceMonitor: 9999,
} as const;

/**
 * Helper function to get configuration based on viewport width
 */
export function getConfigForViewport(width: number) {
  if (width < BREAKPOINTS.tablet) {
    return { config: CONSTELLATION_CONFIG.mobile, breakpoint: 'mobile' as const };
  } else if (width < BREAKPOINTS.desktop) {
    return { config: CONSTELLATION_CONFIG.tablet, breakpoint: 'tablet' as const };
  } else {
    return { config: CONSTELLATION_CONFIG.desktop, breakpoint: 'desktop' as const };
  }
}

/**
 * Helper function to check if device prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Helper function to detect touch device
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Helper function to get device pixel ratio (capped at 2 for performance)
 */
export function getDevicePixelRatio(): number {
  if (typeof window === 'undefined') return 1;
  return Math.min(window.devicePixelRatio || 1, 2);
}
