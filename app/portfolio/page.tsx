'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllCategories } from '@/lib/portfolio-projects';

export default function PortfolioPage() {
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-[#0B1D2E] text-[#F8F6F3]">
      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-normal leading-tight mb-6">
              Our Portfolio
            </h1>
            <p className="text-[#D4A574] text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[800px] mx-auto leading-relaxed">
              Custom websites and Meta advertising content built for Atlanta businesses
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Websites Category */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/portfolio/websites">
                <div className="group relative h-full min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border-2 border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 sm:p-10 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <pattern id="websites-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <rect x="0" y="0" width="1" height="1" fill="#5FA99F" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#websites-pattern)" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[rgba(95,169,159,0.15)] border border-[#5FA99F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title & Count */}
                    <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] font-normal mb-4 group-hover:text-[#5FA99F] transition-colors">
                      Websites
                    </h2>

                    {categories.find(cat => cat.slug === 'websites') && (
                      <p className="text-[#D4A574] text-lg sm:text-xl font-medium mb-6">
                        {categories.find(cat => cat.slug === 'websites')?.count} Projects
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[#F8F6F3] opacity-80 text-[1rem] sm:text-[1.125rem] leading-relaxed mb-8 flex-grow">
                      Custom website design and development for local businesses. Mobile-responsive, fast-loading, and built to convert.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-[#5FA99F] font-medium text-lg group-hover:text-[#D4A574] transition-colors">
                      <span>View Website Projects</span>
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Video Ads Category */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/portfolio/video-ads">
                <div className="group relative h-full min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border-2 border-[rgba(212,165,116,0.3)] rounded-[24px] p-8 sm:p-10 hover:border-[#D4A574] transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <pattern id="video-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#D4A574" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#video-pattern)" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[rgba(212,165,116,0.15)] border border-[#D4A574] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title & Count */}
                    <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] font-normal mb-4 group-hover:text-[#D4A574] transition-colors">
                      Video Ads
                    </h2>

                    {categories.find(cat => cat.slug === 'video-ads') && (
                      <p className="text-[#5FA99F] text-lg sm:text-xl font-medium mb-6">
                        {categories.find(cat => cat.slug === 'video-ads')?.count} Videos
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[#F8F6F3] opacity-80 text-[1rem] sm:text-[1.125rem] leading-relaxed mb-8 flex-grow">
                      Meta advertising creative for Facebook and Instagram. Engaging video content designed to capture attention and drive action.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-[#D4A574] font-medium text-lg group-hover:text-[#5FA99F] transition-colors">
                      <span>View Video Portfolio</span>
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto bg-gradient-to-br from-[#5FA99F] to-[#4A8B82] rounded-[24px] p-8 sm:p-12 text-center"
        >
          <h2 className="text-[#0B1D2E] font-serif text-[2rem] sm:text-[2.5rem] font-normal mb-4">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-[#0B1D2E] opacity-90 text-[1.125rem] mb-6 leading-relaxed">
            Let's create something exceptional for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1D2E] text-[#F8F6F3] px-8 py-4 text-[1.125rem] rounded-xl font-medium hover:bg-[#162E42] transition-colors"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
