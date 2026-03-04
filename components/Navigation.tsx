'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="absolute top-0 left-0 right-0 z-[999] bg-transparent pt-3 sm:pt-4 lg:pt-5"
    >
      <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[70px] xs:h-[80px] sm:h-[90px]">
          {/* Logo */}
          <Link href="/" aria-label="Drive Lead Media Home">
            <Image
              src="/images/logo-light.webp"
              alt="Drive Lead Media Logo"
              width={160}
              height={53}
              className="w-[120px] xs:w-[130px] sm:w-[140px] md:w-[160px] h-auto"
              priority
            />
          </Link>
          {/* Desktop Navigation - Now shows on tablets (md:) and above */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              href="/"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Home
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/case-studies"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Case Studies
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/blog"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Blog
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={isResourcesOpen}
                className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 flex items-center gap-2 relative group font-medium"
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-400 ${
                    isResourcesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-[220px] bg-white backdrop-blur-lg rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden"
                    role="menu"
                    aria-label="Resources menu"
                  >
                    <Link
                      href="/targeted-ads"
                      className="block px-5 py-3 font-ui text-[1rem] text-[#2A2A2A] hover:bg-[rgba(95,169,159,0.08)] hover:text-[#5FA99F] transition-all duration-400"
                    >
                      Intro to Targeted Ads
                    </Link>
                    <Link
                      href="/resources/meta-ads-calculator"
                      className="block px-5 py-3 font-ui text-[1rem] text-[#2A2A2A] hover:bg-[rgba(95,169,159,0.08)] hover:text-[#5FA99F] transition-all duration-400"
                    >
                      Meta Ads Calculator
                    </Link>
                    <Link
                      href="/resources/targeted-ads-infographic"
                      className="block px-5 py-3 font-ui text-[1rem] text-[#2A2A2A] hover:bg-[rgba(95,169,159,0.08)] hover:text-[#5FA99F] transition-all duration-400"
                    >
                      Download Infographic
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/faq"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              FAQ
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Contact
              <span className="hidden md:block absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/book"
              className="font-ui text-[1rem] px-8 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border-white/80 transition-all duration-400 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button - Only show on mobile, hide on tablets */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-400 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
              style={{
                boxShadow: isMobileMenuOpen ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)' : 'none'
              }}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-400 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-white transition-all duration-400 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
              style={{
                boxShadow: isMobileMenuOpen ? '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)' : 'none'
              }}
            ></span>
          </button>
            </div>
          </div>

      {/* Mobile Menu - Hidden on tablets and above */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-[#5FA99F]/50 relative overflow-hidden"
            style={{
              boxShadow: '0 8px 32px rgba(0,0,0,0.8), inset 0 1px 0 rgba(95,169,159,0.2)'
            }}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {/* Futuristic grid overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(#5FA99F 1px, transparent 1px), linear-gradient(90deg, #5FA99F 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Animated glow effect */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#5FA99F] to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5FA99F]/50 to-transparent" />
            <div className="px-6 py-8 space-y-5 relative z-10">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                <span className="relative z-10">Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
              </Link>

              <Link
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                <span className="relative z-10">Case Studies</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
              </Link>

              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                <span className="relative z-10">Blog</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
              </Link>

              {/* Mobile Resources Section */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="w-full flex items-center justify-between font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                  style={{
                    textShadow: '0 0 10px rgba(95,169,159,0.3)'
                  }}
                >
                  <span className="relative z-10">Resources</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-400 ${
                      isResourcesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      filter: 'drop-shadow(0 0 5px rgba(95,169,159,0.5))'
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-5 mt-2 space-y-1 border-l-2 border-[#5FA99F]/30 ml-2"
                    >
                      <Link
                        href="/targeted-ads"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-400 py-2 pl-3"
                        style={{
                          textShadow: '0 0 8px rgba(95,169,159,0.2)'
                        }}
                      >
                        Intro to Targeted Ads
                      </Link>
                      <Link
                        href="/resources/meta-ads-calculator"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-400 py-2 pl-3"
                        style={{
                          textShadow: '0 0 8px rgba(95,169,159,0.2)'
                        }}
                      >
                        Meta Ads Calculator
                      </Link>
                      <Link
                        href="/resources/targeted-ads-infographic"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-gray-300 hover:text-[#5FA99F] transition-all duration-400 py-2 pl-3"
                        style={{
                          textShadow: '0 0 8px rgba(95,169,159,0.2)'
                        }}
                      >
                        Download Infographic
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                <span className="relative z-10">FAQ</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-white hover:text-[#5FA99F] transition-all duration-400 py-3 font-medium relative group"
                style={{
                  textShadow: '0 0 10px rgba(95,169,159,0.3)'
                }}
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] group-hover:w-full transition-all duration-400 shadow-[0_0_10px_#5FA99F]"></span>
              </Link>

              <Link
                href="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center font-ui text-[1rem] px-8 py-4 bg-gradient-to-r from-[#5FA99F]/10 to-[#85C7B3]/10 text-white font-semibold rounded-xl border-2 border-[#5FA99F] transition-all duration-400 mt-8 relative overflow-hidden group"
                style={{
                  boxShadow: '0 0 20px rgba(95,169,159,0.4), inset 0 0 20px rgba(95,169,159,0.1)',
                  textShadow: '0 0 10px rgba(255,255,255,0.5)'
                }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5FA99F]/20 to-[#85C7B3]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Glowing border animation */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="absolute top-0 left-0 w-full h-full rounded-xl animate-pulse"
                    style={{
                      boxShadow: '0 0 30px rgba(95,169,159,0.6), inset 0 0 30px rgba(95,169,159,0.2)'
                    }}
                  />
                </div>

                <span className="relative z-10">Book a Call</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
