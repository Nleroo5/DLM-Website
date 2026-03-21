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
  {
    slug: 'how-to-create-facebook-ads',
    title: 'How to Create Facebook Ads: Complete Step-by-Step Guide (2025)',
    excerpt: 'Learn how to create Facebook ads from scratch with our complete step-by-step tutorial. Campaign setup, targeting strategies, budgets, and optimization from Meta advertising experts.',
    date: 'December 2025',
    datePublished: '2025-12-14T09:00:00-05:00',
    dateModified: '2025-12-14T09:00:00-05:00',
    readTime: '18 min read',
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
      'how to create facebook ads',
      'how to run facebook ads',
      'how to make facebook ads',
      'facebook ads tutorial',
      'create facebook ad campaign',
      'how to set up facebook ads',
      'facebook advertising tutorial',
      'facebook ads manager tutorial'
    ],
    heroImage: '/images/how-to-create-facebook-ads-tutorial-guide.webp',
    heroImageAlt: 'How to create Facebook ads step-by-step tutorial showing Ads Manager interface and campaign setup process',
    wordCount: 4500
  },
  {
    slug: 'meta-andromeda-algorithm-2026',
    title: 'Meta\'s Andromeda Algorithm Explained (2026): Complete Guide for Advertisers',
    excerpt: 'Everything changed in late 2024. Meta\'s Andromeda algorithm is delivering 8-17% better conversions by flipping advertising on its head. Learn how to adapt your campaigns.',
    date: 'January 2026',
    datePublished: '2026-01-07T09:00:00-05:00',
    dateModified: '2026-01-07T09:00:00-05:00',
    readTime: '18 min read',
    category: {
      name: 'Algorithm Updates',
      slug: 'algorithm-updates'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'meta andromeda algorithm',
      'facebook ads 2026',
      'meta advantage plus',
      'creative based targeting',
      'facebook algorithm update',
      'meta ai advertising',
      'instagram ads optimization',
      'advantage plus creative',
      'meta ads machine learning',
      'facebook advertising strategy 2026'
    ],
    heroImage: '/images/meta-andromeda-algorithm-ai-neural-network-hero.webp',
    heroImageAlt: 'Meta Andromeda algorithm 2026 - AI neural network visualization showing machine learning technology powering Facebook and Instagram advertising optimization',
    wordCount: 8500
  },
  {
    slug: 'facebook-ads-not-delivering-2026',
    title: 'Why Your Facebook Ads Aren\'t Delivering (2026): 12 Reasons & Fixes',
    excerpt: 'Facebook ads not delivering? Discover 12 verified reasons your Meta ads aren\'t spending budget with exact fixes for learning limited status, pixel errors, and account restrictions in 2026.',
    date: 'January 2026',
    datePublished: '2026-01-11T09:00:00-05:00',
    dateModified: '2026-01-11T09:00:00-05:00',
    readTime: '16 min read',
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
      'facebook ads not delivering',
      'meta ads not spending',
      'learning limited status',
      'facebook ads stuck in learning phase',
      'facebook ad account restricted',
      'meta ads delivery issues',
      'facebook pixel not tracking',
      'facebook ads budget problems'
    ],
    heroImage: '/images/facebook-ads-not-delivering-frustrated-advertiser-analytics.webp',
    heroImageAlt: 'Frustrated advertiser looking at Facebook ads not delivering in Meta Ads Manager with analytics dashboard showing delivery issues',
    wordCount: 4800
  },
  {
    slug: 'meta-ads-healthcare-compliance-atlanta',
    title: 'Meta Ads for Healthcare & Medical Practices: Compliance Guide (Atlanta)',
    excerpt: 'Navigate HIPAA, Meta\'s 2025-2026 restrictions, and Georgia medical board regulations. Complete compliance guide for healthcare practices advertising on Facebook & Instagram in Atlanta.',
    date: 'January 2026',
    datePublished: '2026-01-23T09:00:00-05:00',
    dateModified: '2026-01-23T09:00:00-05:00',
    readTime: '16 min read',
    category: {
      name: 'Healthcare Marketing',
      slug: 'healthcare-marketing'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'healthcare facebook ads 2026',
      'medical practice meta ads',
      'HIPAA compliant facebook advertising',
      'healthcare advertising compliance',
      'medical facebook ads atlanta',
      'dentist facebook ads',
      'chiropractor meta ads',
      'meta healthcare restrictions 2025',
      'healthcare digital marketing atlanta'
    ],
    heroImage: '/images/atlanta-healthcare-medical-practice-meta-ads-hipaa-compliance.webp',
    heroImageAlt: 'Healthcare professional reviewing compliant Meta ads campaign setup for medical practice in Atlanta showing HIPAA-safe advertising strategy',
    wordCount: 3700
  },
  {
    slug: 'nextjs-vs-wordpress-2026',
    title: 'Next.js vs WordPress for Small Business Websites in 2026',
    excerpt: 'Choosing between Next.js and WordPress for your business website? Compare performance (1-2s vs 4-6s load times), security, costs, and find out why Drive Lead Media builds exclusively on Next.js.',
    date: 'February 2026',
    datePublished: '2026-02-09T09:00:00-05:00',
    dateModified: '2026-02-09T09:00:00-05:00',
    readTime: '18 min read',
    category: {
      name: 'Web Development',
      slug: 'web-development'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'nextjs vs wordpress',
      'next.js vs wordpress 2026',
      'wordpress vs nextjs performance',
      'nextjs website development',
      'wordpress security issues',
      'nextjs for small business',
      'custom website development',
      'wordpress alternatives 2026',
      'static site generation',
      'react framework for websites'
    ],
    heroImage: '/images/nextjs-vs-wordpress-website-development-comparison.webp',
    heroImageAlt: 'Side-by-side comparison of Next.js and WordPress showing performance metrics, load times, and modern web development technologies for business websites',
    wordCount: 3498
  },
  {
    slug: 'instagram-reels-ads-small-business-guide',
    title: 'Instagram Reels Ads: The Small Business Guide to Short-Form Video Advertising',
    excerpt: 'More than half of all Instagram ads now run on Reels. Learn how to create Reels ads that convert, what specs actually matter, and why short-form video is the highest-reach format available to small businesses on Meta.',
    date: 'February 2026',
    datePublished: '2026-02-18T09:00:00-05:00',
    dateModified: '2026-02-18T09:00:00-05:00',
    readTime: '11 min read',
    category: {
      name: 'Video Advertising',
      slug: 'video-advertising'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'instagram reels ads',
      'facebook reels ads',
      'reels advertising small business',
      'short form video ads',
      'instagram video ads 2026',
      'meta reels advertising',
      'reels ads setup',
      'instagram ads strategy 2026',
      'video advertising meta',
      'reels ads performance'
    ],
    heroImage: '/images/facebook-meta-ads-performance-metrics-analytics-chart.webp',
    heroImageAlt: 'Meta Ads Manager performance metrics showing Instagram Reels ad results including reach, engagement rate and cost data for small business advertising',
    wordCount: 3200
  },
  {
    slug: 'meta-ads-2026-small-business-guide',
    title: 'How to Run Meta Ads in 2026: Small Business Guide to 6:1 ROAS',
    excerpt: 'Master Meta ads in 2026 with this complete guide. Learn Advantage+ campaigns, creative strategies, and targeting methods that deliver 6:1 ROAS for small businesses spending $500-5,000/month.',
    date: 'February 2026',
    datePublished: '2026-02-09T14:00:00-05:00',
    dateModified: '2026-02-09T14:00:00-05:00',
    readTime: '22 min read',
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
      'meta ads 2026',
      'facebook ads ROAS',
      'instagram advertising small business',
      'advantage plus campaigns',
      'meta pixel setup',
      'facebook ads targeting 2026',
      'meta ads creative strategy',
      'small business facebook ads',
      'meta advertising guide',
      'facebook ads budget'
    ],
    heroImage: '/images/meta-ads-2026-roas-dashboard-performance.webp',
    heroImageAlt: 'Meta Ads Manager dashboard showing 6:1 ROAS performance for small business Facebook and Instagram advertising campaign in 2026',
    wordCount: 5500
  },
  {
    slug: 'atlanta-business-website-cost-2026',
    title: 'How Much Does a Business Website Cost in Atlanta? (2026 Guide)',
    excerpt: 'Atlanta business websites cost $1,500 to $15,000+ depending on complexity. Complete 2026 pricing guide with DIY vs freelancer vs agency breakdowns, ongoing costs, and ROI data.',
    date: 'March 2026',
    datePublished: '2026-03-12T09:00:00-05:00',
    dateModified: '2026-03-12T09:00:00-05:00',
    readTime: '16 min read',
    category: {
      name: 'Web Design Pricing',
      slug: 'web-design-pricing'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'atlanta business website cost',
      'website design cost atlanta',
      'atlanta web design pricing',
      'how much does a website cost atlanta',
      'custom website development atlanta',
      'small business website cost 2026',
      'web design atlanta ga',
      'atlanta website development'
    ],
    heroImage: '/images/atlanta-business-website-cost-web-design-pricing.webp',
    heroImageAlt: 'Atlanta Business Website Cost Guide 2026 - Complete pricing breakdown for web design services',
    wordCount: 4200
  },
  {
    slug: 'google-business-profile-optimization-atlanta',
    title: 'How to Optimize Your Google Business Profile in 2026 (Atlanta Guide)',
    excerpt: '87% of consumers use Google to find local businesses. Complete 2026 guide to Google Business Profile optimization for Atlanta businesses, covering the 3-pack, reviews, NAP consistency, and AI search.',
    date: 'March 2026',
    datePublished: '2026-03-12T14:00:00-05:00',
    dateModified: '2026-03-12T14:00:00-05:00',
    readTime: '18 min read',
    category: {
      name: 'Local SEO',
      slug: 'local-seo'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'google business profile optimization atlanta',
      'google maps ranking atlanta',
      'local seo atlanta',
      'google my business atlanta',
      'how to rank on google maps',
      'google reviews strategy',
      'local 3-pack ranking',
      'google business profile tips 2026'
    ],
    heroImage: '/images/google-business-profile-optimization-atlanta-local-seo.webp',
    heroImageAlt: 'Google Business Profile optimization guide for Atlanta businesses showing local search results and Google Maps 3-pack',
    wordCount: 4500
  },
  {
    slug: 'custom-website-vs-template-atlanta-2026',
    title: 'Custom Website vs Template: Why Atlanta Businesses Are Switching in 2026',
    excerpt: 'Custom websites convert 20-40% better than templates. Side-by-side comparison of speed, SEO, security, and ROI for Atlanta small businesses making the switch.',
    date: 'March 2026',
    datePublished: '2026-03-12T16:00:00-05:00',
    dateModified: '2026-03-12T16:00:00-05:00',
    readTime: '14 min read',
    category: {
      name: 'Web Design',
      slug: 'web-design'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'custom website vs template',
      'custom web design atlanta',
      'template website problems',
      'custom website benefits small business',
      'custom website ROI',
      'wix vs custom website',
      'squarespace vs custom website',
      'atlanta web design 2026'
    ],
    heroImage: '/images/custom-website-vs-template-atlanta-comparison.webp',
    heroImageAlt: 'Custom Website vs Template Comparison for Atlanta Businesses 2026',
    wordCount: 4200
  },
  {
    slug: 'signs-atlanta-business-needs-new-website-2026',
    title: '7 Signs Your Atlanta Business Needs a New Website (2026 Checklist)',
    excerpt: 'Is your website costing you customers? 7 data-backed warning signs it is time for a redesign. Speed, mobile, security, and SEO checklist for Atlanta businesses.',
    date: 'March 2026',
    datePublished: '2026-03-16T09:00:00-05:00',
    dateModified: '2026-03-16T09:00:00-05:00',
    readTime: '16 min read',
    category: {
      name: 'Web Design',
      slug: 'web-design'
    },
    author: {
      name: 'Nicolas Leroo',
      jobTitle: 'Co-Founder & Meta Advertising Strategist',
      url: 'https://driveleadmedia.com/about/nicolas-leroo'
    },
    keywords: [
      'signs you need a new website',
      'website redesign atlanta',
      'outdated website checklist',
      'website not mobile friendly',
      'slow website losing customers',
      'website security vulnerabilities',
      'atlanta web design 2026',
      'small business website checklist'
    ],
    heroImage: '/images/signs-new-website-outdated-design-comparison.webp',
    heroImageAlt: '7 Signs Your Atlanta Business Needs a New Website - 2026 Checklist',
    wordCount: 4500
  },
  {
    slug: 'seo-vs-meta-ads-atlanta',
    title: 'SEO vs Meta Ads: Which Should Atlanta Businesses Invest In First?',
    excerpt: 'Compare SEO and Meta Ads costs, timelines, and ROI with 2025 data. Budget framework to help Atlanta businesses decide where to invest first.',
    date: 'March 2026',
    datePublished: '2026-03-21T09:00:00-05:00',
    dateModified: '2026-03-21T09:00:00-05:00',
    readTime: '18 min read',
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
      'seo vs meta ads',
      'seo vs facebook ads atlanta',
      'should i invest in seo or ads',
      'atlanta seo vs paid ads',
      'local seo atlanta',
      'meta ads roi comparison',
      'seo roi vs paid ads',
      'atlanta digital marketing strategy',
      'small business marketing budget'
    ],
    heroImage: '/images/seo-vs-meta-ads-atlanta-business-strategy.webp',
    heroImageAlt: 'SEO vs Meta Ads comparison for Atlanta businesses showing organic search results alongside Facebook ad campaigns',
    wordCount: 4800
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
