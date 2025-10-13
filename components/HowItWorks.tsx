'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string;
}

export default function HowItWorks() {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'We learn your brand + goals',
      description: 'Deep dive into your business, target audience, and specific objectives to create a tailored strategy.',
      details: 'Strategic discovery call • Brand analysis • Goal setting'
    },
    {
      number: 2,
      title: 'You approve your ad package',
      description: 'Review and approve your custom creative package — video, image, or both, designed specifically for your brand.',
      details: 'Creative concepts • Script approval • Visual mockups'
    },
    {
      number: 3,
      title: 'We build the campaign backend',
      description: 'Complete technical setup including audience targeting, pixel implementation, and tracking infrastructure.',
      details: 'Meta Business Manager • Pixel setup • UTM tracking • GA4 integration'
    },
    {
      number: 4,
      title: 'Ads go live across Meta platforms',
      description: 'Launch across Facebook and Instagram with optimized placements and bidding strategies.',
      details: 'Multi-platform launch • Automated bidding • Performance monitoring'
    },
    {
      number: 5,
      title: 'We monitor, test, and scale performance',
      description: 'Continuous optimization through A/B testing, performance analysis, and strategic scaling for maximum ROI.',
      details: 'Weekly reports • Creative testing • Budget optimization • Performance scaling'
    },
    {
      number: 6,
      title: "Your phone starts ringing with qualified leads",
      description: "Watch your calendar fill up with qualified leads while you wonder how you ever survived without professional Meta ads.",
      details: "Lead notifications • Booking confirmations • Growing client base"
    }
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 bg-transparent my-[80px] font-serif scroll-mt-20 md:py-8 md:my-2 sm:py-6"
    >
      {/* Header */}
      <div className="text-center mb-10 px-4 md:mb-8 md:px-4 sm:mb-6 sm:px-3">
        <motion.h2
          className="font-serif text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-normal text-[#EEF4D9] mb-3 sm:mb-3 md:mb-3 lg:mb-4 leading-[1.1] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] tracking-[0.3px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works (Process Funnel)
        </motion.h2>
        <motion.p
          className="text-[0.9rem] sm:text-[0.95rem] md:text-base lg:text-[1.2rem] xl:text-[1.5rem] text-[#85C7B3] max-w-[600px] mx-auto font-normal font-serif leading-[1.2] sm:leading-[1.25] lg:leading-[1.3] [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)] opacity-90 tracking-[0.2px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything fully managed. Nothing needed from you.
        </motion.p>
      </div>

      {/* Process Funnel */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-3 sm:px-[0.6rem]">
        <div className="flex flex-col gap-6 relative md:gap-5 sm:gap-4">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-[60px] bottom-[60px] w-[3px] bg-gradient-to-b from-[#F2A922] via-[#05908C] to-[#85C7B3] -translate-x-1/2 z-[1] rounded-[2px] [box-shadow:0_0_8px_rgba(242,169,34,0.3)] md:left-[30px] md:top-[40px] md:bottom-[40px] md:w-[2px] sm:left-[25px] sm:top-[35px] sm:bottom-[35px]"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={`flex items-center relative z-[2] ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              } md:flex-row md:items-start`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Step Number */}
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#F2A922] to-[#EEF4D9] text-[#012E40] rounded-full flex items-center justify-center text-[2rem] font-normal font-serif flex-shrink-0 shadow-[0_8px_24px_rgba(242,169,34,0.4)] border-[3px] border-[#EEF4D9] transition-all duration-300 [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] hover:scale-105 hover:shadow-[0_12px_32px_rgba(242,169,34,0.6)] md:w-[50px] md:h-[50px] md:text-[1.2rem] md:mt-[0.3rem] md:border-[2px] sm:w-[45px] sm:h-[45px] sm:text-[1.1rem]">
                {step.number}
              </div>

              {/* Step Content */}
              <div className={`flex-1 bg-[#EEF4D9] p-[2rem_2.25rem] rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] border-2 border-[rgba(133,199,179,0.4)] ${
                index % 2 === 0 ? 'ml-8 mr-8' : 'mr-8 ml-8'
              } md:ml-14 md:mr-0 relative transition-all duration-300 backdrop-blur-[5px] hover:transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:bg-[#EEF4D9] hover:border-[rgba(242,169,34,0.6)] md:p-[1.3rem_1.2rem] md:rounded-[10px] sm:ml-12 sm:p-[1.1rem_1rem] sm:rounded-lg`}>
                {/* Arrow pointing to center/number */}
                <span
                  className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-[12px] border-transparent ${
                    index % 2 === 0
                      ? '-right-6 border-l-[#EEF4D9]'
                      : '-left-6 border-r-[#EEF4D9]'
                  } md:-left-3 md:border-r-[#EEF4D9] md:border-l-transparent md:border-[10px]`}
                ></span>

                <h3 className="font-serif text-[0.95rem] sm:text-[1rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.5rem] font-normal text-[#012E40] mb-[0.5rem] sm:mb-[0.6rem] lg:mb-[0.8rem] leading-[1.15] sm:leading-[1.15] lg:leading-[1.2] [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] tracking-[0.2px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]">
                  {step.title}
                </h3>
                <p className="text-[#05908C] text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem] leading-[1.35] sm:leading-[1.3] lg:leading-[1.4] font-serif font-normal [text-shadow:1px_1px_2px_rgba(0,0,0,0.05)] opacity-95 tracking-[0.1px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-10 md:mt-8 md:px-4 sm:mt-6 sm:px-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-br from-[#F2A922] to-[#EEF4D9] text-[#012E40] px-7 py-3 rounded-[40px] text-[0.95rem] sm:text-base md:text-[1.05rem] lg:text-[1.1rem] font-normal font-serif no-underline transition-all duration-300 cursor-pointer shadow-[0_6px_20px_rgba(242,169,34,0.3)] border-2 border-[rgba(255,255,255,0.2)] tracking-[0.3px] [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)] hover:transform hover:-translate-y-[2px] hover:shadow-[0_12px_32px_rgba(242,169,34,0.5)] hover:text-[#EEF4D9] hover:bg-gradient-to-br hover:from-[#05908C] hover:to-[#85C7B3] hover:border-[rgba(238,244,217,0.4)] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility] sm:px-8 sm:py-3.5 md:px-9 md:py-4 md:tracking-[0.2px] md:rounded-[35px] lg:px-10"
          >
            See This Process In Action
          </Link>
        </motion.div>
      </div>

      {/* Touch optimization style */}
      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          .hover\\:transform:hover,
          .hover\\:-translate-y-1:hover,
          .hover\\:-translate-y-\\[2px\\]:hover,
          .hover\\:scale-105:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
