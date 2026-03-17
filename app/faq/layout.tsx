import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Drive Lead Media',
  description: 'Get answers to common questions about Meta advertising, our services, pricing, and how we help businesses grow with targeted ads.',
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Drive Lead Media',
    description: 'Get answers to common questions about Meta advertising, our services, pricing, and how we help businesses grow with targeted ads.',
    url: 'https://driveleadmedia.com/faq',
    type: 'website',
    images: [{
      url: "https://driveleadmedia.com/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Drive Lead Media - Custom Websites & Meta Advertising in Atlanta",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Frequently Asked Questions | Drive Lead Media',
    description: 'Get answers to common questions about Meta advertising, our services, pricing, and how we help businesses grow with targeted ads.',
    images: ["https://driveleadmedia.com/images/og-image.webp"],
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
