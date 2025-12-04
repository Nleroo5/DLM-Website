import { NextResponse } from 'next/server';

// Blog posts metadata - Update this array when you add new posts
const blogPosts = [
  {
    slug: 'how-much-do-facebook-ads-cost-atlanta',
    title: 'How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)',
    description: 'Facebook ads in Atlanta cost $0.90-$3.50 per click. Complete 2025 pricing guide with industry breakdowns, budget recommendations & free ROI calculator for Atlanta businesses.',
    publishedTime: '2025-11-11T09:00:00Z',
    author: 'Nicolas Leroo',
  },
  {
    slug: 'why-meta-ads-need-landing-pages',
    title: 'Why Meta Ads Need Landing Pages: The Complete 2025 Guide',
    description: 'Landing pages can boost Meta ad conversions by up to 300%. Learn why generic websites fail and how dedicated landing pages drive real results.',
    publishedTime: '2025-11-10T09:00:00Z',
    author: 'Nicolas Leroo',
  },
  {
    slug: 'meta-ads-target-audience-guide',
    title: 'Meta Ads Target Audience: Complete 2025 Targeting Guide',
    description: 'Master Meta ads targeting with our complete guide. Learn demographic, interest, behavior, and custom audience strategies for better ROI.',
    publishedTime: '2025-11-09T09:00:00Z',
    author: 'Nicolas Leroo',
  },
];

export async function GET() {
  const siteUrl = 'https://driveleadmedia.com';
  const currentDate = new Date().toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Drive Lead Media Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Meta Ads insights, case studies, and strategies for businesses. Expert Facebook and Instagram advertising tips.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>

    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.publishedTime).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <author>nicolas@driveleadmedia.com (${post.author})</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}
