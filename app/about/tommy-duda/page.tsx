import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd, Section, LinkCards, ClosingCta, breadcrumbSchema } from '@/components/content/Content';
import { IDS, SITE_URL } from '@/lib/site';

const PATH = '/about/tommy-duda';

export const metadata: Metadata = {
  title: 'Tommy Duda, Co-Founder | Drive Lead Media',
  description:
    'Tommy Duda is co-founder of Drive Lead Media in Atlanta. He leads creative and video: the Facebook and Instagram ads our clients run.',
  alternates: { canonical: PATH },
  openGraph: { type: 'profile', images: ['/images/tommy-atlanta-marketing-strategist-team-member.webp'] },
};

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  mainEntity: {
    '@type': 'Person',
    '@id': IDS.tommy,
    name: 'Tommy Duda',
    jobTitle: 'Co-Founder, Creative & Video',
    image: `${SITE_URL}/images/tommy-atlanta-marketing-strategist-team-member.webp`,
    worksFor: { '@id': IDS.organization },
    knowsAbout: ['Video ad production', 'Motion graphics', 'Facebook ads creative', 'Instagram Reels ads'],
  },
};

export default function TommyDudaPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={profileSchema} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }, { name: 'Tommy Duda', path: PATH }])} />

      <section className="pt-[130px] sm:pt-[160px] pb-12 px-4 sm:px-6">
        <div className="max-w-[860px] mx-auto grid sm:grid-cols-[220px_1fr] gap-8 items-center">
          <Image
            src="/images/tommy-atlanta-marketing-strategist-team-member.webp"
            alt="Tommy Duda"
            width={440}
            height={440}
            priority
            className="w-[200px] sm:w-[220px] aspect-square rounded-2xl object-cover mx-auto sm:mx-0"
          />
          <div className="text-center sm:text-left">
            <p className="font-ui text-[#5FA99F] text-[0.85rem] font-semibold uppercase tracking-[0.12em] mb-3">Co-Founder · Creative &amp; Video</p>
            <h1 className="font-heading text-[2.4rem] sm:text-[3rem] font-bold text-white leading-[1.1] mb-4">Tommy Duda</h1>
            <p className="font-body text-[1.1rem] text-gray-300 leading-relaxed">
              Tommy co-founded Drive Lead Media with{' '}
              <Link href="/about/nicolas-leroo" className="text-link text-[#5FA99F] underline underline-offset-4">Nicolas Leroo</Link>{' '}
              and leads the creative side: he films and edits the ads people actually stop scrolling for.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="What Tommy does for clients"
        intro={
          <p>
            Every Meta campaign we run needs creative that earns attention in the first second. Tommy plans, shoots and
            edits that creative: social video ads, promotional and testimonial videos, and motion graphics, made for
            Facebook and Instagram feeds and Reels.
          </p>
        }
      />

      <Section title="Video creative from our team">
        <LinkCards
          items={[
            { href: '/case-studies', tag: 'Healthcare', title: 'Pain Treatment Centers of Georgia', body: 'Video creative and Meta ads for a pain management practice.' },
            { href: '/case-studies', tag: 'Retail', title: 'Marietta Antique Mall', body: 'Video ads that bring shoppers through the door.' },
            { href: '/case-studies', tag: 'Fitness', title: 'The Yoga Lounge', body: 'Video ads and Meta campaigns for a yoga studio.' },
            { href: '/blog/instagram-reels-ads-small-business-guide', tag: 'Guide', title: 'Instagram Reels ads guide', body: 'How small businesses can make Reels ads that work.' },
          ]}
        />
      </Section>

      <ClosingCta
        title="Need ads people stop for?"
        body="Tell us about your business and we'll reach out the same business day."
        source="tommy_profile_footer"
      />
    </main>
  );
}
