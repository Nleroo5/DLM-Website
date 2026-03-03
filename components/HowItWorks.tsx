'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';

const VideoScene = ({
  src,
  opacity,
  index
}: {
  src: string;
  opacity: MotionValue<number>;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    return opacity.on('change', (v) => {
      if (videoRef.current) {
        if (v > 0.05) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      }
    });
  }, [opacity]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        loop
        muted
        playsInline
        preload="none"
      >
        <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
      </video>
    </motion.div>
  );
};

// Mobile Scene Component - Text + Video that fade together
const MobileScene = ({
  title,
  description,
  videoSrc,
  index,
  videoMaxWidth = 'max-w-2xl',
  mobilePadding = 'px-6'
}: {
  title: string;
  description: string;
  videoSrc: string;
  index: number;
  videoMaxWidth?: string;
  mobilePadding?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Build desktop class based on videoMaxWidth
  const desktopMaxWidth = videoMaxWidth === 'max-w-4xl' ? 'md:max-w-4xl' : 'md:max-w-2xl';

  return (
    <div
      className={`flex items-center justify-center py-32 ${mobilePadding} relative z-10`}
    >
      <motion.div
        className={`flex flex-col justify-center items-center ${desktopMaxWidth} w-full relative z-10`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        onViewportEnter={() => {
          videoRef.current?.play().catch(() => {});
        }}
      >
        {/* Text */}
        <div className="max-w-xl text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video */}
        <div className="w-full aspect-video relative overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            loop
            muted
            playsInline
            preload="none"
          >
            <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
          </video>
        </div>
      </motion.div>
    </div>
  );
};

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Desktop scroll animations (unchanged)
  const scene1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.28, 0.38],
    [0, 1, 1, 0]
  );

  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.28, 0.38, 0.53, 0.63],
    [0, 1, 1, 0]
  );

  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.53, 0.63, 0.82, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <div className="relative bg-black" style={{ zIndex: 4 }}>
      {/* DESKTOP LAYOUT - Now shows on tablets (md:) and above */}
      <div ref={containerRef} className="hidden md:flex">
        <div className="flex flex-col md:flex-row min-h-[300vh] w-full">

          {/* LEFT: Scrolling Text */}
          <div className="w-full md:w-1/2 relative">
            {/* Vertical Glowing Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] hidden md:block">
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5FA99F] to-transparent"
                style={{
                  boxShadow: '0 0 10px #5FA99F, 0 0 20px #5FA99F, 0 0 30px #5FA99F'
                }}
              />

              {/* Connection nodes */}
              <motion.div
                style={{
                  opacity: scene1Opacity,
                  boxShadow: '0 0 10px #5FA99F, 0 0 20px #5FA99F'
                }}
                className="absolute top-[16.66%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#5FA99F]"
              />
              <motion.div
                style={{
                  opacity: scene2Opacity,
                  boxShadow: '0 0 10px #5FA99F, 0 0 20px #5FA99F'
                }}
                className="absolute top-[50%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#5FA99F]"
              />
              <motion.div
                style={{
                  opacity: scene3Opacity,
                  boxShadow: '0 0 10px #5FA99F, 0 0 20px #5FA99F'
                }}
                className="absolute top-[83.33%] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#5FA99F]"
              />

              {/* Traveling Pulse Animation */}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-[#5FA99F] left-1/2 -translate-x-1/2"
                style={{
                  boxShadow: '0 0 15px #5FA99F, 0 0 30px #5FA99F, 0 0 45px #5FA99F'
                }}
                animate={{
                  top: ['0%', '100%'],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            </div>

            <div className="max-w-xl mx-auto px-6 lg:px-20">

              {/* Scene 1 Text */}
              <motion.div
                className="min-h-screen flex flex-col justify-center py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl lg:text-[2.625rem] font-bold text-white mb-6 leading-tight">
                  High-Performance<br />Websites
                </h2>
                <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                  Custom-built websites engineered for speed, conversion, and top search rankings. We skip the templates and build every site from the ground up with clean code, strategic SEO, and performance optimization.
                </p>
              </motion.div>

              {/* Scene 2 Text */}
              <motion.div
                className="min-h-screen flex flex-col justify-center py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <h2 className="text-3xl lg:text-[2.625rem] font-bold text-white mb-6 leading-tight">
                  Scroll Stopping<br />Creatives
                </h2>
                <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                  Custom video and image ads designed to capture attention in crowded feeds and drive qualified clicks across Instagram and Facebook.
                </p>
              </motion.div>

              {/* Scene 3 Text */}
              <motion.div
                className="min-h-screen flex flex-col justify-center py-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl lg:text-[2.625rem] font-bold text-white mb-6 leading-tight">
                  Precision<br />Targeting
                </h2>
                <p className="text-base lg:text-xl text-gray-300 leading-relaxed">
                  We target the exact audience most likely to become your customers filtering by location, age, interests, and behaviors then manage your budget to get the best results at the lowest cost.
                </p>
              </motion.div>

            </div>
          </div>

          {/* RIGHT: Sticky Graphics - SCROLL-DRIVEN FADE - Now shows on tablets */}
          <div className="w-full md:w-1/2 relative hidden md:block">
            <div className="sticky top-0 self-start h-screen flex items-center justify-center pointer-events-none">
              <div className="relative w-full max-w-4xl h-[75vh] px-6 md:px-8 pointer-events-auto">

                <VideoScene
                  src="/Videos/responsive-website-mobile-tablet-desktop-design-demo.webm"
                  opacity={scene1Opacity}
                  index={0}
                />

                <VideoScene
                  src="/Videos/scroll-stopping-deviceframes.webm"
                  opacity={scene2Opacity}
                  index={1}
                />

                <VideoScene
                  src="/Videos/marketing-metrics-dashboard-analytics-data-visualization.webm"
                  opacity={scene3Opacity}
                  index={2}
                />

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* MOBILE LAYOUT - Only show on mobile, hide on tablets and above */}
      <div className="block md:hidden relative">
        <MobileScene
          title="High-Performance Websites"
          description="Custom-built websites engineered for speed, conversion, and top search rankings. We skip the templates and build every site from the ground up with clean code, strategic SEO, and performance optimization."
          videoSrc="/Videos/responsive-website-mobile-tablet-desktop-design-demo.webm"
          index={0}
        />

        {/* Progress Dots 1 - Between Scene 1 & 2 */}
        <div className="flex items-center justify-center gap-3 py-8 relative z-10">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.0,
              times: [0, 0.5, 1]
            }}
          />
        </div>

        <MobileScene
          title="Scroll Stopping Creatives"
          description="Custom video and image ads designed to capture attention in crowded feeds and drive qualified clicks across Instagram and Facebook."
          videoSrc="/Videos/scroll-stopping-deviceframes.webm"
          index={1}
          mobilePadding="px-0"
        />

        {/* Progress Dots 2 - Between Scene 2 & 3 */}
        <div className="flex items-center justify-center gap-3 py-8 relative z-10">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]"
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 8px #5FA99F',
                '0 0 20px #5FA99F, 0 0 30px #5FA99F',
                '0 0 8px #5FA99F'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.0,
              times: [0, 0.5, 1]
            }}
          />
        </div>

        <MobileScene
          title="Precision Targeting"
          description="We target the exact audience most likely to become your customers filtering by location, age, interests, and behaviors then manage your budget to get the best results at the lowest cost."
          videoSrc="/Videos/marketing-metrics-dashboard-analytics-data-visualization.webm"
          index={2}
          mobilePadding="px-0"
        />
      </div>

    </div>
  );
}
