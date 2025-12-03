'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Listen for hero video end event on home page
  useEffect(() => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';

    if (isHomePage) {
      const handleHeroVideoEnd = () => {
        setShowNav(true);
      };

      window.addEventListener('heroVideoEnded', handleHeroVideoEnd);
      return () => window.removeEventListener('heroVideoEnded', handleHeroVideoEnd);
    } else {
      // Show nav immediately on non-home pages
      setShowNav(true);
    }
  }, []);

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
      className="absolute top-0 left-0 right-0 z-[999] bg-transparent"
    >
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-10"
          >
            <div className="flex items-center justify-end h-[70px] xs:h-[80px] sm:h-[90px]">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/services"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/portfolio"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/blog"
              className="font-ui text-[1rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 relative group font-medium"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
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
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
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
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#5FA99F] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="font-ui text-[1rem] px-8 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border-white/80 transition-all duration-400 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-7 h-0.5 bg-[#2A2A2A] transition-all duration-400 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-[#2A2A2A] transition-all duration-400 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-[#2A2A2A] transition-all duration-400 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showNav && isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-white backdrop-blur-lg border-t border-gray-200"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-6 py-8 space-y-5">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
              >
                Portfolio
              </Link>

              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
              >
                Blog
              </Link>

              {/* Mobile Resources Section */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="w-full flex items-center justify-between font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
                >
                  Resources
                  <svg
                    className={`w-5 h-5 transition-transform duration-400 ${
                      isResourcesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-5 mt-2"
                    >
                      <Link
                        href="/targeted-ads"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-[#5FA99F] hover:text-[#4E8B82] transition-colors duration-400 py-2"
                      >
                        Intro to Targeted Ads
                      </Link>
                      <Link
                        href="/resources/meta-ads-calculator"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-[#5FA99F] hover:text-[#4E8B82] transition-colors duration-400 py-2"
                      >
                        Meta Ads Calculator
                      </Link>
                      <Link
                        href="/resources/targeted-ads-infographic"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-ui text-[1rem] text-[#5FA99F] hover:text-[#4E8B82] transition-colors duration-400 py-2"
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
                className="block font-ui text-[1.125rem] text-[#5FA99F] hover:text-[#4a8a81] transition-colors duration-400 py-2 font-medium"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center font-ui text-[1rem] px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:border-white/80 transition-all duration-400 mt-6 backdrop-blur-sm"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
