import { PEOPLE, PUBLISHER_REF } from '@/lib/site';

/**
 * Centralized Structured Data Schemas for SEO
 * Business and founder entities live in components/SiteSchema.tsx; these
 * helpers reference them by @id.
 */

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
      // Accept a full URL or a site path.
      "item": item.url.startsWith('http') ? item.url : `https://driveleadmedia.com${item.url}`
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
    "author": { ...PEOPLE.nicolas, "name": author },
    "publisher": PUBLISHER_REF,
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

