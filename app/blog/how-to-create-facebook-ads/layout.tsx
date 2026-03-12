import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Create Facebook Ads: Step-by-Step Guide (2025) | DLM',
  description: 'Create Facebook ads step by step. Campaign setup, targeting strategies, budgets, and optimization tips with screenshots from Meta advertising experts.',
  keywords: 'how to create facebook ads, how to run facebook ads, how to make facebook ads, facebook ads tutorial, create facebook ad campaign, how to set up facebook ads, facebook advertising tutorial, facebook ads manager tutorial, how to advertise on facebook',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'How to Create Facebook Ads: Step-by-Step Tutorial (2025)',
    description: 'Complete guide to creating Facebook ads from scratch. Learn campaign setup, targeting strategies, and optimization from Meta advertising experts.',
    type: 'article',
    publishedTime: '2025-12-14T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/how-to-create-facebook-ads',
    images: [{
      url: 'https://driveleadmedia.com/images/how-to-create-facebook-ads-tutorial-guide.webp',
      width: 1200,
      height: 630,
      alt: 'How to Create Facebook Ads Step-by-Step Tutorial Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create Facebook Ads: Complete Step-by-Step Guide (2025)',
    description: 'Learn to create high-converting Facebook ads with our detailed tutorial. Campaign setup, targeting, budgets, and optimization.',
    images: ['https://driveleadmedia.com/images/how-to-create-facebook-ads-tutorial-guide.webp'],
  },
  alternates: {
    canonical: '/blog/how-to-create-facebook-ads',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
