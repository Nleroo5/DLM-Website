import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Competitor Map: Find Local Competitors on Google | DLM",
  description: "See every competitor near you on an interactive map. Real Google data: ratings, reviews, websites, and speed scores. Free tool for local businesses.",
  keywords: "competitor map, local competitor analysis, find competitors near me, business competitor finder, google maps competitor tool, local business analysis, competitor ratings reviews",
  openGraph: {
    title: "Free Competitor Map: Find Local Competitors on Google",
    description: "See every competitor near you on an interactive Google Map with real ratings, reviews, and website speed data.",
    type: "website",
    url: "https://driveleadmedia.com/resources/competitor-map",
    images: [{
      url: "https://driveleadmedia.com/images/og-image.webp",
      width: 1200,
      height: 630,
      alt: "DLM Competitor Map - Find Local Competitors Tool",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Competitor Map | DLM",
    description: "See every competitor near you on an interactive map with real Google data.",
    images: ["https://driveleadmedia.com/images/og-image.webp"],
  },
  alternates: {
    canonical: "https://driveleadmedia.com/resources/competitor-map",
  },
};

export default function CompetitorMapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
