import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Set Up Facebook Pixel: Complete 2025 Installation Guide',
  description: 'Complete step-by-step guide to installing Facebook Pixel (Meta Pixel) on your website. Includes WordPress, Shopify, GTM setup methods, testing & verification with screenshots.',
  keywords: 'how to install facebook pixel, meta pixel setup, facebook pixel installation guide, install meta pixel wordpress, facebook pixel shopify setup, google tag manager facebook pixel, meta pixel verification, facebook conversion tracking',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'How to Set Up Facebook Pixel: Complete 2025 Installation Guide',
    description: 'Complete step-by-step guide to installing Facebook Pixel (Meta Pixel) on your website. Includes WordPress, Shopify, GTM setup methods, testing & verification.',
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
    title: 'How to Set Up Facebook Pixel: Complete 2025 Installation Guide',
    description: 'Complete step-by-step guide to installing Facebook Pixel on your website with WordPress, Shopify, and GTM methods.',
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
