'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TargetedAdsCTA() {
  return (
    // SECTION 6: TARGETED ADS CTA - Static CTA section with animated button
    <section className="relative min-h-[30vh] flex items-center justify-center bg-black overflow-hidden py-3" style={{ zIndex: 6 }}>
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <Link href="/contact" className="block">
          <motion.button
            className="relative px-8 py-4 bg-transparent rounded-xl font-heading font-bold text-white text-lg overflow-hidden group cursor-pointer"
            style={{
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 12px 32px rgba(0, 0, 0, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                border: '3px solid rgba(255, 255, 255, 0.9)',
              }}
              animate={{
                borderColor: [
                  'rgba(255, 255, 255, 0.9)',
                  'rgba(95, 250, 159, 0.9)',
                  'rgba(255, 255, 255, 0.9)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <span className="relative flex items-center justify-center pointer-events-none">
              <span className="text-center">Start Driving Leads</span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -right-6 inline-block"
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
