'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface DeviceFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function DesktopFrame({ src, alt, priority = false }: DeviceFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Desktop Frame */}
      <div className="relative w-full rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-[#1A1A1A]">
        {/* Top Bar (Browser Chrome) */}
        <div className="w-full h-6 sm:h-8 bg-[#2A2A2A] flex items-center px-2 sm:px-4 border-b border-[#3A3A3A]">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28C840]"></div>
          </div>

          {/* URL Bar - Hidden on mobile */}
          <div className="hidden sm:flex flex-1 mx-4 md:mx-6 h-5 md:h-6 bg-[#1A1A1A] rounded-md items-center px-2 md:px-3">
            <div className="w-3 h-3 text-[#666]">
              <svg fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 7.5a.5.5 0 0 1 0-1h5.793L8.146 4.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 7.5H4.5z"/>
              </svg>
            </div>
            <span className="ml-2 text-xs text-[#888] truncate">{alt}</span>
          </div>
        </div>

        {/* Screen Content */}
        <div className="relative w-full aspect-[16/10] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function TabletFrame({ src, alt }: DeviceFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full"
    >
      {/* Tablet Frame */}
      <div className="relative w-full rounded-[16px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] bg-[#1A1A1A] p-3">
        {/* Screen */}
        <div className="relative w-full aspect-[3/4] bg-white rounded-[8px] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 50vw, 400px"
          />
        </div>

        {/* Home Button */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-[#3A3A3A]"></div>
      </div>
    </motion.div>
  );
}

export function MobileFrame({ src, alt }: DeviceFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full"
    >
      {/* Mobile Frame */}
      <div className="relative w-full rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.25)] bg-[#1A1A1A] p-2">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-[#1A1A1A] rounded-b-[16px] z-10 flex items-center justify-center">
          <div className="w-12 h-3 bg-[#0A0A0A] rounded-full"></div>
        </div>

        {/* Screen */}
        <div className="relative w-full aspect-[9/19.5] bg-white rounded-[20px] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 40vw, 300px"
          />
        </div>
      </div>
    </motion.div>
  );
}

interface DeviceShowcaseProps {
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
  projectTitle: string;
  liveUrl?: string;
}

export function DeviceShowcase({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  projectTitle,
  liveUrl
}: DeviceShowcaseProps) {
  return (
    <div className="w-full space-y-8">
      {/* Desktop Frame - Full Width */}
      <div className="w-full">
        <DesktopFrame
          src={desktopSrc}
          alt={`${projectTitle} - Desktop View`}
          priority={true}
        />
      </div>

      {/* Tablet and Mobile Side by Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[800px] mx-auto">
        <TabletFrame
          src={tabletSrc}
          alt={`${projectTitle} - Tablet View`}
        />
        <MobileFrame
          src={mobileSrc}
          alt={`${projectTitle} - Mobile View`}
        />
      </div>

      {/* View Live Site Button */}
      {liveUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5FA99F] to-[#4A8B82] text-[#0B1D2E] rounded-xl font-semibold text-base sm:text-lg hover:shadow-[0_8px_30px_rgba(95,169,159,0.4)] transition-all duration-300 hover:-translate-y-1"
          >
            <span>View Live Site</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      )}
    </div>
  );
}
