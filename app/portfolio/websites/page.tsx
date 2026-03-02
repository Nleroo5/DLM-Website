'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getWebsiteProjects } from '@/lib/portfolio-projects';
import WebsiteCard from '@/components/portfolio/WebsiteCard';
import { trackEvent } from '@/components/MetaPixel';

export default function WebsitesPortfolioPage() {
  const websites = getWebsiteProjects();

  useEffect(() => {
    // Track ViewContent for portfolio page
    trackEvent('ViewContent', {
      content_name: 'Website Portfolio',
      content_type: 'portfolio',
      content_category: 'Websites'
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/portfolio"
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors text-sm font-heading font-semibold tracking-wide"
              >
                ← Back to Portfolio
              </Link>
            </div>

            <h1 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white mb-6 leading-[1.1]">
              Website Projects
            </h1>
            <p className="font-body text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] max-w-[800px] leading-relaxed text-gray-300">
              Professional websites built from scratch designed for speed, SEO, and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          {websites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {websites.map((project) => (
                <WebsiteCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="font-body text-white opacity-60 text-lg">
                New projects coming soon...
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto bg-[#000000] rounded-[32px] border-2 border-[#5FA99F]/30 p-8 sm:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500"
        >
          <h2 className="font-heading text-[1.5rem] sm:text-[2rem] font-bold text-white mb-4 leading-tight">
            Need a Website Like These?
          </h2>
          <p className="font-body text-gray-300 text-[1rem] mb-8 leading-relaxed max-w-[600px] mx-auto">
            Let's build a custom website that drives results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-transparent text-white px-8 py-3 text-sm rounded-lg font-heading font-semibold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
