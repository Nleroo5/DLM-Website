'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NicolasLerooPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nicolas Leroo",
    "jobTitle": "Co-Founder & Meta Advertising Strategist",
    "url": "https://driveleadmedia.com/about/nicolas-leroo",
    "image": "https://driveleadmedia.com/images/nicolas.png",
    "worksFor": {
      "@type": "Organization",
      "name": "Drive Lead Media",
      "url": "https://driveleadmedia.com"
    },
    "knowsAbout": [
      "Meta Advertising",
      "Facebook Advertising",
      "Instagram Advertising",
      "Custom Website Design",
      "Landing Page Optimization",
      "Healthcare Marketing",
      "Local Business Marketing",
      "Conversion Optimization"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/drive-lead-media"
    ]
  };

  const blogPosts = [
    {
      slug: 'how-much-do-facebook-ads-cost-atlanta',
      title: 'How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)',
      date: 'September 2025',
      category: 'Meta Ads Pricing',
    },
    {
      slug: 'why-meta-ads-need-landing-pages',
      title: 'Why Your Meta Ads Need a Dedicated Landing Page',
      date: 'October 2025',
      category: 'Conversion Optimization',
    },
    {
      slug: 'meta-ads-target-audience-guide',
      title: 'Meta Ads Target Audience Guide',
      date: 'October 2025',
      category: 'Targeting Strategy',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1D2E] text-[#F8F6F3]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left: Photo */}
            <div className="order-2 md:order-1">
              <div className="relative w-full max-w-[400px] mx-auto aspect-square rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/nicolas.png"
                  alt="Nicolas Leroo - Meta Advertising Strategist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Name & Title */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-normal leading-tight mb-4">
                Nicolas Leroo
              </h1>
              <p className="text-[#D4A574] text-[1.25rem] sm:text-[1.375rem] font-medium mb-6">
                Co-Founder & Meta Advertising Strategist
              </p>
              <p className="text-[#5FA99F] text-[1rem] sm:text-[1.125rem] leading-relaxed italic">
                Meta advertising + custom website design for Atlanta healthcare and service businesses
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#F8F6F3] text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              I'm Nicolas Leroo, Co-Founder of Drive Lead Media and a Meta Blueprint Certified advertising strategist specializing in Facebook and Instagram campaigns for healthcare practices and local service businesses in Atlanta.
            </p>
            <p className="text-[#F8F6F3] text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              What sets my approach apart is combining Meta advertising expertise with custom website design and development. While many agencies focus only on ad management, I build the complete system from strategic campaigns to optimized landing pages to conversion tracking ensuring every element works together to turn ad spend into customers.
            </p>
            <p className="text-[#F8F6F3] text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              I work with a small roster of clients where I can personally oversee every campaign detail. This means data driven targeting tailored to your business goals, custom website development built for conversions, and continuous optimization to improve results over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.25rem] font-normal mb-6 text-center">
              Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-[#F8F6F3] text-[1rem] sm:text-[1.0625rem]">Meta Blueprint Certified</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-[#F8F6F3] text-[1rem] sm:text-[1.0625rem]">Custom Website Design & Development</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-[#F8F6F3] text-[1rem] sm:text-[1.0625rem]">Landing Page Optimization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Published Articles Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.25rem] font-normal mb-8 text-center">
              Published Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] p-6 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-block bg-[rgba(212,165,116,0.2)] text-[#D4A574] px-3 py-1 rounded-full text-[0.8125rem] font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-[#F8F6F3] font-serif text-[1.125rem] sm:text-[1.25rem] font-normal leading-tight mb-3 group-hover:text-[#5FA99F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#D4A574] text-[0.875rem]">{post.date}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-[80px] sm:pb-[100px] lg:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[#5FA99F] to-[#4A8B82] rounded-[24px] p-8 sm:p-10 text-center"
          >
            <h2 className="text-[#0B1D2E] font-serif text-[1.75rem] sm:text-[2rem] font-normal mb-4">
              Let's Work Together
            </h2>
            <p className="text-[#0B1D2E] opacity-90 text-[1rem] sm:text-[1.1rem] mb-6 leading-relaxed">
              Ready to build a complete Meta advertising system for your business? Let's discuss your goals and create a strategy that works.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0B1D2E] text-[#F8F6F3] px-8 py-4 text-[1rem] rounded-xl font-medium hover:bg-[#162E42] transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
