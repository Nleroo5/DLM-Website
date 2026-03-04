import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Professional image optimization configuration
  images: {
    // Automatic format conversion (WebP for modern browsers, AVIF for newest browsers)
    formats: ['image/avif', 'image/webp'],

    // Responsive image sizes for different devices
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Icon and thumbnail sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images for 60 days (5,184,000 seconds)
    minimumCacheTTL: 5184000,

    // Allowed remote image sources
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },

  // Enable gzip/brotli compression
  compress: true,

  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/portfolio/websites',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/portfolio/video-ads',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/book-a-call',
        destination: '/book',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/book',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
