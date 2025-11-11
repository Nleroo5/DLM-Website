import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Target Audience Guide: Stop Wasting Money | Drive Lead Media',
  description: 'Master Meta ads targeting with our complete guide. Learn cold, warm, and hot audience strategies, demographic targeting, and how to build profitable Facebook & Instagram ad audiences.',
  keywords: 'meta ads targeting, facebook audience targeting, instagram ads audience, cold warm hot audiences, meta ads demographics, facebook ads strategy',
  openGraph: {
    title: 'Meta Ads Target Audience Guide: Stop Wasting Money Targeting Everyone',
    description: 'Learn how to find your perfect customers on Facebook & Instagram with proven targeting strategies.',
    type: 'article',
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
