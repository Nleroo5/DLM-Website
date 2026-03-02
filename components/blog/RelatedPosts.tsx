'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';

interface RelatedPostsProps {
  currentSlug: string;
  category?: string;
  limit?: number;
}

export default function RelatedPosts({ currentSlug, category, limit = 3 }: RelatedPostsProps) {
  // Get related posts by category, exclude current post
  const getRelatedPosts = (): BlogPost[] => {
    let posts = blogPosts.filter(post => post.slug !== currentSlug);

    // If category is provided, prioritize posts from same category
    if (category) {
      const sameCategoryPosts = posts.filter(post => post.category.slug === category);
      const otherPosts = posts.filter(post => post.category.slug !== category);

      // Mix: prioritize same category, but include others if needed
      posts = [...sameCategoryPosts, ...otherPosts];
    }

    return posts.slice(0, limit);
  };

  const relatedPosts = getRelatedPosts();

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 mb-8">
      <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-8">
        Continue Learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/20 rounded-lg overflow-hidden hover:border-[#5FA99F]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,169,159,0.3)]"
          >
            {/* Image */}
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded text-xs font-semibold">
                  {post.category.name}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#5FA99F] transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 font-body text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-2 text-gray-500 font-body text-xs">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
