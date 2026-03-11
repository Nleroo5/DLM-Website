'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TargetedAdsCTA() {
  return (
    // SECTION 6: TARGETED ADS CTA - Static CTA section with animated button
    <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden py-3" style={{ zIndex: 6 }}>
      {/* Transparent to black gradient blend at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" style={{ zIndex: -1 }} />

      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        <Link href="/book" className="block">
          <motion.button
            className="relative px-8 py-4 bg-transparent rounded-xl font-heading font-bold text-white text-lg overflow-hidden group cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {/* Animated border with orange/gold pulse */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                border: '3px solid rgba(255, 255, 255, 0.9)',
              }}
              animate={{
                borderColor: [
                  'rgba(255, 255, 255, 0.9)',
                  '#f2a921',
                  'rgba(255, 255, 255, 0.9)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                boxShadow: '0 0 20px #f2a921',
              }}
              animate={{
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <span className="relative block text-center pointer-events-none">
              Start Driving Leads
            </span>
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
