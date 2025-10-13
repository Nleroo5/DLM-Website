import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drive Lead Media - Dental Practice Marketing',
  description: 'Professional Meta ad systems that deliver results. Actor-led videos, no filming required, 14-day launch.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    nosnippet: true,
  },
};

export default function DentalIntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
