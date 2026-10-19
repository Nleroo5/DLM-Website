import { MetadataRoute } from 'next';
import { blogPosts, getAllCategories } from '@/lib/blog-posts';
import { SITE_URL } from '@/lib/site';

// lastModified must be the date the page's content really changed. Google
// ignores lastmod on sites where it changes on every build, so never use
// new Date() here: update the date when you edit the page.
type Entry = { path: string; updated: string; priority: number; freq: 'weekly' | 'monthly' | 'yearly' };

const PAGES: Entry[] = [
  { path: '', updated: '2026-10-15', priority: 1, freq: 'weekly' },
  { path: '/services/meta-ads', updated: '2026-10-18', priority: 0.9, freq: 'monthly' },
  { path: '/services/website-design', updated: '2026-10-18', priority: 0.9, freq: 'monthly' },
  { path: '/case-studies', updated: '2026-10-15', priority: 0.9, freq: 'monthly' },
  { path: '/about', updated: '2026-10-15', priority: 0.7, freq: 'yearly' },
  { path: '/about/nicolas-leroo', updated: '2026-10-15', priority: 0.6, freq: 'yearly' },
  { path: '/about/tommy-duda', updated: '2026-10-15', priority: 0.6, freq: 'yearly' },
  { path: '/targeted-ads', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/faq', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources/website-grader', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources/website-strategy', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources/competitor-map', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources/meta-ads-calculator', updated: '2026-10-15', priority: 0.7, freq: 'monthly' },
  { path: '/resources/targeted-ads-infographic', updated: '2026-10-15', priority: 0.5, freq: 'yearly' },
  { path: '/resources/meta-ads-landing-pages', updated: '2026-10-15', priority: 0.6, freq: 'yearly' },
  { path: '/resources/meta-targeting-guide', updated: '2026-03-17', priority: 0.6, freq: 'yearly' },
  { path: '/book', updated: '2026-10-14', priority: 0.6, freq: 'yearly' },
  { path: '/privacy', updated: '2026-08-15', priority: 0.2, freq: 'yearly' },
  { path: '/terms', updated: '2026-08-15', priority: 0.2, freq: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const newestPost = blogPosts.reduce((max, p) => (p.dateModified > max ? p.dateModified : max), '');

  // Only categories with several posts are indexed (one-post categories are noindex).
  const categories = getAllCategories()
    .filter((c) => c.count >= 2)
    .map((c) => {
      const newest = blogPosts
        .filter((p) => p.category.slug === c.slug)
        .reduce((max, p) => (p.dateModified > max ? p.dateModified : max), '');
      return {
        url: `${SITE_URL}/blog/category/${c.slug}`,
        lastModified: new Date(newest),
        changeFrequency: 'monthly' as const,
        priority: 0.5,
      };
    });

  return [
    ...PAGES.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: new Date(p.updated),
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    { url: `${SITE_URL}/blog`, lastModified: new Date(newestPost), changeFrequency: 'weekly', priority: 0.9 },
    ...posts,
    ...categories,
  ];
}
