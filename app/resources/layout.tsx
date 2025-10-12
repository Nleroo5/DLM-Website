import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources - Meta Advertising Guides | Drive Lead Media',
  description: 'Access free educational resources about Meta advertising, audience targeting, and effective ad strategies to grow your business.',
  openGraph: {
    title: 'Free Resources - Meta Advertising Guides | Drive Lead Media',
    description: 'Access free educational resources about Meta advertising, audience targeting, and effective ad strategies to grow your business.',
    url: 'https://driveleadmedia.com/resources',
    type: 'website',
  },
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
