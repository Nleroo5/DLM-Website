import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Meta Ads Infographic: Targeted Advertising | DLM',
  description: 'Free one-page infographic on Facebook and Instagram targeted ads: audience targeting, ad costs and strategy, from an Atlanta Meta ads team.',
  keywords: 'meta ads infographic, facebook ads guide, targeted advertising infographic, meta advertising guide atlanta, facebook ads cheat sheet, instagram ads guide download',
  openGraph: {
    title: 'Free Meta Targeted Ads Infographic Download',
    description: 'Visual guide to Meta advertising. Download our free infographic on Facebook & Instagram ad targeting strategies.',
    type: 'website',
    images: [{
      url: "https://driveleadmedia.com/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "Drive Lead Media - Custom Websites & Meta Advertising in Atlanta",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Meta Targeted Ads Infographic Download",
    description: "Visual guide to Meta advertising. Download our free infographic on Facebook & Instagram ad targeting strategies.",
    images: ["https://driveleadmedia.com/images/og-image.webp"],
  },
  alternates: {
    canonical: '/resources/targeted-ads-infographic',
  },
};

export default function TargetedAdsInfographicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
