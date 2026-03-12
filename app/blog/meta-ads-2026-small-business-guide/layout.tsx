import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Run Meta Ads in 2026: Small Business Guide | Drive Lead Media",
  description: "Master Meta ads in 2026. Advantage+ campaigns, creative strategies, and targeting methods that deliver 6:1 ROAS for small businesses spending $500-5,000/month.",
  keywords: "meta ads 2026, facebook ads ROAS, instagram advertising small business, advantage plus campaigns, meta pixel setup, facebook ads targeting 2026, meta ads creative strategy, small business facebook ads",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "How to Run Meta Ads in 2026: Small Business Guide to 6:1 ROAS",
    description: "Complete Meta ads guide for small businesses. Learn Advantage+ campaigns, creative strategies, and targeting methods for 2026.",
    type: "article",
    publishedTime: "2026-02-09T14:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/meta-ads-2026-small-business-guide",
    images: [{
      url: "https://driveleadmedia.com/images/meta-ads-2026-roas-dashboard-performance.webp",
      width: 1200,
      height: 630,
      alt: "Meta Ads Manager dashboard showing 6:1 ROAS for small business advertising in 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads 2026: Small Business Guide to 6:1 ROAS",
    description: "Advantage+ campaigns, creative strategies, and targeting that deliver 6:1 ROAS for small businesses.",
    images: ["https://driveleadmedia.com/images/meta-ads-2026-roas-dashboard-performance.webp"],
  },
  alternates: {
    canonical: "/blog/meta-ads-2026-small-business-guide",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
