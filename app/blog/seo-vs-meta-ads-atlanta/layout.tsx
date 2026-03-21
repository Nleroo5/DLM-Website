import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SEO vs Meta Ads: Which Should Atlanta Businesses Invest In First? | DLM",
  description: "Compare SEO and Meta Ads costs, timelines, and ROI with 2025 data. Budget framework to help Atlanta businesses decide where to invest first.",
  keywords: "seo vs meta ads, seo vs facebook ads, should i invest in seo or ads, atlanta seo vs paid ads, local seo atlanta, meta ads roi, seo roi comparison, atlanta digital marketing strategy, facebook ads vs organic search, small business marketing budget",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "SEO vs Meta Ads: Which Should Atlanta Businesses Invest In First?",
    description: "One builds traffic you own. The other generates leads on day one. Real data comparing costs, timelines, and ROI for Atlanta businesses.",
    type: "article",
    publishedTime: "2026-03-21T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/seo-vs-meta-ads-atlanta",
    images: [{
      url: "https://driveleadmedia.com/images/seo-vs-meta-ads-atlanta-business-strategy.webp",
      width: 1200,
      height: 630,
      alt: "SEO vs Meta Ads comparison for Atlanta businesses",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO vs Meta Ads: Which Should Atlanta Businesses Invest In First?",
    description: "Compare costs, timelines, and ROI with real 2025 data. Budget framework for Atlanta businesses.",
    images: ["https://driveleadmedia.com/images/seo-vs-meta-ads-atlanta-business-strategy.webp"],
  },
  alternates: {
    canonical: "https://driveleadmedia.com/blog/seo-vs-meta-ads-atlanta",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
