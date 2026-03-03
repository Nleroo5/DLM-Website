'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="relative bg-black pt-[40px] pb-[20px] mt-[20px] overflow-hidden"
    >
      {/* Futuristic grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#5FA99F 1px, transparent 1px), linear-gradient(90deg, #5FA99F 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5FA99F]/50 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 xs:px-5 lg:px-8 relative z-10">

        {/* MOBILE LAYOUT - Option 5: Centered Logo Top + 2-Column Grid */}
        <div className="md:hidden">
          {/* Logo - Centered at top */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/images/light-header-logo.webp"
                alt="Drive Lead Media"
                width={140}
                height={46}
                className="h-auto w-auto max-w-[140px]"
                priority
              />
            </Link>
          </motion.div>

          {/* Teal divider line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5FA99F]/30 to-transparent mb-8" />

          {/* 2-Column Grid */}
          <motion.div
            className="grid grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Left Column - Navigation */}
            <div>
              <h3 className="font-heading text-[#5FA99F] text-sm font-bold mb-4 uppercase tracking-wider"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                Navigation
              </h3>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#5FA99F] to-transparent mb-4"
                style={{
                  boxShadow: '0 0 10px rgba(95,169,159,0.4)'
                }}
              />
              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/case-studies"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  Case Studies
                </Link>
                <Link
                  href="/blog"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  Blog
                </Link>
                <Link
                  href="/resources"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  Resources
                </Link>
                <Link
                  href="/faq"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300 hover:translate-x-1"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right Column - Get In Touch */}
            <div>
              <h3 className="font-heading text-[#5FA99F] text-sm font-bold mb-4 uppercase tracking-wider"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                Get In Touch
              </h3>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#5FA99F] to-transparent mb-4"
                style={{
                  boxShadow: '0 0 10px rgba(95,169,159,0.4)'
                }}
              />
              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="tel:678-650-6411"
                  className="font-body text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  (678) 650-6411
                </a>
                <a
                  href="mailto:hello@driveleadmedia.com"
                  className="font-body text-[0.75rem] sm:text-[0.9rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-300"
                  style={{
                    textShadow: '0 0 5px rgba(95,169,159,0.2)'
                  }}
                >
                  hello@driveleadmedia.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/driveleadmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.4)] transition-all duration-300 border border-[#5FA99F]/20"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/drivelead.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.4)] transition-all duration-300 border border-[#5FA99F]/20"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/drive-lead-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.4)] transition-all duration-300 border border-[#5FA99F]/20"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Teal divider line */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#5FA99F]/30 to-transparent mb-6" />

          {/* Bottom Legal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 font-body text-[0.75rem] text-gray-400">
              <span>© {currentYear} Drive Lead Media</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-[#5FA99F] transition-colors duration-300">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#5FA99F] transition-colors duration-300">
                Terms
              </Link>
            </div>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT - Original horizontal layout */}
        <div className="hidden md:block">
          {/* Single Row: Logo + Navigation + Contact */}
          <motion.div
            className="flex flex-row items-center justify-between gap-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo Section */}
            <div className="text-left">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/images/light-header-logo.webp"
                  alt="Drive Lead Media"
                  width={120}
                  height={40}
                  className="h-auto w-auto max-w-[120px]"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-row items-center gap-6">
              <Link
                href="/"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/case-studies"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                Resources
              </Link>
              <Link
                href="/faq"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col items-end gap-2 text-right">
              <a
                href="tel:678-650-6411"
                className="font-body text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                (678) 650-6411
              </a>
              <a
                href="mailto:hello@driveleadmedia.com"
                className="font-body text-[0.8rem] sm:text-[0.95rem] text-[#85C7B3] hover:text-[#5FA99F] transition-colors duration-300"
              >
                hello@driveleadmedia.com
              </a>
            </div>
          </motion.div>

          {/* Social Icons - Centered */}
          <motion.div
            className="flex gap-4 justify-center mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://www.facebook.com/driveleadmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.3)] transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/drivelead.media"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.3)] transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/drive-lead-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[rgba(95,169,159,0.1)] rounded-full hover:bg-[rgba(95,169,159,0.2)] hover:scale-110 hover:shadow-[0_0_20px_rgba(95,169,159,0.3)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </motion.div>

          {/* Bottom Legal - Single Line */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 font-body text-[0.85rem] text-[#85C7B3]">
              <span>© {currentYear} Drive Lead Media</span>
              <span>•</span>
              <Link href="/privacy" className="hover:text-[#5FA99F] transition-colors duration-300">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-[#5FA99F] transition-colors duration-300">
                Terms
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
