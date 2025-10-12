'use client';

import { motion } from 'framer-motion';

export default function ActorNetwork() {
  return (
    <section className="relative overflow-hidden bg-transparent py-[100px] px-[30px] font-serif my-[100px] md:py-20 md:px-5">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(242,169,34,0.1)_0%,transparent_70%)] rounded-full -z-10"
        animate={{
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.5, 0.4, 0.3]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[8%] w-20 h-20 bg-[radial-gradient(circle,rgba(5,144,140,0.1)_0%,transparent_70%)] rounded-full -z-10"
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          direction: "reverse"
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-[2]">
        {/* Floating icons - removed emojis */}

        {/* Title Section */}
        <motion.div
          className="text-center mb-[60px] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] lg:text-[3.5rem] text-[#EEF4D9] mb-5 font-normal leading-[1.2] [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] tracking-[0.5px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]">
            Tap Into Our On-Demand Actor Network
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="group relative bg-gradient-to-br from-[rgba(5,144,140,0.08)] to-[rgba(1,46,64,0.15)] border-2 border-[rgba(5,144,140,0.3)] rounded-[24px] p-[50px_40px] backdrop-blur-[15px] shadow-[0_20px_40px_rgba(0,0,0,0.2),0_8px_16px_rgba(5,144,140,0.1),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:transform hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(0,0,0,0.3),0_16px_32px_rgba(5,144,140,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[rgba(242,169,34,0.4)] hover:bg-gradient-to-br hover:from-[rgba(242,169,34,0.1)] hover:to-[rgba(5,144,140,0.12)] md:p-[40px_30px] md:rounded-[20px] sm:p-[30px_25px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Particle effect - centered */}
          <span className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#F2A922] rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-out group-hover:opacity-100 group-hover:animate-[particleExplosion_2s_ease_infinite]"></span>

          <motion.p
            className="font-serif text-[1.1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-[#EEF4D9] leading-[1.7] text-center font-normal [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)] tracking-[0.3px] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [text-rendering:optimizeLegibility]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 1 }}
          >
            We've partnered with a{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)] group-keyword">
              top casting network
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#F2A922] to-[#05908C] transition-[width] duration-[400ms] ease-out group-keyword-hover:w-full"></span>
            </span>{' '}
            to give you access to over{' '}
            <motion.span
              className="inline-block text-[#F2A922] relative"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              30,000
              <motion.span
                className="absolute bottom-[-5px] left-0 h-[3px] bg-gradient-to-r from-[#F2A922] to-[#05908C] rounded-[2px]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </motion.span>{' '}
            paid actors — ready to deliver{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)]">
              professional
            </span>
            ,{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)]">
              on-brand
            </span>{' '}
            video content that feels{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)]">
              personal
            </span>
            ,{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)]">
              persuasive
            </span>
            , and{' '}
            <span className="relative inline-block text-[#F2A922] transition-all duration-300 hover:transform hover:-translate-y-[2px] hover:[text-shadow:0_4px_8px_rgba(242,169,34,0.4)]">
              polished
            </span>
            .
          </motion.p>
        </motion.div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes particleExplosion {
          0% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 0 0 rgba(242, 169, 34, 0.8),
              0 0 0 0 rgba(5, 144, 140, 0.6);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            box-shadow:
              0 0 0 20px rgba(242, 169, 34, 0),
              0 0 0 30px rgba(5, 144, 140, 0);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow:
              0 0 0 0 rgba(242, 169, 34, 0),
              0 0 0 0 rgba(5, 144, 140, 0);
          }
        }

        /* Keyword hover effects with expanding underline */
        .group-keyword::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #F2A922, #05908C);
          transition: width 0.4s ease;
        }

        .group-keyword:hover::after {
          width: 100%;
        }
      `}</style>
    </section>
  );
}
