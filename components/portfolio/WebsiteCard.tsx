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

      {/* Visit Website Button */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-6 py-3 rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(95,169,159,0.4)] w-full"
        >
          <span>Visit Website</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </motion.div>
  );
}
