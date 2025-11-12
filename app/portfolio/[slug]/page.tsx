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
            <p className="text-[#D4A574] text-[1.25rem] sm:text-[1.375rem] max-w-[900px] leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Live URL */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5FA99F] text-[#0B1D2E] rounded-xl font-medium hover:bg-[#4A8A82] transition-colors"
              >
                <span>Visit Live Site</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      {project.heroImage && (
        <section className="pb-[60px] px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[1400px] mx-auto"
          >
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden border border-[rgba(95,169,159,0.2)] shadow-2xl">
              <Image
                src={project.heroImage}
                alt={`${project.title} - Homepage`}
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Project Details */}
      <section className="pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
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

              {/* Solution */}
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

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-[#F8F6F3] font-serif text-[2rem] font-normal mb-6">
                    Key Features Delivered
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gradient-to-br from-[#162E42] to-[#1A3345] border border-[rgba(95,169,159,0.2)] rounded-xl p-4"
                      >
                        <svg className="w-6 h-6 text-[#5FA99F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#F8F6F3] opacity-90">{feature}</span>
                      </div>
                    ))}
                  </div>
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 bg-gradient-to-br from-[#162E42] to-[#1A3345] border border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8 space-y-8"
              >
                {/* Project Info */}
                <div>
                  <h3 className="text-[#5FA99F] uppercase tracking-wider text-sm font-medium mb-4">
                    Project Details
                  </h3>
                  <dl className="space-y-4">
                    {project.client && (
                      <div>
                        <dt className="text-[#F8F6F3] opacity-60 text-sm mb-1">Client</dt>
                        <dd className="text-[#F8F6F3] text-lg font-medium">{project.client}</dd>
                      </div>
                    )}
                    {project.date && (
                      <div>
                        <dt className="text-[#F8F6F3] opacity-60 text-sm mb-1">Date</dt>
                        <dd className="text-[#F8F6F3] text-lg font-medium">{project.date}</dd>
                      </div>
                    )}
                    {project.timeline && (
                      <div>
                        <dt className="text-[#F8F6F3] opacity-60 text-sm mb-1">Timeline</dt>
                        <dd className="text-[#F8F6F3] text-lg font-medium">{project.timeline}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                {/* Services */}
                {project.services && project.services.length > 0 && (
                  <div>
                    <h3 className="text-[#5FA99F] uppercase tracking-wider text-sm font-medium mb-4">
                      Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1.5 text-sm bg-[rgba(95,169,159,0.15)] text-[#5FA99F] rounded-lg border border-[rgba(95,169,159,0.3)]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <h3 className="text-[#5FA99F] uppercase tracking-wider text-sm font-medium mb-4">
                      Technology
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-[rgba(212,165,116,0.15)] text-[#D4A574] rounded-lg border border-[rgba(212,165,116,0.3)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
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
