import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Set Up Facebook Pixel: 2025 Guide (23 Screenshots) | DLM',
  description: 'Step-by-step Facebook Pixel setup guide with 23 screenshots. Covers WordPress, Shopify, and Google Tag Manager installation, testing, and verification.',
  keywords: 'how to install facebook pixel, meta pixel setup, facebook pixel installation guide, install meta pixel wordpress, facebook pixel shopify setup, google tag manager facebook pixel, meta pixel verification, facebook conversion tracking',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'How to Set Up Facebook Pixel (2025): Complete Guide with 23 Screenshots',
    description: 'Step-by-step Facebook Pixel setup guide for WordPress, Shopify, and GTM. 23 screenshots + video walkthrough. Updated January 2025.',
    type: 'article',
    publishedTime: '2025-12-13T09:00:00-05:00',
    authors: ['Nicolas Leroo'],
    url: 'https://driveleadmedia.com/blog/how-to-set-up-facebook-pixel',
    images: [{
      url: 'https://driveleadmedia.com/images/meta-events-manager-overview.webp',
      width: 900,
      height: 566,
      alt: 'Meta Events Manager dashboard showing Facebook Pixel overview and setup options',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Set Up Facebook Pixel (2025): Complete Guide with 23 Screenshots',
    description: 'Step-by-step Facebook Pixel setup guide for WordPress, Shopify, and GTM. 23 screenshots + video walkthrough. Updated January 2025.',
    images: ['https://driveleadmedia.com/images/meta-events-manager-overview.webp'],
  },
  alternates: {
    canonical: '/blog/how-to-set-up-facebook-pixel',
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
