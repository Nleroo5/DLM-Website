'use client';

import { motion } from 'framer-motion';

// Mini sparkline SVG for the Leads card
function Sparkline() {
  return (
    <svg viewBox="0 0 120 32" className="w-full h-8 mt-2" fill="none">
      <path
        d="M0 28 L8 24 L16 26 L24 20 L32 22 L40 16 L48 18 L56 12 L64 14 L72 8 L80 10 L88 6 L96 8 L104 4 L112 6 L120 2"
        stroke="#5FA99F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Donut chart for Traffic Sources
function DonutChart() {
  // Meta Ads: 58%, Organic: 28%, Direct: 14%
  // Circle circumference = 2 * PI * 40 ≈ 251.3
  const circumference = 251.3;
  const metaAds = circumference * 0.58;    // 145.75
  const organic = circumference * 0.28;     // 70.36
  const direct = circumference * 0.14;      // 35.18

  return (
    <svg viewBox="0 0 100 100" className="w-32 h-32 sm:w-36 sm:h-36 mx-auto">
      {/* Direct - cyan */}
      <circle
        cx="50" cy="50" r="40"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="12"
        strokeDasharray={`${direct} ${circumference - direct}`}
        strokeDashoffset={`-${metaAds + organic}`}
        transform="rotate(-90 50 50)"
        strokeLinecap="round"
      />
      {/* Organic Search - lighter teal */}
      <circle
        cx="50" cy="50" r="40"
        fill="none"
        stroke="#85C7B3"
        strokeWidth="12"
        strokeDasharray={`${organic} ${circumference - organic}`}
        strokeDashoffset={`-${metaAds}`}
        transform="rotate(-90 50 50)"
        strokeLinecap="round"
      />
      {/* Meta Ads - primary teal */}
      <circle
        cx="50" cy="50" r="40"
        fill="none"
        stroke="#5FA99F"
        strokeWidth="12"
        strokeDasharray={`${metaAds} ${circumference - metaAds}`}
        strokeDashoffset="0"
        transform="rotate(-90 50 50)"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Gauge for ROI card
function GaugeChart() {
  // Semi-circle gauge: 180 degrees
  // circumference of half circle with r=45 = PI * 45 ≈ 141.37
  const halfCircumference = 141.37;
  const fillPercent = 0.78; // 78% filled to show 6.2x
  const filled = halfCircumference * fillPercent;

  return (
    <svg viewBox="0 0 120 70" className="w-36 h-[72px] sm:w-40 sm:h-20 mx-auto">
      {/* Background arc */}
      <path
        d="M 10 65 A 50 50 0 0 1 110 65"
        fill="none"
        stroke="#1a2a3a"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Filled arc */}
      <path
        d="M 10 65 A 50 50 0 0 1 110 65"
        fill="none"
        stroke="url(#gaugeGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${halfCircumference}`}
      />
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5FA99F" />
          <stop offset="100%" stopColor="#67E8F9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Area chart for Website Traffic
function AreaChart() {
  return (
    <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5FA99F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5FA99F" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="areaGradient2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#67E8F9" stopOpacity="0.01" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="#1a2a3a" strokeWidth="0.5" />
      ))}
      {/* Paid traffic area */}
      <path
        d="M0 85 L30 78 L60 72 L90 65 L120 58 L150 50 L180 42 L210 38 L240 30 L270 25 L300 20 L300 100 L0 100 Z"
        fill="url(#areaGradient)"
      />
      <path
        d="M0 85 L30 78 L60 72 L90 65 L120 58 L150 50 L180 42 L210 38 L240 30 L270 25 L300 20"
        fill="none"
        stroke="#5FA99F"
        strokeWidth="2"
      />
      {/* Organic traffic area */}
      <path
        d="M0 92 L30 90 L60 88 L90 85 L120 82 L150 78 L180 74 L210 70 L240 65 L270 60 L300 55 L300 100 L0 100 Z"
        fill="url(#areaGradient2)"
      />
      <path
        d="M0 92 L30 90 L60 88 L90 85 L120 82 L150 78 L180 74 L210 70 L240 65 L270 60 L300 55"
        fill="none"
        stroke="#67E8F9"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 + i * 0.1, ease: 'easeOut' },
  }),
};

export default function HeroDashboard() {
  const cardClass = "rounded-2xl p-5 sm:p-6 relative overflow-hidden";
  const cardBg = "bg-[#0d1b2a]/90 border border-[#1a2a3a]";

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
      {/* Top Left - Website Traffic (spans 3 cols) */}
      <motion.div
        className={`${cardClass} ${cardBg} md:col-span-3 flex flex-col`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        <div className="flex items-start justify-between mb-1">
          <span className="text-gray-400 text-xs sm:text-sm font-ui">Website Traffic</span>
          <div className="flex gap-4 text-right">
            <div>
              <p className="text-gray-500 text-[10px] sm:text-xs font-ui">Visitors</p>
              <p className="text-white text-sm sm:text-base font-semibold font-ui">47,200</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px] sm:text-xs font-ui">Sessions</p>
              <p className="text-white text-sm sm:text-base font-semibold font-ui">68,450</p>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-[100px] sm:min-h-[130px] mt-2">
          <AreaChart />
        </div>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5FA99F]" />
            <span className="text-gray-400 text-[10px] sm:text-xs font-ui">Paid</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#67E8F9]" />
            <span className="text-gray-400 text-[10px] sm:text-xs font-ui">Organic</span>
          </div>
        </div>
      </motion.div>

      {/* Top Right - Conversion Snapshot (spans 2 cols) */}
      <motion.div
        className={`${cardClass} ${cardBg} md:col-span-2`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <span className="text-gray-400 text-xs sm:text-sm font-ui">Live Conversions</span>
        <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs sm:text-sm font-ui">Conversion Rate</span>
            <span className="text-[#5FA99F] text-lg sm:text-xl font-bold font-ui">8.7%</span>
          </div>
          <div className="w-full h-1.5 bg-[#1a2a3a] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#5FA99F] to-[#67E8F9] rounded-full" style={{ width: '87%' }} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs sm:text-sm font-ui">Bounce Rate</span>
            <span className="text-white text-lg sm:text-xl font-bold font-ui">24.3%</span>
          </div>
          <div className="w-full h-1.5 bg-[#1a2a3a] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#67E8F9] to-[#5FA99F] rounded-full" style={{ width: '24.3%' }} />
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-gray-400 text-xs sm:text-sm font-ui">Avg. Session</span>
            <span className="text-white text-lg sm:text-xl font-bold font-ui">3:42</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Left - Traffic Sources (donut) */}
      <motion.div
        className={`${cardClass} ${cardBg} md:col-span-2`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        <span className="text-gray-400 text-xs sm:text-sm font-ui">Traffic Sources</span>
        <div className="mt-3">
          <DonutChart />
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#5FA99F]" />
            <span className="text-gray-400 text-[10px] sm:text-xs font-ui">Meta Ads 58%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#85C7B3]" />
            <span className="text-gray-400 text-[10px] sm:text-xs font-ui">Organic 28%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#67E8F9]" />
            <span className="text-gray-400 text-[10px] sm:text-xs font-ui">Direct 14%</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Center - Leads */}
      <motion.div
        className={`${cardClass} ${cardBg} md:col-span-1 flex flex-col items-center justify-center text-center`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <span className="text-gray-400 text-xs sm:text-sm font-ui">Leads</span>
        <p className="text-white text-3xl sm:text-4xl font-bold font-ui mt-2">12,400</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#5FA99F] text-sm font-semibold font-ui">+124.6%</span>
          <svg className="w-3 h-3 text-[#5FA99F]" fill="currentColor" viewBox="0 0 10 10">
            <path d="M5 0 L10 7 L0 7 Z" />
          </svg>
        </div>
        <Sparkline />
      </motion.div>

      {/* Bottom Right - Ad Spend ROI (gauge) */}
      <motion.div
        className={`${cardClass} ${cardBg} md:col-span-2 flex flex-col items-center justify-center text-center`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <span className="text-gray-400 text-xs sm:text-sm font-ui">Ad Spend ROI</span>
        <div className="relative mt-2">
          <GaugeChart />
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            <span className="text-white text-3xl sm:text-4xl font-bold font-ui">6.2x</span>
          </div>
        </div>
        <p className="text-gray-500 text-[10px] sm:text-xs font-ui tracking-widest uppercase mt-1">Return on Ad Spend</p>
      </motion.div>
    </div>
  );
}
