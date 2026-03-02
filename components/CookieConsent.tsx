'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hasConsent, acceptAllCookies, rejectAllCookies, acceptAnalyticsOnly } from '@/lib/consent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consentGiven = hasConsent();
    if (!consentGiven) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
  };

  const handleAnalyticsOnly = () => {
    acceptAnalyticsOnly();
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
        >
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border-2 border-[#5FA99F] rounded-[20px] shadow-2xl backdrop-blur-xl">
            {/* Main Banner Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-white font-heading text-xl sm:text-2xl font-bold mb-3">
                    🍪 We Value Your Privacy
                  </h3>
                  <p className="text-[#F8F6F3] text-sm sm:text-base leading-relaxed mb-4">
                    We use cookies to improve your experience and analyze site traffic. You can choose which cookies to accept below.
                  </p>

                  {/* Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-[#5FA99F] text-sm font-medium underline hover:text-[#D4A574] transition-colors"
                  >
                    {showDetails ? 'Hide details' : 'Learn more about our cookies'}
                  </button>

                  {/* Cookie Details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 space-y-3 text-sm text-[#F8F6F3]"
                      >
                        <div className="bg-[#0B1D2E]/50 rounded-lg p-4 border border-[#5FA99F]/30">
                          <h4 className="font-semibold text-[#5FA99F] mb-1">Essential Cookies (Always Active)</h4>
                          <p className="text-xs opacity-80">
                            Required for the website to function. These cannot be disabled.
                          </p>
                        </div>
                        <div className="bg-[#0B1D2E]/50 rounded-lg p-4 border border-[#5FA99F]/30">
                          <h4 className="font-semibold text-[#5FA99F] mb-1">Analytics Cookies</h4>
                          <p className="text-xs opacity-80">
                            Help us understand how visitors interact with our website by collecting anonymous data (Google Analytics, Microsoft Clarity).
                          </p>
                        </div>
                        <div className="bg-[#0B1D2E]/50 rounded-lg p-4 border border-[#5FA99F]/30">
                          <h4 className="font-semibold text-[#5FA99F] mb-1">Marketing Cookies</h4>
                          <p className="text-xs opacity-80">
                            Used to deliver personalized ads and measure ad campaign effectiveness (Meta Pixel).
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[200px]">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-[#5FA99F] text-[#0B1D2E] px-6 py-3 rounded-lg font-heading font-bold text-sm sm:text-base hover:bg-[#D4A574] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleAnalyticsOnly}
                    className="bg-transparent border-2 border-[#5FA99F] text-[#5FA99F] px-6 py-3 rounded-lg font-heading font-semibold text-sm sm:text-base hover:bg-[#5FA99F]/10 transition-all duration-300"
                  >
                    Analytics Only
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="bg-transparent border-2 border-[#F8F6F3]/30 text-[#F8F6F3] px-6 py-3 rounded-lg font-heading font-semibold text-sm sm:text-base hover:bg-[#F8F6F3]/10 transition-all duration-300"
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Policy Link */}
            <div className="border-t border-[#5FA99F]/30 px-6 sm:px-8 py-4">
              <p className="text-[#F8F6F3]/70 text-xs text-center">
                By using our website, you agree to our use of cookies as described in our{' '}
                <a href="/privacy-policy" className="text-[#5FA99F] underline hover:text-[#D4A574]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
