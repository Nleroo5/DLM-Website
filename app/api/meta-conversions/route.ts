/**
 * Meta Conversions API (CAPI) Endpoint
 *
 * Server-side event tracking for Meta Pixel
 * Benefits:
 * - Bypasses ad blockers
 * - More accurate attribution
 * - Better data quality
 * - Deduplication with browser pixel events
 *
 * SETUP REQUIRED:
 * 1. Get Access Token from Meta Events Manager:
 *    - Go to: https://business.facebook.com/events_manager2/
 *    - Select your pixel
 *    - Settings > Conversions API > Generate Access Token
 * 2. Add to .env.local:
 *    META_CAPI_ACCESS_TOKEN=your_access_token_here
 *    META_PIXEL_ID=1103544594607690
 */

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const CAPI_URL = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

interface MetaEvent {
  event_name: string;
  event_time: number;
  event_source_url: string;
  action_source: 'website';
  user_data?: {
    client_ip_address?: string;
    client_user_agent?: string;
    fbc?: string; // Facebook click ID
    fbp?: string; // Facebook browser ID
    em?: string; // Hashed email
    ph?: string; // Hashed phone
    fn?: string; // Hashed first name
    ln?: string; // Hashed last name
  };
  custom_data?: Record<string, any>;
  event_id?: string; // For deduplication with browser pixel
}

/**
 * SHA256 hash for user data (Meta requirement)
 */
function hashData(data: string): string {
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

/**
 * POST /api/meta-conversions
 * Send events to Meta Conversions API
 */
export async function POST(request: NextRequest) {
  try {
    // Check if pixel ID and access token are configured
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      console.warn('META_PIXEL_ID or META_CAPI_ACCESS_TOKEN not configured. Skipping server-side tracking.');
      return NextResponse.json(
        {
          success: false,
          error: 'CAPI not configured',
          message: 'Add META_PIXEL_ID and META_CAPI_ACCESS_TOKEN to .env.local to enable server-side tracking'
        },
        { status: 200 } // Don't fail client-side if CAPI not set up
      );
    }

    const body = await request.json();
    const { event_name, event_time, event_source_url, custom_data, event_id, user_data } = body;

    // Validate required fields
    if (!event_name || !event_time || !event_source_url) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: event_name, event_time, event_source_url' },
        { status: 400 }
      );
    }

    // Build event data
    const eventData: MetaEvent = {
      event_name,
      event_time,
      event_source_url,
      action_source: 'website',
      user_data: {
        client_ip_address: request.headers.get('x-forwarded-for')?.split(',')[0] || '',
        client_user_agent: request.headers.get('user-agent') || '',
        fbc: user_data?.fbc,
        fbp: user_data?.fbp,
      },
      custom_data: custom_data || {},
      event_id: event_id || `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };

    // Add hashed user data if provided (for advanced matching)
    if (user_data?.email) {
      eventData.user_data!.em = hashData(user_data.email);
    }
    if (user_data?.phone) {
      eventData.user_data!.ph = hashData(user_data.phone.replace(/\D/g, ''));
    }
    if (user_data?.firstName) {
      eventData.user_data!.fn = hashData(user_data.firstName);
    }
    if (user_data?.lastName) {
      eventData.user_data!.ln = hashData(user_data.lastName);
    }

    // Send to Meta Conversions API
    const response = await fetch(CAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
        access_token: ACCESS_TOKEN,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Meta CAPI error:', result);
      return NextResponse.json(
        { success: false, error: result.error?.message || 'Failed to send event to Meta' },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      events_received: result.events_received || 1,
      fbtrace_id: result.fbtrace_id,
    });

  } catch (error) {
    console.error('Meta CAPI error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/meta-conversions
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    configured: !!(PIXEL_ID && ACCESS_TOKEN),
    message: (PIXEL_ID && ACCESS_TOKEN)
      ? 'Meta Conversions API is configured and ready'
      : 'Add META_PIXEL_ID and META_CAPI_ACCESS_TOKEN to .env.local to enable server-side tracking',
  });
}
