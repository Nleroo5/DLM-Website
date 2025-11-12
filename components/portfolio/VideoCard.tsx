'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioProject } from '@/lib/portfolio-projects';

interface VideoCardProps {
  project: PortfolioProject;
}

export default function VideoCard({ project }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[20px] overflow-hidden hover:border-[#5FA99F] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
        {/* Video Thumbnail/Player */}
        <div className="relative w-full aspect-square overflow-hidden bg-[#162E42]">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#5FA99F]">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Play Button Overlay */}
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all duration-300 group/play"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5FA99F] flex items-center justify-center group-hover/play:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#0B1D2E] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              {/* Duration Badge */}
              {project.duration && (
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 text-xs font-medium bg-black/70 text-white rounded">
                    {project.duration}
                  </span>
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#D4A574] text-[#0B1D2E] rounded-lg">
                  Video Ad
                </span>
              </div>
            </>
          ) : (
            // Video Player
            <video
              src={project.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Project Info */}
        <div className="p-6">
          {/* Industry */}
          <p className="text-[#D4A574] text-sm font-medium mb-2 uppercase tracking-wider">
            {project.industry}
          </p>

          {/* Title */}
          <h3 className="text-[#F8F6F3] font-serif text-[1.125rem] sm:text-[1.25rem] font-normal leading-snug mb-2">
            {project.title}
          </h3>

          {/* Meta Info */}
          <div className="space-y-1 text-[#F8F6F3] opacity-70 text-sm">
            {project.adFormat && (
              <p>
                <span className="text-[#5FA99F]">Format:</span> {project.adFormat}
              </p>
            )}
            {project.adObjective && (
              <p>
                <span className="text-[#5FA99F]">Objective:</span> {project.adObjective}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
