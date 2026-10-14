'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import GrowthPlanModal from '@/components/growth-plan/GrowthPlanModal';
import { trackCustomEvent } from '@/components/MetaPixel';
import { trackEvent as trackGA4Event } from '@/components/GoogleAnalytics';

interface GrowthPlanContextValue {
  open: (source: string) => void;
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

  const open = useCallback((from: string) => {
    setSource(from);
    setIsOpen(true);
    trackCustomEvent('IntakeOpened', { form_name: 'Growth Plan Intake', source: from });
    trackGA4Event('intake_opened', { form_name: 'Growth Plan Intake', source: from });
  }, []);

  return (
    <GrowthPlanContext.Provider value={{ open }}>
      {children}
      <GrowthPlanModal isOpen={isOpen} source={source} onClose={() => setIsOpen(false)} />
    </GrowthPlanContext.Provider>
  );
}
