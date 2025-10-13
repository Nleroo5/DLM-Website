'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Floating bar with backdrop blur */}
          <div className="bg-gradient-to-r from-[rgba(1,46,64,0.95)] to-[rgba(5,144,140,0.95)] backdrop-blur-lg border-t-2 border-[#F2A922] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-3 py-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F2A922] to-[#EEF4D9] text-[#012E40] font-serif font-bold text-[0.9rem] py-2.5 px-5 rounded-full shadow-[0_6px_24px_rgba(242,169,34,0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,169,34,0.6)] hover:scale-[1.02] active:scale-[0.98] min-h-[44px] w-full no-underline"
            >
              <span>Get Started</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Bottom safe area padding for iOS */}
          <div className="bg-gradient-to-r from-[rgba(1,46,64,0.95)] to-[rgba(5,144,140,0.95)] h-[env(safe-area-inset-bottom)] w-full"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
