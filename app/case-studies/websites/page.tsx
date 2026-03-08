'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
}

interface WebsiteProject {
  title: string;
  industry: string;
  thumbnail?: string;
  videoUrl?: string;
  liveUrl?: string;
  services?: string[];
  metrics?: Metric[];
  testimonial?: Testimonial;
}

const websiteProjects: WebsiteProject[] = [
  {
    title: 'Village Pediatrics of St. Augustine',
    industry: 'Healthcare - Pediatrics',
    thumbnail: '/images/case-studies/village-pediatrics/thumbnail.webp',
    videoUrl: '/images/case-studies/village-pediatrics/villagepeds.webm',
    liveUrl: 'https://www.myvillagepeds.com/',
    services: ['Fully Custom Website', 'SEO', 'Meta Ads', 'Tracking Setup'],
    metrics: [
      { value: '+40%', label: 'Patient Bookings (1st Month)' },
      { value: '7.8x', label: 'ROAS' },
      { value: '+1700%', label: 'Website Traffic' },
    ],
    testimonial: {
      quote:
        "Working with Drive Lead Media has been a great experience. Our patient bookings increased by more than 40% in the first month, and they built a custom website tailored specifically to our practice. They didn't ask for payment until we were 100% satisfied, which says a lot about how they operate. I highly recommend them.",
      name: 'Dr. Austin Dupont',
      role: 'Owner, Village Pediatrics',
      image: '/images/dr-austin-dupont.webp',
    },
  },
  {
    title: 'Southern Tents & Events',
    industry: 'Event Services',
    videoUrl: '/images/case-studies/southern-tents/southern-tents.webm',
    liveUrl: 'https://southerntentsandevents.com/',
    services: ['Website Rebuild', 'Meta Ads', 'SEO'],
    metrics: [
      { value: '#3', label: 'Google Rankings (1st Month)' },
      { value: '500%+', label: 'Increase in Leads' },
      { value: '4.2x', label: 'ROAS' },
    ],
    testimonial: {
      quote:
        "After three disappointing experiences with other web design companies, Nicolas completely turned things around for us. He rebuilt our website from the ground up- it's now clean, modern, and mobile-friendly. Our traffic has exploded with better Google rankings and a huge uptick in leads from Facebook and Instagram ads. Nicolas and Drive Lead Media are the real deal!",
      name: 'Perla Rieder',
      role: 'Owner, Southern Tents and Events',
      image: '/images/perla.webp',
      imagePosition: 'center 20%',
    },
  },
  {
    title: 'SetLife Casting',
    industry: 'Entertainment - Casting',
    videoUrl: '/Videos/atlanta-casting-agency-website-entertainment-portfolio.mp4',
    liveUrl: 'https://www.setlifecasting.com/',
    services: ['Web Design', 'Development', 'Branding'],
  },
];

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link
                href="/case-studies"
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors text-sm font-heading font-semibold tracking-wide"
              >
                ← Back to Case Studies
              </Link>
            </div>

            <h1 className="font-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold text-white mb-6 leading-[1.1]">
              Website Projects
            </h1>
            <p className="font-body text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[800px] leading-relaxed text-gray-300">
              Custom websites built from scratch — designed for speed, SEO, and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {websiteProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[20px] overflow-hidden"
            >
              {/* Video or Image Preview */}
              {project.videoUrl ? (
                <div className="relative w-full overflow-hidden">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.videoUrl} type={project.videoUrl.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
                  </video>
                </div>
              ) : project.thumbnail ? (
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 580px"
                  />
                </div>
              ) : null}

              {/* Card Content */}
              <div className="p-5 sm:p-6">
                {/* Industry + Title */}
                <span className="text-[#5FA99F] text-[0.65rem] font-heading uppercase tracking-widest">
                  {project.industry}
                </span>
                <h2 className="font-heading text-[1.15rem] sm:text-[1.3rem] font-bold text-white mt-1 mb-3">
                  {project.title}
                </h2>

                {/* Service Tags — only if they exist */}
                {project.services && project.services.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="font-body text-[0.6rem] text-[#5FA99F] bg-[#5FA99F]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metrics — only if they exist */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex gap-6 mb-4 py-3 border-y border-[rgba(95,169,159,0.1)]">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-heading text-[1.5rem] font-bold text-[#f2a921] leading-none">
                          {metric.value}
                        </p>
                        <p className="font-body text-gray-400 text-[0.65rem] uppercase tracking-wider mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Testimonial — only if it exists */}
                {project.testimonial && (
                  <div
                    className="rounded-[12px] p-4 mb-4"
                    style={{
                      background: 'linear-gradient(135deg, hsl(204,97%,12%) 0%, hsl(204,97%,18%) 100%)',
                      border: '1px solid rgba(95,169,159,0.15)',
                    }}
                  >
                    <p className="font-heading text-white/90 text-[0.8rem] leading-relaxed mb-3 line-clamp-4">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5">
                      {project.testimonial.image && (
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#5FA99F]/30 flex-shrink-0">
                          <Image
                            src={project.testimonial.image}
                            alt={project.testimonial.name}
                            fill
                            className="object-cover"
                            style={{
                              objectPosition: project.testimonial.imagePosition || 'center center',
                            }}
                            sizes="36px"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-heading text-white font-bold text-[0.75rem]">
                          {project.testimonial.name}
                        </p>
                        <p className="font-body text-white/60 text-[0.65rem]">
                          {project.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visit Website Button */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-[rgba(95,169,159,0.3)] bg-[rgba(95,169,159,0.05)] text-[#5FA99F] px-5 py-2.5 rounded-xl font-heading font-bold text-[0.85rem] hover:border-[#5FA99F] hover:bg-[rgba(95,169,159,0.1)] hover:text-white transition-all duration-300 w-full"
                  >
                    <span>Visit Website</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pb-[100px] sm:pb-[120px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[900px] mx-auto bg-[#1A1A1A]/40 backdrop-blur-xl rounded-[32px] border-2 border-[#5FA99F]/30 p-8 sm:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500"
        >
          <h2 className="font-heading text-[2rem] sm:text-[3rem] font-bold text-white mb-4 leading-tight">
            Need a Website Like These?
          </h2>
          <p className="font-body text-gray-300 text-[1.125rem] mb-8 leading-relaxed max-w-[600px] mx-auto">
            Let&apos;s build a custom website that drives results for your business.
          </p>
          <Link
            href="/book"
            className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-4 text-[1.125rem] rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)]"
          >
            Book a Free Strategy Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
