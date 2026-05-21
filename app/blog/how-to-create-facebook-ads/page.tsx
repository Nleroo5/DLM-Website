
import Image from 'next/image';
import Link from 'next/link';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredDataSchemas';
import { getPostBySlug } from '@/lib/blog-posts';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';

export default function HowToCreateFacebookAdsPage() {
  const post = getPostBySlug('how-to-create-facebook-ads');

  if (!post) {
    return <div>Post not found</div>;
  }

  const faqItems = [
    {
      question: "How much does it cost to run Facebook ads?",
      answer: "The platform minimum is $1/day, but you need at least $5/day for meaningful results. For Atlanta businesses, I recommend starting with $30-50/day to give Facebook's algorithm enough data to optimize. This works out to $900-1,500/month for testing."
    },
    {
      question: "Can I create Facebook ads from my phone?",
      answer: "Yes, using the Facebook Ads Manager mobile app. But for your first campaign, use a desktop computer. The full interface makes it easier to see all your options, upload creative, and review settings before you launch."
    },
    {
      question: "How long does it take for Facebook ads to work?",
      answer: "You'll see initial data in 24-48 hours, but Facebook needs 7-14 days to fully optimize your campaign. The learning phase requires about 50 conversions, which takes time with smaller budgets. Don't judge performance before day 7."
    },
    {
      question: "Do I need a business page or can I use my personal profile?",
      answer: "You must have a Facebook Business Page. You cannot run ads from personal profiles. Creating a page takes 5 minutes and is free. Do this before starting the tutorial."
    },
    {
      question: "What's a good click-through rate (CTR) for Facebook ads?",
      answer: "1-2% is good, 3% or higher is excellent, and under 0.5% means your creative or targeting needs work. Atlanta service businesses typically see 1.5-2.5% CTR on well-optimized campaigns."
    },
    {
      question: "Should I advertise on Facebook or Instagram?",
      answer: "Use Automatic Placements and let Facebook show your ads on both platforms. Instagram is part of Meta's ad system, so you're targeting the same people across Facebook and Instagram feeds, Stories, and Reels."
    },
    {
      question: "How do I know if someone bought from my Facebook ad?",
      answer: "Install Facebook Pixel with purchase event tracking before you launch ads. It reports conversions directly in Ads Manager so you can see which ads are driving sales. Check our complete Pixel setup guide for step-by-step instructions."
    },
    {
      question: "Why was my Facebook ad rejected?",
      answer: "Common reasons include prohibited content (alcohol without authorization, health claims, political ads), misleading claims, or poor landing page experience. Check your email for the specific reason. Most rejections can be fixed by adjusting your copy or creative."
    },
    {
      question: "Should I run ads all the time or turn them on and off?",
      answer: "Continuous campaigns perform better because Facebook's algorithm improves over time. If budget is tight, run Monday-Friday during business hours rather than turning campaigns on and off sporadically."
    },
    {
      question: "How many ads should I create at once?",
      answer: "Start with 1-2 ad variations for your first campaign. Test more once you understand what works. Creating 10 ads at once splits your budget too thin and you won't get meaningful data on any of them."
    },
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

  return (
    <main className="min-h-screen bg-[#000000]">
      {/* Structured Data */}
      <ArticleSchema
        headline="How to Create Facebook Ads: Complete Step-by-Step Guide (2025)"
        description="Learn how to create Facebook ads in 2025 with our complete step-by-step guide. Screenshots, targeting strategies, and campaign setup from Atlanta's Meta advertising experts."
        author="Nicolas Leroo"
        datePublished="2025-12-14"
        dateModified="2025-12-14"
        image="https://driveleadmedia.com/images/how-to-create-facebook-ads-tutorial-guide.webp"
        url="https://driveleadmedia.com/blog/how-to-create-facebook-ads"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://driveleadmedia.com' },
          { name: 'Blog', url: 'https://driveleadmedia.com/blog' },
          { name: 'How to Create Facebook Ads', url: 'https://driveleadmedia.com/blog/how-to-create-facebook-ads' }
        ]}
      />

      {/* FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-[120px] pb-[80px] px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5FA99F] opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#85C7B3] opacity-10 rounded-full filter blur-3xl"></div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <h1 className="font-heading text-h1 font-bold text-white leading-[1.1] mb-6">
            How to Create Facebook Ads: Complete Step-by-Step Guide (2025)
          </h1>

          <p className="text-body-lg text-gray-300 font-body mb-8 leading-relaxed">
            Learn exactly how to set up, launch, and optimize Facebook ad campaigns from scratch. Complete tutorial with screenshots, targeting strategies, and expert tips.
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-body-sm mb-8">
            <span>By {post?.author.name}</span>
            <span>•</span>
            <span>{post?.date}</span>
            <span>•</span>
            <span>{post?.readTime}</span>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/blog/category/meta-ads-strategy" className="px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-body-sm hover:bg-[#5FA99F]/30 transition-colors">
              Meta Ads Strategy
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-8">
            <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
              <Image
                src="/images/how-to-create-facebook-ads-tutorial-guide.webp"
                alt="How to create Facebook ads step-by-step tutorial showing Ads Manager interface"
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-[80px] px-6">
        <div className="max-w-[900px] mx-auto">

          {/* What You'll Learn */}
          <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-12">
            <h2 className="font-heading text-xl font-bold text-white mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-gray-300 font-body">
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>How to set up Facebook Business Manager and Ads Manager</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Choosing the right campaign objective for your business goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Creating high-converting audiences with proven targeting strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Setting budgets that maximize ROI without overspending</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Installing Facebook Pixel for conversion tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Launching your first campaign with confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-2">✓</span>
                <span>Measuring and optimizing performance from day one</span>
              </li>
            </ul>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You've decided to advertise on Facebook. Great choice. Meta's advertising platform reaches 3.07 billion people and delivers an average return of $5.30 for every dollar spent.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              But when you log into Facebook Ads Manager for the first time, you're hit with campaign objectives, audience targeting options, placement settings, bidding strategies, and a dozen other decisions you don't understand yet.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Most Atlanta business owners I talk to have tried the blue "Boost Post" button and gotten mediocre results. They know there's a better way (targeted ads through Ads Manager) but the platform looks intimidating.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              This guide walks you through creating your first Facebook ad campaign step-by-step, exactly the way we set up campaigns for our Atlanta clients. By the end, you'll understand how to create ads that actually generate leads, sales, and ROI.
            </p>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <h3 className="font-heading text-body font-bold text-white mb-3">What Makes This Guide Different</h3>
              <ul className="space-y-2 text-gray-300 font-body text-base">
                <li>• Real screenshots from the 2025 Ads Manager interface</li>
                <li>• Atlanta business examples (dental, real estate, restaurants)</li>
                <li>• Decision-making frameworks for objectives and budgets</li>
                <li>• Links to advanced guides for each topic</li>
                <li>• Troubleshooting common setup mistakes</li>
              </ul>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Before You Start</h3>
            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              Make sure you have:
            </p>
            <ul className="list-disc list-inside text-gray-300 font-body text-body leading-relaxed mb-6 space-y-2">
              <li>A Facebook Business Page (not your personal profile)</li>
              <li>A product, service, or offer to promote</li>
              <li>A budget ($5/day minimum, $30+/day recommended)</li>
              <li>A landing page or website (<Link href="/blog/why-meta-ads-need-landing-pages" className="text-[#5FA99F] hover:text-[#85C7B3] underline">learn why you need a dedicated landing page</Link>)</li>
            </ul>
          </div>

          {/* Section 1: Ads Manager vs Boosted Posts */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Facebook Ads Manager vs Boosted Posts: Why This Matters
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You've probably seen the blue "Boost Post" button on your Facebook Business Page. It's tempting. One click, enter your credit card, and your post starts reaching more people.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              But boosting delivers worse results than creating proper targeted ads through Ads Manager. I've seen it dozens of times with Atlanta clients who spent thousands on boosted posts before switching to our approach.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-[#1A1A1A]/60 backdrop-blur-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#5FA99F]/20">
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Feature</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Boosted Posts</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Ads Manager</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5FA99F]/20">
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Campaign Objectives</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">3 options</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">6 options</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Targeting Control</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Basic</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Advanced</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Conversion Tracking</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Limited</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Full Pixel tracking</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Placement Options</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Automatic only</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Manual control</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Cost</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">2-3x higher CPL</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Optimized costs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Read our <Link href="/blog/boosted-posts-vs-targeted-ads" className="text-[#5FA99F] hover:text-[#85C7B3] underline">full comparison of boosted posts vs targeted ads</Link> to see why Ads Manager gives you better results.
            </p>

            {/* Ads Manager Image */}
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
                <Image
                  src="/images/facebook-ads-manager-campaign-setup-tutorial.webp"
                  alt="Facebook Ads Manager campaign setup interface showing professional workspace"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Setting Up Business Manager */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              One-Time Setup: Facebook Business Manager & Ads Account
            </h2>

            <h3 className="font-heading text-xl font-bold text-white mb-4">What is Facebook Business Manager?</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Business Manager is Meta's central hub for managing your pages, ad accounts, and pixels. Even if you're a solo business owner running a dental practice in Buckhead, you need this setup.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Think of it like this: Business Manager is the building. Ads Manager is the specific office inside where you create and manage campaigns.
            </p>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Step-by-Step Business Manager Setup</h3>

            <div className="space-y-6 mb-6">
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">1</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Go to business.facebook.com</h4>
                    <p className="text-gray-300 font-body">Open a new browser tab and navigate to the Business Manager homepage.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">2</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Click "Create Account"</h4>
                    <p className="text-gray-300 font-body">You'll see a blue button in the top right. Click it to start the setup process.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">3</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Enter your business details</h4>
                    <p className="text-gray-300 font-body">Business name, your name, and business email address. Use your actual business name, not "My Business" or "Test Account."</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">4</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Add your Facebook Business Page</h4>
                    <p className="text-gray-300 font-body">Search for your existing page or create one if you haven't already. You can't run ads without a page.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">5</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Create your Ad Account</h4>
                    <p className="text-gray-300 font-body">Choose your currency (USD for Atlanta businesses) and time zone (EST/EDT). These can't be changed later, so get them right now.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-[#5FA99F] text-black font-bold rounded-full flex items-center justify-center">6</span>
                  <div>
                    <h4 className="font-heading text-body font-semibold text-white mb-2">Add payment method</h4>
                    <p className="text-gray-300 font-body">Enter your business credit card or debit card. Facebook charges automatically after you spend, usually weekly or when you hit certain thresholds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-body text-base leading-relaxed">
                <strong className="font-semibold">Pro tip:</strong> Use your business credit card for ad spending to separate personal and business expenses. You'll thank yourself at tax time.
              </p>
            </div>
          </div>

          {/* Section 3: Install Facebook Pixel */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Install Facebook Pixel BEFORE Creating Ads (Critical Step)
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Skip this step and you'll regret it. I'm serious.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The Facebook Pixel is a small piece of code that tracks what people do on your website after they click your ad. Without it, you're flying blind. You won't know if your ads are generating sales, leads, or just wasting money.
            </p>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Why You Can't Skip This</h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg">Tracks conversions from day one (every lead, sale, signup)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg">Builds audience data for retargeting (people who visited but didn't buy)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg">Enables performance measurement (which ads work, which don't)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg">Required for campaign optimization (Facebook needs data to improve)</span>
              </li>
            </ul>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Installing the Pixel takes 15-30 minutes depending on your platform. We have a complete guide with screenshots for WordPress, Shopify, and other platforms.
            </p>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <h4 className="font-heading text-body font-semibold text-white mb-3">Quick Pixel Setup Overview</h4>
              <ol className="space-y-2 text-gray-300 font-body">
                <li>1. Create Pixel in Events Manager</li>
                <li>2. Install code on your website (WordPress plugin, Shopify integration, or manual code)</li>
                <li>3. Set up standard events (PageView, ViewContent, Purchase, Lead)</li>
                <li>4. Test with Meta Pixel Helper Chrome extension</li>
                <li>5. Verify it's tracking properly before launching ads</li>
              </ol>
              <div className="mt-4">
                <Link href="/blog/how-to-set-up-facebook-pixel" className="text-[#5FA99F] hover:text-[#85C7B3] underline font-semibold">
                  Read our complete Facebook Pixel installation guide →
                </Link>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6">
              <p className="text-red-400 font-body text-base leading-relaxed">
                <strong className="font-semibold">Warning:</strong> If you launch ads without the Pixel installed, you lose all conversion data from those early days. You can't go back and recover it. Install the Pixel first.
              </p>
            </div>
          </div>

          {/* Section 4: Choose Campaign Objective */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Step 1: Choose Your Campaign Objective (Most Important Decision)
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Facebook has 6 main campaign objectives in 2025. Choosing the wrong one is the number one mistake beginners make.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Your objective tells Facebook what you want people to do. Pick "Engagement" when you want sales, and Facebook will show your ads to people who like posts, not people who buy things.
            </p>

            {/* Campaign Objectives Image */}
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
                <Image
                  src="/images/facebook-ads-campaign-objectives-target-success.webp"
                  alt="Facebook ads campaign objectives and targeting success illustration"
                  width={1200}
                  height={764}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-6">The 6 Campaign Objectives Explained</h3>

            <div className="space-y-6 mb-8">
              {/* Awareness */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">1. Awareness</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> Brand new business building recognition</p>
                <p className="text-gray-300 font-body mb-2"><strong>Example:</strong> Buckhead dental practice opening new location</p>
                <p className="text-gray-300 font-body mb-2"><strong>Optimization:</strong> Reach and impressions</p>
                <p className="text-gray-300 font-body"><strong>Cost:</strong> Lowest ($0.40-$1.20 CPM in Atlanta)</p>
              </div>

              {/* Traffic */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">2. Traffic</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> Drive visits to website, blog, or landing page</p>
                <p className="text-gray-300 font-body mb-2"><strong>Example:</strong> Real estate agent promoting new listings</p>
                <p className="text-gray-300 font-body mb-2"><strong>Optimization:</strong> Link clicks</p>
                <p className="text-gray-300 font-body"><strong>Cost:</strong> $0.90-$3.50/click (Atlanta average)</p>
              </div>

              {/* Engagement */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">3. Engagement</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> Post likes, comments, shares, event responses</p>
                <p className="text-gray-300 font-body mb-2"><strong>Example:</strong> Restaurant promoting grand opening event</p>
                <p className="text-gray-300 font-body mb-2"><strong>Optimization:</strong> Post engagement</p>
                <p className="text-gray-300 font-body mb-3"><strong>Cost:</strong> $0.05-$0.30 per engagement</p>
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                  <p className="text-yellow-400 font-body text-body-sm">
                    <strong>Warning:</strong> Engagement doesn't drive sales directly. Use this for social proof and event promotion, not lead generation.
                  </p>
                </div>
              </div>

              {/* Leads */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">4. Leads</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> Collect contact info (emails, phone numbers)</p>
                <p className="text-gray-300 font-body mb-2"><strong>Example:</strong> Med spa offering free consultation</p>
                <p className="text-gray-300 font-body mb-2"><strong>Optimization:</strong> Lead form submissions</p>
                <p className="text-gray-300 font-body mb-3"><strong>Cost:</strong> Varies by industry ($8-15 restaurants, $35-60 dental in Atlanta)</p>
                <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded p-3">
                  <p className="text-[#5FA99F] font-body text-body-sm">
                    <strong>Best for:</strong> Service businesses, B2B, high-ticket items. Built-in lead forms make it easy.
                  </p>
                </div>
              </div>

              {/* App Promotion */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">5. App Promotion</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> Mobile app installs or in-app actions</p>
                <p className="text-gray-300 font-body"><strong>Skip this unless you have a mobile app.</strong></p>
              </div>

              {/* Sales */}
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-white mb-3">6. Sales</h4>
                <p className="text-gray-300 font-body mb-2"><strong>When to use:</strong> E-commerce purchases, online bookings</p>
                <p className="text-gray-300 font-body mb-2"><strong>Example:</strong> Online store selling products</p>
                <p className="text-gray-300 font-body mb-2"><strong>Optimization:</strong> Purchases, conversions</p>
                <p className="text-gray-300 font-body mb-3"><strong>Cost:</strong> Varies by product value</p>
                <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded p-3">
                  <p className="text-[#5FA99F] font-body text-body-sm">
                    <strong>Requires:</strong> Facebook Pixel with purchase event tracking installed
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Decision Framework: Which Objective Should You Choose?</h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-[#1A1A1A]/60 backdrop-blur-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#5FA99F]/20">
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Your Goal</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Choose This Objective</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Why</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5FA99F]/20">
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Get phone calls</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Leads</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Built-in call button</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Sell products online</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Sales</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Tracks purchases</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Fill event</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Engagement</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Event responses tracked</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Get website traffic</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Traffic</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Optimizes for clicks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Collect emails</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Leads</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Lead form built-in</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Book appointments</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F] font-semibold">Leads or Sales</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Depends on your booking system</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-body text-base leading-relaxed">
                <strong className="font-semibold">Pro tip:</strong> 90% of Atlanta small businesses should start with either Leads (service businesses) or Sales (e-commerce). These drive actual business results, not just vanity metrics.
              </p>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Need help understanding costs? Check our <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="text-[#5FA99F] hover:text-[#85C7B3] underline">complete Facebook Ads cost breakdown for Atlanta businesses</Link>.
            </p>
          </div>

          {/* Section 5: Build Target Audience */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Step 2: Define Your Target Audience (The Secret to Low Costs)
            </h2>

            {/* Target Audience Image */}
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
                <Image
                  src="/images/facebook-ads-target-audience-strategy-planning.webp"
                  alt="Facebook ads target audience strategy planning and demographics"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Good targeting is the difference between $15 cost per lead and $150 cost per lead. I've seen both extremes with identical ad creative.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              After choosing your objective, you'll build your audience. Facebook has three main targeting layers: location, demographics, and interests. Get all three right and your costs drop dramatically.
            </p>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Location Targeting</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              For most Atlanta small businesses, you want "People living in this location" rather than "People traveling to this location." A dental practice in Buckhead doesn't need to advertise to tourists visiting Atlanta for the weekend.
            </p>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <h4 className="font-heading text-body font-semibold text-white mb-3">Atlanta Business Targeting Examples</h4>
              <ul className="space-y-2 text-gray-300 font-body">
                <li><strong>Buckhead dental practice:</strong> 5-10 mile radius from practice location</li>
                <li><strong>Metro Atlanta HVAC company:</strong> 25-30 mile radius (willing to drive farther for jobs)</li>
                <li><strong>Downtown restaurant:</strong> 15 mile radius + "People traveling to this location" during lunch/dinner hours</li>
                <li><strong>Online store shipping nationwide:</strong> United States (all locations)</li>
              </ul>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Demographics (Age, Gender, Language)</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Don't leave this set to "All." Narrowing your demographics cuts wasted spend.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg"><strong>Age:</strong> Match your actual customer base. If you sell retirement planning, don't target 18-24 year olds.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg"><strong>Gender:</strong> Select "All" unless your product is gender-specific (bridal services, men's grooming).</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg"><strong>Language:</strong> English (All) for most Atlanta businesses. Add Spanish if you serve bilingual customers.</span>
              </li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Detailed Targeting (Interests & Behaviors)</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              This is where Facebook's algorithm shines. You can target people based on their interests, behaviors, and life events.
            </p>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <h4 className="font-heading text-body font-semibold text-white mb-3">Targeting Strategy Examples</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-body font-semibold mb-1">Buckhead Med Spa</p>
                  <p className="text-gray-300 font-body text-body-sm">Women 30-55 + Interests: Skincare, Beauty, Spa services + Behaviors: High-income households</p>
                </div>
                <div>
                  <p className="text-white font-body font-semibold mb-1">Metro Atlanta Real Estate Agent</p>
                  <p className="text-gray-300 font-body text-body-sm">Ages 28-45 + Life Events: Recently engaged, New job, Moved recently + Interests: Real estate listings</p>
                </div>
                <div>
                  <p className="text-white font-body font-semibold mb-1">Atlanta Restaurant</p>
                  <p className="text-gray-300 font-body text-body-sm">Ages 25-65 + Interests: Dining out, Food & drink, Italian cuisine (if Italian restaurant) + Radius: 10 miles</p>
                </div>
                <div>
                  <p className="text-white font-body font-semibold mb-1">B2B Software Company</p>
                  <p className="text-gray-300 font-body text-body-sm">Job titles: Business owner, Marketing manager, CEO + Company size: 10-200 employees + Industry: Marketing & advertising</p>
                </div>
              </div>
            </div>

            <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-body text-base leading-relaxed">
                <strong className="font-semibold">Pro tip:</strong> Start with 2-3 interests, not 20. More targeting options doesn't equal better results. A tightly focused audience of 50,000-500,000 people performs better than a vague audience of 5 million.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Audience Size Sweet Spot</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Facebook shows you a gauge labeled "Audience Definition" ranging from Specific to Broad. You want the needle in the middle, slightly toward "Specific."
            </p>

            <ul className="space-y-2 mb-6 text-gray-300 font-body text-lg">
              <li><strong>Too small (under 50,000):</strong> Costs skyrocket, limited reach</li>
              <li><strong>Sweet spot (50,000-500,000 Atlanta metro):</strong> Best performance</li>
              <li><strong>Too broad (over 2 million):</strong> Wasted impressions, poor conversion rates</li>
            </ul>
          </div>

          {/* Section 6: Budget & Schedule */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Step 3: Set Your Budget & Schedule (How Much to Spend)
            </h2>

            {/* Analytics Dashboard Image */}
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
                <Image
                  src="/images/facebook-ads-analytics-dashboard-roi-tracking.webp"
                  alt="Facebook ads analytics dashboard showing ROI tracking and budget performance"
                  width={1200}
                  height={960}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Facebook requires a minimum of $1/day per ad set. But spending $1/day gives you garbage data and no results.
            </p>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Recommended Starting Budgets</h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-[#1A1A1A]/60 backdrop-blur-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#5FA99F]/20">
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Business Type</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Minimum Daily Budget</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Recommended</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5FA99F]/20">
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Testing new campaign</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">$30/day</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F]">$50/day for faster data</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Local service business</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">$30-50/day</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F]">$75-150/day once optimized</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">E-commerce store</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">$50/day</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F]">$100-300/day once profitable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Restaurant/retail</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">$20-30/day</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F]">$50-100/day for sustained traffic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">High-ticket B2B</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">$50/day</td>
                    <td className="px-6 py-4 text-body-sm text-[#5FA99F]">$150-500/day for volume</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Daily Budget vs Lifetime Budget</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You have two options: daily budget or lifetime budget. For beginners, I recommend daily budget because it's predictable.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg"><strong>Daily Budget:</strong> Facebook spends up to your daily limit every day. Set it at $50/day and you'll spend roughly $1,500/month.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">•</span>
                <span className="text-gray-300 font-body text-lg"><strong>Lifetime Budget:</strong> You set a total spend ($1,000) and end date (30 days). Facebook distributes spend unevenly across days based on performance.</span>
              </li>
            </ul>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Campaign Schedule (Start & End Dates)</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Most campaigns should run continuously rather than stopping and starting. Facebook's algorithm improves with more data, so turning campaigns off resets the learning phase.
            </p>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <h4 className="font-heading text-body font-semibold text-white mb-3">When to Use End Dates</h4>
              <ul className="space-y-2 text-gray-300 font-body">
                <li>• Limited-time promotions (Black Friday sale, event registration deadline)</li>
                <li>• Seasonal businesses (tax preparation, holiday retail)</li>
                <li>• Testing campaigns with a fixed budget ($500 test over 10 days)</li>
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
              <p className="text-yellow-400 font-body text-base leading-relaxed">
                <strong className="font-semibold">Common mistake:</strong> Setting a 7-day end date on every campaign. This forces you to recreate campaigns weekly, resetting Facebook's optimization. Run campaigns continuously and pause them manually if needed.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Ad Scheduling (Day Parting)</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              By default, Facebook runs ads 24/7. You can set custom schedules if your business only operates certain hours.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Example: A dental practice that doesn't answer phones after 5pm might schedule ads Monday-Friday, 8am-6pm EST. This prevents leads from coming in when nobody can respond.
            </p>

            <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-body text-base leading-relaxed">
                <strong className="font-semibold">Pro tip:</strong> Start with 24/7 delivery for your first campaign. Review your reporting after 2 weeks to see which hours perform best, then add scheduling if you see clear patterns.
              </p>
            </div>
          </div>

          {/* Section 7: Common Mistakes */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              7 Mistakes That Kill Facebook Ad Performance
            </h2>

            {/* Performance Analytics Image */}
            <div className="my-8">
              <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
                <Image
                  src="/images/facebook-ads-campaign-performance-analytics-dashboard.webp"
                  alt="Facebook ads campaign performance analytics showing key metrics and data"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              I see these mistakes every single time I audit a struggling Facebook Ads account. Avoid them and you'll outperform 80% of advertisers.
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">1. Skipping Facebook Pixel Installation</h4>
                <p className="text-gray-300 font-body">Without Pixel tracking, you can't measure conversions, build retargeting audiences, or optimize for actual business results. Install it before spending a dollar.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">2. Using Engagement Objective When You Want Sales</h4>
                <p className="text-gray-300 font-body">Facebook optimizes for exactly what you tell it. Choose Engagement and you get likes. Choose Leads or Sales and you get customers. Match your objective to your business goal.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">3. Targeting Everyone (Age 18-65+, All Interests)</h4>
                <p className="text-gray-300 font-body">Broad audiences waste money. A Buckhead med spa advertising to 18-year-old men wastes half their budget. Narrow your targeting to match your actual customer profile.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">4. Spending Less Than $30/Day</h4>
                <p className="text-gray-300 font-body">Facebook needs 50 conversions to exit the learning phase. At $5/day, this takes months. Start with $30-50/day minimum to generate meaningful data within 2 weeks.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">5. Judging Performance Before Day 7</h4>
                <p className="text-gray-300 font-body">First 48 hours are exploratory. Facebook tests different audiences and placements. Campaigns often look terrible on day 2 and profitable by day 10. Wait 7-14 days before making major changes.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">6. Sending Traffic to Your Homepage</h4>
                <p className="text-gray-300 font-body">Generic homepages convert poorly. Create dedicated landing pages that match your ad's promise. <Link href="/blog/why-meta-ads-need-landing-pages" className="text-[#5FA99F] hover:text-[#85C7B3] underline">Read why landing pages improve conversion rates by 3-5x</Link>.</p>
              </div>

              <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-red-500/30 rounded-lg p-6">
                <h4 className="font-heading text-body font-semibold text-red-400 mb-2">7. Creating 10 Ad Variations Immediately</h4>
                <p className="text-gray-300 font-body">Split budgets across too many ads and none get enough data to optimize. Start with 1-2 ads per campaign. Test more variations once you identify what works.</p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="font-heading text-h2 font-bold text-white mb-6">
              Next Steps: Launch Your First Campaign
            </h2>

            {/* Meta Platform Icon */}
            <div className="my-8 flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#5FA99F]/50 shadow-[0_0_40px_rgba(95,169,159,0.3)]">
                <Image
                  src="/images/facebook-meta-ads-platform-icon.webp"
                  alt="Facebook Meta Ads Platform icon"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              You now understand how to create Facebook ads the right way. Not boosted posts. Not guesswork. Strategic campaigns built on proven targeting, proper objectives, and conversion tracking.
            </p>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Your Campaign Launch Checklist</h3>

            <div className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Business Manager account created with payment method added</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Facebook Pixel installed and verified with test events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Campaign objective matches your business goal (Leads or Sales for most)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Target audience defined (location + demographics + 2-3 interests)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Budget set at $30/day minimum for testing phase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Landing page created that matches ad promise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Ad creative prepared (image or video + compelling copy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5FA99F] mr-3 mt-1 flex-shrink-0">☐</span>
                  <span className="text-gray-300 font-body text-lg">Plan to let campaign run 7-14 days before judging performance</span>
                </li>
              </ul>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Should You DIY or Hire an Agency?</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Creating your first campaign yourself teaches you how the platform works. But managing ongoing optimization, testing ad creative, and scaling profitable campaigns takes serious time.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-[#1A1A1A]/60 backdrop-blur-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#5FA99F]/20">
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Choose DIY If...</th>
                    <th className="px-6 py-3 text-left text-body-sm font-semibold text-white">Hire Agency If...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#5FA99F]/20">
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">You have 10+ hours/week for ads</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">You need results faster</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Budget under $2,000/month</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Spending $3,000+/month on ads</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">You enjoy learning new platforms</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Your time is better spent running your business</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-body-sm text-gray-300">Testing to see if ads work for you</td>
                    <td className="px-6 py-4 text-body-sm text-gray-300">You know ads work and want to scale</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Atlanta businesses working with Drive Lead Media typically see 30-40% better ROI than their DIY efforts because we run hundreds of campaigns annually. We know which targeting works for Atlanta dental practices, which creative performs for Buckhead real estate agents, and how to scale restaurant campaigns without killing profitability.
            </p>

            <div className="bg-[#5FA99F]/10 border border-[#5FA99F]/30 rounded-lg p-6 mb-6">
              <p className="text-[#5FA99F] font-body text-base leading-relaxed mb-3">
                <strong className="font-semibold">Ready to scale your Facebook advertising?</strong>
              </p>
              <p className="text-gray-300 font-body text-base leading-relaxed">
                We manage Facebook and Instagram ad campaigns for Atlanta service businesses, e-commerce stores, and B2B companies. Get a free strategy call to discuss your goals and see if we're a fit.
              </p>
            </div>

            <h3 className="font-heading text-xl font-bold text-white mb-4">Keep Learning</h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-4">
              This guide covered campaign creation fundamentals. Dive deeper into specific topics:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">→</span>
                <Link href="/blog/how-to-set-up-facebook-pixel" className="text-[#5FA99F] hover:text-[#85C7B3] underline font-body text-lg">Complete Facebook Pixel installation guide</Link>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">→</span>
                <Link href="/blog/boosted-posts-vs-targeted-ads" className="text-[#5FA99F] hover:text-[#85C7B3] underline font-body text-lg">Boosted posts vs targeted ads comparison</Link>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">→</span>
                <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="text-[#5FA99F] hover:text-[#85C7B3] underline font-body text-lg">Facebook Ads costs for Atlanta businesses</Link>
              </li>
              <li className="flex items-start">
                <span className="text-[#5FA99F] mr-3 mt-1">→</span>
                <Link href="/blog/why-meta-ads-need-landing-pages" className="text-[#5FA99F] hover:text-[#85C7B3] underline font-body text-lg">Why your ads need dedicated landing pages</Link>
              </li>
            </ul>

            <p className="text-gray-300 font-body text-body leading-relaxed">
              Launch your first campaign this week. You'll learn more from one real campaign than reading 50 tutorials. Start small, track everything, and optimize based on data.
            </p>
          </div>

          {/* FAQ Section */}
          <CollapsibleFAQ items={faqItems} />

          {/* Author Bio */}
          {post?.author && <AuthorBio author={post.author} />}

        </div>
      </article>
    </main>
  );
}
