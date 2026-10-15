'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import GrowthPlanModal from '@/components/growth-plan/GrowthPlanModal';
import type { GrowthPlanAnswers } from '@/components/growth-plan/questions';
import { trackCustomEvent } from '@/components/MetaPixel';
import { trackEvent as trackGA4Event } from '@/components/GoogleAnalytics';

interface GrowthPlanContextValue {
  // prefill lets a page hand over what it already knows (e.g. the website a
  // visitor just graded) so they don't retype it.
  open: (source: string, prefill?: Partial<GrowthPlanAnswers>) => void;
}

const GrowthPlanContext = createContext<GrowthPlanContextValue | null>(null);

export function useGrowthPlan(): GrowthPlanContextValue {
  const ctx = useContext(GrowthPlanContext);
  if (!ctx) throw new Error('useGrowthPlan must be used inside <GrowthPlanProvider>');
  return ctx;
}

export default function GrowthPlanProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('unknown');
  const [prefill, setPrefill] = useState<Partial<GrowthPlanAnswers> | undefined>(undefined);

  const open = useCallback((from: string, initial?: Partial<GrowthPlanAnswers>) => {
    setSource(from);
    setPrefill(initial);
    setIsOpen(true);
    trackCustomEvent('IntakeOpened', { form_name: 'Growth Plan Intake', source: from });
    trackGA4Event('intake_opened', { form_name: 'Growth Plan Intake', source: from });
  }, []);

  return (
    <GrowthPlanContext.Provider value={{ open }}>
      {children}
      <GrowthPlanModal isOpen={isOpen} source={source} prefill={prefill} onClose={() => setIsOpen(false)} />
    </GrowthPlanContext.Provider>
  );
}
