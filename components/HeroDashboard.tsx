'use client';

import { motion } from 'framer-motion';

export default function HeroDashboard() {
  return (
    <div className="w-full flex flex-col gap-2">

      {/* Browser mockup with video */}
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
              villagepediatrics.com
            </div>
          </div>
        </div>

        {/* Video content */}
        <div className="relative h-[120px] bg-[#111827]">
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

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-2">
        {/* Sessions */}
        <motion.div
          className="rounded-lg p-3 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <span className="text-gray-400 text-[8px] font-ui tracking-wider uppercase">Sessions</span>
          <p className="text-white text-xl font-bold font-ui mt-1">4,821</p>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[#5FA99F] text-[10px] font-semibold font-ui">+32.4%</span>
            <svg className="w-2 h-2 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
          </div>
          <div className="flex items-end gap-0.5 mt-2 h-5">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
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

        {/* Conversion funnel */}
        <motion.div
          className="rounded-lg p-3 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <span className="text-gray-400 text-[8px] font-ui tracking-wider uppercase">Conversions</span>
          <div className="mt-2 space-y-1.5">
            {[
              { label: 'Impressions', width: '100%', value: '24.2K' },
              { label: 'Clicks', width: '62%', value: '8.1K' },
              { label: 'Visits', width: '38%', value: '4.8K' },
              { label: 'Leads', width: '18%', value: '847' },
            ].map((step, i) => (
              <div key={step.label}>
                <div className="flex justify-between items-center mb-px">
                  <span className="text-gray-500 text-[7px] font-ui">{step.label}</span>
                  <span className="text-gray-300 text-[7px] font-ui font-medium">{step.value}</span>
                </div>
                <div className="w-full h-1 bg-[#1a2a3a] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#5FA99F] to-[#67E8F9]"
                    initial={{ width: 0 }}
                    animate={{ width: step.width }}
                    transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
