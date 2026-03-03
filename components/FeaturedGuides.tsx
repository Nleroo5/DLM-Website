'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const guides = [
  {
    title: 'How to Set Up Facebook Pixel',
    description: 'Complete 2025 guide with 23 screenshots covering WordPress, Shopify, and GTM installation methods.',
    href: '/blog/how-to-set-up-facebook-pixel',
    readTime: '12 min read',
    category: 'Setup Guide'
  },
  {
    title: 'Facebook Ads Atlanta Guide',
    description: 'Complete guide to running successful Facebook ad campaigns for Atlanta businesses in 2025.',
    href: '/blog/facebook-ads-atlanta-guide',
    readTime: '15 min read',
    category: 'Local Marketing'
  },
  {
    title: 'How to Create Facebook Ads',
    description: 'Step-by-step tutorial for creating high-converting Facebook ads from scratch.',
    href: '/blog/how-to-create-facebook-ads',
    readTime: '18 min read',
    category: 'Tutorial'
  },
  {
    title: 'Meta Ads Target Audience Guide',
    description: 'Master Facebook audience targeting with our comprehensive guide to reaching your ideal customers.',
    href: '/blog/meta-ads-target-audience-guide',
    readTime: '14 min read',
    category: 'Strategy'
  }
];

export default function FeaturedGuides() {
  return (
    <section className="relative py-[80px] px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[60px]"
        >
          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-white mb-4">
            Expert Meta Ads Guides
          </h2>
          <p className="font-body text-gray-300 text-lg max-w-[700px] mx-auto">
            Learn from our comprehensive guides covering everything from Facebook Pixel setup to advanced targeting strategies.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.href}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <Link href={guide.href}>
                <div className="group relative h-full bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[#f2a921]/30 rounded-[20px] p-6 sm:p-8 hover:border-[#f2a921] transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,169,33,0.3)]">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-sm font-body mb-4">
                    {guide.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] font-bold text-white mb-3 group-hover:text-[#5FA99F] transition-colors">
                    {guide.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-gray-300 mb-4 leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Read Time & Arrow */}
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-gray-400">
                      {guide.readTime}
                    </span>
                    <span className="text-[#5FA99F] group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Blog Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-block font-body text-[#f2a921] text-lg hover:text-[#ffc04d] transition-colors"
          >
            View All Guides →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
