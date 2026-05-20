import ScrollFadeIn from '@/components/blog/ScrollFadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';

export default function GetCitedChatGptAiOverviewsPost() {
  const post = getPostBySlug('get-cited-chatgpt-google-ai-overviews-atlanta');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  const faqItems = [
    {
      question: "What are Google AI Overviews?",
      answer: "Google AI Overviews are the AI-generated summaries that appear at the top of Google search results. They pull information from across the web and present a direct answer before the traditional blue links. As of January 2026, AI Overviews appear on 25.8% of all US Google searches, up from 6.49% in January 2025 (Semrush, 2026)."
    },
    {
      question: "How do I get my business cited in ChatGPT?",
      answer: "The most effective tactics are: write answer-first content with a direct 40 to 60 word answer at the top of every page, earn mentions on Reddit, Wikipedia, and industry forums (which now account for the majority of AI citations), keep your content updated within the last 30 days, and verify your Bing Places listing since ChatGPT uses Bing data heavily for local queries."
    },
    {
      question: "Does schema markup help me show up in AI search?",
      answer: "Not as much as you have probably been told. An Ahrefs study tracked 1,885 pages adding schema between August 2025 and March 2026 and found a 4.6% decline in Google AI Overview citations for the treated pages, with no meaningful lift on Google AI Mode or ChatGPT. Schema is still useful for traditional SEO and helps machines understand your content, but it is not the lever for AI citations that many agencies claim."
    },
    {
      question: "How long does it take to start appearing in AI search results?",
      answer: "Initial citations typically appear within 2 to 4 weeks of implementing answer-first content and improving third-party mentions. Sustained, high-volume citations usually develop over 2 to 3 months. This is faster than traditional SEO, which takes 3 to 6 months for measurable results."
    },
    {
      question: "Should I block GPTBot from crawling my site?",
      answer: "No, you should allow it. GPTBot is the crawler OpenAI uses to gather training data, and OAI-SearchBot is the real-time crawler that retrieves pages for ChatGPT search results. If you block these, your site cannot be cited. Allow them in your robots.txt and rely on copyright notices and usage terms if you have content protection concerns."
    },
    {
      question: "Will AI search replace Google search?",
      answer: "Not in the near term. Google still handles 73.7% of all online searches as of 2026, and AI Overviews appear within Google itself. The bigger shift is that 58.5% of US Google searches now end without a click (Semrush, 2025), meaning users get answers without visiting websites. The right move is to optimize for both traditional rankings and AI citation, not to choose one over the other."
    },
  ];

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
    <main className="blog-page min-h-screen bg-[#000000] relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

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
      <ScrollFadeIn className="relative w-full pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/atlanta-business-chatgpt-google-ai-overviews-citations.webp"
            alt="Atlanta business showing up in ChatGPT and Google AI Overviews search results with citation links"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.95)] via-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.7)]"></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">AI Search</span>
            </div>
            <h1 className="text-white font-heading text-h1 font-bold leading-[1.1] mb-4">
              How to Get Your Atlanta Business Cited in ChatGPT and Google AI Overviews
            </h1>
            <p className="text-gray-300 font-body text-body-lg leading-relaxed">
              AI search now covers 25.8% of Google queries. Here is what actually moves the needle, based on the latest Semrush and Ahrefs research.
            </p>
          </div>
        </div>
      </ScrollFadeIn>

      {/* Breadcrumbs */}
      <Breadcrumbs category={post.category} postTitle={post.title} />

      {/* Article Meta Info */}
      <div className="bg-[#000000] border-b border-[#5FA99F]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 font-body text-body-sm">
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
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Published May 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 lg:py-16">

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <ScrollFadeIn as="section" className="mb-20">
              <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] border border-[rgba(95,169,159,0.2)] rounded-[32px] p-6 sm:p-10 lg:p-12">
                <div className="space-y-6">
                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    Search has changed. When someone in Atlanta asks ChatGPT for the best pediatric dentist or types &quot;family law attorney near me&quot; into Google, they often get an answer at the top of the page instead of a list of blue links. That answer cites specific businesses. If your business is not one of them, you lose the click before the user ever scrolls.
                  </p>

                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    The good news: getting cited is not magic. There is a small set of things that actually work. The bad news: most of the advice circulating right now is wrong, including a lot of what agencies are selling.
                  </p>

                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    This is a short, no-fluff guide based on the most recent research from Semrush, Ahrefs, and Search Engine Land. The goal is to tell you what is actually moving the needle for Atlanta businesses in 2026, and what you should stop doing.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Section 1: What's actually happening */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                What Is Actually Happening in Search Right Now
              </h2>

              <div className="space-y-6 text-gray-300 font-body text-body leading-relaxed">
                <p>
                  Google AI Overviews launched in May 2024. In the 12 months that followed, coverage grew rapidly. According to Semrush&apos;s 10 million keyword study, AI Overview coverage went from 6.49% of US searches in January 2025 to 24.61% in July 2025, then settled at 25.8% by January 2026. Informational queries trigger them 39.4% of the time. E-commerce queries trigger them just 4%.
                </p>

                <p>
                  At the same time, <strong>58.5% of US Google searches now end without a click</strong> (Semrush, 2025). Users get the answer they need on the results page and never visit a website. When an AI Overview is present, the click-through rate on the top organic result drops to just 2.6%.
                </p>

                <div className="my-12 rounded-[16px] overflow-hidden">
                  <Image
                    src="/images/google-ai-overviews-coverage-growth-2026-chart.webp"
                    alt="Chart showing Google AI Overviews coverage growth from 6.49 percent in January 2025 to 25.8 percent of US searches by January 2026"
                    width={1200}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    height={675}
                    className="w-full h-auto"
                  />
                </div>

                <p>
                  Meanwhile, ChatGPT now has over 800 million weekly users and serves real-time search results through its OAI-SearchBot crawler. AI-referred sessions jumped 527% year over year in the first five months of 2025 (Marketing LTB, 2026). For local businesses, this means an entirely new surface where customers are finding service providers, and most Atlanta businesses are not optimized for it.
                </p>

                <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] rounded-r-[16px] p-6 my-8">
                  <p className="text-white font-body text-body leading-relaxed mb-0">
                    <strong>What this means for you:</strong> Showing up on page one of Google is no longer the finish line. You also need to be cited in the AI Overview at the top of that page, and in ChatGPT when someone asks it directly.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Section 2: Myth Buster */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                Why Most AI SEO Advice Is Wrong
              </h2>

              <div className="space-y-6 text-gray-300 font-body text-body leading-relaxed">
                <p>
                  Walk into any SEO agency in 2026 and you will hear the same pitch: add schema markup to your pages and you will start getting cited by AI. It sounds technical enough to be true. It is not.
                </p>

                <p>
                  In early 2026, Ahrefs published the largest controlled study on this question to date. They tracked <strong>1,885 web pages</strong> that added JSON-LD schema markup between August 2025 and March 2026, then compared their AI citation performance against a control group of similar pages. The results were not what most SEOs expected.
                </p>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-8">
                  <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-6">Ahrefs Schema Study Results (August 2025 to March 2026)</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[rgba(95,169,159,0.1)] pb-3">
                      <span className="text-gray-400">Google AI Overviews citation change</span>
                      <span className="text-white font-semibold">-4.6%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[rgba(95,169,159,0.1)] pb-3">
                      <span className="text-gray-400">Google AI Mode citation change</span>
                      <span className="text-white font-semibold">+2.4%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[rgba(95,169,159,0.1)] pb-3">
                      <span className="text-gray-400">ChatGPT citation change</span>
                      <span className="text-white font-semibold">+2.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Statistical significance</span>
                      <span className="text-white font-semibold">None</span>
                    </div>
                  </div>
                </div>

                <p>
                  Adding schema markup did not improve AI citations in any meaningful way, and in the case of Google AI Overviews, it slightly hurt them. Schema still has its uses for traditional search and entity recognition, but it is not the lever that gets you cited in 2026.
                </p>

                <p>
                  This is actually good news for small businesses. If schema markup were the answer, the agencies and large publishers with developer resources would have an insurmountable advantage. Since it is not, the playing field is much more level.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Section 3: What Actually Works */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                5 Things That Actually Get You Cited
              </h2>

              <div className="space-y-6 text-gray-300 font-body text-body leading-relaxed">
                <p>
                  Based on the most recent citation research, here are the five tactics with the strongest evidence behind them, ranked by impact.
                </p>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">1. Build third-party mentions on Reddit and Wikipedia</h3>
                      <p className="text-gray-400 text-[0.95rem]">Around 91% of information cited in AI responses comes from third-party sources rather than brand websites. Reddit alone accounts for roughly 40% of citations across major AI models. Wikipedia (13.15%) and Reddit (11.97%) together drive more than 25% of all ChatGPT citations in the US (5W Research, 2026). Translation: what others say about you matters more than what you say about yourself.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">2. Write answer-first content</h3>
                      <p className="text-gray-400 text-[0.95rem]">Place a direct 40 to 60 word answer at the very top of every page, ideally right under the H1. This single tactic has been shown to lift citation likelihood by up to 115%. AI models extract content the same way featured snippets work: a question framed as an H2, followed by a concise direct answer. Service pages that read like marketing copy never get cited. Pages that answer questions do.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">3. Update content every 30 days</h3>
                      <p className="text-gray-400 text-[0.95rem]">Content updated within the last 30 days receives 3.2x more AI citations than older material. This does not mean rewriting your homepage every month. It means systematically refreshing your top service pages, adding a current statistic, updating a year reference, or expanding an answer based on what customers have asked you recently.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">4. Verify your Bing Places listing</h3>
                      <p className="text-gray-400 text-[0.95rem]">ChatGPT uses Bing as its primary data source for local search. Businesses with a verified Bing Places listing and recent reviews rank 3 to 5 times higher in ChatGPT&apos;s local recommendations than competitors without one. This takes 20 minutes and most Atlanta businesses have never done it.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">5. Allow AI crawlers</h3>
                      <p className="text-gray-400 text-[0.95rem]">Check your robots.txt and make sure GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, and BingBot are all allowed. If any of these are blocked, your content cannot be cited by that platform. Many websites have inadvertently blocked these crawlers thinking they were protecting their content from AI training. They were actually disqualifying themselves from AI search.</p>
                    </div>
                  </div>
                </div>

                <div className="my-12 rounded-[16px] overflow-hidden">
                  <Image
                    src="/images/ai-search-citations-third-party-sources-breakdown.webp"
                    alt="Chart showing where AI search citations come from, with Reddit at 40 percent, Wikipedia at 13 percent, and third party sources accounting for 91 percent of total AI citations"
                    width={1200}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    height={675}
                    className="w-full h-auto"
                  />
                </div>

                <p>
                  Notice what is not on this list: schema markup, keyword density, meta descriptions, or paying for premium tools. The fundamentals are not technical. They are about creating content that AI models can extract and trust, and earning mentions on the platforms those models actually pull from.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Section 4: Atlanta Action Plan */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                Your Atlanta Action Plan for the Next 30 Days
              </h2>

              <div className="space-y-6 text-gray-300 font-body text-body leading-relaxed">
                <p>
                  Here is a realistic plan you can execute without hiring a full agency. Most Atlanta service businesses can finish this in 6 to 8 hours of focused work.
                </p>

                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">Week 1: Foundation</h3>
                      <p className="text-gray-400 text-[0.95rem]">Verify your Bing Places listing and confirm GPTBot, OAI-SearchBot, ClaudeBot, and BingBot are allowed in your robots.txt. Set up Google Business Profile if you have not already. These three steps alone will put you ahead of most of your local competition.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">Week 2: Answer-First Rewrites</h3>
                      <p className="text-gray-400 text-[0.95rem]">Identify your top 5 service pages. At the top of each, add a 40 to 60 word direct answer to the question someone is most likely asking when they land on that page. For a pediatric dentist, that might be: &quot;Yes, we accept new patients without a referral. Our office is located in Midtown Atlanta and we offer same-week appointments for ages 6 months through 18 years.&quot;</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">Week 3: Build Mentions</h3>
                      <p className="text-gray-400 text-[0.95rem]">Find the relevant subreddits for your industry and city, like r/Atlanta, r/AskAtlanta, or industry-specific communities. Do not spam. Answer questions genuinely. One thoughtful, helpful comment a week, with a mention of your business where it actually fits, will compound. Also pitch yourself for inclusion in roundup posts on local blogs and on industry comparison sites.</p>
                    </div>
                    <div>
                      <h3 className="text-white font-heading text-[1.2rem] font-semibold mb-3">Week 4: Test and Track</h3>
                      <p className="text-gray-400 text-[0.95rem]">Ask ChatGPT and Google&apos;s AI Mode the questions your customers ask. Note whether your business gets cited. If it does not, look at who is being cited and study what is different about their pages and their mentions. Run this test once a month going forward.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] border-l-4 border-[#5FA99F] rounded-r-[16px] p-6 my-8">
                  <p className="text-white font-body text-body leading-relaxed mb-0">
                    <strong>Realistic timeline:</strong> Expect your first citations to appear in 2 to 4 weeks. Consistent, high-volume citations typically take 2 to 3 months. This is faster than traditional SEO, which takes 3 to 6 months for measurable results.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Section 5: Final word */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                One Thing to Remember
              </h2>

              <div className="space-y-6 text-gray-300 font-body text-body leading-relaxed">
                <p>
                  The agencies and influencers selling complicated GEO frameworks and schema markup audits are mostly selling the same SEO services they always have, with new branding. The actual research from Ahrefs, Semrush, and Search Engine Land tells a simpler story.
                </p>

                <p>
                  Write content that answers questions directly. Get talked about on platforms AI models trust. Keep things fresh. Make sure the crawlers can actually reach you. Verify the local listings AI uses to recommend you.
                </p>

                <p>
                  That is the whole playbook for 2026. Anyone telling you it is more complicated than that is probably trying to sell you something.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Data Sources */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                Data Sources
              </h2>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8">
                <ul className="space-y-3 text-gray-400 font-body text-[0.95rem]">
                  <li>&#8226; <strong className="text-gray-300">Semrush (2026):</strong> 10 million keyword AI Overviews study tracking coverage growth from 6.49% in January 2025 to 25.8% in January 2026</li>
                  <li>&#8226; <strong className="text-gray-300">Semrush (2025):</strong> US zero-click search study showing 58.5% of searches end without a click</li>
                  <li>&#8226; <strong className="text-gray-300">Ahrefs (2026):</strong> Schema markup AI citations study tracking 1,885 pages between August 2025 and March 2026</li>
                  <li>&#8226; <strong className="text-gray-300">5W Research (2026):</strong> ChatGPT US citation source analysis showing Wikipedia at 13.15% and Reddit at 11.97% of citations</li>
                  <li>&#8226; <strong className="text-gray-300">Marketing LTB (2026):</strong> Generative Engine Optimization statistics report showing 527% YoY growth in AI-referred sessions</li>
                  <li>&#8226; <strong className="text-gray-300">Search Engine Land (2026):</strong> Coverage of AI search trends and Google AI Overview surge and pullback data</li>
                  <li>&#8226; <strong className="text-gray-300">ALM Corp (2026):</strong> Where people search online 2026 analysis showing Google holds 73.7% market share</li>
                  <li>&#8226; <strong className="text-gray-300">OpenAI Documentation (2026):</strong> GPTBot and OAI-SearchBot crawler specifications and robots.txt guidance</li>
                </ul>
              </div>
            </ScrollFadeIn>

            {/* FAQ Section */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <CollapsibleFAQ items={faqItems} />
            </ScrollFadeIn>

            {/* Continue Learning */}
            <ScrollFadeIn as="section" className="mb-16">
              <h2 className="text-white font-heading text-h2 font-bold mb-6">
                Continue Learning
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/seo-vs-meta-ads-atlanta" className="block bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 hover:border-[#5FA99F]/50 transition-colors no-underline">
                  <span className="text-[#5FA99F] font-heading text-body-sm uppercase tracking-wider">Platform Comparison</span>
                  <span className="block text-white font-heading text-[1.1rem] mt-2">SEO vs Meta Ads: Which Should Atlanta Businesses Invest In First?</span>
                </Link>
                <Link href="/blog/google-business-profile-optimization-atlanta" className="block bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 hover:border-[#5FA99F]/50 transition-colors no-underline">
                  <span className="text-[#5FA99F] font-heading text-body-sm uppercase tracking-wider">Local SEO</span>
                  <span className="block text-white font-heading text-[1.1rem] mt-2">How to Optimize Your Google Business Profile in 2026 (Atlanta Guide)</span>
                </Link>
                <Link href="/blog/meta-andromeda-algorithm-2026" className="block bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 hover:border-[#5FA99F]/50 transition-colors no-underline">
                  <span className="text-[#5FA99F] font-heading text-body-sm uppercase tracking-wider">Algorithm Updates</span>
                  <span className="block text-white font-heading text-[1.1rem] mt-2">The Meta Andromeda Algorithm Explained for 2026</span>
                </Link>
                <Link href="/blog/signs-atlanta-business-needs-new-website-2026" className="block bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[rgba(95,169,159,0.2)] rounded-[16px] p-6 hover:border-[#5FA99F]/50 transition-colors no-underline">
                  <span className="text-[#5FA99F] font-heading text-body-sm uppercase tracking-wider">Web Design</span>
                  <span className="block text-white font-heading text-[1.1rem] mt-2">7 Signs Your Atlanta Business Needs a New Website (2026 Checklist)</span>
                </Link>
              </div>
            </ScrollFadeIn>

            {/* Author Bio */}
            <AuthorBio author={post.author} />
          </div>
        </div>
      </article>
    </main>
  );
}
