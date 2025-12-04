'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VideoGrid() {

  // Client video portfolio
  const portfolioItems = [
    {
      id: 1,
      client: "Dream Pediatric Dentistry and Orthodontics",
      videoType: "1 Minute Meta Ad",
      thumbnail: "/images/dream-logo.webp",
      youtubeId: "2qwhz4K9ZXg"
    },
    {
      id: 2,
      client: "Dream Pediatric Dentistry and Orthodontics",
      videoType: "Email Marketing Video",
      thumbnail: "/images/dream-logo.webp",
      youtubeId: "yGGxVuA3ZDM"
    },
    {
      id: 3,
      client: "Dream Pediatric Dentistry and Orthodontics",
      videoType: "Website Banner Video",
      thumbnail: "/images/dream-logo.webp",
      youtubeId: "4JKRwEdejUE"
    },
    {
      id: 4,
      client: "Dream Pediatric Dentistry and Orthodontics",
      videoType: "1 Minute Meta Ad",
      thumbnail: "/images/dream-logo.webp",
      youtubeId: "MkbWGedLbVY"
    },
    {
      id: 5,
      client: "The Yoga Lounge",
      videoType: "30 Second Meta Ad",
      thumbnail: "/images/yoga.webp",
      youtubeId: "eoGhu1NU3jk"
    },
    {
      id: 6,
      client: "The Yoga Lounge",
      videoType: "40 Second Meta Ad",
      thumbnail: "/images/yoga.webp",
      youtubeId: "Oj4vLJ1bCNg"
    },
    {
      id: 7,
      client: "School of Orthodontic Assisting",
      videoType: "1 Minute Meta Ad",
      thumbnail: "/images/soa-logo.webp",
      youtubeId: "pmAMb2VQmpI"
    },
    {
      id: 8,
      client: "School of Orthodontic Assisting",
      videoType: "20 Second Meta Ad",
      thumbnail: "/images/soa-logo.webp",
      youtubeId: "g3yCoC4NmiE"
    },
    {
      id: 9,
      client: "Maven Baseball Lab",
      videoType: "40 Second Meta Ad",
      thumbnail: "/images/maven-logo.webp",
      youtubeId: "24t7EZgQ6E4"
    },
    {
      id: 10,
      client: "Maven Baseball Lab",
      videoType: "40 Second Meta Ad",
      thumbnail: "/images/maven-logo.webp",
      youtubeId: "b8BITNsDr_w"
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
      <section className="bg-[#000000] py-[80px] px-6 md:py-[60px]">
        <motion.div
          className="max-w-[1400px] mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioItems.map((item) => (
            <motion.a
              key={item.id}
              href={`https://youtube.com/watch?v=${item.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative overflow-hidden bg-[#1A1A1A] border-2 border-[#5FA99F]/30 rounded-[24px] aspect-[9/16] cursor-pointer shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(95,169,159,0.4)] hover:border-[#5FA99F]/50 block no-underline"
            >
              {/* YouTube Thumbnail Background */}
              <Image
                src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                alt={`${item.client} - ${item.videoType}`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 640px) 33vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />

              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] via-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.6)]"></div>

              {/* Play button centered with enhanced glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#5FA99F] opacity-20 blur-xl scale-150 group-hover:opacity-30 transition-opacity duration-300"></div>

                {/* Button */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(95,169,159,0.8)] to-[rgba(133,199,179,0.8)] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-[rgba(95,169,159,1)] group-hover:to-[rgba(133,199,179,1)] group-hover:shadow-[0_0_30px_rgba(95,169,159,0.5)] shadow-lg">
                  <svg
                    className="w-8 h-8 fill-white ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Description - always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.98)] via-[rgba(0,0,0,0.92)] to-transparent p-3 sm:p-4 md:p-6 pt-8 sm:pt-10 md:pt-12">
                <div className="relative z-10">
                  <h3 className="text-white text-[0.7rem] sm:text-[0.85rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem] font-semibold font-heading mb-1 sm:mb-1.5 md:mb-2 leading-tight">
                    {item.client}
                  </h3>
                  <p className="text-[#5FA99F] text-[0.6rem] sm:text-[0.7rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.1rem] font-medium font-body leading-tight">
                    {item.videoType}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
