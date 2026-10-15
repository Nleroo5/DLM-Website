import type { Metadata } from 'next';
import { JsonLd, PageHero, Section, LinkCards, ClosingCta, breadcrumbSchema } from '@/components/content/Content';

export const metadata: Metadata = {
  title: 'Services: Meta Ads, Video Ads & Websites | Drive Lead Media',
  description:
    'We run Facebook and Instagram ads, make the video creative, and build the websites they point to, for local businesses in Atlanta and across the US.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }])} />

      <PageHero
        eyebrow="Services"
        title="Meta Ads, Video Ads and Websites That Work Together"
        ctaSource="services_hub_hero"
        intro={
          <p>
            We help local businesses get more customers from Facebook and Instagram. That takes three things working
            together: the ad, the video that stops the scroll, and the page that turns the click into a call. We build
            all three.
          </p>
        }
      />

      <Section title="What we do">
        <LinkCards
          items={[
            {
              href: '/services/meta-ads',
              tag: 'Meta ads',
              title: 'Meta Ads Management',
              body: 'Strategy, targeting, Pixel tracking and ongoing optimization for Facebook and Instagram campaigns.',
            },
            {
              href: '/services/website-design',
              tag: 'Websites',
              title: 'Website Design',
              body: 'Fast, custom, mobile-first websites and landing pages. Projects start at $1,500.',
            },
          ]}
        />
      </Section>

      <Section
        title="Video ad creative"
        intro={
          <p>
            Every campaign needs ads people actually watch. We create social media video ads, promotional and testimonial
            videos, and motion graphics, and we are FAA Part 107 certified for drone footage. Video creative comes with our
            Meta ads work, so you never have to film anything yourself.
          </p>
        }
      />

      <ClosingCta
        title="Not sure where to start?"
        body="Answer four quick questions and we'll tell you what we'd do first for your business."
        source="services_hub_footer"
      />
    </main>
  );
}
