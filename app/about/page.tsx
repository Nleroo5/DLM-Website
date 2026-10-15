import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, PageHero, Section, Steps, LinkCards, ClosingCta, breadcrumbSchema } from '@/components/content/Content';
import { BUSINESS, IDS, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Drive Lead Media | Atlanta Meta Ads & Web Design',
  description:
    'Drive Lead Media is an Atlanta agency founded in 2025 by Nicolas Leroo and Tommy Duda. We run Meta ads, make video ads and build websites for local businesses.',
  alternates: { canonical: '/about' },
};

const TEAM = [
  {
    name: 'Nicolas Leroo',
    role: 'Co-Founder, Strategy & Meta Ads',
    line: 'Plans your campaigns and makes sure every dollar is tracked back to a lead.',
    image: '/images/nicolas-leroo-atlanta-digital-marketing-agency-founder.webp',
    href: '/about/nicolas-leroo',
  },
  {
    name: 'Tommy Duda',
    role: 'Co-Founder, Creative & Video',
    line: 'Films and edits the ads people actually stop scrolling for.',
    image: '/images/tommy-atlanta-marketing-strategist-team-member.webp',
    href: '/about/tommy-duda',
  },
];

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: 'About Drive Lead Media',
  about: { '@id': IDS.organization },
  isPartOf: { '@id': IDS.website },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />

      <PageHero
        eyebrow="About us"
        title="A Small Atlanta Team That Builds Ads and Websites Together"
        intro={
          <>
            <p>
              Drive Lead Media is an Atlanta marketing agency for local businesses. Nicolas Leroo and Tommy Duda founded it
              in {BUSINESS.foundingDate} to run Facebook and Instagram ads, make the video creative for them, and build the
              websites those ads point to.
            </p>
            <p>
              We kept seeing the same thing: local businesses handing their money to agencies that overpromise and
              underdeliver. We started Drive Lead Media to fix that.
            </p>
          </>
        }
      />

      <Section title="Who you'll work with" intro={<p>No account managers in between. You work directly with the two of us.</p>}>
        <div className="grid sm:grid-cols-2 gap-5">
          {TEAM.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              className="group bg-[#111] border border-[#5FA99F]/20 hover:border-[#5FA99F]/60 rounded-2xl p-5 flex gap-4 items-center transition-colors"
            >
              <Image src={m.image} alt={m.name} width={88} height={88} className="w-[88px] h-[88px] rounded-xl object-cover flex-shrink-0" />
              <div>
                <h3 className="font-heading text-[1.15rem] font-semibold text-white group-hover:text-[#5FA99F] transition-colors">{m.name}</h3>
                <p className="font-ui text-[0.85rem] text-[#5FA99F] font-semibold mb-1">{m.role}</p>
                <p className="font-body text-[0.95rem] text-gray-400 leading-snug">{m.line}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="What we do">
        <LinkCards
          items={[
            { href: '/services/meta-ads', tag: 'Meta ads', title: 'Meta Ads Management', body: 'Facebook and Instagram campaigns: strategy, creative, tracking and optimization.' },
            { href: '/services/website-design', tag: 'Websites', title: 'Website Design', body: 'Fast, custom websites and landing pages built to turn clicks into customers.' },
          ]}
        />
      </Section>

      <Section title="How we work">
        <Steps
          steps={[
            { title: 'You own everything', body: 'Your Meta ad account and your website stay yours. We manage them with the access you give us.' },
            { title: 'You approve every ad', body: 'We send all creative for your approval before any campaign goes live.' },
            { title: 'Every lead is tracked', body: 'We set up the Meta Pixel and analytics so you can see which ads bring in customers.' },
          ]}
        />
      </Section>

      <Section
        title="Where we work"
        intro={
          <p>
            We are based in Atlanta, Georgia, and work with clients remotely across the United States. Drive Lead Media is a
            trading name of {BUSINESS.legalName}. Reach us at {BUSINESS.email} or (678) 650-6411, or see{' '}
            <Link href="/case-studies" className="text-link text-[#5FA99F] underline underline-offset-4">the businesses we work with</Link>.
          </p>
        }
      />

      <ClosingCta
        title="Let's talk about your business"
        body="Answer four quick questions and we'll reach out the same business day."
        source="about_footer"
      />
    </main>
  );
}
