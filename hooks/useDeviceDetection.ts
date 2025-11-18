'use client';

import { useState, useEffect } from 'react';

interface DeviceInfo {
  isMobile: boolean;
  isSlowConnection: boolean;
  connectionType: string;
}

export function useDeviceDetection(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isSlowConnection: false,
    connectionType: 'unknown'
  });

  useEffect(() => {
    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                     window.innerWidth < 768;

    // Detect slow connection
    let isSlowConnection = false;
    let connectionType = 'unknown';

    if ('connection' in navigator) {
      const conn = (navigator as any).connection;
      connectionType = conn.effectiveType || 'unknown';

      // Consider slow if 2g, slow-2g, or saveData enabled
      isSlowConnection =
        conn.effectiveType === 'slow-2g' ||
        conn.effectiveType === '2g' ||
        conn.saveData === true;
    }

    setDeviceInfo({
      isMobile,
      isSlowConnection,
      connectionType
    });
  }, []);

  return deviceInfo;
}
