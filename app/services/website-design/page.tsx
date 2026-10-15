import type { Metadata } from 'next';
import Link from 'next/link';
import {
  JsonLd, PageHero, Section, CheckList, Steps, LinkCards, FaqList, ClosingCta, faqSchema, breadcrumbSchema,
} from '@/components/content/Content';
import { IDS, SITE_URL } from '@/lib/site';

const PATH = '/services/website-design';

export const metadata: Metadata = {
  title: 'Website Design in Atlanta | Drive Lead Media',
  description:
    'Custom websites for Atlanta small businesses, built in Next.js for speed and SEO. Most launch in 2 to 3 weeks, and projects start at $1,500.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Website Design in Atlanta',
    description: 'Fast, custom websites built to turn visitors and ad clicks into calls and bookings.',
    url: PATH,
    images: ['/images/og-image.webp'],
  },
};

const INCLUDED = [
  { title: 'Custom design', body: 'Designed around your business and your customers, not a template other sites share.' },
  { title: 'Mobile-first build', body: 'Most local customers find you on a phone, so every page is built and tested for small screens first.' },
  { title: 'SEO setup', body: 'Search setup on every page, so Google can find your site and understand what your business does.' },
  { title: 'Analytics and tracking', body: 'Google Analytics, plus the Meta Pixel when you run ads, so you can see where leads come from.' },
  { title: 'Built for speed', body: 'We build in Next.js and React, which keeps pages fast. Fast pages rank better and lose fewer visitors.' },
  { title: 'Support after launch', body: 'Ongoing maintenance, updates and support packages are available for sites we build.' },
];

const STEPS = [
  { title: 'Tell us about your business', body: 'Four quick questions: what you need, your industry, your budget and timing.' },
  { title: 'We review it and reach out', body: 'We look at your current site, then call or email you the same business day with ideas and a quote.' },
  { title: 'We design, build and launch', body: 'Most sites take 2 to 3 weeks from start to finish, depending on complexity and how quickly content and feedback come in.' },
];

const WORK = [
  { client: 'Set Life Casting', industry: 'Entertainment', services: 'Custom website, casting platform, talent database' },
  { client: 'Village Pediatrics of St. Augustine', industry: 'Healthcare', services: 'Custom website, SEO, Meta ads' },
  { client: 'Marietta Antique Mall', industry: 'Retail', services: 'Custom website, Meta ads, video' },
  { client: 'Wilcox Tax Firm', industry: 'Financial services', services: 'Custom website, Meta ads, video' },
  { client: 'Southern Tents & Events', industry: 'Event services', services: 'Website rebuild, SEO, Meta ads' },
  { client: 'Bière de Mac', industry: 'Brewery', services: 'Custom website' },
  { client: 'Lantz Coaching', industry: 'Athletic training', services: 'Custom website' },
  { client: 'Quality Wildlife Solutions', industry: 'Wildlife removal', services: 'Custom website' },
];

const FAQS = [
  { question: 'How much does a website cost?', answer: 'Website projects typically start at $1,500. The final cost depends on your specific needs, features, and functionality. We provide a detailed quote after our initial consultation.' },
  { question: 'How long does it take to build a website?', answer: 'Most websites take 2-3 weeks from start to finish, depending on the complexity and how quickly you provide content and feedback.' },
  { question: 'What platforms do you build websites on?', answer: 'We build custom websites using Next.js/React for maximum performance and SEO, as well as other platforms based on your specific needs.' },
  { question: "What's included in a website project?", answer: 'Our websites include custom design, mobile-responsive development, SEO setup, and Google Analytics integration.' },
  { question: 'Do you offer website maintenance after launch?', answer: 'Yes, we offer ongoing maintenance, updates, and support packages for websites we build.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Website Design',
  serviceType: 'Website design and development',
  description:
    'Custom, mobile-first websites and landing pages for local businesses, built in Next.js with SEO setup and analytics.',
  url: `${SITE_URL}${PATH}`,
  provider: { '@id': IDS.organization },
  areaServed: [
    { '@type': 'City', name: 'Atlanta' },
    { '@type': 'Country', name: 'United States' },
  ],
  offers: {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: 1500, priceCurrency: 'USD' },
  },
};

export default function WebsiteDesignServicePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Website Design', path: PATH }])} />

      <PageHero
        eyebrow="Services · Websites"
        title="Website Design for Atlanta Small Businesses"
        ctaSource="service_website_hero"
        intro={
          <p>
            We design and build custom websites for local businesses in Atlanta and across the US. Each site is fast,
            built for phones first, and set up to turn visitors and ad clicks into calls and bookings. Projects start at
            $1,500, and most launch in 2 to 3 weeks.
          </p>
        }
      />

      <Section title="What's included in every website">
        <CheckList items={INCLUDED} />
      </Section>

      <Section
        title="Built to work with your ads"
        intro={
          <p>
            Many of our websites go live alongside{' '}
            <Link href="/services/meta-ads" className="text-link text-[#5FA99F] underline underline-offset-4">Meta ad campaigns</Link>.
            We build the landing page and the ad together, so the offer matches, the page loads fast on a phone, and every
            lead is tracked back to the ad that brought it in.
          </p>
        }
      />

      <Section title="How it works">
        <Steps steps={STEPS} />
      </Section>

      <Section title="Websites we've built" intro={<p>A few of the businesses we've built for:</p>}>
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {WORK.map((w) => (
            <li key={w.client} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <span className="font-heading text-white font-semibold">{w.client}</span>
              <span className="font-body text-[0.95rem] text-gray-400">{w.industry} · {w.services}</span>
            </li>
          ))}
        </ul>
        <figure className="mt-8 bg-[#111] border border-[#5FA99F]/20 rounded-2xl p-6">
          <blockquote className="font-body text-[1.05rem] text-gray-200 leading-relaxed">
            &ldquo;I came to Drive Lead Media with a big ask — a custom website, a casting platform, and a talent database
            all built from the ground up. They delivered on all of it.&rdquo;
          </blockquote>
          <figcaption className="font-ui text-[0.9rem] text-[#5FA99F] font-semibold mt-3">Chaz Yu, Owner, Set Life Casting</figcaption>
        </figure>
        <p className="mt-5">
          <Link href="/case-studies" className="font-ui text-[#5FA99F] font-semibold">See the websites →</Link>
        </p>
      </Section>

      <Section title="Free tools and guides">
        <LinkCards
          items={[
            { href: '/resources/website-grader', tag: 'Free tool', title: 'Website grader', body: 'Check your current site’s speed, SEO and mobile health in a minute.' },
            { href: '/blog/atlanta-business-website-cost-2026', tag: 'Pricing', title: 'What a business website costs in Atlanta', body: 'Price ranges and what drives them.' },
            { href: '/blog/custom-website-vs-template-atlanta-2026', tag: 'Comparison', title: 'Custom website vs template', body: 'When a builder is enough and when it is not.' },
            { href: '/blog/nextjs-vs-wordpress-2026', tag: 'Platforms', title: 'Next.js vs WordPress', body: 'Why we build in Next.js and when WordPress still fits.' },
          ]}
        />
      </Section>

      <Section title="Website questions">
        <FaqList items={FAQS} />
      </Section>

      <ClosingCta
        title="Ready for a website that brings in customers?"
        body="Tell us about your business and we'll come back the same business day with ideas and a quote."
        source="service_website_footer"
      />
    </main>
  );
}
