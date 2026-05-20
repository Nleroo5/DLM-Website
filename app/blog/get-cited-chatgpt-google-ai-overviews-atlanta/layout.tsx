import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How to Get Your Atlanta Business Cited in ChatGPT and Google AI Overviews | DLM",
  description: "AI search now covers 25.8% of Google queries. Here is what actually gets Atlanta businesses cited in ChatGPT and AI Overviews, based on 2026 Semrush and Ahrefs studies.",
  keywords: "chatgpt seo atlanta, google ai overviews atlanta, get cited by ai search, generative engine optimization atlanta, ai search optimization, geo atlanta, aeo atlanta, ranking in chatgpt 2026, ai overviews local business, atlanta digital marketing",
  authors: [{ name: "Nicolas Leroo" }],
  openGraph: {
    title: "How to Get Your Atlanta Business Cited in ChatGPT and Google AI Overviews",
    description: "AI search covers 25.8% of Google queries in 2026. Here is what actually gets local businesses cited, based on Semrush and Ahrefs research.",
    type: "article",
    publishedTime: "2026-05-20T09:00:00-05:00",
    authors: ["Nicolas Leroo"],
    url: "https://driveleadmedia.com/blog/get-cited-chatgpt-google-ai-overviews-atlanta",
    images: [{
      url: "https://driveleadmedia.com/images/atlanta-business-chatgpt-google-ai-overviews-citations.webp",
      width: 1200,
      height: 630,
      alt: "Atlanta business cited in ChatGPT and Google AI Overviews search results",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Your Atlanta Business Cited in ChatGPT and Google AI Overviews",
    description: "AI search covers 25.8% of Google queries in 2026. Here is what actually works for Atlanta businesses, based on real 2026 research.",
    images: ["https://driveleadmedia.com/images/atlanta-business-chatgpt-google-ai-overviews-citations.webp"],
  },
  alternates: {
    canonical: "https://driveleadmedia.com/blog/get-cited-chatgpt-google-ai-overviews-atlanta",
  },
};

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
