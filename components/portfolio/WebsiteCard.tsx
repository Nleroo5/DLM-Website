'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      className="group"
    >
      <Link href={`/portfolio/${project.slug}`}>
        <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] overflow-hidden hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
          {/* Project Image */}
          <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden bg-[#162E42]">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#5FA99F]">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#5FA99F] text-[#0B1D2E] rounded-lg">
                Website
              </span>
            </div>
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
