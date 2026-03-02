import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Advertising Blog | Facebook & Instagram Ads Tips | Drive Lead Media',
  description: 'Expert Meta advertising insights, Facebook & Instagram ads strategies, and ROI tips for Atlanta businesses. Learn from our campaigns and industry expertise.',
  keywords: 'meta ads blog, facebook advertising tips, instagram ads strategies, meta advertising insights atlanta, social media marketing blog',
  openGraph: {
    title: 'Drive Lead Media Blog | Meta Advertising Insights & Strategies',
    description: 'Expert tips on Facebook & Instagram advertising from Atlanta Meta ads agency.',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
