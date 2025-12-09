'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export function MetaPixel({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track PageView on route changes with enhanced data
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView', {
        source_url: window.location.href,
        referrer: document.referrer || 'direct'
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Track outbound/external link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href, window.location.href);
        const isOutbound = url.hostname !== window.location.hostname;
        const isSocial = ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com'].some(
          domain => url.hostname.includes(domain)
        );

        if (isOutbound) {
          trackCustomEvent('OutboundClick', {
            link_url: link.href,
            link_domain: url.hostname,
            link_type: isSocial ? 'social' : 'external'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return null;
}

// Standard event tracking
export function trackEvent(eventName: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    const enhancedData = {
      ...data,
      event_source_url: window.location.href,
      event_time: Math.floor(Date.now() / 1000)
    };
    window.fbq('track', eventName, enhancedData);
  }
}

// Custom event tracking
export function trackCustomEvent(eventName: string, data?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.fbq) {
    const enhancedData = {
      ...data,
      event_source_url: window.location.href,
      event_time: Math.floor(Date.now() / 1000)
    };
    window.fbq('trackCustom', eventName, enhancedData);
  }
}

// Track CTA button clicks
export function trackCTAClick(buttonName: string, location: string) {
  trackCustomEvent('CTAClick', {
    button_name: buttonName,
    button_location: location,
    page_url: window.location.pathname
  });
}

// Track video engagement
export function trackVideoEvent(action: 'start' | 'progress' | 'complete', videoName: string, progress?: number) {
  trackCustomEvent(`Video${action.charAt(0).toUpperCase() + action.slice(1)}`, {
    video_title: videoName,
    video_progress: progress || (action === 'complete' ? 100 : 0),
    video_type: 'hero'
  });
}

// Track search events
export function trackSearch(searchTerm: string, results?: number) {
  trackEvent('Search', {
    search_string: searchTerm,
    content_category: 'site_search',
    ...(results !== undefined && { num_results: results })
  });
}

// Track portfolio/service views with enhanced data
export function trackContentView(contentName: string, contentType: string, contentId?: string) {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_type: contentType,
    content_category: contentType,
    ...(contentId && { content_ids: [contentId] })
  });
}

// Track form abandonment
export function trackFormAbandonment(formName: string, completionPercent: number) {
  trackCustomEvent('FormAbandonment', {
    form_name: formName,
    completion_percent: completionPercent,
    abandonment_reason: 'user_action'
  });
}

// Enhanced lead tracking with user data (hashed)
export function trackLeadWithUserData(formName: string, value: number, userData?: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}) {
  const eventData: any = {
    content_name: formName,
    value: value,
    currency: 'USD'
  };

  // Add user data for advanced matching (Meta will hash this)
  if (userData) {
    const advancedMatching: any = {};
    if (userData.email) advancedMatching.em = userData.email.toLowerCase().trim();
    if (userData.phone) advancedMatching.ph = userData.phone.replace(/\D/g, '');
    if (userData.firstName) advancedMatching.fn = userData.firstName.toLowerCase().trim();
    if (userData.lastName) advancedMatching.ln = userData.lastName.toLowerCase().trim();

    // Send with advanced matching
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', eventData, { eventID: generateEventId(), ...advancedMatching });
      return;
    }
  }

  trackEvent('Lead', eventData);
}

// Generate unique event ID for deduplication
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Track time on page (call on unmount)
export function trackTimeOnPage(pageName: string, seconds: number) {
  if (seconds > 10) { // Only track if spent meaningful time
    trackCustomEvent('TimeOnPage', {
      page_name: pageName,
      time_seconds: seconds,
      time_bucket: seconds < 30 ? 'quick' : seconds < 60 ? 'medium' : seconds < 180 ? 'engaged' : 'very_engaged'
    });
  }
}
