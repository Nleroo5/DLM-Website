import type { Metadata } from 'next';
import Link from 'next/link';
import {
  JsonLd, PageHero, Section, CheckList, Steps, LinkCards, FaqList, ClosingCta, faqSchema, breadcrumbSchema,
} from '@/components/content/Content';
import { IDS, SITE_URL } from '@/lib/site';

const PATH = '/services/meta-ads';

export const metadata: Metadata = {
  title: 'Meta Ads Management in Atlanta | Drive Lead Media',
  description:
    'Facebook and Instagram ad management for Atlanta businesses: strategy, video creative, Pixel tracking and ongoing optimization. You own the ad account.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Meta Ads Management in Atlanta',
    description: 'Facebook and Instagram ads planned, created, tracked and tuned by one small Atlanta team.',
    url: PATH,
    images: ['/images/og-image.webp'],
  },
};

const INCLUDED = [
  { title: 'Strategy and campaign setup', body: 'We set goals, budget and campaign structure in Meta Ads Manager around the leads you want, not likes.' },
  { title: 'Ad creative', body: 'Graphics, video ads and copy made for your audience. We film and edit, so you never have to.' },
  { title: 'Audience targeting', body: 'Demographics, interests and behaviors, plus custom and lookalike audiences built from your best customers.' },
  { title: 'Meta Pixel and conversion tracking', body: 'We install the Pixel and track each lead so you can see what your ad spend actually brought in.' },
  { title: 'Monitoring and optimization', body: 'We watch campaigns daily, retire tired ads and shift budget toward what is working.' },
  { title: 'Facebook and Instagram', body: 'Both run from the same Ads Manager account, and we optimize for each placement.' },
  { title: 'You approve every ad', body: 'You see all creative before anything goes live.' },
  { title: 'You own the ad account', body: 'The Meta ad account stays yours. We manage it with the access you grant us.' },
];

const STEPS = [
  { title: 'Tell us about your business', body: 'Four quick questions: what you need, your industry, your budget and timing.' },
  { title: 'We review it and reach out', body: 'We look at your site and current ads, then call or email you the same business day with ideas.' },
  { title: 'We build, launch and improve', body: 'Ads, video creative and the page they point to, built together and tuned every week.' },
];

const WORK = [
  { client: 'Pain Treatment Centers of Georgia', industry: 'Healthcare', services: 'Meta ads, landing page, video creative' },
  { client: 'Village Pediatrics of St. Augustine', industry: 'Healthcare', services: 'Meta ads, website, SEO, tracking setup' },
  { client: 'Marietta Antique Mall', industry: 'Retail', services: 'Meta ads, website, video creative' },
  { client: 'Wilcox Tax Firm', industry: 'Financial services', services: 'Meta ads, website, video creative' },
  { client: 'The Yoga Lounge', industry: 'Fitness and wellness', services: 'Meta ads, video creative, ad strategy' },
  { client: 'Southern Tents & Events', industry: 'Event services', services: 'Meta ads, website rebuild, SEO' },
  { client: 'Greekfest Fayette', industry: 'Events', services: 'Meta ads, landing page, video creative' },
];

const FAQS = [
  { question: "What's the difference between boosted posts and Meta ads?", answer: 'Boosted posts are simplified ads with limited targeting and tracking. Meta Ads Manager gives you advanced targeting, detailed analytics, conversion tracking, and much better ROI for your budget.' },
  { question: 'Do you set up and manage the ads for me?', answer: 'Yes, we handle everything: campaign setup, Meta Pixel installation, ad creative, audience targeting, daily monitoring, and ongoing optimization.' },
  { question: 'Do you create the ad images and videos?', answer: 'Yes, we create all ad creative including graphics, video ads, and copywriting optimized for your target audience.' },
  { question: 'Will I see the ads before they go live?', answer: 'Yes, we send you all ad creative for approval before launching any campaign.' },
  { question: 'Do I own the ad account or do you?', answer: 'You own your Meta ad account. We manage it on your behalf with access you grant us.' },
  { question: "Can you run ads if I don't have a website?", answer: 'Yes, but having a website or dedicated landing page significantly improves conversion rates and cost per lead.' },
  { question: 'Do you work with businesses outside of Atlanta?', answer: 'Yes, we work with clients remotely across the United States.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}${PATH}#service`,
  name: 'Meta Ads Management',
  serviceType: 'Facebook and Instagram advertising management',
  description:
    'Strategy, ad creative, audience targeting, Meta Pixel tracking and ongoing optimization for Facebook and Instagram ad campaigns.',
  url: `${SITE_URL}${PATH}`,
  provider: { '@id': IDS.organization },
  areaServed: [
    { '@type': 'City', name: 'Atlanta' },
    { '@type': 'Country', name: 'United States' },
  ],
};

export default function MetaAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: 'Meta Ads Management', path: PATH }])} />

      <PageHero
        eyebrow="Services · Meta ads"
        title="Meta Ads Management for Atlanta Businesses"
        ctaSource="service_meta_ads_hero"
        intro={
          <p>
            We plan, create and run Facebook and Instagram ad campaigns for local businesses in Atlanta and across the
            US. One small team handles the strategy, the ad creative, the tracking and the weekly tuning, and you approve
            every ad before it goes live.
          </p>
        }
      />

      <Section
        title="What Meta ads management includes"
        intro={
          <p>
            Meta ads management means running your Facebook and Instagram advertising end to end: deciding who to reach,
            making the ads, tracking which ones produce leads, and adjusting the budget as results come in.
          </p>
        }
      >
        <CheckList items={INCLUDED} />
      </Section>

      <Section
        title="Ads work best with a page built for them"
        intro={
          <>
            <p>
              An ad earns the click. The page it lands on has to earn the call. We build fast landing pages and websites
              alongside the ads, so the message, the offer and the tracking match from the first tap to the lead.
            </p>
            <p>
              See <Link href="/services/website-design" className="text-link text-[#5FA99F] underline underline-offset-4">website design</Link> or
              read <Link href="/blog/why-meta-ads-need-landing-pages" className="text-link text-[#5FA99F] underline underline-offset-4">why Meta ads need a dedicated landing page</Link>.
            </p>
          </>
        }
      />

      <Section title="How it works">
        <Steps steps={STEPS} />
      </Section>

      <Section
        title="Businesses we run Meta ads for"
        intro={<p>Healthcare practices, retail, events, fitness, financial and home services. A few of them:</p>}
      >
        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {WORK.map((w) => (
            <li key={w.client} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <span className="font-heading text-white font-semibold">{w.client}</span>
              <span className="font-body text-[0.95rem] text-gray-400">{w.industry} · {w.services}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5">
          <Link href="/case-studies" className="font-ui text-[#5FA99F] font-semibold">See the ads and websites →</Link>
        </p>
      </Section>

      <Section title="Guides from our team">
        <LinkCards
          items={[
            { href: '/blog/how-much-do-facebook-ads-cost-atlanta', tag: 'Budget', title: 'How much do Facebook ads cost in Atlanta?', body: 'Typical costs by industry and how to set a starting budget.' },
            { href: '/blog/meta-ads-2026-small-business-guide', tag: 'Strategy', title: 'How to run Meta ads in 2026', body: 'A step-by-step guide for small businesses.' },
            { href: '/blog/facebook-ads-not-delivering-2026', tag: 'Troubleshooting', title: 'Facebook ads not delivering?', body: 'Common reasons and how to fix each one.' },
            { href: '/resources/meta-ads-calculator', tag: 'Free tool', title: 'Meta ads ROI calculator', body: 'Estimate clicks, leads and cost per lead for your budget.' },
          ]}
        />
      </Section>

      <Section title="Meta ads questions">
        <FaqList items={FAQS} />
      </Section>

      <ClosingCta
        title="Want more leads from Facebook and Instagram?"
        body="Tell us about your business and we'll come back the same business day with ideas for your ads."
        source="service_meta_ads_footer"
      />
    </main>
  );
}
