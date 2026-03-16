'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface GraderResults {
  url: string;
  overallScore: number;
  grade: string;
  gradeColor: string;
  mobile: {
    performance: number;
    accessibility: number;
    seo: number;
    bestPractices: number;
  };
  desktop: {
    performance: number;
    accessibility: number;
    seo: number;
    bestPractices: number;
  };
  metrics: {
    fcp: string;
    lcp: string;
    cls: string;
    tbt: string;
    speedIndex: string;
    interactive: string;
    lcpNumeric: number;
    clsNumeric: number;
    tbtNumeric: number;
  };
  isHttps: boolean;
  recommendations: Array<{
    category: string;
    issue: string;
    impact: string;
    priority: 'high' | 'medium' | 'low';
  }>;
}

function CircularGauge({ score, size = 200, strokeWidth = 12, delay = 0 }: { score: number; size?: number; strokeWidth?: number; delay?: number }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 90) return '#22c55e';
    if (s >= 50) return '#eab308';
    return '#ef4444';
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedScore(Math.round(score * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [score, delay]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1A1A1A"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(animatedScore)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.1s ease-out, stroke 0.3s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-heading font-bold" style={{ fontSize: size * 0.25 }}>
          {animatedScore}
        </span>
      </div>
    </div>
  );
}

function ScoreCard({ label, score, delay }: { label: string; score: number; delay: number }) {
  const getScoreLabel = (s: number) => {
    if (s >= 90) return 'Good';
    if (s >= 50) return 'Needs Work';
    return 'Poor';
  };

  const getColor = (s: number) => {
    if (s >= 90) return 'text-green-400';
    if (s >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 flex flex-col items-center"
    >
      <CircularGauge score={score} size={120} strokeWidth={8} delay={delay * 1000} />
      <p className="text-white font-heading font-semibold mt-4 text-[1rem]">{label}</p>
      <p className={`${getColor(score)} font-body text-body-sm mt-1`}>{getScoreLabel(score)}</p>
    </motion.div>
  );
}

function MetricRow({ label, value, status }: { label: string; value: string; status: 'good' | 'needs-improvement' | 'poor' }) {
  const colors = {
    good: 'bg-green-500/20 text-green-400',
    'needs-improvement': 'bg-yellow-500/20 text-yellow-400',
    poor: 'bg-red-500/20 text-red-400',
  };

  const labels = {
    good: 'Good',
    'needs-improvement': 'Needs Work',
    poor: 'Poor',
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-[rgba(95,169,159,0.1)] last:border-0">
      <span className="text-gray-300 font-body text-[0.95rem]">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-white font-heading font-semibold text-[0.95rem]">{value}</span>
        <span className={`${colors[status]} px-2 py-0.5 rounded-full text-xs font-semibold`}>
          {labels[status]}
        </span>
      </div>
    </div>
  );
}

export default function WebsiteGrader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GraderResults | null>(null);
  const [error, setError] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);

  const loadingMessages = [
    'Connecting to Google Lighthouse...',
    'Analyzing mobile performance...',
    'Checking desktop speed...',
    'Evaluating SEO signals...',
    'Testing accessibility...',
    'Measuring Core Web Vitals...',
    'Checking security...',
    'Generating your report...',
  ];

  useEffect(() => {
    if (!loading) return;
    let index = 0;
    setLoadingMessage(loadingMessages[0]);
    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const res = await fetch('/api/website-grader', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to analyze website.');
        return;
      }

      setResults(data);

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getLcpStatus = (val: number): 'good' | 'needs-improvement' | 'poor' => {
    if (val <= 2500) return 'good';
    if (val <= 4000) return 'needs-improvement';
    return 'poor';
  };

  const getClsStatus = (val: number): 'good' | 'needs-improvement' | 'poor' => {
    if (val <= 0.1) return 'good';
    if (val <= 0.25) return 'needs-improvement';
    return 'poor';
  };

  const getTbtStatus = (val: number): 'good' | 'needs-improvement' | 'poor' => {
    if (val <= 200) return 'good';
    if (val <= 600) return 'needs-improvement';
    return 'poor';
  };

  return (
    <main className="min-h-screen bg-[#000000] relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero / Input Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">Free Tool</span>
            <h1 className="text-white font-heading text-h1 font-bold leading-[1.1] mt-4 mb-6">
              Website Health Grader
            </h1>
            <p className="text-gray-300 font-body text-body-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Get a free, instant report card for any website. Powered by Google Lighthouse, the same technology Google uses to evaluate your site for search rankings.
            </p>

            {/* URL Input Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter any website URL (e.g. yoursite.com)"
                    className="w-full bg-[#1A1A1A] border border-[rgba(95,169,159,0.3)] rounded-[12px] px-4 pl-12 py-4 text-white font-body text-body placeholder-gray-500 focus:outline-none focus:border-[#5FA99F] transition-colors"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !url.trim()}
                  className="bg-[#5FA99F] hover:bg-[#4D9189] disabled:bg-[#5FA99F]/50 disabled:cursor-not-allowed text-white font-heading font-semibold px-8 py-4 rounded-[12px] transition-colors whitespace-nowrap"
                >
                  {loading ? 'Analyzing...' : 'Grade My Website'}
                </button>
              </div>
            </form>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 bg-red-500/10 border border-red-500/30 rounded-[12px] p-4 max-w-2xl mx-auto"
                >
                  <p className="text-red-400 font-body text-body-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading State */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-12"
                >
                  <div className="max-w-md mx-auto">
                    {/* Spinner */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 border-4 border-[#1A1A1A] border-t-[#5FA99F] rounded-full animate-spin" />
                    </div>
                    <motion.p
                      key={loadingMessage}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-gray-300 font-body text-body"
                    >
                      {loadingMessage}
                    </motion.p>
                    <p className="text-gray-500 font-body text-body-sm mt-2">
                      This takes 15-30 seconds. We are running a full Google Lighthouse audit.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust Signals */}
            {!results && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-wrap justify-center gap-6 text-gray-500 font-body text-body-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Powered by Google Lighthouse</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No email required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Real data, not estimates</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <AnimatePresence>
        {results && (
          <motion.section
            ref={resultsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pb-20"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Overall Grade */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-12 mb-8 text-center"
              >
                <p className="text-gray-400 font-body text-body-sm mb-2">Results for</p>
                <p className="text-[#5FA99F] font-heading text-body-lg font-semibold mb-8 break-all">{results.url}</p>

                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <CircularGauge score={results.overallScore} size={220} strokeWidth={14} delay={200} />
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-[4rem] font-heading font-bold leading-none"
                      style={{ color: results.gradeColor }}
                    >
                      {results.grade}
                    </span>
                    <div className="text-left">
                      <p className="text-white font-heading text-[1.2rem] font-semibold">Overall Grade</p>
                      <p className="text-gray-400 font-body text-body-sm">
                        {results.overallScore >= 90 && 'Excellent! Your website is in great shape.'}
                        {results.overallScore >= 80 && results.overallScore < 90 && 'Good, but there is room for improvement.'}
                        {results.overallScore >= 70 && results.overallScore < 80 && 'Average. Several areas need attention.'}
                        {results.overallScore >= 50 && results.overallScore < 70 && 'Below average. Your site needs significant improvements.'}
                        {results.overallScore < 50 && 'Critical issues detected. Your site is hurting your business.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* HTTPS Badge */}
                <div className="mt-8 flex justify-center">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${results.isHttps ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {results.isHttps ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      )}
                    </svg>
                    <span className="font-body text-body-sm font-semibold">
                      {results.isHttps ? 'HTTPS Secure' : 'Not Secure - Missing HTTPS'}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Scores */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Mobile Scores
                  <span className="text-gray-500 font-body text-body-sm font-normal">(70% of your overall grade)</span>
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <ScoreCard label="Performance" score={results.mobile.performance} delay={0.3} />
                  <ScoreCard label="SEO" score={results.mobile.seo} delay={0.4} />
                  <ScoreCard label="Accessibility" score={results.mobile.accessibility} delay={0.5} />
                  <ScoreCard label="Best Practices" score={results.mobile.bestPractices} delay={0.6} />
                </div>
              </motion.div>

              {/* Desktop Scores */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Desktop Scores
                  <span className="text-gray-500 font-body text-body-sm font-normal">(30% of your overall grade)</span>
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <ScoreCard label="Performance" score={results.desktop.performance} delay={0.5} />
                  <ScoreCard label="SEO" score={results.desktop.seo} delay={0.6} />
                  <ScoreCard label="Accessibility" score={results.desktop.accessibility} delay={0.7} />
                  <ScoreCard label="Best Practices" score={results.desktop.bestPractices} delay={0.8} />
                </div>
              </motion.div>

              {/* Core Web Vitals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[24px] p-6 sm:p-8 mb-8"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Core Web Vitals (Mobile)
                </h2>
                <div className="space-y-1">
                  <MetricRow
                    label="Largest Contentful Paint (LCP)"
                    value={results.metrics.lcp}
                    status={getLcpStatus(results.metrics.lcpNumeric)}
                  />
                  <MetricRow
                    label="Cumulative Layout Shift (CLS)"
                    value={results.metrics.cls}
                    status={getClsStatus(results.metrics.clsNumeric)}
                  />
                  <MetricRow
                    label="Total Blocking Time (TBT)"
                    value={results.metrics.tbt}
                    status={getTbtStatus(results.metrics.tbtNumeric)}
                  />
                  <MetricRow
                    label="First Contentful Paint (FCP)"
                    value={results.metrics.fcp}
                    status={getLcpStatus(results.metrics.lcpNumeric)}
                  />
                  <MetricRow
                    label="Speed Index"
                    value={results.metrics.speedIndex}
                    status={results.mobile.performance >= 90 ? 'good' : results.mobile.performance >= 50 ? 'needs-improvement' : 'poor'}
                  />
                </div>
              </motion.div>

              {/* Recommendations */}
              {results.recommendations.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[24px] p-6 sm:p-8 mb-8"
                >
                  <h2 className="text-white font-heading text-h3 font-bold mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Recommendations
                  </h2>
                  <div className="space-y-4">
                    {results.recommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + (index * 0.1) }}
                        className={`border-l-4 rounded-r-[12px] p-5 ${
                          rec.priority === 'high'
                            ? 'border-red-500 bg-red-500/5'
                            : rec.priority === 'medium'
                            ? 'border-yellow-500 bg-yellow-500/5'
                            : 'border-green-500 bg-green-500/5'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                            rec.priority === 'high'
                              ? 'bg-red-500/20 text-red-400'
                              : rec.priority === 'medium'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {rec.priority === 'high' ? 'High Priority' : rec.priority === 'medium' ? 'Medium' : 'Looking Good'}
                          </span>
                          <span className="text-gray-500 font-body text-body-sm">{rec.category}</span>
                        </div>
                        <p className="text-white font-body text-[0.95rem] mt-2">{rec.issue}</p>
                        <p className="text-gray-400 font-body text-body-sm mt-1">{rec.impact}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-gradient-to-br from-[#5FA99F]/10 to-[#1A1A1A] border border-[#5FA99F]/30 rounded-[24px] p-8 sm:p-10 text-center"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-4">
                  Want to Fix These Issues?
                </h2>
                <p className="text-gray-300 font-body text-body leading-relaxed max-w-2xl mx-auto mb-8">
                  We build fast, modern websites that score 90+ on Google PageSpeed. No templates. No plugins. Just clean, custom code built to convert visitors into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/book"
                    className="bg-[#5FA99F] hover:bg-[#4D9189] text-white font-heading font-semibold px-8 py-4 rounded-[12px] transition-colors no-underline"
                  >
                    Get a Free Consultation
                  </Link>
                  <Link
                    href="/case-studies"
                    className="bg-transparent border border-[#5FA99F] text-[#5FA99F] hover:bg-[#5FA99F]/10 font-heading font-semibold px-8 py-4 rounded-[12px] transition-colors no-underline"
                  >
                    See Our Work
                  </Link>
                </div>
              </motion.div>

              {/* Test Another Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setResults(null);
                    setUrl('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#5FA99F] hover:text-white font-heading font-semibold text-body transition-colors"
                >
                  Grade Another Website
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* How It Works Section (shown when no results) */}
      {!results && !loading && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pb-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-heading text-h2 font-bold text-center mb-12">
              What We Check
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">Performance</h3>
                <p className="text-gray-400 font-body text-body-sm">Page speed, load times, and Core Web Vitals. The same metrics Google uses for rankings.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">SEO</h3>
                <p className="text-gray-400 font-body text-body-sm">Meta tags, headings, link text, crawlability, and structured data checks.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-400 font-body text-body-sm">Color contrast, alt text, ARIA labels, and keyboard navigation compliance.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">Security</h3>
                <p className="text-gray-400 font-body text-body-sm">HTTPS encryption, best practices, and vulnerability indicators.</p>
              </div>
            </div>

            {/* Data Source Note */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 font-body text-body-sm">
                All scores come directly from Google&apos;s PageSpeed Insights API, powered by Lighthouse.
                <br />
                These are the same metrics Google uses to evaluate websites for search rankings.
              </p>
            </div>
          </div>
        </motion.section>
      )}
    </main>
  );
}
