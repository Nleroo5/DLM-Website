'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { faqCategories, faqItems, searchFAQs, generateFAQSchema } from '@/lib/faq-data';
import { trackEvent } from '@/components/MetaPixel';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [filteredItems, setFilteredItems] = useState(faqItems);

  useEffect(() => {
    // Track page view
    trackEvent('ViewContent', {
      content_name: 'FAQ Page',
      content_type: 'page',
      content_category: 'Support'
    });

    // Check for URL hash to auto-open specific FAQ
    if (window.location.hash) {
      const itemId = window.location.hash.substring(1);
      setOpenItems(new Set([itemId]));
      setTimeout(() => {
        document.getElementById(itemId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      setFilteredItems(searchFAQs(searchQuery));
      // Auto-expand all results when searching
      setOpenItems(new Set(searchFAQs(searchQuery).map(item => item.id)));
    } else {
      setFilteredItems(faqItems);
    }
  }, [searchQuery]);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);

    // Update URL hash
    if (newOpenItems.has(id)) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const schemaData = generateFAQSchema();

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-[1.0625rem] sm:text-[1.125rem] text-gray-300 mb-10 leading-relaxed">
              Find answers to common questions about our services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-[600px] mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#0A0A0A] border-2 border-[#5FA99F]/30 rounded-[16px] text-white placeholder-gray-500 focus:outline-none focus:border-[#5FA99F] transition-colors text-[1rem]"
              />
              <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {searchQuery && (
              <p className="mt-4 text-gray-400 text-sm">
                Found {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[900px] mx-auto">
          {faqCategories.map((category, categoryIndex) => {
            const categoryItems = filteredItems.filter(item => item.category === category.id);

            if (categoryItems.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="font-heading text-[1.75rem] font-bold text-white">
                    {category.name}
                  </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {categoryItems.map((item) => {
                    const isOpen = openItems.has(item.id);

                    return (
                      <div
                        key={item.id}
                        id={item.id}
                        className={`bg-[#0A0A0A] rounded-[16px] border-2 transition-all duration-300 ${
                          isOpen
                            ? 'border-[#5FA99F]'
                            : 'border-[#5FA99F]/20 hover:border-[#5FA99F]/50'
                        }`}
                      >
                        {/* Question */}
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between gap-4 p-6 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="font-heading text-[1.125rem] font-semibold text-white leading-relaxed flex-1">
                            {item.question}
                          </span>
                          <svg
                            className={`w-6 h-6 text-[#5FA99F] transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-0">
                                <p className="font-body text-[1rem] text-gray-300 leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg mb-4">No results found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors"
              >
                Clear search
              </button>
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
          className="max-w-[700px] mx-auto bg-[#0A0A0A] rounded-[32px] border-2 border-[#5FA99F]/30 p-8 sm:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500"
        >
          <h2 className="font-heading text-[1.75rem] sm:text-[2rem] font-bold text-white mb-4 leading-tight">
            Still have questions?
          </h2>
          <p className="font-body text-gray-300 text-[1rem] mb-8 leading-relaxed">
            We're here to help. Get in touch and we'll respond as soon as possible.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-transparent text-white px-8 py-3 text-sm rounded-lg font-heading font-semibold border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
