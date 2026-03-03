'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Dr. Austin Dupont',
    role: 'Owner',
    company: 'Village Pediatrics',
    image: '/images/dr-austin-dupont.webp',
    quote:
      "Working with Drive Lead Media has been a great experience. Our patient bookings increased by more than 40% in the first month, and they built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate. I highly recommend them.",
  },
  {
    name: 'Perla Rieder',
    role: 'Owner',
    company: 'Southern Tents and Events',
    image: '/images/perla.webp',
    quote:
      "After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly. Our traffic has exploded with better Google rankings and a huge uptick in leads from Facebook and Instagram ads. Nicolas and Drive Lead Media are the real deal!",
  },
  {
    name: 'Jenn',
    role: 'Owner',
    company: 'The Yoga Lounge',
    image: '/images/jenn-yoga-lounge.webp',
    quote:
      "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and it was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe. Within days we started seeing new leads coming in. I'm so grateful and would definitely recommend them.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-sm font-heading uppercase tracking-widest mb-4 block">
            Real Results
          </span>
          <h1 className="font-heading text-[2.5rem] sm:text-[3rem] lg:text-[4rem] font-bold text-white mb-6 leading-tight">
            Case Studies
          </h1>
          <p className="font-body text-gray-300 text-lg max-w-[700px] mx-auto leading-relaxed">
            See how we help local businesses grow with Meta ads, custom websites, and scroll-stopping creative.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Placeholder */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="relative bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Placeholder image area */}
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-[#1A1A1A] to-[#111] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5FA99F]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#5FA99F]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <p className="text-[#5FA99F]/50 font-heading text-sm uppercase tracking-wider">Coming Soon</p>
                </div>
              </div>

              {/* Placeholder content */}
              <div className="p-6 lg:p-8">
                <div className="h-3 w-20 bg-[#5FA99F]/10 rounded-full mb-4" />
                <div className="h-5 w-3/4 bg-white/5 rounded mb-3" />
                <div className="h-4 w-full bg-white/5 rounded mb-2" />
                <div className="h-4 w-2/3 bg-white/5 rounded" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-sm font-heading uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] p-6 lg:p-8 hover:border-[rgba(95,169,159,0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Quote mark */}
              <div className="text-[#f2a921] text-5xl font-serif leading-none mb-4">&ldquo;</div>

              {/* Quote text */}
              <p className="font-body text-gray-300 text-[0.95rem] lg:text-[1.05rem] leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#5FA99F]/30 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-heading text-white font-semibold text-[0.95rem]">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-[#5FA99F] text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="font-body text-gray-300 text-lg mb-8 max-w-[600px] mx-auto">
            Let&apos;s talk about how we can grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#5FA99F] hover:bg-[#4a8a81] text-white font-heading font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,169,159,0.4)]"
          >
            Get Your Free Estimate
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
