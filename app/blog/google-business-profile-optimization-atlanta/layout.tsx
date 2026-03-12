import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google Business Profile Optimization: Atlanta Guide (2026) | DLM",
  description: "87% of consumers use Google to find local businesses. Step-by-step GBP optimization for Atlanta businesses. Rank in the 3-pack and get more reviews.",
  keywords: "google business profile optimization atlanta, google maps ranking atlanta, local seo atlanta, google my business atlanta, how to rank on google maps, google reviews strategy, local 3-pack ranking, google business profile tips 2026, local seo guide atlanta, google maps seo",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "How to Optimize Your Google Business Profile in 2026 (Atlanta Guide)",
    description: "Complete step-by-step guide to optimizing your Google Business Profile for local search in Atlanta. Rank in the 3-pack, get more reviews, and dominate AI search results.",
    type: "article",
    publishedTime: "2026-03-12T14:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/google-business-profile-optimization-atlanta",
    images: [{
      url: "https://driveleadmedia.com/images/google-business-profile-optimization-atlanta-local-seo.webp",
      width: 1200,
      height: 630,
      alt: "Google Business Profile Optimization Guide for Atlanta Businesses 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Business Profile Optimization: 2026 Atlanta Guide",
    description: "87% of consumers use Google to find local businesses. Complete optimization guide for Atlanta business owners.",
    images: ["https://driveleadmedia.com/images/google-business-profile-optimization-atlanta-local-seo.webp"],
  },
  alternates: {
    canonical: "/blog/google-business-profile-optimization-atlanta",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
