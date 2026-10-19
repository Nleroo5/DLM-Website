'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AD_SPEND,
  EMPTY_ANSWERS,
  GOALS,
  INDUSTRIES,
  LAUNCH,
  TIMELINE,
  asksAdSpend,
  goalTitle,
  routeLead,
  type GrowthPlanAnswers,
} from '@/components/growth-plan/questions';
import { trackCustomEvent, trackFormAbandonment, trackLeadWithUserData } from '@/components/MetaPixel';
import { trackEvent as trackGA4Event, trackFormSubmission } from '@/components/GoogleAnalytics';
import GoogleRating from '@/components/GoogleRating';

const TOTAL_STEPS = 4;
const FORM_NAME = 'Growth Plan Intake';

const inputClass =
  'w-full bg-[#0e100f] border border-white/15 rounded-[10px] px-3 py-3 text-white font-body text-[0.95rem] placeholder:text-white/35 focus:border-[#5FA99F] focus:outline-none transition-colors';
const labelClass = 'block text-white font-body text-[0.875rem] font-semibold mb-1.5';

function formatPhone(value: string): string {
  const d = value.replace(/\D/g, '').replace(/^1/, '').slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function validateStep(step: number, a: GrowthPlanAnswers): string {
  if (step === 1 && !a.goal) return 'Pick the option that fits best.';
  if (step === 2) {
    if (!a.businessName.trim()) return 'Add your business name.';
    if (!a.industry) return 'Choose an industry.';
    if (!a.noWebsite && !a.website.trim()) return 'Add your website, or check "I don\'t have a website yet."';
  }
  if (step === 3) {
    if (asksAdSpend(a.goal) && !a.adSpend) return 'Choose your monthly ad spend.';
    if (!asksAdSpend(a.goal) && !a.launch) return 'Choose a target launch.';
    if (!a.timeline) return 'Choose when you want to start.';
  }
  if (step === 4) {
    if (!a.firstName.trim() || !a.lastName.trim()) return 'Add your first and last name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) return 'Enter an email like you@business.com.';
    if (a.phone.replace(/\D/g, '').length !== 10) return 'Enter a 10-digit phone number.';
    if (!a.isOwner && !a.role.trim()) return 'Add your role so we know who we\'re talking to.';
  }
  return '';
}

function Chips({
  options,
  value,
  onSelect,
  label,
}: {
  options: readonly string[];
  value: string;
  onSelect: (v: string) => void;
  label: string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={value === o}
          onClick={() => onSelect(o)}
          className={`font-body text-[0.9rem] px-4 py-2 rounded-full border transition-colors ${
            value === o
              ? 'border-[#5FA99F] bg-[#5FA99F]/15 text-[#bfe6df]'
              : 'border-white/10 bg-[#1b1e1d] text-white hover:border-[#5FA99F]/50'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default function GrowthPlanModal({
  isOpen,
  source,
  prefill,
  onClose,
}: {
  isOpen: boolean;
  source: string;
  prefill?: Partial<GrowthPlanAnswers>;
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<GrowthPlanAnswers>(EMPTY_ANSWERS);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [honeypot, setHoneypot] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const set = <K extends keyof GrowthPlanAnswers>(key: K, value: GrowthPlanAnswers[K]) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setError('');
  };

  const done = status === 'done';

  const close = useCallback(() => {
    if (!done && step > 1) {
      trackFormAbandonment(FORM_NAME, Math.round(((step - 1) / TOTAL_STEPS) * 100));
      trackGA4Event('intake_abandoned', { form_name: FORM_NAME, step, source });
    }
    onClose();
    // Keep answers if they bail mid-way and come back; start fresh after a submission.
    if (done) {
      setTimeout(() => {
        setStep(1);
        setAnswers(EMPTY_ANSWERS);
        setStatus('idle');
      }, 300);
    }
  }, [done, step, source, onClose]);

  // Apply answers handed over by the page that opened the form (only fills
  // fields the visitor hasn't already answered).
  useEffect(() => {
    if (!isOpen || !prefill) return;
    setAnswers((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(prefill) as [keyof GrowthPlanAnswers, never][]) {
        if (v !== undefined && (prev[k] === '' || prev[k] === EMPTY_ANSWERS[k])) next[k] = v;
      }
      return next;
    });
  }, [isOpen, prefill]);

  const closeRef = useRef(close);
  closeRef.current = close;

  // Scroll lock, focus handling, Escape and Tab trapping while open.
  useEffect(() => {
    if (!isOpen) return;
    returnFocusRef.current = document.activeElement as HTMLElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current();
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      returnFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
    // Wait for the step transition, then move focus into the new step.
    const t = setTimeout(() => bodyRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 220);
    return () => clearTimeout(t);
  }, [step, status]);

  const submit = async () => {
    setStatus('sending');
    try {
      const res = await fetch('/api/growth-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...answers, source, company_url: honeypot }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong sending your request.');

      const leadRoute: 'hot' | 'warm' = data.route === 'hot' ? 'hot' : routeLead(answers);
      trackLeadWithUserData(FORM_NAME, 1.0, {
        email: answers.email,
        phone: answers.phone,
        firstName: answers.firstName,
        lastName: answers.lastName,
      });
      trackFormSubmission(FORM_NAME, 1.0);
      trackGA4Event('intake_submitted', {
        form_name: FORM_NAME,
        service: answers.goal,
        industry: answers.industry,
        lead_route: leadRoute,
        source,
      });
      setStatus('done');
    } catch (err) {
      setStatus('idle');
      setError(
        err instanceof Error
          ? `${err.message} You can also email us at hello@driveleadmedia.com.`
          : 'Something went wrong. You can also email us at hello@driveleadmedia.com.'
      );
    }
  };

  const next = () => {
    const msg = validateStep(step, answers);
    if (msg) {
      setError(msg);
      return;
    }
    if (step < TOTAL_STEPS) {
      trackCustomEvent('IntakeStepCompleted', { form_name: FORM_NAME, step, source });
      trackGA4Event('intake_step_completed', { form_name: FORM_NAME, step, source });
      setStep(step + 1);
    } else {
      submit();
    }
  };

  const spendStep = asksAdSpend(answers.goal);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="growth-plan-overlay"
          className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center sm:p-6 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="growth-plan-title"
            className={`w-full sm:max-w-[560px] max-h-[92dvh] sm:max-h-[90vh] flex flex-col bg-[#141614] border border-[#5FA99F]/40 rounded-t-[20px] sm:rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header */}
            <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-[#5FA99F]/20">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-body text-[0.75rem] uppercase tracking-[0.12em] text-gray-400">
                  {done ? 'Request received' : `Step ${step} of ${TOTAL_STEPS}`}
                </span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="text-gray-400 hover:text-white text-2xl leading-none px-2 py-1 rounded-md"
                >
                  ×
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5" aria-hidden="true">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-colors duration-300 ${done || i < step ? 'bg-[#5FA99F]' : 'bg-white/10'}`}
                  />
                ))}
              </div>
            </div>

            {/* Body */}
            <div ref={bodyRef} className="flex-1 overflow-y-auto px-5 sm:px-6 py-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={done ? 'done' : step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col gap-5"
                >
                  {done ? (
                    <SuccessScreen answers={answers} />
                  ) : step === 1 ? (
                    <>
                      <StepHeading title="What can we help with?" hint="Pick the closest one. You can change it on the call." />
                      <div role="radiogroup" aria-label="Service" className="flex flex-col gap-2.5">
                        {GOALS.map((g, i) => {
                          const selected = answers.goal === g.value;
                          return (
                            <button
                              key={g.value}
                              type="button"
                              role="radio"
                              aria-checked={selected}
                              data-autofocus={i === 0 ? true : undefined}
                              onClick={() => {
                                set('goal', g.value);
                                set('adSpend', '');
                                set('launch', '');
                              }}
                              className={`flex flex-col items-stretch w-full text-left rounded-xl border px-4 py-3.5 transition-colors ${
                                selected ? 'border-[#5FA99F] bg-[#5FA99F]/10' : 'border-white/10 bg-[#1b1e1d] hover:border-[#5FA99F]/50'
                              }`}
                            >
                              <span className="flex justify-between items-center gap-2 text-white font-body font-semibold">
                                {g.title}
                                {'badge' in g && (
                                  <span className="text-[0.7rem] uppercase tracking-[0.1em] text-[#f2a921]">{g.badge}</span>
                                )}
                              </span>
                              <span className="block text-gray-400 font-body text-[0.88rem] mt-0.5">{g.description}</span>
                              <span className="flex flex-wrap gap-1.5 mt-2">
                                {g.tags.map((t) => (
                                  <span key={t} className="text-[0.7rem] text-[#5FA99F] border border-[#5FA99F]/25 rounded-md px-1.5 py-px">
                                    {t}
                                  </span>
                                ))}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </>
                  ) : step === 2 ? (
                    <>
                      <StepHeading title="Tell us about the business" hint="We'll look at what you have before we talk." />
                      <div>
                        <label htmlFor="gp-business" className={labelClass}>Business name</label>
                        <input
                          id="gp-business"
                          data-autofocus
                          className={inputClass}
                          value={answers.businessName}
                          onChange={(e) => set('businessName', e.target.value)}
                          placeholder="e.g. Peachtree Plumbing"
                          autoComplete="organization"
                        />
                      </div>
                      <div>
                        <label htmlFor="gp-industry" className={labelClass}>Industry</label>
                        <select
                          id="gp-industry"
                          className={inputClass}
                          value={answers.industry}
                          onChange={(e) => set('industry', e.target.value)}
                        >
                          <option value="">Select industry</option>
                          {INDUSTRIES.map((i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                      {!answers.noWebsite && (
                        <div>
                          <label htmlFor="gp-website" className={labelClass}>Current website</label>
                          <input
                            id="gp-website"
                            className={inputClass}
                            value={answers.website}
                            onChange={(e) => set('website', e.target.value)}
                            placeholder="yourbusiness.com"
                            inputMode="url"
                            autoComplete="url"
                          />
                        </div>
                      )}
                      <label className="flex items-start gap-2.5 text-gray-400 font-body text-[0.9rem] cursor-pointer">
                        <input
                          type="checkbox"
                          className="mt-1 accent-[#5FA99F]"
                          checked={answers.noWebsite}
                          onChange={(e) => set('noWebsite', e.target.checked)}
                        />
                        I don&apos;t have a website yet
                      </label>
                    </>
                  ) : step === 3 ? (
                    <>
                      <StepHeading
                        title={spendStep ? 'Where are your ads today?' : 'When do you want the new site live?'}
                        hint="This helps us bring the right plan. There's no wrong answer."
                      />
                      <div>
                        <span className={labelClass}>{spendStep ? 'Monthly ad spend' : 'Target launch'}</span>
                        {spendStep ? (
                          <Chips label="Monthly ad spend" options={AD_SPEND} value={answers.adSpend} onSelect={(v) => set('adSpend', v)} />
                        ) : (
                          <Chips label="Target launch" options={LAUNCH} value={answers.launch} onSelect={(v) => set('launch', v)} />
                        )}
                      </div>
                      <div>
                        <span className={labelClass}>How soon do you want to start?</span>
                        <Chips label="Timeline" options={TIMELINE} value={answers.timeline} onSelect={(v) => set('timeline', v)} />
                      </div>
                    </>
                  ) : (
                    <>
                      <StepHeading title="Where should we send your plan?" hint="A real person reads every request. No spam." />
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="gp-first" className={labelClass}>First name</label>
                          <input id="gp-first" data-autofocus className={inputClass} value={answers.firstName} onChange={(e) => set('firstName', e.target.value)} autoComplete="given-name" />
                        </div>
                        <div>
                          <label htmlFor="gp-last" className={labelClass}>Last name</label>
                          <input id="gp-last" className={inputClass} value={answers.lastName} onChange={(e) => set('lastName', e.target.value)} autoComplete="family-name" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="gp-email" className={labelClass}>Email</label>
                        <input
                          id="gp-email"
                          type="email"
                          className={inputClass}
                          value={answers.email}
                          onChange={(e) => set('email', e.target.value.trim().toLowerCase())}
                          placeholder="you@business.com"
                          autoComplete="email"
                        />
                      </div>
                      <div>
                        <label htmlFor="gp-phone" className={labelClass}>Phone <span className="text-gray-500 font-normal">(so we can reach you quickly)</span></label>
                        <input
                          id="gp-phone"
                          type="tel"
                          className={inputClass}
                          value={answers.phone}
                          onChange={(e) => set('phone', formatPhone(e.target.value))}
                          placeholder="(404) 000-0000"
                          autoComplete="tel"
                        />
                      </div>
                      <label className="flex items-start gap-2.5 text-gray-400 font-body text-[0.9rem] cursor-pointer">
                        <input type="checkbox" className="mt-1 accent-[#5FA99F]" checked={answers.isOwner} onChange={(e) => set('isOwner', e.target.checked)} />
                        I&apos;m the owner or decision-maker
                      </label>
                      {!answers.isOwner && (
                        <div>
                          <label htmlFor="gp-role" className={labelClass}>Your role</label>
                          <input id="gp-role" className={inputClass} value={answers.role} onChange={(e) => set('role', e.target.value)} placeholder="e.g. Marketing manager" />
                        </div>
                      )}
                      <label className="flex items-start gap-2.5 text-gray-400 font-body text-[0.85rem] cursor-pointer">
                        <input type="checkbox" className="mt-1 accent-[#5FA99F]" checked={answers.smsConsent} onChange={(e) => set('smsConsent', e.target.checked)} />
                        Text me updates about my request. Msg &amp; data rates may apply. Reply STOP to opt out.
                      </label>
                      {/* Honeypot: hidden from people, filled by bots */}
                      <input
                        type="text"
                        name="company_url"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        className="absolute -left-[9999px] w-px h-px opacity-0"
                      />
                      <p className="text-gray-500 font-body text-[0.75rem]">
                        By submitting, you agree to our{' '}
                        <Link href="/privacy" className="underline hover:text-gray-300">Privacy Policy</Link>.
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer */}
            {!done && (
              <div className="px-5 sm:px-6 pt-3 pb-5 border-t border-[#5FA99F]/20 flex flex-col gap-3">
                <p role="alert" className="text-[#ef7a6b] font-body text-[0.85rem] min-h-[1.25em]">{error}</p>
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => { setStep(step - 1); setError(''); }}
                    className={`font-body text-gray-400 hover:text-white px-1 py-2 ${step === 1 ? 'invisible' : ''}`}
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={status === 'sending'}
                    className="font-body font-semibold text-[1rem] px-6 py-3 rounded-xl bg-[#5FA99F] text-[#061210] hover:bg-[#6fbbb0] disabled:opacity-60 transition-colors"
                  >
                    {step < TOTAL_STEPS ? 'Continue' : status === 'sending' ? 'Sending…' : 'Send my request'}
                  </button>
                </div>
                <div className="flex justify-center">
                  <GoogleRating className="text-[0.82rem]" link={false} />
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StepHeading({ title, hint }: { title: string; hint: string }) {
  return (
    <div>
      <h2 id="growth-plan-title" className="font-heading text-white text-[1.4rem] sm:text-[1.6rem] font-semibold leading-tight">
        {title}
      </h2>
      <p className="text-gray-400 font-body text-[0.92rem] mt-1">{hint}</p>
    </div>
  );
}

function SuccessScreen({ answers }: { answers: GrowthPlanAnswers }) {
  const hasSite = !answers.noWebsite && answers.website.trim();
  const steps = [
    hasSite && {
      title: `We review ${answers.website.trim()}`,
      body: 'Before we reach out, we check site speed, tracking, and how your ads land.',
    },
    {
      title: 'We reach out the same business day',
      body: `By phone at ${answers.phone} or by email. If you sent this after hours, expect us the next business day.`,
    },
  ].filter(Boolean) as { title: string; body: string }[];

  return (
    <>
      <div>
        <h2 id="growth-plan-title" className="font-heading text-white text-[1.4rem] sm:text-[1.6rem] font-semibold leading-tight">
          Thanks, {answers.firstName}. We&apos;re on it.
        </h2>
        <p className="text-gray-400 font-body text-[0.92rem] mt-1">
          Request for {answers.businessName} · {goalTitle(answers.goal)}
        </p>
      </div>
      <ol className="flex flex-col gap-2.5">
        {steps.map((s, i) => (
          <li key={s.title} className="grid grid-cols-[28px_1fr] gap-3 items-start bg-[#1b1e1d] rounded-xl px-4 py-3">
            <span className="w-7 h-7 rounded-full grid place-items-center bg-[#5FA99F]/15 text-[#5FA99F] text-[0.8rem] font-semibold">{i + 1}</span>
            <span>
              <span className="block text-white font-body font-semibold">{s.title}</span>
              <span className="block text-gray-400 font-body text-[0.88rem]">{s.body}</span>
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
