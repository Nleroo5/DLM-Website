import { blogPosts } from '@/lib/blog-posts';
import { faqItems, faqCategories } from '@/lib/faq-data';
import { BUSINESS, SITE_URL } from '@/lib/site';

// llms.txt (https://llmstxt.org) and llms-full.txt, built from the same data
// as the site so they never fall out of date. Only facts the site states.

const day = (iso: string) => iso.slice(0, 10);

const PAGES = [
  ['Meta Ads Management', '/services/meta-ads', 'Facebook and Instagram ad strategy, creative, Pixel tracking and optimization.'],
  ['Website Design', '/services/website-design', 'Custom Next.js websites for local businesses. Projects start at $1,500; most take 2 to 3 weeks.'],
  ['Services overview', '/services', 'Meta ads, video ad creative and websites, and how they work together.'],
  ['Case studies', '/case-studies', 'Websites, ads and video built for clients.'],
  ['About', '/about', 'Who we are, how we work, and the founders.'],
  ['Nicolas Leroo', '/about/nicolas-leroo', 'Co-founder; author of the blog.'],
  ['Tommy Duda', '/about/tommy-duda', 'Co-founder; creative and video.'],
  ['FAQ', '/faq', 'Pricing, timelines, process and ownership questions.'],
  ['Get started', '/book', 'Four-question intake form; we reply the same business day.'],
] as const;

const TOOLS = [
  ['Website grader', '/resources/website-grader', 'Lighthouse-based speed, SEO and mobile check.'],
  ['AI website strategy report', '/resources/website-strategy', 'Written plan for improving a website. No email required.'],
  ['Competitor map', '/resources/competitor-map', 'Local competitors on a map with Google ratings and reviews.'],
  ['Meta ads ROI calculator', '/resources/meta-ads-calculator', 'Estimate clicks, leads and cost per lead by industry.'],
  ['Meta targeting guide', '/resources/meta-targeting-guide', 'Cold, warm and hot audiences explained.'],
  ['Landing pages for Meta ads', '/resources/meta-ads-landing-pages', 'What makes a page convert ad clicks.'],
] as const;

function header() {
  return [
    `# ${BUSINESS.name}`,
    '',
    `> ${BUSINESS.description} Based in Atlanta, Georgia; works with clients across the United States.`,
    '',
    `${BUSINESS.name} was founded in ${BUSINESS.foundingDate} by Nicolas Leroo and Tommy Duda and is a trading name of ${BUSINESS.legalName}. Contact: ${BUSINESS.email}, (678) 650-6411. Clients own their Meta ad accounts and approve every ad before it runs.`,
  ];
}

const sortedPosts = () => [...blogPosts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export function buildLlmsTxt() {
  const lines = [...header(), '', '## Services and company', ''];
  for (const [name, path, note] of PAGES) lines.push(`- [${name}](${SITE_URL}${path}): ${note}`);
  lines.push('', '## Guides', '');
  for (const p of sortedPosts()) {
    lines.push(`- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt} (published ${day(p.datePublished)})`);
  }
  lines.push('', '## Free tools', '');
  for (const [name, path, note] of TOOLS) lines.push(`- [${name}](${SITE_URL}${path}): ${note}`);
  lines.push('', '## Optional', '', `- [Full text for AI systems](${SITE_URL}/llms-full.txt): every FAQ answer and guide summary`, `- [Sitemap](${SITE_URL}/sitemap.xml)`, '');
  return lines.join('\n');
}

export function buildLlmsFullTxt() {
  const lines = [...header(), ''];
  lines.push('## Services', '');
  for (const [name, path, note] of PAGES.slice(0, 2)) lines.push(`### ${name}`, `${SITE_URL}${path}`, '', note, '');
  lines.push('## Frequently asked questions', '');
  for (const cat of faqCategories) {
    lines.push(`### ${cat.name}`, '');
    for (const f of faqItems.filter((i) => i.category === cat.id)) lines.push(`Q: ${f.question}`, `A: ${f.answer}`, '');
  }
  lines.push('## Guides', '');
  for (const p of sortedPosts()) {
    lines.push(
      `### ${p.title}`,
      `URL: ${SITE_URL}/blog/${p.slug}`,
      `Author: ${p.author.name}, ${p.author.jobTitle}`,
      `Published: ${day(p.datePublished)}${p.dateModified !== p.datePublished ? ` · Updated: ${day(p.dateModified)}` : ''}`,
      `Topic: ${p.category.name}`,
      '',
      p.excerpt,
      '',
    );
  }
  return lines.join('\n');
}
