'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { getPostsByCategory, getAllCategories } from '@/lib/blog-posts';

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const posts = getPostsByCategory(slug);
  const categories = getAllCategories();
  const currentCategory = categories.find(cat => cat.slug === slug);

  if (!currentCategory || posts.length === 0) {
    return (
      <main className="min-h-screen bg-[#000000] text-white pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-heading mb-4">Category Not Found</h1>
          <Link href="/blog" className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-page min-h-screen bg-[#000000] text-white relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#5FA99F] hover:text-[#85C7B3] transition-colors mb-6"
            >
              ← All Posts
            </Link>
            <h1 className="text-white font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3.5rem] font-bold leading-tight mb-4 sm:mb-6">
              {currentCategory.name}
            </h1>
            <p className="text-gray-300 font-body text-[1.0625rem] sm:text-[1.25rem] lg:text-[1.375rem]">
              {currentCategory.count} {currentCategory.count === 1 ? 'article' : 'articles'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_30px_rgba(95,169,159,0.2)] transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-white font-heading text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-snug mb-4 sm:mb-5 group-hover:text-[#5FA99F] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-300 font-body text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[0.875rem] sm:text-[0.9375rem] text-gray-400 font-body">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="relative pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-white font-heading text-[1.75rem] sm:text-[2rem] mb-6 text-center font-semibold">
            Explore All Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-6 py-3 rounded-xl font-heading font-medium transition-all duration-300 ${
                  cat.slug === slug
                    ? 'bg-[#5FA99F] text-white'
                    : 'bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] text-white hover:border-[#5FA99F]'
                }`}
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
