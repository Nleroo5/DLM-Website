/**
 * Consent Management Utilities
 * GDPR-compliant consent handling for GA4, Meta Pixel, and Microsoft Clarity
 */

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = 'dlm_consent';
const CONSENT_VERSION = '1.0';

/**
 * Get current consent state from localStorage
 */
export function getConsentState(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);

    // Validate consent object
    if (
      typeof parsed.analytics === 'boolean' &&
      typeof parsed.marketing === 'boolean' &&
      typeof parsed.timestamp === 'number'
    ) {
      return parsed;
    }

    return null;
  } catch (error) {
    console.error('Error reading consent state:', error);
    return null;
  }
}

/**
 * Save consent state to localStorage
 */
export function setConsentState(analytics: boolean, marketing: boolean): void {
  if (typeof window === 'undefined') return;

  const consent: ConsentState = {
    analytics,
    marketing,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    // Dispatch custom event so components can react
    window.dispatchEvent(new CustomEvent('consentUpdated', { detail: consent }));

    // Update analytics platforms
    updateGoogleConsent(analytics, marketing);
    updateMetaConsent(marketing);
    updateClarityConsent(analytics);
  } catch (error) {
    console.error('Error saving consent state:', error);
  }
}

/**
 * Check if user has made a consent choice
 */
export function hasConsent(): boolean {
  return getConsentState() !== null;
}

/**
 * Update Google Analytics Consent Mode v2
 */
export function updateGoogleConsent(analytics: boolean, marketing: boolean): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  try {
    window.gtag('consent', 'update', {
      'analytics_storage': analytics ? 'granted' : 'denied',
      'ad_storage': marketing ? 'granted' : 'denied',
      'ad_user_data': marketing ? 'granted' : 'denied',
      'ad_personalization': marketing ? 'granted' : 'denied',
    });
  } catch (error) {
    console.error('Error updating Google consent:', error);
  }
}

/**
 * Update Meta Pixel Consent Mode
 */
export function updateMetaConsent(marketing: boolean): void {
  if (typeof window === 'undefined' || !window.fbq) return;

  try {
    if (marketing) {
      window.fbq('consent', 'grant');
    } else {
      window.fbq('consent', 'revoke');
    }
  } catch (error) {
    console.error('Error updating Meta consent:', error);
  }
}

/**
 * Update Microsoft Clarity Consent Signals
 */
export function updateClarityConsent(analytics: boolean): void {
  if (typeof window === 'undefined' || !window.clarity) return;

  try {
    window.clarity('consent', analytics);
  } catch (error) {
    console.error('Error updating Clarity consent:', error);
  }
}

/**
 * Accept all cookies (analytics + marketing)
 */
export function acceptAllCookies(): void {
  setConsentState(true, true);
}

/**
 * Reject all non-essential cookies
 */
export function rejectAllCookies(): void {
  setConsentState(false, false);
}

/**
 * Accept only analytics (reject marketing)
 */
export function acceptAnalyticsOnly(): void {
  setConsentState(true, false);
}

/**
 * Initialize consent state on page load
 * Sets default "denied" state for GDPR compliance
 */
export function initializeConsent(): void {
  if (typeof window === 'undefined') return;

  const existingConsent = getConsentState();

  if (existingConsent) {
    // User has previously made a choice, apply it
    updateGoogleConsent(existingConsent.analytics, existingConsent.marketing);
    updateMetaConsent(existingConsent.marketing);
    updateClarityConsent(existingConsent.analytics);
  } else {
    // No consent yet, set default "denied" state
    if (window.gtag) {
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'wait_for_update': 500,
      });
    }

    if (window.fbq) {
      window.fbq('consent', 'revoke');
    }

    if (window.clarity) {
      window.clarity('consent', false);
    }
  }
}

// TypeScript Window interface extensions are in component files
