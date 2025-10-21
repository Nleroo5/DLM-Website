'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MetaAdsLandingPagesPage() {
  return <>
    <div className="hide-particles min-h-screen bg-[#F8FAFB]">
      {/* Hero Section - Full Width */}
      <motion.div
        className="relative w-full pt-[120px] pb-[100px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landingpage.jpg"
            alt="Business owner analyzing ad performance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(11,29,46,0.92)] via-[rgba(11,29,46,0.88)] to-[rgba(95,169,159,0.25)]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-[#3B82F6] font-semibold text-[1.1rem] tracking-[0.15em] uppercase">Marketing Strategy</span>
            </motion.div>
            <h1 className="text-[#F8F6F3] font-serif text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[1.15] mb-6">
              Why Your Meta Ads Need a Dedicated Landing Page
            </h1>
            <p className="text-[#D4A574] text-[1.5rem] sm:text-[1.75rem] leading-[1.6] font-light">
              The one change that can 2-3x your conversion rates and transform your advertising ROI.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Article Meta Info */}
      <div className="bg-white border-b border-[#E5E3DF]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-6">
          <div className="flex flex-wrap items-center gap-6 text-[#6B7280] text-[1.375rem]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Meta Ads, Landing Pages, Conversion Optimization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="bg-[#F8FAFB]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 py-20">

          {/* Introduction - Side by Side */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text */}
                <div>
                  <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                    Picture this: You're spending $2,000 a month on Meta ads. People are clicking. Your phone shows hundreds of visitors hitting your website. But almost nobody is converting.
                  </p>

                  <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                    You check your analytics and your heart sinks. Your ads are sending people to your homepage, where they land, look around for 8 seconds, and leave.
                  </p>

                  <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border-l-4 border-[#3B82F6] rounded-xl p-8 shadow-sm">
                    <p className="text-[#1E40AF] text-[2.25rem] leading-[1.7] font-semibold mb-0">
                      Here's the truth: Your homepage isn't designed to convert paid traffic. It's designed to explain everything about your business to everyone.
                    </p>
                  </div>
                </div>

                {/* Right Column - Stats Box */}
                <div className="bg-white rounded-2xl p-10 shadow-xl border border-[#E5E3DF]">
                  <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-8 text-center">The Numbers Don't Lie</h3>
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[#6B7280] text-[1.5rem]">Homepage</span>
                        <span className="text-[#DC2626] text-[2.25rem] font-bold">2-3%</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#DC2626] rounded-full" style={{ width: '3%' }}></div>
                      </div>
                      <p className="text-[#6B7280] text-[1.375rem] mt-2">Conversion rate</p>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[#6B7280] text-[1.5rem]">Dedicated Landing Page</span>
                        <span className="text-[#059669] text-[2.25rem] font-bold">6-12%</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#059669] rounded-full" style={{ width: '12%' }}></div>
                      </div>
                      <p className="text-[#6B7280] text-[1.375rem] mt-2">Conversion rate</p>
                    </div>
                  </div>
                  <p className="text-[#6B7280] text-[1.5rem] mt-6 text-center italic">Source: Unbounce Landing Page Report, 2024</p>
                </div>
              </div>
          </motion.section>

          {/* What You'll Learn - Full Width Dark Section */}
          <motion.section
            className="mb-24 bg-gradient-to-br from-[#0B1D2E] to-[#162E42] py-16 -mx-6 sm:-mx-12 lg:-mx-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16">
              <h3 className="text-[#60A5FA] text-[2.25rem] font-bold mb-12 text-center">
                What You'll Learn in This Guide
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#F8F6F3] text-[1.5rem] leading-[1.6]">Why dedicated landing pages outperform homepages</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#F8F6F3] text-[1.5rem] leading-[1.6]">The 5 essential elements that make landing pages convert</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#F8F6F3] text-[1.5rem] leading-[1.6]">Real numbers showing the cost of getting it wrong</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#F8F6F3] text-[1.5rem] leading-[1.6]">How to set up tracking that turns clicks into customers</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 1 - The Message Match Problem */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-12">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-lg">
                  <span className="text-white text-[2.25rem] font-bold">1</span>
                </div>
                <h2 className="text-[#0B1D2E] font-serif text-[2.25rem] sm:text-[2.25rem] lg:text-[2.25rem] font-bold leading-tight">
                  The Message Match Problem
                </h2>
              </div>

              <div className="mb-12">
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  When someone clicks your Meta ad, they have one thing in mind: the specific promise you made in that ad.
                </p>

                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  They're not interested in your full menu of services, your company history, or your blog posts. They want the thing you just showed them.
                </p>
              </div>

              {/* Problem Example */}
              <div className="bg-white rounded-2xl border-2 border-[#EF4444] p-8 my-10 shadow-md">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-[#DC2626] text-[2.25rem] font-bold mb-4">Real Example: The Confused Visitor</h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/confused.jpg"
                      alt="Confused visitor on homepage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                  <div className="bg-[#FEF2F2] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.375rem] font-semibold mb-2">The Ad Says:</p>
                    <p className="text-[#0B1D2E] text-[1.375rem]">"Get a free teeth whitening consultation - Limited spots this week"</p>
                  </div>

                  <div className="text-center text-[#DC2626]">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="bg-[#FEF2F2] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.375rem] font-semibold mb-3">They Click and Land On:</p>
                    <ul className="space-y-2 text-[#0B1D2E] text-[1.5rem]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>General dentistry information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>Eight different services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>Team bios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>A navigation menu with 12 options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] mt-1">•</span>
                        <span>No mention of the free consultation anywhere obvious</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#DC2626] text-white rounded-xl p-4 text-center">
                    <p className="text-[1.375rem] font-bold">Result: They bounce in 6 seconds.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Solution Example */}
              <div className="bg-white rounded-2xl border-2 border-[#5FA99F] p-8 my-10 shadow-md">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-[#5FA99F] text-[2.25rem] font-bold mb-4">The Solution: Perfect Message Match</h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/happy.jpg"
                      alt="Happy customer on landing page"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.375rem] font-semibold mb-2">The Ad Says:</p>
                    <p className="text-[#0B1D2E] text-[1.375rem]">"Get a free teeth whitening consultation - Limited spots this week"</p>
                  </div>

                  <div className="text-center text-[#5FA99F]">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.375rem] font-semibold mb-3">They Click and Land On:</p>
                    <ul className="space-y-2 text-[#0B1D2E] text-[1.5rem]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">•</span>
                        <span>Headline: "Claim Your Free Whitening Consultation"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">•</span>
                        <span>The same image/style from the ad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">•</span>
                        <span>A simple form to book their spot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">•</span>
                        <span>No navigation, no distractions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#3B82F6] mt-1">•</span>
                        <span>One clear action: Book Now</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#5FA99F] text-white rounded-xl p-4 text-center">
                    <p className="text-[1.375rem] font-bold">Result: 12% of visitors book a consultation.</p>
                    <p className="text-[#F8F6F3] text-[1.125rem] mt-2 italic">Source: WordStream Conversion Rate Benchmark Study</p>
                  </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-6 my-8">
                <p className="text-[#92400E] text-[1.5rem] leading-[1.7] font-semibold mb-0">
                  When your ad promise matches your landing page experience exactly, people convert. It's that simple.
                </p>
              </div>
          </motion.section>

          {/* Section 2 - The 5 Elements */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-md">
                <span className="text-white text-[1.3rem] font-bold">2</span>
              </div>
              <h2 className="text-[#0B1D2E] font-serif text-[2.25rem] sm:text-[2.25rem] lg:text-[2.25rem] font-bold leading-tight">
                The 5 Elements Every High-Converting Landing Page Must Have
              </h2>
            </div>

            <div className="space-y-8">
              {/* Element 1 */}
              <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">
                  1. Matching Headline
                </h3>
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  The first thing visitors see should echo what they just clicked on. Word-for-word if possible.
                </p>
                <div className="bg-[#EFF6FF] rounded-xl p-6 mb-4">
                  <p className="text-[#0B1D2E] mb-3"><span className="font-bold text-[#3B82F6]">Your Ad:</span> "Book Your Free Marketing Audit This Week"</p>
                  <p className="text-[#0B1D2E]"><span className="font-bold text-[#2563EB]">Your Headline:</span> "Book Your Free Marketing Audit"</p>
                </div>
                <p className="text-[#6B7280] text-[1.5rem] italic">
                  This instant recognition tells visitors: "Yes, I'm in the right place." Bounce rate drops immediately.
                </p>
              </div>

              {/* Element 2 */}
              <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">
                  2. One Clear Offer (No Distractions)
                </h3>
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  Your landing page exists for one purpose: get the visitor to take one action.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#FEF2F2] border-2 border-[#FCA5A5] rounded-xl p-6">
                    <p className="font-bold text-[#DC2626] text-[1.375rem] mb-3">Don't Include:</p>
                    <ul className="space-y-2 text-[#374151] text-[1.5rem]">
                      <li>• Navigation menu</li>
                      <li>• Links to other pages</li>
                      <li>• Multiple CTAs</li>
                      <li>• Unrelated services</li>
                    </ul>
                  </div>
                  <div className="bg-[#EFF6FF] border-2 border-[#60A5FA] rounded-xl p-6">
                    <p className="font-bold text-[#2563EB] text-[1.375rem] mb-3">Do Include:</p>
                    <ul className="space-y-2 text-[#374151] text-[1.5rem]">
                      <li>• One headline</li>
                      <li>• One offer</li>
                      <li>• One form/button</li>
                      <li>• One clear next step</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#6B7280] text-[1.5rem] italic mt-6">
                  Every additional option you add cuts your conversion rate. Remove everything that doesn't support the one action.
                </p>
              </div>

              {/* Element 3 */}
              <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">
                  3. Simple Form (Minimal Fields)
                </h3>
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  Every form field you require cuts your conversion rate by about 10%.
                </p>
                <div className="bg-[#EFF6FF] rounded-xl p-6">
                  <p className="text-[#0B1D2E] font-bold mb-4">Only Ask For What You Actually Need:</p>
                  <p className="text-[#2563EB] font-semibold mb-2">For a consultation booking:</p>
                  <ul className="space-y-2 text-[#374151] ml-6 mb-4">
                    <li>• Name</li>
                    <li>• Phone or Email</li>
                    <li>• That's it</li>
                  </ul>
                  <p className="text-[#6B7280] text-[1.125rem] italic">
                    You can get the rest of their information later, when they're already a customer.
                  </p>
                </div>
              </div>

              {/* Element 4 */}
              <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">
                  4. Social Proof (Testimonials & Trust Signals)
                </h3>
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  People need to know others have done this before and got results.
                </p>
                <div className="bg-[#EFF6FF] rounded-xl p-6">
                  <p className="text-[#0B1D2E] font-bold mb-4">Include 2-3 of These:</p>
                  <ul className="space-y-3 text-[#374151]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>A testimonial quote from a happy customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Star rating (Google reviews, Facebook reviews)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Number of customers served ("Join 500+ happy customers")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Before/after photos (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">•</span>
                      <span>Trust badges (Better Business Bureau, industry certifications)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Element 5 */}
              <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">
                  5. Mobile-Optimized (Fast & Thumb-Friendly)
                </h3>
                <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-6">
                  60-80% of your Meta ad traffic comes from mobile devices. If your landing page isn't mobile-perfect, you're losing half your leads.
                </p>
                <p className="text-[#6B7280] text-[1.125rem] italic mb-6">Source: Meta Business Mobile Advertising Statistics, 2024</p>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                  <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg mx-auto max-w-[300px]">
                    <Image
                      src="/images/phone.jpg"
                      alt="Mobile phone showing landing page"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                  <p className="text-[#0B1D2E] font-bold mb-4">Mobile Must-Haves:</p>
                  <ul className="space-y-3 text-[#374151]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>Loads in under 3 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>Large, tappable buttons (not tiny links)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>Form fields easy to fill on phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>No horizontal scrolling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3B82F6] mt-1">✓</span>
                      <span>Text readable without zooming</span>
                    </li>
                  </ul>
                </div>
                </div>

                <div className="bg-[#FEF2F2] border-l-4 border-[#DC2626] rounded-xl p-5 mt-6">
                  <p className="text-[#DC2626] font-semibold">
                    Test this yourself: Open your landing page on your phone. If you have to pinch and zoom to read or fill out the form, you're losing money.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - The Cost */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-md">
                <span className="text-white text-[1.3rem] font-bold">3</span>
              </div>
              <h2 className="text-[#0B1D2E] font-serif text-[2.25rem] sm:text-[2.25rem] lg:text-[2.25rem] font-bold leading-tight">
                The Real Cost of Getting It Wrong
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-10">
                Let's run the numbers on what a bad landing page actually costs you.
              </p>

              {/* Financial Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src="/images/financial.jpg"
                  alt="Financial analysis and ROI calculations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D2E]/80 to-transparent"></div>
              </div>

              {/* ROI Comparison */}
              <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] rounded-3xl p-10 my-12 shadow-2xl">
                <h3 className="text-[#60A5FA] text-[2.25rem] font-bold mb-10 text-center">Same Budget, Different Results</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-[#7F1D1D] to-[#991B1B] rounded-2xl p-8 text-white">
                    <h4 className="text-[#FCA5A5] font-bold text-[2.25rem] mb-6">Sending Traffic to Homepage</h4>
                    <div className="space-y-4 text-[1.5rem]">
                      <p><span className="font-semibold">Budget:</span> $2,000/month</p>
                      <p><span className="font-semibold">Clicks:</span> 400</p>
                      <p><span className="font-semibold">Homepage conversion rate:</span> 2%</p>
                      <div className="border-t-2 border-[#FCA5A5] pt-4 mt-6">
                        <p className="text-[2.25rem] font-bold text-[#FCA5A5]">8 Leads</p>
                        <p className="text-[1.375rem] font-semibold">Cost per lead: $250</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] rounded-2xl p-8 text-white">
                    <h4 className="text-[#93C5FD] font-bold text-[2.25rem] mb-6">Sending Traffic to Landing Page</h4>
                    <div className="space-y-4 text-[1.5rem]">
                      <p><span className="font-semibold">Budget:</span> $2,000/month</p>
                      <p><span className="font-semibold">Clicks:</span> 400</p>
                      <p><span className="font-semibold">Landing page conversion rate:</span> 8%</p>
                      <div className="border-t-2 border-[#93C5FD] pt-4 mt-6">
                        <p className="text-[2.25rem] font-bold text-[#93C5FD]">32 Leads</p>
                        <p className="text-[1.375rem] font-semibold">Cost per lead: $62.50</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-2xl p-8 text-center">
                  <p className="text-white text-[1.5rem] font-bold mb-2">
                    Same $2,000 investment
                  </p>
                  <p className="text-white text-[2.25rem] font-bold">
                    4X MORE LEADS
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-6 my-8">
                <p className="text-[#92400E] text-[1.5rem] leading-[1.7] font-semibold mb-0">
                  Every month you send Meta ad traffic to your homepage instead of a dedicated landing page, you're leaving money on the table.
                </p>
              </div>

              {/* Common Mistakes */}
              <div className="bg-white rounded-2xl border-2 border-[#EF4444] p-8 my-12 shadow-lg">
                <h3 className="text-[#DC2626] text-[2.25rem] font-bold mb-8">
                  Common Mistakes That Kill Conversions
                </h3>
                <div className="space-y-6">
                  <div className="bg-[#FEF2F2] rounded-xl p-6 border-l-4 border-[#DC2626]">
                    <p className="font-bold text-[#DC2626] text-[1.5rem] mb-2">1. Information Overload</p>
                    <p className="text-[#374151] text-[1.5rem] leading-[1.7]">Trying to explain your entire business on one page. Keep it focused on the one offer.</p>
                  </div>
                  <div className="bg-[#FEF2F2] rounded-xl p-6 border-l-4 border-[#DC2626]">
                    <p className="font-bold text-[#DC2626] text-[1.5rem] mb-2">2. Too Many Form Fields</p>
                    <p className="text-[#374151] text-[1.5rem] leading-[1.7]">Asking for 10 pieces of information when you only need 3. Every field is a conversion killer.</p>
                    <p className="text-[#6B7280] text-[1.125rem] italic mt-2">Source: HubSpot Form Conversion Research</p>
                  </div>
                  <div className="bg-[#FEF2F2] rounded-xl p-6 border-l-4 border-[#DC2626]">
                    <p className="font-bold text-[#DC2626] text-[1.5rem] mb-2">3. Slow Load Times</p>
                    <p className="text-[#374151] text-[1.5rem] leading-[1.7]">If your page takes 5+ seconds to load on mobile, 40% of visitors leave before seeing anything.</p>
                    <p className="text-[#6B7280] text-[1.125rem] italic mt-2">Source: Google Mobile Speed Study</p>
                  </div>
                  <div className="bg-[#FEF2F2] rounded-xl p-6 border-l-4 border-[#DC2626]">
                    <p className="font-bold text-[#DC2626] text-[1.5rem] mb-2">4. Generic Stock Photos</p>
                    <p className="text-[#374151] text-[1.5rem] leading-[1.7]">Using the same photos everyone else uses. Real photos of your business, team, or results perform better.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - Technical Setup */}
          <motion.section
            className="mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-md">
                <span className="text-white text-[1.3rem] font-bold">4</span>
              </div>
              <h2 className="text-[#0B1D2E] font-serif text-[2.25rem] sm:text-[2.25rem] lg:text-[2.25rem] font-bold leading-tight">
                Technical Setup Essentials
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#374151] text-[1.375rem] leading-[1.8] mb-10">
                A beautiful landing page means nothing if you can't track what's working. Here's what you need to measure results.
              </p>

              {/* Data Analytics Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src="/images/data.jpg"
                  alt="Analytics dashboard and data tracking"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D2E]/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-[2.25rem] font-bold mb-2">Track What Matters</h3>
                  <p className="text-[1.375rem] opacity-90">Real-time data that drives better decisions</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md">
                  <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">Meta Pixel Installation</h3>
                  <p className="text-[#374151] leading-[1.8] mb-4">
                    This small piece of code tells Meta when someone fills out your form. Without it, you're flying blind.
                  </p>
                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.125rem] leading-[1.7]">
                      Install the Meta Pixel on your landing page and set up a "Lead" conversion event that fires when someone submits your form. This lets Meta optimize your ads for actual conversions, not just clicks.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md">
                  <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">Conversion Tracking</h3>
                  <p className="text-[#374151] leading-[1.8] mb-4">
                    You need to know exactly how many people fill out your form and where they came from.
                  </p>
                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.125rem] leading-[1.7]">
                      Set up Google Analytics (or similar) to track form submissions as "Goals" or "Events." This shows you which ads drive actual leads vs. just traffic.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-l-4 border-[#3B82F6] p-8 shadow-md">
                  <h3 className="text-[#0B1D2E] text-[2.25rem] font-bold mb-4">UTM Parameters</h3>
                  <p className="text-[#374151] leading-[1.8] mb-4">
                    These are tracking codes added to your landing page URL so you know which specific ad drove each conversion.
                  </p>
                  <div className="bg-[#EFF6FF] rounded-xl p-6">
                    <p className="text-[#374151] text-[1.125rem] mb-3">
                      Your Meta ad URL might look like:
                    </p>
                    <p className="text-[#D4A574] text-[1.0rem] font-mono bg-white rounded p-3 break-all border border-[#E5E3DF]">
                      yoursite.com/free-consultation?utm_source=facebook&utm_campaign=dental
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl p-8 mt-12 text-center">
                <p className="text-white text-[1.5rem] font-semibold mb-2">
                  Don't worry if this sounds technical.
                </p>
                <p className="text-white text-[1.375rem] font-bold">
                  This is exactly where we come in.
                </p>
              </div>

              <p className="text-center text-[#6B7280] text-[1.5rem] italic mt-6">
                At Drive Lead Media, we build landing pages that convert, install all tracking correctly, and make sure you can see exactly where every lead comes from.
              </p>
            </div>
          </motion.section>

          {/* Conclusion & CTA */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] rounded-3xl p-12 shadow-2xl">
              <h2 className="text-[#F8F6F3] font-serif text-[2.25rem] sm:text-[2.25rem] lg:text-[2.25rem] font-bold mb-8 text-center leading-tight">
                Your Ads Are Only As Good As Your Landing Page
              </h2>

              <p className="text-[#F8F6F3] text-[1.375rem] leading-[1.8] mb-10 text-center max-w-[800px] mx-auto">
                You can have the most perfectly targeted Meta ad campaign in the world, but if you're sending traffic to your homepage, you're wasting your budget.
              </p>

              {/* Key Takeaways */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
                <h3 className="text-[#60A5FA] text-[2.25rem] font-bold mb-6">
                  Key Takeaways
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#F8F6F3] leading-[1.6]"><strong>Message Match:</strong> Your landing page must deliver exactly what your ad promised</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#F8F6F3] leading-[1.6]"><strong>5 Essential Elements:</strong> Matching headline, one clear offer, simple form, social proof, mobile optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#F8F6F3] leading-[1.6]"><strong>The Real Cost:</strong> Bad landing pages can cost you 3-4X more per lead</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#F8F6F3] leading-[1.6]"><strong>Technical Setup:</strong> Meta Pixel, conversion tracking, and UTM parameters make sure you can measure results</span>
                  </div>
                </div>
              </div>

              <p className="text-[#F8F6F3] text-[1.5rem] font-semibold text-center mb-10">
                The difference between a 2% and an 8% conversion rate isn't luck. It's a dedicated landing page built for one purpose: converting your ad traffic.
              </p>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl p-10 text-center">
                <h3 className="text-white font-serif text-[2.25rem] font-bold mb-4">
                  Ready to Stop Wasting Your Ad Budget?
                </h3>
                <p className="text-white text-[1.375rem] mb-8 max-w-[600px] mx-auto leading-[1.7]">
                  We build high-converting landing pages specifically designed for Meta ads. Every page includes proper tracking, mobile optimization, and is designed to turn your clicks into customers.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white hover:bg-gray-100 text-[#1E40AF] px-10 py-5 rounded-xl font-bold text-[1.5rem] transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Book Your Free Strategy Call
                </Link>
                <p className="text-[#DBEAFE] text-[1.125rem] mt-5 font-medium">
                  Let's analyze your current setup and show you exactly how much you could be saving.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </article>
    </div>
  </>;
}
