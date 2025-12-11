'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import { ImageObjectSchema } from '@/components/StructuredDataSchemas';

export default function WhyMetaAdsNeedLandingPages() {
  const post = getPostBySlug('why-meta-ads-need-landing-pages');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  return (
    <main className="blog-page min-h-screen bg-[#000000] relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Image Schemas for SEO */}
      <ImageObjectSchema
        url="/images/facebook-ads-landing-page-conversion-rate-optimization.jpg"
        caption="Meta ads landing page conversion optimization 2025"
        description="Optimized landing page design for Meta advertising campaigns showing conversion-focused layout and call-to-action elements"
        width={1920}
        height={1080}
      />
      <ImageObjectSchema
        url="/images/confused-website-visitor-high-bounce-rate-problem.jpg"
        caption="Confused visitor homepage bounce from Meta ads"
        description="Illustration showing confused website visitor experiencing high bounce rate from generic homepage instead of focused landing page"
        width={1200}
        height={800}
      />
      <ImageObjectSchema
        url="/images/happy-customer-website-conversion-success-testimonial.webp"
        caption="Happy customer landing page conversion from Meta ads"
        description="Satisfied customer converting through optimized landing page with clear value proposition and streamlined conversion path"
        width={1200}
        height={800}
      />
      <ImageObjectSchema
        url="/images/mobile-responsive-landing-page-optimization-meta-ads.jpg"
        caption="Mobile landing page optimization Meta ads 2025"
        description="Mobile-responsive landing page design optimized for Meta advertising traffic with thumb-friendly buttons and fast load times"
        width={1080}
        height={1920}
      />
      <ImageObjectSchema
        url="/images/facebook-meta-ads-roi-cost-per-lead-analysis-calculator.webp"
        caption="Meta ads ROI cost per lead comparison analysis"
        description="ROI comparison chart showing cost per lead differences between homepage traffic and dedicated landing page conversions"
        width={1200}
        height={800}
      />
      <ImageObjectSchema
        url="/images/facebook-meta-ads-conversion-tracking-analytics-dashboard.jpg"
        caption="Meta ads conversion tracking analytics dashboard"
        description="Meta Ads Manager analytics dashboard displaying conversion tracking metrics, pixel events, and landing page performance data"
        width={2400}
        height={1293}
      />

      {/* Hero Section - Full Width */}
      <motion.div
        className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/facebook-ads-landing-page-conversion-rate-optimization.jpg"
            alt="Business owner analyzing Meta ads landing page conversion rates on laptop dashboard showing 2-3x improvement in lead generation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.88)] to-[rgba(95,169,159,0.25)]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-[#5FA99F] font-semibold text-sm tracking-[0.15em] uppercase">Marketing Strategy</span>
            </motion.div>
            <h1 className="text-white font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Why Your Meta Ads Need a Dedicated Landing Page
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-normal font-light">
              The one change that can 2-3x your conversion rates and transform your advertising ROI.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Breadcrumbs */}
      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Article Meta Info */}
      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-6">
          <div className="flex flex-wrap items-center gap-6 text-white/70 text-lg">
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
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 py-12 sm:py-10 sm:py-12 lg:py-14 lg:py-20">

          {/* Introduction - Side by Side */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Column - Text */}
                <div>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    Picture this: You're spending $2,000 a month on Meta ads. People are clicking. Your phone shows hundreds of visitors hitting your website. But almost nobody is converting.
                  </p>

                  <p className="text-white text-lg leading-relaxed mb-4">
                    You check your analytics and your heart sinks. Your ads are sending people to your homepage, where they land, look around for 8 seconds, and leave.
                  </p>

                  <div className="bg-gradient-to-br from-[#5FA99F]/20 to-[#85C7B3]/20 border-l-4 border-[#5FA99F] rounded-xl p-6 shadow-sm">
                    <p className="text-white text-3xl leading-relaxed font-semibold mb-0">
                      Here's the truth: Your homepage isn't designed to convert paid traffic. It's designed to explain everything about your business to everyone.
                    </p>
                  </div>
                </div>

                {/* Right Column - Stats Box */}
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl p-6 shadow-xl">
                  <h3 className="text-white text-3xl font-bold mb-4 text-center">The Numbers Don't Lie</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-white/70 text-lg">Homepage</span>
                        <span className="text-red-600 text-3xl font-bold">2-3%</span>
                      </div>
                      <div className="h-4 bg-[#1A3A4A] rounded-full overflow-hidden">
                        <div className="h-full bg-red-600 rounded-full" style={{ width: '3%' }}></div>
                      </div>
                      <p className="text-white/70 text-lg mt-2">Conversion rate</p>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-white/70 text-lg">Dedicated Landing Page</span>
                        <span className="text-emerald-600 text-3xl font-bold">6-12%</span>
                      </div>
                      <div className="h-4 bg-[#1A3A4A] rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                      <p className="text-white/70 text-lg mt-2">Conversion rate</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-lg mt-6 text-center italic">Source: Unbounce Landing Page Report, 2024</p>
                </div>
              </div>
          </motion.section>

          {/* What You'll Learn - Full Width Dark Section */}
          <motion.section
            className="mb-16 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] py-10 sm:py-12 lg:py-14 -mx-6 sm:-mx-12 lg:-mx-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
              <h3 className="text-[#5FA99F] text-3xl font-bold mb-4 text-center">
                What You'll Learn in This Guide
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg leading-normal">Why dedicated landing pages outperform homepages</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg leading-normal">The 5 essential elements that make landing pages convert</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg leading-normal">Real numbers showing the cost of getting it wrong</span>
                </div>
                <div className="flex flex-col items-start gap-3 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-lg leading-normal">How to set up tracking that turns clicks into customers</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 1 - The Message Match Problem */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5FA99F] to-[#4A8A82] flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <h2 className="text-white font-heading text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                  The Message Match Problem
                </h2>
              </div>

              <div className="mb-4">
                <p className="text-white text-lg leading-relaxed mb-4">
                  When someone clicks your Meta ad, they have one thing in mind: the specific promise you made in that ad.
                </p>

                <p className="text-white text-lg leading-relaxed mb-4">
                  They're not interested in your full menu of services, your company history, or your blog posts. They want the thing you just showed them.
                </p>
              </div>

              {/* Problem Example */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-2 border-red-500 p-6 my-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-red-600 text-3xl font-bold mb-4">Real Example: The Confused Visitor</h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
                  <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/confused-website-visitor-high-bounce-rate-problem.jpg"
                      alt="Confused visitor leaving website homepage after clicking Meta ads without finding promised offer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-lg font-semibold mb-2">The Ad Says:</p>
                    <p className="text-white text-lg">"Get a free teeth whitening consultation - Limited spots this week"</p>
                  </div>

                  <div className="text-center text-red-600">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-lg font-semibold mb-3">They Click and Land On:</p>
                    <ul className="space-y-2 text-white text-lg">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>General dentistry information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Eight different services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>Team bios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>A navigation menu with 12 options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>No mention of the free consultation anywhere obvious</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-600 text-white rounded-xl p-4 text-center">
                    <p className="text-lg font-bold">Result: They bounce in 6 seconds.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Solution Example */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-2 border-[#5FA99F] p-6 my-8 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-[#5FA99F] text-3xl font-bold mb-4">The Solution: Perfect Message Match</h4>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/happy-customer-website-conversion-success-testimonial.webp"
                      alt="Happy customer converting on dedicated landing page with clear call-to-action matching Meta ads promise"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-lg font-semibold mb-2">The Ad Says:</p>
                    <p className="text-white text-lg">"Get a free teeth whitening consultation - Limited spots this week"</p>
                  </div>

                  <div className="text-center text-[#5FA99F]">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>

                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-lg font-semibold mb-3">They Click and Land On:</p>
                    <ul className="space-y-2 text-white text-lg">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5FA99F] mt-1">•</span>
                        <span>Headline: "Claim Your Free Whitening Consultation"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5FA99F] mt-1">•</span>
                        <span>The same image/style from the ad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5FA99F] mt-1">•</span>
                        <span>A simple form to book their spot</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5FA99F] mt-1">•</span>
                        <span>No navigation, no distractions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5FA99F] mt-1">•</span>
                        <span>One clear action: Book Now</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#5FA99F] text-white rounded-xl p-4 text-center">
                    <p className="text-lg font-bold">Result: 12% of visitors book a consultation.</p>
                    <p className="text-white text-base mt-2 italic">Source: WordStream Conversion Rate Benchmark Study</p>
                  </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#5FA99F]/20 to-[#85C7B3]/20 rounded-xl p-6 my-8">
                <p className="text-white text-lg leading-relaxed font-semibold mb-0">
                  When your ad promise matches your landing page experience exactly, people convert. It's that simple.
                </p>
              </div>
          </motion.section>

          {/* Section 2 - The 5 Elements */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FA99F] to-[#4A8A82] flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h2 className="text-white font-heading text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                The 5 Elements Every High-Converting Landing Page Must Have
              </h2>
            </div>

            <div className="space-y-4">
              {/* Element 1 */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-white text-3xl font-bold mb-4">
                  1. Matching Headline
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  The first thing visitors see should echo what they just clicked on. Word-for-word if possible.
                </p>
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 mb-4">
                  <p className="text-white mb-3"><span className="font-bold text-[#5FA99F]">Your Ad:</span> "Book Your Free Marketing Audit This Week"</p>
                  <p className="text-white"><span className="font-bold text-[#5FA99F]">Your Headline:</span> "Book Your Free Marketing Audit"</p>
                </div>
                <p className="text-white/70 text-lg italic">
                  This instant recognition tells visitors: "Yes, I'm in the right place." Bounce rate drops immediately.
                </p>
              </div>

              {/* Element 2 */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-white text-3xl font-bold mb-4">
                  2. One Clear Offer (No Distractions)
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  Your landing page exists for one purpose: get the visitor to take one action.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] border-2 border-red-300 rounded-xl p-6">
                    <p className="font-bold text-red-600 text-lg mb-3">Don't Include:</p>
                    <ul className="space-y-2 text-white text-lg">
                      <li>• Navigation menu</li>
                      <li>• Links to other pages</li>
                      <li>• Multiple CTAs</li>
                      <li>• Unrelated services</li>
                    </ul>
                  </div>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] border-2 border-[#7DC4BC] rounded-xl p-6">
                    <p className="font-bold text-[#5FA99F] text-lg mb-3">Do Include:</p>
                    <ul className="space-y-2 text-white text-lg">
                      <li>• One headline</li>
                      <li>• One offer</li>
                      <li>• One form/button</li>
                      <li>• One clear next step</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/70 text-lg italic mt-6">
                  Every additional option you add cuts your conversion rate. Remove everything that doesn't support the one action.
                </p>
              </div>

              {/* Element 3 */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-white text-3xl font-bold mb-4">
                  3. Simple Form (Minimal Fields)
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  Every form field you require cuts your conversion rate by about 10%.
                </p>
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                  <p className="text-white font-bold mb-4">Only Ask For What You Actually Need:</p>
                  <p className="text-[#5FA99F] font-semibold mb-2">For a consultation booking:</p>
                  <ul className="space-y-2 text-white ml-6 mb-4">
                    <li>• Name</li>
                    <li>• Phone or Email</li>
                    <li>• That's it</li>
                  </ul>
                  <p className="text-white/70 text-base italic">
                    You can get the rest of their information later, when they're already a customer.
                  </p>
                </div>
              </div>

              {/* Element 4 */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-white text-3xl font-bold mb-4">
                  4. Social Proof (Testimonials & Trust Signals)
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  People need to know others have done this before and got results.
                </p>
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                  <p className="text-white font-bold mb-4">Include 2-3 of These:</p>
                  <ul className="space-y-3 text-white">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1">•</span>
                      <span>A testimonial quote from a happy customer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1">•</span>
                      <span>Star rating (Google reviews, Facebook reviews)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1">•</span>
                      <span>Number of customers served ("Join 500+ happy customers")</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1">•</span>
                      <span>Before/after photos (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1">•</span>
                      <span>Trust badges (Better Business Bureau, industry certifications)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Element 5 */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-white text-3xl font-bold mb-4">
                  5. Mobile-Optimized (Fast & Thumb-Friendly)
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  60-80% of your Meta ad traffic comes from mobile devices. If your landing page isn't mobile-perfect, you're losing half your leads.
                </p>
                <p className="text-white/70 text-base italic mb-6">Source: Meta Business Mobile Advertising Statistics, 2024</p>

                {/* Full-Width Phone Image */}
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-2xl mb-6">
                  <Image
                    src="/images/mobile-responsive-landing-page-optimization-meta-ads.jpg"
                    alt="Mobile-optimized landing page for Meta ads showing responsive design with large tappable buttons and fast load time"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Mobile Must-Haves Below Image */}
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 mb-6">
                  <p className="text-white font-bold text-xl mb-4">Mobile Must-Haves:</p>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1 text-xl">✓</span>
                      <span className="text-lg">Loads in under 3 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1 text-xl">✓</span>
                      <span className="text-lg">Large, tappable buttons (not tiny links)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1 text-xl">✓</span>
                      <span className="text-lg">Form fields easy to fill on phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1 text-xl">✓</span>
                      <span className="text-lg">No horizontal scrolling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#5FA99F] mt-1 text-xl">✓</span>
                      <span className="text-lg">Text readable without zooming</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] border-l-4 border-red-600 rounded-xl p-5">
                  <p className="text-red-600 font-semibold text-lg">
                    Test this yourself: Open your landing page on your phone. If you have to pinch and zoom to read or fill out the form, you're losing money.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 - The Cost */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FA99F] to-[#4A8A82] flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h2 className="text-white font-heading text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                The Real Cost of Getting It Wrong
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-white text-lg leading-relaxed mb-4">
                Let's run the numbers on what a bad landing page actually costs you.
              </p>

              {/* Financial Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mb-4">
                <Image
                  src="/images/facebook-meta-ads-roi-cost-per-lead-analysis-calculator.webp"
                  alt="Financial analysis showing Meta ads ROI comparison between homepage and dedicated landing page cost per lead"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/70 to-transparent"></div>
              </div>

              {/* ROI Comparison */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-6 my-8 shadow-2xl">
                <h3 className="text-[#5FA99F] text-3xl font-bold mb-4 text-center">Same Budget, Different Results</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-white">
                    <h4 className="text-red-300 font-bold text-3xl mb-4">Sending Traffic to Homepage</h4>
                    <div className="space-y-4 text-lg">
                      <p><span className="font-semibold">Budget:</span> $2,000/month</p>
                      <p><span className="font-semibold">Clicks:</span> 400</p>
                      <p><span className="font-semibold">Homepage conversion rate:</span> 2%</p>
                      <div className="border-t-2 border-red-300 pt-4 mt-6">
                        <p className="text-3xl font-bold text-red-300">8 Leads</p>
                        <p className="text-lg font-semibold">Cost per lead: $250</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#4A8A82] to-[#3A6E68] rounded-2xl p-6 text-white">
                    <h4 className="text-[#9DD4CD] font-bold text-3xl mb-4">Sending Traffic to Landing Page</h4>
                    <div className="space-y-4 text-lg">
                      <p><span className="font-semibold">Budget:</span> $2,000/month</p>
                      <p><span className="font-semibold">Clicks:</span> 400</p>
                      <p><span className="font-semibold">Landing page conversion rate:</span> 8%</p>
                      <div className="border-t-2 border-[#9DD4CD] pt-4 mt-6">
                        <p className="text-3xl font-bold text-[#9DD4CD]">32 Leads</p>
                        <p className="text-lg font-semibold">Cost per lead: $62.50</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[#5FA99F] rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/10 via-transparent to-[#85C7B3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <p className="text-white text-lg font-bold mb-2">
                      Same $2,000 investment
                    </p>
                    <p className="text-[#5FA99F] text-3xl font-bold">
                      4X MORE LEADS
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#5FA99F]/20 to-[#85C7B3]/20 rounded-xl p-6 my-8">
                <p className="text-white text-lg leading-relaxed font-semibold mb-0">
                  Every month you send Meta ad traffic to your homepage instead of a dedicated landing page, you're leaving money on the table.
                </p>
              </div>

              {/* Common Mistakes */}
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl rounded-2xl border-2 border-red-500 p-6 my-8 shadow-lg">
                <h3 className="text-red-600 text-3xl font-bold mb-4">
                  Common Mistakes That Kill Conversions
                </h3>
                <div className="space-y-4">
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 border-l-4 border-red-600">
                    <p className="font-bold text-red-600 text-lg mb-2">1. Information Overload</p>
                    <p className="text-white text-lg leading-relaxed">Trying to explain your entire business on one page. Keep it focused on the one offer.</p>
                  </div>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 border-l-4 border-red-600">
                    <p className="font-bold text-red-600 text-lg mb-2">2. Too Many Form Fields</p>
                    <p className="text-white text-lg leading-relaxed">Asking for 10 pieces of information when you only need 3. Every field is a conversion killer.</p>
                    <p className="text-white/70 text-base italic mt-2">Source: HubSpot Form Conversion Research</p>
                  </div>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 border-l-4 border-red-600">
                    <p className="font-bold text-red-600 text-lg mb-2">3. Slow Load Times</p>
                    <p className="text-white text-lg leading-relaxed">If your page takes 5+ seconds to load on mobile, 40% of visitors leave before seeing anything.</p>
                    <p className="text-white/70 text-base italic mt-2">Source: Google Mobile Speed Study</p>
                  </div>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6 border-l-4 border-red-600">
                    <p className="font-bold text-red-600 text-lg mb-2">4. Generic Stock Photos</p>
                    <p className="text-white text-lg leading-relaxed">Using the same photos everyone else uses. Real photos of your business, team, or results perform better.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 - Technical Setup */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5FA99F] to-[#4A8A82] flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h2 className="text-white font-heading text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                Technical Setup Essentials
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-white text-lg leading-relaxed mb-4">
                A beautiful landing page means nothing if you can't track what's working. Here's what you need to measure results.
              </p>

              {/* Data Analytics Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl mb-4">
                <Image
                  src="/images/facebook-meta-ads-conversion-tracking-analytics-dashboard.jpg"
                  alt="Analytics dashboard displaying Meta ads conversion tracking data and landing page performance metrics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Track What Matters</h3>
                  <p className="text-lg opacity-90">Real-time data that drives better decisions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md">
                  <h3 className="text-white text-3xl font-bold mb-4">Meta Pixel Installation</h3>
                  <p className="text-white leading-relaxed mb-4">
                    This small piece of code tells Meta when someone fills out your form. Without it, you're flying blind.
                  </p>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-base leading-relaxed">
                      Install the Meta Pixel on your landing page and set up a "Lead" conversion event that fires when someone submits your form. This lets Meta optimize your ads for actual conversions, not just clicks.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md">
                  <h3 className="text-white text-3xl font-bold mb-4">Conversion Tracking</h3>
                  <p className="text-white leading-relaxed mb-4">
                    You need to know exactly how many people fill out your form and where they came from.
                  </p>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-base leading-relaxed">
                      Set up Google Analytics (or similar) to track form submissions as "Goals" or "Events." This shows you which ads drive actual leads vs. just traffic.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-2xl border-l-4 border-[#5FA99F] p-6 shadow-md">
                  <h3 className="text-white text-3xl font-bold mb-4">UTM Parameters</h3>
                  <p className="text-white leading-relaxed mb-4">
                    These are tracking codes added to your landing page URL so you know which specific ad drove each conversion.
                  </p>
                  <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-xl p-6">
                    <p className="text-white text-base mb-3">
                      Your Meta ad URL might look like:
                    </p>
                    <p className="text-[#5FA99F] text-sm font-mono bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded p-3 break-all">
                      yoursite.com/free-consultation?utm_source=facebook&utm_campaign=dental
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[#5FA99F] rounded-2xl p-6 mt-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/10 via-transparent to-[#85C7B3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-white text-lg font-semibold mb-2">
                    Don't worry if this sounds technical.
                  </p>
                  <p className="text-[#5FA99F] text-lg font-bold">
                    This is exactly where we come in.
                  </p>
                </div>
              </div>

              <p className="text-center text-white/70 text-lg italic mt-6">
                At Drive Lead Media, we build landing pages that convert, install all tracking correctly, and make sure you can see exactly where every lead comes from.
              </p>
            </div>
          </motion.section>

          {/* Conclusion & CTA */}
          <motion.section
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-12 shadow-2xl">
              <h2 className="text-white font-heading text-3xl sm:text-3xl lg:text-3xl font-bold mb-4 text-center leading-tight">
                Your Ads Are Only As Good As Your Landing Page
              </h2>

              <p className="text-white text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
                You can have the most perfectly targeted Meta ad campaign in the world, but if you're sending traffic to your homepage, you're wasting your budget.
              </p>

              {/* Key Takeaways */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 border border-white/20">
                <h3 className="text-[#5FA99F] text-3xl font-bold mb-4">
                  Key Takeaways
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white leading-normal"><strong>Message Match:</strong> Your landing page must deliver exactly what your ad promised</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white leading-normal"><strong>5 Essential Elements:</strong> Matching headline, one clear offer, simple form, social proof, mobile optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white leading-normal"><strong>The Real Cost:</strong> Bad landing pages can cost you 3-4X more per lead</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#5FA99F] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white leading-normal"><strong>Technical Setup:</strong> Meta Pixel, conversion tracking, and UTM parameters make sure you can measure results</span>
                  </div>
                </div>
              </div>

              <p className="text-white text-lg font-semibold text-center mb-4">
                The difference between a 2% and an 8% conversion rate isn't luck. It's a dedicated landing page built for one purpose: converting your ad traffic.
              </p>

              {/* CTA */}
              <div className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <h3 className="text-white font-heading text-[2rem] sm:text-[2.5rem] font-bold mb-4 leading-tight">
                    Ready to Stop Wasting Your Ad Budget?
                  </h3>
                  <p className="text-gray-300 font-body text-[1rem] sm:text-[1.125rem] mb-6 max-w-2xl mx-auto leading-relaxed">
                    We build high-converting landing pages specifically designed for Meta ads. Every page includes proper tracking, mobile optimization, and is designed to turn your clicks into customers.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#5FA99F] hover:bg-[#85C7B3] text-white px-8 py-4 rounded-xl font-heading font-semibold text-[1rem] sm:text-[1.1rem] transition-all duration-300 shadow-[0_4px_20px_rgba(95,169,159,0.4)] hover:shadow-[0_6px_30px_rgba(95,169,159,0.6)] mb-4"
                  >
                    Book Your Free Strategy Call
                  </Link>
                  <p className="text-[#5FA99F] font-body text-[0.95rem] sm:text-[1rem] font-medium">
                    Let's analyze your current setup and show you exactly how much you could be saving.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Author Bio */}
          <AuthorBio author={post.author} />
        </div>
      </article>
    </main>
  );
}
