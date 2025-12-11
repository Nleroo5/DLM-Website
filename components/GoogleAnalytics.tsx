'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: any;
    dataLayer: any;
  }
}

function GoogleAnalyticsInner({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views on route changes
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      window.gtag('config', measurementId, {
        page_path: url,
        send_page_view: true,
      });
    }
  }, [pathname, searchParams, measurementId]);

  useEffect(() => {
    // Track scroll depth
    let scrollDepth25 = false;
    let scrollDepth50 = false;
    let scrollDepth75 = false;
    let scrollDepth100 = false;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

      if (scrollPercentage >= 25 && !scrollDepth25) {
        scrollDepth25 = true;
        trackEvent('scroll_depth', { depth: 25 });
      }
      if (scrollPercentage >= 50 && !scrollDepth50) {
        scrollDepth50 = true;
        trackEvent('scroll_depth', { depth: 50 });
      }
      if (scrollPercentage >= 75 && !scrollDepth75) {
        scrollDepth75 = true;
        trackEvent('scroll_depth', { depth: 75 });
      }
      if (scrollPercentage >= 100 && !scrollDepth100) {
        scrollDepth100 = true;
        trackEvent('scroll_depth', { depth: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    // Track outbound links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href, window.location.href);
        const isOutbound = url.hostname !== window.location.hostname;

        if (isOutbound) {
          trackEvent('outbound_click', {
            link_url: link.href,
            link_text: link.innerText || link.getAttribute('aria-label') || 'Unknown',
            link_domain: url.hostname
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInner measurementId={measurementId} />
    </Suspense>
  );
}

// Event tracking helper
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Conversion tracking helper
export function trackConversion(eventName: string, value?: number, currency: string = 'USD') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      value: value,
      currency: currency,
      send_to: 'G-K25LTGL8FP'
    });
  }
}

// E-commerce event tracking
export function trackFormSubmission(formName: string, value: number = 1.0) {
  trackEvent('generate_lead', {
    form_name: formName,
    value: value,
    currency: 'USD'
  });
}

// Track video engagement
export function trackVideoEngagement(videoName: string, action: 'start' | 'complete' | 'progress', progress?: number) {
  trackEvent('video_' + action, {
    video_title: videoName,
    video_percent: progress
  });
}

// Track file downloads
export function trackFileDownload(fileName: string, fileType: string) {
  trackEvent('file_download', {
    file_name: fileName,
    file_extension: fileType,
    link_url: fileName
  });
}
