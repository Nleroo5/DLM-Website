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
      className="group"
    >
      {/* Website Preview Video or Image */}
      {project.videoUrl ? (
        <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : project.thumbnail ? (
        <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Visit Website Button - Centered */}
      {project.liveUrl && (
        <div className="flex justify-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent text-white px-5 py-2.5 rounded-lg font-heading font-semibold text-sm border-2 border-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105"
          >
            <span>Visit Website</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
}
