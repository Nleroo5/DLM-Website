// Centralized portfolio data - Single source of truth
export interface PortfolioProject {
  slug: string;
  title: string;
  client: string; // Client name or anonymized ("Atlanta Dental Practice")
  description?: string;
  industry: string;
  type: 'website' | 'video-ad';
  category: {
    name: 'Websites' | 'Video Ads';
    slug: 'websites' | 'video-ads';
  };
  featured: boolean;
  date: string; // "Q1 2025" or "January 2025"
  thumbnail: string;
  heroImage?: string; // For websites (desktop screenshot)
  images?: string[]; // Additional screenshots for websites
  liveUrl?: string; // If client allows

  // Device-specific screenshots for responsive showcase
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;

  // Website-specific fields
  services?: string[]; // ["Web Design", "Development", "SEO"]
  techStack?: string[]; // ["Next.js", "React", "Tailwind CSS"]
  features?: string[]; // Key features delivered
  challenge?: string; // What was the problem
  solution?: string; // What you built
  timeline?: string; // "6 weeks"

  // Video-specific fields
  videoUrl?: string; // Path to video file or embed URL
  duration?: string; // "0:30"
  adFormat?: string; // "Facebook Feed 1:1" or "Instagram Story 9:16"
  adObjective?: string; // "Lead Generation" or "Brand Awareness"

  // Optional fields
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[]; // For when you have data later
}

export const portfolioProjects: PortfolioProject[] = [
  // WEBSITES
  {
    slug: 'my-village-peds',
    title: 'Village Pediatrics of St. Augustine',
    client: 'Village Pediatrics of St. Augustine',
    industry: 'Healthcare - Pediatrics',
    type: 'website',
    category: {
      name: 'Websites',
      slug: 'websites'
    },
    featured: true,
    date: 'Q4 2024',
    thumbnail: '/images/my-village-peds-desktop.png',
    heroImage: '/images/my-village-peds-desktop.png',
    desktopImage: '/images/my-village-peds-desktop.png',
    tabletImage: '/images/my-village-peds-tablet.png',
    mobileImage: '/images/my-village-peds-mobile.png',
    liveUrl: 'https://www.myvillagepeds.com/',
    services: ['Web Design', 'Development', 'SEO', 'Branding', 'Custom Animations', 'Patient Portal Integration', 'Mobile App Integration', 'Schema Markup', 'Google Analytics Setup', 'Maps Integration'],
    techStack: ['Custom HTML/CSS/JavaScript', 'Tailwind CSS', 'Privia Medical Group Integration', 'Google Analytics', 'Mobile-First Design', 'Schema.org Structured Data', 'Intersection Observer API'],
    features: [
      'Mobile-responsive design optimized for parents on-the-go',
      'Online appointment booking system',
      'Patient portal integration',
      'Service information and provider bios',
      'Insurance and forms section',
      'Blog for parenting tips and health information',
      'Fast loading speed for better user experience',
      'HIPAA-compliant contact forms'
    ],
    timeline: '8 weeks'
  },
  {
    slug: 'professional-services-website',
    title: 'Professional Services Website',
    client: 'Atlanta Professional Services',
    description: 'Corporate website for professional services firm with lead generation focus.',
    industry: 'Professional Services',
    type: 'website',
    category: {
      name: 'Websites',
      slug: 'websites'
    },
    featured: true,
    date: 'Q4 2024',
    thumbnail: '/portfolio/professional-thumb.jpg',
    heroImage: '/portfolio/professional-hero.jpg',
    desktopImage: '/portfolio/professional-desktop.jpg',
    tabletImage: '/portfolio/professional-tablet.jpg',
    mobileImage: '/portfolio/professional-mobile.jpg',
    images: [
      '/portfolio/professional-1.jpg',
      '/portfolio/professional-2.jpg'
    ],
    liveUrl: '', // Add if available
    services: ['Web Design', 'Development', 'Lead Generation'],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Google Analytics'],
    features: [
      'Professional, corporate design',
      'Service pages with detailed information',
      'Team member profiles',
      'Blog integration',
      'Multi-step contact form',
      'CRM integration',
      'Fast page performance',
      'Mobile-optimized'
    ],
    challenge: 'Client needed a professional website that would generate qualified leads and establish credibility in their industry.',
    solution: 'Designed and developed a clean, professional website with strategic lead capture forms, clear service descriptions, and trust-building elements like team profiles and case studies.',
    timeline: '5 weeks'
  },

  // VIDEO ADS - Add your actual videos here
  {
    slug: 'dental-testimonial-ad',
    title: 'Dental Patient Testimonial',
    client: 'Atlanta Dental Practice',
    description: 'Authentic patient testimonial highlighting treatment results and care quality.',
    industry: 'Healthcare - Dental',
    type: 'video-ad',
    category: {
      name: 'Video Ads',
      slug: 'video-ads'
    },
    featured: true,
    date: 'January 2025',
    thumbnail: '/portfolio/videos/dental-thumb.jpg',
    videoUrl: '/portfolio/videos/dental-testimonial.mp4',
    duration: '0:30',
    adFormat: 'Facebook Feed (1:1)',
    adObjective: 'Lead Generation'
  },
  {
    slug: 'restaurant-promo-ad',
    title: 'Restaurant Menu Showcase',
    client: 'Local Restaurant',
    description: 'Appetizing video showcasing signature dishes and dining atmosphere.',
    industry: 'Restaurant',
    type: 'video-ad',
    category: {
      name: 'Video Ads',
      slug: 'video-ads'
    },
    featured: false,
    date: 'December 2024',
    thumbnail: '/portfolio/videos/restaurant-thumb.jpg',
    videoUrl: '/portfolio/videos/restaurant-promo.mp4',
    duration: '0:15',
    adFormat: 'Instagram Story (9:16)',
    adObjective: 'Brand Awareness'
  },
  // Add more video ads as needed...
];

// Helper functions
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

export function getProjectsByCategory(categorySlug: 'websites' | 'video-ads'): PortfolioProject[] {
  return portfolioProjects.filter(project => project.category.slug === categorySlug);
}

export function getWebsiteProjects(): PortfolioProject[] {
  return portfolioProjects.filter(project => project.type === 'website');
}

export function getVideoAdProjects(): PortfolioProject[] {
  return portfolioProjects.filter(project => project.type === 'video-ad');
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter(project => project.featured);
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const categoryMap = new Map<string, { name: string; count: number }>();

  portfolioProjects.forEach(project => {
    const existing = categoryMap.get(project.category.slug);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(project.category.slug, {
        name: project.category.name,
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

// Schema markup generator for portfolio projects
export function generateProjectSchema(project: PortfolioProject) {
  if (project.type === 'website') {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "creator": {
        "@type": "Organization",
        "name": "Drive Lead Media"
      },
      "dateCreated": project.date,
      "image": project.heroImage ? `https://driveleadmedia.com${project.heroImage}` : undefined,
      "url": project.liveUrl || `https://driveleadmedia.com/portfolio/${project.slug}`
    };
  } else {
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": project.title,
      "description": project.description,
      "uploadDate": project.date,
      "thumbnailUrl": `https://driveleadmedia.com${project.thumbnail}`,
      "duration": project.duration,
      "creator": {
        "@type": "Organization",
        "name": "Drive Lead Media"
      }
    };
  }
}
