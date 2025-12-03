'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProjectBySlug, generateProjectSchema } from '@/lib/portfolio-projects';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = getProjectBySlug(slug);

  if (!project || project.type !== 'website') {
    return (
      <main className="min-h-screen bg-[#0B1D2E] text-[#F8F6F3] pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-[#5FA99F] hover:text-[#D4A574]">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const schemaData = generateProjectSchema(project);

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="relative pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/portfolio/websites"
                className="text-[#5FA99F] hover:text-[#85C7B3] transition-colors text-sm font-heading font-bold uppercase tracking-wider"
              >
                ← Back to Websites
              </Link>
            </div>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 text-xs font-heading font-bold tracking-widest uppercase bg-[rgba(95,169,159,0.1)] text-[#5FA99F] rounded-lg border border-[rgba(95,169,159,0.3)] mb-6">
              {project.industry}
            </span>

            {/* Title */}
            <h1 className="text-white font-heading text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem] font-bold leading-[1.1] mb-6">
              {project.title}
            </h1>

            {/* Description */}
            {project.description && (
              <p className="text-gray-300 font-body text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] max-w-[900px] mx-auto leading-relaxed">
                {project.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video Showcase - Only for Village Pediatrics */}
      {project.slug === 'my-village-peds' && (
        <section className="pb-[60px] px-4 sm:px-6">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-[32px] overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Videos/villagepeds-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Visit Website Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <a
                href="https://myvillagepeds.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-transparent rounded-xl font-heading font-bold text-white text-lg border-3 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105"
                style={{ border: '3px solid rgba(255, 255, 255, 0.9)' }}
              >
                Visit Website →
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Details - Full Width 2-Column Grid */}
      <section className="relative pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Services Column */}
            {project.services && project.services.length > 0 && (
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8 hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_40px_rgba(95,169,159,0.2)] transition-all duration-500">
                <h3 className="text-[#5FA99F] font-heading text-[1.75rem] font-bold mb-6">
                  Services Provided
                </h3>
                <ul className="space-y-3">
                  {project.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#5FA99F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 font-body">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Column */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8 hover:border-[rgba(95,169,159,0.6)] hover:shadow-[0_0_40px_rgba(95,169,159,0.2)] transition-all duration-500">
                <h3 className="text-[#5FA99F] font-heading text-[1.75rem] font-bold mb-6">
                  Technology Used
                </h3>
                <ul className="space-y-3">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#5FA99F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 font-body">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Challenge Section (if exists) */}
          <div className="space-y-12 mt-12">
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-white font-heading text-[2rem] font-bold mb-4">
                  The Challenge
                </h2>
                <p className="text-gray-300 font-body text-[1.125rem] leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
            )}

            {/* Solution Section (if exists) */}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-white font-heading text-[2rem] font-bold mb-4">
                  Our Solution
                </h2>
                <p className="text-gray-300 font-body text-[1.125rem] leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            )}

            {/* Additional Images */}
            {project.images && project.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-white font-heading text-[2rem] font-bold mb-6">
                  Visual Showcase
                </h2>
                <div className="space-y-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Screenshot ${index + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#5FA99F] to-[#85C7B3] rounded-[20px] p-8 sm:p-10"
              >
                <svg className="w-12 h-12 text-black opacity-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-black font-body text-[1.25rem] leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <p className="text-black font-heading font-bold text-lg">
                    {project.testimonial.author}
                  </p>
                  <p className="text-black opacity-80 font-body">
                    {project.testimonial.role}
                    {project.testimonial.company && `, ${project.testimonial.company}`}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
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
            Want Results Like This?
          </h2>
          <p className="font-body text-gray-300 text-[1.125rem] sm:text-[1.25rem] mb-8 leading-relaxed max-w-[700px] mx-auto">
            Let's build a custom website that drives real results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-10 py-4 text-[1.125rem] rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)]"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
