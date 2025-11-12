'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getWebsiteProjects } from '@/lib/portfolio-projects';
import WebsiteCard from '@/components/portfolio/WebsiteCard';

export default function WebsitesPortfolioPage() {
  const websites = getWebsiteProjects();

  return (
    <main className="min-h-screen bg-[#0B1D2E] text-[#F8F6F3]">
      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/portfolio"
                className="text-[#5FA99F] hover:text-[#D4A574] transition-colors text-sm font-medium"
              >
                ← Back to Portfolio
              </Link>
            </div>

            <h1 className="text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-normal leading-tight mb-6">
              Website Projects
            </h1>
            <p className="text-[#D4A574] text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[800px] leading-relaxed">
              Custom website design and development for Atlanta businesses. Mobile-responsive, fast-loading, and built to convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          {websites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
              <p className="text-[#F8F6F3] opacity-60 text-lg">
                New projects coming soon...
              </p>
            </motion.div>
          )}
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
            Need a Website Like These?
          </h2>
          <p className="text-[#0B1D2E] opacity-90 text-[1.125rem] mb-6 leading-relaxed">
            Let's build a custom website that drives results for your business.
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
