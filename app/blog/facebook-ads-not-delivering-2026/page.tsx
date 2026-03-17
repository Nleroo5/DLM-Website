import ScrollFadeIn from '@/components/blog/ScrollFadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';
import { ImageObjectSchema } from '@/components/StructuredDataSchemas';

export default function FacebookAdsNotDelivering2026() {
  const post = getPostBySlug('facebook-ads-not-delivering-2026');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  // FAQ Schema for AEO (Answer Engine Optimization)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are my Facebook ads not delivering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook ads typically don't deliver due to learning limited status (40% of cases), Facebook Pixel tracking errors, budget too low, ad account restrictions, audience too narrow, bid cap too low, creative rejection, overlapping audiences, delivery optimization mismatches, campaign schedule issues, payment problems, or creative fatigue. The most common issue is learning limited status, which occurs when your ad set doesn't generate 50 optimization events within 7 days."
        }
      },
      {
        "@type": "Question",
        "name": "What is learning limited status on Facebook ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Learning limited status occurs when your Facebook ad set doesn't generate 50 optimization events (conversions, leads, purchases, etc.) within 7 days. During this phase, Meta's algorithm cannot effectively optimize delivery, resulting in higher costs and inconsistent performance. To fix learning limited status, consolidate ad sets to increase volume, increase your daily budget by 20-30%, or switch to a higher-funnel conversion event that fires more frequently."
        }
      },
      {
        "@type": "Question",
        "name": "How do I fix Facebook ads that aren't spending my budget?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your Facebook ads aren't spending budget, first check your delivery status in Ads Manager. Common fixes include: increasing your daily budget to at least $20-30 per ad set, broadening your audience targeting to reach more people, consolidating multiple ad sets into fewer ad sets with higher budgets, fixing Facebook Pixel tracking if events aren't firing, removing bid caps that are too low, and ensuring your payment method is valid and has sufficient funds."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the Facebook ads learning phase last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Facebook ads learning phase typically lasts 3-7 days and requires 50 optimization events to exit successfully. With Meta's Andromeda algorithm (2024+), learning phases are faster, often completing in 48-72 hours for well-optimized campaigns. However, if you don't generate 50 conversions within 7 days, your campaign enters 'learning limited' status and may remain there indefinitely until you make changes to increase conversion volume."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good budget to avoid learning limited on Facebook ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To avoid learning limited status, your budget should generate approximately 50 conversion events per week per ad set. If your cost per conversion is $20, you need a minimum weekly budget of $1,000 ($142/day) per ad set. For Atlanta businesses, recommended budgets are: small local businesses $50-100/day, medium businesses $100-300/day, and larger businesses $300+/day. It's better to run 2 ad sets at $100/day each than 5 ad sets at $40/day each."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my Facebook Pixel is working correctly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To verify your Facebook Pixel is working: 1) Install the Meta Pixel Helper Chrome extension, 2) Visit your website and click the extension icon, 3) Look for a green checkmark indicating the pixel is firing, 4) Check Events Manager in Meta Business Suite for recent PageView events, 5) Use the Test Events tab to see real-time event tracking, and 6) Verify that conversion events (Lead, Purchase, etc.) are firing on thank-you pages. If the pixel isn't tracking, check that the base code is in your website's <head> section and events are properly configured."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my Facebook ad account restricted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook ad accounts get restricted for policy violations (prohibited content, misleading claims, restricted industries), payment issues (declined cards, chargebacks), unusual account activity (sudden spending increases, login from new locations), multiple policy violations over time, or association with previously banned accounts. To fix restrictions: review Meta's Advertising Policies, appeal the restriction through Account Quality in Business Settings, remove policy-violating content, verify your business and payment information, and in severe cases, create a new Business Manager account."
        }
      },
      {
        "@type": "Question",
        "name": "What is ad frequency and when is it too high?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ad frequency shows how many times the average person sees your ad. Frequency between 1.0-2.0 is optimal. Frequency of 2.0-3.0 indicates creative is getting stale. Frequency above 3.0 means creative fatigue - people are seeing your ad too many times and ignoring it, causing higher costs and lower performance. To fix high frequency: add new creative variations, refresh ad copy and images, expand your audience size, or pause the campaign for 3-7 days to reset user saturation."
        }
      },
      {
        "@type": "Question",
        "name": "How many ad sets should I run at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For optimal performance and to avoid learning limited status, run 2-4 ad sets maximum per campaign with consolidated budgets. Running 8+ small ad sets ($20-30 each) spreads your budget too thin and prevents any single ad set from getting 50 weekly conversions. Best practice: consolidate into 2-3 ad sets at $80-150/day each rather than 6-8 ad sets at $30/day each. This allows each ad set to exit learning phase faster and optimize more effectively."
        }
      },
      {
        "@type": "Question",
        "name": "Should I consolidate my Facebook ad sets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, consolidate ad sets if you're experiencing learning limited status or have multiple small-budget ad sets. Ad set consolidation works best when you combine similar audiences into fewer ad sets with larger budgets. For example, instead of running 6 separate ad sets for different age ranges ($30/day each = $180 total), run 2 consolidated ad sets with broader age targeting ($90/day each = $180 total). This increases the likelihood of generating 50+ weekly conversions per ad set, helping you exit learning limited and achieve better performance."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to run Facebook ads in Atlanta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook ads in Atlanta cost $0.90-$3.50 per click depending on industry, with most local businesses paying $1.50-$2.80 CPC. Cost per lead ranges from $8-45, with healthcare/dental at $25-65, home services at $15-35, real estate at $12-25, and professional services at $40-120. Atlanta businesses should budget minimum $500-1,000/month ($16-33/day) for small local campaigns, $1,500-3,000/month ($50-100/day) recommended for consistent lead flow, and $3,000-8,000+/month for scaling campaigns. Buckhead and Midtown targeting typically costs 30-40% more than broader Atlanta metro targeting."
        }
      },
      {
        "@type": "Question",
        "name": "What does 'in review' status mean for Facebook ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In review status means Meta is checking your ad for policy compliance before allowing it to deliver. Review typically takes 15 minutes to 24 hours, with most ads approved within 1-2 hours. If stuck in review for 24+ hours, try: editing a small detail in the ad copy (adding a period), duplicating the ad, or contacting Meta support. Ads promoting alcohol, financial services, healthcare, or political content take longer to review. Once approved, the ad will automatically start delivering based on your schedule and budget settings."
        }
      }
    ]
  };

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

      {/* Image Schemas for SEO */}
      <ImageObjectSchema
        url="/images/facebook-ads-not-delivering-business-owner-analytics-dashboard.webp"
        caption="Facebook ads not delivering - frustrated advertiser analyzing Meta Ads Manager"
        description="Business owner frustrated while reviewing Facebook ads delivery issues and analytics dashboard showing campaigns not spending budget in Meta Ads Manager"
        width={1920}
        height={1280}
      />
      <ImageObjectSchema
        url="/images/facebook-ads-budget-planning-calculator-cost-per-lead.webp"
        caption="Meta ads budget planning and calculator"
        description="Financial planning dashboard showing Meta advertising budget calculations and daily spending requirements for Facebook and Instagram campaigns"
        width={1920}
        height={1280}
      />
      <ImageObjectSchema
        url="/images/facebook-ads-learning-phase-optimization-strategy-meeting.webp"
        caption="Facebook ads learning phase optimization process"
        description="Visual representation of Facebook ads learning phase process showing campaign optimization and data collection for Meta advertising"
        width={1920}
        height={1280}
      />
      <ImageObjectSchema
        url="/images/facebook-pixel-installation-tracking-code-setup-developer.webp"
        caption="Meta Pixel conversion tracking setup and verification"
        description="Technical setup and verification process for Meta Pixel conversion tracking on websites for Facebook and Instagram advertising campaigns"
        width={1920}
        height={1280}
      />
      <ImageObjectSchema
        url="/images/facebook-ad-account-restricted-policy-violation-error-fix.webp"
        caption="Facebook ads account restrictions and policy violations dashboard"
        description="Meta Ads Manager dashboard displaying account restrictions, policy violations, and delivery warnings for Facebook advertising campaigns"
        width={1920}
        height={1280}
      />
      <ImageObjectSchema
        url="/images/facebook-ad-creative-fatigue-refresh-multiple-variations-testing.webp"
        caption="Meta ads creative fatigue refresh strategy"
        description="Creative design process showing multiple ad variations and refresh strategy to combat creative fatigue in Facebook and Instagram advertising"
        width={1920}
        height={1280}
      />

      {/* Hero Section */}
      <ScrollFadeIn className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/facebook-ads-not-delivering-business-owner-analytics-dashboard.webp"
            alt="Frustrated advertiser looking at Facebook ads not delivering in Meta Ads Manager showing delivery status issues and campaign problems"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.7)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <ScrollFadeIn className="inline-block mb-4">
              <span className="text-[#5FA99F] font-semibold text-body-sm tracking-[0.15em] uppercase">Troubleshooting Guide</span>
            </ScrollFadeIn>
            <h1 className="font-heading text-h1 font-bold text-white leading-[1.1] mb-6">
              Why Your Facebook Ads Aren't Delivering (2026): 12 Reasons & Fixes
            </h1>
            <p className="text-body-lg text-gray-300 font-body leading-relaxed mb-8">
              Your ads show "Not Delivering" or "Learning Limited" and you don't know why. Here are 12 verified reasons with exact fixes that actually work.
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      {/* Article Meta */}
      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-body-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Delivery Issues, Learning Phase, Troubleshooting</span>
            </div>
          </div>
        </div>
      </div>

      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Main Content */}
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">

        {/* Introduction */}
        <ScrollFadeIn as="section" className="mb-20">
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="space-y-6">
              <p className="text-gray-300 font-body text-body leading-relaxed">
                You log into Ads Manager and see it. "Not Delivering" in red text next to your campaign. Or worse, "Learning Limited" with your budget sitting there, unspent.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed">
                You check your payment method. It's fine. You review your targeting. Looks good. You refresh the page three times. Nothing changes.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed">
                Here's what you need to know: this happens to thousands of advertisers every single day. In fact, Meta's ad platform experienced 24 separate delivery outages in the 12 months leading up to January 2026, according to Ad Status tracking data. Sometimes it's not even your fault.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed font-semibold">
                But most of the time, there's a specific reason your ads aren't delivering. And there's a specific fix.
              </p>

              <p className="text-gray-300 font-body text-body leading-relaxed">
                This guide covers the 12 most common delivery issues in 2026, backed by verified data from Meta's documentation, LeadEnforce research, and platform analytics from thousands of ad accounts. No guessing. No assumptions. Just the real reasons ads don't deliver and exactly how to fix them.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Understanding Delivery Statuses */}
        <ScrollFadeIn as="section" className="mb-20">
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">1</span>
              </div>
              <h2 className="font-heading text-h2 font-bold text-white">
                Understanding Delivery Statuses (What They Actually Mean)
              </h2>
            </div>

            <div className="space-y-6 text-white text-body leading-relaxed">
              <p>
                Before we get into fixes, you need to understand what Meta is actually telling you. The delivery status in Ads Manager isn't just a label. It's a diagnostic message.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6 my-8">
                <h3 className="text-white font-bold text-[1.25rem] sm:text-[1.375rem] mb-4">Active</h3>
                <p className="mb-4">
                  Your campaign is running normally. Ads are being shown to your target audience. Budget is spending. This is what you want to see.
                </p>
              </div>

              <div className="bg-[rgba(212,165,116,0.1)] border border-[#D4A574] rounded-lg p-6 my-8">
                <h3 className="text-white font-bold text-[1.25rem] sm:text-[1.375rem] mb-4">In Review</h3>
                <p className="mb-4">
                  Every Facebook ad goes through Meta's review process to ensure it complies with their Advertising Standards. According to Meta's policy documentation, reviews typically complete within 24 hours, though delays can happen during high-traffic periods.
                </p>
                <p>
                  If your ad stays in review longer than 48 hours, there's likely an issue. Check for policy violations or submit your ad earlier next time.
                </p>
              </div>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6 my-8">
                <h3 className="text-white font-bold text-[1.25rem] sm:text-[1.375rem] mb-4">Learning</h3>
                <p className="mb-4">
                  Meta's algorithm is gathering data to optimize delivery. According to LeadEnforce research and Meta's documentation, your ad set needs approximately 50 optimization events within a 7-day period to successfully complete the learning phase.
                </p>
                <p>
                  This is normal. Don't panic. Just let it run.
                </p>
              </div>

              <div className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-6 rounded-lg my-8">
                <h3 className="text-white font-bold text-[1.25rem] sm:text-[1.375rem] mb-3">Learning Limited</h3>
                <p className="mb-4">
                  This is where problems start. Learning Limited means Meta isn't getting enough data to fully optimize delivery, according to 9 Clouds and Bir.ch research. Your ad set isn't getting the 50 results needed within 7 days after you made changes.
                </p>
                <p className="mb-4">
                  What happens: Your delivery becomes unstable. Your cost per acquisition drifts higher because the system is guessing, not optimizing. Your budget efficiency drops since the algorithm isn't sure where to allocate spend.
                </p>
                <p className="text-[#5FA99F] font-semibold">
                  This is fixable. We'll cover exactly how in the sections below.
                </p>
              </div>

              <div className="my-8">
                <Image
                  src="/images/facebook-ads-learning-phase-optimization-strategy-meeting.webp"
                  alt="Facebook ads learning phase showing campaign optimization process with 50 conversion events requirement over 7 days for Meta advertising"
                  width={1920}
                  height={1280}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              <p className="text-[#5FA99F] text-body font-semibold">
                The critical number to remember: 50 conversions per week. That's what Meta needs to exit the learning phase and deliver your ads efficiently.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* The 12 Reasons - Let me continue with the complete content */}
        <ScrollFadeIn as="section" className="mb-20">
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">2</span>
              </div>
              <h2 className="text-white font-heading text-h2 font-bold">
                The 12 Reasons Your Ads Aren't Delivering
              </h2>
            </div>

            <div className="space-y-12 text-white text-body leading-relaxed">

              {/* Reason 1: Stuck in Learning Phase */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 1: Stuck in Learning Phase</h3>

                <p className="mb-4">
                  Your ad set needs 50 optimization events within 7 days to exit the learning phase. This isn't a recommendation. It's Meta's documented requirement according to LeadEnforce and GoMarble AI research.
                </p>

                <p className="mb-4">
                  If you're optimizing for purchases and only getting 10 sales per week, you'll stay stuck. If you're targeting leads and getting 30 per week, you'll stay stuck. The number is 50, regardless of your goal.
                </p>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Combine multiple ad sets targeting similar audiences into one. This concentrates your conversion events.</li>
                    <li className="list-disc">Widen your audience size to increase the pool of potential converters.</li>
                    <li className="list-disc">Consider optimizing for a higher-funnel event temporarily. If purchases aren't hitting 50/week, optimize for "Add to Cart" or "View Content" until you have more budget.</li>
                    <li className="list-disc">Stop editing your campaigns. Any significant edit resets the learning phase according to Meta's documentation.</li>
                  </ul>
                </div>

                <p className="text-body-sm text-white/70">
                  Source: LeadEnforce, Meta documentation on learning phase requirements
                </p>
              </div>

              {/* Reason 2: Budget Too Low */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 2: Budget Too Low</h3>

                <p className="mb-4">
                  In 2026, Meta introduced a new minimum daily budget of 3 euros (approximately $3.25 USD) according to Giovanni Perilli's reporting. But that technical minimum doesn't mean your ads will actually deliver effectively.
                </p>

                <div className="my-8">
                  <Image
                    src="/images/facebook-ads-budget-planning-calculator-cost-per-lead.webp"
                    alt="Meta ads budget calculator showing financial planning dashboard with daily spending requirements and cost per result calculations for Facebook advertising campaigns"
                    width={1920}
                    height={1280}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                <p className="mb-4">
                  Meta recommends your daily budget should be at least 5 times your cost per result goal, according to Cropink documentation. If your target cost per lead is $10, you need a minimum $50 daily budget. If you're aiming for $5 per conversion, you need at least $25 per day.
                </p>

                <p className="mb-4">
                  Why? Because Meta needs to generate at least 10 optimized actions per day to learn and optimize effectively, per Integrately research. With a budget that's too low, you can't compete in the auction. Other advertisers outbid you, and your ads simply don't get shown.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Calculate your desired cost per action, then multiply by 10 for your minimum daily budget.</li>
                    <li className="list-disc">If using cost cap bidding, your budget must be 5x the cap amount per SaveMyLeads documentation.</li>
                    <li className="list-disc">Start higher than you think you need. You can always scale down once you see results.</li>
                  </ul>
                </div>

                <p className="text-body-sm text-white/70 mt-4">
                  Internal link: Check our <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="text-[#5FA99F] underline hover:text-[#85C7B3]">complete guide on Facebook ad costs</Link> for budget planning.
                </p>
              </div>

              {/* Reason 3: Ad Policy Violations */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 3: Ad Policy Violations</h3>

                <p className="mb-4">
                  Ads that mislead, use clickbait headlines, or promote restricted products violate Meta's Advertising Standards. Common violations include false information, copyright infringement, shocking content, or excessive negative feedback according to Bir.ch and Meta's Transparency Center documentation.
                </p>

                <p className="mb-4">
                  Minor policy issues typically resolve within 24-72 hours once corrected, according to Superads research. But severe or repeated violations lead to permanent restrictions where you lose access to advertising tools entirely.
                </p>

                <div className="my-8">
                  <Image
                    src="/images/facebook-ad-account-restricted-policy-violation-error-fix.webp"
                    alt="Meta Ads Manager dashboard showing Facebook ads account restrictions and policy violation warnings with delivery status alerts"
                    width={1920}
                    height={1280}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Review Meta's Advertising Standards at transparency.meta.com</li>
                    <li className="list-disc">Check Business Support Home for specific violation notices</li>
                    <li className="list-disc">Submit appeals with required verification (identity documents, two-factor authentication) per Madgicx guidance</li>
                    <li className="list-disc">Remove any copyrighted images, misleading claims, or prohibited content from your ads</li>
                  </ul>
                </div>

                <p className="bg-[rgba(255,107,107,0.1)] border-l-4 border-red-500 p-4 rounded">
                  Important: Accounts disabled for severe violations or restricted for more than 180 days cannot be reinstated according to Meta policy documented by Dicloak.
                </p>
              </div>

              {/* Reason 4: Account Restrictions */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 4: Account-Level Restrictions</h3>

                <p className="mb-4">
                  Sometimes the problem isn't your ad. It's your entire account. Common causes include policy violations, negative feedback from users, suspicious activity, or unverified business accounts according to AGrowth and BestEver AI research.
                </p>

                <p className="mb-4">
                  The professional standard in 2026 is prevention over reaction, according to industry experts. Once your account gets restricted, recovery is difficult and time-consuming.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Enable two-factor authentication on your account immediately</li>
                    <li className="list-disc">Complete business verification in Business Manager</li>
                    <li className="list-disc">Address specific violation notices through the appeals process</li>
                    <li className="list-disc">Add a backup payment method to avoid payment-related restrictions</li>
                  </ul>
                </div>

                <p className="text-[#5FA99F] font-semibold mt-4">
                  Prevention tip: Follow all policies strictly, maintain good user feedback, and verify your business identity before problems arise.
                </p>
              </div>

              {/* Reason 5: Pixel Tracking Errors */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 5: Pixel Tracking Errors</h3>

                <p className="mb-4">
                  Here's a frustrating one: your pixel fires (you can see it in Pixel Helper), but no conversions show up in Ads Manager. According to Conversios and TwoOwls research, this happens because browser-based tracking alone is increasingly unreliable in 2026.
                </p>

                <p className="mb-4">
                  The numbers are stark: 31.5% of internet users globally run ad blockers according to verified data. Safari users, iOS restrictions, and browser privacy settings block tracking scripts. Your pixel might fire on your computer, but it's failing for a third of your actual customers.
                </p>

                <div className="my-8">
                  <Image
                    src="/images/facebook-pixel-installation-tracking-code-setup-developer.webp"
                    alt="Meta Pixel conversion tracking setup showing technical verification process and event configuration for Facebook advertising campaigns"
                    width={1920}
                    height={1280}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Implement Meta Conversions API (CAPI) for server-side tracking. This bypasses browser restrictions entirely.</li>
                    <li className="list-disc">According to Triple Whale documentation, businesses using CAPI recover 20-30% of lost conversion data.</li>
                    <li className="list-disc">Use Meta's Test Events tool in Events Manager to verify your pixel fires correctly.</li>
                    <li className="list-disc">Check Event Match Quality score and aim for 75% minimum per CAPI best practices.</li>
                    <li className="list-disc">Ensure proper event deduplication between Pixel and CAPI to avoid double-counting.</li>
                  </ul>
                </div>

                <p className="text-body-sm text-white/70 mt-4">
                  Internal link: See our <Link href="/blog/how-to-set-up-facebook-pixel" className="text-[#5FA99F] underline hover:text-[#85C7B3]">complete Facebook Pixel setup guide</Link> for implementation steps.
                </p>
              </div>

              {/* Reason 6: Audience Too Small */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 6: Audience Too Small</h3>

                <p className="mb-4">
                  If your target audience is under 50,000 people, you're likely to hit Learning Limited status according to Superads and MagicBrief research. The math is simple: a smaller audience means fewer people to show ads to, which means fewer conversions, which means you can't hit that 50 conversions per week threshold.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Broaden your targeting parameters. Expand age ranges, include more interests, or widen geographic targeting.</li>
                    <li className="list-disc">Use Advantage+ Audience to let Meta expand beyond your defined demographics when it finds better results.</li>
                    <li className="list-disc">Remove excessive exclusions. Each exclusion shrinks your audience further.</li>
                    <li className="list-disc">Combine overlapping audiences instead of running them separately.</li>
                  </ul>
                </div>

                <p className="text-body-sm text-white/70 mt-4">
                  Internal link: Learn more about <Link href="/blog/meta-ads-target-audience-guide" className="text-[#5FA99F] underline hover:text-[#85C7B3]">proper audience targeting strategies</Link>.
                </p>
              </div>

              {/* Reason 7-12: Continuing with remaining reasons... */}
              {/* I'll continue in the next message to keep within reasonable limits */}

              {/* Reason 7: Payment Method Issues */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 7: Payment Method Issues</h3>

                <p className="mb-4">
                  Expired credit cards, declined payments, or insufficient funds halt all campaigns immediately according to Embryo and WordStream documentation. Often, this happens without clear notification, and you might not realize your ads stopped running until you check Ads Manager.
                </p>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Update your payment method in Business Manager settings</li>
                    <li className="list-disc">Add a backup payment option to prevent future interruptions</li>
                    <li className="list-disc">Monitor billing threshold alerts and set up email notifications</li>
                    <li className="list-disc">Check your payment history for any failed charges</li>
                  </ul>
                </div>
              </div>

              {/* Reason 8: Daily Spending Limit */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 8: Daily Spending Limit Hit</h3>

                <p className="mb-4">
                  Meta sets a Daily Spending Limit (DSL) for ad accounts according to Superads documentation. This is different from your campaign daily budget. Once you hit the account-wide DSL, all ads stop running until the next day.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Check your account spending limit in Business Manager</li>
                    <li className="list-disc">Request a limit increase if you're consistently hitting the cap</li>
                    <li className="list-disc">Plan your campaign spending around known account limits</li>
                    <li className="list-disc">Monitor daily spend throughout the day to catch this early</li>
                  </ul>
                </div>
              </div>

              {/* Reason 9: Overlapping Audiences */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 9: Overlapping Audiences Creating Competition</h3>

                <p className="mb-4">
                  When you have multiple ad sets targeting identical or highly similar audiences, they compete against each other in Meta's auction according to MagicBrief research. Meta prioritizes one ad set at the expense of others, causing some to get zero spend while others max out.
                </p>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Consolidate similar audiences into a single ad set</li>
                    <li className="list-disc">Use campaign budget optimization instead of ad set budgets</li>
                    <li className="list-disc">Ensure audience overlap stays below 20% using Meta's Audience Overlap tool</li>
                    <li className="list-disc">Create distinct, non-overlapping audience segments</li>
                  </ul>
                </div>
              </div>

              {/* Reason 10: Bid Too Low */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 10: Bid Too Low to Compete</h3>

                <p className="mb-4">
                  Even with great targeting and sufficient budget, if your bid is too low, you can't compete in the auction. Other advertisers outbid you for the same audience slots according to AgencyGDT documentation.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Switch to highest volume bidding initially to establish baseline performance</li>
                    <li className="list-disc">Once campaigns stabilize, test cost cap or bid cap strategies</li>
                    <li className="list-disc">Monitor auction overlap in Ads Manager diagnostics</li>
                    <li className="list-disc">Increase bid limits if you're seeing low delivery due to bid constraints</li>
                  </ul>
                </div>
              </div>

              {/* Reason 11: Creative Fatigue */}
              <div className="bg-[rgba(95,169,159,0.05)] border-l-4 border-[#5FA99F] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 11: Ad Creative Fatigue</h3>

                <p className="mb-4">
                  Rising CPM (cost per thousand impressions) is your primary red flag for creative fatigue according to Jon Loomer Digital and AppsFlyer research. When your cost per result doubles from its baseline, you have creative fatigue. When your frequency metric exceeds 3.0 and CTR drops 30% or more, your audience is tired of seeing the same ad.
                </p>

                <div className="my-8">
                  <Image
                    src="/images/facebook-ad-creative-fatigue-refresh-multiple-variations-testing.webp"
                    alt="Meta ads creative fatigue showing multiple ad design variations and refresh strategy process for Facebook and Instagram advertising campaigns"
                    width={1920}
                    height={1280}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                <p className="mb-4">
                  The fix timeline: Most accounts should refresh creative every 2-4 weeks according to Young Urban Project research. Accounts with large budgets need weekly refreshes. This isn't optional in 2026, it's required for stable performance.
                </p>

                <div className="bg-[rgba(95,169,159,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Rotate 3-5 creative assets per campaign according to Meta's best practices</li>
                    <li className="list-disc">Change backgrounds, headlines, and ad formats regularly</li>
                    <li className="list-disc">Run different emotional angles, not just different images (testimonials, urgency, education, social proof)</li>
                    <li className="list-disc">Test various visual styles: professional photos, user-generated content, graphics, before/after comparisons</li>
                    <li className="list-disc">Monitor frequency and CTR metrics weekly to catch fatigue early</li>
                  </ul>
                </div>

                <p className="text-body-sm text-white/70 mt-4">
                  Internal link: Learn why creative matters more than ever in our <Link href="/blog/meta-andromeda-algorithm-2026" className="text-[#5FA99F] underline hover:text-[#85C7B3]">Meta Andromeda Algorithm guide</Link>.
                </p>
              </div>

              {/* Reason 12: Wrong Optimization Event */}
              <div className="bg-[rgba(212,165,116,0.05)] border-l-4 border-[#D4A574] p-8 rounded-lg">
                <h3 className="text-[#5FA99F] font-bold text-h3 mb-4">Reason 12: Wrong Optimization Event Selected</h3>

                <p className="mb-4">
                  Meta delivers exactly what you tell it to optimize for, according to AdEspresso and HackMD documentation. If you're optimizing for link clicks but you actually want purchases, Meta will send you people who click links, not people who buy. If your conversion event isn't configured correctly or isn't firing, Meta can't optimize at all.
                </p>

                <div className="bg-[rgba(212,165,116,0.1)] rounded-lg p-6 my-6">
                  <h4 className="text-white font-semibold mb-3">How to Fix It:</h4>
                  <ul className="space-y-3 ml-6">
                    <li className="list-disc">Verify your pixel shows "Active" status in Events Manager</li>
                    <li className="list-disc">Check that your optimization event matches your actual campaign goal</li>
                    <li className="list-disc">Review Event Match Quality score and aim for 75% minimum</li>
                    <li className="list-disc">Use Meta's Event Setup Tool for proper event configuration</li>
                    <li className="list-disc">Test conversions using the Test Events feature before launching campaigns</li>
                  </ul>
                </div>

                <p className="text-[#5FA99F] font-semibold mt-4">
                  Common mistake: Optimizing for the wrong funnel stage. If you don't have 50 purchases per week, optimize for Add to Cart or View Content instead until you scale up.
                </p>
              </div>

            </div>
          </div>
        </ScrollFadeIn>

        {/* Quick Diagnostic Checklist */}
        <ScrollFadeIn as="section" className="mb-20">
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center mr-4">
                <span className="text-[#5FA99F] text-[1.25rem] sm:text-[1.5rem] font-bold">3</span>
              </div>
              <h2 className="text-white font-heading text-h2 font-bold">
                Quick Diagnostic Checklist
              </h2>
            </div>

            <div className="space-y-6 text-white text-body leading-relaxed">
              <p>
                When your ads aren't delivering, run through this checklist in order. Most delivery issues fall into one of these categories.
              </p>

              <div className="bg-[rgba(95,169,159,0.1)] border border-[#5FA99F] rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Check delivery status in Ads Manager (Learning, Active, Learning Limited, Restricted)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Verify payment method is current and charges aren't being declined</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Confirm pixel is firing correctly in Events Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Review audience size (need 50,000 minimum for stable delivery)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Check daily budget meets 5x cost per result minimum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Scan for policy violation warnings in Ads Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Test conversion tracking with a test purchase or lead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Review frequency metric (over 3.0 indicates creative fatigue)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Verify you're getting at least 50 optimization events per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5FA99F] mr-3 mt-1">☐</span>
                    <span>Confirm account spending limit hasn't been hit</span>
                  </li>
                </ul>
              </div>

              <p className="text-[#5FA99F] font-semibold">
                If you've checked all of these and ads still aren't delivering, the issue is likely with Meta's platform itself. Check Ad Status tracking for reported outages.
              </p>
            </div>
          </div>
        </ScrollFadeIn>

        {/* CTA Section */}
        <ScrollFadeIn as="section" className="mb-4">
          <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] rounded-3xl p-12 shadow-2xl text-center">
            <h2 className="text-white font-serif text-3xl font-bold mb-4">
              Still Having Delivery Issues?
            </h2>
            <p className="text-white text-body mb-6 max-w-2xl mx-auto">
              We audit Meta ad accounts daily for Atlanta businesses. We'll diagnose exactly why your ads aren't delivering and fix it so you stop wasting budget on campaigns that don't run.
            </p>
            <Link
              href="/book"
              className="inline-block bg-[#5FA99F] hover:bg-[#4A8A82] text-[#000000] px-10 py-5 rounded-xl font-bold text-body transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get a Free Account Audit
            </Link>
          </div>
        </ScrollFadeIn>

        {/* FAQ Section */}
        <CollapsibleFAQ
          items={[
            {
              question: "How long does the learning phase typically take?",
              answer: "The learning phase requires 50 optimization events within 7 days according to Meta's documentation. For most campaigns, this means 7-14 days if you're getting consistent conversions. However, if your budget is too low or audience too small to generate 50 events weekly, you'll stay stuck in learning phase or shift to Learning Limited status."
            },
            {
              question: "What is the minimum budget for Facebook ads in 2026?",
              answer: "Meta's technical minimum is 3 euros (approximately $3.25 USD) daily as of 2026. However, this doesn't mean your ads will deliver effectively. Meta recommends a daily budget of at least 5x your target cost per result, which typically means $25-50 minimum for most campaigns to generate enough conversions to exit learning phase."
            },
            {
              question: "Can I fix Learning Limited status?",
              answer: "Yes. Learning Limited happens when you're not getting 50 conversions per week. Fix it by consolidating multiple ad sets into one, widening your audience to increase reach, raising your budget to generate more conversions, or temporarily optimizing for a higher-funnel event (like Add to Cart instead of Purchase) until you have more budget to work with."
            },
            {
              question: "How do I know if my Facebook Pixel is working correctly?",
              answer: "Use two tools: Meta Pixel Helper (a Chrome extension) to verify the pixel fires on your pages, and the Test Events feature in Events Manager to confirm conversion events are being recorded. Your pixel should show Active status in Events Manager and have an Event Match Quality score of at least 75% for optimal performance. Consider implementing Conversions API alongside your pixel to recover the 20-30% of conversions lost to ad blockers and browser restrictions."
            },
            {
              question: "How often should I refresh my ad creative to avoid fatigue?",
              answer: "Refresh creative every 2-4 weeks for most ad accounts according to industry research. Accounts spending over $3,000 monthly need weekly creative refreshes. Watch for rising CPM and declining CTR as your warning signs. When frequency exceeds 3.0 and click-through rate drops 30% or more, your creative is fatigued and needs immediate replacement."
            }
          ]}
        />

        {/* Author Bio */}
        <AuthorBio author={post.author} />

        </div>
      </article>
    </main>
  );
}
