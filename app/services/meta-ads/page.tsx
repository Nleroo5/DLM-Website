import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Hero, AdStrip, Section, SectionHead, Ledger, Quote, Fact, Thumb, Timeline, QAGrid, Closing, Rule, Label,
  JsonLd, faqSchema, textLink,
} from '@/components/service/ServiceKit';
import { IDS, SITE_URL } from '@/lib/site';

const PATH = '/services/meta-ads';

export const metadata: Metadata = {
  title: 'Meta Ads Management in Atlanta | Drive Lead Media',
  description:
    'Facebook and Instagram ad management for Atlanta businesses: strategy, video creative, Pixel tracking and ongoing optimization. You own the ad account.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Meta Ads Management in Atlanta',
    description: 'Facebook and Instagram ads made, run, tracked and tuned by one small Atlanta team.',
    url: PATH,
    images: ['/images/og-image.webp'],
  },
};

const ADS = [
  { src: '/images/work/antique-mall-ad-poster.webp', alt: 'Marietta Antique Mall video ad: Great finds online', client: 'Marietta Antique Mall', detail: 'Retail · video ad' },
  { src: '/images/work/ptc-local-care-poster.webp', alt: 'Pain Treatment Centers video ad: Local care focused on people', client: 'Pain Treatment Centers', detail: 'Healthcare · video ad' },
  { src: '/images/work/ptc-savannah-poster.webp', alt: 'Pain Treatment Centers video ad: Not all pain is the same', client: 'Pain Treatment Centers', detail: 'Savannah · video ad' },
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

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Meta Ads Management', item: `${SITE_URL}${PATH}` },
  ],
};

export default function MetaAdsServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbs} />

      <Hero
        label="Meta ads management · Atlanta"
        title="We make the ads, run them, and show you"
        accent="which ones bring in customers."
        lead="Facebook and Instagram campaigns for local businesses. The two of us plan them, film them, track every lead, and tune them every week. You approve every ad before it goes live."
        source="service_meta_ads_hero"
        ghost={{ href: '/case-studies', label: 'See the ads' }}
        note="4 quick questions · About 60 seconds · We reach out the same business day"
        aside={<AdStrip ads={ADS} />}
      />

      <Rule />
      <Section>
        <SectionHead title="What you get, and the proof.">
          Meta ads management means running your Facebook and Instagram advertising end to end: who sees it, what they
          see, and which ads actually produce leads.
        </SectionHead>
        <Ledger
          rows={[
            {
              title: 'Ads people stop scrolling for',
              body: 'We script, film and edit the ads ourselves: video, graphics and copy made for your customers. You never have to film anything.',
              proof: (
                <div className="flex gap-4 items-start">
                  <Thumb src="/images/work/yoga-lounge-ad-frame.webp" alt="The Yoga Lounge video ad: the studio owner in her studio" />
                  <Quote
                    text="Nic and Tommy created amazing videos and ads that really captured our vibe. Within days we started seeing new leads coming in."
                    name="Jenn"
                    role="Owner, The Yoga Lounge"
                  />
                </div>
              ),
            },
            {
              title: 'Shown to the people near you',
              body: 'Targeting by area, interests and behavior, plus custom and lookalike audiences built from your best customers.',
              proof: (
                <div className="flex gap-4 items-start">
                  <div className="flex gap-2.5">
                    <Thumb src="/images/work/ptc-local-care-poster.webp" alt="Pain Treatment Centers video ad: Local care" w={88} />
                    <Thumb src="/images/work/ptc-savannah-poster.webp" alt="Pain Treatment Centers video ad: Not all pain is the same" w={88} />
                  </div>
                  <p className="font-body text-[1rem] text-[#d9e1de] leading-relaxed">
                    Two of the video ads we made for Pain Treatment Centers of Georgia, each written for the patients they want to reach.
                  </p>
                </div>
              ),
            },
            {
              title: 'Every lead tracked',
              body: 'We install the Meta Pixel and track each lead back to the ad that brought it in, so you see what your budget actually bought.',
              proof: <Fact lead="Your account, your data.">The ad account stays in your name. We manage it with the access you grant us.</Fact>,
            },
            {
              title: 'Tuned every week',
              body: 'We watch campaigns daily, retire ads that stop working, and move budget to the ones that do.',
              proof: (
                <Fact lead="Ads and the page, together.">
                  The ad earns the click; the page has to earn the call. We build the landing page too, so the offer and the
                  tracking match.{' '}
                  <Link href="/services/website-design" className={textLink}>
                    Website design →
                  </Link>
                </Fact>
              ),
            },
          ]}
        />
        <p className="font-body text-[0.97rem] text-[#9fb0ac] leading-relaxed mt-7 max-w-[80ch]">
          <span className="text-[#e8ecea] font-semibold">Also running for:</span> Village Pediatrics of St. Augustine
          (healthcare), Wilcox Tax Firm (financial services), Southern Tents &amp; Events (event rentals), Greekfest Fayette
          (events) and The Yoga Lounge (fitness).{' '}
          <Link href="/case-studies" className={textLink}>
            See the work →
          </Link>
        </p>
      </Section>

      <Section flushTop>
        <SectionHead title="What it costs.">Two separate numbers, both up front.</SectionHead>
        <div className="grid md:grid-cols-2 border-t border-white/10">
          <div className="py-6 md:pr-7 grid gap-2">
            <Label>Your ad budget</Label>
            <p className="font-heading font-bold text-[#F2B544] text-[2.3rem] sm:text-[3.2rem] leading-none tracking-[-0.03em] [font-stretch:115%]">You set it</p>
            <p className="font-body text-[1rem] text-[#b8c3c0] leading-relaxed max-w-[40ch]">
              It&apos;s paid to Meta through your own ad account. We&apos;ll recommend a starting budget for your industry.{' '}
              <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className={textLink}>
                What Facebook ads cost in Atlanta →
              </Link>
            </p>
          </div>
          <div className="py-6 md:pl-7 grid gap-2 border-t md:border-t-0 md:border-l border-white/10">
            <Label>Our management</Label>
            <p className="font-heading font-bold text-[#F2B544] text-[2.3rem] sm:text-[3.2rem] leading-none tracking-[-0.03em] [font-stretch:115%]">Fit to you</p>
            <p className="font-body text-[1rem] text-[#b8c3c0] leading-relaxed max-w-[40ch]">
              It depends on how many ads we make and run for you. We walk you through it when we reach out, the same
              business day.
            </p>
          </div>
        </div>
      </Section>

      <Section flushTop>
        <SectionHead title="How it starts.">No calls to book. You tell us about your business, and we take it from there.</SectionHead>
        <Timeline
          items={[
            { when: 'Today', title: '4 quick questions', body: 'What you need, your industry, budget and timing. About 60 seconds.' },
            { when: 'Same business day', title: 'We reach out', body: 'We look at your site and current ads, then call or email with ideas.' },
            { when: 'Before launch', title: 'You approve the ads', body: 'We film, write and build. Nothing runs until you say yes.' },
            { when: 'Every week', title: 'We tune it', body: "More budget to what's working, fresh ads for what isn't." },
          ]}
        />
      </Section>

      <Rule />
      <Section>
        <SectionHead title="Questions we get." />
        <QAGrid items={FAQS} />
      </Section>

      <Rule />
      <Closing title="Tell us about your business. We'll show you what we'd run." source="service_meta_ads_footer" />
    </main>
  );
}
