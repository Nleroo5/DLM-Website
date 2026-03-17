import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Website Grader: Check Your Site's Health Score | DLM",
  description: "Get a free, instant website health report powered by Google Lighthouse. Check your speed, SEO, mobile performance, accessibility, and security in seconds.",
  keywords: "website grader, free website audit, website health check, site speed test, seo checker, google pagespeed test, website performance tool, free website analysis",
  openGraph: {
    title: "Free Website Grader: Check Your Site's Health Score",
    description: "Get a free, instant website health report. Check your speed, SEO, mobile performance, and security in seconds.",
    type: "website",
    url: "https://driveleadmedia.com/resources/website-grader",
    images: [{
      url: "https://driveleadmedia.com/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "DLM Website Grader - Free Website Health Check Tool",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Grader | DLM",
    description: "Get a free, instant website health report powered by Google Lighthouse.",
  },
  alternates: {
    canonical: "https://driveleadmedia.com/resources/website-grader",
  },
};

export default function WebsiteGraderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
