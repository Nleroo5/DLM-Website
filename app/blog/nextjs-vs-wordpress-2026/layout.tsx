import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js vs WordPress for Small Business Websites (2026) | Drive Lead Media",
  description: "Compare Next.js vs WordPress for small business sites. Load times, security, costs, and performance data to help you choose the right platform in 2026.",
  keywords: "nextjs vs wordpress, next.js vs wordpress 2026, wordpress vs nextjs performance, nextjs website development, wordpress security issues, nextjs for small business, custom website development, wordpress alternatives 2026",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "Next.js vs WordPress for Small Business Websites (2026)",
    description: "Side-by-side comparison of Next.js and WordPress. Performance benchmarks, security data, and real costs for small business websites.",
    type: "article",
    publishedTime: "2026-02-09T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/nextjs-vs-wordpress-2026",
    images: [{
      url: "https://driveleadmedia.com/images/nextjs-vs-wordpress-website-development-comparison.webp",
      width: 1200,
      height: 630,
      alt: "Next.js vs WordPress comparison for small business websites in 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js vs WordPress: Which Is Better for Your Business?",
    description: "Performance, security, and cost comparison for small business websites in 2026.",
    images: ["https://driveleadmedia.com/images/nextjs-vs-wordpress-website-development-comparison.webp"],
  },
  alternates: {
    canonical: "/blog/nextjs-vs-wordpress-2026",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
