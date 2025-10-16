import type { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Targeted Ads Infographic - Free Download | Drive Lead Media',
  description: 'Download our free one-page infographic guide to Meta Targeted Ads. Learn how to reach your ideal customers with precision advertising.',
};

export default function TargetedAdsInfographic() {
  return (
    <main className="min-h-screen pt-[120px] pb-[80px] px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Back Button */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300 mb-8 font-serif text-[0.95rem]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Resources
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="font-serif text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-[#EEF4D9] mb-6 leading-[1.1] break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meta Targeted Ads Infographic
          </motion.h1>
          <motion.p
            className="text-[#85C7B3] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-serif leading-[1.6] max-w-[700px] mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A comprehensive one-page visual guide to understanding how Meta Targeted Ads can transform your business. Perfect for printing or saving for reference.
          </motion.p>
        </div>

        {/* Main Content Card */}
        <motion.div
          className="bg-[rgba(238,244,217,0.08)] backdrop-blur-[15px] border-2 border-[#85C7B3] rounded-[25px] p-[30px] sm:p-[40px] md:p-[50px] shadow-[0_20px_60px_rgba(1,46,64,0.4)] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Preview Section */}
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-br from-[rgba(242,169,34,0.15)] to-[rgba(5,144,140,0.15)] border-2 border-[rgba(242,169,34,0.3)] rounded-[20px] p-8 mb-8">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-[#F2A922] mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-semibold text-[#EEF4D9] mb-4">
              What's Inside
            </h2>
            <div className="text-left max-w-[600px] mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F2A922] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] font-serif leading-[1.6]">
                  Visual breakdown of how Meta Targeted Ads work
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F2A922] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] font-serif leading-[1.6]">
                  Key benefits vs traditional advertising methods
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F2A922] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] font-serif leading-[1.6]">
                  Step-by-step process from strategy to results
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F2A922] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] font-serif leading-[1.6]">
                  Real-world examples and success metrics
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <a
              href="/downloads/targeted-ads-infographic.pdf"
              download="DLM-Targeted-Ads-Infographic.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-br from-[#F2A922] to-[#EEF4D9] text-[#012E40] px-8 py-4 md:px-10 md:py-5 rounded-xl text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-bold font-serif border-2 border-transparent transition-all duration-300 shadow-[0_8px_25px_rgba(242,169,34,0.3)] hover:transform hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(242,169,34,0.5)] focus:outline focus:outline-[3px] focus:outline-[rgba(242,169,34,0.5)] focus:outline-offset-2 no-underline"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Free Infographic (PDF)
            </a>
            <p className="text-[#85C7B3] text-[0.85rem] sm:text-[0.9rem] font-serif mt-4">
              PDF Format • 8.5" x 14" • Ready to Print
            </p>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#85C7B3] text-[0.95rem] sm:text-[1rem] font-serif leading-[1.6] mb-6">
            Have questions about implementing Meta Targeted Ads for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#F2A922] hover:text-[#EEF4D9] transition-colors duration-300 font-serif text-[1rem] sm:text-[1.05rem] font-semibold underline underline-offset-4 hover:underline-offset-8"
          >
            Schedule a Free Strategy Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
