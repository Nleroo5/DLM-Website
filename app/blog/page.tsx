'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/blog-posts';
import Newsletter from '@/components/Newsletter';

export default function BlogPage() {
  return (
    <main className="blog-page min-h-screen bg-[#000000] text-white relative">
      {/* Unified Background gradient orbs for entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px]" />
      </div>

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
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 hover:border-[#f2a921] hover:shadow-[0_0_30px_rgba(242,169,33,0.3)] transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                {/* Category Badge */}
                <Link
                  href={`/blog/category/${post.category.slug}`}
                  className="inline-block mb-3 px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase bg-[#5FA99F]/30 backdrop-blur-sm text-white rounded-lg hover:bg-[#5FA99F]/50 transition-all"
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
                <div className="flex flex-wrap items-center gap-2 text-[0.875rem] sm:text-[0.9375rem] text-[#f2a921] font-body">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>By {post.author.name}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <Newsletter />
    </main>
  );
}
