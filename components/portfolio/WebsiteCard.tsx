'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioProject } from '@/lib/portfolio-projects';

interface WebsiteCardProps {
  project: PortfolioProject;
}

export default function WebsiteCard({ project }: WebsiteCardProps) {
  const displayImage = project.desktopImage || project.heroImage || project.thumbnail || '/images/dlm-logo.webp';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] overflow-hidden hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
          {/* Pre-framed Desktop Image */}
          <div className="relative w-full overflow-hidden">
            <Image
              src={displayImage}
              alt={project.title}
              width={1920}
              height={1200}
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Project Info */}
          <div className="p-6 sm:p-8">
            {/* Industry */}
            <p className="text-[#D4A574] text-sm font-medium mb-2 uppercase tracking-wider">
              {project.industry}
            </p>

            {/* Title */}
            <h3 className="text-[#F8F6F3] font-serif text-[1.375rem] sm:text-[1.5rem] font-normal leading-snug mb-3 group-hover:text-[#5FA99F] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#F8F6F3] opacity-80 text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-[rgba(95,169,159,0.1)] text-[#5FA99F] rounded border border-[rgba(95,169,159,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs text-[#D4A574]">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* View Project Link */}
            <div className="flex items-center text-[#5FA99F] font-medium group-hover:text-[#D4A574] transition-colors">
              <span className="text-sm sm:text-base">View Case Study</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
