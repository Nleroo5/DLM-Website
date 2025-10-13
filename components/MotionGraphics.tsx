'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function MotionGraphics() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Motion graphic videos
  const motionGraphicVideos = [
    {
      id: 1,
      client: "Sample Dental Ad",
      videoType: "15 Second Motion Graphic Ad",
      youtubeId: "S8PGR30XXy8"
    },
    {
      id: 2,
      client: "Fayette C.A.R.E. Clinic",
      videoType: "20 Second Motion Graphic Ad",
      youtubeId: "05s3zrXlP-s"
    },
    {
      id: 3,
      client: "Drive Lead Media",
      videoType: "20 Second Motion Graphic",
      youtubeId: "Rts9AYu0KPs"
    },
    {
      id: 4,
      client: "Drive Lead Media",
      videoType: "30 Second Motion Graphic",
      youtubeId: "YkuweNpYbSk"
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
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.h2
            className="text-center text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] mb-12 font-normal leading-[1.2] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Motion Graphics
          </motion.h2>

          {/* Video Grid */}
          <motion.div
            className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {motionGraphicVideos.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden bg-transparent border border-[rgba(95,169,159,0.12)] rounded-[24px] aspect-[9/16] cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),0_0_40px_rgba(212,165,116,0.1)] transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),0_8px_16px_rgba(212,165,116,0.15),0_0_60px_rgba(212,165,116,0.2)] hover:border-[rgba(212,165,116,0.3)]"
                onClick={() => setSelectedVideo(item.youtubeId)}
              >
                {/* YouTube Thumbnail Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg)`
                  }}
                ></div>

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(11,29,46,0.3)] via-[rgba(11,29,46,0.2)] to-[rgba(11,29,46,0.6)]"></div>

                {/* Play button centered with enhanced glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D4A574] opacity-10 blur-xl scale-150 group-hover:opacity-20 transition-opacity duration-300"></div>

                  {/* Button */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(212,165,116,0.7)] to-[rgba(200,152,96,0.7)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-[rgba(212,165,116,0.9)] group-hover:to-[rgba(200,152,96,0.9)] group-hover:shadow-[0_0_30px_rgba(212,165,116,0.4)] shadow-lg">
                    <svg
                      className="w-8 h-8 fill-[#0B1D2E] ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Description - always visible at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(11,29,46,0.98)] via-[rgba(11,29,46,0.92)] to-transparent p-6 pt-12">
                  <div className="relative z-10">
                    <h3 className="text-[#F8F6F3] text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.5rem] font-semibold font-serif mb-2">
                      {item.client}
                    </h3>
                    <p className="text-[#D4A574] text-[0.8rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1.1rem] font-medium font-[family-name:var(--font-inter)]">
                      {item.videoType}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
