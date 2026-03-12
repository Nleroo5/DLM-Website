import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Instagram Reels Ads: Small Business Video Ad Guide | Drive Lead Media",
  description: "Over half of Instagram ads now run on Reels. Learn how to create Reels ads that convert, what specs matter, and why short-form video is the highest-reach format on Meta.",
  keywords: "instagram reels ads, facebook reels ads, reels advertising small business, short form video ads, instagram video ads 2026, meta reels advertising, reels ads setup, instagram ads strategy 2026",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "Instagram Reels Ads: The Small Business Guide to Video Advertising",
    description: "How to create Reels ads that convert for small businesses. Specs, strategies, and performance benchmarks for 2026.",
    type: "article",
    publishedTime: "2026-02-18T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/instagram-reels-ads-small-business-guide",
    images: [{
      url: "https://driveleadmedia.com/images/facebook-meta-ads-performance-metrics-analytics-chart.webp",
      width: 1200,
      height: 630,
      alt: "Instagram Reels ads performance metrics for small business video advertising",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Reels Ads: Small Business Video Ad Guide",
    description: "Create Reels ads that convert. Specs, strategies, and benchmarks for small business video advertising.",
    images: ["https://driveleadmedia.com/images/facebook-meta-ads-performance-metrics-analytics-chart.webp"],
  },
  alternates: {
    canonical: "/blog/instagram-reels-ads-small-business-guide",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
