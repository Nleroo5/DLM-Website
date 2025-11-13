'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProjectBySlug, generateProjectSchema } from '@/lib/portfolio-projects';
import { DeviceShowcase } from '@/components/portfolio/DeviceFrames';

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
    <main className="min-h-screen bg-[#0B1D2E] text-[#F8F6F3]">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] px-4 sm:px-6">
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
                className="text-[#5FA99F] hover:text-[#D4A574] transition-colors text-sm font-medium"
              >
                ← Back to Websites
              </Link>
            </div>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase bg-[rgba(95,169,159,0.15)] text-[#5FA99F] rounded-lg border border-[#5FA99F] mb-6">
              {project.industry}
            </span>

            {/* Title */}
            <h1 className="text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-normal leading-tight mb-6">
              {project.title}
            </h1>

            {/* Description */}
            {project.description && (
              <p className="text-[#D4A574] text-[1.25rem] sm:text-[1.375rem] max-w-[900px] leading-relaxed">
                {project.description}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Device Showcase */}
      {project.desktopImage && project.tabletImage && project.mobileImage && (
        <section className="pb-[60px] px-4 sm:px-6">
          <div className="max-w-[1600px] mx-auto">
            <DeviceShowcase
              desktopSrc={project.desktopImage}
              tabletSrc={project.tabletImage}
              mobileSrc={project.mobileImage}
              projectTitle={project.title}
              liveUrl={project.liveUrl}
            />
          </div>
        </section>
      )}

      {/* Project Details - Full Width 2-Column Grid */}
      <section className="pb-[80px] px-4 sm:px-6">
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
              <div className="bg-gradient-to-br from-[#162E42] to-[#1A3345] border border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8">
                <h3 className="text-[#5FA99F] font-serif text-[1.75rem] font-normal mb-6">
                  Services Provided
                </h3>
                <ul className="space-y-3">
                  {project.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#5FA99F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#F8F6F3] opacity-90">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Column */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="bg-gradient-to-br from-[#162E42] to-[#1A3345] border border-[rgba(212,165,116,0.3)] rounded-[20px] p-6 sm:p-8">
                <h3 className="text-[#D4A574] font-serif text-[1.75rem] font-normal mb-6">
                  Technology Used
                </h3>
                <ul className="space-y-3">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#F8F6F3] opacity-90">{tech}</span>
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
                <h2 className="text-[#F8F6F3] font-serif text-[2rem] font-normal mb-4">
                  The Challenge
                </h2>
                <p className="text-[#F8F6F3] opacity-80 text-[1.125rem] leading-relaxed">
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
                <h2 className="text-[#F8F6F3] font-serif text-[2rem] font-normal mb-4">
                  Our Solution
                </h2>
                <p className="text-[#F8F6F3] opacity-80 text-[1.125rem] leading-relaxed">
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
                <h2 className="text-[#F8F6F3] font-serif text-[2rem] font-normal mb-6">
                  Visual Showcase
                </h2>
                <div className="space-y-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative w-full aspect-video rounded-xl overflow-hidden border border-[rgba(95,169,159,0.2)]">
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
                className="bg-gradient-to-br from-[#5FA99F] to-[#4A8B82] rounded-[20px] p-8 sm:p-10"
              >
                <svg className="w-12 h-12 text-[#0B1D2E] opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#0B1D2E] text-[1.25rem] leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <p className="text-[#0B1D2E] font-medium text-lg">
                    {project.testimonial.author}
                  </p>
                  <p className="text-[#0B1D2E] opacity-80">
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
      <section className="pb-[80px] sm:pb-[100px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto bg-gradient-to-br from-[#5FA99F] to-[#4A8B82] rounded-[24px] p-8 sm:p-12 text-center"
        >
          <h2 className="text-[#0B1D2E] font-serif text-[2rem] sm:text-[2.5rem] font-normal mb-4">
            Want Results Like This?
          </h2>
          <p className="text-[#0B1D2E] opacity-90 text-[1.125rem] mb-6 leading-relaxed">
            Let's build a custom website that drives real results for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1D2E] text-[#F8F6F3] px-8 py-4 text-[1.125rem] rounded-xl font-medium hover:bg-[#162E42] transition-colors"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
