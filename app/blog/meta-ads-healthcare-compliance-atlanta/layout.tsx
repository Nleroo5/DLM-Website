import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meta Ads for Healthcare: HIPAA Compliance Guide (Atlanta) | Drive Lead Media",
  description: "Navigate HIPAA, Meta's 2025-2026 restrictions, and Georgia regulations. Compliance guide for healthcare practices advertising on Facebook and Instagram in Atlanta.",
  keywords: "healthcare facebook ads 2026, medical practice meta ads, HIPAA compliant facebook advertising, healthcare advertising compliance, medical facebook ads atlanta, dentist facebook ads, meta healthcare restrictions",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "Meta Ads for Healthcare: HIPAA Compliance Guide (Atlanta)",
    description: "Complete compliance guide for healthcare practices advertising on Facebook and Instagram. HIPAA, Meta restrictions, and Georgia regulations.",
    type: "article",
    publishedTime: "2026-01-23T09:00:00Z",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/meta-ads-healthcare-compliance-atlanta",
    images: [{
      url: "https://driveleadmedia.com/images/atlanta-healthcare-medical-practice-meta-ads-hipaa-compliance.webp",
      width: 1200,
      height: 630,
      alt: "Healthcare practice Meta ads HIPAA compliance guide for Atlanta medical professionals",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads for Healthcare: Atlanta HIPAA Compliance Guide",
    description: "HIPAA-compliant Facebook and Instagram advertising for Atlanta healthcare practices.",
    images: ["https://driveleadmedia.com/images/atlanta-healthcare-medical-practice-meta-ads-hipaa-compliance.webp"],
  },
  alternates: {
    canonical: "/blog/meta-ads-healthcare-compliance-atlanta",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
