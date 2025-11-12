'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function BlogPage() {
  return (
    <main className="blog-page min-h-screen bg-[#0B1D2E] text-[#F8F6F3]">
      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-normal leading-tight mb-4 sm:mb-6">
            Meta Advertising Insights
          </h1>
          <p className="text-[#D4A574] text-[1.0625rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[700px] mx-auto leading-relaxed">
            Expert strategies, real data, and actionable tips for Facebook & Instagram advertising
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="group bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Badge */}
                <Link
                  href={`/blog/category/${post.category.slug}`}
                  className="inline-block mb-3 px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[rgba(95,169,159,0.15)] text-[#5FA99F] rounded-lg hover:bg-[rgba(95,169,159,0.25)] transition-colors"
                >
                  {post.category.name}
                </Link>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-[#F8F6F3] font-serif text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] font-normal leading-snug mb-4 sm:mb-5 group-hover:text-[#5FA99F] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 text-[0.875rem] sm:text-[0.9375rem] text-[#D4A574]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>By {post.author.name}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-[60px] sm:pb-[80px] lg:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto bg-gradient-to-br from-[#5FA99F] to-[#4A8B82] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-[#0B1D2E] font-serif text-[1.75rem] sm:text-[2rem] font-normal mb-3 sm:mb-4">
            Get Meta Ads Insights Delivered
          </h2>
          <p className="text-[#0B1D2E] opacity-90 text-[1rem] sm:text-[1.1rem] mb-5 sm:mb-6 leading-relaxed">
            New blog posts, case studies, and Meta advertising tips sent to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1D2E] text-[#F8F6F3] px-6 sm:px-8 py-3 sm:py-4 text-[0.9375rem] sm:text-[1rem] rounded-xl font-medium hover:bg-[#162E42] transition-colors"
          >
            Stay Updated
          </Link>
        </div>
      </section>
    </main>
  );
}
