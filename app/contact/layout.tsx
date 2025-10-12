import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Drive Lead Media',
  description: 'Get in touch with Drive Lead Media. Schedule a free consultation to discuss your Meta advertising needs and grow your business.',
  openGraph: {
    title: 'Contact Us - Drive Lead Media',
    description: 'Get in touch with Drive Lead Media. Schedule a free consultation to discuss your Meta advertising needs and grow your business.',
    url: 'https://driveleadmedia.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
