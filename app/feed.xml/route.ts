import { NextResponse } from 'next/server';
import { blogPosts } from '@/lib/blog-posts';

// Built from lib/blog-posts.ts, so new posts appear automatically.
export async function GET() {
  const siteUrl = 'https://driveleadmedia.com';
  const newest = blogPosts.reduce((max, p) => (p.dateModified > max ? p.dateModified : max), '');
  const currentDate = new Date(newest).toUTCString();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Drive Lead Media Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Guides for local businesses on Meta ads, websites, local SEO and AI search, from Drive Lead Media in Atlanta.</description>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>

    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <author>nicolas@driveleadmedia.com (${post.author.name})</author>
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
