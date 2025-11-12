import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      slug: 'how-much-do-facebook-ads-cost-atlanta',
      title: 'How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)',
      excerpt: 'Facebook ads in Atlanta cost $0.90-$3.50 per click. Complete 2025 pricing guide with industry breakdowns, budget recommendations & free ROI calculator.',
      date: 'September 2025',
      readTime: '14 min read',
      category: 'Meta Ads Pricing',
      author: 'Nicolas Leroo',
    },
    {
      slug: 'why-meta-ads-need-landing-pages',
      title: 'Why Your Meta Ads Need a Dedicated Landing Page',
      excerpt: 'Learn how dedicated landing pages can 2-3x your Meta ads conversion rates. Expert guide covering the 5 essential elements and ROI optimization.',
      date: 'October 2025',
      readTime: '8 min read',
      category: 'Conversion Optimization',
      author: 'Nicolas Leroo',
    },
    {
      slug: 'meta-ads-target-audience-guide',
      title: 'Meta Ads Target Audience Guide',
      excerpt: 'Stop wasting money targeting everyone. Master cold, warm, and hot audience strategies to find your perfect customers on Facebook & Instagram.',
      date: 'October 2025',
      readTime: '10 min read',
      category: 'Targeting Strategy',
      author: 'Nicolas Leroo',
    },
  ];

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
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Tag */}
                <div className="inline-block bg-[rgba(212,165,116,0.2)] text-[#D4A574] px-3 py-1 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium mb-3 sm:mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h2 className="text-[#F8F6F3] font-serif text-[1.375rem] sm:text-[1.5rem] font-normal leading-tight mb-3 group-hover:text-[#5FA99F] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-[#F8F6F3] opacity-80 text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-2 text-[0.8125rem] sm:text-[0.875rem] text-[#D4A574]">
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-[rgba(95,169,159,0.2)]">
                  <p className="text-[0.8125rem] sm:text-[0.875rem] text-[#F8F6F3] opacity-70">
                    By {post.author}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA (Optional) */}
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
