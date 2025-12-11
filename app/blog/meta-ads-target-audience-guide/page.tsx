'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import { ImageObjectSchema } from '@/components/StructuredDataSchemas';

export default function MetaAdsTargetAudienceGuide() {
  const post = getPostBySlug('meta-ads-target-audience-guide');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  return (
    <main className="blog-page min-h-screen bg-[#000000]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Image Schemas for SEO */}
      <ImageObjectSchema
        url="/images/meta-audience-target-hero.jpg"
        caption="Meta audience targeting hero image"
        description="Meta Ads Manager interface showing audience targeting options and demographic controls for Facebook and Instagram campaigns"
        width={1920}
        height={1080}
      />
      <ImageObjectSchema
        url="/images/meta-audience-funnel.jpg"
        caption="Meta audience funnel visualization"
        description="Marketing funnel diagram showing awareness, consideration, and conversion stages for Meta advertising audience targeting strategy"
        width={1200}
        height={800}
      />
      <ImageObjectSchema
        url="/images/meta-audience-targeting.jpg"
        caption="Meta audience targeting interface"
        description="Detailed Meta Ads Manager audience targeting interface with location, demographics, interests, and behavior filters"
        width={1200}
        height={800}
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
            src="/images/meta-audience-target-hero.jpg"
            alt="Meta Ads audience targeting strategy guide hero image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.7)]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-[#5FA99F] font-semibold text-sm tracking-[0.15em] uppercase">Targeting Strategy</span>
            </motion.div>
            <h1 className="text-[#F8F6F3] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Meta Ads Target Audience Guide
            </h1>
            <p className="text-[#D4A574] text-lg sm:text-xl leading-normal font-light">
              Stop wasting money targeting everyone. Learn how to find your perfect customers on Facebook and Instagram.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Article Meta Info */}
      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[#F8F6F3]/70 text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Meta Ads, Audience Targeting, Advertising Strategy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Main Content */}
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">

        {/* Section 1 - Why Targeting Matters */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">1</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Why Targeting Matters
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Imagine walking into a shopping mall and shouting your business pitch to everyone who walks by. Teenagers, seniors, tourists, people with no money, people who live 100 miles away.
              </p>

              <p className="text-[#D4A574] text-[clamp(1rem,2.2vw,1.4rem)] font-semibold">
                That's what happens when you target "everyone within 25 miles" on Meta ads.
              </p>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-3">The Problem with Broad Targeting</h3>
                <p className="mb-4">A yoga studio in Austin targeted "everyone within 20 miles" on Facebook.</p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">They spent $3,000 in one month</li>
                  <li className="list-disc">Got 200 clicks to their website</li>
                  <li className="list-disc">Only 3 people signed up</li>
                  <li className="list-disc">Cost per customer: $1,000</li>
                </ul>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-3">The Power of Smart Targeting</h3>
                <p className="mb-4">They changed their approach. They targeted:</p>
                <ul className="space-y-2 ml-6 mb-4">
                  <li className="list-disc">5 miles around their studio</li>
                  <li className="list-disc">Women ages 28-45</li>
                  <li className="list-disc">Interested in yoga, wellness, meditation</li>
                  <li className="list-disc">Household income $60k+</li>
                </ul>
                <p className="text-[#5FA99F] font-bold text-[1.1rem]">
                  Result: 15 new members in one month. Cost per customer: $200.
                </p>
              </div>

              <p className="text-[clamp(1rem,2.2vw,1.4rem)] font-semibold">
                The lesson? Narrow targeting saves money and brings better customers.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2 - The 3 Types of Audiences */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">2</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                The 3 Types of Audiences
              </h2>
            </div>

            <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-10 leading-relaxed">
              Not all audiences are created equal. Think of it like dating. You wouldn't propose marriage on a first date. Same with advertising.
            </p>

            {/* Audience Funnel Visualization */}
            <motion.div
              className="my-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-[16px] overflow-hidden border border-[rgba(95,169,159,0.3)] shadow-2xl">
                <Image
                  src="/images/meta-audience-funnel.jpg"
                  alt="Meta ads audience funnel showing the progression from cold audiences (strangers) to warm audiences (engaged users) to hot audiences (past customers and qualified leads)"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-[#F8F6F3]/60 text-sm mt-4 italic">
                The audience funnel: Cold → Warm → Hot progression for Meta ads targeting
              </p>
            </motion.div>

            {/* Cold Audiences */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-[#2E5266] to-[#1A3345] border-2 border-[#4A7C9D] rounded-2xl p-8">
                <div className="mb-6 text-center">
                  <div className="inline-block bg-[#4A7C9D] text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4">
                    COLD AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
                    People Who Don't Know You
                  </h3>
                </div>

                <p className="text-[#F8F6F3] font-sans text-[clamp(1rem,2.2vw,1.4rem)] mb-6 leading-[1.6]">
                  These are strangers. They've never heard of your business.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-[#5FA99F] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Who They Are:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] font-sans text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• People in your city</li>
                      <li>• Matching your demographics</li>
                      <li>• Interested in related topics</li>
                      <li>• Never visited your website</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">What to Expect:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] font-sans text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• Highest cost per click</li>
                      <li>• Lowest conversion rate</li>
                      <li>• Need multiple touchpoints</li>
                      <li>• Best for awareness</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-xl p-5">
                  <p className="text-[#F8F6F3] font-sans text-[clamp(1rem,2vw,1.2rem)]">
                    <span className="font-bold text-[#D4A574]">Pro Tip:</span> Don't ask for a sale immediately. Offer something free first (guide, consultation, trial).
                  </p>
                </div>
              </div>
            </div>

            {/* Warm Audiences */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-[#4A5D3F] to-[#2C3826] border-2 border-[#6B8A5E] rounded-2xl p-8">
                <div className="mb-6 text-center">
                  <div className="inline-block bg-[#6B8A5E] text-white px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4">
                    WARM AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
                    People Who've Interacted with You
                  </h3>
                </div>

                <p className="text-[#F8F6F3] text-[clamp(1rem,2.2vw,1.4rem)] mb-6 leading-relaxed">
                  These people know you exist. They've checked you out but haven't committed yet.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-[#5FA99F] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Who They Are:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• Visited your website</li>
                      <li>• Watched your videos</li>
                      <li>• Engaged with your posts</li>
                      <li>• Opened your emails</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">What to Expect:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• Medium cost per click</li>
                      <li>• Better conversion rates</li>
                      <li>• Ready to learn more</li>
                      <li>• Best for lead generation</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-xl p-5">
                  <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                    <span className="font-bold text-[#D4A574]">Pro Tip:</span> This is your sweet spot. Focus 50% of your budget here.
                  </p>
                </div>
              </div>
            </div>

            {/* Hot Audiences */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-[#5D3A2F] to-[#3D251F] border-2 border-[#B8865F] rounded-2xl p-8">
                <div className="mb-6 text-center">
                  <div className="inline-block bg-[#D4A574] text-[#000000] px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] mb-4">
                    HOT AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]">
                    Past Customers & Leads
                  </h3>
                </div>

                <p className="text-[#F8F6F3] text-[clamp(1rem,2.2vw,1.4rem)] mb-6 leading-relaxed">
                  These people already bought from you or came very close.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-[#5FA99F] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Who They Are:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• Previous customers</li>
                      <li>• Added to cart (didn't buy)</li>
                      <li>• Filled out contact form</li>
                      <li>• Called your business</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">What to Expect:</h4>
                    <ul className="space-y-3 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                      <li>• Lowest cost per click</li>
                      <li>• Highest conversion rates</li>
                      <li>• Ready to buy again</li>
                      <li>• Best for repeat business</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-xl p-5">
                  <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                    <span className="font-bold text-[#D4A574]">Pro Tip:</span> These are gold. Spend 30% of your budget getting previous customers to come back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3 - How to Build Your Perfect Audience */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">3</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                How to Build Your Perfect Audience
              </h2>
            </div>

            <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-10 leading-relaxed">
              Here's a step-by-step framework to stop wasting money and start reaching the right people.
            </p>

            {/* Step 1 - Location */}
            <div className="mb-10">
              <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 1: Get Geographic</h3>
              <div className="bg-[rgba(95,169,159,0.1)] rounded-xl p-6 mb-4">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-4 leading-relaxed">
                  Start with a tight radius around your business location.
                </p>
                <ul className="space-y-3 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">•</span>
                    <span><strong>Brick & Mortar Business:</strong> 5-10 mile radius</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">•</span>
                    <span><strong>Service Business:</strong> 15-25 mile radius (where you'll travel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">•</span>
                    <span><strong>Online Business:</strong> Target by city or zip codes (high-value areas)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                  <strong>Mistake to Avoid:</strong> Targeting an entire state or region. Your budget gets spread too thin.
                </p>
              </div>
            </div>

            {/* Step 2 - Demographics */}
            <div className="mb-10">
              <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 2: Define Demographics</h3>
              <div className="bg-[rgba(95,169,159,0.1)] rounded-xl p-6 mb-4">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-4 leading-relaxed">
                  Who is your ideal customer? Be specific.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Age Range</h4>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-3">Don't target 18-65. That's everyone.</p>
                    <p className="text-[#5FA99F] text-[clamp(1rem,2vw,1.2rem)]">Example: "Our customers are mostly 30-50"</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Gender</h4>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-3">If your product skews one way, target that.</p>
                    <p className="text-[#5FA99F] text-[clamp(1rem,2vw,1.2rem)]">Example: Med spa? 80% women.</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Income Level</h4>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-3">Can they afford your service?</p>
                    <p className="text-[#5FA99F] text-[clamp(1rem,2vw,1.2rem)]">Example: Top 25% of zip code</p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Life Stage</h4>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-3">Parents? Married? Empty nesters?</p>
                    <p className="text-[#5FA99F] text-[clamp(1rem,2vw,1.2rem)]">Example: Parents with kids 0-5</p>
                  </div>
                </div>
              </div>

              {/* Demographics & Targeting Chart */}
              <motion.div
                className="my-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-[16px] overflow-hidden border border-[rgba(95,169,159,0.3)] shadow-2xl">
                  <Image
                    src="/images/meta-audience-targeting.jpg"
                    alt="Meta Ads Manager targeting interface showing demographics, interests, and behaviors options for precise audience targeting on Facebook and Instagram"
                    width={1200}
                    height={675}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-[#F8F6F3]/60 text-sm mt-4 italic">
                  Example of targeting options in Meta Ads Manager: demographics, interests, and behaviors
                </p>
              </motion.div>
            </div>

            {/* Step 3 - Interests */}
            <div className="mb-10">
              <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 3: Layer in Interests</h3>
              <div className="bg-[rgba(95,169,159,0.1)] rounded-xl p-6 mb-4">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-6 leading-relaxed">
                  What do your ideal customers care about? What pages do they follow? What topics interest them?
                </p>

                <div className="space-y-6">
                  <div className="bg-[rgba(0,0,0,0.5)] rounded-lg p-5">
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Example: Dental Practice</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Cosmetic dentistry</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Dental health</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Invisalign</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Teeth whitening</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Health & wellness</span>
                    </div>
                  </div>

                  <div className="bg-[rgba(0,0,0,0.5)] rounded-lg p-5">
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Example: Fitness Studio</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Yoga</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Pilates</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">CrossFit</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Health food</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Meditation</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Wellness</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-xl p-4">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)]">
                  <strong>Pro Tip:</strong> Pick 5-10 interests. Don't go crazy with 50. Keep it focused.
                </p>
              </div>
            </div>

            {/* Step 4 - Test & Refine */}
            <div className="mb-6">
              <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 4: Test & Refine</h3>
              <div className="bg-[rgba(95,169,159,0.1)] rounded-xl p-6">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-6 leading-relaxed">
                  You won't get it perfect on day one. That's okay. Here's how to improve:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#5FA99F] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg font-bold text-[0.85rem] sm:text-[0.95rem] lg:text-[1.1rem] mr-3 sm:mr-4 mt-1 flex-shrink-0">WEEK 1</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Run your ad. Don't touch anything. Let Meta learn.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5FA99F] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg font-bold text-[0.85rem] sm:text-[0.95rem] lg:text-[1.1rem] mr-3 sm:mr-4 mt-1 flex-shrink-0">WEEK 2</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Check your results. Is cost per click under $2? Are people converting? If not, narrow your audience.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5FA99F] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg font-bold text-[0.85rem] sm:text-[0.95rem] lg:text-[1.1rem] mr-3 sm:mr-4 mt-1 flex-shrink-0">WEEK 3</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Try a different age range or interest. See if it improves.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#D4A574] text-[#000000] px-2 py-1 sm:px-3 sm:py-1 rounded-lg font-bold text-[0.85rem] sm:text-[0.95rem] lg:text-[1.1rem] mr-3 sm:mr-4 mt-1 flex-shrink-0">MONTH 2</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">You now know what works. Double down on that audience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Reference Card */}
        <motion.div
          className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-6 sm:p-10 lg:p-12 mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <h2 className="text-white font-serif text-[2rem] font-bold mb-6 text-center">
              Quick Reference: Your First Audience
            </h2>

            <div className="bg-[rgba(95,169,159,0.1)] backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[rgba(95,169,159,0.3)]">
              <h3 className="text-[#5FA99F] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-4">Starting Template for Local Businesses:</h3>
              <div className="space-y-3 text-white text-[clamp(1rem,2vw,1.2rem)]">
                <p><strong className="text-[#5FA99F]">Location:</strong> 7-10 miles around your business</p>
                <p><strong className="text-[#5FA99F]">Age:</strong> Your ideal customer age range (narrow it to 10-15 years)</p>
                <p><strong className="text-[#5FA99F]">Income:</strong> Top 25-50% of your zip code</p>
                <p><strong className="text-[#5FA99F]">Interests:</strong> 5-7 topics directly related to what you sell</p>
                <p><strong className="text-[#5FA99F]">Budget:</strong> Start with $20-30/day minimum</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 text-[clamp(1rem,2.2vw,1.4rem)] font-semibold">
                Remember: Small, focused audiences perform better than large, broad ones.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-[#F8F6F3] font-serif text-3xl font-bold mb-4">
              Need Help Setting Up Your Target Audiences?
            </h2>
            <p className="text-[#F8F6F3] text-lg mb-6 max-w-2xl mx-auto">
              We'll analyze your business, build custom audiences, and manage your Meta ads campaigns so you get the best results from day one.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5FA99F] hover:bg-[#4A8A82] text-[#000000] px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get a Free Strategy Call
            </Link>
          </div>
        </motion.section>

        {/* Author Bio */}
        <AuthorBio author={post.author} />

        </div>
      </article>
    </main>
  );
}
