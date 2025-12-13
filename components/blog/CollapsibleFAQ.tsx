'use client';

import { useState } from 'react';
import { FAQSchema } from '@/components/StructuredDataSchemas';

interface FAQItem {
  question: string;
  answer: string;
}

interface CollapsibleFAQProps {
  items: FAQItem[];
  title?: string;
}

export default function CollapsibleFAQ({ items, title = "Frequently Asked Questions" }: CollapsibleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema items={items} />

      {/* FAQ Section */}
      <div className="mt-16 mb-8">
        <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-8">
          {title}
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#5FA99F]/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300 group"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white pr-4 group-hover:text-[#5FA99F] transition-colors">
                  {item.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#5FA99F] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-300 font-body text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
