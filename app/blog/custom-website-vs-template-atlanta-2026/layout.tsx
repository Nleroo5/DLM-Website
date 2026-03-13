import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Website vs Template: Atlanta Business Guide (2026) | DLM",
  description: "Custom websites convert 20-40% better than templates. Side-by-side comparison of speed, SEO, security, and real ROI data for Atlanta small businesses in 2026.",
  keywords: "custom website vs template, custom web design atlanta, template website problems, custom website benefits small business, wix vs custom website, squarespace vs custom website, atlanta web design, custom website ROI, template website speed",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "Custom Website vs Template: Why Atlanta Businesses Are Switching (2026)",
    description: "Side-by-side comparison of custom websites vs templates. Speed, SEO, security, and ROI data for Atlanta small businesses making the switch in 2026.",
    type: "article",
    publishedTime: "2026-03-12T16:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/custom-website-vs-template-atlanta-2026",
    images: [{
      url: "https://driveleadmedia.com/images/custom-website-vs-template-atlanta-comparison.webp",
      width: 1200,
      height: 630,
      alt: "Custom Website vs Template Comparison for Atlanta Businesses 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website vs Template: Atlanta Guide (2026)",
    description: "Custom websites convert 20-40% better than templates. Full comparison for Atlanta businesses.",
    images: ["https://driveleadmedia.com/images/custom-website-vs-template-atlanta-comparison.webp"],
  },
  alternates: {
    canonical: "https://driveleadmedia.com/blog/custom-website-vs-template-atlanta-2026",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
