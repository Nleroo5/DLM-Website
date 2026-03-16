import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "7 Signs Your Atlanta Business Needs a New Website (2026) | DLM",
  description: "Is your website costing you customers? 7 data-backed signs it's time for a redesign. Speed, mobile, security, and SEO checklist for Atlanta businesses.",
  keywords: "signs you need a new website, website redesign atlanta, outdated website, website not mobile friendly, slow website, website security issues, atlanta web design, small business website checklist 2026",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "7 Signs Your Atlanta Business Needs a New Website (2026 Checklist)",
    description: "Is your website costing you customers? 7 data-backed warning signs and what to do about each one. Free checklist for Atlanta small businesses.",
    type: "article",
    publishedTime: "2026-03-16T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/signs-atlanta-business-needs-new-website-2026",
    images: [{
      url: "https://driveleadmedia.com/images/signs-new-website-outdated-design-comparison.webp",
      width: 1200,
      height: 630,
      alt: "7 Signs Your Atlanta Business Needs a New Website - 2026 Checklist",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Signs Your Business Needs a New Website (2026)",
    description: "Is your website costing you customers? 7 data-backed signs it's time for a redesign.",
    images: ["https://driveleadmedia.com/images/signs-new-website-outdated-design-comparison.webp"],
  },
  alternates: {
    canonical: "https://driveleadmedia.com/blog/signs-atlanta-business-needs-new-website-2026",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
