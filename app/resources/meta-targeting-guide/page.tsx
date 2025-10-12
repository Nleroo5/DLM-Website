'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MetaTargetingGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Width */}
      <motion.div
        className="relative w-full pt-[100px] pb-[80px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/business-owner.jpg"
            alt="Business owner working on laptop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,29,46,0.95)] via-[rgba(11,29,46,0.85)] to-[rgba(11,29,46,0.7)]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-[900px] mx-auto px-6 sm:px-12 py-16 sm:py-20">
          <h1 className="text-[#F8F6F3] font-serif text-[2.5rem] sm:text-[3.5rem] font-normal leading-tight mb-6">
            Target Audiences Guide
          </h1>
          <p className="text-[#D4A574] text-[clamp(1.2rem,2.5vw,1.6rem)] max-w-[700px] leading-relaxed">
            Stop wasting money targeting everyone. Learn how to find your perfect customers on Facebook and Instagram.
          </p>
        </div>
      </motion.div>

      {/* Content Container with Gradient Background */}
      <div className="bg-gradient-to-b from-[#0A1628] via-[#0E2338] to-[#0A1628]">
        <div className="max-w-[900px] mx-auto px-6 pb-[80px]">

        {/* Section 1 - Why Targeting Matters */}
        <motion.section
          className="mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-10 sm:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.5rem] font-bold">1</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] font-normal">
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
          className="mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-10 sm:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.5rem] font-bold">2</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] font-normal">
                The 3 Types of Audiences
              </h2>
            </div>

            <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-10 leading-relaxed">
              Not all audiences are created equal. Think of it like dating. You wouldn't propose marriage on a first date. Same with advertising.
            </p>

            {/* Cold Audiences */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-[#2E5266] to-[#1A3345] border-2 border-[#4A7C9D] rounded-2xl p-8">
                <div className="mb-6 text-center">
                  <div className="inline-block bg-[#4A7C9D] text-white px-8 py-4 rounded-xl font-bold text-[2rem] mb-4">
                    COLD AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.8rem]">
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
                  <div className="inline-block bg-[#6B8A5E] text-white px-8 py-4 rounded-xl font-bold text-[2rem] mb-4">
                    WARM AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.8rem]">
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
                  <div className="inline-block bg-[#D4A574] text-[#0B1D2E] px-8 py-4 rounded-xl font-bold text-[2rem] mb-4">
                    HOT AUDIENCES
                  </div>
                  <h3 className="text-[#F8F6F3] font-bold text-[1.8rem]">
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
          className="mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#0B1D2E] to-[#162E42] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-10 sm:p-12">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.5rem] font-bold">3</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] font-normal">
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
            </div>

            {/* Step 3 - Interests */}
            <div className="mb-10">
              <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 3: Layer in Interests</h3>
              <div className="bg-[rgba(95,169,159,0.1)] rounded-xl p-6 mb-4">
                <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] mb-6 leading-relaxed">
                  What do your ideal customers care about? What pages do they follow? What topics interest them?
                </p>

                <div className="space-y-6">
                  <div className="bg-[rgba(11,29,46,0.5)] rounded-lg p-5">
                    <h4 className="text-[#D4A574] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-3">Example: Dental Practice</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Cosmetic dentistry</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Dental health</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Invisalign</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Teeth whitening</span>
                      <span className="bg-[rgba(212,165,116,0.2)] border border-[#D4A574] text-[#D4A574] px-3 py-1 rounded-full text-[clamp(0.95rem,1.8vw,1.1rem)]">Health & wellness</span>
                    </div>
                  </div>

                  <div className="bg-[rgba(11,29,46,0.5)] rounded-lg p-5">
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
                    <div className="bg-[#5FA99F] text-white px-3 py-1 rounded-lg font-bold text-[clamp(0.95rem,1.8vw,1.1rem)] mr-4 mt-1">WEEK 1</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Run your ad. Don't touch anything. Let Meta learn.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5FA99F] text-white px-3 py-1 rounded-lg font-bold text-[clamp(0.95rem,1.8vw,1.1rem)] mr-4 mt-1">WEEK 2</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Check your results. Is cost per click under $2? Are people converting? If not, narrow your audience.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#5FA99F] text-white px-3 py-1 rounded-lg font-bold text-[clamp(0.95rem,1.8vw,1.1rem)] mr-4 mt-1">WEEK 3</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">Try a different age range or interest. See if it improves.</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#D4A574] text-[#0B1D2E] px-3 py-1 rounded-lg font-bold text-[clamp(0.95rem,1.8vw,1.1rem)] mr-4 mt-1">MONTH 2</div>
                    <p className="text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] flex-1">You now know what works. Double down on that audience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Reference Card */}
        <motion.div
          className="bg-gradient-to-br from-[#D4A574] to-[#C89860] rounded-[32px] p-10 sm:p-12 mb-12 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-[#0B1D2E] font-serif text-[2rem] font-bold mb-6 text-center">
            Quick Reference: Your First Audience
          </h2>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <h3 className="text-[#0B1D2E] font-bold text-[clamp(1.1rem,2.5vw,1.5rem)] mb-4">Starting Template for Local Businesses:</h3>
            <div className="space-y-3 text-[#0B1D2E] text-[clamp(1rem,2vw,1.2rem)]">
              <p><strong>Location:</strong> 7-10 miles around your business</p>
              <p><strong>Age:</strong> Your ideal customer age range (narrow it to 10-15 years)</p>
              <p><strong>Income:</strong> Top 25-50% of your zip code</p>
              <p><strong>Interests:</strong> 5-7 topics directly related to what you sell</p>
              <p><strong>Budget:</strong> Start with $20-30/day minimum</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[#0B1D2E] text-[clamp(1rem,2.2vw,1.4rem)] font-semibold">
              Remember: Small, focused audiences perform better than large, broad ones.
            </p>
          </div>
        </motion.div>

        </div>
      </div>
    </main>
  );
}
