'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  // Container animation - makes cards swoop in together
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Left card animation - swoop from left
  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -120,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6 }
      }
    }
  };

  // Right card animation - swoop from right
  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 120,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.6 }
      }
    }
  };

  const testimonials = [
    {
      quote: "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and the experience was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe, and I learned so much about how to better use Meta for marketing. Within weeks we started seeing new leads coming in, and their clear communication made the whole process easy. I'm so grateful for all they did and would definitely recommend them to any business looking to grow.",
      name: "Jenn",
      title: "Owner",
      company: "The Yoga Lounge",
      logo: "/images/yoga.png",
      image: "/images/jenn.png",
      nameColor: "#5FA99F",
      companyColor: "#5FA99F"
    },
    {
      quote: "Working with Drive Lead Media has been a game changer for Village Pediatrics. They completely transformed our outdated website into something modern and professional. The Meta ad campaigns they've been running have brought in a 40% increase in new patient bookings, and honestly, the best part is that I haven't had to manage any of it. Nic and Tommy handle everything from strategy to execution while I focus on caring for my patients.",
      name: "Dr. Austin Dupont",
      title: "Owner",
      company: "Village Pediatrics of St. Augustine",
      logo: "/images/peds.png",
      image: "/images/austin.png",
      nameColor: "#5FA99F",
      companyColor: "#5FA99F"
    }
  ];

  return (
    <section className="bg-transparent text-[#5FA99F] py-[100px] px-6 font-sans my-0 md:py-[80px] md:px-5">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="font-serif text-[1.75rem] sm:text-[2.25rem] lg:text-[3.5rem] mb-3 sm:mb-5 lg:mb-6 text-[#F8F6F3] font-normal leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>


        {/* Testimonials Grid - Cards swoop in together */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={index === 0 ? leftCardVariants : rightCardVariants}
              className="group relative overflow-hidden bg-[#0B1D2E] border border-[rgba(95,169,159,0.12)] rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),0_0_40px_rgba(212,165,116,0.15)] backdrop-blur-md h-full flex flex-col will-change-transform hover:transform hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25),0_8px_16px_rgba(212,165,116,0.15),0_0_60px_rgba(212,165,116,0.25)] hover:border-[rgba(212,165,116,0.4)] transition-all duration-400 ease-out"
            >
              {/* Client Image */}
              <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-3 border-[rgba(212,165,116,0.4)] shadow-[0_8px_24px_rgba(212,165,116,0.2)] transition-all duration-400 group-hover:border-[rgba(212,165,116,0.6)] group-hover:shadow-[0_12px_32px_rgba(212,165,116,0.3)]">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="mb-4 md:mb-6 text-center">
                <p className="text-[1.1rem] md:text-[1.5rem] font-semibold font-serif" style={{ color: testimonial.nameColor }}>
                  {testimonial.name}, {testimonial.title}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-[#F8F6F3] text-[0.95rem] md:text-[1.25rem] font-normal leading-[1.6] md:leading-[1.8] mb-6 md:mb-8 opacity-90 flex-grow text-center font-[family-name:var(--font-inter)]">
                {testimonial.quote}
              </blockquote>

              {/* Company Info with Logo - Centered */}
              <div className="mt-auto pt-4 md:pt-6 border-t border-[rgba(95,169,159,0.15)] flex flex-col items-center gap-2 md:gap-3">
                <p className="text-[0.95rem] md:text-[1.125rem] font-medium text-center font-[family-name:var(--font-inter)]" style={{ color: testimonial.companyColor }}>
                  {testimonial.company}
                </p>
                <div className="w-16 h-16 md:w-20 md:h-20">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain opacity-80 transition-opacity duration-400 group-hover:opacity-100"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
