import { BUSINESS, IDS, PEOPLE, SITE_URL } from '@/lib/site';

// Sitewide JSON-LD: the business, the website and the two founders as one
// linked graph. Pages reference these by @id instead of repeating them.
// No review or rating markup here: Google ignores self-serving reviews, and
// the stars belong on the Google Business Profile.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': IDS.organization,
      name: BUSINESS.name,
      alternateName: BUSINESS.alternateName,
      legalName: BUSINESS.legalName,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: BUSINESS.logo, width: 525, height: 525 },
      image: BUSINESS.image,
      description: BUSINESS.description,
      foundingDate: BUSINESS.foundingDate,
      founder: [{ '@id': IDS.nicolas }, { '@id': IDS.tommy }],
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      priceRange: '$$',
      // Service-area business: city and state only, no street address or map pin.
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Atlanta',
        addressRegion: 'GA',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Atlanta', sameAs: 'https://en.wikipedia.org/wiki/Atlanta' },
        { '@type': 'State', name: 'Georgia', sameAs: 'https://en.wikipedia.org/wiki/Georgia_(U.S._state)' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        url: `${SITE_URL}/book`,
        availableLanguage: 'English',
      },
      knowsAbout: [
        'Meta advertising',
        'Facebook ads',
        'Instagram ads',
        'Video ad production',
        'Website design',
        'Landing page optimization',
        'Local lead generation',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/services/meta-ads#service`,
              name: 'Meta Ads Management',
              url: `${SITE_URL}/services/meta-ads`,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/services/website-design#service`,
              name: 'Website Design',
              url: `${SITE_URL}/services/website-design`,
            },
          },
        ],
      },
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'WebSite',
      '@id': IDS.website,
      url: SITE_URL,
      name: BUSINESS.name,
      publisher: { '@id': IDS.organization },
      inLanguage: 'en-US',
    },
    PEOPLE.nicolas,
    PEOPLE.tommy,
  ],
};

export default function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
