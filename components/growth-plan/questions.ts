// Growth-plan intake: question options and lead routing.
// Shared by the modal (client) and /api/growth-plan (server) so both agree
// on valid answers and on which leads count as "hot".

export const GOALS = [
  {
    value: 'meta_ads',
    title: 'Meta ads',
    description: 'Facebook + Instagram campaigns that bring in leads.',
    tags: ['Strategy', 'Campaigns', 'Weekly optimization'],
  },
  {
    value: 'website',
    title: 'A new website',
    description: 'A fast site built to turn visitors into calls and forms.',
    tags: ['Design', 'Build', 'Tracking'],
  },
  {
    value: 'full_system',
    title: 'The full system',
    description: 'Ads, video creative, and the site, built to work together.',
    tags: ['Ads', 'Creative', 'Website', 'Tracking'],
    badge: 'Most clients',
  },
  {
    value: 'not_sure',
    title: 'Not sure yet',
    description: "We'll look at what you have and tell you where the leads are leaking.",
    tags: ['Free audit'],
  },
] as const;

// Matches DLM's case-study mix. Home services first: the strongest niche.
export const INDUSTRIES = [
  'Home services',
  'Medical & dental',
  'Fitness & wellness',
  'Food & drink',
  'Events & venues',
  'Local retail',
  'Professional services',
  'Something else',
] as const;

export const AD_SPEND = [
  'Not running ads yet',
  'Under $1k / mo',
  '$1k–3k / mo',
  '$3k–10k / mo',
  '$10k+ / mo',
] as const;

export const LAUNCH = ['Within 30 days', '1–3 months', '3+ months'] as const;

export const TIMELINE = ['ASAP', 'In the next 30 days', 'Just researching'] as const;

export type Goal = (typeof GOALS)[number]['value'];

export interface GrowthPlanAnswers {
  goal: Goal | '';
  businessName: string;
  industry: string;
  website: string;
  noWebsite: boolean;
  adSpend: string;
  launch: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isOwner: boolean;
  role: string;
  smsConsent: boolean;
}

export const EMPTY_ANSWERS: GrowthPlanAnswers = {
  goal: '',
  businessName: '',
  industry: '',
  website: '',
  noWebsite: false,
  adSpend: '',
  launch: '',
  timeline: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  isOwner: true,
  role: '',
  smsConsent: false,
};

// Website-only leads are asked for a launch window instead of ad spend.
export function asksAdSpend(goal: GrowthPlanAnswers['goal']): boolean {
  return goal !== 'website';
}

const QUALIFIED_SPEND: readonly string[] = ['$1k–3k / mo', '$3k–10k / mo', '$10k+ / mo'];
const SOON: readonly string[] = ['ASAP', 'In the next 30 days'];

// Hot leads see the calendar immediately; warm leads get a plan by email.
// Adjust these thresholds to match real minimums.
export function routeLead(a: Pick<GrowthPlanAnswers, 'goal' | 'adSpend' | 'timeline'>): 'hot' | 'warm' {
  const project = a.goal === 'website' || QUALIFIED_SPEND.includes(a.adSpend);
  return project && SOON.includes(a.timeline) ? 'hot' : 'warm';
}

export function goalTitle(goal: string): string {
  return GOALS.find((g) => g.value === goal)?.title ?? goal;
}
