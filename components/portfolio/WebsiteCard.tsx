'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PortfolioProject } from '@/lib/portfolio-projects';

interface WebsiteCardProps {
  project: PortfolioProject;
}

export default function WebsiteCard({ project }: WebsiteCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group h-full"
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="relative h-full bg-[#1A1A1A]/40 backdrop-blur-xl rounded-[32px] border-2 border-[#5FA99F]/30 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 hover:-translate-y-2 flex flex-col">
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Project Info */}
          <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
            {/* Industry */}
            <p className="text-[#5FA99F] text-xs font-heading font-bold mb-3 uppercase tracking-widest">
              {project.industry}
            </p>

            {/* Title */}
            <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] font-bold text-white leading-snug mb-3 group-hover:text-[#5FA99F] transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-body text-gray-300 text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-4 line-clamp-2 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-heading font-semibold bg-[rgba(95,169,159,0.1)] text-[#5FA99F] rounded-full border border-[rgba(95,169,159,0.3)]"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1.5 text-xs font-heading font-semibold text-[#85C7B3]">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* View Project Link */}
            <div className="flex items-center text-[#5FA99F] font-heading font-bold group-hover:text-[#85C7B3] transition-colors mt-auto">
              <span className="text-sm sm:text-base">View Case Study</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
