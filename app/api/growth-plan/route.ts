import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import {
  AD_SPEND,
  GOALS,
  INDUSTRIES,
  LAUNCH,
  TIMELINE,
  asksAdSpend,
  goalTitle,
  routeLead,
} from '@/components/growth-plan/questions';

const schema = z
  .object({
    goal: z.enum(GOALS.map((g) => g.value) as [string, ...string[]]),
    businessName: z.string().trim().min(1).max(200),
    industry: z.enum(INDUSTRIES),
    website: z.string().trim().max(300).optional().default(''),
    noWebsite: z.boolean(),
    adSpend: z.string().optional().default(''),
    launch: z.string().optional().default(''),
    timeline: z.enum(TIMELINE),
    firstName: z.string().trim().min(1).max(100),
    lastName: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(200),
    phone: z.string().trim().refine((v) => v.replace(/\D/g, '').length === 10, 'Invalid phone'),
    isOwner: z.boolean(),
    role: z.string().trim().max(100).optional().default(''),
    smsConsent: z.boolean(),
    source: z.string().max(50).optional().default('unknown'),
    // Honeypot: real visitors never see or fill this field.
    company_url: z.string().optional().default(''),
  })
  .superRefine((d, ctx) => {
    if (!d.noWebsite && !d.website) ctx.addIssue({ code: 'custom', path: ['website'], message: 'Website required' });
    if (asksAdSpend(d.goal as never)) {
      if (!(AD_SPEND as readonly string[]).includes(d.adSpend)) ctx.addIssue({ code: 'custom', path: ['adSpend'], message: 'Invalid ad spend' });
    } else if (!(LAUNCH as readonly string[]).includes(d.launch)) {
      ctx.addIssue({ code: 'custom', path: ['launch'], message: 'Invalid launch' });
    }
  });

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const { allowed } = rateLimit(`growth-plan:${ip}`, 5, 60 * 1000);
    if (!allowed) {
      return NextResponse.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 });
    }

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: 'Some answers are missing or invalid.' }, { status: 400 });
    }
    const d = parsed.data;

    // Bots that fill the honeypot get a normal-looking success and no email.
    if (d.company_url) {
      return NextResponse.json({ success: true, route: 'warm' });
    }

    const route = routeLead({ goal: d.goal as never, adSpend: d.adSpend, timeline: d.timeline });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    });

    const name = `${d.firstName} ${d.lastName}`;
    const rows: [string, string][] = [
      ['Service', goalTitle(d.goal)],
      ['Business', d.businessName],
      ['Industry', d.industry],
      ['Website', d.noWebsite ? 'No website yet' : d.website],
      asksAdSpend(d.goal as never) ? ['Monthly ad spend', d.adSpend] : ['Target launch', d.launch],
      ['Timeline', d.timeline],
      ['Name', name],
      ['Email', d.email],
      ['Phone', d.phone],
      ['Decision-maker', d.isOwner ? 'Yes (owner)' : `No: ${d.role || 'role not given'}`],
      ['SMS consent', d.smsConsent ? 'Yes' : 'No'],
      ['Source', d.source],
    ];

    const badge = route === 'hot'
      ? '<span style="background:#e6f6ee;color:#1d7a4c;padding:4px 10px;border-radius:6px;font-weight:bold;">HOT: shown the calendar</span>'
      : '<span style="background:#fdf3df;color:#9a6400;padding:4px 10px;border-radius:6px;font-weight:bold;">WARM: promised a plan by email within 1 business day</span>';

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'nicolas@driveleadmedia.com',
      replyTo: d.email,
      subject: `[${route.toUpperCase()}] Growth plan request: ${d.businessName} (${goalTitle(d.goal)})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5FA99F; border-bottom: 2px solid #5FA99F; padding-bottom: 10px;">New Growth Plan Request</h2>
          <p style="margin: 16px 0;">${badge}</p>
          <table style="border-collapse: collapse; width: 100%;">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:8px 12px 8px 0;border-bottom:1px solid #eee;color:#666;white-space:nowrap;vertical-align:top;">${k}</td><td style="padding:8px 0;border-bottom:1px solid #eee;"><strong>${escapeHtml(v)}</strong></td></tr>`
              )
              .join('')}
          </table>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">Sent from the homepage growth-plan intake at ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, route });
  } catch (error) {
    console.error('Growth plan submission failed:', error);
    return NextResponse.json({ error: 'Something went wrong sending your request.' }, { status: 500 });
  }
}
