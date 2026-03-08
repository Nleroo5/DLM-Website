'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#5FA99F] text-sm font-heading uppercase tracking-widest mb-4 block">
              Real Results
            </span>
            <h1 className="text-white font-heading text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-bold leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-[#85C7B3] font-body text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[800px] mx-auto leading-relaxed">
              See how we help local businesses grow with custom websites, Meta ads, and scroll-stopping creative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Cards */}
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
              <Link href="/case-studies/websites">
                <div className="group relative h-full min-h-[400px] sm:min-h-[500px] bg-[rgba(95,169,159,0.05)] border-2 border-[rgba(95,169,159,0.2)] rounded-[24px] p-8 sm:p-10 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(95,169,159,0.2)] overflow-hidden">
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

                    {/* Title */}
                    <h2 className="text-white font-heading text-[2rem] sm:text-[2.5rem] font-semibold mb-6 group-hover:text-[#5FA99F] transition-colors">
                      Websites
                    </h2>

                    {/* Description */}
                    <p className="text-[#85C7B3] font-body text-[1rem] sm:text-[1.125rem] leading-relaxed mb-8 flex-grow">
                      Custom websites designed to convert visitors into customers. Built for speed, SEO, and results.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-[#5FA99F] font-ui font-medium text-lg group-hover:text-white transition-colors">
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
              <Link href="/case-studies/video-ads">
                <div className="group relative h-full min-h-[400px] sm:min-h-[500px] bg-[rgba(95,169,159,0.05)] border-2 border-[rgba(95,169,159,0.2)] rounded-[24px] p-8 sm:p-10 hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(95,169,159,0.2)] overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                      <pattern id="video-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="#5FA99F" />
                      </pattern>
                      <rect width="100" height="100" fill="url(#video-pattern)" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[rgba(95,169,159,0.15)] border border-[#5FA99F] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-heading text-[2rem] sm:text-[2.5rem] font-semibold mb-6 group-hover:text-[#5FA99F] transition-colors">
                      Video Ads
                    </h2>

                    {/* Description */}
                    <p className="text-[#85C7B3] font-body text-[1rem] sm:text-[1.125rem] leading-relaxed mb-8 flex-grow">
                      Meta advertising creative for Facebook and Instagram. Scroll-stopping video content designed to capture attention and drive leads.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-[#5FA99F] font-ui font-medium text-lg group-hover:text-white transition-colors">
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
          className="max-w-[800px] mx-auto bg-[rgba(95,169,159,0.05)] border-2 border-[#5FA99F] rounded-[24px] p-8 sm:p-12 text-center"
        >
          <h2 className="text-white font-heading text-[2rem] sm:text-[2.5rem] font-semibold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-[#85C7B3] font-body text-[1.125rem] mb-6 leading-relaxed">
            Book a free strategy call and let&apos;s map out how to grow your business.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#5FA99F] text-white font-heading px-8 py-4 text-[1.125rem] rounded-full font-semibold hover:bg-[#4E8B82] hover:shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-300 hover:scale-105"
          >
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
