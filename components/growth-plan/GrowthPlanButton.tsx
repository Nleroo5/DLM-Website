'use client';

import { useGrowthPlan } from '@/components/growth-plan/GrowthPlanProvider';

// Any CTA that should open the growth-plan intake. `source` shows up in the
// lead email and tracking so you can see which button converts.
export default function GrowthPlanButton({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useGrowthPlan();
  return (
    <button type="button" onClick={() => open(source)} className={className}>
      {children}
    </button>
  );
}
