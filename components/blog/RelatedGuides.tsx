import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';

// "Related guides" at the end of every post, plus one in-text link to the
// matching service page. Posts are grouped by topic (Meta ads vs websites and
// search) and each links to its neighbours in date order, wrapping around, so
// every post receives links from three related posts.

const WEBSITE_CATEGORIES = new Set(['web-design', 'web-design-pricing', 'web-development', 'local-seo', 'ai-search', 'conversion-optimization']);

const isWebsiteTopic = (p: BlogPost) => WEBSITE_CATEGORIES.has(p.category.slug);

export function relatedFor(slug: string, count = 3): BlogPost[] {
  const me = blogPosts.find((p) => p.slug === slug);
  if (!me) return [];
  const group = blogPosts
    .filter((p) => isWebsiteTopic(p) === isWebsiteTopic(me))
    .sort((a, b) => (a.datePublished < b.datePublished ? -1 : 1));
  const i = group.findIndex((p) => p.slug === slug);
  const picks: BlogPost[] = [];
  for (const step of [1, -1, 2, -2, 3]) {
    const p = group[(i + step + group.length * 4) % group.length];
    if (p.slug !== slug && !picks.includes(p)) picks.push(p);
    if (picks.length === count) break;
  }
  return picks;
}

export default function RelatedGuides({ slug }: { slug: string }) {
  const me = blogPosts.find((p) => p.slug === slug);
  if (!me) return null;
  const related = relatedFor(slug);
  const service = isWebsiteTopic(me)
    ? { href: '/services/website-design', label: 'website design in Atlanta', lead: 'Want a site built to bring in calls?' }
    : { href: '/services/meta-ads', label: 'Meta ads management in Atlanta', lead: 'Want us to run your ads for you?' };

  return (
    <aside aria-labelledby="related-guides" className="my-12 border-t border-white/10 pt-8">
      <p className="font-body text-[1.02rem] text-[#c9d2cf] leading-relaxed mb-7">
        {service.lead} See our{' '}
        <Link href={service.href} className="text-link text-[#8fd0c6] underline underline-offset-[3px] hover:text-white transition-colors">
          {service.label}
        </Link>
        .
      </p>
      <h2 id="related-guides" className="font-heading font-bold text-white text-[1.4rem] sm:text-[1.6rem] tracking-[-0.02em] mb-4">
        Related guides
      </h2>
      <ul className="list-none m-0 p-0 border-b border-white/10">
        {related.map((p) => (
          <li key={p.slug} className="border-t border-white/10">
            <Link href={`/blog/${p.slug}`} className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 min-h-[44px]">
              <span className="font-heading font-semibold text-white text-[1.02rem] group-hover:text-[#5FA99F] transition-colors">{p.title}</span>
              <span className="font-ui text-[0.85rem] text-[#8ea19c] shrink-0">
                {p.category.name} · {p.readTime}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
