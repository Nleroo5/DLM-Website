'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArticleSchema, BreadcrumbSchema, FAQSchema, HowToSchema } from '@/components/StructuredDataSchemas';
import { getPostBySlug } from '@/lib/blog-posts';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';

export default function HowToTellIfFacebookAdsWorkingPage() {
  const post = getPostBySlug('how-to-tell-if-facebook-ads-working');

  if (!post) {
    return <div>Post not found</div>;
  }

  const faqItems = [
    {
      question: "What is a good click-through rate (CTR) for Facebook ads?",
      answer: "A good CTR for Facebook ads typically ranges from 1-3%, though this varies by industry. Dental and medical practices should aim for 1-2%, restaurants and retail can achieve 2-4%, and professional services typically see 0.8-1.5%. CTR is calculated by dividing clicks by impressions and multiplying by 100."
    },
    {
      question: "How much should I expect to pay per lead on Facebook?",
      answer: "Cost per lead varies significantly by industry in the Atlanta market. Dental practices typically pay $30-$80 per lead, home services like plumbing or HVAC see $25-$60 per lead, restaurants average $5-$15 per lead for special offers, and professional services range from $40-$100 per lead. Your acceptable CPL depends on your profit margins and close rate."
    },
    {
      question: "What is ROAS and why does it matter?",
      answer: "ROAS (Return on Ad Spend) measures how much revenue you generate for every dollar spent on ads. It's calculated by dividing total revenue from ads by ad spend. A minimum viable ROAS is 2:1, good performance is 3:1 to 5:1, and excellent performance is 5:1 to 10:1. This is the ultimate profitability metric that shows if your advertising is a good investment."
    },
    {
      question: "How many impressions should my Facebook ads get?",
      answer: "For local businesses, aim for at least 1,000+ impressions per day. If you're getting under 500 impressions per day, it's a red flag that your ad isn't reaching enough people. Low impressions typically mean your targeting is too narrow or your budget is too small. However, impressions alone don't indicate success - they just show your ad is being seen."
    },
    {
      question: "Are my Facebook ads working if I have high clicks but no conversions?",
      answer: "High clicks with no conversions indicates your ad creative is compelling, but there's a problem with your landing page, offer, or conversion process. This means the clicks are working, but you need to improve what happens after people click. Focus on optimizing your website, strengthening your offer, or making it easier for people to contact you."
    },
    {
      question: "How long should I wait before judging if my Facebook ads are working?",
      answer: "Wait at least 7-14 days before making initial assessments for lead generation campaigns. Meta's algorithm needs time to optimize and find your best audience. Give it 30 days for stable performance data, and 60 days for accurate long-term results before making major strategy changes. The first 48 hours are always exploratory."
    },
    {
      question: "What's the difference between link clicks and all clicks in Facebook Ads Manager?",
      answer: "Link clicks count only people who clicked through to your website - this is the metric that matters for conversions. All clicks includes reactions, shares, comments, page likes, and profile views. For measuring ad performance and cost per lead, focus exclusively on link clicks as they represent genuine interest in your offer."
    },
    {
      question: "Should I track conversions with Facebook Pixel or Google Analytics?",
      answer: "Use both for the most accurate picture. Facebook Pixel is essential for Meta to optimize your campaigns for conversions and build retargeting audiences. Google Analytics provides independent verification and cross-platform tracking. Install Meta Pixel first for campaign optimization, then add GA4 for comprehensive attribution analysis."
    },
    {
      question: "What's the fastest way to lower my cost per lead on Facebook ads?",
      answer: "Focus on three high-impact levers: 1) Narrow your targeting to highly qualified audiences instead of targeting everyone, 2) Test 3-5 different ad creatives to identify winners, 3) Optimize your landing page to convert more visitors. Most cost reductions come from better audience targeting - a Buckhead dental practice targeting everyone in Atlanta will pay 3x more per lead than targeting homeowners 35-65 within 10 miles."
    },
    {
      question: "How do I know if my Facebook ad budget is too small?",
      answer: "If you're spending under $20/day or getting fewer than 50 conversions per month, Meta's algorithm doesn't have enough data to optimize effectively. Minimum recommended budget: $30-50/day for local businesses, with $20/day being the absolute minimum. Smaller budgets take months to exit the learning phase, while $50/day campaigns optimize within 2 weeks."
    }
  ];

  // FAQ Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const howToSteps = [
    {
      name: "Check Your Impressions",
      text: "Log into Facebook Ads Manager and view how many times your ad appeared. Aim for at least 1,000+ impressions per day for local businesses. Low impressions mean your targeting is too narrow or budget too small."
    },
    {
      name: "Review Your Click-Through Rate",
      text: "Calculate CTR by dividing clicks by impressions and multiplying by 100. Compare your CTR to industry benchmarks: 1-3% is generally good, with variations by industry. Low CTR means your ad creative needs improvement."
    },
    {
      name: "Calculate Your Cost Per Click",
      text: "Divide your total ad spend by number of clicks to get CPC. For Atlanta businesses, $0.50-$2.50 is typical, with competitive industries paying $1.50-$3.00. High CPC indicates targeting issues or low ad relevance."
    },
    {
      name: "Track Your Cost Per Lead",
      text: "Divide total ad spend by number of leads (calls, forms, messages). This is the most important metric. Compare your CPL to industry benchmarks and calculate your acceptable CPL based on profit margins and close rates."
    },
    {
      name: "Measure Your Return on Ad Spend",
      text: "Track revenue from Facebook ads and divide by ad spend to calculate ROAS. Aim for at least 2:1 minimum, with 3:1 to 5:1 being good performance. This shows if your ads are actually profitable."
    }
  ];

  return (
    <main className="min-h-screen bg-[#000000]">
      {/* Structured Data */}
      <ArticleSchema
        headline="How to Tell If Your Facebook Ads Are Working (5 Simple Metrics)"
        description="Learn the 5 simple Facebook ad metrics that tell you if your ads are working. No jargon - just clear benchmarks for impressions, clicks, CPC, CPL, and ROAS with actionable advice."
        author="Nicolas Leroo"
        datePublished="2024-12-12"
        dateModified="2024-12-12"
        image="https://driveleadmedia.com/images/facebook-ads-lead-demographics-hero.webp"
        url="https://driveleadmedia.com/blog/how-to-tell-if-facebook-ads-working"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://driveleadmedia.com' },
          { name: 'Blog', url: 'https://driveleadmedia.com/blog' },
          { name: 'How to Tell If Your Facebook Ads Are Working', url: 'https://driveleadmedia.com/blog/how-to-tell-if-facebook-ads-working' }
        ]}
      />

      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HowToSchema
        name="How to Tell If Your Facebook Ads Are Working"
        description="A step-by-step guide to measuring Facebook ad performance using 5 simple metrics"
        steps={howToSteps}
      />

      {/* Hero Section */}
      <section className="pt-[140px] pb-[60px] px-6 bg-gradient-to-br from-[#0A0A0A] to-[#000000] relative">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#5FA99F] opacity-10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto">
          <div className="mb-6">
            <Link href="/blog" className="text-[#5FA99F] hover:text-[#85C7B3] font-body text-body-sm transition-colors">
              ← Back to Blog
            </Link>
          </div>

          <h1 className="font-heading text-h1 font-bold text-white mb-6 leading-[1.1]">
            How to Tell If Your Facebook Ads Are Working (5 Simple Metrics)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-body-sm mb-8">
            <span>By Nicolas Leroo</span>
            <span>•</span>
            <span>December 12, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/blog/category/meta-ads-strategy" className="px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-body-sm hover:bg-[#5FA99F]/30 transition-colors">
              Meta Ads Strategy
            </Link>
            <Link href="/blog/category/conversion-optimization" className="px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-body-sm hover:bg-[#5FA99F]/30 transition-colors">
              Conversion Optimization
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-8">
            <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
              <Image
                src="/images/facebook-ads-lead-demographics-hero.webp"
                alt="Facebook Ads performance metrics showing 67 leads at $3.73 cost per lead with detailed age and gender demographics breakdown"
                width={2446}
                height={1888}
                className="w-full h-auto"
                quality={90}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 900px, 900px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-[80px] px-6">
        <div className="max-w-[900px] mx-auto">

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You're spending money on Facebook ads, but are they actually working?
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              If you've ever wondered "are my Facebook ads working?", you're not alone. It's one of the most common questions we hear from business owners. You open up Ads Manager, see a wall of numbers and charts, and feel completely overwhelmed. Which metrics actually matter? What numbers are good? How do you know if you're wasting money or making smart investments?
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The good news? Understanding Facebook ad metrics doesn't require a marketing degree. You only need to watch 5 simple metrics to know exactly whether your ads are working or wasting money.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              In this article, I'll break down each metric in plain English, give you real benchmarks from Atlanta businesses, and tell you exactly what to do if your numbers aren't where they should be. By the end, you'll be able to look at your Ads Manager dashboard and instantly know if your advertising is on track.
            </p>
          </div>

          {/* Metric 1: Impressions */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              1. Impressions - Are People Seeing Your Ad?
            </h2>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What It Is
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Impressions are simply how many times your ad appeared on someone's screen. Think of it like a billboard on the highway - impressions are how many cars drove past and had the opportunity to see it.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Why It Matters
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Impressions are your first checkpoint. If your impressions are low, nobody's seeing your message - which means nothing else matters. Low impressions help you diagnose if your targeting is too narrow or your budget too small to reach enough people.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Numbers Are Good
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              The right number of impressions depends on your budget and audience size, but here are general benchmarks:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>At least 1,000+ impressions per day for local businesses</li>
              <li>Red flag: Under 500 impressions per day means your ad isn't reaching enough people</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What to Do
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              If you're getting low impressions, you have two options:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Widen your targeting to reach more people (learn how in our <Link href="/resources/meta-targeting-guide" className="text-[#5FA99F] hover:text-[#85C7B3] underline">Meta targeting guide</Link>)</li>
              <li>Increase your daily budget to get more reach</li>
            </ul>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              On the flip side, if you have high impressions but no results? Your ad creative or offer needs work. People are seeing it, but they're not interested enough to take action.
            </p>
          </div>

          {/* Metric 2: Clicks */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              2. Clicks (Link Clicks) - Are People Interested?
            </h2>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What It Is
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Clicks measure how many people clicked on your ad to learn more. This is different from people just scrolling past - these are people who saw your ad and thought "I want to know more about this." Clicks show genuine interest, not just passive exposure.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Why It Matters
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Clicks separate the curious from the scrollers. They indicate your ad creative is compelling enough to make someone take action. More importantly, clicks directly affect your cost per lead - the more clicks you get at a reasonable cost, the more opportunities you have to convert leads.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Numbers Are Good
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              Aim for 50-100+ clicks per week minimum for local campaigns. But here's the thing: quality matters more than quantity. 20 highly targeted clicks from people in your exact service area are better than 200 random clicks from people who will never buy.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Understanding Click-Through Rate (CTR)
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              CTR shows what percentage of people who saw your ad actually clicked on it. The formula is simple:
            </p>
            <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 mb-6">
              <p className="text-white font-body text-body font-semibold">
                CTR = (Clicks ÷ Impressions) × 100
              </p>
            </div>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              Here's a simple example: If you get 100 clicks from 10,000 impressions, your CTR is 1%. That means 1% of people who saw your ad clicked on it.
            </p>
            <div className="bg-[#1A1A1A] border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-semibold mb-2">📊 INDUSTRY BENCHMARK DATA</p>
              <p className="text-gray-300 font-body text-body leading-relaxed mb-2">
                The <strong className="text-white">average CTR for Facebook ads across all industries is 0.90%</strong> in 2025. If your CTR is above 1.49%, you're outperforming most competitors. A CTR below 0.72% indicates your audience isn't connecting with your ads.
              </p>
              <p className="text-gray-400 font-body text-body-sm mb-0">
                Source: <a href="https://www.wordstream.com/blog/facebook-ads-benchmarks-2025" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:text-[#85C7B3] underline">WordStream Facebook Ads Benchmarks 2025</a>
              </p>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              Good CTR benchmarks for Facebook ads:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-8 space-y-2">
              <li>Dental/Medical: 1-2% is solid performance</li>
              <li>Restaurants/Retail: 2-4% is achievable</li>
              <li>Professional Services: 0.8-1.5% is typical</li>
            </ul>

            {/* CTR & CPC Performance Image */}
            <div className="my-16">
              <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/facebook-ads-ctr-cpc-metrics-performance-data.webp"
                  alt="Facebook Ads Manager showing CTR and CPC performance data across multiple campaigns"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 1400px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-8 text-center italic max-w-[1000px] mx-auto px-4">
                Real campaign data showing CTR ranging from 1.12% to 3.24% and CPC from $0.24 to $0.61
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What to Do
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Low CTR means your ad isn't compelling enough. Test different images, headlines, or offers. Sometimes changing just the image can double your CTR. High CTR but no conversions? Your landing page needs improvement - the ad is doing its job, but something's broken after the click.
            </p>

            <div className="bg-[#1A1A1A] rounded-lg p-6 mb-6">
              <h4 className="font-heading text-[1.125rem] font-semibold text-white mb-3">Real Example</h4>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                Sarah runs a dental practice in Atlanta. Her ad got 15,000 impressions and 300 clicks last week. That's a 2% CTR - solid for healthcare. But she's only getting 3 phone calls from those 300 clicks. The clicks are working great; her next step is improving her website or strengthening her offer to convert more of those visitors.
              </p>
            </div>
          </div>

          {/* Metric 3: Cost Per Click */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              3. Cost Per Click (CPC) - What Are You Paying?
            </h2>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What It Is
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Cost per click is exactly what it sounds like - how much you pay each time someone clicks your ad. The math is simple: divide your total ad spend by the number of clicks you received.
            </p>
            <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 mb-6">
              <p className="text-white font-body text-body font-semibold">
                CPC = Total Ad Spend ÷ Number of Clicks
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Why It Matters
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              CPC directly impacts your budget efficiency. If you're overpaying for clicks, you'll burn through your budget without getting enough traffic to generate leads. It also helps you calculate realistic budgets - if you know your average CPC and how many clicks you need, you can plan accordingly.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Numbers Are Good
            </h3>

            <div className="bg-[#1A1A1A] border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-semibold mb-2">💰 2025 CPC BENCHMARK</p>
              <p className="text-gray-300 font-body text-body leading-relaxed mb-2">
                The <strong className="text-white">average cost per click for Facebook traffic campaigns is $0.70</strong> across all industries in 2025, down from $0.77 in 2024. However, CPC varies significantly by industry—legal services average $1.09 while travel averages just $0.42.
              </p>
              <p className="text-gray-400 font-body text-body-sm mb-0">
                Source: <a href="https://www.wordstream.com/blog/facebook-ads-benchmarks-2025" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:text-[#85C7B3] underline">WordStream Facebook Ads Benchmarks 2025</a>
              </p>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              Atlanta market averages (these vary by industry):
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Typical range: $0.50 - $2.50 per click</li>
              <li>Competitive industries (law, dental): $1.50 - $3.00</li>
              <li>Less competitive (retail, restaurants): $0.40 - $1.50</li>
              <li>Service businesses: $0.80 - $2.00</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What to Do
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              High CPC usually means one of two things: your targeting is too competitive (you're bidding against too many other advertisers) or your ad relevance is low (Facebook thinks your ad isn't a good match for your audience). Improve your ad quality score by creating better, more targeted creative and refining your audience selection.
            </p>

            <div className="bg-[#1A1A1A] rounded-lg p-6 mb-6">
              <h4 className="font-heading text-[1.125rem] font-semibold text-white mb-3">Real Example</h4>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                John spent $300 on ads last week and got 200 clicks. His CPC is $1.50. For his industry (home services), that's reasonable. If he was paying $4+ per click, something would be seriously wrong with his targeting or ad quality. He can use our <Link href="/resources/meta-ads-calculator" className="text-[#5FA99F] hover:text-[#85C7B3] underline">Meta ads calculator</Link> to project what different CPCs mean for his budget.
              </p>
            </div>
          </div>

          {/* Metric 4: Cost Per Lead - MOST IMPORTANT */}
          <div className="mb-16 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-8 border-2 border-[#5FA99F]/30">
            <h2 className="font-heading text-h2 font-bold text-white mb-4">
              4. Cost Per Lead (CPL) - Are You Getting Customers?
            </h2>
            <p className="text-[#5FA99F] font-body text-body font-semibold mb-6">
              ⭐ This is THE most important metric for most businesses
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What It Is
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Cost per lead measures how much you pay for each potential customer contact. This could be a phone call, contact form submission, Facebook message, appointment booking, or email signup - whatever counts as a "lead" for your business.
            </p>
            <div className="bg-[#0A0A0A] border-l-4 border-[#5FA99F] p-6 mb-6">
              <p className="text-white font-body text-body font-semibold">
                CPL = Total Ad Spend ÷ Number of Leads
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Why It Matters
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              This is where the rubber meets the road. You can have amazing impressions, great clicks, and a low CPC - but if people aren't contacting you, none of it matters. CPL determines if your ads are actually profitable and sustainable for your business.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Is a Lead?
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              A lead is any action where a potential customer gives you their contact information or reaches out to you:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Phone call to your business</li>
              <li>Contact form submission on your website</li>
              <li>Facebook or Instagram message request</li>
              <li>Appointment booking</li>
              <li>Email signup (for some businesses)</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Numbers Are Good (Atlanta Market)
            </h3>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Dental practices: $30 - $80 per lead</li>
              <li>Home services (plumbing, HVAC): $25 - $60 per lead</li>
              <li>Restaurants: $5 - $15 per lead (for special offers/events)</li>
              <li>Professional services: $40 - $100 per lead</li>
              <li>Retail/e-commerce: Varies widely, typically $10 - $50</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Important Context
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Your acceptable CPL depends entirely on your profit margins. Here's what I mean:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>If you make $1,000 profit per customer, paying $50 per lead is fantastic</li>
              <li>If you only make $100 profit per sale, paying $50 per lead probably won't work</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              How to Calculate YOUR Acceptable CPL
            </h3>
            <div className="bg-[#0A0A0A] rounded-lg p-6 mb-6">
              <ol className="list-decimal list-inside text-gray-300 font-body text-base leading-relaxed space-y-3">
                <li>Average customer value: $______</li>
                <li>Typical close rate: _____% (what percentage of leads become customers)</li>
                <li>Profit margin: _____%</li>
                <li>Your maximum CPL = (Customer Value × Close Rate × Profit Margin) ÷ 3</li>
              </ol>
            </div>

            <div className="bg-[#0A0A0A] rounded-lg p-6 mb-6">
              <h4 className="font-heading text-[1.125rem] font-semibold text-white mb-3">Real Example</h4>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-4">
                Maria owns a salon. Her average customer spends $200. She typically closes 30% of her leads (converts them to paying customers). Based on this:
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-4">
                $200 × 0.30 = $60 revenue per lead
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-4">
                $60 ÷ 3 = $20 maximum CPL
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                Her current ads are getting leads at $15 each. They're working! She should consider scaling up her budget to get more leads at this profitable rate.
              </p>
            </div>

            {/* Campaign Dashboard Overview Image */}
            <div className="my-16">
              <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/facebook-ads-metrics-dashboard-performance-analysis.webp"
                  alt="Facebook Ads Manager dashboard showing campaign performance metrics including impressions, reach, CPM, and spend"
                  width={2048}
                  height={415}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 1400px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-8 text-center italic max-w-[1000px] mx-auto px-4">
                Real Facebook Ads Manager dashboard - track your overall campaign metrics like this
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What to Do
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              First, track your leads religiously. Use call tracking, monitor form submissions, count Facebook messages. You can't improve what you don't measure.
            </p>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              If your CPL is too high:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Improve your targeting (check out our <Link href="/resources/meta-targeting-guide" className="text-[#5FA99F] hover:text-[#85C7B3] underline">targeting guide</Link>)</li>
              <li>Test a stronger offer</li>
              <li>Optimize your landing page to convert more visitors</li>
            </ul>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              If your CPL is good and you're profitable: Scale up! Increase your budget to get more leads at this winning cost.
            </p>
          </div>

          {/* Metric 5: ROAS */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              5. Return on Ad Spend (ROAS) - Are You Making Money?
            </h2>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What It Is
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              ROAS measures how much revenue you generate for every dollar you spend on ads. It's expressed as a ratio (like 3:1) or a multiple (like 3x). This is the ultimate profitability metric.
            </p>
            <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] p-6 mb-6">
              <p className="text-white font-body text-body font-semibold">
                ROAS = Total Revenue from Ads ÷ Ad Spend
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Why It Matters
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              ROAS shows if your advertising is actually a good investment. You could be getting tons of leads at a great cost per lead - but if those leads aren't converting to revenue, you're still losing money. ROAS tells the complete story of profitability.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What Numbers Are Good
            </h3>

            <div className="bg-[#1A1A1A] border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-semibold mb-2">📈 ROAS PERFORMANCE BENCHMARKS</p>
              <p className="text-gray-300 font-body text-body leading-relaxed mb-2">
                The <strong className="text-white">average ROAS for Facebook ads is 2.79:1 across all industries</strong>, meaning businesses make $2.79 for every dollar spent. A ROAS of 4.0 or higher is considered healthy for most brands, while top performers achieve 5-10x returns.
              </p>
              <p className="text-gray-400 font-body text-body-sm mb-0">
                Source: <a href="https://www.webfx.com/blog/social-media/meta-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#5FA99F] hover:text-[#85C7B3] underline">WebFX Meta Marketing Benchmarks 2026</a>
              </p>
            </div>

            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>Minimum viable: 2:1 (you make $2 for every $1 spent)</li>
              <li>Good performance: 3:1 to 5:1</li>
              <li>Excellent performance: 5:1 to 10:1</li>
              <li>Exceptional: 10:1 or higher</li>
            </ul>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Reality Check
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Different industries have different ROAS benchmarks. E-commerce businesses often need 3-4:1 minimum to be profitable after accounting for product costs, shipping, and overhead. Service businesses with high profit margins can be profitable at 2:1. Don't compare your restaurant's ROAS to someone's software company - context matters.
            </p>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              How to Calculate YOUR ROAS
            </h3>
            <div className="bg-[#1A1A1A] rounded-lg p-6 mb-6">
              <ol className="list-decimal list-inside text-gray-300 font-body text-base leading-relaxed space-y-3">
                <li>Track revenue specifically from Facebook ads (use tracking pixels, UTM parameters, or ask every customer "how did you hear about us?")</li>
                <li>Add up your monthly revenue from ad-generated leads: $______</li>
                <li>Divide by your monthly ad spend: $______</li>
                <li>That number is your ROAS</li>
              </ol>
            </div>

            <div className="bg-[#1A1A1A] rounded-lg p-6 mb-6">
              <h4 className="font-heading text-[1.125rem] font-semibold text-white mb-3">Real Example</h4>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-4">
                Tom runs a landscaping business. He spent $1,000 on Facebook ads last month. Those ads generated 15 customers who paid a total of $4,500 for his services.
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-4">
                $4,500 ÷ $1,000 = 4.5:1 ROAS
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                For every dollar Tom spends on ads, he makes $4.50 back. That's working. He should keep running these ads and potentially increase his budget.
              </p>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              What to Do
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              ROAS below 2:1? You need to fix something - either your targeting, your offer, your pricing, or your sales process. The ads might be generating leads, but those leads aren't converting profitably.
            </p>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              ROAS above 3:1? You've found a winner. Consider increasing your budget to scale what's working.
            </p>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Most importantly: Track properly. Set up Meta Pixel on your website, use UTM parameters on your ad links, or simply ask every lead "How did you find us?" Without proper tracking, you're flying blind.
            </p>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Want to project what your ROAS could be? Try our <Link href="/resources/meta-ads-calculator" className="text-[#5FA99F] hover:text-[#85C7B3] underline">free Meta ads calculator</Link> to see realistic numbers for your industry and budget.
            </p>
          </div>

          {/* Putting It All Together */}
          <div className="mb-16 bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-2xl p-8">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Putting It All Together
            </h2>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Your Weekly Dashboard
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Create a simple spreadsheet or note where you track all 5 metrics side by side each week. This lets you spot trends and problems quickly. Here's what a healthy campaign looks like:
            </p>

            <div className="bg-[#0A0A0A] rounded-lg p-6 mb-6 font-mono text-body-sm">
              <div className="text-gray-300 space-y-2">
                <p><span className="text-[#5FA99F]">Impressions:</span> 25,000</p>
                <p><span className="text-[#5FA99F]">Clicks:</span> 500 (2% CTR)</p>
                <p><span className="text-[#5FA99F]">CPC:</span> $1.50</p>
                <p><span className="text-[#5FA99F]">Total Spend:</span> $750</p>
                <p><span className="text-[#5FA99F]">Leads:</span> 15 (CPL: $50)</p>
                <p><span className="text-[#5FA99F]">Revenue:</span> $3,000 (ROAS: 4:1)</p>
              </div>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              Red Flags to Watch For
            </h3>
            <div className="space-y-4 mb-6">
              <div className="bg-[#0A0A0A] rounded-lg p-4">
                <p className="text-white font-body font-semibold mb-2">High impressions, low clicks</p>
                <p className="text-gray-300 font-body text-base">Problem: Bad creative or wrong targeting. People see it but aren't interested.</p>
              </div>
              <div className="bg-[#0A0A0A] rounded-lg p-4">
                <p className="text-white font-body font-semibold mb-2">High clicks, low leads</p>
                <p className="text-gray-300 font-body text-base">Problem: Weak landing page or unclear offer. Your ad works but the follow-through doesn't.</p>
              </div>
              <div className="bg-[#0A0A0A] rounded-lg p-4">
                <p className="text-white font-body font-semibold mb-2">Good leads, bad ROAS</p>
                <p className="text-gray-300 font-body text-base">Problem: Sales process or pricing. You're getting interested people, but something's preventing conversions.</p>
              </div>
            </div>

            <h3 className="font-heading text-body-lg font-semibold text-[#5FA99F] mb-4">
              The One Metric You Can't Ignore
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              If you only track one thing, make it Cost Per Lead. This is your North Star. If your CPL is good for your business model and profit margins, keep running the ads. If CPL is too high, use the other 4 metrics to diagnose where things are breaking down.
            </p>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              You're Ready to Evaluate Your Ads
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You now know the 5 metrics that actually matter: Impressions, Clicks, CPC, CPL, and ROAS. You don't need to be a marketing expert or understand every number in Ads Manager. Focus on these five, and you'll know exactly whether your ads are working or wasting money.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Here's what to do right now:
            </p>
            <ol className="list-decimal list-inside text-gray-300 font-body text-body leading-relaxed mb-8 space-y-3">
              <li>Log into your Facebook Ads Manager today</li>
              <li>Check these 5 numbers for your current campaign</li>
              <li>Compare them to the benchmarks in this article</li>
              <li>Make one improvement this week based on what you learned</li>
            </ol>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#5FA99F]/10 to-[#85C7B3]/10 rounded-2xl p-8 border-2 border-[#5FA99F]/30 text-center">
            <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] font-bold text-white mb-4">
              Still Not Sure If Your Ads Are Set Up Correctly?
            </h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6 max-w-[700px] mx-auto">
              We offer free ad account audits for Atlanta businesses. We'll review your metrics, identify problems, and show you exactly how to improve. No obligation, just honest feedback from Meta advertising experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-block font-heading text-base px-8 py-4 bg-[#5FA99F] text-white font-semibold rounded-lg hover:bg-[#85C7B3] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Your Free Ad Account Audit
              </Link>
              <Link
                href="/resources/meta-ads-calculator"
                className="inline-block font-heading text-base px-8 py-4 bg-transparent text-[#5FA99F] font-semibold rounded-lg border-2 border-[#5FA99F] hover:bg-[#5FA99F]/10 transition-all duration-300"
              >
                Try Our Free ROI Calculator
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <CollapsibleFAQ items={faqItems} />

          {/* Author Bio */}
          <AuthorBio author={post.author} />

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="font-heading text-[1.5rem] font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="bg-[#1A1A1A] rounded-lg p-6 hover:bg-[#222222] transition-colors border border-[#5FA99F]/20 hover:border-[#5FA99F]/40">
                <h4 className="font-heading text-body font-semibold text-white mb-2">How Much Do Facebook Ads Cost in Atlanta?</h4>
                <p className="text-gray-400 font-body text-body-sm">Real pricing data for Atlanta businesses across different industries</p>
              </Link>
              <Link href="/resources/meta-targeting-guide" className="bg-[#1A1A1A] rounded-lg p-6 hover:bg-[#222222] transition-colors border border-[#5FA99F]/20 hover:border-[#5FA99F]/40">
                <h4 className="font-heading text-body font-semibold text-white mb-2">Meta Ad Targeting Guide</h4>
                <p className="text-gray-400 font-body text-body-sm">Learn how to target the right audience for your business</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
