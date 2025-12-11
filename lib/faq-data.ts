// Centralized FAQ data - Single source of truth
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'websites' | 'video' | 'meta-ads';
}

export interface FAQCategory {
  id: 'general' | 'websites' | 'video' | 'meta-ads';
  name: string;
  icon: string;
}

export const faqCategories: FAQCategory[] = [
  { id: 'general', name: 'General Services', icon: '🏢' },
  { id: 'websites', name: 'Website Design & Development', icon: '💻' },
  { id: 'video', name: 'Video Production', icon: '🎥' },
  { id: 'meta-ads', name: 'Meta Advertising', icon: '📱' }
];

export const faqItems: FAQItem[] = [
  // GENERAL SERVICES
  {
    id: 'services-offered',
    question: 'What services do you offer?',
    answer: 'We specialize in custom website design and development, Meta (Facebook/Instagram) advertising, and video ad creation for local businesses.',
    category: 'general'
  },
  {
    id: 'work-location',
    question: 'Do you work with businesses outside of Atlanta?',
    answer: 'Yes, we work with clients remotely across the United States.',
    category: 'general'
  },
  {
    id: 'business-types',
    question: 'What types of businesses do you work with?',
    answer: 'We work with a variety of local businesses including healthcare practices, event services, retail stores, entertainment companies, and professional services.',
    category: 'general'
  },

  // WEBSITE DESIGN & DEVELOPMENT
  {
    id: 'website-timeline',
    question: 'How long does it take to build a website?',
    answer: 'Most websites take 2-3 weeks from start to finish, depending on the complexity and how quickly you provide content and feedback.',
    category: 'websites'
  },
  {
    id: 'website-platforms',
    question: 'What platforms do you build websites on?',
    answer: 'We build custom websites using Next.js/React for maximum performance and SEO, as well as other platforms based on your specific needs.',
    category: 'websites'
  },
  {
    id: 'website-cost',
    question: 'How much does a website cost?',
    answer: 'Website projects typically start at $1,500. The final cost depends on your specific needs, features, and functionality. We provide a detailed quote after our initial consultation.',
    category: 'websites'
  },
  {
    id: 'website-includes',
    question: "What's included in a website project?",
    answer: 'Our websites include custom design, mobile-responsive development, SEO setup, and Google Analytics integration.',
    category: 'websites'
  },
  {
    id: 'website-maintenance',
    question: 'Do you offer website maintenance after launch?',
    answer: 'Yes, we offer ongoing maintenance, updates, and support packages for websites we build.',
    category: 'websites'
  },

  // VIDEO PRODUCTION
  {
    id: 'video-types',
    question: 'What types of video content do you create?',
    answer: 'We create social media ads, promotional videos, testimonial videos, motion graphics, and custom video content tailored to your business needs.',
    category: 'video'
  },
  {
    id: 'drone-videography',
    question: 'Do you offer drone videography?',
    answer: "Yes, we're FAA Part 107 certified and offer professional drone footage for real estate, events, business showcases, and promotional videos.",
    category: 'video'
  },
  {
    id: 'motion-graphics',
    question: 'Can you create animated videos or motion graphics?',
    answer: 'Yes, we create custom motion graphics and animated content for social media ads, explainer videos, and promotional materials.',
    category: 'video'
  },

  // META ADVERTISING
  {
    id: 'boosted-vs-ads',
    question: "What's the difference between boosted posts and Meta ads?",
    answer: 'Boosted posts are simplified ads with limited targeting and tracking. Meta Ads Manager gives you advanced targeting, detailed analytics, conversion tracking, and much better ROI for your budget.',
    category: 'meta-ads'
  },
  {
    id: 'ad-management',
    question: 'Do you set up and manage the ads for me?',
    answer: 'Yes, we handle everything: campaign setup, Meta Pixel installation, ad creative, audience targeting, daily monitoring, and ongoing optimization.',
    category: 'meta-ads'
  },
  {
    id: 'meta-pixel',
    question: 'What is the Meta Pixel and do I need it?',
    answer: 'The Meta Pixel is tracking code installed on your website that measures conversions and helps optimize your ads. Yes, it's essential for effective campaigns.',
    category: 'meta-ads'
  },
  {
    id: 'audience-targeting',
    question: 'How do you target the right audience?',
    answer: "We use Meta's advanced targeting based on demographics, interests, behaviors, custom audiences, and lookalike audiences of your best customers.",
    category: 'meta-ads'
  },
  {
    id: 'ad-creative',
    question: 'Do you create the ad images and videos?',
    answer: 'Yes, we create all ad creative including graphics, video ads, and copywriting optimized for your target audience.',
    category: 'meta-ads'
  },
  {
    id: 'ad-approval',
    question: 'Will I see the ads before they go live?',
    answer: 'Yes, we send you all ad creative for approval before launching any campaign.',
    category: 'meta-ads'
  },
  {
    id: 'instagram-ads',
    question: 'Can you run Instagram ads too?',
    answer: 'Yes, Meta Ads Manager runs ads on both Facebook and Instagram from the same platform. We optimize for both placements.',
    category: 'meta-ads'
  },
  {
    id: 'ads-without-website',
    question: "Can you run ads if I don't have a website?",
    answer: 'Yes, but having a website or dedicated landing page significantly improves conversion rates and cost per lead.',
    category: 'meta-ads'
  },
  {
    id: 'ad-industries',
    question: 'What industries do your Meta ads work best for?',
    answer: "We've successfully run campaigns for healthcare, home services, retail, restaurants, real estate, and professional services. Meta ads work for most local businesses.",
    category: 'meta-ads'
  },
  {
    id: 'ad-account-ownership',
    question: 'Do I own the ad account or do you?',
    answer: 'You own your Meta ad account. We manage it on your behalf with access you grant us.',
    category: 'meta-ads'
  }
];

// Helper function to get FAQs by category
export function getFAQsByCategory(categoryId: FAQCategory['id']): FAQItem[] {
  return faqItems.filter(item => item.category === categoryId);
}

// Helper function to search FAQs
export function searchFAQs(query: string): FAQItem[] {
  const lowerQuery = query.toLowerCase();
  return faqItems.filter(
    item =>
      item.question.toLowerCase().includes(lowerQuery) ||
      item.answer.toLowerCase().includes(lowerQuery)
  );
}

// Generate FAQ Schema for SEO
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
