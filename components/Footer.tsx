'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[rgba(10,25,47,0.95)] border-t border-[rgba(133,199,179,0.2)] pt-[40px] md:pt-[80px] pb-[80px] lg:pb-[40px] mt-[60px] md:mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-6 sm:mb-8 md:mb-12">
          {/* Mobile: Brand Section - Full Width */}
          <motion.div
            className="mb-6 pb-6 border-b border-[rgba(133,199,179,0.15)] md:hidden text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-[1.1rem] font-bold text-[#EEF4D9] mb-2">
              Drive Lead Media
            </h3>
            <p className="font-serif text-[0.8rem] text-[#85C7B3] leading-[1.5] mb-3">
              We Build Advertisement Systems That Bring Your Best Customers To You
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 justify-center">
              <a
                href="https://www.facebook.com/driveleadmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[rgba(238,244,217,0.1)] rounded-full hover:bg-[rgba(242,169,34,0.2)] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 text-[#EEF4D9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/drivelead.media"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[rgba(238,244,217,0.1)] rounded-full hover:bg-[rgba(242,169,34,0.2)] hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-[#EEF4D9]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Desktop: 3-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {/* Column 1: Brand + Logo + Social */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/images/dlm-logo.png"
                  alt="Drive Lead Media Logo"
                  width={140}
                  height={47}
                  className="h-auto w-auto max-w-[140px]"
                  priority
                />
              </Link>
              <p className="font-serif text-[0.95rem] text-[#85C7B3] leading-[1.7] mb-5">
                We Build Advertisement Systems That Bring Your Best Customers To You
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/driveleadmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-[rgba(238,244,217,0.1)] rounded-full hover:bg-[rgba(242,169,34,0.2)] hover:scale-110 hover:rotate-6 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-[#EEF4D9]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/drivelead.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-[rgba(238,244,217,0.1)] rounded-full hover:bg-[rgba(242,169,34,0.2)] hover:scale-110 hover:rotate-6 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-[#EEF4D9]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-serif text-[0.95rem] md:text-[1.35rem] font-bold text-[#EEF4D9] mb-3 md:mb-5 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="font-serif text-[0.8rem] md:text-[1rem] text-[#85C7B3] hover:text-[#F2A922] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="font-serif text-[0.8rem] md:text-[1rem] text-[#85C7B3] hover:text-[#F2A922] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="font-serif text-[0.8rem] md:text-[1rem] text-[#85C7B3] hover:text-[#F2A922] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </motion.div>


            {/* Column 3: Contact + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-serif text-[0.95rem] md:text-[1.35rem] font-bold text-[#EEF4D9] mb-3 md:mb-5 tracking-wide">
                Get In Touch
              </h4>
              <div className="space-y-3 md:space-y-5">
                {/* Mobile: Email Us Button */}
                <a
                  href="mailto:hello@driveleadmedia.com"
                  className="md:hidden inline-flex items-center gap-2 font-serif text-[0.85rem] px-6 py-2.5 bg-gradient-to-r from-[#85C7B3] to-[#05908C] text-[#0a192f] font-bold rounded-full hover:shadow-[0_0_25px_rgba(133,199,179,0.5)] transition-all duration-300 hover:scale-105 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Us
                </a>
                {/* Desktop: Full Email Address */}
                <a
                  href="mailto:hello@driveleadmedia.com"
                  className="hidden md:flex font-serif text-[1rem] text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300 items-center gap-2 group"
                >
                  <svg
                    className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-all">hello@driveleadmedia.com</span>
                </a>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-serif text-[0.85rem] md:text-[1.05rem] px-6 py-2.5 md:px-8 md:py-3.5 bg-gradient-to-r from-[#F2A922] to-[#85C7B3] text-[#0a192f] font-bold rounded-full hover:shadow-[0_0_25px_rgba(242,169,34,0.5)] transition-all duration-300 hover:scale-105 group"
                  >
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule a Call
                  </Link>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-block font-serif text-[0.85rem] md:text-[1rem] text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8"
                >
                  View Our Work →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 md:pt-8 border-t border-[rgba(133,199,179,0.2)] flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="font-serif text-[0.85rem] md:text-[0.95rem] text-[#85C7B3] text-center md:text-left">
              © {currentYear} Drive Lead Media. All rights reserved.
            </p>
            <span className="hidden md:inline text-[#85C7B3]">•</span>
            <p className="font-serif text-[0.85rem] md:text-[0.95rem] text-[#85C7B3]">
              Atlanta, GA
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="font-serif text-[0.85rem] text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="font-serif text-[0.85rem] text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
