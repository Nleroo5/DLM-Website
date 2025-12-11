import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Target Audience Guide: Stop Wasting Money | Drive Lead Media',
  description: 'Master Meta ads targeting with our Atlanta guide. Learn cold, warm & hot audience strategies to build profitable Facebook & Instagram campaigns. Read now.',
  keywords: 'meta ads targeting, facebook audience targeting, instagram ads audience, cold warm hot audiences, meta ads demographics, facebook ads strategy',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Meta Ads Target Audience Guide: Stop Wasting Money Targeting Everyone',
    description: 'Learn how to find your perfect customers on Facebook & Instagram with proven targeting strategies.',
    type: 'article',
    publishedTime: '2025-10-25T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    images: [{
      url: '/images/dlm-logo.png',
      width: 1200,
      height: 630,
      alt: 'Meta Ads Target Audience Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Target Audience Guide: Stop Wasting Money',
    description: 'Master cold, warm, and hot audience strategies for Facebook & Instagram ads. Complete targeting guide.',
    images: ['/images/dlm-logo.png'],
  },
  alternates: {
    canonical: '/blog/meta-ads-target-audience-guide',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
