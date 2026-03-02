/**
 * ConstellationCanvas - Main canvas component for constellation particle system
 * Integrates all hooks and renders the interactive particle constellation
 */

'use client';

import { useRef, useEffect } from 'react';
import { useCanvasSize } from './useCanvasSize';
import { useMouseTracking } from './useMouseTracking';
import { useConstellationEngine } from './useConstellationEngine';
import type { ConstellationCanvasProps } from './types';
import { getConfigForViewport, DEBUG_CONFIG } from './constants';

/**
 * Main constellation canvas component
 */
export function ConstellationCanvas({
  className = '',
  zIndex = 1,
  opacity = 1,
  config: configOverride,
  showPerformanceMonitor = DEBUG_CONFIG.showFPS,
}: ConstellationCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Get responsive canvas size
  const canvasSize = useCanvasSize(containerRef);

  // Determine configuration based on viewport width
  const { config: responsiveConfig, breakpoint } = getConfigForViewport(canvasSize.width);

  // Merge with any overrides
  const finalConfig = configOverride
    ? { ...responsiveConfig, ...configOverride }
    : responsiveConfig;

  // Track mouse position
  const mousePos = useMouseTracking(canvasRef, canvasSize.dpr);

  // Initialize constellation engine (no cellSize needed - no spatial hash)
  const { isReady, metrics } = useConstellationEngine(
    canvasRef,
    finalConfig,
    mousePos,
    canvasSize.width,
    canvasSize.height
  );

  // Set canvas physical dimensions (accounting for DPR)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvasSize.physicalWidth;
    canvas.height = canvasSize.physicalHeight;

    // Scale context for DPR
    const ctx = canvas.getContext('2d');
    if (ctx && canvasSize.dpr > 1) {
      ctx.scale(canvasSize.dpr, canvasSize.dpr);
    }
  }, [canvasSize]);

  return (
    <div
      ref={containerRef}
      className={`constellation-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex,
        opacity,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        className="constellation-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'auto',
        }}
      />

      {/* Performance Monitor (development only) */}
      {showPerformanceMonitor && isReady && (
        <PerformanceMonitor
          fps={metrics.fps}
          particleCount={metrics.particleCount}
          frameTime={metrics.frameTime}
          qualityReduced={metrics.qualityReduced}
          breakpoint={breakpoint}
        />
      )}
    </div>
  );
}

/**
 * Performance monitor overlay component
 */
function PerformanceMonitor({
  fps,
  particleCount,
  frameTime,
  qualityReduced,
  breakpoint,
}: {
  fps: number;
  particleCount: number;
  frameTime: number;
  qualityReduced: boolean;
  breakpoint: string;
}) {
  // Color code FPS display
  const fpsColor =
    fps >= 55 ? '#4ade80' : // Green for good FPS
    fps >= 45 ? '#fbbf24' : // Yellow for OK FPS
    '#ef4444'; // Red for poor FPS

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        padding: '12px 16px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '11px',
        lineHeight: '1.6',
        zIndex: 9999,
        pointerEvents: 'none',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#5FA99F' }}>
        Constellation Metrics
      </div>
      <div>
        FPS: <span style={{ color: fpsColor, fontWeight: 'bold' }}>{fps}</span>
      </div>
      <div>
        Frame Time: <span style={{ color: '#9ca3af' }}>{frameTime.toFixed(2)}ms</span>
      </div>
      <div>
        Particles: <span style={{ color: '#9ca3af' }}>{particleCount}</span>
        {qualityReduced && (
          <span style={{ color: '#fbbf24', marginLeft: '4px' }}>⚠</span>
        )}
      </div>
      <div>
        Breakpoint: <span style={{ color: '#9ca3af' }}>{breakpoint}</span>
      </div>
    </div>
  );
}
