'use client';

import { motion } from 'framer-motion';

/* ── Holographic animated dashboard widgets ── */

const holoStyle = {
  background: 'linear-gradient(135deg, rgba(13,27,42,0.95) 0%, rgba(20,40,60,0.95) 50%, rgba(13,27,42,0.95) 100%)',
  border: '1px solid rgba(95,169,159,0.25)',
  boxShadow: '0 0 20px rgba(95,169,159,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
};

function HoloShimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(95,169,159,0.12) 45%, rgba(242,169,33,0.08) 50%, rgba(95,169,159,0.12) 55%, transparent 70%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

function BrowserWidget() {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden flex flex-col relative" style={holoStyle}>
      <HoloShimmer />
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#0a1420]/80 border-b border-[#1a2a3a]/60 relative z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
        <div className="flex-1 mx-1">
          <div className="bg-[#1a2a3a]/60 rounded px-1.5 py-px text-[6px] text-gray-400 text-center">
            yoursite.com
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1.5 relative z-10">
        <motion.div
          className="absolute top-0 left-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #5FA99F, #67E8F9, #f2a921)' }}
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <motion.div
          className="h-1.5 w-3/4 rounded-sm"
          style={{ background: 'linear-gradient(90deg, rgba(95,169,159,0.4), rgba(103,232,249,0.3))' }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        />
        <motion.div
          className="h-1 w-full rounded-sm bg-white/8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        <motion.div
          className="h-1 w-5/6 rounded-sm bg-white/8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        <motion.div
          className="flex-1 mt-1 rounded-sm"
          style={{ background: 'linear-gradient(135deg, rgba(242,169,33,0.15), rgba(95,169,159,0.1))' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.9, duration: 0.6, type: 'spring' }}
        />
      </div>
    </div>
  );
}

function PlayButtonWidget() {
  return (
    <div className="w-full h-full rounded-lg flex items-center justify-center relative" style={holoStyle}>
      <HoloShimmer />
      <motion.div
        className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center relative z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(242,169,33,0.3), rgba(242,169,33,0.1))',
          border: '2px solid rgba(242,169,33,0.5)',
          boxShadow: '0 0 16px rgba(242,169,33,0.2)',
        }}
        animate={{ boxShadow: ['0 0 16px rgba(242,169,33,0.2)', '0 0 28px rgba(242,169,33,0.4)', '0 0 16px rgba(242,169,33,0.2)'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          className="w-5 h-5 lg:w-7 lg:h-7 text-[#f2a921] ml-0.5"
          fill="currentColor"
          viewBox="0 0 24 24"
          initial={{ scale: 0, rotate: -90 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <path d="M8 5v14l11-7z" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

function SparklineWidget() {
  const bars = [30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 100];
  return (
    <div className="w-full h-full rounded-lg p-3 flex flex-col justify-between relative" style={holoStyle}>
      <HoloShimmer />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-gray-400 text-[7px] lg:text-[8px] font-semibold tracking-wider uppercase">Leads</span>
        <motion.span
          className="text-[8px] lg:text-[9px] font-bold"
          style={{ color: '#67E8F9' }}
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1, type: 'spring' }}
        >
          +32.4%
        </motion.span>
      </div>
      <motion.p
        className="text-white text-sm lg:text-lg font-bold font-ui tabular-nums relative z-10"
        style={{ textShadow: '0 0 10px rgba(95,169,159,0.3)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        3,987
      </motion.p>
      <div className="flex items-end gap-[2px] h-[40%] relative z-10">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              background: `linear-gradient(to top, rgba(95,169,159,0.3), ${i >= 10 ? 'rgba(242,169,33,0.9)' : i >= 8 ? 'rgba(103,232,249,0.8)' : 'rgba(95,169,159,0.8)'})`,
              boxShadow: i >= 10 ? '0 0 8px rgba(242,169,33,0.3)' : i >= 8 ? '0 0 6px rgba(103,232,249,0.2)' : 'none',
            }}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.05, type: 'spring', stiffness: 100 }}
          />
        ))}
      </div>
    </div>
  );
}

function TrendLineWidget() {
  return (
    <div className="w-full h-full rounded-lg p-3 flex flex-col justify-between overflow-hidden relative" style={holoStyle}>
      <HoloShimmer />
      <div className="flex items-center justify-between relative z-10">
        <span className="text-gray-400 text-[7px] lg:text-[8px] font-semibold tracking-wider uppercase">Growth</span>
        <motion.span
          className="text-[8px] lg:text-[9px] font-bold text-[#f2a921]"
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, type: 'spring' }}
        >
          +18.2%
        </motion.span>
      </div>
      <div className="flex-1 relative mt-1 z-10">
        <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M 0 45 Q 15 40, 25 35 T 50 25 T 75 12 T 100 5"
            fill="none"
            stroke="url(#holoTrendGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          />
          <motion.path
            d="M 0 45 Q 15 40, 25 35 T 50 25 T 75 12 T 100 5 L 100 50 L 0 50 Z"
            fill="url(#holoAreaGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 1 }}
          />
          <defs>
            <linearGradient id="holoTrendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5FA99F" />
              <stop offset="50%" stopColor="#67E8F9" />
              <stop offset="100%" stopColor="#f2a921" />
            </linearGradient>
            <linearGradient id="holoAreaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#5FA99F" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f2a921" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
        <motion.div
          className="absolute w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#f2a921]"
          style={{
            top: '8%',
            right: '0%',
            boxShadow: '0 0 12px rgba(242,169,33,0.6), 0 0 24px rgba(242,169,33,0.3)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#67E8F9]"
          style={{
            top: '42%',
            left: '48%',
            boxShadow: '0 0 10px rgba(103,232,249,0.5)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        />
      </div>
    </div>
  );
}

const services = [
  {
    category: 'Web Design',
    title: 'Custom Website Design',
    description: "Fast, modern websites built to convert. If your site isn't pulling its weight, we'll rebuild it from scratch.",
    widget: BrowserWidget,
  },
  {
    category: 'Creative',
    title: 'Video & Image Ads',
    description: "Motion graphics, drone footage, and scroll-stopping images built for Meta. No more generic stock photos or DIY content.",
    widget: PlayButtonWidget,
  },
  {
    category: 'Tracking',
    title: 'Data & Analytics Setup',
    description: "We set up tracking on your website and ads so you can see exactly where every lead comes from, what's working, and what's not.",
    widget: SparklineWidget,
  },
  {
    category: 'Optimization',
    title: 'Continuous Improvement',
    description: "We test new ads, adjust budgets, and remove what's not working. Your campaigns get better every week.",
    widget: TrendLineWidget,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-[#000000] py-20 lg:py-28 px-4 sm:px-6">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#5FA99F] text-[0.85rem] lg:text-[1rem] font-heading uppercase tracking-widest mb-3 block">Our Services</span>
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] lg:text-[3.25rem] text-white font-bold">
            Everything You Need to Grow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-[#1A1A1A] border border-[rgba(95,169,159,0.15)] rounded-[24px] p-8 lg:p-16 hover:border-[#5FA99F] transition-all duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
            >
              <div className="w-20 h-16 lg:w-28 lg:h-24 mb-5 lg:mb-8">
                <service.widget />
              </div>
              <span className="text-[#5FA99F] text-xs lg:text-[0.9rem] uppercase tracking-widest font-heading font-semibold">
                {service.category}
              </span>
              <h3 className="text-white font-heading text-[1.25rem] lg:text-[2rem] font-semibold mt-4 mb-5 lg:mb-7">
                {service.title}
              </h3>
              <p className="text-gray-400 font-body text-[0.95rem] lg:text-[1.2rem] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
