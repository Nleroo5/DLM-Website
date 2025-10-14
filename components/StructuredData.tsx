export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Drive Lead Media",
    "url": "https://driveleadmedia.com",
    "logo": "https://driveleadmedia.com/images/dlm-logo.png",
    "description": "We Build Advertisement Systems That Bring Your Best Customers To You. Specializing in Meta advertising, Facebook ads, Instagram ads, and custom website development for local businesses.",
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "Nic Leroo"
      },
      {
        "@type": "Person",
        "name": "Tommy Farese"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://driveleadmedia.com/contact"
    },
    "sameAs": [
      "https://www.facebook.com/driveleadmedia",
      "https://www.instagram.com/driveleadmedia",
      "https://www.linkedin.com/company/drive-lead-media"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Meta Advertising Management",
        "description": "Full-service Meta (Facebook & Instagram) advertising campaigns including strategy, ad creation, targeting, and optimization.",
        "provider": {
          "@type": "Organization",
          "name": "Drive Lead Media"
        },
        "areaServed": "US",
        "serviceType": "Digital Marketing"
      },
      {
        "@type": "Service",
        "name": "Video Ad Production",
        "description": "Professional actor-led video production and motion graphics for Meta advertising campaigns.",
        "provider": {
          "@type": "Organization",
          "name": "Drive Lead Media"
        },
        "areaServed": "US",
        "serviceType": "Video Production"
      },
      {
        "@type": "Service",
        "name": "Custom Website Design",
        "description": "High-converting website design and development optimized for local business lead generation.",
        "provider": {
          "@type": "Organization",
          "name": "Drive Lead Media"
        },
        "areaServed": "US",
        "serviceType": "Web Development"
      },
      {
        "@type": "Service",
        "name": "Advertising Strategy & Consulting",
        "description": "Data-driven advertising strategy, audience targeting, and campaign optimization for Meta platforms.",
        "provider": {
          "@type": "Organization",
          "name": "Drive Lead Media"
        },
        "areaServed": "US",
        "serviceType": "Marketing Consulting"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Drive Lead Media",
    "image": "https://driveleadmedia.com/images/dlm-logo.png",
    "url": "https://driveleadmedia.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone number
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates"
      // Add coordinates if you have a physical location
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Drive Lead Media",
    "url": "https://driveleadmedia.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://driveleadmedia.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
