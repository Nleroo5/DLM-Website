/**
 * Meta Conversions API (CAPI) Client Helpers
 * Send events to Meta server-side for better attribution
 */

/**
 * Send event to Meta Conversions API via our Next.js API route
 */
export async function sendMetaServerEvent(
  eventName: string,
  customData?: Record<string, any>,
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    fbc?: string; // Facebook click ID from cookie
    fbp?: string; // Facebook browser ID from cookie
  }
): Promise<boolean> {
  try {
    // Get Facebook cookies for better matching
    const fbc = getCookie('_fbc');
    const fbp = getCookie('_fbp');

    const response = await fetch('/api/meta-conversions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        custom_data: customData,
        user_data: {
          ...userData,
          fbc: userData?.fbc || fbc,
          fbp: userData?.fbp || fbp,
        },
        event_id: generateEventId(), // For deduplication with browser pixel
      }),
    });

    const result = await response.json();

    if (!result.success) {
      console.warn('Meta CAPI event failed:', result.error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending Meta server event:', error);
    return false;
  }
}

/**
 * Send Lead event to both browser pixel AND server-side API
 * This is the recommended dual setup for best attribution
 */
export async function trackLeadDual(
  formName: string,
  value: number = 1.0,
  userData?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  }
) {
  const eventData = {
    content_name: formName,
    value: value,
    currency: 'USD',
  };

  const eventId = generateEventId();

  // 1. Send to browser pixel (client-side)
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      if (userData) {
        const advancedMatching: any = {};
        if (userData.email) advancedMatching.em = userData.email.toLowerCase().trim();
        if (userData.phone) advancedMatching.ph = userData.phone.replace(/\D/g, '');
        if (userData.firstName) advancedMatching.fn = userData.firstName.toLowerCase().trim();
        if (userData.lastName) advancedMatching.ln = userData.lastName.toLowerCase().trim();

        window.fbq('track', 'Lead', eventData, { eventID: eventId, ...advancedMatching });
      } else {
        window.fbq('track', 'Lead', eventData, { eventID: eventId });
      }
    } catch (error) {
      console.error('Error tracking browser pixel event:', error);
    }
  }

  // 2. Send to Conversions API (server-side)
  await sendMetaServerEvent('Lead', eventData, userData);
}

/**
 * Helper: Get cookie value
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }

  return null;
}

/**
 * Helper: Generate unique event ID for deduplication
 */
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Window interface declared in GoogleAnalytics.tsx
