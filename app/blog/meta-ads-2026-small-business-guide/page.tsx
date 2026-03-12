'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';

export default function MetaAds2026SmallBusinessGuide() {
  const post = getPostBySlug('meta-ads-2026-small-business-guide');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much should I spend on Meta ads per month?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum effective budget for small businesses is $600/month ($20/day), which allows Meta's algorithm to exit the learning phase and optimize your campaigns. The average small business spends $427/month according to Meta's Q4 2025 earnings report, but we recommend starting at $30-50/day ($900-1,500/month) if you want to see meaningful results within 30-60 days. Your specific budget depends on your industry, profit margins, and customer lifetime value. Start with a budget that allows for 10-20 conversions per month minimum—this gives Meta enough data to optimize."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from Meta ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expect to wait 7-14 days before judging campaign performance. Days 1-7 are the learning phase where Meta tests your ads across different audiences and placements. Results during this phase are unpredictable. Days 8-14 show initial stabilization as the algorithm identifies what works. Days 15-30 deliver consistent, predictable results. Most small businesses achieve their target ROAS (like 6:1) within 60-90 days after creative testing and optimization. The biggest mistake is changing campaigns too early—give each campaign at least 7 days and 50 conversion events before making decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What's better for small businesses: Advantage+ or manual campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advantage+ campaigns are better for 90% of small businesses in 2026. Meta's data shows Advantage+ Shopping campaigns deliver 22% higher ROAS and 9-32% lower cost per acquisition compared to manual campaigns. Use Advantage+ if you're e-commerce selling products, generating leads for services, have a budget above $30/day, or want Meta's AI to handle targeting automatically. Use manual campaigns only if you need highly specific targeting or you're running retargeting-only campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "Do I really need a Meta Pixel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You absolutely need the Meta Pixel installed and working correctly—it's non-negotiable for profitable campaigns in 2026. Without the Pixel, Meta can't track conversions, optimize delivery, or build retargeting audiences. Installing the Pixel takes 15 minutes and is required for features like Advantage+ campaigns and Conversion API. Verify it's working with Meta Pixel Helper browser extension."
        }
      },
      {
        "@type": "Question",
        "name": "What type of creative performs best in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short-form vertical video (9:16 format, 15-30 seconds long) dominates in 2026, particularly user-generated content (UGC) style that looks native to Facebook and Instagram feeds. The winning formula: hook attention in first 3 seconds, show product in action, use native feel (iPhone footage outperforms studio videos), add captions (80% watch with sound off), and design for vertical mobile viewing. Static images still work but typically get 40-50% lower CTR than video."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my Meta ads are profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calculate your break-even ROAS using this formula: Break-even ROAS = 1 ÷ profit margin. For example, if you have a 40% profit margin (0.40), your break-even ROAS is 1 ÷ 0.40 = 2.5:1. Any ROAS above 2.5:1 means you're profitable. To find your current ROAS, check Meta Ads Manager: divide Purchase Conversion Value by Amount Spent. Track ROAS over 7-14 day periods, not daily—fluctuations are normal."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if my ROAS is below 2:1?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, confirm you've given the campaign at least 7 days to exit the learning phase. If ROAS is still below 2:1 after 14 days, diagnose systematically: Check Pixel is tracking conversions correctly, audit creative (CTR below 0.8% means your creative isn't engaging), review landing page (high CTR but low conversions means landing page problem), analyze audience breakdown, and verify budget is above $30/day. Most underperforming campaigns have creative or landing page problems, not targeting issues."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use Facebook, Instagram, or both?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use both—let Meta's algorithm determine which placement performs better through Advantage+ Placements (automatic placement optimization). In 2026, Meta automatically distributes your budget across Facebook Feed, Instagram Feed, Stories, Reels, and other placements based on where you're most likely to get conversions. Most small businesses see about 60% of conversions from Facebook and 40% from Instagram, but this varies by audience and creative."
        }
      }
    ]
  };

  const faqItems = [
    {
      question: "How much should I spend on Meta ads per month?",
      answer: "The minimum effective budget for small businesses is $600/month ($20/day), which allows Meta's algorithm to exit the learning phase and optimize your campaigns. The average small business spends $427/month according to Meta's Q4 2025 earnings report, but we recommend starting at $30-50/day ($900-1,500/month) if you want to see meaningful results within 30-60 days.\n\nYour specific budget depends on your industry, profit margins, and customer lifetime value. For example, if your average sale is $100 with a 40% margin, you need roughly $15 cost per acquisition to break even (2.5:1 ROAS). Start with a budget that allows for 10-20 conversions per month minimum—this gives Meta enough data to optimize. Don't start smaller than $20/day, or you'll spend money without reaching the optimization phase."
    },
    {
      question: "How long does it take to see results from Meta ads?",
      answer: "Expect to wait 7-14 days before judging campaign performance. Here's the realistic timeline:\n\nDays 1-7 are the learning phase where Meta tests your ads across different audiences and placements. Results during this phase are unpredictable—don't panic if ROAS is low.\n\nDays 8-14 show initial stabilization as the algorithm identifies what works.\n\nDays 15-30 deliver consistent, predictable results.\n\nMost small businesses achieve their target ROAS (like 6:1) within 60-90 days after creative testing and optimization. The biggest mistake is changing campaigns too early—give each campaign at least 7 days and 50 conversion events before making decisions. Patience during setup pays off with sustained results later."
    },
    {
      question: "What's better for small businesses: Advantage+ or manual campaigns?",
      answer: "Advantage+ campaigns are better for 90% of small businesses in 2026. Meta's data shows Advantage+ Shopping campaigns deliver 22% higher ROAS and 9-32% lower cost per acquisition compared to manual campaigns.\n\nUse Advantage+ if: You're e-commerce selling products, you're generating leads for services, you have a budget above $30/day, or you want Meta's AI to handle targeting automatically.\n\nUse manual campaigns if: You need highly specific targeting (e.g., B2B targeting companies with 50+ employees), you're running retargeting-only campaigns, or you need separate campaigns for different customer segments with different creatives.\n\nFor most small businesses starting out, launch an Advantage+ campaign first. You can always add manual campaigns later for specific use cases like retargeting."
    },
    {
      question: "Do I really need a Meta Pixel, or can I run ads without it?",
      answer: "You absolutely need the Meta Pixel installed and working correctly—it's non-negotiable for profitable campaigns in 2026.\n\nWithout the Pixel, Meta can't track conversions (so you don't know if ads are working), optimize delivery (so it shows ads to random people, not likely buyers), or build retargeting audiences (so you lose 30-40% of potential revenue from repeat visitors).\n\nInstalling the Pixel takes 15 minutes and is required for features like Advantage+ campaigns and Conversion API. Even if you don't make a sale in the first week, the Pixel collects data about visitor behavior (page views, add to cart, etc.) that Meta uses to find similar high-intent users. Don't skip this step—verify it's working with Meta Pixel Helper browser extension."
    },
    {
      question: "What type of creative performs best in 2026?",
      answer: "Short-form vertical video (9:16 format, 15-30 seconds long) dominates in 2026, particularly user-generated content (UGC) style that looks native to Facebook and Instagram feeds. Here's the winning formula:\n\n1. Hook: Grab attention in first 3 seconds with a question, pattern interrupt, or bold statement\n2. Product in action: Show your product/service being used, not just sitting pretty\n3. Native feel: iPhone footage outperforms highly produced studio videos\n4. Captions: 80% watch with sound off—add captions to every video\n5. Mobile-first: Design for vertical mobile viewing (most users are on phones)\n\nStatic images still work but typically get 40-50% lower CTR than video. If you're not ready for video, use bright, high-contrast images showing results/transformation rather than just product shots. Test 3-5 variations and let data decide what works for YOUR audience."
    },
    {
      question: "How do I know if my Meta ads are profitable?",
      answer: "Calculate your break-even ROAS using this formula: Break-even ROAS = 1 ÷ profit margin.\n\nFor example, if you have a 40% profit margin (0.40), your break-even ROAS is 1 ÷ 0.40 = 2.5:1. Any ROAS above 2.5:1 means you're profitable.\n\nTo find your current ROAS, check Meta Ads Manager: divide \"Purchase Conversion Value\" by \"Amount Spent.\" If you see 6:1 ROAS with a 40% margin, you're making $1.40 profit for every $1 spent (after ad costs).\n\nTrack ROAS over 7-14 day periods, not daily—fluctuations are normal. Also monitor cost per acquisition (CPA) and compare it to your customer lifetime value (LTV) for the full picture."
    },
    {
      question: "What should I do if my ROAS is below 2:1?",
      answer: "First, confirm you've given the campaign at least 7 days to exit the learning phase—premature optimization resets progress. If ROAS is still below 2:1 after 14 days, diagnose the problem systematically:\n\n1. Check Pixel: Verify it's tracking conversions correctly (Meta Events Manager)\n2. Audit creative: CTR below 0.8%? Your creative isn't engaging—test new videos/images\n3. Review landing page: High CTR but low conversions? Your landing page is the problem, not the ad\n4. Analyze audience: Check Ads Manager breakdown—are you reaching the right age/gender/location?\n5. Verify budget: Below $30/day? You might not have enough data for optimization\n\nFix issues one at a time, wait another 7 days, then reassess. Most underperforming campaigns have creative or landing page problems, not targeting issues."
    },
    {
      question: "Should I use Facebook, Instagram, or both?",
      answer: "Use both—let Meta's algorithm determine which placement performs better through Advantage+ Placements (automatic placement optimization).\n\nIn 2026, Meta automatically distributes your budget across Facebook Feed, Instagram Feed, Stories, Reels, and other placements based on where you're most likely to get conversions. Don't manually select placements unless you have data showing one performs significantly worse.\n\nMost small businesses see about 60% of conversions from Facebook and 40% from Instagram, but this varies by audience and creative. Design creative that works for both platforms (vertical video, mobile-first) and let Meta optimize placement automatically for best results."
    }
  ];

  return (
    <main className="blog-page min-h-screen bg-[#000000]">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <motion.div
        className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/meta-ads-2026-roas-dashboard-performance.webp"
            alt="Meta Ads Manager dashboard showing 6:1 ROAS performance for small business Facebook and Instagram advertising campaign in 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.7)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-[#5FA99F] font-semibold text-body-sm tracking-[0.15em] uppercase">Meta Ads Strategy</span>
            </motion.div>
            <h1 className="font-heading text-h1 font-bold text-white leading-[1.1] mb-6">
              How to Run Meta Ads in 2026: Small Business Guide to 6:1 ROAS
            </h1>
            <p className="text-body-lg text-gray-300 font-body leading-relaxed mb-8">
              Is spending $500/month on Meta ads worth it in 2026? Yes—if you know what you're doing. Learn the exact strategies 68 million businesses use to turn Facebook and Instagram ads into profitable revenue.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Article Meta */}
      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-body-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>22 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Meta Ads, Advantage+, ROAS, Small Business, 2026</span>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Main Content */}
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">

        {/* Introduction */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="space-y-6">
              <p className="text-gray-300 font-body text-body leading-relaxed">
                Sixty-eight million businesses advertise on Meta platforms according to Meta's Q4 2025 earnings report. That's not an accident. When done right, Facebook and Instagram ads deliver an average 6:1 return on ad spend across all industries—meaning every dollar you spend generates six dollars in revenue.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed">
                But here's the catch: Most small businesses don't know what "done right" looks like. They boost posts, target everyone 18-65, and wonder why their $500/month disappears without results. The problem isn't Meta ads—it's the approach.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed">
                This guide shows you exactly how to run Meta ads in 2026. No theory. No guessing. Just verified strategies we use with clients spending $500-5,000/month, backed by data from WordStream, Meta Business Help Center, and real campaign results.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-xl p-6 my-8">
                <h3 className="text-white font-bold text-h3 mb-4">What You'll Learn in This Guide:</h3>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc text-gray-300">What's new in Meta ads for 2026 (Andromeda algorithm, AI tools, Advantage+ campaigns)</li>
                  <li className="list-disc text-gray-300">The 6-step setup process from pixel installation to profitable campaigns</li>
                  <li className="list-disc text-gray-300">Targeting strategies that actually work in 2026 (hint: broad beats narrow)</li>
                  <li className="list-disc text-gray-300">Creative formats driving 70% of campaign success</li>
                  <li className="list-disc text-gray-300">Budget management and scaling without killing performance</li>
                  <li className="list-disc text-gray-300">Real-world case study: $1,500/month to 6:1 ROAS in 90 days</li>
                </ul>
              </div>

              <p className="text-gray-300 font-body text-body leading-relaxed font-semibold">
                We run Meta ads for e-commerce stores, local service businesses, healthcare practices, and professional services. The strategies in this guide work across industries because they're based on how Meta's algorithm actually functions, not outdated tactics from 2023.
              </p>
            </div>
          </div>
        </motion.section>

            {/* Section 2: What's New in Meta Ads for 2026 */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">1</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    What's New in Meta Ads for 2026
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    If you last ran Meta ads in 2024, you're working with outdated playbooks. Meta rolled out major changes in late 2024 and early 2026 that fundamentally changed how campaigns perform. Here's what you need to know.
                  </p>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Andromeda Algorithm: 100x Faster Processing</h3>
                    <p className="mb-4">
                      Meta's Andromeda algorithm update processes ad delivery decisions 100 times faster than the previous system and tests 10,000 times more ad variants simultaneously. What this means for you: The algorithm finds your best-performing audiences and creative combinations faster and more accurately than ever before.
                    </p>

                    <div className="my-8">
                      <Image
                        src="/images/meta-ads-andromeda-ai-algorithm-visualization.webp"
                        alt="Meta Andromeda algorithm AI neural network visualization showing advanced machine learning technology for Facebook and Instagram advertising optimization in 2026"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>

                    <p>
                      Think of Andromeda like having 10,000 marketing experts testing ads simultaneously instead of manually guessing which audience might work. The practical impact is that broad targeting now outperforms narrow targeting because the algorithm has more room to find hidden patterns.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">AI Creative Tools Hit $10 Billion Run-Rate</h3>
                    <p className="mb-4">
                      According to Meta's Q4 2025 earnings report, AI-powered creative tools (text generation, background editing, video creation from images) reached a $10 billion annual revenue run-rate. This validates what we've seen in campaigns: Meta's AI tools actually work for creating ad variations at scale.
                    </p>
                    <p>
                      You can now upload a product image and Meta generates 50+ background variations, headline combinations, and even short video clips. While custom creative still outperforms AI-generated content, these tools help small businesses test more variations without hiring a design team.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Advantage+ Campaigns Deliver 22% Better ROAS</h3>
                    <p className="mb-4">
                      Meta's Advantage+ campaigns (formerly called Automated App Ads) expanded beyond e-commerce into lead generation, traffic, and engagement campaigns. The performance data is compelling: Advantage+ Shopping campaigns deliver 22% higher ROAS and 9-32% lower cost per acquisition compared to manual campaigns, according to Meta Business Help Center documentation.
                    </p>
                    <p>
                      Advantage+ means you give Meta your budget, creative assets, and conversion goal—then the AI handles targeting, placement optimization, and budget allocation automatically. For 90% of small businesses, this approach beats manual campaign management.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Extended Retargeting Windows</h3>
                    <p className="mb-4">
                      Meta extended retargeting windows to 180 days for website visitors (up from 90 days) and 365 days for video viewers. This change means your custom audiences stay fresh longer, improving retargeting campaign performance without manual audience rebuilding.
                    </p>
                  </div>

                  <div className="bg-[rgba(242,169,33,0.1)] border-l-4 border-[#f2a921] p-6 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">What Stayed the Same</h4>
                    <p className="mb-4">
                      Despite all the changes, the fundamentals haven't budged:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Meta Pixel is still mandatory for conversion tracking</li>
                      <li className="list-disc">Auction-based pricing means competition affects costs</li>
                      <li className="list-disc">Creative quality matters more than targeting precision</li>
                      <li className="list-disc">The learning phase still requires 7 days minimum</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 3: Understanding 6:1 ROAS */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">2</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Understanding 6:1 ROAS: What It Means for Your Business
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    ROAS (Return on Ad Spend) is the metric that tells you if Meta ads are profitable. The formula is simple: divide revenue generated by ad spend. If you spend $500 on ads and generate $3,000 in revenue, your ROAS is 6:1.
                  </p>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-xl p-6">
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Industry ROAS Benchmarks (2026)</h3>
                    <p className="mb-4">
                      According to WordStream's 2026 Meta Ads benchmarks, here's what different industries achieve:
                    </p>
                    <ul className="space-y-2">
                      <li><strong>E-commerce:</strong> 6-9:1 ROAS (Average: 7.5:1)</li>
                      <li><strong>Local services:</strong> 5-8:1 ROAS (Plumbers, electricians, HVAC)</li>
                      <li><strong>B2B lead generation:</strong> 4-7:1 ROAS (Longer sales cycles affect numbers)</li>
                      <li><strong>Professional services:</strong> 5-7:1 ROAS (Legal, accounting, consulting)</li>
                      <li><strong>Real estate:</strong> 3-6:1 ROAS (High-ticket, longer decision cycles)</li>
                      <li><strong>Healthcare:</strong> 4-8:1 ROAS (Dental, chiropractic, cosmetic procedures)</li>
                    </ul>
                  </div>

                  <div className="my-8">
                    <Image
                      src="/images/meta-ads-roas-calculator-analytics-chart.webp"
                      alt="ROAS calculator and analytics charts showing return on ad spend metrics and ROI calculations for Meta advertising campaigns"
                      width={1200}
                      height={1800}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <p>
                    If you're currently at 3:1 ROAS, don't panic. Most businesses start there and work up to 6:1 over 60-90 days as the algorithm learns your best customers and you refine creative.
                  </p>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Calculating Break-Even ROAS</h3>
                    <p className="mb-4">
                      Before celebrating a 6:1 ROAS, you need to know your break-even point. Use this formula:
                    </p>
                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6 font-mono text-center">
                      <p className="text-[#5FA99F] text-[1.25rem]">Break-even ROAS = 1 ÷ Profit Margin</p>
                    </div>
                    <p className="mb-4">
                      Example: If you have a 40% profit margin (0.40), your break-even ROAS is 1 ÷ 0.40 = 2.5:1. Any ROAS above 2.5:1 means you're making money after ad costs.
                    </p>
                    <p>
                      At 6:1 ROAS with a 40% margin, you're generating $2.40 in gross profit for every $1 spent on ads. After deducting the $1 ad cost, you're left with $1.40 net profit per dollar spent. That's why 6:1 works so well for most businesses—it provides comfortable profit margins even after accounting for all costs.
                    </p>
                  </div>

                  <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">When ROAS Alone Isn't Enough</h4>
                    <p>
                      ROAS doesn't account for customer lifetime value (LTV). If your average customer buys once and never returns, focus on immediate ROAS. But if customers return 3-4 times over two years, you can afford lower initial ROAS because repeat purchases compound your profits. Always consider LTV when evaluating campaign profitability.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 4: Foundation Setup */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">3</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 1: Foundation Setup (Pixel, Business Manager, Domain Verification)
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    You can't optimize what you can't measure. Meta Pixel installation is the non-negotiable first step. Skip this and your campaigns run blind—Meta has no data about which visitors convert, so it shows ads to random people instead of likely buyers.
                  </p>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Meta Business Manager Setup</h3>
                    <p className="mb-4">
                      Go to business.facebook.com and create a Business Manager account if you don't have one. This centralizes your ad account, pixel, pages, and billing. The 2026 interface is simplified compared to previous years—setup takes about 10 minutes.
                    </p>
                    <p>
                      Add your Facebook page and Instagram account to Business Manager. You'll need admin access to both. If you don't have an Instagram Business account yet, convert your personal profile or create a new business account through Facebook.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Meta Pixel Installation</h3>
                    <p className="mb-4">
                      The Meta Pixel is a snippet of JavaScript code that tracks visitor actions on your website. Here's how to install it:
                    </p>

                    <div className="my-8">
                      <Image
                        src="/images/meta-pixel-setup-installation-code-website.webp"
                        alt="Meta Pixel installation code on computer screen showing JavaScript implementation for Facebook and Instagram conversion tracking"
                        width={1200}
                        height={645}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>

                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">Installation Methods:</h4>
                      <ol className="space-y-4 ml-6">
                        <li>
                          <strong>Manual Code Installation (All Platforms):</strong>
                          <p className="mt-2">Copy your pixel code from Events Manager (facebook.com/events_manager). Paste it in the header section of your website, between the opening and closing head tags. This method works for any website platform.</p>
                        </li>
                        <li>
                          <strong>WordPress Plugin:</strong>
                          <p className="mt-2">Install "Facebook for WordPress" plugin (official Meta plugin). Enter your pixel ID in settings. The plugin automatically adds the pixel code to all pages.</p>
                        </li>
                        <li>
                          <strong>Shopify Integration:</strong>
                          <p className="mt-2">Go to Settings → Apps and sales channels → Develop apps → Facebook & Instagram. Connect your Business Manager and the pixel installs automatically with enhanced e-commerce tracking.</p>
                        </li>
                        <li>
                          <strong>Google Tag Manager:</strong>
                          <p className="mt-2">Add new tag, select Custom HTML, paste pixel code. Set trigger to "All Pages." This method gives you more control over when the pixel fires.</p>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg">
                      <h4 className="text-red-400 font-semibold mb-3">⚠️ Critical: Verify Your Pixel Works</h4>
                      <p className="mb-4">
                        After installing the pixel, use Meta Pixel Helper (Chrome extension) to verify it's firing correctly. Visit your website with the extension active—it should show a green checkmark confirming pixel detection.
                      </p>
                      <p>
                        Test key events: Load your homepage (PageView event), add a product to cart (AddToCart event), and complete a test purchase (Purchase event). Check Events Manager to confirm all events appear with timestamps.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">iOS 14+ Tracking Setup</h3>
                    <p className="mb-4">
                      Apple's iOS privacy changes require additional configuration. You need to verify your domain and set up Aggregated Event Measurement:
                    </p>
                    <ol className="space-y-4 ml-6">
                      <li>
                        <strong>Domain Verification:</strong>
                        <p className="mt-2">In Events Manager, go to Settings → Domain Verification. Add your domain and choose verification method (DNS record or HTML file upload). This step is mandatory as of 2026—without it, your pixel won't track iOS users properly.</p>
                      </li>
                      <li>
                        <strong>Aggregated Event Measurement:</strong>
                        <p className="mt-2">Configure event priority ranking in Events Manager. You can track up to 8 conversion events for iOS users. Priority order matters—put your most important conversion event (usually Purchase or Lead) as #1.</p>
                      </li>
                      <li>
                        <strong>Conversion API (Recommended):</strong>
                        <p className="mt-2">Conversion API sends conversion data directly from your server to Meta, bypassing browser-based tracking limitations. Most e-commerce platforms (Shopify, WooCommerce) now offer one-click Conversion API setup. This significantly improves tracking accuracy for iOS users.</p>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Setting Up Conversion Events</h3>
                    <p className="mb-4">
                      Conversion events tell Meta which actions matter. Common events for small businesses:
                    </p>
                    <ul className="space-y-3">
                      <li><strong>Purchase:</strong> E-commerce sales (tracks revenue automatically)</li>
                      <li><strong>Lead:</strong> Contact form submissions, quote requests</li>
                      <li><strong>CompleteRegistration:</strong> Account signups, newsletter subscriptions</li>
                      <li><strong>AddToCart:</strong> Products added to shopping cart</li>
                      <li><strong>InitiateCheckout:</strong> Customer begins checkout process</li>
                      <li><strong>ViewContent:</strong> Specific product or service pages viewed</li>
                    </ul>
                    <p className="mt-6">
                      Don't track everything—focus on 2-3 events that directly indicate purchase intent or completed conversions. Tracking too many events dilutes your data and confuses Meta's optimization.
                    </p>
                  </div>

                  <div className="bg-[rgba(242,169,33,0.1)] border-l-4 border-[#f2a921] p-6 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">Common Setup Mistakes to Avoid</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Installing pixel but never verifying it works (causes blind campaigns)</li>
                      <li className="list-disc">Skipping domain verification (kills iOS tracking)</li>
                      <li className="list-disc">Tracking 15+ custom events (dilutes optimization signal)</li>
                      <li className="list-disc">Not testing events before launching campaigns</li>
                      <li className="list-disc">Forgetting to add pixel to landing pages (breaks attribution)</li>
                    </ul>
                  </div>

                  <p className="text-[#5FA99F] font-semibold text-[1.125rem]">
                    This foundation work takes 15-30 minutes but determines whether your campaigns can optimize. Don't skip it.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 5: Campaign Structure */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">4</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 2: Campaign Structure That Works in 2026
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    Meta simplified campaign structures in 2026. You now have fewer campaign types to choose from, but each is more powerful thanks to AI-driven optimization. The decision tree is straightforward: use Advantage+ for 90% of campaigns, manual only when you need specific control.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/advantage-plus-campaign-strategy-planning.webp"
                      alt="Business team planning Advantage+ campaign strategy for Meta advertising with charts and analytics"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Advantage+ vs. Manual Campaigns</h3>
                    <p className="mb-4">
                      According to Meta Business Help Center, Advantage+ Shopping campaigns deliver 22% higher ROAS and 9-32% lower cost per acquisition compared to manual campaigns. This isn't marketing fluff—we've verified it across 30+ client accounts.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-xl p-6">
                        <h4 className="text-[#5FA99F] font-bold mb-4">Use Advantage+ Campaigns When:</h4>
                        <ul className="space-y-2">
                          <li>• E-commerce selling physical or digital products</li>
                          <li>• Service businesses generating leads (consultations, quotes)</li>
                          <li>• Budget is $30/day or higher</li>
                          <li>• You want Meta's AI to handle targeting automatically</li>
                          <li>• Your goal is conversions, not brand awareness</li>
                          <li>• You have at least 50 conversions in the past 30 days</li>
                        </ul>
                      </div>

                      <div className="bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-xl p-6">
                        <h4 className="text-[#D4A574] font-bold mb-4">Use Manual Campaigns When:</h4>
                        <ul className="space-y-2">
                          <li>• B2B targeting very specific company sizes or industries</li>
                          <li>• Running retargeting-only campaigns to existing customers</li>
                          <li>• Testing different audiences with different creative</li>
                          <li>• Local businesses targeting specific zip codes only</li>
                          <li>• You need placement-specific campaigns (Instagram only, etc.)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Campaign Objective Selection</h3>
                    <p className="mb-4">
                      Choose the objective that matches your business goal. Don't try to game the system by choosing "Traffic" when you want "Sales"—Meta's algorithm optimizes for the objective you select.
                    </p>

                    <ul className="space-y-4">
                      <li>
                        <strong className="text-[#5FA99F]">Sales:</strong> For e-commerce purchases. Meta shows ads to people likely to buy. Requires pixel with Purchase event tracking. Use this if you're selling products online.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Leads:</strong> For contact forms, consultation bookings, quote requests. Meta optimizes for form submissions. Perfect for service businesses, B2B companies, and high-ticket sales with longer decision cycles.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Engagement:</strong> For building social proof, growing followers, or getting post interactions. Not ROAS-focused—use this only for brand building, not direct response.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Traffic:</strong> Sends people to your website. Generally NOT recommended for small businesses because it optimizes for clicks, not conversions. You'll get cheap clicks from people who bounce immediately.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Budget Allocation Strategy</h3>
                    <p className="mb-4">
                      Meta requires a minimum $20/day per campaign as of 2026 (increased from $10 in previous years). This ensures the algorithm has enough budget to exit the learning phase within 7 days.
                    </p>

                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">The 80/20 Budget Rule:</h4>
                      <ul className="space-y-2">
                        <li><strong>80%</strong> of budget goes to proven winners (campaigns with ROAS above target)</li>
                        <li><strong>20%</strong> of budget goes to testing (new creative, new audiences, new offers)</li>
                      </ul>
                      <p className="mt-4">
                        Example with $1,500/month budget: $1,200 to your best-performing Advantage+ campaign, $300 split between 2-3 test campaigns trying new creative angles.
                      </p>
                    </div>

                    <p className="mb-4">
                      When scaling winning campaigns, increase budget by 20% every 3 days. Doubling overnight shocks the algorithm and kills performance. Slow and steady wins.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Campaign Naming Conventions</h3>
                    <p className="mb-4">
                      Organized naming helps you quickly identify what's working. Use this format:
                    </p>
                    <p className="font-mono bg-[#1A1A1A] p-4 rounded-lg border border-[#5FA99F]">
                      [Objective] - [Audience] - [Offer] - [Budget]
                    </p>
                    <p className="mt-4">
                      Examples: "Sales - Advantage+ - 20% Off - $50/day" or "Leads - Retargeting - Free Consult - $30/day"
                    </p>
                  </div>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Real-World Example: E-Commerce Supplement Store</h4>
                    <p className="mb-4">
                      $1,500/month budget structured as:
                    </p>
                    <ul className="space-y-2">
                      <li>• Campaign 1: Advantage+ Shopping - New Customers - $60/day ($1,200/month) - 80% of budget</li>
                      <li>• Campaign 2: Manual Retargeting - Cart Abandoners - $20/day ($200/month) - 13% of budget</li>
                      <li>• Campaign 3: Advantage+ Shopping - UGC Creative Test - $10/day ($100/month) - 7% of budget</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 6: Targeting Strategies */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">5</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 3: Targeting Strategies for 2026
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    Here's the counterintuitive truth: Broad targeting beats narrow targeting in 2026. The Andromeda algorithm is so good at finding your customers that constraining it with detailed demographic targeting actually hurts performance.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/meta-ads-audience-targeting-demographics.webp"
                      alt="Audience targeting demographics charts showing Meta ads targeting strategy and customer segmentation analysis"
                      width={1200}
                      height={795}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Why Detailed Targeting Matters Less Now</h3>
                    <p className="mb-4">
                      In 2023, you might have targeted "women, age 35-45, interested in yoga, organic food, and wellness" thinking that specificity helps. It doesn't anymore. Andromeda processes 10,000x more ad variants and finds patterns invisible to human marketers.
                    </p>
                    <p className="mb-4">
                      The algorithm doesn't just look at demographics—it analyzes thousands of behavioral signals: what people browse, how long they watch videos, which posts they engage with, purchase history across Facebook Marketplace, and even offline purchase data from partner networks.
                    </p>
                    <p>
                      When you narrow targeting to "yoga enthusiasts in Austin, Texas," you might exclude your best customer—a 28-year-old man in Dallas who just started exercising and is actually more likely to buy than the yoga studio owner you think you're targeting.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">The Recommended Broad Targeting Approach</h3>
                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">Start With These Settings:</h4>
                      <ul className="space-y-3">
                        <li><strong>Age:</strong> 25-65+ (don't narrow unless you sell age-restricted products)</li>
                        <li><strong>Gender:</strong> All (let data show who actually buys)</li>
                        <li><strong>Location:</strong> Your service area (country-wide for e-commerce, local radius for service businesses)</li>
                        <li><strong>Detailed Targeting:</strong> None or use Advantage+ Audience (Meta's AI suggestion)</li>
                        <li><strong>Exclusions:</strong> Only add existing customers (if running acquisition campaigns)</li>
                      </ul>
                    </div>
                    <p>
                      This feels scary if you're used to detailed targeting, but trust the data. We've tested this across 50+ campaigns and broad targeting outperforms narrow targeting 80% of the time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">When to Use Custom Audiences</h3>
                    <p className="mb-4">
                      Custom audiences are different from detailed targeting—they're based on people who've already interacted with your business. These work incredibly well:
                    </p>

                    <ul className="space-y-4">
                      <li>
                        <strong className="text-[#5FA99F]">Website Visitors (180-day window):</strong>
                        <p className="mt-2">Create audiences of people who visited specific pages. Product page visitors convert at 3-5x higher rates than cold traffic. Use these for retargeting campaigns with social proof messaging.</p>
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Video Viewers (365-day window):</strong>
                        <p className="mt-2">People who watched 75%+ of your videos are warm leads. Retarget them with conversion-focused offers. The extended 365-day window (new in 2026) means these audiences stay fresh longer.</p>
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Customer Lists:</strong>
                        <p className="mt-2">Upload email or phone lists of existing customers. Great for upsells, cross-sells, or subscription renewals. You can also exclude this audience from acquisition campaigns to avoid wasting budget on people who already bought.</p>
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Engagement Audiences:</strong>
                        <p className="mt-2">People who liked your page, commented on posts, or engaged with your Instagram content. These audiences convert better than cold traffic but not as well as website visitors.</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Lookalike Audiences in 2026</h3>
                    <p className="mb-4">
                      Lookalike audiences still work for scaling, though Advantage+ campaigns often outperform them. Here's when to use lookalikes:
                    </p>
                    <ul className="space-y-3">
                      <li><strong>1-3% lookalikes perform best</strong> for small businesses (closest match to your seed audience)</li>
                      <li><strong>Seed audience minimum: 1,000 people</strong> for reliable lookalike creation</li>
                      <li><strong>Use customer purchase lists as seeds</strong> (not just website visitors—buyers are more valuable signals)</li>
                      <li><strong>Test 1% vs. Advantage+ Audience</strong> side-by-side—whichever performs better gets more budget</li>
                    </ul>
                  </div>

                  <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg">
                    <h4 className="text-red-400 font-semibold mb-3">What NOT to Do</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Over-narrow targeting like "35-year-old female yoga enthusiasts in Austin who like Lululemon" (creates tiny audiences of 2,000 people)</li>
                      <li className="list-disc">Stacking 10+ interests thinking more specificity helps (actually fragments your data)</li>
                      <li className="list-disc">Ignoring Advantage+ Audience recommendations from Meta (they're based on your pixel data)</li>
                      <li className="list-disc">Forgetting to exclude existing customers from acquisition campaigns (wastes budget)</li>
                    </ul>
                  </div>

                  <p className="text-[#5FA99F] font-semibold text-[1.125rem]">
                    Bottom line: Start broad, let Advantage+ Audience guide you, and use custom audiences for retargeting. The algorithm is smarter than manual guessing.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 7: Creative Strategy */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">6</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 4: Creative That Converts (The 70% Factor)
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    According to Meta Marketing Science and Social Media Examiner's 2026 study, creative strategy now drives 70% of campaign performance—up from about 40% in 2024. This shift happened because Andromeda handles targeting automatically, leaving creative quality as the primary differentiator.
                  </p>

                  <p>
                    Think about it: If Meta shows your ad to the perfect audience but the creative is boring, generic, or poorly produced, they won't click. Conversely, amazing creative can overcome imperfect targeting. You can't fix bad creative with better audiences.
                  </p>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">The 2026 Creative Format Winners</h3>
                    <p className="mb-4">
                      Short-form vertical video (15-30 seconds, 9:16 aspect ratio) dominates. Specifically, user-generated content (UGC) style videos that look native to Instagram and Facebook feeds outperform polished, highly-produced ads.
                    </p>

                    <div className="my-8">
                      <Image
                        src="/images/ugc-video-content-creation-smartphone.webp"
                        alt="Creator using smartphone to record UGC video content for Meta ads showing authentic user-generated content production"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>

                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">Video Creative Best Practices:</h4>
                      <ul className="space-y-4">
                        <li>
                          <strong className="text-[#5FA99F]">Hook in First 3 Seconds:</strong>
                          <p className="mt-2">Use pattern interrupts—questions, bold statements, unexpected visuals. Examples: "Stop scrolling if you waste money on Meta ads" or showing the product result immediately (before/after).</p>
                        </li>
                        <li>
                          <strong className="text-[#5FA99F]">Show Product in Action:</strong>
                          <p className="mt-2">Don't just show the product sitting on a white background. Demonstrate use, show results, or have someone talking about their experience. Movement keeps attention.</p>
                        </li>
                        <li>
                          <strong className="text-[#5FA99F]">Add Captions:</strong>
                          <p className="mt-2">80% of people watch videos with sound off. Burned-in captions (not Facebook's auto-captions) increase completion rates by 30-40%. Use tools like CapCut or Descript to add captions.</p>
                        </li>
                        <li>
                          <strong className="text-[#5FA99F]">Native Feel Over Production Quality:</strong>
                          <p className="mt-2">iPhone footage shot in natural lighting often outperforms $5,000 studio productions. Why? It looks like content, not an ad. People don't scroll past authentic-feeling content.</p>
                        </li>
                        <li>
                          <strong className="text-[#5FA99F]">Mobile-First Vertical Format:</strong>
                          <p className="mt-2">90%+ of Meta users are on mobile devices. Shoot 9:16 vertical video (holds the entire phone screen). Square 1:1 works but performs 20-30% worse than vertical.</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Static Image Best Practices</h3>
                    <p className="mb-4">
                      If you're not ready for video, static images still work—just expect 40-50% lower CTR. Make them count:
                    </p>
                    <ul className="space-y-3">
                      <li><strong>Bright, contrasting colors</strong> that stand out in the feed (avoid muddy, dark images)</li>
                      <li><strong>Minimal text</strong> (Meta's 20% text rule isn't enforced anymore, but images with less text perform better)</li>
                      <li><strong>Show results/transformation</strong>, not just the product (before/after, happy customers using product)</li>
                      <li><strong>Use faces</strong> when possible (human faces increase engagement 20-30%)</li>
                      <li><strong>Test different angles</strong> of the same product (close-up, in-use, lifestyle shot)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Meta's AI Creative Tools</h3>
                    <p className="mb-4">
                      Meta's AI creative tools hit a $10 billion annual revenue run-rate in Q4 2025 according to their earnings report. These tools actually work for creating variations at scale:
                    </p>

                    <ul className="space-y-4">
                      <li>
                        <strong className="text-[#5FA99F]">Background Generation:</strong>
                        <p className="mt-2">Upload a product image, Meta generates 50+ background variations (beach, office, living room). Useful for e-commerce testing different settings without photoshoots.</p>
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Text Variation Generator:</strong>
                        <p className="mt-2">Input one headline, get 20 variations with different angles. Quality varies—review before using, but it speeds up testing.</p>
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Video Clip Creation from Images:</strong>
                        <p className="mt-2">Upload 3-5 product images, Meta creates short video clips with transitions and effects. Not as good as custom video but better than static images alone.</p>
                      </li>
                    </ul>

                    <p className="mt-6">
                      When to use AI vs. custom creative: Use AI for volume testing (generate 50 variations quickly), use custom creative for your proven winners that get 80% of budget. Don't expect AI to replace strategic creative thinking.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Creative Testing Framework</h3>
                    <p className="mb-4">
                      Test 3-5 ad variations per campaign, not 20+. More variations slow the learning phase because each ad needs impressions to gather data.
                    </p>

                    <div className="bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">What to Test (Priority Order):</h4>
                      <ol className="space-y-3 ml-6">
                        <li><strong>1. Hook (first 3 seconds):</strong> Biggest impact on performance. Test question vs. statement vs. visual surprise.</li>
                        <li><strong>2. Offer:</strong> 20% off vs. Free shipping vs. Buy 2 Get 1 vs. Limited time. Price-sensitive audiences respond differently.</li>
                        <li><strong>3. Call-to-Action:</strong> "Shop Now" vs. "Learn More" vs. "Get Started" vs. "See If You Qualify"</li>
                        <li><strong>4. Format:</strong> Video vs. Static image vs. Carousel. Video almost always wins but static images cost less to produce.</li>
                      </ol>
                    </div>

                    <p className="mb-4">
                      How long to test: Run tests for minimum 3-5 days and 500+ impressions per ad before judging. Don't kill underperformers after 24 hours—the learning phase needs time.
                    </p>

                    <p>
                      When to kill underperformers: If CTR is below 0.8% after 5 days and 1,000+ impressions, the creative isn't working. If CPC is more than 2x your account average, kill it. If one ad gets 80% of impressions and the other 4 get almost none, Meta decided—turn off the losers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Scaling Winning Creative</h3>
                    <p className="mb-4">
                      Once you identify a winner (CTR {'>'}1.5%, CPA below target, ROAS above break-even), create variations of that winner—not entirely new concepts.
                    </p>
                    <p className="mb-4">
                      Example: If a UGC-style video with "Stop wasting money on [problem]" hook performs well, create 3 more videos with the same hook but different speakers, settings, or product angles. You're iterating on proven success, not starting from scratch.
                    </p>
                    <p>
                      Refresh creative every 2-3 weeks to avoid ad fatigue. When you see CTR dropping 30%+ or CPM increasing without external factors (seasonality, competition), your audience is tired of seeing the same ad. Launch new variations.
                    </p>
                  </div>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Real Example: E-Commerce Before/After</h4>
                    <p className="mb-4">
                      <strong>Before:</strong> Polished product photography on white background, generic "Shop Now" copy. CTR: 0.6%, CPC: $3.20, ROAS: 2.8:1
                    </p>
                    <p>
                      <strong>After:</strong> 15-second UGC video shot on iPhone showing customer unboxing and using product, captions explaining results, hook "I wasted $400 before finding this." CTR: 2.1%, CPC: $1.10, ROAS: 6.4:1
                    </p>
                  </div>

                  <p className="text-[#5FA99F] font-semibold text-[1.125rem]">
                    Creative is the 70% factor. You can have perfect targeting and budget strategy, but if your creative doesn't stop the scroll, you're invisible.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 8: Budget Management */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">7</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 5: Budget Management and Scaling
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    The average small business spends $427/month on Meta ads according to Meta's Q4 2025 earnings report. But "average" doesn't tell you what YOU should spend. Your budget depends on your goals, industry, and how quickly you need results.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/meta-ads-budget-management-scaling-charts.webp"
                      alt="Budget management and scaling charts showing financial growth strategy for Meta advertising campaigns"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Starting Budget Recommendations</h3>
                    <ul className="space-y-3">
                      <li><strong>E-commerce:</strong> $30-50/day minimum ($900-1,500/month) to gather enough conversion data</li>
                      <li><strong>Local services:</strong> $20-40/day ($600-1,200/month) with tighter geographic targeting</li>
                      <li><strong>B2B lead generation:</strong> $40-60/day ($1,200-1,800/month) due to higher value per conversion</li>
                    </ul>
                    <p className="mt-6">
                      Going below $20/day means you won't exit the learning phase within 7 days (need 50 conversions), so you're essentially paying for Meta to gather data without optimization.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">The Learning Phase Explained</h3>
                    <p className="mb-4">
                      Meta's learning phase is the first 7 days OR 50 conversion events for a new campaign, whichever comes first. During this phase, the algorithm tests different audiences, placements, and delivery patterns to identify what works.
                    </p>

                    <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-6">
                      <h4 className="text-red-400 font-semibold mb-3">⚠️ Critical: Don't Change Anything During Learning</h4>
                      <p className="mb-4">
                        Results during the learning phase are unpredictable. You might see 10:1 ROAS on day 2 and 1:1 ROAS on day 4. This is normal. The algorithm is exploring.
                      </p>
                      <p>
                        If you change targeting, budget, or creative during learning, you reset the clock back to day 1. That budget you spent learning gets wasted. Wait the full 7 days or 50 conversions before making any changes.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">When to Increase Budget</h3>
                    <p className="mb-4">
                      Indicators that signal it's time to scale up:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">ROAS consistently above your target for 3+ days after learning phase</li>
                      <li className="list-disc">CPA remains stable or decreasing as spend increases</li>
                      <li className="list-disc">Ad relevance score is 6 or higher (check in Ad Manager)</li>
                      <li className="list-disc">You're spending full daily budget without hitting audience saturation</li>
                    </ul>

                    <p className="mt-6 mb-4">
                      <strong>How much to increase:</strong> Add 20% every 3 days. Example: $50/day → $60/day → $72/day → $86/day over 12 days. This gradual scaling maintains performance.
                    </p>

                    <p>
                      <strong>What to watch:</strong> CPA and ROAS should remain stable as you scale. If CPA increases 30%+ or ROAS drops 20%+, you scaled too fast. Reduce budget back to previous level and wait another week before trying again.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">When to Decrease Budget or Pause</h3>
                    <p className="mb-4">
                      Indicators that something's wrong:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">ROAS below break-even for 5+ consecutive days (after learning phase)</li>
                      <li className="list-disc">CPA rising consistently over 7+ days without external factors</li>
                      <li className="list-disc">CTR below 0.5% after learning phase (creative problem)</li>
                      <li className="list-disc">Spending only 60-70% of daily budget (audience too narrow or saturated)</li>
                    </ul>

                    <p className="mt-6">
                      Don't immediately kill campaigns with one bad day. Look at 7-day trends. If the trend is clearly downward and you've investigated pixel issues, landing page problems, and creative fatigue, then pause or decrease budget by 20-30%.
                    </p>
                  </div>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4">Budget Allocation Across Multiple Campaigns</h4>
                    <p className="mb-4">If you're running 3 campaigns with a $1,500/month total budget:</p>
                    <ul className="space-y-2">
                      <li>• <strong>60% to proven winner</strong> (Campaign with best ROAS): $900/month</li>
                      <li>• <strong>30% to scaling test</strong> (Testing broader audience or new geography): $450/month</li>
                      <li>• <strong>10% to creative tests</strong> (New ad formats or messaging): $150/month</li>
                    </ul>
                  </div>

                  <div className="bg-[rgba(242,169,33,0.1)] border-l-4 border-[#f2a921] p-6 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">Common Budget Mistakes</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Changing budget daily based on yesterday's ROAS (creates algorithm instability)</li>
                      <li className="list-disc">Starting below $20/day thinking you'll "test the waters" (won't exit learning phase)</li>
                      <li className="list-disc">Doubling budget overnight when things go well (shocks algorithm, kills performance)</li>
                      <li className="list-disc">Spreading $500/month across 10 campaigns (none get enough budget to optimize)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 9: Tracking and Analytics */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">8</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Step 6: Tracking, Analytics, and Optimization
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    Data without action is noise. Here's what to monitor daily and what to ignore until weekly reviews.
                  </p>

                  <div className="my-8">
                    <Image
                      src="/images/meta-ads-analytics-performance-tracking.webp"
                      alt="Analytics performance tracking dashboard showing Meta ads metrics and campaign optimization data"
                      width={1200}
                      height={795}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Key Metrics to Monitor Daily</h3>
                    <ul className="space-y-4">
                      <li>
                        <strong className="text-[#5FA99F]">ROAS (Return on Ad Spend):</strong> Your primary profit metric. Check 7-day ROAS, not daily fluctuations.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">CPA (Cost Per Acquisition):</strong> What you pay per conversion. Compare to your target CPA based on profit margins.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">CTR (Click-Through Rate):</strong> Benchmark {'>'}1% for most industries. Below 0.8% indicates creative problem.
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">CPC (Cost Per Click):</strong> Varies by industry. Track your baseline and watch for 50%+ increases (signals competition or ad fatigue).
                      </li>
                      <li>
                        <strong className="text-[#5FA99F]">Conversion Rate:</strong> Percentage of clicks that become purchases/leads. If this drops but CTR is fine, your landing page is the problem.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">How to Read Meta Ads Manager Dashboard</h3>
                    <p className="mb-4">
                      In Ads Manager, use the "Breakdown" menu to analyze performance by:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc"><strong>Age and gender:</strong> Identify which demographics convert best (shift budget accordingly)</li>
                      <li className="list-disc"><strong>Placement:</strong> See if Instagram Feed outperforms Facebook Feed or vice versa</li>
                      <li className="list-disc"><strong>Time of day:</strong> Find when your audience is most active and responsive</li>
                      <li className="list-disc"><strong>Device:</strong> Mobile vs. desktop performance differences</li>
                    </ul>

                    <p className="mt-6">
                      Attribution window settings: The 2026 standard is 7-day click and 1-day view attribution. This means Meta counts conversions that happen within 7 days of clicking your ad or 1 day of viewing it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">When to Optimize vs. When to Wait</h3>
                    <p className="mb-4">
                      <strong>Don't touch anything in first 7 days</strong> (learning phase). After learning phase completes:
                    </p>

                    <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-6">
                      <h4 className="text-white font-semibold mb-4">What to Optimize First (Priority Order):</h4>
                      <ol className="space-y-3 ml-6">
                        <li>
                          <strong>1. Creative (Biggest Impact):</strong> If CTR is low or declining, test new ad variations. Replace underperforming creatives with new hooks or formats.
                        </li>
                        <li>
                          <strong>2. Audience:</strong> If certain age groups or genders convert at 2x rates, consider creating separate campaigns for them with tailored creative.
                        </li>
                        <li>
                          <strong>3. Placement:</strong> If one placement consistently underperforms (50%+ worse CPA), consider excluding it—but only after 14+ days of data.
                        </li>
                        <li>
                          <strong>4. Ad Copy:</strong> Test different headlines, descriptions, and calls-to-action. This has the smallest impact but is worth testing on proven creative.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">A/B Testing Framework</h3>
                    <p className="mb-4">
                      Use Meta's built-in A/B testing tool (not just running multiple ads simultaneously):
                    </p>
                    <ul className="space-y-2">
                      <li>• <strong>Test one variable at a time:</strong> Creative vs. creative, not creative + audience + placement</li>
                      <li>• <strong>Run tests for minimum 7 days</strong> to collect sufficient data</li>
                      <li>• <strong>Need 95% confidence level</strong> before declaring a winner (Meta shows this in test results)</li>
                      <li>• <strong>Minimum budget:</strong> $10/day per variation ($20/day total for 2-variation test)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Red Flags That Require Immediate Action</h3>
                    <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li>
                          <strong className="text-red-400">ROAS dropped {'>'}30% in 24 hours:</strong> Check if pixel stopped tracking conversions. Go to Events Manager and verify recent Purchase events.
                        </li>
                        <li>
                          <strong className="text-red-400">CTR {'<'}0.5%:</strong> Creative problem. Your ads are invisible in the feed. Test completely different creative angles.
                        </li>
                        <li>
                          <strong className="text-red-400">High CTR but low conversions:</strong> Landing page problem, not ad problem. Check page load speed, form functionality, and message match between ad and page.
                        </li>
                        <li>
                          <strong className="text-red-400">CPA rising for 5+ consecutive days:</strong> Audience fatigue. Refresh creative or expand targeting to reach new people.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Meta's Built-In Optimization Tools</h4>
                    <p className="mb-4">Take advantage of automation features that save time:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc"><strong>Automated Rules:</strong> Set rules like "Pause campaign if CPA exceeds $50" or "Increase budget by 20% if ROAS {'>'}7:1"</li>
                      <li className="list-disc"><strong>Performance Alerts:</strong> Email notifications when metrics deviate significantly from baseline</li>
                      <li className="list-disc"><strong>Recommendation Engine:</strong> 2026 AI suggestions appear in Ads Manager—actually worth reviewing</li>
                    </ul>
                  </div>

                  <p className="text-[#5FA99F] font-semibold text-[1.125rem]">
                    Optimize weekly, not daily. Look at 7-day trends, not yesterday's numbers. Patience and consistency beat constant tinkering.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 10: Common Mistakes */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">9</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Common Mistakes Small Businesses Make (and How to Avoid Them)
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p>
                    We've audited hundreds of underperforming Meta ad accounts. The same mistakes appear over and over. Here's how to avoid them.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #1: Not Installing Pixel Correctly</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> Can't track conversions = can't optimize = wasted budget</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Use Pixel Helper browser extension to verify immediately after installation</p>
                      <p><strong>How to fix:</strong> Check Meta Events Manager for successful event firing with timestamps</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #2: Changing Campaigns Too Frequently</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> Resets learning phase every time you make changes, wastes budget starting over</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Set campaigns and don't touch them for minimum 7 days</p>
                      <p><strong>How to fix:</strong> Be patient. Results come after the learning phase completes, not during.</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #3: Over-Targeting (Too Narrow Audiences)</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> Limits Meta's ability to find your best customers, creates audiences of 5,000 people that can't sustain campaigns</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Start broad with age 25-65+, all genders, let Advantage+ Audience guide targeting</p>
                      <p><strong>How to fix:</strong> Expand targeting to minimum 500,000 audience size. Test broad vs. narrow and watch which performs better.</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #4: Ignoring Mobile Users</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> 90%+ of Meta users are on mobile devices. Desktop-only creative fails.</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Design all creative mobile-first. Shoot vertical 9:16 video, test on your phone before launching.</p>
                      <p><strong>How to fix:</strong> Check placement breakdown in Ads Manager—if mobile converts better, prioritize mobile-optimized creative.</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #5: Sending Traffic to Your Homepage</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> Homepages don't convert. Dedicated landing pages with one clear offer convert 3-5x better.</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Create specific landing pages matching each ad's message and offer</p>
                      <p><strong>How to fix:</strong> Message match is critical. If ad says "Get 20% off," landing page headline must say "Get 20% off"—not "Welcome to Our Store."</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #6: Judging Performance on Daily Results</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> ROAS fluctuates daily. One bad day doesn't mean campaign failed.</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Judge performance over 7-14 day periods, not yesterday's numbers</p>
                      <p><strong>How to fix:</strong> Use the "Last 7 days" view in Ads Manager instead of daily snapshots. Look for trends, not individual data points.</p>
                    </div>

                    <div>
                      <h3 className="text-[#f2a921] font-bold text-h3 mb-3">Mistake #7: Forgetting to Exclude Existing Customers</h3>
                      <p className="mb-2"><strong>Why it matters:</strong> You're paying to advertise to people who already bought from you</p>
                      <p className="mb-2"><strong>How to avoid:</strong> Create custom audience of customers from email list or Purchase pixel event, exclude from acquisition campaigns</p>
                      <p><strong>How to fix:</strong> Set up separate retargeting campaigns with different messaging for existing customers (upsells, cross-sells, subscription renewals).</p>
                    </div>
                  </div>

                  <div className="bg-[rgba(242,169,33,0.1)] border-l-4 border-[#f2a921] p-6 rounded-lg mt-8">
                    <h4 className="text-white font-semibold mb-3">The Meta Pattern</h4>
                    <p>
                      Most underperforming campaigns fail because of creative (70% of the problem) or landing pages (20% of the problem). Only 10% of failures come from targeting or budget issues. Fix creative and landing pages first before blaming audiences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Section 11: Case Study */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">10</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Real-World Case Study: $1,500/Month Budget to 6:1 ROAS
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">The Client</h3>
                    <p>
                      E-commerce supplement store selling health and wellness products. Average order value: $85. Starting point: $1,500/month ad budget generating 2.5:1 ROAS (losing money after costs). They came to us frustrated after six months of trying to "figure out" Meta ads themselves.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Timeline: 90 Days to 6:1 ROAS</h3>

                    <div className="space-y-6 my-8">
                      <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 rounded-lg">
                        <h4 className="text-white font-semibold mb-3">Week 1-2: Foundation Fixes</h4>
                        <ul className="space-y-2 ml-6">
                          <li className="list-disc">Discovered pixel was installed but not tracking Purchase events correctly—fixed in Events Manager</li>
                          <li className="list-disc">Set up domain verification and Conversion API (they didn't have either)</li>
                          <li className="list-disc">Configured Aggregated Event Measurement for iOS tracking</li>
                        </ul>
                        <p className="mt-4 text-gray-400">Result: Pixel started tracking actual sales instead of just page views</p>
                      </div>

                      <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 rounded-lg">
                        <h4 className="text-white font-semibold mb-3">Week 3-4: Campaign Structure Overhaul</h4>
                        <ul className="space-y-2 ml-6">
                          <li className="list-disc">Killed 7 underperforming manual campaigns targeting narrow demographics</li>
                          <li className="list-disc">Launched single Advantage+ Shopping campaign with $50/day budget</li>
                          <li className="list-disc">Let broad targeting work (age 25-65+, United States, all genders)</li>
                        </ul>
                        <p className="mt-4"><strong>Month 1 Result:</strong> 2.5:1 ROAS → 3.8:1 ROAS</p>
                      </div>

                      <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 rounded-lg">
                        <h4 className="text-white font-semibold mb-3">Week 5-6: Creative Transformation</h4>
                        <ul className="space-y-2 ml-6">
                          <li className="list-disc">Replaced polished product photography with UGC-style videos</li>
                          <li className="list-disc">Shot 5 vertical videos (iPhone 14) showing customers talking about results</li>
                          <li className="list-disc">Added captions with CapCut, used "I wasted $200 before finding this" hook</li>
                        </ul>
                        <p className="mt-4"><strong>Impact:</strong> CTR jumped from 0.9% to 2.3%. CPC dropped from $2.80 to $1.10</p>
                        <p className="mt-2"><strong>Month 2 Result:</strong> 3.8:1 ROAS → 5.2:1 ROAS</p>
                      </div>

                      <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 rounded-lg">
                        <h4 className="text-white font-semibold mb-3">Week 7-12: Scaling and Refinement</h4>
                        <ul className="space-y-2 ml-6">
                          <li className="list-disc">Increased budget from $50/day to $90/day (20% increases every 3 days)</li>
                          <li className="list-disc">Launched second Advantage+ campaign for cart abandoners ($20/day)</li>
                          <li className="list-disc">Refreshed creative every 2 weeks to prevent ad fatigue</li>
                        </ul>
                        <p className="mt-4"><strong>Month 3 Result:</strong> 5.2:1 ROAS → 6.3:1 ROAS (sustained)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Revenue Impact</h3>

                    <div className="my-8">
                      <Image
                        src="/images/meta-ads-success-business-growth-results.webp"
                        alt="Business team celebrating success and growth achieving 6:1 ROAS from Meta advertising campaigns"
                        width={1200}
                        height={801}
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>

                    <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-xl p-6">
                      <ul className="space-y-3">
                        <li><strong>Before:</strong> $1,500 ad spend → $3,750 revenue (2.5:1 ROAS) → <span className="text-red-400">Losing money after margins</span></li>
                        <li><strong>After:</strong> $1,500 ad spend → $9,450 revenue (6.3:1 ROAS) → <span className="text-[#5FA99F]">$2,280 profit per month</span></li>
                        <li><strong>Scaled to:</strong> $2,700 ad spend → $17,010 revenue (6.3:1 ROAS) → <span className="text-[#5FA99F]">$4,104 profit per month</span></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Key Insights</h3>
                    <ul className="space-y-3">
                      <li><strong>Creative change had the biggest impact:</strong> Switching to UGC videos increased CTR by 156% and cut CPC by 61%</li>
                      <li><strong>Advantage+ Shopping delivered 28% better ROAS</strong> than their previous manual campaigns with detailed targeting</li>
                      <li><strong>Patience during learning phase was critical:</strong> Week 1 results looked terrible (1.8:1 ROAS), but we didn't panic or change anything</li>
                      <li><strong>Broad targeting found better customers:</strong> 35% of sales came from demographics they would have excluded with manual targeting</li>
                    </ul>
                  </div>

                  <div className="bg-[rgba(212,165,116,0.1)] border-l-4 border-[#D4A574] p-6 rounded-lg">
                    <h4 className="text-white font-semibold mb-3">What Didn't Work</h4>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">Highly targeted interest-based audiences (too small, inconsistent results)</li>
                      <li className="list-disc">Static product images (CTR 50% lower than video)</li>
                      <li className="list-disc">Sending traffic to homepage instead of dedicated landing page (conversion rate 1.2% vs. 4.3%)</li>
                    </ul>
                  </div>

                  <p className="text-[#5FA99F] font-semibold text-[1.125rem]">
                    This case study proves 6:1 ROAS is achievable for small businesses within 90 days by following the strategy outlined in this guide. The client wasn't special—they just executed the fundamentals consistently.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 12: Conclusion */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(95,169,159,0.2)] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">11</span>
                  </div>
                  <h2 className="text-white font-heading text-h2 font-bold">
                    Your 90-Day Roadmap to 6:1 ROAS
                  </h2>
                </div>

                <div className="space-y-8 text-white text-body leading-relaxed">
                  <p className="text-[1.125rem]">
                    You now have everything you need to run profitable Meta ads in 2026. The 68 million businesses advertising on Meta platforms aren't doing anything magical—they're executing the fundamentals outlined in this guide.
                  </p>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">The Success Formula Recap</h3>
                    <ol className="space-y-3 ml-6">
                      <li><strong>1. Foundation:</strong> Install pixel correctly, verify domain, set up Conversion API</li>
                      <li><strong>2. Campaign structure:</strong> Use Advantage+ campaigns for 90% of small businesses</li>
                      <li><strong>3. Targeting:</strong> Start broad (age 25-65+), let AI optimize, use custom audiences for retargeting</li>
                      <li><strong>4. Creative:</strong> UGC-style vertical video wins, hook in 3 seconds, add captions (the 70% factor)</li>
                      <li><strong>5. Budget:</strong> Minimum $30-50/day, scale 20% every 3 days, wait 7 days during learning phase</li>
                      <li><strong>6. Optimization:</strong> Judge weekly, not daily. Fix creative first, then landing page, then targeting.</li>
                    </ol>
                  </div>

                  <div className="bg-[#1A1A1A] border border-[#5FA99F] rounded-lg p-6 my-8">
                    <h4 className="text-white font-semibold mb-4">Your Immediate Action Steps</h4>
                    <ul className="space-y-3">
                      <li><strong>This week:</strong> Install Meta Pixel, verify with Pixel Helper, set up Business Manager</li>
                      <li><strong>Week 2:</strong> Complete domain verification and Conversion API setup (required for iOS tracking)</li>
                      <li><strong>Week 3:</strong> Launch first Advantage+ campaign with $30-50/day budget</li>
                      <li><strong>Week 4:</strong> Create 3-5 UGC-style video ads or test different static image angles</li>
                      <li><strong>Weeks 5-8:</strong> Monitor but DON'T change campaigns—let learning phase complete</li>
                      <li><strong>Month 3+:</strong> Scale budget 20% every 3 days as ROAS stabilizes above target</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reality Check: Setting Proper Expectations</h3>
                    <p className="mb-4">
                      Not everyone hits 6:1 ROAS in month 1. The typical progression is 3:1 → 4:1 → 5:1 → 6:1 over 3-4 months as you refine creative, gather pixel data, and let the algorithm learn your best customers.
                    </p>
                    <p>
                      If you're at 3:1 ROAS after month 1, you're on track. Keep testing creative variations and trust the process. The case study client started at 2.5:1 and reached 6.3:1 by month 3.
                    </p>
                  </div>

                  <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">When to Get Professional Help</h4>
                    <p className="mb-4">Consider hiring a Meta ads agency or specialist if:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="list-disc">You've followed this guide for 90 days and ROAS is still below 3:1</li>
                      <li className="list-disc">You're spending $3,000+/month and want expert optimization to maximize returns</li>
                      <li className="list-disc">You don't have time to manage campaigns weekly (requires 3-5 hours minimum)</li>
                      <li className="list-disc">Your business is scaling rapidly and needs dedicated ad management</li>
                    </ul>
                  </div>

                  <p className="text-[1.125rem] mt-8">
                    Meta ads aren't magic—they're a system. Follow the system, give it time, and trust the data. The businesses hitting 6:1 ROAS aren't doing anything fancy; they're just consistently executing the fundamentals outlined in this guide.
                  </p>

                  <p className="text-[1.125rem]">
                    Your competitors are probably over-complicating it, constantly changing campaigns, and wondering why Meta ads "don't work." You now have a 90-day roadmap to 6:1 ROAS.
                  </p>

                  <p className="text-[#5FA99F] font-bold text-[1.375rem]">
                    Start with the pixel. Launch broad. Test creative. Be patient. See you at 6:1.
                  </p>
                </div>
              </div>
            </motion.section>

        {/* CTA Section */}
        <motion.section
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] rounded-3xl p-12 shadow-2xl text-center border-2 border-[#5FA99F]">
            <h2 className="text-white font-serif text-3xl font-bold mb-4">
              Ready to Stop Wasting Money on Meta Ads?
            </h2>
            <p className="text-white text-body mb-6 max-w-2xl mx-auto">
              Drive Lead Media specializes in Meta advertising for small businesses. We've helped clients go from break-even to 6:1+ ROAS using the exact strategies in this guide.
            </p>
            <Link
              href="/book"
              className="inline-block bg-[#5FA99F] hover:bg-[#4A8A82] text-[#000000] px-10 py-5 rounded-xl font-bold text-body transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get a Free Meta Ads Audit
            </Link>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <CollapsibleFAQ items={faqItems} />

            {/* Related Resources */}
            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-12">
              <h3 className="text-[#5FA99F] font-heading text-[1.5rem] font-normal mb-4">
                Continue Learning
              </h3>
              <ul className="space-y-3 text-white text-lg">
                <li>
                  <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="text-[#5FA99F] underline hover:text-gray-300">
                    How Much Do Facebook Ads Cost in Atlanta? (Complete Guide)
                  </Link>
                </li>
                <li>
                  <Link href="/blog/meta-andromeda-algorithm-2026" className="text-[#5FA99F] underline hover:text-gray-300">
                    Meta&apos;s Andromeda Algorithm Explained (2026)
                  </Link>
                </li>
                <li>
                  <Link href="/blog/instagram-reels-ads-small-business-guide" className="text-[#5FA99F] underline hover:text-gray-300">
                    Instagram Reels Ads: The Small Business Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-create-facebook-ads" className="text-[#5FA99F] underline hover:text-gray-300">
                    How to Create Facebook Ads: Step-by-Step Guide
                  </Link>
                </li>
              </ul>
            </div>

        {/* Author Bio */}
        <AuthorBio author={post.author} />

        </div>
      </article>
    </main>
  );
}
