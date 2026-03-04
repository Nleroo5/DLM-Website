'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    client: 'Village Pediatrics',
    industry: 'Healthcare',
    heroMetric: '+40%',
    heroLabel: 'Patient Bookings',
    thumbnail: '/images/case-studies/village-peds.webp',
    services: ['Custom Website', 'Meta Ads', 'Tracking Setup'],
    challenge:
      'Village Pediatrics needed more patient bookings but had an outdated website that wasn\'t converting visitors into appointments. Their online presence didn\'t reflect the quality of care they provided.',
    approach:
      'We built a custom, mobile-first website tailored to their practice and launched targeted Meta ad campaigns to reach local parents. We set up full conversion tracking so every lead could be attributed.',
    results: [
      { value: '+40%', label: 'Patient Bookings' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: 'Custom', label: 'Website Built' },
    ],
    testimonial: {
      name: 'Dr. Austin Dupont',
      role: 'Owner, Village Pediatrics',
      image: '/images/dr-austin-dupont.webp',
      quote:
        "Working with Drive Lead Media has been a great experience. Our patient bookings increased by more than 40% in the first month, and they built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate. I highly recommend them.",
    },
  },
  {
    client: 'Southern Tents and Events',
    industry: 'Events & Rentals',
    heroMetric: '3x',
    heroLabel: 'More Leads',
    thumbnail: '/images/case-studies/southern-tents.webp',
    services: ['Website Rebuild', 'Meta Ads', 'SEO'],
    challenge:
      'After three failed attempts with other web design companies, Southern Tents had a website that was outdated, hard to navigate, and not generating leads. Their online advertising wasn\'t driving results.',
    approach:
      'We rebuilt their website from the ground up with a clean, modern, mobile-friendly design. We then launched Facebook and Instagram ad campaigns and optimized their Google rankings to drive organic traffic.',
    results: [
      { value: '3x', label: 'Lead Increase' },
      { value: '#1', label: 'Google Rankings' },
      { value: 'New', label: 'Website & Brand' },
    ],
    testimonial: {
      name: 'Perla Rieder',
      role: 'Owner, Southern Tents and Events',
      image: '/images/perla.webp',
      imagePosition: 'center 20%',
      quote:
        "After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly. Our traffic has exploded with better Google rankings and a huge uptick in leads from Facebook and Instagram ads. Nicolas and Drive Lead Media are the real deal!",
    },
  },
  {
    client: 'The Yoga Lounge',
    industry: 'Fitness & Wellness',
    heroMetric: 'Days',
    heroLabel: 'To First Leads',
    thumbnail: '/images/case-studies/yoga-lounge.webp',
    services: ['Meta Ads', 'Video Creative', 'Ad Strategy'],
    challenge:
      'The Yoga Lounge wanted to fill classes and attract new members but didn\'t have the content or strategy to reach the right audience on social media.',
    approach:
      'We created custom video ads and scroll-stopping creative that captured the studio\'s vibe. We launched targeted Meta campaigns to reach local fitness enthusiasts and yoga practitioners.',
    results: [
      { value: 'Days', label: 'To First Leads' },
      { value: 'Custom', label: 'Video Ads Created' },
      { value: 'Targeted', label: 'Meta Campaigns' },
    ],
    testimonial: {
      name: 'Jenn',
      role: 'Owner, The Yoga Lounge',
      image: '/images/jenn-yoga-lounge.webp',
      quote:
        "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and it was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe. Within days we started seeing new leads coming in. I'm so grateful and would definitely recommend them.",
    },
  },
];

function MetricBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-heading text-[1.75rem] lg:text-[2.25rem] font-bold text-[#f2a921]">{value}</p>
      <p className="font-body text-gray-400 text-[0.8rem] lg:text-[0.85rem] uppercase tracking-wider">{label}</p>
    </div>
  );
}

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

      {/* Case Studies */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16 lg:space-y-24 mb-28">
        {caseStudies.map((study, i) => (
          <motion.article
            key={study.client}
            className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Header: Client info + hero metric */}
            <div className="p-6 sm:p-8 lg:p-10 border-b border-[rgba(95,169,159,0.1)]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <span className="text-[#5FA99F] text-xs font-heading uppercase tracking-widest">{study.industry}</span>
                  <h2 className="font-heading text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-bold text-white mt-1">
                    {study.client}
                  </h2>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-[2.5rem] lg:text-[3rem] font-bold text-[#f2a921] leading-none">
                    {study.heroMetric}
                  </span>
                  <span className="font-body text-gray-400 text-sm uppercase tracking-wider">{study.heroLabel}</span>
                </div>
              </div>

              {/* Service tags */}
              <div className="flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="font-body text-[0.75rem] text-[#5FA99F] bg-[#5FA99F]/10 px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/9] bg-[#111]">
              <Image
                src={study.thumbnail}
                alt={`${study.client} case study`}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
            </div>

            {/* Challenge → Approach → Results */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-10">
                {/* Challenge */}
                <div>
                  <h3 className="font-heading text-[#5FA99F] text-sm uppercase tracking-widest mb-3">The Challenge</h3>
                  <p className="font-body text-gray-300 text-[0.95rem] leading-relaxed">{study.challenge}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="font-heading text-[#5FA99F] text-sm uppercase tracking-widest mb-3">Our Approach</h3>
                  <p className="font-body text-gray-300 text-[0.95rem] leading-relaxed">{study.approach}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="font-heading text-[#5FA99F] text-sm uppercase tracking-widest mb-3">The Results</h3>
                  <div className="flex gap-6">
                    {study.results.map((result) => (
                      <MetricBadge key={result.label} value={result.value} label={result.label} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div
                className="rounded-[16px] p-6 lg:p-8"
                style={{
                  background: 'linear-gradient(135deg, hsl(204,97%,12%) 0%, hsl(204,97%,18%) 100%)',
                  border: '1px solid rgba(95,169,159,0.15)',
                }}
              >
                <div className="text-[#f2a921] text-[3rem] font-serif leading-none mb-1 select-none">&ldquo;</div>
                <p className="font-body text-white/90 text-[0.95rem] lg:text-[1.05rem] leading-relaxed mb-6 italic">
                  {study.testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#5FA99F]/30 flex-shrink-0">
                    <Image
                      src={study.testimonial.image}
                      alt={study.testimonial.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: study.testimonial.imagePosition || 'center center' }}
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-white font-bold text-[0.95rem]">{study.testimonial.name}</p>
                    <p className="font-body text-white/60 text-[0.85rem]">{study.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6">
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
            Book a free strategy call and let&apos;s map out how to grow your business.
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#5FA99F] hover:bg-[#4a8a81] text-white font-heading font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(95,169,159,0.4)]"
          >
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
