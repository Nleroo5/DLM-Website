'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function HomepageContactSection() {
  return (
    <section id="contact-form" className="relative bg-[#0a0a0a] py-20 lg:py-28 px-4 sm:px-6">
      {/* Subtle background glow */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#5FA99F] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[700px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] text-white font-bold mb-4">
            Get a Free Estimate
          </h2>
          <p className="text-gray-400 font-body text-[1rem] sm:text-[1.125rem] leading-relaxed">
            Tell us about your business and we&apos;ll put together a custom strategy.
          </p>
        </motion.div>

        <ContactForm variant="homepage" />
      </div>
    </section>
  );
}
