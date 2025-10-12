import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Target Audiences Guide - Learn Meta Ad Targeting | Drive Lead Media',
  description: 'Master Meta ad targeting with our comprehensive guide. Learn about cold, warm, and hot audiences, demographics, interests, and how to build your perfect customer audience.',
  keywords: 'meta targeting, facebook ad targeting, instagram ad targeting, audience targeting, cold audiences, warm audiences, hot audiences, demographics targeting',
  openGraph: {
    title: 'Target Audiences Guide - Learn Meta Ad Targeting',
    description: 'Master Meta ad targeting with our comprehensive guide. Learn about cold, warm, and hot audiences, demographics, interests, and how to build your perfect customer audience.',
    url: 'https://driveleadmedia.com/resources/meta-targeting-guide',
    type: 'article',
    images: [
      {
        url: '/images/business-owner.jpg',
        width: 1200,
        height: 630,
        alt: 'Business owner learning about Meta targeting',
      },
    ],
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
