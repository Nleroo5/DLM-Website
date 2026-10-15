'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';
import type { GrowthPlanAnswers } from '@/components/growth-plan/questions';
import { trackCustomEvent } from '@/components/MetaPixel';
import { trackEvent as trackGA4Event } from '@/components/GoogleAnalytics';

interface GrowthPlanContextValue {
  // prefill lets a page hand over what it already knows (e.g. the website a
  // visitor just graded) so they don't retype it.
  open: (source: string, prefill?: Partial<GrowthPlanAnswers>) => void;
}

// The modal's code loads on first open (and is prefetched when the browser is
// idle), so it doesn't weigh on every page's first load.
const loadModal = () => import('@/components/growth-plan/GrowthPlanModal');
const GrowthPlanModal = dynamic(loadModal, { ssr: false });

const GrowthPlanContext = createContext<GrowthPlanContextValue | null>(null);

export function useGrowthPlan(): GrowthPlanContextValue {
  const ctx = useContext(GrowthPlanContext);
  if (!ctx) throw new Error('useGrowthPlan must be used inside <GrowthPlanProvider>');
  return ctx;
}

export default function GrowthPlanProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 2500));
    idle(() => { loadModal(); });
  }, []);
  const [source, setSource] = useState('unknown');
  const [prefill, setPrefill] = useState<Partial<GrowthPlanAnswers> | undefined>(undefined);

  const open = useCallback((from: string, initial?: Partial<GrowthPlanAnswers>) => {
    setSource(from);
    setPrefill(initial);
    setMounted(true);
    setIsOpen(true);
    trackCustomEvent('IntakeOpened', { form_name: 'Growth Plan Intake', source: from });
    trackGA4Event('intake_opened', { form_name: 'Growth Plan Intake', source: from });
  }, []);

  return (
    <GrowthPlanContext.Provider value={{ open }}>
      {/* Every framer-motion animation on the site honors the OS "reduce motion" setting. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
      {mounted && (
        <GrowthPlanModal isOpen={isOpen} source={source} prefill={prefill} onClose={() => setIsOpen(false)} />
      )}
    </GrowthPlanContext.Provider>
  );
}
