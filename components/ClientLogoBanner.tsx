'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClientLogoBanner() {
  // Client logos - strategically ordered to avoid same logos next to each other
  const clients = [
    { name: "The Yoga Lounge", logo: "/images/yoga.png?v=2", scale: 0.85 },
    { name: "Maven", logo: "/images/maven-logo.png?v=2", scale: 0.85 },
    { name: "Village Pediatrics", logo: "/images/peds.png?v=2", scale: 0.85 },
    { name: "Dream", logo: "/images/dream-logo.png?v=2", scale: 1.1 },
    { name: "SOA", logo: "/images/soa-logo.png?v=2", scale: 1 },
    { name: "FCC", logo: "/images/fcc-logo.png?v=2", scale: 1 },
  ];

  return (
    <section className="bg-white border-y border-[rgba(95,169,159,0.12)] py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.h3
          className="text-center text-[#5FA99F] text-[1rem] font-medium uppercase tracking-widest mb-8 font-[family-name:var(--font-inter)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Leading Brands
        </motion.h3>

        {/* Infinite scrolling logo container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-20"
            animate={{
              x: [0, -1200]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-[150px] h-[90px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-400 px-3"
              >
                <div style={{ transform: `scale(${client.scale})` }} className="transition-transform duration-400">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-[150px] h-[90px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-400 px-3"
              >
                <div style={{ transform: `scale(${client.scale})` }} className="transition-transform duration-400">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Third set for extra seamless coverage */}
            {clients.map((client, index) => (
              <div
                key={`logo-3-${index}`}
                className="flex-shrink-0 w-[150px] h-[90px] flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-400 px-3"
              >
                <div style={{ transform: `scale(${client.scale})` }} className="transition-transform duration-400">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
