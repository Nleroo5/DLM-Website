import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Facebook Ads Cost in Atlanta: 2025 Pricing Guide | DLM",
  description: "Facebook ads in Atlanta cost $0.90-$3.50 per click. 2025 pricing guide with industry breakdowns, budget recommendations, and a free ROI calculator.",
  keywords: "facebook ads cost atlanta, meta ads pricing atlanta, instagram ads cost, how much do facebook ads cost, facebook advertising budget atlanta, meta ads roi calculator, facebook ads cost per click atlanta, meta advertising prices",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "How Much Do Facebook Ads Cost in Atlanta? (2025 Pricing Guide)",
    description: "Complete breakdown of Facebook & Instagram ad costs in Atlanta. Industry-specific data + free ROI calculator. $0.90-$3.50 per click depending on industry.",
    type: "article",
    publishedTime: "2025-11-11T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/how-much-do-facebook-ads-cost-atlanta",
    images: [{
      url: "https://driveleadmedia.com/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp",
      width: 1200,
      height: 630,
      alt: "Facebook Ads Cost Atlanta Guide",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Cost in Atlanta: 2025 Complete Guide",
    description: "Atlanta Meta ads cost $0.90-$3.50/click. See industry pricing + use free calculator.",
    images: ["https://driveleadmedia.com/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp"],
  },
  alternates: {
    canonical: "/blog/how-much-do-facebook-ads-cost-atlanta",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
