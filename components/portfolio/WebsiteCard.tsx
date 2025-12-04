'use client';

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
      className="group h-full"
    >
      <div className="relative h-full bg-[#1A1A1A]/40 backdrop-blur-xl rounded-[32px] border-2 border-[#5FA99F]/30 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 flex flex-col">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Website Preview Image/Video */}
        {project.thumbnail && (
          <div className="relative w-full aspect-video bg-black/50 overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Project Info */}
        <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
          {/* Industry */}
          <p className="text-[#5FA99F] text-xs font-heading font-bold mb-3 uppercase tracking-widest">
            {project.industry}
          </p>

          {/* Title */}
          <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] font-bold text-white leading-snug mb-3">
            {project.title}
          </h3>

          {/* Description */}
          {project.description && (
            <p className="font-body text-gray-300 text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
          )}

          {/* Visit Website Button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-6 py-3 rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(95,169,159,0.4)] mt-auto"
            >
              <span>Visit Website</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
