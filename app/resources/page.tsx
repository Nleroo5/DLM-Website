'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-[100px] pb-[80px] px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[#F8F6F3] font-serif text-[3rem] sm:text-[3.5rem] lg:text-[4rem] mb-6 font-normal leading-[1.2] tracking-tight">
            Free Resources
          </h1>
          <p className="text-[#D4A574] text-[1.2rem] sm:text-[1.3rem] font-[family-name:var(--font-inter)] max-w-[800px] mx-auto leading-relaxed">
            Everything you need to master Meta advertising and grow your local business.
          </p>
        </motion.div>

        {/* Featured Resource */}
        <motion.div
          className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border-2 border-[rgba(212,165,116,0.3)] rounded-[32px] p-12 mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[rgba(212,165,116,0.2)] border border-[#D4A574] rounded-full px-4 py-2 mb-6">
                <span className="text-[#D4A574] text-[0.9rem] font-bold uppercase tracking-wider">
                  Featured Guide
                </span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[2.5rem] mb-4 font-normal leading-[1.2]">
                The Small Business Guide to Meta Targeting
              </h2>
              <p className="text-[#F8F6F3] text-[1.1rem] mb-6 opacity-90 leading-relaxed">
                Stop wasting money targeting everyone. Learn how to find your perfect customers on Facebook and Instagram with proven targeting strategies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#5FA99F] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#F8F6F3] text-[1rem]">Why targeting matters (real examples with numbers)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#5FA99F] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#F8F6F3] text-[1rem]">The 3 types of audiences (cold, warm, hot)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#5FA99F] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#F8F6F3] text-[1rem]">Step-by-step audience building framework</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#5FA99F] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#F8F6F3] text-[1rem]">Quick reference template to copy</span>
                </li>
              </ul>
              <Link
                href="/resources/meta-targeting-guide"
                className="inline-block bg-gradient-to-r from-[#D4A574] to-[#C89860] text-[#0B1D2E] px-8 py-4 rounded-xl text-[1.1rem] font-bold font-serif shadow-lg hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Read the Guide
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#D4A574] to-[#C89860] rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-[#0B1D2E] rounded-xl p-8 text-center">
                  <div className="text-[#F8F6F3] font-serif text-[4rem] font-bold mb-2">3</div>
                  <div className="text-[#D4A574] text-[1.3rem] font-bold mb-4">SECTIONS</div>
                  <div className="text-[#F8F6F3] text-[1rem] opacity-80 mb-2">Entry-Level Content</div>
                  <div className="text-[#F8F6F3] text-[1rem] opacity-80">Easy to Understand</div>
                  <div className="mt-6 pt-6 border-t border-[rgba(212,165,116,0.3)]">
                    <div className="text-[#5FA99F] text-[0.9rem] font-bold">100% FREE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Blog Coming Soon */}
          <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 hover:border-[rgba(212,165,116,0.5)] transition-all duration-300 hover:transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-[#F8F6F3] font-serif text-[1.5rem] mb-3">Blog & Articles</h3>
            <p className="text-[#F8F6F3] opacity-80 text-[0.95rem] mb-6">
              In-depth guides, case studies, and Meta advertising insights.
            </p>
            <div className="inline-block bg-[rgba(212,165,116,0.2)] border border-[#D4A574] rounded-full px-4 py-2">
              <span className="text-[#D4A574] text-[0.85rem] font-bold">Coming Soon</span>
            </div>
          </div>

          {/* Case Studies */}
          <Link href="/portfolio" className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 hover:border-[rgba(212,165,116,0.5)] transition-all duration-300 hover:transform hover:-translate-y-2 block">
            <div className="w-12 h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-[#F8F6F3] font-serif text-[1.5rem] mb-3">Our Work</h3>
            <p className="text-[#F8F6F3] opacity-80 text-[0.95rem] mb-6">
              Real results from real clients. See our portfolio of Meta ads and campaigns.
            </p>
            <span className="text-[#D4A574] text-[0.95rem] font-bold">View Portfolio</span>
          </Link>

          {/* Free Strategy Call */}
          <Link href="/contact" className="bg-gradient-to-br from-[#D4A574] to-[#C89860] rounded-[24px] p-8 hover:shadow-[0_20px_60px_rgba(212,165,116,0.4)] transition-all duration-300 hover:transform hover:-translate-y-2 block">
            <div className="w-12 h-12 bg-[rgba(11,29,46,0.2)] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#0B1D2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-[#0B1D2E] font-serif text-[1.5rem] mb-3">Free Strategy Call</h3>
            <p className="text-[#0B1D2E] opacity-90 text-[0.95rem] mb-6">
              Get a personalized Meta ads strategy for your business. No pressure, just insights.
            </p>
            <span className="text-[#0B1D2E] text-[0.95rem] font-bold">Book Your Call</span>
          </Link>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-[#F8F6F3] font-serif text-[2.5rem] mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-[#D4A574] text-[1.2rem] mb-8 max-w-[600px] mx-auto">
            Read the guide, learn the strategies, then let's talk about implementing them for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#4A8A80] text-[#F8F6F3] px-10 py-5 rounded-xl text-[1.2rem] font-bold font-serif shadow-lg hover:shadow-[0_8px_30px_rgba(95,169,159,0.4)] transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
