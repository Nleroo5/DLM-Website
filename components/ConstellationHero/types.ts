/**
 * TypeScript type definitions for the Constellation Particle System
 * Provides complete type safety for all constellation components
 */

// ============================================================================
// Configuration Types
// ============================================================================

/**
 * Configuration for particle appearance and behavior
 */
export interface ParticleConfig {
  /** Number of particles to render */
  count: number;
  /** Minimum particle radius in pixels */
  minRadius: number;
  /** Maximum particle radius in pixels */
  maxRadius: number;
  /** Minimum particle velocity */
  minSpeed: number;
  /** Maximum particle velocity */
  maxSpeed: number;
  /** Particle color (CSS color string) */
  color: string;
  /** Particle opacity (0-1) */
  opacity: number;
  /** Glow intensity for particle shadow */
  glowIntensity: number;
}

/**
 * Configuration for connection lines between particles
 */
export interface ConnectionConfig {
  /** Whether to draw connection lines */
  enabled: boolean;
  /** Maximum distance to draw connections */
  maxDistance: number;
  /** Connection line color (CSS color string) */
  color: string;
  /** Connection line opacity (0-1) */
  opacity: number;
  /** Connection line width in pixels */
  width: number;
  /** Whether opacity fades with distance */
  fadeWithDistance: boolean;
}

/**
 * Configuration for mouse interaction behavior
 */
export interface InteractionConfig {
  /** Whether mouse interaction is enabled */
  enabled: boolean;
  /** Radius of mouse influence in pixels */
  radius: number;
  /** Interaction mode: 'repel' | 'attract' | 'orbit' */
  mode: 'repel' | 'attract' | 'orbit';
  /** Strength of the interaction force */
  strength: number;
  /** Smoothing factor for interaction (0-1) */
  smoothing: number;
}

/**
 * Performance optimization configuration
 */
export interface PerformanceConfig {
  /** Target frames per second */
  targetFPS: number;
  /** Enable adaptive quality based on FPS */
  adaptiveQuality: boolean;
  /** Minimum FPS before quality reduction */
  minFPS: number;
  /** Number of frames to average for FPS calculation */
  fpsAverageFrames: number;
  /** Enable GPU acceleration hints */
  useGPUAcceleration: boolean;
}

/**
 * Accessibility configuration
 */
export interface AccessibilityConfig {
  /** Respect prefers-reduced-motion */
  respectReducedMotion: boolean;
  /** Fallback behavior when motion is reduced */
  reducedMotionFallback: 'static' | 'minimal' | 'disable';
}

/**
 * Complete constellation configuration for a breakpoint
 */
export interface ConstellationBreakpointConfig {
  particles: ParticleConfig;
  connections: ConnectionConfig;
  interaction: InteractionConfig;
  performance: PerformanceConfig;
  accessibility: AccessibilityConfig;
}

/**
 * Full constellation configuration with all breakpoints
 */
export interface ConstellationConfig {
  desktop: ConstellationBreakpointConfig;
  tablet: ConstellationBreakpointConfig;
  mobile: ConstellationBreakpointConfig;
}

// ============================================================================
// Runtime Types
// ============================================================================

/**
 * Mouse or touch position in canvas coordinates
 */
export interface MousePosition {
  /** X coordinate */
  x: number;
  /** Y coordinate */
  y: number;
  /** Timestamp of last update */
  timestamp: number;
}

/**
 * Canvas dimensions with device pixel ratio support
 */
export interface CanvasSize {
  /** Display width in CSS pixels */
  width: number;
  /** Display height in CSS pixels */
  height: number;
  /** Physical width accounting for DPR */
  physicalWidth: number;
  /** Physical height accounting for DPR */
  physicalHeight: number;
  /** Device pixel ratio */
  dpr: number;
}

/**
 * Performance metrics for monitoring
 */
export interface PerformanceMetrics {
  /** Current frames per second */
  fps: number;
  /** Current particle count */
  particleCount: number;
  /** Average frame time in ms */
  frameTime: number;
  /** Whether adaptive quality is active */
  qualityReduced: boolean;
  /** Last update timestamp */
  lastUpdate: number;
}

/**
 * Individual particle state
 */
export interface ParticleState {
  /** X position */
  x: number;
  /** Y position */
  y: number;
  /** X velocity */
  vx: number;
  /** Y velocity */
  vy: number;
  /** Particle radius */
  radius: number;
  /** Base speed (for normalization) */
  baseSpeed: number;
  /** Unique particle ID */
  id: string;
}

/**
 * Vector2D for physics calculations
 */
export interface Vector2D {
  x: number;
  y: number;
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Props for ConstellationCanvas component
 */
export interface ConstellationCanvasProps {
  /** Additional CSS classes */
  className?: string;
  /** Z-index for layering */
  zIndex?: number;
  /** Canvas opacity (0-1) */
  opacity?: number;
  /** Override configuration */
  config?: Partial<ConstellationBreakpointConfig>;
  /** Show performance monitor (dev only) */
  showPerformanceMonitor?: boolean;
}

/**
 * Return type for useConstellationEngine hook
 */
export interface UseConstellationEngineResult {
  /** Whether engine is ready */
  isReady: boolean;
  /** Current performance metrics */
  metrics: PerformanceMetrics;
  /** Reference to particle system (for debugging) */
  system: any; // ParticleSystem type will be defined in ParticleSystem.ts
}

/**
 * Return type for useMouseTracking hook
 */
export interface UseMouseTrackingResult {
  /** Current mouse position or null if not tracking */
  position: MousePosition | null;
  /** Whether mouse is currently over canvas */
  isHovering: boolean;
}

// ============================================================================
// Spatial Hash Types
// ============================================================================

/**
 * Configuration for spatial hash grid
 */
export interface SpatialHashConfig {
  /** Cell size in pixels */
  cellSize: number;
  /** Number of grid columns */
  cols: number;
  /** Number of grid rows */
  rows: number;
}

/**
 * Spatial hash cell identifier
 */
export interface SpatialHashCell {
  /** Column index */
  col: number;
  /** Row index */
  row: number;
}

// ============================================================================
// Animation Types
// ============================================================================

/**
 * Animation frame data
 */
export interface AnimationFrame {
  /** Current timestamp */
  timestamp: number;
  /** Delta time since last frame (ms) */
  deltaTime: number;
  /** Elapsed time since start (ms) */
  elapsed: number;
}

/**
 * Breakpoint type for responsive behavior
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

/**
 * Device detection result
 */
export interface DeviceInfo {
  /** Current breakpoint */
  breakpoint: Breakpoint;
  /** Whether device supports touch */
  hasTouch: boolean;
  /** Whether device prefers reduced motion */
  prefersReducedMotion: boolean;
  /** Device pixel ratio */
  dpr: number;
  /** Is mobile device */
  isMobile: boolean;
  /** Is tablet device */
  isTablet: boolean;
  /** Is desktop device */
  isDesktop: boolean;
}
