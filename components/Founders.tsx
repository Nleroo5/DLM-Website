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
        className="font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-[#F5F5DC] mb-5 tracking-[-0.5px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meet the Team
      </motion.h2>

      {/* Section Subtitle */}
      <motion.p
        className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-[#F5F5DC] mb-[60px] max-w-[800px] mx-auto leading-[1.6] font-normal bg-[rgba(238,244,217,0.15)] p-5 rounded-[15px] backdrop-blur-[12px] border border-[rgba(133,199,179,0.25)] md:mb-[60px] md:p-[20px_30px] sm:p-[15px_18px] sm:mb-[30px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Every campaign is built and managed directly by our leadership team. From strategy to creative to client success, you work with the people who own the results.
      </motion.p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[60px] mt-[60px] md:gap-[60px] md:mt-[60px] sm:gap-[30px] sm:mt-[30px]">
        {/* Team Member 1: Nicolas Leroo */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Photo Card */}
          <div className="relative overflow-hidden rounded-full border-4 border-[rgba(133,199,179,0.3)] transition-all duration-300 h-[280px] w-[280px] flex-shrink-0 hover:transform hover:-translate-y-[5px] hover:border-[rgba(133,199,179,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] group">
            <Image
              src="/images/nicolas.webp"
              alt="Nicolas Leroo"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
              style={{ objectPosition: 'center', transform: 'scale(1.37)' }}
            />
          </div>

          {/* Info */}
          <div className="text-center max-w-[400px]">
            <h3 className="font-serif text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.4rem] font-normal text-[#EEF4D9] tracking-[-0.3px] mb-2">
              Nicolas Leroo
            </h3>

            <p className="font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.125rem] text-[#85C7B3] mb-[15px] font-normal italic">
              Co-Founder & COO
            </p>
            <p className="font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.0625rem] text-[#EEF4D9] leading-[1.6] font-normal mb-[15px]">
              Nicolas brings Meta Certification in Digital Marketing with expertise in Facebook, Instagram advertising, and web design. He builds campaigns that reach the right audience and deliver measurable ROI.
            </p>

            {/* Meta Certification Badge */}
            <div className="flex justify-center mt-4">
              <Image
                src="/images/Meta.webp"
                alt="Meta Certified Digital Marketing Professional"
                width={110}
                height={110}
                loading="lazy"
                className="flex-shrink-0 lg:w-[100px] lg:h-[100px] sm:w-[85px] sm:h-[85px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Team Member 2: Tommy Duda */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Photo Card */}
          <div className="relative overflow-hidden rounded-full border-4 border-[rgba(133,199,179,0.3)] transition-all duration-300 h-[280px] w-[280px] flex-shrink-0 hover:transform hover:-translate-y-[5px] hover:border-[rgba(133,199,179,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] group">
            <Image
              src="/images/tommy.webp"
              alt="Tommy Duda"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
              style={{ objectPosition: 'center', transform: 'scale(1.37)' }}
            />
          </div>

          {/* Info */}
          <div className="text-center max-w-[400px]">
            <h3 className="font-serif text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.4rem] font-normal text-[#EEF4D9] mb-2 tracking-[-0.3px]">
              Tommy Duda
            </h3>
            <p className="font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.125rem] text-[#85C7B3] mb-[15px] font-normal italic">
              Co-Founder & Chief Creative Officer
            </p>
            <p className="font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.0625rem] text-[#EEF4D9] leading-[1.6] font-normal">
              Tommy is a specialist in video production and ad creative, leading the direction of every project. He ensures ads look professional, capture attention, and convert viewers into customers.
            </p>
          </div>
        </motion.div>

        {/* Team Member 3: Brenna Skalski Kirillov */}
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Photo Card */}
          <div className="relative overflow-hidden rounded-full border-4 border-[rgba(133,199,179,0.3)] transition-all duration-300 h-[280px] w-[280px] flex-shrink-0 hover:transform hover:-translate-y-[5px] hover:border-[rgba(133,199,179,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] group">
            <Image
              src="/images/brenna.webp"
              alt="Brenna Skalski Kirillov"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105 relative z-10"
              style={{ objectPosition: 'center' }}
            />
          </div>

          {/* Info */}
          <div className="text-center max-w-[400px]">
            <h3 className="font-serif text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.4rem] font-normal text-[#EEF4D9] mb-2 tracking-[-0.3px]">
              Brenna Skalski Kirillov
            </h3>
            <p className="font-serif text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.125rem] text-[#85C7B3] mb-[15px] font-normal italic">
              VP of Sales & Business Development
            </p>
            <p className="font-serif text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.0625rem] text-[#EEF4D9] leading-[1.6] font-normal">
              As VP of Sales & Business Development, Brenna leads client acquisition and account management. She ensures new clients are set up for success and existing partnerships continue to grow.
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
