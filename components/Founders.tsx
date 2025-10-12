'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Founders() {
  return (
    <section
      id="meet-founders-section"
      className="max-w-[1200px] mx-auto text-center my-[60px] px-5 md:px-5 sm:px-[15px]"
    >
      {/* Section Title */}
      <motion.h2
        className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold text-[#F5F5DC] mb-5 tracking-[-0.5px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet the Founders
      </motion.h2>

      {/* Section Subtitle */}
      <motion.p
        className="text-[clamp(1rem,3vw,1.5rem)] text-[#F5F5DC] mb-[60px] max-w-[800px] mx-auto leading-[1.6] font-normal bg-[rgba(238,244,217,0.15)] p-5 rounded-[15px] backdrop-blur-[12px] border border-[rgba(133,199,179,0.25)] md:mb-[60px] md:p-[20px_30px] sm:p-[15px_18px] sm:mb-[30px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We're not a faceless agency. Every campaign is built and managed directly by us, combining data-driven ad strategy with creative content that converts.
      </motion.p>

      {/* Founders Grid */}
      <div className="grid grid-cols-1 gap-[60px] mt-[60px] lg:grid-cols-2 md:gap-[60px] md:mt-[60px] sm:gap-[30px] sm:mt-[30px]">
        {/* Founder 1: Nicolas Leroo */}
        <motion.div
          className="flex flex-col items-center gap-5 lg:flex-row lg:gap-[30px] lg:items-center md:gap-5 md:flex-col md:items-center sm:flex-col sm:gap-[15px] sm:items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Photo Card */}
          <div className="relative overflow-hidden bg-[#EEF4D9] rounded-[20px] border-2 border-[rgba(133,199,179,0.3)] transition-all duration-300 h-[280px] w-[280px] flex-shrink-0 hover:transform hover:-translate-y-[5px] hover:border-[rgba(133,199,179,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] group">
            {/* Top gradient bar */}
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F2A922] to-[#85C7B3] z-[2]"></span>

            <Image
              src="/images/nicolas.png"
              alt="Nicolas Leroo"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="text-center max-w-[400px] lg:text-left lg:max-w-none lg:flex-1">
            {/* Name with Meta Badge */}
            <div className="flex items-center gap-3 justify-center flex-nowrap mb-2 lg:justify-start lg:gap-[10px] sm:gap-2">
              <h3 className="font-serif text-[clamp(1.2rem,4vw,1.4rem)] font-normal text-[#EEF4D9] tracking-[-0.3px] m-0">
                Nicolas Leroo
              </h3>
              {/* Meta Certification Badge */}
              <Image
                src="/images/Meta.png"
                alt="Meta Certified Digital Marketing Professional"
                width={90}
                height={90}
                className="flex-shrink-0 lg:w-[80px] lg:h-[80px] sm:w-[70px] sm:h-[70px]"
              />
            </div>

            <p className="font-serif text-[clamp(1rem,3vw,1.125rem)] text-[#85C7B3] mb-[15px] font-normal italic">
              Paid Media Strategist
            </p>
            <p className="font-serif text-[clamp(1rem,2.5vw,1.0625rem)] text-[#EEF4D9] leading-[1.6] font-normal">
              Nicolas is Meta Certified in Digital Marketing, with expertise in Facebook and Instagram advertising. He focuses on building campaigns that reach the right people and turn ad spend into measurable results.
            </p>
          </div>
        </motion.div>

        {/* Founder 2: Tommy Duda */}
        <motion.div
          className="flex flex-col items-center gap-5 lg:flex-row lg:gap-[30px] lg:items-center md:gap-5 md:flex-col md:items-center sm:flex-col sm:gap-[15px] sm:items-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Photo Card */}
          <div className="relative overflow-hidden bg-[#EEF4D9] rounded-[20px] border-2 border-[rgba(133,199,179,0.3)] transition-all duration-300 h-[280px] w-[280px] flex-shrink-0 hover:transform hover:-translate-y-[5px] hover:border-[rgba(133,199,179,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] group">
            {/* Top gradient bar */}
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F2A922] to-[#85C7B3] z-[2]"></span>

            <Image
              src="/images/tommy.png"
              alt="Tommy Duda"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Info */}
          <div className="text-center max-w-[400px] lg:text-left lg:max-w-none lg:flex-1">
            <h3 className="font-serif text-[clamp(1.2rem,4vw,1.4rem)] font-normal text-[#EEF4D9] mb-2 tracking-[-0.3px]">
              Tommy Duda
            </h3>
            <p className="font-serif text-[clamp(1rem,3vw,1.125rem)] text-[#85C7B3] mb-[15px] font-normal italic">
              Creative Director
            </p>
            <p className="font-serif text-[clamp(1rem,2.5vw,1.0625rem)] text-[#EEF4D9] leading-[1.6] font-normal">
              Tommy is a specialist in video production and ad creative, leading the direction of every project. He ensures ads look professional, capture attention, and convert viewers into customers.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Touch device optimizations */}
      <style jsx global>{`
        @media (hover: none) and (pointer: coarse) {
          .group:hover {
            transform: none !important;
            border-color: rgba(133, 199, 179, 0.3) !important;
            box-shadow: none !important;
          }

          .group:hover img {
            transform: none !important;
          }

          .group:active {
            transform: scale(0.98) !important;
          }
        }
      `}</style>
    </section>
  );
}
