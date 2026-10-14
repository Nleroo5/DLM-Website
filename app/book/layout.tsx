import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started Free | Drive Lead Media',
  description:
    'Answer 4 quick questions about your business and Drive Lead Media will reach out the same business day with ideas to get you more leads from Meta ads and your website.',
  keywords: [
    'free strategy call',
    'get started',
    'marketing consultation',
    'meta ads consultation',
    'facebook ads strategy',
    'Drive Lead Media',
  ],
  alternates: {
    canonical: 'https://driveleadmedia.com/book',
  },
  openGraph: {
    title: 'Get Started Free | Drive Lead Media',
    description:
      'Answer 4 quick questions and we\'ll reach out the same business day with a plan to get you more leads.',
    url: 'https://driveleadmedia.com/book',
    siteName: 'Drive Lead Media',
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
    title: 'Get Started Free | Drive Lead Media',
    description:
      'Answer 4 quick questions and we\'ll reach out the same business day with a plan to get you more leads.',
    images: ["https://driveleadmedia.com/images/og-image.webp"],
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
