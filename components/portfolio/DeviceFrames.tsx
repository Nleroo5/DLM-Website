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
      {/* Pre-framed Desktop Image */}
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1200}
          priority={priority}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
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
      {/* Pre-framed Tablet Image */}
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1066}
          className="w-full h-auto"
          sizes="(max-width: 768px) 50vw, 400px"
        />
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
      {/* Pre-framed Mobile Image */}
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={1300}
          className="w-full h-auto"
          sizes="(max-width: 768px) 40vw, 300px"
        />
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
