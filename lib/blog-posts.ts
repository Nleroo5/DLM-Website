// Centralized blog post data - Single source of truth
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  datePublished: string; // ISO format for schema
  dateModified: string;  // ISO format for schema
  readTime: string;
  category: {
    name: string;
    slug: string; // kebab-case for URLs
  };
  author: {
    name: string;
    jobTitle: string;
    url: string;
  };
  keywords: string[];
  heroImage: string;
  heroImageAlt: string;
  wordCount?: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-do-facebook-ads-cost-atlanta',
    title: 'How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)',
    excerpt: 'Facebook ads in Atlanta cost $0.90-$3.50 per click. Complete 2025 pricing guide with industry breakdowns, budget recommendations & free ROI calculator.',
    date: 'September 2025',
    datePublished: '2025-09-15T09:00:00-05:00',
    dateModified: '2025-11-11T09:00:00-05:00',
    readTime: '14 min read',
    category: {
      name: 'Meta Ads Pricing',
      slug: 'meta-ads-pricing'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'facebook ads cost atlanta',
      'meta ads pricing atlanta',
      'instagram ads cost',
      'facebook advertising budget atlanta',
      'meta ads roi calculator'
    ],
    heroImage: '/images/atlanta.jpg',
    heroImageAlt: 'Atlanta skyline with modern buildings representing local businesses investing in Facebook and Instagram advertising',
    wordCount: 3264
  },
  {
    slug: 'why-meta-ads-need-landing-pages',
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    excerpt: 'Learn how dedicated landing pages can 2-3x your Meta ads conversion rates. Expert guide covering the 5 essential elements and ROI optimization.',
    date: 'October 2025',
    datePublished: '2025-10-20T09:00:00-05:00',
    dateModified: '2025-10-20T09:00:00-05:00',
    readTime: '8 min read',
    category: {
      name: 'Conversion Optimization',
      slug: 'conversion-optimization'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'meta ads landing pages',
      'facebook ads landing page',
      'instagram ads conversion',
      'landing page optimization',
      'meta ads ROI'
    ],
    heroImage: '/images/meta-ads-landing-page-conversion-optimization-2025.jpg',
    heroImageAlt: 'Business owner analyzing Meta ads landing page conversion rates showing 2-3x improvement in lead generation',
    wordCount: 2850
  },
  {
    slug: 'meta-ads-target-audience-guide',
    title: 'Meta Ads Target Audience Guide: Stop Wasting Money',
    excerpt: 'Stop wasting money targeting everyone. Master cold, warm, and hot audience strategies to find your perfect customers on Facebook & Instagram.',
    date: 'October 2025',
    datePublished: '2025-10-25T09:00:00-05:00',
    dateModified: '2025-10-25T09:00:00-05:00',
    readTime: '10 min read',
    category: {
      name: 'Targeting Strategy',
      slug: 'targeting-strategy'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'meta ads targeting',
      'facebook audience targeting',
      'instagram ads audience',
      'cold warm hot audiences',
      'meta ads demographics'
    ],
    heroImage: '/images/meta-audience-target-hero.jpg',
    heroImageAlt: 'Meta Ads audience targeting strategy guide showing cold, warm, and hot audience segmentation',
    wordCount: 2450
  },
];

// Helper functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.category.slug === categorySlug);
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const categoryMap = new Map<string, { name: string; count: number }>();

  blogPosts.forEach(post => {
    const existing = categoryMap.get(post.category.slug);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(post.category.slug, {
        name: post.category.name,
        count: 1
      });
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, data]) => ({
    slug,
    name: data.name,
    count: data.count
  }));
}

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [`https://driveleadmedia.com${post.heroImage}`],
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "author": [{
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.jobTitle,
      "url": post.author.url
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Drive Lead Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://driveleadmedia.com/images/dlm-logo2.png",
        "width": 600,
        "height": 60
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://driveleadmedia.com/blog/${post.slug}`
    },
    "keywords": post.keywords,
    "articleSection": post.category.name,
    "wordCount": post.wordCount,
    "inLanguage": "en-US"
  };
}
