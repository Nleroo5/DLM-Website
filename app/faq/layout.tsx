import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Drive Lead Media',
  description: 'Get answers to common questions about Meta advertising, our services, pricing, and how we help businesses grow with targeted ads.',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Drive Lead Media',
    description: 'Get answers to common questions about Meta advertising, our services, pricing, and how we help businesses grow with targeted ads.',
    url: 'https://driveleadmedia.com/faq',
    type: 'website',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
