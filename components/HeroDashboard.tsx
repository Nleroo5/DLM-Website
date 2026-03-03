'use client';

import { motion } from 'framer-motion';

export default function HeroDashboard() {
  return (
    <div className="w-full flex flex-col gap-2">

      {/* Browser mockup with video — compact */}
      <motion.div
        className="rounded-lg overflow-hidden border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] bg-[#0d1b2a]/90"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#0a1420] border-b border-[#1a2a3a]/60">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2">
            <div className="bg-[#1a2a3a]/60 rounded px-2 py-px text-[8px] text-gray-500 font-ui text-center">
              myvillagepeds.com
            </div>
          </div>
        </div>

        {/* Video content — smaller */}
        <div className="relative h-[140px] bg-[#111827]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/Videos/villagepeds-poster.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/Videos/villagepeds-sm.webm" type="video/webm" />
            <source src="/Videos/villagepeds.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Metrics grid — 2x2 */}
      <div className="grid grid-cols-2 gap-2">

        {/* ROAS */}
        <motion.div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">ROAS</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <motion.p
              className="text-white text-2xl font-bold font-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              6.8x
            </motion.p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+18.2%</span>
          </div>
          {/* Mini sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#5FA99F]/60 to-[#5FA99F]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.04 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Cost per Lead */}
        <motion.div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Cost per Lead</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <motion.p
              className="text-white text-2xl font-bold font-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
              $12.40
            </motion.p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F] rotate-180" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">-24.6%</span>
          </div>
          {/* Downward trend line */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[100, 92, 85, 80, 72, 68, 60, 55, 48, 42, 38, 30].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#67E8F9]/60 to-[#67E8F9]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.04 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Sessions */}
        <motion.div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Sessions</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <motion.p
              className="text-white text-2xl font-bold font-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              3,987
            </motion.p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+32.4%</span>
          </div>
          {/* Sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#5FA99F]/60 to-[#5FA99F]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.04 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Avg. Session Duration */}
        <motion.div
          className="rounded-lg p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
        >
          <span className="text-gray-400 text-[9px] font-ui tracking-wider uppercase">Avg. Session Duration</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <motion.p
              className="text-white text-2xl font-bold font-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.3 }}
            >
              2m 34s
            </motion.p>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+14.8%</span>
          </div>
          {/* Sparkline */}
          <div className="flex items-end gap-0.5 mt-2.5 h-6">
            {[50, 45, 55, 60, 58, 65, 70, 68, 75, 80, 85, 90].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#67E8F9]/60 to-[#67E8F9]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.04 }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
