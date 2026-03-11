'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

// Counter hook that resets and replays when triggerKey changes
function useCounter(
  end: number,
  start: number = 0,
  duration: number = 2000,
  delay: number = 0,
  triggerKey: number = 0
) {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const easeOutExpo = useCallback((t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }, []);

  useEffect(() => {
    if (triggerKey === 0) return; // don't run until first trigger

    setValue(start); // reset to start value

    const timeout = setTimeout(() => {
      startTimeRef.current = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);
        const current = start + (end - start) * eased;

        setValue(current);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [triggerKey, end, start, duration, delay, easeOutExpo]);

  return value;
}

function formatNumber(val: number): string {
  return Math.round(val).toLocaleString('en-US');
}

function formatCurrency(val: number): string {
  return '$' + val.toFixed(2);
}

function formatRoas(val: number): string {
  return val.toFixed(1) + 'x';
}

function formatDuration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = Math.round(totalSeconds % 60);
  return `${m}m ${s.toString().padStart(2, '0')}s`;
}

export default function HeroDashboard() {
  const counterDuration = 3200;
  const counterBaseDelay = 400; // shorter delay since we wait for inView

  // IntersectionObserver to detect when metrics are visible — once only
  const metricsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(metricsRef, { once: true, amount: 0.3 });
  const [triggerKey, setTriggerKey] = useState(0);
  const hasTriggered = useRef(false);

  // Only trigger counters once
  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      setTriggerKey(1);
    }
  }, [isInView]);

  const roas = useCounter(6.8, 0, counterDuration, counterBaseDelay, triggerKey);
  const cpl = useCounter(12.40, 52.80, counterDuration, counterBaseDelay, triggerKey);
  const sessions = useCounter(3987, 0, counterDuration, counterBaseDelay, triggerKey);
  const duration = useCounter(154, 0, counterDuration, counterBaseDelay, triggerKey);

  // Sparkline animation key — resets bars each time section enters view
  const sparklineKey = triggerKey;

  return (
    <div className="w-full flex flex-col gap-2">

      {/* Browser mockup with video — compact */}
      <motion.div
        className="rounded-lg overflow-hidden border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] bg-[#0d1b2a]/90"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#0a1420] border-b border-[#1a2a3a]/60">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2">
            <div className="bg-[#1a2a3a]/60 rounded px-2 py-px text-[8px] text-gray-500 font-ui text-center">
              myvillagepeds.com
            </div>
          </div>
        </div>

        {/* Video content */}
        <div className="relative aspect-video bg-[#111827]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/Videos/villagepeds-poster.jpg"
            className="w-full h-full object-contain"
          >
            <source src="/Videos/villagepeds-sm.webm" type="video/webm" />
            <source src="/Videos/villagepeds.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Metrics grid — 2x2 */}
      <motion.div
        ref={metricsRef}
        className="grid grid-cols-2 gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >

        {/* ROAS */}
        <div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">ROAS</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <p className="text-white text-2xl font-bold font-ui tabular-nums">
              {formatRoas(roas)}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+18.2%</span>
          </div>
          {/* Mini sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 100].map((h, i) => (
              <motion.div
                key={`${sparklineKey}-${i}`}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#5FA99F]/60 to-[#5FA99F]"
                initial={{ height: 0 }}
                animate={hasTriggered.current || isInView ? { height: `${h}%` } : { height: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
              />
            ))}
          </div>
        </div>

        {/* Cost per Lead — counts DOWN */}
        <div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Cost per Lead</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <p className="text-white text-2xl font-bold font-ui tabular-nums">
              {formatCurrency(cpl)}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F] rotate-180" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">-24.6%</span>
          </div>
          {/* Downward trend line */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[100, 92, 85, 80, 72, 68, 60, 55, 48, 42, 38, 30].map((h, i) => (
              <motion.div
                key={`${sparklineKey}-${i}`}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#67E8F9]/60 to-[#67E8F9]"
                initial={{ height: 0 }}
                animate={hasTriggered.current || isInView ? { height: `${h}%` } : { height: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.04 }}
              />
            ))}
          </div>
        </div>

        {/* Sessions */}
        <div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Sessions</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <p className="text-white text-2xl font-bold font-ui tabular-nums">
              {formatNumber(sessions)}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+32.4%</span>
          </div>
          {/* Sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
              <motion.div
                key={`${sparklineKey}-${i}`}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#5FA99F]/60 to-[#5FA99F]"
                initial={{ height: 0 }}
                animate={hasTriggered.current || isInView ? { height: `${h}%` } : { height: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.04 }}
              />
            ))}
          </div>
        </div>

        {/* Avg. Session Duration */}
        <div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Avg. Session Duration</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <p className="text-white text-2xl font-bold font-ui tabular-nums">
              {formatDuration(duration)}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+14.8%</span>
          </div>
          {/* Sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[50, 45, 55, 60, 58, 65, 70, 68, 75, 80, 85, 90].map((h, i) => (
              <motion.div
                key={`${sparklineKey}-${i}`}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#67E8F9]/60 to-[#67E8F9]"
                initial={{ height: 0 }}
                animate={hasTriggered.current || isInView ? { height: `${h}%` } : { height: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.04 }}
              />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
