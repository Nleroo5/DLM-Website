'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface ChecklistItem {
  label: string;
  passed: boolean;
}

interface StrategyResults {
  url: string;
  overallScore: number;
  passedCount: number;
  totalChecks: number;
  mobile: { performance: number; accessibility: number; seo: number; bestPractices: number };
  desktop: { performance: number; accessibility: number; seo: number; bestPractices: number };
  metrics: {
    fcp: string; lcp: string; cls: string; tbt: string; speedIndex: string;
    lcpNumeric: number; clsNumeric: number; tbtNumeric: number;
  };
  htmlAnalysis: {
    metaTitle: string | null;
    metaTitleLength: number;
    metaDescription: string | null;
    metaDescriptionLength: number;
    h1Tags: string[];
    h2Count: number;
    imagesTotal: number;
    imagesMissingAlt: number;
    schemas: string[];
    externalScripts: string[];
    totalPageSizeKb: number;
  };
  checklist: ChecklistItem[];
  aiReport: string;
}

function AnimatedScore({ target, duration = 1500, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [target, duration, delay]);

  return <span>{value}</span>;
}

function ScoreBadge({ score, label }: { score: number; label: string }) {
  const getColor = (s: number) => {
    if (s >= 90) return 'text-green-400 bg-green-500/10 border-green-500/30';
    if (s >= 50) return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
    return 'text-red-400 bg-red-500/10 border-red-500/30';
  };

  return (
    <div className={`${getColor(score)} border rounded-[12px] p-4 text-center`}>
      <div className="text-2xl font-heading font-bold"><AnimatedScore target={score} delay={300} /></div>
      <div className="text-xs mt-1 opacity-80">{label}</div>
    </div>
  );
}

function renderMarkdown(text: string) {
  // Split into lines and process
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listKey = 0;

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${listKey++}`} className="space-y-2 mb-6">
          {currentList.map((item, i) => (
            <li key={i} className="text-gray-300 font-body text-[0.95rem] leading-relaxed flex items-start gap-2">
              <span className="text-[#5FA99F] mt-1 flex-shrink-0">&#8226;</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={`h2-${i}`} className="text-white font-heading text-[1.4rem] font-bold mt-8 mb-4 flex items-center gap-3">
          <span className="w-1 h-6 bg-[#5FA99F] rounded-full" />
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed)) {
      const content = trimmed.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '');
      currentList.push(content);
    } else if (trimmed.length > 0) {
      flushList();
      elements.push(
        <p
          key={`p-${i}`}
          className="text-gray-300 font-body text-[0.95rem] leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
        />
      );
    }
  });

  flushList();
  return elements;
}

export default function WebsiteStrategy() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<StrategyResults | null>(null);
  const [error, setError] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  const loadingSteps = [
    { label: 'Connecting to Google Lighthouse', icon: '1' },
    { label: 'Scanning mobile performance', icon: '2' },
    { label: 'Scanning desktop performance', icon: '3' },
    { label: 'Fetching page HTML', icon: '4' },
    { label: 'Analyzing meta tags and schema', icon: '5' },
    { label: 'Checking Core Web Vitals', icon: '6' },
    { label: 'Running AI strategy analysis', icon: '7' },
    { label: 'Writing your custom report', icon: '8' },
  ];

  useEffect(() => {
    if (!loading) return;
    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep(prev => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 4000);
    return () => clearInterval(interval);
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const res = await fetch('/api/website-strategy', {
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
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#000000] relative">
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">Free AI-Powered Tool</span>
            <h1 className="text-white font-heading text-h1 font-bold leading-[1.1] mt-4 mb-6">
              AI Website Strategy Report
            </h1>
            <p className="text-gray-300 font-body text-body-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Enter any URL and get a custom strategy report written by AI, powered by real Google Lighthouse data. Not generic advice. Specific to your website.
            </p>

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
                  {loading ? 'Analyzing...' : 'Get My Report'}
                </button>
              </div>
            </form>

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
                  className="mt-12 max-w-lg mx-auto"
                >
                  <div className="space-y-3">
                    {loadingSteps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: i <= loadingStep ? 1 : 0.3, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-heading font-bold transition-all duration-500 ${
                          i < loadingStep
                            ? 'bg-[#5FA99F] text-white'
                            : i === loadingStep
                            ? 'bg-[#5FA99F]/30 text-[#5FA99F] border border-[#5FA99F] animate-pulse'
                            : 'bg-[#1A1A1A] text-gray-600'
                        }`}>
                          {i < loadingStep ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : step.icon}
                        </div>
                        <span className={`font-body text-[0.95rem] transition-colors duration-500 ${
                          i <= loadingStep ? 'text-white' : 'text-gray-600'
                        }`}>
                          {step.label}
                        </span>
                        {i === loadingStep && (
                          <div className="w-4 h-4 border-2 border-[#5FA99F]/30 border-t-[#5FA99F] rounded-full animate-spin" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-500 font-body text-body-sm mt-6">
                    This takes 30-45 seconds. We are running a full audit and generating your custom AI report.
                  </p>
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
                  <span>Google Lighthouse Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>AI-Written Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>24-Point Checklist</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5FA99F]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% Free</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.section
            ref={resultsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="pb-20"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Score Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 sm:p-10 mb-8"
              >
                <div className="text-center mb-8">
                  <p className="text-gray-400 font-body text-body-sm mb-1">Strategy Report for</p>
                  <p className="text-[#5FA99F] font-heading text-body-lg font-semibold break-all">{results.url}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-[4rem] font-heading font-bold text-white leading-none">
                      <AnimatedScore target={results.overallScore} />
                    </div>
                    <p className="text-gray-400 font-body text-body-sm mt-2">Overall Score</p>
                  </div>
                  <div className="hidden sm:block w-px h-20 bg-[rgba(95,169,159,0.2)]" />
                  <div className="text-center">
                    <div className="text-[2.5rem] font-heading font-bold leading-none">
                      <span className="text-green-400"><AnimatedScore target={results.passedCount} delay={200} /></span>
                      <span className="text-gray-500 text-[1.5rem]"> / {results.totalChecks}</span>
                    </div>
                    <p className="text-gray-400 font-body text-body-sm mt-2">Checks Passed</p>
                  </div>
                </div>

                {/* Score Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <ScoreBadge score={results.mobile.performance} label="Mobile Speed" />
                  <ScoreBadge score={results.mobile.seo} label="Mobile SEO" />
                  <ScoreBadge score={results.mobile.accessibility} label="Accessibility" />
                  <ScoreBadge score={results.mobile.bestPractices} label="Best Practices" />
                </div>
              </motion.div>

              {/* AI Strategy Report */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 sm:p-10 mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#5FA99F]/10 rounded-[10px] flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-white font-heading text-[1.3rem] font-bold">AI Strategy Report</h2>
                    <p className="text-gray-500 font-body text-body-sm">Powered by Google Gemini, based on real Lighthouse data</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(results.aiReport)}
                </div>
              </motion.div>

              {/* 24-Point Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[24px] p-8 sm:p-10 mb-8"
              >
                <h2 className="text-white font-heading text-[1.3rem] font-bold mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#5FA99F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  24-Point Website Checklist
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {results.checklist.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.03) }}
                      className="flex items-center gap-3 py-2 px-3 rounded-[8px] hover:bg-white/5 transition-colors"
                    >
                      {item.passed ? (
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className={`font-body text-[0.9rem] ${item.passed ? 'text-gray-300' : 'text-white'}`}>
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid sm:grid-cols-2 gap-4 mb-8"
              >
                {/* Core Web Vitals */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                  <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-4">Core Web Vitals</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'LCP', value: results.metrics.lcp, target: '< 2.5s', pass: results.metrics.lcpNumeric <= 2500 },
                      { label: 'CLS', value: results.metrics.cls, target: '< 0.1', pass: results.metrics.clsNumeric <= 0.1 },
                      { label: 'TBT', value: results.metrics.tbt, target: '< 200ms', pass: results.metrics.tbtNumeric <= 200 },
                      { label: 'FCP', value: results.metrics.fcp, target: '< 1.8s', pass: true },
                      { label: 'Speed Index', value: results.metrics.speedIndex, target: '< 3.4s', pass: true },
                    ].map((metric, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-400 font-body text-[0.85rem]">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-heading text-[0.9rem] font-semibold">{metric.value}</span>
                          <span className={`w-2 h-2 rounded-full ${metric.pass ? 'bg-green-400' : 'bg-red-400'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Page Details */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                  <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-4">Page Details</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Page Size', value: `${results.htmlAnalysis.totalPageSizeKb} KB` },
                      { label: 'Images', value: `${results.htmlAnalysis.imagesTotal} (${results.htmlAnalysis.imagesMissingAlt} missing alt)` },
                      { label: 'H1 Tags', value: `${results.htmlAnalysis.h1Tags.length}` },
                      { label: 'H2 Tags', value: `${results.htmlAnalysis.h2Count}` },
                      { label: 'Schema Types', value: results.htmlAnalysis.schemas.length > 0 ? results.htmlAnalysis.schemas.join(', ') : 'None' },
                    ].map((detail, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-400 font-body text-[0.85rem]">{detail.label}</span>
                        <span className="text-white font-heading text-[0.9rem] font-semibold">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tracking Scripts Found */}
              {results.htmlAnalysis.externalScripts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 mb-8"
                >
                  <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-3">Tracking and Scripts Detected</h3>
                  <div className="flex flex-wrap gap-2">
                    {results.htmlAnalysis.externalScripts.map((script, i) => (
                      <span key={i} className="bg-[#5FA99F]/10 text-[#5FA99F] border border-[#5FA99F]/20 px-3 py-1 rounded-full font-body text-body-sm">
                        {script}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Desktop Scores */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 mb-8"
              >
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-4">Desktop Scores</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <ScoreBadge score={results.desktop.performance} label="Performance" />
                  <ScoreBadge score={results.desktop.seo} label="SEO" />
                  <ScoreBadge score={results.desktop.accessibility} label="Accessibility" />
                  <ScoreBadge score={results.desktop.bestPractices} label="Best Practices" />
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-gradient-to-br from-[#5FA99F]/10 to-[#1A1A1A] border border-[#5FA99F]/30 rounded-[24px] p-8 sm:p-10 text-center"
              >
                <h2 className="text-white font-heading text-h3 font-bold mb-4">
                  Want Us to Fix Everything in This Report?
                </h2>
                <p className="text-gray-300 font-body text-body leading-relaxed max-w-2xl mx-auto mb-8">
                  We build fast, custom websites that score 90+ on Google PageSpeed and rank on page 1. Every issue in your report is something we fix every day for Atlanta businesses.
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

              {/* Test Another */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setResults(null);
                    setUrl('');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#5FA99F] hover:text-white font-heading font-semibold text-body transition-colors"
                >
                  Analyze Another Website
                </button>
              </div>

              {/* Data Source */}
              <div className="text-center mt-6">
                <p className="text-gray-600 font-body text-[0.8rem]">
                  All performance data from Google PageSpeed Insights API (Lighthouse). AI analysis by Google Gemini.
                  <br />
                  HTML analysis performed on publicly accessible page content.
                </p>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* How It Works (no results) */}
      {!results && !loading && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="pb-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white font-heading text-h2 font-bold text-center mb-4">
              What You Get
            </h2>
            <p className="text-gray-400 font-body text-body text-center mb-12 max-w-2xl mx-auto">
              Three powerful analyses combined into one report. All powered by Google APIs with real data.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <span className="text-[#5FA99F] font-heading font-bold text-[1.2rem]">1</span>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">Google Lighthouse Scan</h3>
                <p className="text-gray-400 font-body text-body-sm">Real performance, SEO, accessibility, and best practices scores from Google&apos;s own testing infrastructure. Mobile and desktop.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <span className="text-[#5FA99F] font-heading font-bold text-[1.2rem]">2</span>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">24-Point HTML Analysis</h3>
                <p className="text-gray-400 font-body text-body-sm">We fetch your actual page and check every meta tag, heading, image, schema markup, sitemap, robots.txt, and social sharing tag.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6">
                <div className="w-12 h-12 bg-[#5FA99F]/10 rounded-[12px] flex items-center justify-center mb-4">
                  <span className="text-[#5FA99F] font-heading font-bold text-[1.2rem]">3</span>
                </div>
                <h3 className="text-white font-heading text-[1.1rem] font-semibold mb-2">AI Strategy Report</h3>
                <p className="text-gray-400 font-body text-body-sm">Google Gemini AI reads all the real data and writes a custom strategy report with specific fixes, quick wins, and a 90-day action plan.</p>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </main>
  );
}
