import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Atlanta Business Website Cost: 2026 Pricing Guide | DLM",
  description: "Atlanta business websites cost $1,500 to $15,000+. 2026 pricing guide with DIY vs freelancer vs agency breakdowns, ongoing costs, and ROI data.",
  keywords: "atlanta business website cost, website design cost atlanta, atlanta web design pricing, how much does a website cost atlanta, atlanta web designer, custom website development atlanta, small business website cost 2026, web design atlanta ga, atlanta website development, business website pricing atlanta",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "How Much Does a Business Website Cost in Atlanta? (2026 Pricing Guide)",
    description: "Complete breakdown of website design costs in Atlanta. DIY builders, freelancers, and agency pricing with real data. $1,500-$15,000+ depending on your needs.",
    type: "article",
    publishedTime: "2026-03-12T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/atlanta-business-website-cost-2026",
    images: [{
      url: "https://driveleadmedia.com/images/atlanta-business-website-cost-web-design-pricing.webp",
      width: 1200,
      height: 630,
      alt: "Atlanta Business Website Cost Guide 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlanta Business Website Cost: 2026 Complete Guide",
    description: "Atlanta websites cost $1,500-$15,000+. See pricing breakdowns + what actually drives cost.",
    images: ["https://driveleadmedia.com/images/atlanta-business-website-cost-web-design-pricing.webp"],
  },
  alternates: {
    canonical: "/blog/atlanta-business-website-cost-2026",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
