/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://driveleadmedia.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Unless you have 50k+ pages
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/_next/'],
      },
      // Block AI crawlers if you don't want them training on your content
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://driveleadmedia.com/server-sitemap.xml', // For dynamic routes if needed
    ],
  },
  // Additional paths to transform/modify sitemap entries
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Blog posts
    else if (path.startsWith('/blog/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Portfolio
    else if (path.startsWith('/portfolio/')) {
      priority = 0.9;
      changefreq = 'monthly';
    }
    // Services
    else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'monthly';
    }
    // Resources
    else if (path.startsWith('/resources/')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // About/Contact
    else if (path.startsWith('/about') || path.startsWith('/contact')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
