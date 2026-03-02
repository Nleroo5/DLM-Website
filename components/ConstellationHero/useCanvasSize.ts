/**
 * useCanvasSize - React hook for responsive canvas dimensions
 * Handles window resize with debouncing and device pixel ratio
 */

'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import type { CanvasSize } from './types';
import { ANIMATION } from './constants';
import { getDevicePixelRatio } from './constants';

/**
 * Hook to track canvas size with device pixel ratio support
 */
export function useCanvasSize(
  containerRef: RefObject<HTMLElement>
): CanvasSize {
  const [size, setSize] = useState<CanvasSize>({
    width: 0,
    height: 0,
    physicalWidth: 0,
    physicalHeight: 0,
    dpr: 1,
  });

  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;

      const dpr = getDevicePixelRatio();
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      setSize({
        width,
        height,
        physicalWidth: Math.floor(width * dpr),
        physicalHeight: Math.floor(height * dpr),
        dpr,
      });
    };

    // Initial size
    updateSize();

    // Debounced resize handler
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        updateSize();
      }, ANIMATION.resizeDebounce);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [containerRef]);

  return size;
}
