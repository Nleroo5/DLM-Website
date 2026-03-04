import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Free Strategy Session | Drive Lead Media',
  description:
    'Schedule a free 15-minute strategy call with Drive Lead Media. We\'ll review your marketing, identify what\'s costing you leads, and map out a growth plan.',
  keywords: [
    'free strategy call',
    'book a call',
    'marketing consultation',
    'meta ads consultation',
    'facebook ads strategy',
    'Drive Lead Media',
  ],
  alternates: {
    canonical: 'https://driveleadmedia.com/book',
  },
  openGraph: {
    title: 'Book a Free Strategy Session | Drive Lead Media',
    description:
      'Schedule a free 15-minute strategy call. We\'ll review your marketing and map out a plan to grow.',
    url: 'https://driveleadmedia.com/book',
    siteName: 'Drive Lead Media',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free Strategy Session | Drive Lead Media',
    description:
      'Schedule a free 15-minute strategy call. We\'ll review your marketing and map out a plan to grow.',
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
