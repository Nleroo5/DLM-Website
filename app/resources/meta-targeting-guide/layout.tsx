import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meta Ads Targeting Guide: Choose the Right Audience | DLM',
  description: 'A guide to Meta ad targeting: cold, warm and hot audiences, demographics, interests, and how to build an audience of your best customers.',
  keywords: 'meta targeting, facebook ad targeting, instagram ad targeting, audience targeting, cold audiences, warm audiences, hot audiences, demographics targeting',
  openGraph: {
    title: 'Target Audiences Guide - Learn Meta Ad Targeting',
    description: 'A guide to Meta ad targeting: cold, warm and hot audiences, demographics, interests, and how to build an audience of your best customers.',
    url: 'https://driveleadmedia.com/resources/meta-targeting-guide',
    type: 'article',
    images: [
      {
        url: '/images/small-business-owner-facebook-ads-consultation-atlanta.webp',
        width: 1200,
        height: 630,
        alt: 'Business owner learning about Meta targeting',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Target Audiences Guide - Learn Meta Ad Targeting",
    description: "A guide to Meta ad targeting: cold, warm and hot audiences, demographics, interests, and how to build an audience of your best customers.",
    images: ["https://driveleadmedia.com/images/og-image.webp"],
  },
  alternates: {
    canonical: '/resources/meta-targeting-guide',
  },
};

export default function MetaTargetingGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
