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
      className="my-12 border-t border-b border-[rgba(95,169,159,0.2)] py-10"
    >
      <div className="bg-gradient-to-br from-[#162E42] to-[#1A3345] border border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          {/* Author Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#5FA99F]">
              <Image
                src="/images/nicolas.png"
                alt={`${author.name} - ${author.jobTitle}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Author Info */}
          <div className="flex-1">
            <h3 className="text-[#F8F6F3] font-serif text-[1.5rem] font-medium mb-2">
              About {author.name}
            </h3>
            <p className="text-[#D4A574] text-[1rem] mb-3">
              {author.jobTitle}
            </p>
            <p className="text-[#F8F6F3] text-[1rem] leading-relaxed mb-4">
              Nicolas specializes in creating high-performing Meta advertising campaigns and custom landing pages that convert. He helps local businesses in Atlanta scale through targeted Facebook and Instagram ads.
            </p>
            <Link
              href={author.url}
              className="inline-flex items-center gap-2 text-[#5FA99F] hover:text-[#D4A574] transition-colors font-medium"
            >
              Learn more about {author.name.split(' ')[0]} →
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
