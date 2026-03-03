'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { trackEvent } from '@/components/MetaPixel';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  useEffect(() => {
    trackEvent('ViewContent', {
      content_name: 'Contact Page',
      content_type: 'page',
      content_category: 'Contact'
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#000000] pt-[140px] pb-[80px] px-5">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-white mb-6 font-bold leading-[1.1]">
            Let&apos;s Grow Your Business
          </h1>
          <p className="text-gray-300 text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] font-body font-normal leading-relaxed max-w-[600px] mx-auto">
            Ready to see how Meta advertising can transform your business? Fill out the form below and we&apos;ll be in touch within 24 hours.
          </p>
        </motion.div>

        <ContactForm variant="page" />

        {/* Contact Info */}
        <motion.div
          className="mt-[60px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-300 font-body text-[0.95rem] sm:text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] mb-4">
            Or reach out directly:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a
              href="tel:678-650-6411"
              className="text-[#5FA99F] font-heading text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] font-bold hover:text-[#85C7B3] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (678) 650-6411
            </a>
            <a
              href="mailto:hello@driveleadmedia.com"
              className="text-[#5FA99F] font-heading text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] font-bold hover:text-[#85C7B3] transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@driveleadmedia.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
