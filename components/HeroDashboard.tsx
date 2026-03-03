'use client';

import { motion } from 'framer-motion';

function HeatDot({ x, y, size, intensity, delay }: { x: number; y: number; size: number; intensity: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(239,68,68,${intensity}) 0%, rgba(251,146,60,${intensity * 0.6}) 40%, rgba(34,197,94,${intensity * 0.2}) 70%, transparent 100%)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    />
  );
}

export default function HeroDashboard() {
  return (
    <div className="w-full flex flex-col gap-2">

      {/* Browser mockup with heatmap */}
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
              yourwebsite.com
            </div>
          </div>
        </div>

        {/* Website with heatmap */}
        <div className="relative h-[120px] bg-[#111827] p-3">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-12 h-1.5 bg-[#1f2937] rounded" />
              <div className="flex gap-2">
                <div className="w-6 h-1 bg-[#1f2937] rounded" />
                <div className="w-6 h-1 bg-[#1f2937] rounded" />
                <div className="w-6 h-1 bg-[#1f2937] rounded" />
              </div>
            </div>
            <div className="mt-2 space-y-1.5">
              <div className="w-3/4 h-2 bg-[#1f2937] rounded" />
              <div className="w-1/2 h-2 bg-[#1f2937] rounded" />
              <div className="w-2/3 h-1.5 bg-[#1f2937]/60 rounded mt-2" />
            </div>
            <div className="mt-2">
              <div className="w-16 h-4 bg-[#5FA99F]/30 rounded border border-[#5FA99F]/40" />
            </div>
          </div>

          <HeatDot x={35} y={35} size={35} intensity={0.7} delay={0.8} />
          <HeatDot x={40} y={40} size={22} intensity={0.5} delay={0.9} />
          <HeatDot x={22} y={72} size={30} intensity={0.8} delay={1.0} />
          <HeatDot x={60} y={50} size={18} intensity={0.3} delay={1.1} />
          <HeatDot x={75} y={30} size={16} intensity={0.25} delay={1.2} />

          <motion.div
            className="absolute top-1.5 right-1.5 px-1.5 py-px rounded bg-[#0a1420]/80 border border-[#1a2a3a]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="text-[7px] text-gray-400 font-ui tracking-wider uppercase">Live Heatmap</span>
          </motion.div>
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
