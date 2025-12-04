'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Newsletter() {
  useEffect(() => {
    // Load MailerLite webforms script to render embedded forms
    const script = document.createElement('script');
    script.src = 'https://assets.mailerlite.com/js/w/webforms.min.js';
    script.async = true;
    script.id = 'ml-webforms';

    // Only add if not already loaded
    if (!document.getElementById('ml-webforms')) {
      document.body.appendChild(script);

      // Wait for script to load, then set placeholder
      script.onload = () => {
        // Check for form input multiple times as it takes time to render
        const checkInterval = setInterval(() => {
          const emailInput = document.querySelector('.newsletter-form-container input[type="email"]') as HTMLInputElement;
          if (emailInput && !emailInput.placeholder) {
            emailInput.placeholder = 'Email';
            clearInterval(checkInterval);
          }
        }, 100);

        // Stop checking after 3 seconds
        setTimeout(() => clearInterval(checkInterval), 3000);
      };
    } else {
      // Script already loaded, just set placeholder
      setTimeout(() => {
        const emailInput = document.querySelector('.newsletter-form-container input[type="email"]') as HTMLInputElement;
        if (emailInput && !emailInput.placeholder) {
          emailInput.placeholder = 'Email';
        }
      }, 500);
    }

    return () => {
      // Cleanup: remove script when component unmounts
      const existingScript = document.getElementById('ml-webforms');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="relative py-[80px] px-6">{/* Transparent background - uses page background */}

      <motion.div
        className="max-w-[700px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-white mb-4 leading-[1.1]">
            Get Meta Ads Insights Delivered
          </h2>
          <p className="font-body text-[1rem] sm:text-[1.0625rem] lg:text-[1.125rem] text-gray-300 leading-[1.6]">
            New blog posts, case studies, and Meta advertising tips sent to your inbox.
          </p>
        </div>

        {/* Custom Styled MailerLite Form */}
        <div className="newsletter-form-container">
          <div className="ml-embedded" data-form="P5kNGI" suppressHydrationWarning></div>
        </div>

        {/* Privacy Note */}
        <p className="text-center text-gray-400 text-sm mt-4 font-body">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </motion.div>

      <style jsx global>{`
        /* Custom MailerLite Form Styling */
        .newsletter-form-container .ml-form-embedContainer {
          margin: 0;
        }

        .newsletter-form-container .ml-form-embedWrapper {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .newsletter-form-container .ml-form-embedBody {
          padding: 0 !important;
          background: transparent !important;
        }

        .newsletter-form-container .ml-form-embedContent {
          margin: 0 !important;
          padding: 0 !important;
        }

        .newsletter-form-container .ml-form-fieldRow {
          margin: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 16px !important;
        }

        @media (min-width: 640px) {
          .newsletter-form-container .ml-form-fieldRow {
            flex-direction: row !important;
          }
        }

        .newsletter-form-container .ml-field-group {
          flex: 1 !important;
          margin: 0 !important;
        }

        /* Input Field Styling */
        .newsletter-form-container input[type="email"] {
          width: 100% !important;
          padding: 14px 18px !important;
          font-family: var(--font-arno), serif !important;
          font-size: 1rem !important;
          background: rgba(26, 26, 26, 0.8) !important;
          border: 2px solid rgba(95, 169, 159, 0.3) !important;
          border-radius: 8px !important;
          color: white !important;
          transition: all 0.3s ease !important;
          outline: none !important;
          box-shadow: 0 0 20px rgba(95, 169, 159, 0.2) !important;
        }

        .newsletter-form-container input[type="email"]:focus {
          border-color: #5FA99F !important;
          box-shadow: 0 0 30px rgba(95, 169, 159, 0.4) !important;
        }

        .newsletter-form-container input[type="email"]::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        /* Button Styling */
        .newsletter-form-container button[type="submit"] {
          padding: 14px 32px !important;
          background: transparent !important;
          color: white !important;
          border: 2px solid white !important;
          border-radius: 8px !important;
          font-family: 'Exo 2', sans-serif !important;
          font-size: 0.875rem !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3) !important;
          white-space: nowrap !important;
          min-width: 140px !important;
        }

        .newsletter-form-container button[type="submit"]:hover {
          background: white !important;
          color: black !important;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5) !important;
          transform: scale(1.05) !important;
        }

        /* Success/Error Messages */
        .newsletter-form-container .ml-form-successBody,
        .newsletter-form-container .ml-form-errorBody {
          padding: 16px !important;
          border-radius: 8px !important;
          font-family: var(--font-arno), serif !important;
          text-align: center !important;
        }

        .newsletter-form-container .ml-form-successBody {
          background: rgba(95, 169, 159, 0.2) !important;
          border: 2px solid #5FA99F !important;
          color: #85C7B3 !important;
        }

        .newsletter-form-container .ml-form-errorBody {
          background: rgba(220, 38, 38, 0.2) !important;
          border: 2px solid rgba(220, 38, 38, 0.5) !important;
          color: #fca5a5 !important;
        }

        /* Hide MailerLite branding */
        .newsletter-form-container .ml-form-embedFooter,
        .newsletter-form-container .ml-form-embedPermissions {
          display: none !important;
        }

        /* Loading State */
        .newsletter-form-container .ml-form-embedSubmitLoad {
          color: #5FA99F !important;
        }
      `}</style>
    </section>
  );
}
