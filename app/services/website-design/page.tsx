import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Hero, Wrap, Section, SectionHead, Quote, Timeline, QAGrid, Closing, Rule, JsonLd, faqSchema, textLink,
} from '@/components/service/ServiceKit';
import TapVideo from '@/components/TapVideo';
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

const FAQS = [
  { question: 'How much does a website cost?', answer: 'Website projects typically start at $1,500. The final cost depends on your specific needs, features, and functionality. We provide a detailed quote after our initial consultation.' },
  { question: 'How long does it take to build a website?', answer: 'Most websites take 2-3 weeks from start to finish, depending on the complexity and how quickly you provide content and feedback.' },
  { question: 'What platforms do you build websites on?', answer: 'We build custom websites using Next.js/React for maximum performance and SEO, as well as other platforms based on your specific needs.' },
  { question: "What's included in a website project?", answer: 'Our websites include custom design, mobile-responsive development, SEO setup, and Google Analytics integration.' },
  { question: 'Do you offer website maintenance after launch?', answer: 'Yes, we offer ongoing maintenance, updates, and support packages for websites we build.' },
];

const SPEC = [
  { item: 'Custom design', what: 'Designed around your business and customers, not a shared template.', tag: 'Included' },
  { item: 'Mobile-first build', what: 'Built and tested on phones first, where most local customers find you.', tag: 'Included' },
  { item: 'SEO setup', what: 'Search setup on every page, so Google can find and understand your business.', tag: 'Included' },
  { item: 'Google Analytics', what: 'See where visitors come from and what they do.', tag: 'Included' },
  { item: 'Meta Pixel', what: 'Track leads back to the ads that brought them in.', tag: 'With ads' },
  { item: 'Maintenance', what: 'Updates, changes and support after launch.', tag: 'Optional plan', muted: true },
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

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Website Design', item: `${SITE_URL}${PATH}` },
  ],
};

// A real site in a minimal browser frame.
function SiteFrame({ src, alt, className, priority = false }: { src: string; alt: string; className: string; priority?: boolean }) {
  return (
    <div className={`absolute rounded-[10px] overflow-hidden border border-white/[0.12] bg-[#111] shadow-[0_24px_60px_rgba(0,0,0,0.55)] ${className}`}>
      <div className="h-[18px] bg-[#1a1f1f] flex items-center gap-1 pl-2" aria-hidden="true">
        <i className="w-1.5 h-1.5 rounded-full bg-[#39443f]" />
        <i className="w-1.5 h-1.5 rounded-full bg-[#39443f]" />
        <i className="w-1.5 h-1.5 rounded-full bg-[#39443f]" />
      </div>
      <div className="relative aspect-video">
        <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 1024px) 78vw, 400px" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Case({
  flip = false,
  media,
  who,
  quote,
  name,
  made,
}: {
  flip?: boolean;
  media: React.ReactNode;
  who: string;
  quote: string;
  name: string;
  made: string;
}) {
  return (
    <div className={`grid gap-5 lg:gap-12 items-center py-7 border-t border-white/10 ${flip ? 'lg:grid-cols-[1fr_1.25fr]' : 'lg:grid-cols-[1.25fr_1fr]'}`}>
      <div className={flip ? 'lg:order-2' : ''}>{media}</div>
      <div>
        <p className="font-ui text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-[#5FA99F] mb-3">{who}</p>
        <Quote text={quote} name={name} role="Owner" />
        <p className="font-ui text-[0.86rem] text-[#8ea19c] mt-3.5">{made}</p>
      </div>
    </div>
  );
}

const Shot = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-video rounded-[10px] overflow-hidden border border-white/[0.12]">
    <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 92vw, 560px" className="object-cover object-top" />
  </div>
);

export default function WebsiteDesignServicePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema(FAQS)} />
      <JsonLd data={breadcrumbs} />

      <Hero
        label="Website design · Atlanta"
        title="Websites that get you calls."
        accent="From $1,500, live in 2–3 weeks."
        lead="Custom, fast, built for phones first, and set up so you can see where every lead came from. Built by the same two people who run your ads."
        source="service_website_hero"
        ghost={{ href: '/case-studies', label: 'See the sites' }}
        note="4 quick questions · About 60 seconds · We reach out the same business day"
        alignEnd={false}
        aside={
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[400px]" aria-label="Three websites we built">
            <SiteFrame src="/images/case-studies/setlife-casting/setlife-poster.webp" alt="Set Life Casting website" className="left-0 top-0 w-[78%]" priority />
            <SiteFrame src="/images/case-studies/marietta-antique-mall/marietta-antique-poster.webp" alt="Marietta Antique Mall website" className="right-0 top-[22%] w-[78%]" />
            <SiteFrame src="/images/case-studies/village-pediatrics/villagepeds-poster.webp" alt="Village Pediatrics website" className="left-[8%] top-[48%] w-[70%]" />
          </div>
        }
      />

      <Wrap>
        <dl className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 m-0">
          {[
            ['$1,500', 'Projects start at'],
            ['2–3 weeks', 'Most sites, start to launch'],
            ['Next.js', 'Fast pages that rank'],
            ['After launch', 'Maintenance plans available'],
          ].map(([big, small]) => (
            <div key={big} className="py-5 pr-4 flex flex-col-reverse gap-0.5">
              <dt className="font-ui text-[0.85rem] text-[#8ea19c]">{small}</dt>
              <dd className="m-0 font-heading font-bold text-white text-[1.4rem] sm:text-[1.85rem] tracking-[-0.02em] [font-stretch:112%]">{big}</dd>
            </div>
          ))}
        </dl>
      </Wrap>

      <Section>
        <SectionHead title="Sites we built, in our clients' words.">Healthcare, retail, events, entertainment and local services.</SectionHead>
        <Case
          media={<Shot src="/images/case-studies/setlife-casting/setlife-poster.webp" alt="Set Life Casting website" />}
          who="Set Life Casting · Entertainment"
          quote="I came to Drive Lead Media with a big ask — a custom website, a casting platform, and a talent database all built from the ground up. They delivered on all of it."
          name="Chaz Yu"
          made="Custom website · casting platform · talent database"
        />
        <Case
          flip
          media={<Shot src="/images/case-studies/southern-tents/southern-tents-poster.webp" alt="Southern Tents and Events website" />}
          who="Southern Tents & Events · Event rentals"
          quote="After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly."
          name="Perla Rieder"
          made="Website rebuild · SEO · Meta ads"
        />
        <Case
          media={
            <TapVideo
              src="/Videos/work/village-pediatrics-testimonial.mp4"
              poster="/images/work/village-pediatrics-testimonial-poster.webp"
              label="Village Pediatrics testimonial"
              sizes="(max-width: 1024px) 92vw, 560px"
              className="aspect-video rounded-[10px] border border-white/[0.12]"
            />
          }
          who="Village Pediatrics · Healthcare"
          quote="They built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate."
          name="Dr. Austin Dupont"
          made="Custom website · SEO · Meta ads · tracking"
        />
        <p className="font-body text-[0.97rem] text-[#9fb0ac] leading-relaxed pt-7 border-t border-white/10 max-w-[80ch]">
          <span className="text-[#e8ecea] font-semibold">Also built for:</span> Marietta Antique Mall, Wilcox Tax Firm, Bière
          de Mac, Lantz Coaching, Quality Wildlife Solutions and Total Animal Control.{' '}
          <Link href="/case-studies" className={textLink}>
            See the sites →
          </Link>
        </p>
      </Section>

      <Section flushTop>
        <SectionHead title="What's in every site.">Line by line, like the quote you'll get.</SectionHead>
        <table className="w-full border-collapse font-body text-[0.98rem]">
          <tbody>
            {SPEC.map((r) => (
              <tr key={r.item} className="border-t border-white/10 last:border-b">
                <th scope="row" className="text-left align-top font-semibold text-white py-3.5 pr-4 w-[34%]">{r.item}</th>
                <td className="align-top text-[#aebbb8] py-3.5">{r.what}</td>
                <td className={`align-top text-right whitespace-nowrap py-3.5 pl-4 font-semibold ${r.muted ? 'text-[#8ea19c] font-normal' : 'text-[#8fd0c6]'}`}>{r.tag}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section flushTop>
        <SectionHead title="How it goes.">From your first answer to a live site, usually 2–3 weeks.</SectionHead>
        <Timeline
          items={[
            { when: 'Today', title: '4 quick questions', body: 'What you need, your industry, budget and timing.' },
            { when: 'Same business day', title: 'We reach out', body: 'We look at your current site, then call or email with ideas and next steps.' },
            { when: 'Weeks 1–3', title: 'Design and build', body: 'Most sites take 2–3 weeks, depending on complexity and how fast content comes in.' },
            { when: 'Launch', title: 'Live and tracked', body: 'Analytics on day one, and the Pixel if you run ads.' },
          ]}
        />
      </Section>

      <Rule />
      <Section>
        <SectionHead title="Questions we get." />
        <QAGrid items={FAQS} />
      </Section>

      <Rule />
      <Closing title="Tell us about your business. We'll show you what we'd build." source="service_website_footer" />
    </main>
  );
}
