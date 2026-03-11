'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';
import { trackEvent } from '@/components/MetaPixel';
import { ImageObjectSchema } from '@/components/StructuredDataSchemas';

export default function InstagramReelsAdsPost() {
  const post = getPostBySlug('instagram-reels-ads-small-business-guide');

  useEffect(() => {
    trackEvent('ViewContent', {
      content_name: 'Instagram Reels Ads Small Business Guide',
      content_type: 'blog_post',
      content_category: 'Video Advertising'
    });
  }, []);

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  const faqItems = [
    {
      question: 'How much do Instagram Reels ads cost?',
      answer: 'Reels ads typically run at a higher CPM than static Feed ads, with Quimby Digital reporting Reels CPMs running 20-25% above static Feed placements as of 2025. You can start with as little as $5 per day, though most small businesses see better data with $20-30 per day minimum to give Meta enough signal to optimize delivery.'
    },
    {
      question: 'Do Reels ads perform better than Feed ads?',
      answer: 'It depends on your goal. Reels ads consistently outperform Feed ads on reach and engagement, with an average reach rate of 30.81% compared to 13-14% for photos and carousels (Teleprompter, 2025). For brand awareness and top-of-funnel traffic, Reels are currently the strongest placement. For direct conversion campaigns, Feed and Story placements still hold strong.'
    },
    {
      question: 'What is the best length for an Instagram Reels ad?',
      answer: 'Based on CreatorsJet\'s analysis of 500 viral Reels, videos between 7 and 15 seconds achieve the highest completion rates and shareability. The 15-30 second range is the widely cited sweet spot across multiple sources including Zeely AI, QuickFrame, and Prolific Studio. Avoid going over 60 seconds for ads since completion rates drop significantly past that threshold.'
    },
    {
      question: 'Can I run Reels ads without a video production team?',
      answer: 'Yes. Reels ads that mimic organic, user-generated content consistently outperform polished brand videos. A smartphone, good lighting, and a clear hook in the first two seconds is enough to get started. That said, if you want to run actor-led video ads at scale, having a production partner who understands the format is worth the investment.'
    },
    {
      question: 'Do I need a business account to run Reels ads?',
      answer: 'Yes. You need a Facebook Business Page connected to a Meta Business Manager account. From there, you create campaigns in Meta Ads Manager and select Instagram Reels as a placement. Your Instagram account must also be a professional account (business or creator) connected to your Business Manager.'
    },
    {
      question: 'What happens if I do not add audio to my Reels ad?',
      answer: 'Your reach will likely suffer. Instagram\'s algorithm favors Reels with audio, and most viewers watch with sound on by default in the Reels feed. Use original audio for brand consistency or a trending sound for organic discovery. Always add captions regardless, since some viewers do watch on mute.'
    },
    {
      question: 'Should I use Advantage+ Placements or manual placements for Reels?',
      answer: 'If your creative is formatted correctly for 9:16 vertical, Advantage+ Placements will include Reels automatically and often finds efficient delivery across placements. If you want to isolate Reels performance data or you have a specific Reels-only creative, switch to Manual Placements and check only Instagram Reels. Testing both approaches side by side is the most reliable way to know what works for your specific audience.'
    },
    {
      question: 'How do I know if my Reels ad is performing well?',
      answer: 'Track video completion rate (the percentage who watch through), CTR, and cost per result. A baseline CTR of 0.35% is typical for Reels ads according to Zeely AI, with strong performers reaching 0.5% and above. If your completion rate is below 25%, your hook likely needs work. If your CTR is strong but cost per lead is high, the landing page or offer needs attention.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <main className="blog-page min-h-screen bg-[#000000] relative">
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ImageObjectSchema
        url="/images/facebook-meta-ads-performance-metrics-analytics-chart.webp"
        caption="Meta Ads Manager performance metrics for Instagram Reels advertising"
        description="Meta Ads Manager dashboard showing Reels ad performance metrics including reach, engagement, and cost per result for small business campaigns"
        width={1200}
        height={630}
      />

      {/* Hero Section */}
      <motion.div
        className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/facebook-meta-ads-performance-metrics-analytics-chart.webp"
            alt="Meta Ads Manager performance metrics showing Instagram Reels ad results for small business advertising"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.7)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">Video Advertising</span>
            </div>
            <h1 className="font-heading text-h1 font-bold text-white leading-heading mb-6">
              Instagram Reels Ads: The Small Business Guide to Short-Form Video Advertising
            </h1>
            <p className="text-body-lg text-gray-300 font-body leading-relaxed mb-8">
              More than half of all Instagram ads now run on Reels. Here is what you need to know to run them well.
            </p>
          </div>
        </div>
      </motion.div>

      <Breadcrumbs category={post.category} postTitle={post.title} />

      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-body-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By Nicolas Leroo</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>11 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>February 2026</span>
            </div>
          </div>
        </div>
      </div>

      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">
          <div className="prose prose-invert prose-lg max-w-none">

            {/* Introduction */}
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="space-y-6">
                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    You log into Meta Ads Manager and see that your Feed ads are running fine. Decent reach, reasonable click costs. Then someone on your team asks: "Should we be running Reels ads?"
                  </p>
                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    The honest answer is yes, and the data behind it is significant. According to Sensor Tower data reported by CNBC, more than <strong>53% of all Instagram ads ran on Reels in Q4 2025</strong>, up from 35% just one year earlier. Reels now accounts for <strong>46% of all time spent on the Instagram app</strong> in the United States. That shift happened fast, and most small businesses have not caught up.
                  </p>
                  <p className="text-[#5FA99F] text-h3 font-semibold leading-[1.6]">
                    This guide covers exactly how Reels ads work, how they perform compared to other formats, and how to set up a campaign that actually moves the needle.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Image 1: Person scrolling Reels */}
            <div className="my-12">
              <div className="relative w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/instagram-reels-person-scrolling-smartphone-social-media.webp"
                  alt="Person scrolling Instagram Reels on a smartphone"
                  width={1000}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 500px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[500px] mx-auto px-4">
                Instagram Reels now accounts for 46% of all time spent on the app in the United States
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6 my-10">
              <h2 className="text-[#5FA99F] font-heading text-h3 font-normal mb-3">
                What You Will Learn
              </h2>
              <ul className="space-y-1 text-white text-[0.95rem]">
                <li>• Why Reels ads have become the dominant Instagram placement</li>
                <li>• How Reels ads perform vs Feed and Story formats</li>
                <li>• The exact specs required before you upload anything</li>
                <li>• A step-by-step setup walkthrough in Meta Ads Manager</li>
                <li>• What separates Reels ads that convert from ones that get skipped</li>
              </ul>
            </div>

            {/* Section 1 */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Why Reels Ads Matter Right Now
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Instagram Reels launched in 2020. For the first two years, most advertisers treated it as a secondary placement and kept budgets concentrated in the Feed. That made sense when Feed was where users spent most of their time.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              That calculus has changed. Reels now represents the largest single block of attention on the platform. More than <strong>2 billion people interact with Reels every month</strong>, and Meta reports that <strong>200 billion Reels are played across Instagram and Facebook each day</strong>. Reels content is also shared <strong>4.5 billion times per day through Direct Messages</strong>, according to DemandSage citing official Meta figures.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The advertising side has followed the attention. When 53% of Instagram ads are running on Reels, that means the platform's delivery system has identified Reels as where it finds efficient, engaged audiences. If you are not running Reels ads, you are working against that signal rather than with it.
            </p>

            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6 my-8">
              <h3 className="text-[#5FA99F] font-heading text-[1.2rem] font-semibold mb-3">
                By the Numbers
              </h3>
              <ul className="space-y-2 text-white text-body">
                <li>53% of Instagram ads ran on Reels in Q4 2025, up from 35% in Q4 2024 (CNBC, Sensor Tower)</li>
                <li>46% of US Instagram time is spent on Reels (CNBC, Sensor Tower)</li>
                <li>2 billion monthly Reels users (DemandSage, citing Meta)</li>
                <li>200 billion daily Reels plays across Instagram and Facebook (DemandSage, citing Meta)</li>
              </ul>
            </div>

            {/* Image 2: Small business owner filming */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/small-business-owner-filming-vertical-video-content.webp"
                  alt="Small business owner filming a vertical video for Instagram Reels on a smartphone"
                  width={2520}
                  height={1418}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Smartphone filming is all you need. Reels ads built on native-looking content consistently outperform polished productions in the Reels feed.
              </p>
            </div>

            {/* Section 2 */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              How Reels Ads Perform Compared to Other Formats
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Before spending money on any placement, it helps to know what the benchmarks look like. Here is what the data shows for Reels ads specifically.
            </p>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              Reach
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Reels consistently generate higher reach rates than static formats. Teleprompter reports an average organic reach rate of <strong>30.81% for Reels</strong>, compared to 13 to 14% for photos and carousels. For paid Reels ads, reach extends to an estimated <strong>675 to 758 million people globally</strong>, representing 11.6% of the world's adult population, according to Zeely AI citing Sprout Social and Statista data.
            </p>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              Engagement
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Zeely AI, citing Sprout Social research, reports that Reels ads generate a <strong>3.2% average engagement rate</strong> compared to 1.1% for static posts. Social Insider's 2025 Instagram benchmark report puts the overall Reels engagement rate at 0.50%, above the 0.45% for static images, with Reels driving the most comments of any format across nearly all account sizes. Influencer Reels specifically achieve a 2.08% engagement rate, outperforming carousels (1.7%) and photo posts (1.17%) according to Sprout Social citing Socialinsider data.
            </p>

            {/* Image 3: Analytics dashboard */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/social-media-analytics-performance-metrics-dashboard.webp"
                  alt="Social media analytics dashboard showing performance metrics and engagement data"
                  width={2249}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Reels consistently generate higher reach rates than static formats, averaging 30.81% reach compared to 13-14% for photos and carousels
              </p>
            </div>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              Cost
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Reels ads are not the cheapest placement. Quimby Digital reports that Reels ad CPMs run <strong>20 to 25% higher than static Feed ads</strong>, with overall Instagram CPMs up 10 to 15% versus 2024 due to increased demand in Reels and Story placements. You pay more per impression, but you are reaching people who are actively watching, not just scrolling past. The average CTR for Reels ads sits at roughly <strong>0.35%</strong>, with strong performers hitting <strong>0.5% and above</strong>, according to Zeely AI.
            </p>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl rounded-[16px] overflow-hidden">
                <thead>
                  <tr className="bg-[rgba(95,169,159,0.2)]">
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Metric</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Reels</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Static Photos</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Carousels</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">Average reach rate</td>
                    <td className="p-4 text-white">30.81%</td>
                    <td className="p-4 text-white">13-14%</td>
                    <td className="p-4 text-white">13-14%</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">Engagement rate</td>
                    <td className="p-4 text-white">0.50%</td>
                    <td className="p-4 text-white">0.45%</td>
                    <td className="p-4 text-white">0.55%</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">CPM vs Feed</td>
                    <td className="p-4 text-white">20-25% higher</td>
                    <td className="p-4 text-white">Baseline</td>
                    <td className="p-4 text-white">Similar to Feed</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">Typical CTR</td>
                    <td className="p-4 text-white">0.35% (0.5%+ top)</td>
                    <td className="p-4 text-white">Varies by industry</td>
                    <td className="p-4 text-white">Varies by industry</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">Comments generated</td>
                    <td className="p-4 text-white">Highest of any format</td>
                    <td className="p-4 text-white">Low</td>
                    <td className="p-4 text-white">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Sources: Social Insider 2025 Instagram Benchmarks, Teleprompter 2025, Zeely AI, Quimby Digital.
            </p>

            {/* Section 3 */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Reels Ads Specs: What You Need Before You Upload
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Getting the specs wrong is the most common first mistake. A video formatted for a landscape YouTube upload will be cropped and distorted in the Reels feed. Here is what Meta requires, sourced from QuickFrame citing official Meta guidelines.
            </p>

            <div className="space-y-4 mb-10">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Aspect Ratio</h3>
                <p className="text-white text-body leading-body">
                  9:16 vertical, full screen. This is non-negotiable for Reels. A 1:1 square or 16:9 landscape video will be letterboxed or cropped, which reduces visual impact and signals to the algorithm that your creative was not made for the placement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Resolution</h3>
                <p className="text-white text-body leading-body">
                  Minimum 1080 x 1080 pixels, with 1080 x 1920 recommended for full vertical quality. Anything below 1080p will look soft on modern phone screens and reflect poorly on the brand.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Video Length</h3>
                <p className="text-white text-body leading-body">
                  Meta allows up to 15 minutes for uploaded Reels. For ads specifically, keep it under 60 seconds. The research is clear: videos under 15 seconds achieve a 57% completion rate compared to a 36% completion rate for videos over 60 seconds, according to Prolific Studio. The sweet spot for ad performance is 15 to 30 seconds.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">File Format and Size</h3>
                <p className="text-white text-body leading-body">
                  .mp4 or .mov are the recommended file types. Maximum file size is 4 GB, though a typical 15 to 30 second ad should be well under 500 MB.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Audio</h3>
                <p className="text-white text-body leading-body">
                  Strongly recommended. Instagram's algorithm favors Reels with audio, and the Reels feed defaults to sound-on. Use original audio for brand consistency or a trending sound for organic discovery. Always add captions as well, since a portion of viewers still watch on mute.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border-l-4 border-[#5FA99F] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Caption Length</h3>
                <p className="text-white text-body leading-body">
                  Up to 2,200 characters. Use the first visible line (roughly 125 characters before the "more" truncation) to reinforce your hook and include searchable keywords. The caption also appears below the video in the Reels feed, so treat it as a supporting element rather than an afterthought.
                </p>
              </div>
            </div>

            {/* Image 4: Vertical filming setup */}
            <div className="my-12">
              <div className="relative w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/vertical-video-phone-filming-setup-content-creation.webp"
                  alt="Smartphone on a tripod set up for vertical video recording in portrait orientation"
                  width={1129}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 500px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[500px] mx-auto px-4">
                Always film in portrait mode. 9:16 vertical is the only format that fills the Reels screen without cropping or letterboxing.
              </p>
            </div>

            {/* Section 4 */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              How to Set Up a Reels Ad in Meta Ads Manager
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The setup process follows the same campaign structure as any Meta ad. The Reels placement is selected at the ad set level. Here are the steps, confirmed across Zeely AI, Buffer, and Madgicx documentation.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex gap-4 bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center text-[#D4A574] font-heading font-bold text-[1.1rem]">1</div>
                <div>
                  <h3 className="text-white text-[1.1rem] font-bold mb-2">Create a new campaign</h3>
                  <p className="text-white text-body leading-body">Log in to Meta Ads Manager at ads.facebook.com and click Create. Choose your campaign objective. For most small businesses, Leads or Traffic will be the starting point. Sales works well if you have a product catalog or a high-converting landing page with Pixel data already collected.</p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center text-[#D4A574] font-heading font-bold text-[1.1rem]">2</div>
                <div>
                  <h3 className="text-white text-[1.1rem] font-bold mb-2">Set your budget and schedule</h3>
                  <p className="text-white text-body leading-body">Set a daily budget at the campaign or ad set level. For Reels specifically, a minimum of $20 to $30 per day gives Meta enough daily impressions to optimize delivery. Running below $10 per day often means the campaign never exits the learning phase.</p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center text-[#D4A574] font-heading font-bold text-[1.1rem]">3</div>
                <div>
                  <h3 className="text-white text-[1.1rem] font-bold mb-2">Define your audience</h3>
                  <p className="text-white text-body leading-body">Set location, age range, gender, and interests at the ad set level. For local service businesses, a 15 to 25 mile radius around your primary location is a reasonable starting point. You can also use Custom Audiences (website visitors, video viewers, customer lists) or Lookalike Audiences to target people who resemble your existing customers.</p>
                </div>
              </div>
            </div>

            {/* Image 5: Laptop digital marketing setup */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/meta-ads-manager-campaign-setup-laptop-marketing.webp"
                  alt="Laptop showing digital marketing campaign setup on screen at a clean workspace"
                  width={2250}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Meta Ads Manager is where your campaign lives. Objective, budget, audience, placement, and creative are all configured at this interface.
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex gap-4 bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center text-[#D4A574] font-heading font-bold text-[1.1rem]">4</div>
                <div>
                  <h3 className="text-white text-[1.1rem] font-bold mb-2">Select your placement</h3>
                  <p className="text-white text-body leading-body">Under Placements, you have two options. Advantage+ Placements lets Meta distribute your budget across all available placements automatically, and it will include Reels if your creative is formatted correctly. Manual Placements lets you check specifically "Instagram Reels" to isolate that placement. If you want clean Reels-only data, use Manual Placements. If you want Meta to find the most efficient delivery across formats, use Advantage+.</p>
                </div>
              </div>

              <div className="flex gap-4 bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <div className="flex-shrink-0 w-10 h-10 bg-[rgba(212,165,116,0.2)] rounded-xl flex items-center justify-center text-[#D4A574] font-heading font-bold text-[1.1rem]">5</div>
                <div>
                  <h3 className="text-white text-[1.1rem] font-bold mb-2">Upload your creative and set the ad details</h3>
                  <p className="text-white text-body leading-body">Upload your 9:16 vertical video. Write your caption, making sure the first line reinforces the hook in the video. Add a call-to-action button (Learn More, Sign Up, Book Now, Get Quote) and a destination URL. Submit for Meta review, which typically takes under 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              What Makes a Reels Ad Actually Work
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Getting the setup right is only half of it. The creative is what determines whether someone stops scrolling or keeps going. Here is what the data shows about Reels ad performance.
            </p>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              The Hook Has Three Seconds
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Up to <strong>50% of viewers drop off in the first three seconds</strong> of a Reels ad, according to OpusClip and Zeely AI citing behavioral data. This is not a small margin. If your video opens with a logo animation, a slow pan, or three seconds of establishing scenery, you have already lost half your audience before the message starts.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The hook needs to create a reason to keep watching before the viewer even registers the skip button. A direct question, a bold statement, a visual pattern interrupt, or an unexpected action in the frame all work better than a slow build. What does not work is anything that looks like a traditional TV commercial.
            </p>

            <div className="bg-gradient-to-r from-[#5FA99F]/20 to-[#85C7B3]/20 rounded-xl p-6 my-8">
              <p className="text-white text-body leading-body font-semibold mb-0">
                The standard hook framework: open with the problem or the result, not the introduction. Lead with what your viewer already cares about, not with who you are.
              </p>
            </div>

            {/* Image 6: Phone screen with engaging content */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/instagram-reels-engaging-content-phone-screen-hook.webp"
                  alt="Close-up of a person holding a smartphone watching engaging video content"
                  width={2250}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                50% of viewers drop off in the first three seconds. Your hook needs to create a reason to keep watching before the viewer even registers the skip button.
              </p>
            </div>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              Video Length and Completion Rate
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              CreatorsJet analyzed 500 viral Instagram Reels and found that videos between <strong>7 and 15 seconds</strong> achieved the highest average completion rates and shareability. Prolific Studio corroborates this with data showing that videos under 15 seconds achieve a <strong>57% completion rate</strong> compared to a 36% completion rate for videos over 60 seconds.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              The 15 to 30 second range is where most ad practitioners land. It gives enough time to communicate a problem and a solution without losing the audience to drop-off. If you are running a more complex offer that requires explanation, 30 to 45 seconds can work if the first five seconds are compelling enough to justify it.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl rounded-[16px] overflow-hidden">
                <thead>
                  <tr className="bg-[rgba(95,169,159,0.2)]">
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Video Length</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Best For</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Completion Rate Signal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">7-15 seconds</td>
                    <td className="p-4 text-white">Brand awareness, retargeting, event promotion</td>
                    <td className="p-4 text-white">Highest (57% completion under 15s)</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">15-30 seconds</td>
                    <td className="p-4 text-white">Lead generation, service explanation, demos</td>
                    <td className="p-4 text-white">Strong, recommended sweet spot</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">30-60 seconds</td>
                    <td className="p-4 text-white">Complex offers, before/after, testimonials</td>
                    <td className="p-4 text-white">Acceptable if hook is strong</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-semibold">60+ seconds</td>
                    <td className="p-4 text-white">Rarely effective for cold audiences</td>
                    <td className="p-4 text-white">36% completion average (Prolific Studio)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Image 7: Video editing workspace */}
            <div className="my-12">
              <div className="relative w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/video-editing-content-creation-laptop-workspace.webp"
                  alt="Person editing a short-form video on a laptop at a content creation workspace"
                  width={1071}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 500px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[500px] mx-auto px-4">
                Editing for Reels is a different discipline than broadcast. Tight cuts, on-screen text, and a clear narrative arc within 30 seconds.
              </p>
            </div>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              Native-Looking Creative Outperforms Polished Brand Videos
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Reels ads that look like organic Reels consistently outperform polished brand productions in the Reels feed. This is not a reason to skip production quality entirely, but it is a reason to avoid the visual cues that signal "this is an ad." Static branded intros, lower-third text overlays, music-bed style audio, and B-roll montages are all signals that trained viewers to skip. Content that opens in the middle of something happening, uses natural speech patterns, and shows a real result or moment tends to hold attention longer.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Actor-led videos, in particular, perform well in this format because a real person speaking directly to the camera matches the visual language of the feed. The viewer's brain processes it the same way it processes a friend talking, which is a harder signal to dismiss than a polished advertisement.
            </p>

            <h3 className="text-[#5FA99F] font-heading text-h3 font-semibold mt-8 mb-4">
              What to Track After You Launch
            </h3>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Three metrics tell you most of what you need to know in the first 5 to 7 days of a Reels campaign:
            </p>

            <div className="space-y-4 mb-10">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Video Completion Rate</h3>
                <p className="text-white text-body leading-body">If completion rate is below 25%, the hook is not working. Meta Ads Manager breaks this down into ThruPlays (the percentage of viewers who watched to 97% completion or 15 seconds, whichever is shorter). A low ThruPlay rate relative to impressions is a signal to test a different opening.</p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Click-Through Rate (CTR)</h3>
                <p className="text-white text-body leading-body">The baseline for Reels ads is approximately 0.35%. If you are seeing 0.5% or above, the creative is connecting with the audience. If you are under 0.2%, either the offer is not compelling or the audience targeting needs adjustment.</p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-white text-[1.2rem] font-bold mb-2">Cost Per Result</h3>
                <p className="text-white text-body leading-body">This is your north star metric. Strong CTR and completion rate mean nothing if the cost per lead or cost per purchase is above your target. If CTR is healthy but cost per result is high, the problem is usually the landing page or the offer, not the Reels ad itself.</p>
              </div>
            </div>

            {/* Image 8: Business owner reviewing results */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/business-owner-reviewing-ad-results-laptop-success.webp"
                  alt="Business owner reviewing Instagram Reels ad campaign results on a laptop"
                  width={2250}
                  height={1500}
                  className="w-full h-auto"
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-body-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Track video completion rate, CTR, and cost per result. These three metrics tell you most of what you need to know in the first 5-7 days of a Reels campaign.
              </p>
            </div>

            {/* Bottom Line */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-6">
              Reels ads have moved from a secondary placement to the dominant format on Instagram in roughly 24 months. With 53% of Instagram ads running on Reels, 46% of app time spent there, and reach rates more than double what static posts generate, the question is no longer whether you should be running Reels ads. The question is whether your creative is formatted and structured to compete in that feed.
            </p>

            <p className="text-gray-300 font-body text-body leading-relaxed mb-8">
              The barriers are lower than most people expect. You do not need a large production budget. You need a vertical video, a strong hook in the first three seconds, a clear offer, and a destination that matches what the ad promises. Start with 15 to 30 seconds, test two to three hooks, and let the completion rate data tell you what is working.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[24px] p-8 my-12 text-center shadow-2xl hover:border-[#5FA99F]/60 transition-all duration-300"
            >
              <h3 className="text-white font-heading text-[1.6rem] font-bold mb-4">
                Want Actor-Led Reels Ads Built for Your Business?
              </h3>
              <p className="text-gray-300 text-body mb-6 max-w-[550px] mx-auto">
                We write, produce, and manage Meta ad campaigns for small businesses. No filming required on your end.
              </p>
              <Link
                href="/book"
                className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-8 py-4 rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300"
              >
                Schedule a Free Strategy Call
              </Link>
            </motion.div>

            {/* Related Resources */}
            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6 my-10">
              <h3 className="text-[#5FA99F] font-heading text-h3 font-normal mb-3">
                Continue Learning
              </h3>
              <ul className="space-y-2 text-white text-[1rem]">
                <li>
                  <Link href="/blog/meta-ads-target-audience-guide" className="text-[#5FA99F] underline hover:text-gray-300">
                    Meta Ads Target Audience Guide: Stop Wasting Money
                  </Link>
                </li>
                <li>
                  <Link href="/blog/boosted-posts-vs-targeted-ads" className="text-[#5FA99F] underline hover:text-gray-300">
                    Boosted Posts vs Targeted Ads: Why That Blue Button Is Costing You Money
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="text-[#5FA99F] underline hover:text-gray-300">
                    How Much Do Facebook Ads Cost in Atlanta?
                  </Link>
                </li>
                <li>
                  <Link href="/blog/why-meta-ads-need-landing-pages" className="text-[#5FA99F] underline hover:text-gray-300">
                    Why Your Meta Ads Need a Dedicated Landing Page
                  </Link>
                </li>
                <li>
                  <Link href="/resources/meta-ads-calculator" className="text-[#5FA99F] underline hover:text-gray-300">
                    Free Meta Ads ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sources */}
            <div className="mt-10 pt-6 border-t border-[rgba(95,169,159,0.2)]">
              <p className="text-gray-300 text-[0.85rem] font-medium mb-2">Sources</p>
              <ul className="space-y-1 text-gray-400 text-[0.80rem]">
                <li>CNBC, "Most of Instagram's ads ran on Reels in 2025, data shows" (Sensor Tower data), January 2026</li>
                <li>eMarketer, "Reels carries over half of all Instagram ad load"</li>
                <li>DemandSage, "How Many Reels Are There on Instagram (2026 Stats)" citing official Meta figures</li>
                <li>Social Insider, Instagram Benchmarks 2025</li>
                <li>Sprout Social, "Instagram Statistics Marketers Should Know" (citing Socialinsider)</li>
                <li>Zeely AI, "Instagram Reels Ads in 2026: Benchmarks, Strategy, and Practices" (citing Sprout Social, Statista)</li>
                <li>Quimby Digital, "Instagram Advertising Costs in 2025"</li>
                <li>Teleprompter, "2025 Instagram Reels Statistics"</li>
                <li>CreatorsJet, "Best Instagram Reel Length for Engagement Based on 500 Viral Videos"</li>
                <li>Prolific Studio, "Instagram Video Length"</li>
                <li>QuickFrame (Mountain), "Instagram Video Ad Specs and Placements Guide" (citing Meta official guidelines)</li>
                <li>OpusClip, "Instagram Reels Hook Formulas"</li>
                <li>Hootsuite, "Instagram Reels for Business: Best Practices"</li>
                <li>Madgicx, Buffer, Zeely AI, setup process steps</li>
              </ul>
            </div>
          </div>

          <CollapsibleFAQ items={faqItems} />
          <AuthorBio author={post.author} />

          <div className="mt-12 pt-8 border-t border-[rgba(95,169,159,0.2)]">
            <Link
              href="/blog"
              className="text-[#5FA99F] hover:text-gray-300 transition-colors inline-flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
