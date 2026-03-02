/**
 * useMouseTracking - React hook for throttled mouse/touch position tracking
 * Optimized for performance with throttling and device pixel ratio support
 */

'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import type { MousePosition } from './types';
import { ANIMATION } from './constants';

/**
 * Hook to track mouse position over a canvas
 */
export function useMouseTracking(
  canvasRef: RefObject<HTMLCanvasElement>,
  dpr: number,
  throttleMs: number = ANIMATION.mouseThrottle
): MousePosition | null {
  const [mousePos, setMousePos] = useState<MousePosition | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const lastUpdateRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateMousePosition = (clientX: number, clientY: number, timestamp: number) => {
      // Throttle updates
      if (timestamp - lastUpdateRef.current < throttleMs) {
        return;
      }

      const rect = canvas.getBoundingClientRect();

      // Convert to canvas coordinates (logical coordinates)
      // Since canvas context is already scaled by DPR, we just need CSS coordinates
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // DEBUG: Log mouse position
      console.log('[useMouseTracking] Mouse position:', {
        clientX,
        clientY,
        rectLeft: rect.left,
        rectTop: rect.top,
        x,
        y,
        canvasWidth: rect.width,
        canvasHeight: rect.height
      });

      setMousePos({ x, y, timestamp });
      lastUpdateRef.current = timestamp;
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY, performance.now());
    };

    // Touch move handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateMousePosition(touch.clientX, touch.clientY, performance.now());
      }
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePos(null);
    };

    // Touch start handler
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setIsHovering(true);
        updateMousePosition(touch.clientX, touch.clientY, performance.now());
      }
    };

    // Touch end handler
    const handleTouchEnd = () => {
      setIsHovering(false);
      setMousePos(null);
    };

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchEnd);

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [canvasRef, dpr, throttleMs]);

  // DEBUG: Log hover state and return value
  const returnValue = isHovering ? mousePos : null;
  console.log('[useMouseTracking] Return value:', { isHovering, mousePos: returnValue });

  return returnValue;
}
