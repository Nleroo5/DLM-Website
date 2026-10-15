// One source of truth for business facts used in metadata and structured data.
// Keep these in sync with the Google Business Profile (service-area business,
// no public street address).

export const SITE_URL = 'https://driveleadmedia.com';

export const BUSINESS = {
  name: 'Drive Lead Media',
  alternateName: 'DLM',
  legalName: 'Established Shot LLC',
  foundingDate: '2025',
  telephone: '+1-678-650-6411',
  email: 'hello@driveleadmedia.com',
  logo: `${SITE_URL}/images/drive-lead-media-full-service-marketing-agency-brand.webp`,
  image: `${SITE_URL}/images/og-image.webp`,
  description:
    'Atlanta marketing agency for local businesses: Meta (Facebook and Instagram) ad campaigns, video ads, and conversion-focused websites.',
  sameAs: [
    'https://www.facebook.com/driveleadmedia',
    'https://www.instagram.com/drivelead.media',
    'https://www.linkedin.com/company/drive-lead-media/',
  ],
} as const;

// Stable @ids so every page points at the same entities.
export const IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  nicolas: `${SITE_URL}/about/nicolas-leroo#person`,
  tommy: `${SITE_URL}/about/tommy-duda#person`,
} as const;

export const PEOPLE = {
  nicolas: {
    '@type': 'Person',
    '@id': IDS.nicolas,
    name: 'Nicolas Leroo',
    jobTitle: 'Co-Founder & Meta Advertising Strategist',
    url: `${SITE_URL}/about/nicolas-leroo`,
    worksFor: { '@id': IDS.organization },
    sameAs: ['https://www.linkedin.com/in/nicolas-leroo'],
  },
  tommy: {
    '@type': 'Person',
    '@id': IDS.tommy,
    name: 'Tommy Duda',
    jobTitle: 'Co-Founder, Creative & Video',
    url: `${SITE_URL}/about/tommy-duda`,
    worksFor: { '@id': IDS.organization },
  },
} as const;

// Reference to the publisher, for Article/BlogPosting markup.
export const PUBLISHER_REF = {
  '@type': 'Organization',
  '@id': IDS.organization,
  name: BUSINESS.name,
  logo: { '@type': 'ImageObject', url: BUSINESS.logo, width: 525, height: 525 },
} as const;
