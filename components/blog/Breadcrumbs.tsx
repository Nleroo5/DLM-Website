'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BreadcrumbsProps {
  category: {
    name: string;
    slug: string;
  };
  postTitle: string;
}

export default function Breadcrumbs({ category, postTitle }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://driveleadmedia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://driveleadmedia.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.name,
        "item": `https://driveleadmedia.com/blog/category/${category.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": postTitle
      }
    ]
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumbs */}
      <motion.nav
        aria-label="Breadcrumb"
        className="bg-[#000000] border-b border-[#5FA99F]/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <Link
                href="/blog"
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li>
              <Link
                href={`/blog/category/${category.slug}`}
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors"
              >
                {category.name}
              </Link>
            </li>
            <li className="text-white/40 hidden sm:inline">/</li>
            <li className="text-white/60 truncate max-w-[200px] sm:max-w-none hidden sm:inline">
              {postTitle}
            </li>
          </ol>
        </div>
      </motion.nav>
    </>
  );
}
