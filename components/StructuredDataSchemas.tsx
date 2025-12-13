/**
 * Centralized Structured Data Schemas for SEO
 * Following 2025 best practices for Google Search
 */

export interface LocalBusinessSchemaProps {
  url?: string;
}

export function LocalBusinessSchema({ url = 'https://driveleadmedia.com' }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://driveleadmedia.com/#organization",
    "name": "Drive Lead Media",
    "alternateName": "DLM Digital Marketing",
    "description": "Atlanta digital marketing agency specializing in Meta (Facebook & Instagram) advertising, custom website design, video production, and conversion-optimized landing pages for local businesses.",
    "url": url,
    "telephone": "+1-404-862-1975",
    "email": "brenna@driveleadmedia.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Atlanta",
        "containedIn": {
          "@type": "State",
          "name": "Georgia"
        }
      },
      {
        "@type": "State",
        "name": "Georgia"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "33.7490",
        "longitude": "-84.3880"
      },
      "geoRadius": "50000" // 50km radius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Meta Advertising Management",
            "description": "Facebook and Instagram advertising campaign setup, management, and optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design & Development",
            "description": "Mobile-responsive website design and development with Next.js and React"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Ad Production",
            "description": "Professional video ad creation for Facebook, Instagram, and social media"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Design",
            "description": "High-converting landing pages optimized for Meta ad campaigns"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/driveleadmedia",
      "https://www.instagram.com/driveleadmedia",
      "https://www.linkedin.com/company/drive-lead-media"
    ],
    "founder": {
      "@type": "Person",
      "name": "Nicolas Leroo",
      "jobTitle": "Founder & Meta Advertising Strategist",
      "url": "https://driveleadmedia.com/about/nicolas-leroo"
    },
    "knowsAbout": [
      "Meta Advertising",
      "Facebook Ads",
      "Instagram Ads",
      "Web Design",
      "Video Production",
      "Digital Marketing",
      "Lead Generation",
      "Conversion Optimization"
    ],
    "slogan": "Meta Ads & Websites That Bring Your Best Customers to You"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  url?: string;
}

export function ServiceSchema({ serviceName, description, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Drive Lead Media",
      "telephone": "+1-404-862-1975",
      "email": "brenna@driveleadmedia.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Atlanta",
      "containedIn": {
        "@type": "State",
        "name": "Georgia"
      }
    },
    "description": description,
    "url": url || "https://driveleadmedia.com/services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceRange": "$$"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Small and Medium-Sized Businesses"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ImageObjectSchemaProps {
  url: string;
  caption: string;
  description: string;
  width?: number;
  height?: number;
  creator?: string;
}

export function ImageObjectSchema({
  url,
  caption,
  description,
  width,
  height,
  creator = "Drive Lead Media"
}: ImageObjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "contentUrl": `https://driveleadmedia.com${url}`,
    "url": `https://driveleadmedia.com${url}`,
    "name": caption,
    "description": description,
    "creator": {
      "@type": "Organization",
      "name": creator
    },
    "creditText": creator,
    "copyrightNotice": `© 2025 ${creator}`,
    ...(width && { "width": width }),
    ...(height && { "height": height }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT2M30S" for 2 min 30 sec)
  embedUrl?: string;
}

export function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate,
  duration,
  embedUrl
}: VideoObjectSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": `https://driveleadmedia.com${thumbnailUrl}`,
    "uploadDate": uploadDate,
    "contentUrl": `https://driveleadmedia.com${contentUrl}`,
    ...(embedUrl && { "embedUrl": `https://driveleadmedia.com${embedUrl}` }),
    ...(duration && { "duration": duration }),
    "creator": {
      "@type": "Organization",
      "name": "Drive Lead Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Drive Lead Media"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://driveleadmedia.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FAQSchemaProps {
  items?: {
    question: string;
    answer: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export function FAQSchema({ items, faqs }: FAQSchemaProps) {
  const faqList = items || faqs || [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}

export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://driveleadmedia.com/about/nicolas-leroo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Drive Lead Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://driveleadmedia.com/images/drive-lead-media-atlanta-digital-marketing-agency-logo.webp"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  steps: {
    name: string;
    text: string;
  }[];
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface OrganizationSchemaProps {
  url?: string;
}

export function OrganizationSchema({ url = 'https://driveleadmedia.com' }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://driveleadmedia.com/#organization",
    "name": "Drive Lead Media",
    "url": url,
    "logo": {
      "@type": "ImageObject",
      "url": "https://driveleadmedia.com/images/drive-lead-media-atlanta-digital-marketing-agency-logo.webp",
      "width": 400,
      "height": 400
    },
    "description": "Atlanta digital marketing agency specializing in Meta advertising, website design, and video production",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-404-862-1975",
      "contactType": "Customer Service",
      "email": "brenna@driveleadmedia.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/driveleadmedia",
      "https://www.instagram.com/driveleadmedia",
      "https://www.linkedin.com/company/drive-lead-media"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
