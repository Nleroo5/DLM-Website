import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free AI Website Strategy Report | DLM",
  description: "Get a free, AI-powered website strategy report. Google Lighthouse performance data + 24-point HTML audit + custom AI recommendations. No email required.",
  keywords: "free website audit, AI website analysis, website strategy report, SEO audit tool, website performance checker, google lighthouse audit, website checklist",
  openGraph: {
    title: "Free AI Website Strategy Report",
    description: "Enter any URL and get a custom AI strategy report powered by Google Lighthouse data. 24-point checklist, Core Web Vitals, and a 90-day action plan.",
    type: "website",
    url: "https://driveleadmedia.com/resources/website-strategy",
    images: [{
      url: "https://driveleadmedia.com/images/dlm-og.webp",
      width: 1200,
      height: 630,
      alt: "DLM AI Website Strategy Report - Free Website Analysis Tool",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Website Strategy Report | DLM",
    description: "Get a custom AI strategy report for any website. Powered by Google Lighthouse + Gemini AI.",
  },
  alternates: {
    canonical: "https://driveleadmedia.com/resources/website-strategy",
  },
};

export default function WebsiteStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
