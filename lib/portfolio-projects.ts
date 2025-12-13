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
    thumbnail: '/images/atlanta-pediatric-website-design-healthcare-patient-portal.webp',
    heroImage: '/images/atlanta-pediatric-website-design-healthcare-patient-portal.webp',
    desktopImage: '/images/atlanta-pediatric-website-design-healthcare-patient-portal.webp',
    tabletImage: '/images/atlanta-pediatric-website-tablet-responsive-design.webp',
    mobileImage: '/images/atlanta-pediatric-website-mobile-healthcare-app.webp',
    videoUrl: '/Videos/atlanta-pediatric-website-design-video-showcase-demo.mp4',
    liveUrl: 'https://www.myvillagepeds.com/',
    services: ['Web Design', 'Development', 'SEO', 'Branding', 'Custom Animations', 'Patient Portal Integration', 'Mobile App Integration', 'Schema Markup', 'Google Analytics Setup', 'Maps Integration'],
    techStack: ['Custom HTML/CSS/JavaScript', 'Tailwind CSS', 'Privia Medical Group Integration', 'Google Analytics', 'Mobile-First Design', 'Schema.org Structured Data', 'Intersection Observer API', 'Drone Video Production'],
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
    slug: 'southern-tents-events',
    title: 'Southern Tents & Events',
    client: 'Southern Tents & Events',
    industry: 'Event Services',
    type: 'website',
    category: {
      name: 'Websites',
      slug: 'websites'
    },
    featured: true,
    date: 'Q4 2024',
    thumbnail: '/images/atlanta-event-rental-website-tent-equipment-services.webp',
    liveUrl: 'https://southerntentsandevents.com/',
    description: 'Professional event rental website showcasing tents, equipment, and services for weddings and special events.',
    services: ['Web Design', 'Development', 'SEO'],
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    timeline: '6 weeks'
  },
  {
    slug: 'setlife-casting',
    title: 'SetLife Casting',
    client: 'SetLife Casting',
    industry: 'Entertainment - Casting',
    type: 'website',
    category: {
      name: 'Websites',
      slug: 'websites'
    },
    featured: true,
    date: 'Q4 2024',
    thumbnail: '/images/professional-landing-page-design-conversion-optimization.webp',
    videoUrl: '/Videos/atlanta-casting-agency-website-entertainment-portfolio.mp4',
    liveUrl: 'https://www.setlifecasting.com/',
    description: 'Modern casting agency website connecting talent with production opportunities.',
    services: ['Web Design', 'Development', 'Branding'],
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    timeline: '6 weeks'
  },
  {
    slug: 'marietta-antique-mall',
    title: 'Marietta Antique Mall',
    client: 'Marietta Antique Mall',
    industry: 'Retail - Antiques',
    type: 'website',
    category: {
      name: 'Websites',
      slug: 'websites'
    },
    featured: true,
    date: 'Q4 2024',
    thumbnail: '/images/marietta-antique-mall-website-vendor-booth-directory.webp',
    videoUrl: '/Videos/marietta-antique-mall-website-video-tour-showcase.webm',
    liveUrl: 'https://www.mariettaantiquemall.com/',
    description: 'Professional antique mall website showcasing vendors, booth information, and mall hours.',
    services: ['Web Design', 'Development', 'SEO'],
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    timeline: '6 weeks'
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
