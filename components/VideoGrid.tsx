'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Sample portfolio items - you'll replace these with your actual videos
  const portfolioItems = [
    {
      id: 1,
      client: "Dream",
      videoType: "1 Minute Meta Ad",
      thumbnail: "/images/dream-logo.png",
      youtubeId: "2qwhz4K9ZXg"
    },
    {
      id: 2,
      client: "Dream Pediatric Dentistry and Orthodontics",
      videoType: "Email Marketing Video",
      thumbnail: "/images/dream-logo.png",
      youtubeId: "yGGxVuA3ZDM"
    },
    {
      id: 3,
      client: "Dream",
      videoType: "Website Banner Video",
      thumbnail: "/images/dream-logo.png",
      youtubeId: "4JKRwEdejUE"
    },
    {
      id: 4,
      client: "Sample Brand",
      videoType: "No Sound Banner",
      thumbnail: "/images/dlm-logo.png", // Placeholder
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 5,
      client: "Another Client",
      videoType: "15s Meta Ad",
      thumbnail: "/images/dlm-logo.png", // Placeholder
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 6,
      client: "Test Brand",
      videoType: "1 Minute Meta Ad",
      thumbnail: "/images/dlm-logo.png", // Placeholder
      youtubeId: "dQw4w9WgXcQ"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <>
      <section className="bg-transparent py-[80px] px-6 md:py-[60px]">
        <motion.div
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden bg-transparent border border-[rgba(95,169,159,0.12)] rounded-[24px] aspect-[9/16] cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),0_0_40px_rgba(212,165,116,0.1)] transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),0_8px_16px_rgba(212,165,116,0.15),0_0_60px_rgba(212,165,116,0.2)] hover:border-[rgba(212,165,116,0.3)]"
              onClick={() => setSelectedVideo(item.youtubeId)}
            >
              {/* Thumbnail */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#0B1D2E]">
                <div className="w-[60%] h-[60%] relative">
                  <Image
                    src={item.thumbnail}
                    alt={`${item.client} - ${item.videoType}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,29,46,0.95)] via-[rgba(11,29,46,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                {/* Play Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 rounded-full bg-[rgba(212,165,116,0.9)] flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
                    <svg
                      className="w-8 h-8 fill-[#0B1D2E] ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Client & Video Type */}
                <div className="relative z-10">
                  <h3 className="text-[#F8F6F3] text-[1.25rem] font-semibold font-serif mb-2">
                    {item.client}
                  </h3>
                  <p className="text-[#D4A574] text-[0.95rem] font-medium font-[family-name:var(--font-inter)]">
                    {item.videoType}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          youtubeId={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
