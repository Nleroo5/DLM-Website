'use client';

import { motion } from 'framer-motion';

// Heatmap dot component
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

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.15, ease: 'easeOut' },
  }),
};

export default function HeroDashboard() {
  return (
    <div className="w-full flex flex-col gap-3">

      {/* Browser mockup with heatmap */}
      <motion.div
        className="rounded-xl overflow-hidden border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] bg-[#0d1b2a]/90 backdrop-blur-sm"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a1420] border-b border-[#1a2a3a]/60">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2">
            <div className="bg-[#1a2a3a]/60 rounded-md px-3 py-0.5 text-[10px] text-gray-500 font-ui text-center">
              yourwebsite.com
            </div>
          </div>
        </div>

        {/* Website content with heatmap overlay */}
        <div className="relative h-[180px] sm:h-[200px] bg-[#111827] p-4">
          {/* Fake website wireframe */}
          <div className="space-y-3">
            {/* Nav bar wireframe */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-2 bg-[#1f2937] rounded" />
              <div className="flex gap-3">
                <div className="w-8 h-1.5 bg-[#1f2937] rounded" />
                <div className="w-8 h-1.5 bg-[#1f2937] rounded" />
                <div className="w-8 h-1.5 bg-[#1f2937] rounded" />
              </div>
            </div>
            {/* Hero wireframe */}
            <div className="mt-4 space-y-2">
              <div className="w-3/4 h-3 bg-[#1f2937] rounded" />
              <div className="w-1/2 h-3 bg-[#1f2937] rounded" />
              <div className="w-2/3 h-2 bg-[#1f2937]/60 rounded mt-3" />
              <div className="w-1/2 h-2 bg-[#1f2937]/60 rounded" />
            </div>
            {/* CTA button wireframe */}
            <div className="mt-4">
              <div className="w-24 h-6 bg-[#5FA99F]/30 rounded-md border border-[#5FA99F]/40" />
            </div>
            {/* Content blocks wireframe */}
            <div className="flex gap-3 mt-4">
              <div className="flex-1 h-12 bg-[#1f2937]/40 rounded" />
              <div className="flex-1 h-12 bg-[#1f2937]/40 rounded" />
              <div className="flex-1 h-12 bg-[#1f2937]/40 rounded" />
            </div>
          </div>

          {/* Heatmap dots overlay */}
          <HeatDot x={38} y={35} size={50} intensity={0.7} delay={0.8} />
          <HeatDot x={42} y={38} size={35} intensity={0.5} delay={0.9} />
          <HeatDot x={25} y={70} size={45} intensity={0.8} delay={1.0} />
          <HeatDot x={28} y={68} size={30} intensity={0.4} delay={1.1} />
          <HeatDot x={50} y={55} size={25} intensity={0.3} delay={1.2} />
          <HeatDot x={15} y={20} size={20} intensity={0.25} delay={1.3} />
          <HeatDot x={70} y={45} size={28} intensity={0.35} delay={1.15} />

          {/* "Heatmap" label */}
          <motion.div
            className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0a1420]/80 border border-[#1a2a3a]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span className="text-[9px] text-gray-400 font-ui tracking-wider uppercase">Live Heatmap</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom row: two compact cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* Click tracking card */}
        <motion.div
          className="rounded-xl p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="text-gray-400 text-[10px] sm:text-xs font-ui tracking-wider uppercase">User Sessions</span>
          <p className="text-white text-2xl sm:text-3xl font-bold font-ui mt-2">4,821</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[#5FA99F] text-xs font-semibold font-ui">+32.4%</span>
            <svg className="w-2.5 h-2.5 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
              <path d="M5 0 L10 7 L0 7 Z" />
            </svg>
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1 mt-3 h-8">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#5FA99F]/60 to-[#5FA99F]"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.05 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Conversion funnel card */}
        <motion.div
          className="rounded-xl p-4 bg-[#0d1b2a]/90 border border-[#1a2a3a]/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-sm"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <span className="text-gray-400 text-[10px] sm:text-xs font-ui tracking-wider uppercase">Conversion Path</span>
          <div className="mt-3 space-y-2">
            {/* Funnel steps */}
            {[
              { label: 'Impressions', width: '100%', value: '24.2K' },
              { label: 'Clicks', width: '62%', value: '8.1K' },
              { label: 'Visits', width: '38%', value: '4.8K' },
              { label: 'Conversions', width: '18%', value: '847' },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-gray-500 text-[9px] sm:text-[10px] font-ui">{step.label}</span>
                  <span className="text-gray-300 text-[9px] sm:text-[10px] font-ui font-medium">{step.value}</span>
                </div>
                <div className="w-full h-1.5 bg-[#1a2a3a] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#5FA99F] to-[#67E8F9]"
                    initial={{ width: 0 }}
                    animate={{ width: step.width }}
                    transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
