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
      className="fixed top-0 left-0 right-0 z-[999] bg-transparent transition-all duration-400"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[90px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center hover:opacity-80 transition-opacity duration-400"
          >
            <Image
              src="/images/dlm-logo.png"
              alt="Drive Lead Media Logo"
              width={300}
              height={95}
              className="h-[95px] w-auto md:h-[70px] sm:h-[60px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/"
              className="font-sans text-[1rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 relative group font-medium"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/portfolio"
              className="font-sans text-[1rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 relative group font-medium"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button className="font-sans text-[1rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 flex items-center gap-2 relative group font-medium">
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-400 ${
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
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all duration-400 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 w-[220px] bg-[rgba(11,29,46,0.98)] backdrop-blur-lg rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-[rgba(95,169,159,0.15)] overflow-hidden"
                  >
                    <Link
                      href="/targeted-ads"
                      className="block px-5 py-3 font-sans text-[1rem] text-[#F8F6F3] hover:bg-[rgba(212,165,116,0.08)] hover:text-[#D4A574] transition-all duration-400"
                    >
                      Intro to Targeted Ads
                    </Link>
                    <Link
                      href="/resources/meta-targeting-guide"
                      className="block px-5 py-3 font-sans text-[1rem] text-[#F8F6F3] hover:bg-[rgba(212,165,116,0.08)] hover:text-[#D4A574] transition-all duration-400"
                    >
                      Target Audiences
                    </Link>
                    <Link
                      href="/resources/meta-ads-calculator"
                      className="block px-5 py-3 font-sans text-[1rem] text-[#F8F6F3] hover:bg-[rgba(212,165,116,0.08)] hover:text-[#D4A574] transition-all duration-400"
                    >
                      Cost Calculator
                    </Link>
                    <Link
                      href="/resources/targeted-ads-infographic"
                      className="block px-5 py-3 font-sans text-[1rem] text-[#F8F6F3] hover:bg-[rgba(212,165,116,0.08)] hover:text-[#D4A574] transition-all duration-400"
                    >
                      Download Infographic
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/faq"
              className="font-sans text-[1rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 relative group font-medium"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4A574] transition-all duration-400 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className="font-sans text-[1rem] px-8 py-3 bg-gradient-to-r from-[#D4A574] to-[#E8D5B7] text-[#2A2A2A] font-semibold rounded-2xl hover:shadow-[0_8px_32px_rgba(212,165,116,0.3)] transition-all duration-400 hover:transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-7 h-0.5 bg-[#F8F6F3] transition-all duration-400 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-[#F8F6F3] transition-all duration-400 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-[#F8F6F3] transition-all duration-400 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-[rgba(11,29,46,0.98)] backdrop-blur-lg border-t border-[rgba(95,169,159,0.15)]"
          >
            <div className="px-6 py-8 space-y-5">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-[1.125rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 py-2 font-medium"
              >
                Home
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-sans text-[1.125rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 py-2 font-medium"
              >
                Portfolio
              </Link>

              {/* Mobile Resources Section */}
              <div>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="w-full flex items-center justify-between font-sans text-[1.125rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 py-2 font-medium"
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
                        className="block font-sans text-[1rem] text-[#5FA99F] hover:text-[#D4A574] transition-colors duration-400 py-2"
                      >
                        Intro to Targeted Ads
                      </Link>
                      <Link
                        href="/resources/meta-targeting-guide"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-sans text-[1rem] text-[#5FA99F] hover:text-[#D4A574] transition-colors duration-400 py-2"
                      >
                        Target Audiences
                      </Link>
                      <Link
                        href="/resources/meta-ads-calculator"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-sans text-[1rem] text-[#5FA99F] hover:text-[#D4A574] transition-colors duration-400 py-2"
                      >
                        Cost Calculator
                      </Link>
                      <Link
                        href="/resources/targeted-ads-infographic"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-sans text-[1rem] text-[#5FA99F] hover:text-[#D4A574] transition-colors duration-400 py-2"
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
                className="block font-sans text-[1.125rem] text-[#F8F6F3] hover:text-[#D4A574] transition-colors duration-400 py-2 font-medium"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center font-sans text-[1rem] px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#E8D5B7] text-[#2A2A2A] font-semibold rounded-2xl hover:shadow-[0_8px_32px_rgba(212,165,116,0.3)] transition-all duration-400 mt-6"
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
