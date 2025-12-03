/**
 * useConstellationEngine - Main animation engine hook
 * Manages requestAnimationFrame loop, particle system, and performance monitoring
 */

'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import { ParticleSystem } from './ParticleSystem';
import type {
  ConstellationBreakpointConfig,
  MousePosition,
  PerformanceMetrics,
  UseConstellationEngineResult,
} from './types';
import { prefersReducedMotion } from './constants';

/**
 * Main hook for constellation animation engine
 */
export function useConstellationEngine(
  canvasRef: RefObject<HTMLCanvasElement>,
  config: ConstellationBreakpointConfig,
  mousePos: MousePosition | null,
  canvasWidth: number,
  canvasHeight: number
): UseConstellationEngineResult {
  const [isReady, setIsReady] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    particleCount: 0,
    frameTime: 0,
    qualityReduced: false,
    lastUpdate: 0,
  });

  const systemRef = useRef<ParticleSystem | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const fpsFramesRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
    });

    if (!ctx) {
      console.error('[useConstellationEngine] Failed to get 2D context');
      return;
    }

    // Check for reduced motion preference
    const shouldReduceMotion = prefersReducedMotion();
    if (shouldReduceMotion && config.accessibility.reducedMotionFallback === 'disable') {
      console.log('[useConstellationEngine] Reduced motion preference detected - disabling constellation');
      return;
    }

    // Initialize particle system
    if (!systemRef.current && canvasWidth > 0 && canvasHeight > 0) {
      systemRef.current = new ParticleSystem(
        canvasWidth,
        canvasHeight,
        config
      );
      setIsReady(true);
      console.log('[useConstellationEngine] Particle system initialized');
    }

    // Update config if dimensions changed
    if (systemRef.current) {
      systemRef.current.updateConfig(config);
    }

    let startTime = performance.now();
    let lastTime = startTime;
    let debugLogTime = startTime;

    // Animation loop
    const animate = (currentTime: number) => {
      if (!canvas || !ctx || !systemRef.current) return;

      // Calculate delta time
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // DEBUG: Log animation loop details (throttled)
      if (currentTime - debugLogTime > 1000) {
        console.log('[useConstellationEngine.animate] Animation loop:', {
          currentTime,
          deltaTime,
          canvasSize: { width: canvasWidth, height: canvasHeight },
          canvasPhysicalSize: { width: canvas.width, height: canvas.height },
          mousePos,
          configInteraction: config.interaction
        });
        debugLogTime = currentTime;
      }

      // Clear canvas - use logical dimensions since ctx is scaled by DPR
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Update and draw particle system
      systemRef.current.update(deltaTime, canvasWidth, canvasHeight, mousePos);
      systemRef.current.draw(ctx, currentTime, mousePos);

      // Update performance metrics
      updatePerformanceMetrics(deltaTime, currentTime);

      // Adaptive quality adjustment
      if (config.performance.adaptiveQuality) {
        systemRef.current.adaptQuality(metrics.fps, currentTime);
      }

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [canvasRef, config, mousePos, canvasWidth, canvasHeight]);

  // Update performance metrics
  const updatePerformanceMetrics = (deltaTime: number, currentTime: number) => {
    if (!systemRef.current) return;

    // Calculate FPS
    const fps = deltaTime > 0 ? 1000 / deltaTime : 0;

    // Add to rolling average
    fpsFramesRef.current.push(fps);
    if (fpsFramesRef.current.length > config.performance.fpsAverageFrames) {
      fpsFramesRef.current.shift();
    }

    // Calculate average FPS
    const avgFPS = fpsFramesRef.current.reduce((sum, f) => sum + f, 0) / fpsFramesRef.current.length;

    // Update metrics every 500ms
    if (currentTime - lastFrameTimeRef.current > 500) {
      const particleCount = systemRef.current.getParticleCount();
      const qualityReduced = particleCount < config.particles.count;

      setMetrics({
        fps: Math.round(avgFPS),
        particleCount,
        frameTime: Math.round(deltaTime * 100) / 100,
        qualityReduced,
        lastUpdate: currentTime,
      });

      lastFrameTimeRef.current = currentTime;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (systemRef.current) {
        systemRef.current.destroy();
        systemRef.current = null;
      }
    };
  }, []);

  return {
    isReady,
    metrics,
    system: systemRef.current,
  };
}
