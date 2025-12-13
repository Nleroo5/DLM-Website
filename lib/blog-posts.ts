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
    datePublished: '2025-09-05T09:00:00-05:00',
    dateModified: '2025-09-05T09:00:00-05:00',
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
    heroImage: '/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp',
    heroImageAlt: 'Atlanta skyline with modern buildings representing local businesses investing in Facebook and Instagram advertising',
    wordCount: 3264
  },
  {
    slug: 'why-meta-ads-need-landing-pages',
    title: 'Why Your Meta Ads Need a Dedicated Landing Page',
    excerpt: 'Learn how dedicated landing pages can 2-3x your Meta ads conversion rates. Expert guide covering the 5 essential elements and ROI optimization.',
    date: 'September 2025',
    datePublished: '2025-09-20T09:00:00-05:00',
    dateModified: '2025-09-20T09:00:00-05:00',
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
    heroImage: '/images/professional-landing-page-design-conversion-optimization.webp',
    heroImageAlt: 'Business owner analyzing Meta ads landing page conversion rates showing 2-3x improvement in lead generation',
    wordCount: 2850
  },
  {
    slug: 'meta-ads-target-audience-guide',
    title: 'Meta Ads Target Audience Guide: Stop Wasting Money',
    excerpt: 'Stop wasting money targeting everyone. Master cold, warm, and hot audience strategies to find your perfect customers on Facebook & Instagram.',
    date: 'October 2025',
    datePublished: '2025-10-05T09:00:00-05:00',
    dateModified: '2025-10-05T09:00:00-05:00',
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
    heroImage: '/images/facebook-meta-ads-audience-targeting-strategy-guide.webp',
    heroImageAlt: 'Meta Ads audience targeting strategy guide showing cold, warm, and hot audience segmentation',
    wordCount: 2450
  },
  {
    slug: 'boosted-posts-vs-targeted-ads',
    title: 'Boosted Posts vs. Targeted Ads: Why That Blue Button Is Costing You Money',
    excerpt: 'Learn why Facebook\'s Boost button delivers 2-3X worse results than proper targeted ads. Industry benchmarks, technical insights, and the real cost difference.',
    date: 'October 2025',
    datePublished: '2025-10-21T09:00:00-05:00',
    dateModified: '2025-10-21T09:00:00-05:00',
    readTime: '8 min read',
    category: {
      name: 'Meta Ads Strategy',
      slug: 'meta-ads-strategy'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'boosted posts vs targeted ads',
      'facebook boost post vs ads manager',
      'should i boost my facebook posts',
      'meta ads manager vs boost',
      'facebook advertising atlanta'
    ],
    heroImage: '/images/facebook-boosted-posts-vs-meta-ads-manager-comparison.webp',
    heroImageAlt: 'Comparison visualization showing Facebook boost button vs Meta Ads Manager interface demonstrating cost and results differences',
    wordCount: 2433
  },
  {
    slug: 'facebook-ads-atlanta-guide',
    title: 'Facebook Ads Atlanta: Complete Guide for Local Businesses (2025)',
    excerpt: 'Complete guide to Facebook advertising for Atlanta businesses. Learn costs, targeting strategies, ROI benchmarks, and why 200+ local businesses choose Meta ads over billboards.',
    date: 'November 2025',
    datePublished: '2025-11-05T09:00:00-05:00',
    dateModified: '2025-11-05T09:00:00-05:00',
    readTime: '15 min read',
    category: {
      name: 'Local Marketing',
      slug: 'local-marketing'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'facebook ads atlanta',
      'atlanta facebook ads',
      'facebook advertising atlanta',
      'meta ads atlanta',
      'instagram ads atlanta',
      'social media advertising atlanta',
      'atlanta facebook ads agency'
    ],
    heroImage: '/images/atlanta-facebook-ads-cost-meta-advertising-pricing.webp',
    heroImageAlt: 'Atlanta business owner reviewing Facebook ads campaign performance and ROI dashboard showing local targeting success',
    wordCount: 3400
  },
  {
    slug: 'how-to-tell-if-facebook-ads-working',
    title: 'How to Tell If Your Facebook Ads Are Working (5 Simple Metrics)',
    excerpt: 'Learn the 5 simple Facebook ad metrics that tell you if your ads are working. No jargon - just clear benchmarks for impressions, clicks, CPC, CPL, and ROAS with actionable advice.',
    date: 'November 2025',
    datePublished: '2025-11-20T09:00:00-05:00',
    dateModified: '2025-11-20T09:00:00-05:00',
    readTime: '8 min read',
    category: {
      name: 'Meta Ads Strategy',
      slug: 'meta-ads-strategy'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'are my facebook ads working',
      'facebook ad metrics explained',
      'how to measure facebook ads',
      'facebook advertising metrics atlanta',
      'meta ads performance metrics',
      'facebook ads cost per lead',
      'facebook ads roi',
      'facebook ctr benchmarks'
    ],
    heroImage: '/images/facebook-ads-lead-demographics-hero.webp',
    heroImageAlt: 'Facebook Ads performance metrics showing 67 leads at $3.73 cost per lead with demographics breakdown',
    wordCount: 2000
  },
  {
    slug: 'how-to-set-up-facebook-pixel',
    title: 'How to Set Up Facebook Pixel: Complete 2025 Installation Guide',
    excerpt: 'Complete step-by-step guide to installing Facebook Pixel (Meta Pixel) on your website. Includes WordPress, Shopify, GTM setup methods, testing & verification with screenshots.',
    date: 'December 2025',
    datePublished: '2025-12-05T09:00:00-05:00',
    dateModified: '2025-12-05T09:00:00-05:00',
    readTime: '12 min read',
    category: {
      name: 'Meta Ads Setup',
      slug: 'meta-ads-setup'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'how to install facebook pixel',
      'meta pixel setup',
      'facebook pixel installation guide',
      'install meta pixel wordpress',
      'facebook pixel shopify setup',
      'google tag manager facebook pixel',
      'meta pixel verification',
      'facebook conversion tracking'
    ],
    heroImage: '/images/meta-events-manager-overview.webp',
    heroImageAlt: 'Meta Events Manager dashboard showing Facebook Pixel overview and setup options for conversion tracking',
    wordCount: 3500
  },
  {
    slug: 'facebook-ads-vs-google-ads-atlanta',
    title: 'Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses? (2025)',
    excerpt: 'Compare Facebook Ads vs Google Ads costs, targeting, and ROI with data from WordStream, Meta, and Google. Industry benchmarks and sourced research to help Atlanta businesses choose.',
    date: 'December 2025',
    datePublished: '2025-12-13T09:00:00-05:00',
    dateModified: '2025-12-13T09:00:00-05:00',
    readTime: '10 min read',
    category: {
      name: 'Platform Comparison',
      slug: 'platform-comparison'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'facebook ads vs google ads',
      'google ads vs facebook ads atlanta',
      'should i use facebook or google ads',
      'facebook ads or google ads for small business',
      'meta ads vs google ads cost',
      'which is better facebook or google ads',
      'facebook vs google advertising atlanta',
      'social media ads vs search ads'
    ],
    heroImage: '/images/facebook-vs-google-ads-comparison-hero.webp',
    heroImageAlt: 'Facebook Ads vs Google Ads comparison showing cost differences and platform strengths for Atlanta businesses',
    wordCount: 2500
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
        "url": "https://driveleadmedia.com/images/drive-lead-media-full-service-marketing-agency-brand.webp",
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
