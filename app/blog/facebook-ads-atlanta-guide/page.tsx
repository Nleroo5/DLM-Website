'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import { ImageObjectSchema, FAQSchema } from '@/components/StructuredDataSchemas';

export default function FacebookAdsAtlantaGuide() {
  const post = getPostBySlug('facebook-ads-atlanta-guide');

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
        url="/images/atlanta-facebook-ads-marketing-services-local-business-strategy.webp"
        caption="Facebook ads cost and pricing for Atlanta businesses"
        description="Comprehensive pricing breakdown showing Facebook advertising costs for local Atlanta businesses with ROI benchmarks and budget recommendations"
        width={1920}
        height={1145}
      />
      <ImageObjectSchema
        url="/images/facebook-ads-manager-atlanta-location-targeting-demographics-setup.webp"
        caption="Meta Ads Manager targeting interface for Atlanta campaigns"
        description="Meta Ads Manager interface showing Atlanta location targeting options with demographic filters and audience selection tools"
        width={1242}
        height={1424}
      />
      <ImageObjectSchema
        url="/images/atlanta-facebook-ads-cost-budget-calculator-roi-small-business.webp"
        caption="Facebook ads ROI calculator for Atlanta businesses"
        description="ROI calculator tool showing Facebook advertising budget analysis and cost per lead projections for Atlanta market"
        width={1400}
        height={897}
      />
      <ImageObjectSchema
        url="/images/atlanta-small-business-facebook-ads-success-story-local-marketing.webp"
        caption="Atlanta business owner reviewing Facebook ads performance"
        description="Small business owner in Atlanta reviewing successful Facebook advertising campaign results and performance metrics"
        width={1920}
        height={1281}
      />

      {/* FAQ Schema */}
      <FAQSchema
        faqs={[
          {
            question: "How long does it take to see results from Facebook ads in Atlanta?",
            answer: "Most Atlanta businesses see their first leads within 7-14 days. However, Meta's algorithm needs 30 days to fully optimize. Plan for a 60-day test to accurately judge performance. During this time, you will gather data on which audiences and ad creatives perform best in the Atlanta market."
          },
          {
            question: "What is a realistic budget for Facebook ads in Atlanta?",
            answer: "We recommend $800-2,500 per month for most small businesses. At $1,200 per month, you can expect 15-30 qualified leads. If you are in a competitive industry like legal or healthcare in Buckhead or Midtown, budget $1,500-3,000 per month for meaningful results."
          },
          {
            question: "Can I target specific Atlanta neighborhoods with Facebook ads?",
            answer: "Yes. You can target by zip code, city, or draw a custom radius around your location. For example, a Decatur coffee shop might target a 3-mile radius, while a Buckhead plastic surgeon might target specific affluent zip codes like 30327, 30305, and 30309."
          },
          {
            question: "Do Facebook ads work for service businesses in Atlanta?",
            answer: "Absolutely. Service businesses like HVAC, plumbing, legal, healthcare, and fitness see the best results because they can target by location and income level. A Roswell landscaping company can target homeowners within 15 miles making over $75,000, ensuring every ad dollar reaches qualified prospects."
          },
          {
            question: "How do I know if my Facebook ads are working?",
            answer: "Track three metrics: cost per click should be under $3 for most Atlanta businesses, cost per lead should be under $40, and cost per customer should be 10-20 percent of your customer lifetime value. Install Meta Pixel to track website conversions and phone call tracking to capture offline leads."
          }
        ]}
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
            src="/images/atlanta-facebook-ads-marketing-services-local-business-strategy.webp"
            alt="Atlanta business owner reviewing Facebook ads campaign performance and ROI dashboard"
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
              <span className="text-[#5FA99F] font-semibold text-sm tracking-[0.15em] uppercase">Complete Guide</span>
            </motion.div>
            <h1 className="text-[#F8F6F3] font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Facebook Ads Atlanta: Complete Guide for Local Businesses (2025)
            </h1>
            <p className="text-[#D4A574] text-lg sm:text-xl leading-normal font-light">
              Stop wasting money on billboards nobody sees. Here is how Atlanta businesses use Facebook ads to get customers walking through their door.
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
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Facebook Ads, Atlanta Marketing, Local Advertising</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Main Content */}
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">

        {/* Section 1 - Why Facebook Ads Work Better in Atlanta */}
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
                Why Facebook Ads Work Better in Atlanta
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Atlanta is the <strong className="text-[#5FA99F]">9th largest metro area in the United States</strong>, with over 6 million people scrolling Facebook and Instagram every single day.
              </p>

              <p>
                But here is the problem: most Atlanta businesses are still throwing money at advertising that does not work.
              </p>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">What Traditional Advertising Costs in Atlanta</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Billboard on I-85:</strong> $2,500-8,000 per month (drivers whiz by at 70mph)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Radio spot on WSB:</strong> $800-2,000 per week (people skip commercials)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Atlanta Journal-Constitution ad:</strong> $1,500-4,000 per month (newspaper readership declining)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Local magazine ad:</strong> $1,200-3,500 per month (thrown away unread)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">What Facebook Ads Cost in Atlanta</h3>
                <p className="mb-4"><strong>$800-2,500 per month</strong>, reaching ONLY people interested in your business.</p>
                <p className="text-[#5FA99F] font-bold text-[1.1rem]">
                  Same budget. Better targeting. Trackable results.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Real Atlanta Example</h3>
                <p className="mb-4">A Buckhead dental practice spent <strong>$4,500 per month on billboards</strong> along Peachtree Road.</p>
                <p className="mb-4"><strong className="text-red-400">Result:</strong> 2 new patients in 3 months.</p>
                <p className="mb-4">They switched to Facebook ads at <strong>$1,200 per month</strong>, targeting women ages 35-55, household income $75,000+, within 7 miles, interested in cosmetic dentistry.</p>
                <p className="text-[#5FA99F] font-bold text-[1.2rem]">
                  Result: 18 new patients in the first 60 days.
                </p>
                <p className="mt-4 text-[#D4A574]">
                  <strong>Why did it work?</strong> Instead of showing ads to everyone driving by, they reached people actively interested in dental services who lived nearby and could afford treatment.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 - What Are Facebook Ads? */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">2</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                What Are Facebook Ads? (Keep It Simple)
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                First, let us clear up the confusion: <strong className="text-[#5FA99F]">Facebook and Instagram ads are the same thing</strong>.
              </p>

              <p>
                In 2012, Facebook bought Instagram. In 2021, they rebranded everything as <strong>Meta</strong>. When you run Facebook ads, you are actually running them through Meta Ads Manager, which controls ads on Facebook, Instagram, and Messenger.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-6">Traditional Ads vs. Facebook Ads</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-4">Traditional Advertising</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✗</span>
                        <span>Show ads to everyone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✗</span>
                        <span>Hope the right people see it</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✗</span>
                        <span>No idea who responded</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">✗</span>
                        <span>Cannot change once published</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#5FA99F] font-bold text-[1.2rem] mb-4">Facebook Ads</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Target by age, gender, location, income</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Only pay when people click</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Track every lead and sale</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Edit and improve anytime</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="my-10 rounded-2xl overflow-hidden border border-[#5FA99F]/30">
                <Image
                  src="/images/facebook-ads-manager-atlanta-location-targeting-demographics-setup.webp"
                  alt="Meta Ads Manager interface showing Atlanta location targeting and audience demographics"
                  width={1242}
                  height={1424}
                  className="w-full h-auto"
                />
                <div className="bg-[rgba(95,169,159,0.1)] p-4">
                  <p className="text-[#F8F6F3]/80 text-[0.95rem] italic">
                    This is what Meta Ads Manager looks like. You can target people in Atlanta by zip code, interests, age, income, and more.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Simple Analogy</h3>
                <p className="mb-4">
                  Imagine you own a pizza restaurant in Virginia-Highland. You could pay for a billboard on I-85 and hope hungry people driving by remember your name later.
                </p>
                <p className="mb-4">
                  Or you could run a Facebook ad that shows up <strong>only</strong> to people who:
                </p>
                <ul className="space-y-2 mb-4 ml-6">
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3">•</span>
                    <span>Live within 3 miles of your restaurant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3">•</span>
                    <span>Are ages 25-45</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3">•</span>
                    <span>Have liked pages about pizza or Italian food</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3">•</span>
                    <span>Are browsing Facebook between 5pm-8pm (dinner time)</span>
                  </li>
                </ul>
                <p className="text-[#5FA99F] font-bold text-[1.2rem]">
                  That is the power of Facebook ads. You reach the exact people who are most likely to buy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3 - Who Should Use Facebook Ads in Atlanta */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">3</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Who Should Use Facebook Ads in Atlanta?
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Facebook ads work best for businesses selling to <strong className="text-[#5FA99F]">regular people</strong> (not other businesses) in a <strong className="text-[#5FA99F]">specific location</strong>.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg my-8">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-6">Best Industries for Facebook Ads</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-3">1. Local Services</h4>
                    <p className="mb-3">HVAC, plumbing, landscaping, cleaning, pest control, roofing, electrical</p>
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4">
                      <p className="text-[#F8F6F3]/90 text-[1rem] italic">
                        <strong>Example:</strong> A Roswell HVAC company targets homeowners within 15 miles, ages 35-65, household income $60,000+. Ad headline: "AC Broke? Same-Day Service in Roswell. Call Now."
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-3">2. Retail and Restaurants</h4>
                    <p className="mb-3">Coffee shops, boutiques, salons, gyms, bars, specialty stores</p>
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4">
                      <p className="text-[#F8F6F3]/90 text-[1rem] italic">
                        <strong>Example:</strong> A Ponce City Market boutique runs ads to women ages 25-45 within 5 miles, interested in fashion and shopping. Offers 20% off first purchase.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-3">3. Healthcare and Wellness</h4>
                    <p className="mb-3">Dentists, med spas, chiropractors, physical therapy, mental health, plastic surgery</p>
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4">
                      <p className="text-[#F8F6F3]/90 text-[1rem] italic">
                        <strong>Example:</strong> A Buckhead med spa targets women ages 35-60, household income $100,000+, within 10 miles, interested in Botox and skincare. Offers free consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[rgba(212,165,116,0.1)] to-[rgba(95,169,159,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#D4A574] font-bold text-[1.4rem] mb-4">Quick Self-Assessment Quiz</h3>
                <p className="mb-6">Facebook ads are a good fit if you answer YES to these questions:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 text-[1.5rem]">□</span>
                    <span>Do you serve regular people (not Fortune 500 companies)?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 text-[1.5rem]">□</span>
                    <span>Do you have a physical location or service area in Atlanta?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 text-[1.5rem]">□</span>
                    <span>Is your average sale worth at least $50?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 text-[1.5rem]">□</span>
                    <span>Can you spend at least $800 per month on ads?</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 text-[1.5rem]">□</span>
                    <span>Can you handle 10-20 leads per month?</span>
                  </li>
                </ul>
                <p className="mt-6 text-[#5FA99F] font-bold">
                  If you checked 4 or 5 boxes, Facebook ads will probably work great for you.
                </p>
              </div>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">NOT Ideal For:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>B2B selling to Fortune 500 companies</strong> - LinkedIn ads work better</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Emergency services</strong> - People search Google when their pipe bursts, they do not scroll Facebook</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Products under $20</strong> - Hard to make the math work unless you sell in volume</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4 - How Much Do Facebook Ads Cost in Atlanta */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">4</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                How Much Do Facebook Ads Cost in Atlanta?
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Let us talk real numbers. The actual cost of Facebook ads in Atlanta depends on <strong className="text-[#5FA99F]">your industry, competition, and targeting</strong>.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-8 my-10 overflow-x-auto">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-6">Atlanta Facebook Ads Pricing by Industry</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#5FA99F]/30">
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Industry</th>
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Cost Per Click</th>
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Cost Per Lead</th>
                      <th className="pb-4 text-[#D4A574] font-bold">Recommended Budget</th>
                    </tr>
                  </thead>
                  <tbody className="text-[1rem]">
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4">Home Services (HVAC, Plumbing)</td>
                      <td className="py-4 pr-4">$1.50 - $3.00</td>
                      <td className="py-4 pr-4">$25 - $45</td>
                      <td className="py-4">$1,000 - $2,000/month</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4">Restaurants & Retail</td>
                      <td className="py-4 pr-4">$0.80 - $1.50</td>
                      <td className="py-4 pr-4">$8 - $20</td>
                      <td className="py-4">$800 - $1,500/month</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4">Healthcare (Dentists, Med Spas)</td>
                      <td className="py-4 pr-4">$2.00 - $4.50</td>
                      <td className="py-4 pr-4">$35 - $75</td>
                      <td className="py-4">$1,500 - $3,000/month</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4">Fitness & Gyms</td>
                      <td className="py-4 pr-4">$1.00 - $2.00</td>
                      <td className="py-4 pr-4">$15 - $35</td>
                      <td className="py-4">$800 - $1,500/month</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4">Legal Services</td>
                      <td className="py-4 pr-4">$3.00 - $6.00</td>
                      <td className="py-4 pr-4">$60 - $150</td>
                      <td className="py-4">$2,000 - $4,000/month</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">Real Estate</td>
                      <td className="py-4 pr-4">$1.50 - $3.50</td>
                      <td className="py-4 pr-4">$30 - $60</td>
                      <td className="py-4">$1,200 - $2,500/month</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-6 text-[#F8F6F3]/70 text-[0.95rem] italic">
                  These are actual costs we see for Atlanta businesses. Your results may vary based on targeting and ad quality.
                </p>
              </div>

              <div className="my-10 rounded-2xl overflow-hidden border border-[#5FA99F]/30">
                <Image
                  src="/images/atlanta-facebook-ads-cost-budget-calculator-roi-small-business.webp"
                  alt="ROI calculator showing Facebook ads budget breakdown and cost per lead projections for Atlanta businesses"
                  width={1400}
                  height={897}
                  className="w-full h-auto"
                />
                <div className="bg-[rgba(95,169,159,0.1)] p-4">
                  <p className="text-[#F8F6F3]/80 text-[0.95rem] italic">
                    Use a calculator like this to estimate your Facebook ads budget and expected leads based on your industry.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">What You Get for $1,200/Month</h3>
                <p className="mb-6">This is the sweet spot budget for most small businesses in Atlanta. Here is what to expect:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Ad Spend Breakdown</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex justify-between">
                        <span>Daily budget:</span>
                        <strong>$40/day</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Clicks per month:</span>
                        <strong>400-600</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Average CPC:</span>
                        <strong>$2.00-3.00</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Ad impressions:</span>
                        <strong>30,000-50,000</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Expected Results</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex justify-between">
                        <span>Leads per month:</span>
                        <strong className="text-[#5FA99F]">15-30</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Cost per lead:</span>
                        <strong className="text-[#5FA99F]">$40-80</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Close rate (10%):</span>
                        <strong className="text-[#5FA99F]">2-3 customers</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>ROI (if avg sale = $500):</span>
                        <strong className="text-[#5FA99F]">$1,000-1,500</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-[#D4A574] font-bold text-center text-[1.1rem]">
                  That is a positive return in month 1, and it only gets better as Meta learns.
                </p>
              </div>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Pricing Mistakes to Avoid</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Starting with less than $800/month</strong> - Not enough data for Meta to optimize</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Judging performance in the first 2 weeks</strong> - Wait 30-60 days for accurate results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">•</span>
                    <span><strong>Comparing to Google Ads costs</strong> - Facebook is cheaper per click but often lower intent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5 - Step-by-Step How to Run Facebook Ads */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">5</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Step-by-Step: How to Run Facebook Ads
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Running Facebook ads is easier than you think. Here is exactly what to do, <strong className="text-[#5FA99F]">step by step</strong>.
              </p>

              <div className="space-y-8 my-10">
                {/* Step 1 */}
                <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 1: Set Up Your Meta Business Account</h3>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">1.</span>
                      <span>Go to <strong>business.facebook.com</strong> and create a Business Manager account</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">2.</span>
                      <span>Add your Facebook Page (if you do not have one, create it first)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">3.</span>
                      <span>Add your Instagram account (optional but recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">4.</span>
                      <span>Add a payment method (credit card or bank account)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">5.</span>
                      <span>Install Meta Pixel on your website (tracks conversions)</span>
                    </li>
                  </ul>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 mt-4">
                    <p className="text-[#F8F6F3]/90 text-[1rem] italic">
                      <strong>Time required:</strong> 30-45 minutes. This is a one-time setup. Once done, you can create ads anytime.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 2: Choose Your Campaign Objective</h3>
                  <p className="mb-4">Meta asks what you want people to do. Pick one:</p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">•</span>
                      <span><strong>Leads</strong> - Best for service businesses (HVAC, dentists, lawyers)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">•</span>
                      <span><strong>Traffic</strong> - Send people to your website or landing page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">•</span>
                      <span><strong>Engagement</strong> - Get likes, comments, and shares (awareness)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4A574] mr-3 font-bold">•</span>
                      <span><strong>Sales</strong> - Best for e-commerce with online checkout</span>
                    </li>
                  </ul>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-4 mt-4">
                    <p className="text-[#5FA99F] font-bold text-[1.1rem]">
                      For Atlanta local businesses, we recommend starting with Leads or Traffic.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 3: Target Your Atlanta Audience</h3>
                  <p className="mb-4">This is where the magic happens. Be specific:</p>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6 mb-4">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Location Targeting Example</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">→</span>
                        <span><strong>Option 1:</strong> Target everyone in Atlanta metro (6 million people)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">→</span>
                        <span><strong>Option 2:</strong> Target 10-mile radius around your business</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">→</span>
                        <span><strong>Option 3:</strong> Target specific zip codes (30327, 30305, 30309)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6 mb-4">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Demographics Example</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li><strong>Age:</strong> 35-55 (adjust based on your customer)</li>
                      <li><strong>Gender:</strong> All, or specific (e.g., women for med spa)</li>
                      <li><strong>Income:</strong> Top 10-25% of zip code (for premium services)</li>
                      <li><strong>Homeowner:</strong> Yes (for home services)</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Interests Example</h4>
                    <p className="mb-2">Layer on 2-3 relevant interests:</p>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex items-start">
                        <span className="text-[#D4A574] mr-3">•</span>
                        <span>HVAC company: Home improvement, DIY, home ownership</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A574] mr-3">•</span>
                        <span>Med spa: Beauty, skincare, anti-aging</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D4A574] mr-3">•</span>
                        <span>Restaurant: Foodie, dining out, Italian cuisine</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Step 4: Create Your Ad</h3>
                  <p className="mb-4">You need 3 things: image/video, headline, and offer.</p>
                  <div className="space-y-4">
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                      <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Ad Creative (Image or Video)</h4>
                      <ul className="space-y-2 text-[1rem]">
                        <li className="flex items-start">
                          <span className="text-[#5FA99F] mr-3">✓</span>
                          <span>Use high-quality photos of your work, team, or customers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5FA99F] mr-3">✓</span>
                          <span>Video performs 2-3x better than images (even a simple 15-second clip)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5FA99F] mr-3">✓</span>
                          <span>Avoid stock photos - people want to see YOUR business</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#5FA99F] mr-3">✓</span>
                          <span>Add text overlay with your offer (20% off, free consultation, etc.)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                      <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Headline Formula</h4>
                      <p className="mb-3">Problem + Solution + Location + CTA</p>
                      <ul className="space-y-2 text-[1rem]">
                        <li className="text-[#5FA99F]">✓ "AC Broke? Same-Day Repair in Roswell. Call Now."</li>
                        <li className="text-[#5FA99F]">✓ "Receding Gums? Expert Buckhead Dentist. Book Free Consult."</li>
                        <li className="text-[#5FA99F]">✓ "Need a Personal Trainer? Midtown Gym. First Session Free."</li>
                      </ul>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                      <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">Offer Examples</h4>
                      <ul className="space-y-2 text-[1rem]">
                        <li className="flex items-start">
                          <span className="text-[#D4A574] mr-3">→</span>
                          <span>Free consultation or estimate</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D4A574] mr-3">→</span>
                          <span>20% off first service</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D4A574] mr-3">→</span>
                          <span>Buy one get one 50% off</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D4A574] mr-3">→</span>
                          <span>Free diagnostic or inspection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#D4A574] mr-3">→</span>
                          <span>Limited-time seasonal promotion</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-10 rounded-2xl overflow-hidden border border-[#5FA99F]/30">
                <Image
                  src="/images/facebook-ads-atlanta-neighborhoods-targeting-buckhead-midtown-audience.webp"
                  alt="Facebook Ads Manager showing custom audience targeting options and demographic filters for Atlanta businesses"
                  width={1516}
                  height={1568}
                  className="w-full h-auto"
                />
                <div className="bg-[rgba(95,169,159,0.1)] p-4">
                  <p className="text-[#F8F6F3]/80 text-[0.95rem] italic">
                    This is the targeting interface where you select your Atlanta audience demographics, interests, and behaviors.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Common Mistakes That Kill Your Ads</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Targeting too broad</strong> - "Everyone in Atlanta" wastes money. Get specific.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Weak offer</strong> - "Check out our services" does not motivate. Give a reason to click NOW.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Ugly creative</strong> - Blurry photos or generic stock images get ignored. Use YOUR photos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>No follow-up system</strong> - You get leads but never call them back. Set up a CRM.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Stopping too soon</strong> - Quitting after 2 weeks because "it is not working." Wait 60 days.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6 - Facebook Ads vs Traditional Atlanta Advertising */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">6</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Facebook Ads vs Traditional Atlanta Advertising
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Let us compare Facebook ads to the traditional advertising most Atlanta businesses still use. <strong className="text-[#5FA99F]">The numbers tell the story</strong>.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-8 my-10 overflow-x-auto">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-6">Cost and ROI Comparison</h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#5FA99F]/30">
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Method</th>
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Monthly Cost</th>
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Reach</th>
                      <th className="pb-4 pr-4 text-[#D4A574] font-bold">Targeting</th>
                      <th className="pb-4 text-[#D4A574] font-bold">Avg. Leads</th>
                    </tr>
                  </thead>
                  <tbody className="text-[1rem]">
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4 font-bold">Billboard (I-85)</td>
                      <td className="py-4 pr-4">$2,500 - $8,000</td>
                      <td className="py-4 pr-4">500,000 impressions</td>
                      <td className="py-4 pr-4">None - everyone sees it</td>
                      <td className="py-4 text-red-400">1-3 leads</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4 font-bold">Radio (WSB-AM)</td>
                      <td className="py-4 pr-4">$3,200 - $8,000</td>
                      <td className="py-4 pr-4">200,000 listeners</td>
                      <td className="py-4 pr-4">By show/time only</td>
                      <td className="py-4 text-red-400">5-10 leads</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4 font-bold">Newspaper (AJC)</td>
                      <td className="py-4 pr-4">$1,500 - $4,000</td>
                      <td className="py-4 pr-4">100,000 readers</td>
                      <td className="py-4 pr-4">By section only</td>
                      <td className="py-4 text-red-400">3-8 leads</td>
                    </tr>
                    <tr className="border-b border-[#5FA99F]/20">
                      <td className="py-4 pr-4 font-bold">Magazine (Local)</td>
                      <td className="py-4 pr-4">$1,200 - $3,500</td>
                      <td className="py-4 pr-4">50,000 readers</td>
                      <td className="py-4 pr-4">By publication theme</td>
                      <td className="py-4 text-red-400">2-5 leads</td>
                    </tr>
                    <tr className="bg-[rgba(95,169,159,0.15)]">
                      <td className="py-4 pr-4 font-bold text-[#5FA99F]">Facebook Ads</td>
                      <td className="py-4 pr-4 text-[#5FA99F]">$800 - $2,500</td>
                      <td className="py-4 pr-4 text-[#5FA99F]">30,000-80,000 impressions</td>
                      <td className="py-4 pr-4 text-[#5FA99F]">Age, location, income, interests</td>
                      <td className="py-4 text-[#5FA99F] font-bold">15-30 leads</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-6 text-[#F8F6F3]/70 text-[0.95rem] italic">
                  Based on actual results from Atlanta businesses across industries. Your results will vary.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Real ROI Calculation</h3>
                <p className="mb-6">Let us use a real Atlanta HVAC company as an example:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-red-400 font-bold text-[1.2rem] mb-4">Billboard on I-85</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex justify-between">
                        <span>Monthly cost:</span>
                        <strong>$4,500</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Leads per month:</span>
                        <strong>2</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Cost per lead:</span>
                        <strong className="text-red-400">$2,250</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Conversions (30%):</span>
                        <strong>0.6 customers</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Revenue (avg $800):</span>
                        <strong>$480</strong>
                      </li>
                      <li className="flex justify-between border-t border-red-400/30 pt-2 mt-2">
                        <span>ROI:</span>
                        <strong className="text-red-400">-$4,020 loss</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-[#5FA99F] font-bold text-[1.2rem] mb-4">Facebook Ads</h4>
                    <ul className="space-y-2 text-[1rem]">
                      <li className="flex justify-between">
                        <span>Monthly cost:</span>
                        <strong>$1,500</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Leads per month:</span>
                        <strong>22</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Cost per lead:</span>
                        <strong className="text-[#5FA99F]">$68</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Conversions (30%):</span>
                        <strong>6.6 customers</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Revenue (avg $800):</span>
                        <strong>$5,280</strong>
                      </li>
                      <li className="flex justify-between border-t border-[#5FA99F]/30 pt-2 mt-2">
                        <span>ROI:</span>
                        <strong className="text-[#5FA99F]">+$3,780 profit</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-[#D4A574] font-bold text-center text-[1.2rem]">
                  Same service. Same city. $7,800 difference in monthly profit.
                </p>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Why Facebook Ads Win</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Precise targeting</strong> - Only show ads to qualified prospects in your service area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Pay per click</strong> - Only pay when someone shows interest, not for impressions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Track everything</strong> - Know exactly which ads drive calls, forms, and sales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Instant changes</strong> - Edit your ads in real-time based on performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Lower barrier to entry</strong> - Start with $800/month instead of $5,000/month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 7 - Success Stories from Atlanta Businesses */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">7</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Success Stories from Atlanta Businesses
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                These are <strong className="text-[#5FA99F]">real Atlanta businesses</strong> that switched to Facebook ads and saw immediate results.
              </p>

              {/* Case Study 1 */}
              <div className="bg-gradient-to-br from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#5FA99F] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#000000] text-[1.5rem] font-bold">1</span>
                  </div>
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem]">Buckhead Med Spa</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Challenge</h4>
                    <p>
                      A Buckhead med spa was spending $3,200/month on ads in local luxury magazines. They were getting 3-4 calls per month, mostly tire-kickers asking about prices.
                    </p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Strategy</h4>
                    <p className="mb-3">Switched to Facebook ads targeting:</p>
                    <ul className="space-y-2 text-[1rem] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Women ages 35-60</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Household income $100,000+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Within 10 miles of Buckhead</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Interested in: Botox, anti-aging, skincare, luxury beauty</span>
                      </li>
                    </ul>
                    <p className="mt-3">Budget: $2,000/month | Offer: Free consultation + $100 off first treatment</p>
                  </div>
                  <div className="bg-[rgba(95,169,159,0.2)] rounded-lg p-6">
                    <h4 className="text-[#5FA99F] font-bold text-[1.2rem] mb-4">The Results (First 90 Days)</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">42</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Qualified Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">18</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Consultations Booked</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">12</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">New Patients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">$38K</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Revenue Generated</div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-[#D4A574] font-bold text-[1.1rem]">
                      ROI: 533% return | Cost per customer: $500 | Avg customer value: $3,200
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-gradient-to-br from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#5FA99F] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#000000] text-[1.5rem] font-bold">2</span>
                  </div>
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem]">Decatur HVAC Company</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Challenge</h4>
                    <p>
                      A family-owned HVAC company in Decatur relied on word-of-mouth and Angie's List. Summer came and they could not keep up with demand, but winter was slow with almost no leads.
                    </p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Strategy</h4>
                    <p className="mb-3">Ran seasonal Facebook ad campaigns targeting:</p>
                    <ul className="space-y-2 text-[1rem] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Homeowners within 15 miles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Ages 35-65</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Household income $50,000+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Interested in: Home improvement, DIY, home ownership</span>
                      </li>
                    </ul>
                    <p className="mt-3">Budget: $1,200/month | Winter offer: $99 furnace tune-up | Summer offer: $79 AC safety check</p>
                  </div>
                  <div className="bg-[rgba(95,169,159,0.2)] rounded-lg p-6">
                    <h4 className="text-[#5FA99F] font-bold text-[1.2rem] mb-4">The Results (First 6 Months)</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">127</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Total Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">64</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Service Calls Booked</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">23</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Full Replacements Sold</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">$142K</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Revenue Generated</div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-[#D4A574] font-bold text-[1.1rem]">
                      ROI: 1,872% return | Cost per lead: $57 | Avg replacement value: $6,200
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-gradient-to-br from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#5FA99F] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#000000] text-[1.5rem] font-bold">3</span>
                  </div>
                  <h3 className="text-[#5FA99F] font-bold text-[1.4rem]">Midtown Personal Trainer</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Challenge</h4>
                    <p>
                      A personal trainer was posting on Instagram daily with 800 followers but getting zero clients. She tried flyers at local coffee shops with no response.
                    </p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-lg p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-3">The Strategy</h4>
                    <p className="mb-3">Created video ads (simple iPhone clips of her training clients) targeting:</p>
                    <ul className="space-y-2 text-[1rem] ml-4">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Women ages 28-45</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Within 5 miles of Midtown</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Interested in: Fitness, weight loss, CrossFit, yoga</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3">•</span>
                        <span>Excluded: Current gym members (already have trainers)</span>
                      </li>
                    </ul>
                    <p className="mt-3">Budget: $600/month | Offer: Free first session + personalized fitness plan</p>
                  </div>
                  <div className="bg-[rgba(95,169,159,0.2)] rounded-lg p-6">
                    <h4 className="text-[#5FA99F] font-bold text-[1.2rem] mb-4">The Results (First 60 Days)</h4>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">28</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Qualified Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">19</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Free Sessions Done</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">11</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Paying Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#5FA99F] text-[2rem] font-bold">$6.6K</div>
                        <div className="text-[#F8F6F3]/80 text-[0.9rem]">Monthly Recurring Revenue</div>
                      </div>
                    </div>
                    <p className="mt-6 text-center text-[#D4A574] font-bold text-[1.1rem]">
                      ROI: 450% return | Cost per client: $109 | Avg client lifetime value: $1,800
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-10 rounded-2xl overflow-hidden border border-[#5FA99F]/30">
                <Image
                  src="/images/atlanta-small-business-facebook-ads-success-story-local-marketing.webp"
                  alt="Atlanta small business owner reviewing Facebook ads campaign performance and analytics dashboard"
                  width={1920}
                  height={1281}
                  className="w-full h-auto"
                />
                <div className="bg-[rgba(95,169,159,0.1)] p-4">
                  <p className="text-[#F8F6F3]/80 text-[0.95rem] italic">
                    Real Atlanta business owners see measurable results from Facebook ads when targeting is done right.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Common Thread in All Success Stories</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Specific targeting</strong> - They did not target "everyone in Atlanta"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Strong offer</strong> - Free consultation or discount removed the barrier to entry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Real creative</strong> - They used authentic photos/videos of their actual business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Fast follow-up</strong> - They responded to leads within 5 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>60-day commitment</strong> - They gave Meta time to learn and optimize</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 8 - Should You Hire an Atlanta Agency */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">8</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Should You Hire an Atlanta Agency?
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                The million-dollar question: <strong className="text-[#5FA99F]">Should you run Facebook ads yourself or hire an agency?</strong> Here is an honest breakdown.
              </p>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-6">DIY vs Agency Decision Framework</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-4">Do It Yourself If:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You have 5-10 hours per week to learn and manage ads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Your budget is under $1,500/month</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You enjoy learning new marketing skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You can create decent photos/videos yourself</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You have a simple offer (one service, one location)</span>
                      </li>
                    </ul>
                    <p className="mt-6 text-[#F8F6F3]/80 text-[1rem] italic">
                      <strong>Time investment:</strong> 20-30 hours to set up, then 3-5 hours/week ongoing
                    </p>
                  </div>
                  <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6">
                    <h4 className="text-[#D4A574] font-bold text-[1.2rem] mb-4">Hire an Agency If:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Your time is worth more than $100/hour</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>Your budget is $2,000+/month</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You want results in 30-60 days, not 6 months</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You have multiple services or locations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                        <span>You tried DIY and wasted money with poor results</span>
                      </li>
                    </ul>
                    <p className="mt-6 text-[#F8F6F3]/80 text-[1rem] italic">
                      <strong>Cost:</strong> $1,000-2,500/month management fee + ad spend
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-8 rounded-lg my-8">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">What to Look for in an Atlanta Facebook Ads Agency</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-2">1. Local Market Knowledge</h4>
                    <p>
                      They should understand Atlanta neighborhoods, demographics, and local competition. Ask: "What Atlanta zip codes perform best for businesses like mine?"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-2">2. Transparent Reporting</h4>
                    <p>
                      You should get weekly reports showing: ad spend, clicks, leads, cost per lead, and revenue. No vague "engagement" metrics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-2">3. Industry Experience</h4>
                    <p>
                      Ask for case studies in YOUR industry. Facebook ads for restaurants are different from HVAC or med spas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-2">4. No Long-Term Contracts</h4>
                    <p>
                      Good agencies earn your business every month. Avoid 12-month contracts. Look for 30-60 day terms.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#D4A574] font-bold text-[1.1rem] mb-2">5. You Own the Assets</h4>
                    <p>
                      Your ad account, creative, and pixel data should stay with you if you leave. Get this in writing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-10 rounded-2xl overflow-hidden border border-[#5FA99F]/30">
                <Image
                  src="/images/facebook-ads-agency-atlanta-reporting-dashboard-performance-metrics.webp"
                  alt="Facebook Ads Manager analytics dashboard showing conversion tracking and performance data"
                  width={1920}
                  height={830}
                  className="w-full h-auto"
                />
                <div className="bg-[rgba(95,169,159,0.1)] p-4">
                  <p className="text-[#F8F6F3]/80 text-[0.95rem] italic">
                    A good agency provides clear analytics dashboards showing exactly where your ad dollars go and what results they generate.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#D4A574] font-bold text-[1.4rem] mb-4">How Drive Lead Media Helps Atlanta Businesses</h3>
                <p className="mb-6">
                  We are a local Atlanta digital marketing agency specializing in Facebook ads for service businesses. Here is what makes us different:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Atlanta-focused targeting</strong> - We know which neighborhoods convert for your industry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>30-day trial available</strong> - See results before committing long-term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Creative production included</strong> - We create your ad images and videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>Weekly performance reports</strong> - Real metrics, not vanity numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span><strong>You own everything</strong> - Ad account, pixel data, creative assets all stay with you</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#5FA99F] text-[#000000] px-8 py-4 rounded-full font-bold text-[1.1rem] hover:bg-[#D4A574] transition-colors duration-300"
                  >
                    Get a Free Facebook Ads Audit
                  </Link>
                  <p className="mt-4 text-[#F8F6F3]/70 text-[0.95rem]">
                    No commitment required. We will analyze your current marketing and show you what is possible.
                  </p>
                </div>
              </div>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Agency Red Flags to Avoid</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Guaranteed results</strong> - No one can guarantee Facebook ad performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Pay upfront for 6-12 months</strong> - Scam alert. Never pay more than 1 month ahead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>They own your ad account</strong> - Always insist on your own Business Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>No industry experience</strong> - If they have not run ads for your type of business, run away</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 font-bold">✗</span>
                    <span><strong>Vague reporting</strong> - "We got you 10,000 impressions!" means nothing without leads and sales</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 9 - Related Resources */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#D4A574] text-[1.25rem] sm:text-[1.5rem] font-bold">9</span>
              </div>
              <h2 className="text-[#F8F6F3] font-serif text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-normal">
                Related Resources
              </h2>
            </div>

            <div className="space-y-6 text-[#F8F6F3] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed">
              <p>
                Want to dive deeper into Facebook ads? Here are more resources to help you <strong className="text-[#5FA99F]">master Meta advertising</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">Facebook Ads Cost Calculator</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Calculate your expected Facebook ads budget, cost per lead, and ROI based on your industry and location in Atlanta.
                  </p>
                </Link>

                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">Meta Pixel Installation Guide</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Step-by-step tutorial on installing Meta Pixel to track conversions, retarget visitors, and optimize your ad campaigns.
                  </p>
                </Link>

                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">Atlanta Audience Targeting Guide</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Complete breakdown of Atlanta demographics, zip codes, and interests to help you target the right people.
                  </p>
                </Link>

                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">Facebook Ad Creative Templates</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Download free Canva templates for Facebook ads designed specifically for Atlanta service businesses.
                  </p>
                </Link>

                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">Lead Form vs Landing Page: Which Converts Better?</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Compare Facebook lead forms and landing pages to see which generates more qualified leads for your business.
                  </p>
                </Link>

                <Link href="/blog" className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-6 hover:bg-[rgba(95,169,159,0.15)] transition-colors duration-300">
                  <h3 className="text-[#5FA99F] font-bold text-[1.2rem] mb-3">How to Read Facebook Ads Manager Reports</h3>
                  <p className="text-[#F8F6F3]/80 text-[1rem]">
                    Understand the metrics that matter and ignore the vanity numbers. Focus on what drives real business results.
                  </p>
                </Link>
              </div>

              <div className="bg-gradient-to-r from-[rgba(95,169,159,0.1)] to-[rgba(212,165,116,0.1)] rounded-2xl p-8 my-10">
                <h3 className="text-[#5FA99F] font-bold text-[1.4rem] mb-4">Official Meta Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3 font-bold">→</span>
                    <span>
                      <a href="https://business.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:underline">
                        Meta Business Manager
                      </a> - Create your ad account and get started
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3 font-bold">→</span>
                    <span>
                      <a href="https://www.facebook.com/business/learn" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:underline">
                        Meta Blueprint
                      </a> - Free courses on Facebook advertising
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4A574] mr-3 font-bold">→</span>
                    <span>
                      <a href="https://www.facebook.com/business/help" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:underline">
                        Meta Ads Help Center
                      </a> - Troubleshoot ad account issues
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border-l-4 border-[#5FA99F] p-6 rounded-lg my-8">
                <h3 className="text-[#F8F6F3] font-bold text-[1.2rem] mb-4">Still Have Questions?</h3>
                <p className="mb-4">
                  Facebook ads can feel overwhelming at first. If you are stuck or not sure where to start, we are here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#5FA99F] text-[#000000] px-6 py-3 rounded-full font-bold text-[1rem] hover:bg-[#D4A574] transition-colors duration-300"
                >
                  Ask Us Anything
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 10 - CTA Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#000000] border-2 border-[#5FA99F] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="text-center mb-10">
              <h2 className="text-[#F8F6F3] font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold mb-4">
                Ready to Start Getting Leads from Facebook Ads?
              </h2>
              <p className="text-[#F8F6F3]/80 text-[1.2rem] max-w-3xl mx-auto">
                You have two options: do it yourself or let us handle it for you. Either way, we are here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Option 1 - DIY */}
              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F]/30 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[rgba(212,165,116,0.2)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#D4A574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-[#D4A574] font-bold text-[1.5rem] mb-2">DIY Approach</h3>
                  <p className="text-[#F8F6F3]/70 text-[1rem]">Learn and manage your own campaigns</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Access to our free Facebook ads calculator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Free email course on Meta advertising</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Download our ad creative templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Join our free Atlanta Facebook ads group</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/blog"
                    className="inline-block bg-[rgba(212,165,116,0.2)] text-[#D4A574] border-2 border-[#D4A574] px-8 py-4 rounded-full font-bold text-[1.1rem] hover:bg-[#D4A574] hover:text-[#000000] transition-colors duration-300"
                  >
                    Get Free Resources
                  </Link>
                </div>
              </div>

              {/* Option 2 - Hire Drive Lead Media */}
              <div className="bg-gradient-to-br from-[rgba(95,169,159,0.2)] to-[rgba(95,169,159,0.1)] border-2 border-[#5FA99F] rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#5FA99F] text-[#000000] px-4 py-1 rounded-full text-[0.9rem] font-bold">
                  RECOMMENDED
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#5FA99F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-[#5FA99F] font-bold text-[1.5rem] mb-2">Hire Drive Lead Media</h3>
                  <p className="text-[#F8F6F3]/70 text-[1rem]">We handle everything for you</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Free Facebook ads audit (no commitment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Custom Atlanta targeting strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Professional ad creative production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>Weekly performance reports with real metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 font-bold">✓</span>
                    <span>30-day trial available</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#5FA99F] text-[#000000] px-8 py-4 rounded-full font-bold text-[1.1rem] hover:bg-[#D4A574] transition-colors duration-300 shadow-lg shadow-[#5FA99F]/30"
                  >
                    Get Your Free Audit
                  </Link>
                  <p className="mt-4 text-[#F8F6F3]/60 text-[0.9rem]">
                    No credit card required. See what is possible in 30 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 pt-8 border-t border-[#5FA99F]/20">
              <p className="text-[#F8F6F3]/70 text-[1rem] mb-4">
                <strong className="text-[#5FA99F]">Not sure which option is right for you?</strong>
              </p>
              <p className="text-[#F8F6F3]/60 text-[0.95rem]">
                Schedule a free 15-minute call and we will help you decide. No sales pressure, just honest advice.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-[#5FA99F] hover:text-[#D4A574] font-bold underline"
              >
                Schedule Free Strategy Call
              </Link>
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
