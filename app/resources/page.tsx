import type { Metadata } from 'next';
import { JsonLd, PageHero, Section, LinkCards, breadcrumbSchema } from '@/components/content/Content';

export const metadata: Metadata = {
  title: 'Free Marketing Tools & Guides | Drive Lead Media',
  description:
    'Free tools for local businesses: website grader, competitor map, Meta ads ROI calculator and website strategy report, plus Meta ads guides.',
  alternates: { canonical: '/resources' },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }])} />

      <PageHero
        eyebrow="Resources"
        title="Free Marketing Tools and Guides"
        intro={<p>Check your website, size up local competitors and plan an ad budget. No sign-up needed for the tools below.</p>}
      />

      <Section title="Free tools">
        <LinkCards
          items={[
            { href: '/resources/website-grader', tag: 'Tool', title: 'Website grader', body: 'Score your site’s speed, SEO and mobile health.' },
            { href: '/resources/competitor-map', tag: 'Tool', title: 'Competitor map', body: 'See the local competitors around you on Google, with their ratings and reviews.' },
            { href: '/resources/meta-ads-calculator', tag: 'Tool', title: 'Meta ads ROI calculator', body: 'Estimate clicks, leads and cost per lead for your budget and industry.' },
            { href: '/resources/website-strategy', tag: 'Tool', title: 'AI website strategy report', body: 'Get a written plan for improving your website.' },
          ]}
        />
      </Section>

      <Section title="Guides">
        <LinkCards
          items={[
            { href: '/resources/meta-targeting-guide', tag: 'Guide', title: 'Meta targeting guide', body: 'How to choose audiences for Facebook and Instagram ads.' },
            { href: '/resources/meta-ads-landing-pages', tag: 'Guide', title: 'Landing pages for Meta ads', body: 'What makes a page turn ad clicks into leads.' },
            { href: '/resources/targeted-ads-infographic', tag: 'Infographic', title: 'Targeted ads infographic', body: 'Targeted ads vs traditional advertising, on one page.' },
            { href: '/blog', tag: 'Blog', title: 'All articles', body: 'Guides on Meta ads, websites, local SEO and AI search.' },
          ]}
        />
      </Section>
    </main>
  );
}
