'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface AuthorBioProps {
  author: {
    name: string;
    jobTitle: string;
    url: string;
  };
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 border-t border-[rgba(95,169,159,0.2)] py-10"
    >
      <div className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 group overflow-hidden">
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          {/* Author Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-[#5FA99F] shadow-[0_0_20px_rgba(95,169,159,0.4)] group-hover:shadow-[0_0_30px_rgba(95,169,159,0.6)] transition-shadow duration-500">
              <Image
                src="/images/nicolas.webp"
                alt={`${author.name} - ${author.jobTitle}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1">
            <h3 className="text-white font-heading text-[1.5rem] sm:text-[1.75rem] font-bold mb-2">
              About {author.name}
            </h3>
            <p className="text-[#5FA99F] font-heading text-[1rem] font-semibold mb-3 uppercase tracking-wide">
              {author.jobTitle}
            </p>
            <p className="text-gray-300 font-body text-[1rem] leading-relaxed mb-4">
              Nicolas specializes in creating high-performing Meta advertising campaigns and custom landing pages that convert. He helps local businesses in Atlanta scale through targeted Facebook and Instagram ads.
            </p>
            <Link
              href={author.url}
              className="inline-flex items-center gap-2 text-[#5FA99F] hover:text-[#85C7B3] transition-colors font-heading font-bold group/link"
            >
              Learn more about {author.name.split(' ')[0]}
              <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
