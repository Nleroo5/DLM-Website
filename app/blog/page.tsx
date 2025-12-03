'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function BlogPage() {
  return (
    <main className="blog-page min-h-screen bg-[#000000] text-white relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-white font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight mb-4 sm:mb-6">
            Meta Advertising Insights
          </h1>
          <p className="text-gray-300 font-body text-[1.0625rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[700px] mx-auto leading-relaxed">
            Expert strategies, real data, and actionable tips for Facebook & Instagram advertising
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="group bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_30px_rgba(95,169,159,0.2)] transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Category Badge */}
                <Link
                  href={`/blog/category/${post.category.slug}`}
                  className="inline-block mb-3 px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase bg-[rgba(95,169,159,0.15)] text-[#5FA99F] rounded-lg hover:bg-[rgba(95,169,159,0.25)] transition-colors border border-[rgba(95,169,159,0.3)]"
                >
                  {post.category.name}
                </Link>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-white font-heading text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-snug mb-4 sm:mb-5 group-hover:text-[#5FA99F] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 text-[0.875rem] sm:text-[0.9375rem] text-gray-400 font-body">
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
      <section className="relative pb-[60px] sm:pb-[80px] lg:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500">
          <h2 className="text-white font-heading text-[1.75rem] sm:text-[2rem] font-semibold mb-3 sm:mb-4">
            Get Meta Ads Insights Delivered
          </h2>
          <p className="text-gray-300 font-body text-[1rem] sm:text-[1.1rem] mb-5 sm:mb-6 leading-relaxed">
            New blog posts, case studies, and Meta advertising tips sent to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-6 sm:px-8 py-3 sm:py-4 text-[0.9375rem] sm:text-[1rem] rounded-xl font-heading font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)] hover:shadow-[0_0_40px_rgba(95,169,159,0.6)]"
          >
            Stay Updated
          </Link>
        </div>
      </section>
    </main>
  );
}
