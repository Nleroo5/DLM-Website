import ScrollFadeIn from '@/components/blog/ScrollFadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, generateBlogPostSchema } from '@/lib/blog-posts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import AuthorBio from '@/components/blog/AuthorBio';
import CollapsibleFAQ from '@/components/blog/CollapsibleFAQ';

export default function GoogleBusinessProfileOptimizationPost() {
  const post = getPostBySlug('google-business-profile-optimization-atlanta');

  if (!post) return null;

  const schemaData = generateBlogPostSchema(post);

  const faqItems = [
    {
      question: "How long does it take for Google Business Profile changes to show up?",
      answer: "Most edits to your Google Business Profile go live within 24 to 48 hours. Some changes, like a new business name or address, may take up to a week because Google manually reviews them to prevent spam. Photos typically appear within 24 hours. If an edit is rejected, Google will notify you through email or the GBP dashboard with a reason."
    },
    {
      question: "Is Google Business Profile free?",
      answer: "Yes. Google Business Profile is completely free to create, verify, and manage. There is no paid tier or premium version. You can add photos, respond to reviews, publish posts, and track analytics at no cost. Some third-party tools charge for advanced GBP management features, but the core platform from Google costs nothing."
    },
    {
      question: "How many Google reviews do I need to rank in the 3-pack?",
      answer: "There is no magic number, but data from Localo shows that businesses ranking in the top three positions on Google average about 47 reviews. More important than total count is consistency. Google weights recent reviews more heavily than older ones, so a steady flow of 2 to 4 reviews per month is more valuable than getting 50 reviews in one week and then nothing for six months."
    },
    {
      question: "Can I have a Google Business Profile without a physical storefront?",
      answer: "Yes. Service-area businesses like plumbers, landscapers, and mobile dog groomers can create a Google Business Profile without displaying a street address. Instead of listing your location, you define the areas you serve. Your business will still appear in local search results for those service areas, but your address will be hidden from the public."
    },
    {
      question: "How often should I post on Google Business Profile?",
      answer: "At least once per week. Businesses that post weekly keep their profile looking active, which signals to Google that the business is engaged and dependable. Posts can include updates, offers, events, or new photos. Profiles that go 30 or more days without a post have been shown to experience drops in visibility, according to multiple local SEO reports from 2025 and 2026."
    },
    {
      question: "What is the Google Maps 3-pack?",
      answer: "The Google Maps 3-pack (also called the Local Pack) is the group of three business listings that appears at the top of Google search results when someone makes a local search. For example, if someone in Atlanta searches 'dentist near me,' the 3-pack shows three dental practices with their ratings, hours, and a map. Appearing in this 3-pack is one of the most valuable positions in local search because it gets the majority of clicks."
    }
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
            src="/images/google-business-profile-optimization-atlanta-local-seo.webp"
            alt="Google Business Profile Optimization Guide for Atlanta Businesses"
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
              <span className="text-[#5FA99F] font-heading font-semibold text-body-sm tracking-[0.15em] uppercase">Local SEO</span>
            </div>
            <h1 className="text-white font-heading text-h1 font-bold leading-[1.1] mb-4">
              How to Optimize Your Google Business Profile in 2026 (Atlanta Guide)
            </h1>
            <p className="text-gray-300 font-body text-body-lg leading-relaxed">
              The step-by-step playbook for showing up in Google Maps, the local 3-pack, and AI search results. Built for Atlanta business owners who want more calls, more foot traffic, and more leads.
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
              <span>18 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Published March 2026</span>
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
                    If you run a business in Atlanta and you are not showing up on Google Maps, you are invisible to most of your potential customers. <strong>87% of consumers use Google to find local businesses, and 76% of people who search for something &quot;near me&quot; visit a business within 24 hours</strong> (Statista, Google/Ipsos). That is not a marketing trend. That is how people find and choose businesses right now.
                  </p>

                  <p className="text-gray-300 font-body text-body leading-relaxed">
                    Your Google Business Profile is the single most important free tool available to any local business. It controls how you appear in Google Maps, the local 3-pack, and increasingly in AI-generated search results. This guide walks you through exactly how to optimize it, step by step, with verified data and real strategies that work in 2026.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Table of Contents */}
            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-12">
              <h2 className="text-[#5FA99F] font-heading text-[1.5rem] font-normal mb-4">
                What You&apos;ll Learn
              </h2>
              <ul className="space-y-2 text-white text-[1rem]">
                <li>&#8226; Why Google Business Profile matters more than ever for Atlanta businesses</li>
                <li>&#8226; How Google decides which businesses appear in the local 3-pack</li>
                <li>&#8226; Step-by-step optimization for every section of your profile</li>
                <li>&#8226; How to get more Google reviews (and what to do with them)</li>
                <li>&#8226; The NAP consistency rule most businesses get wrong</li>
                <li>&#8226; Google Business Profile posts: what to publish and how often</li>
                <li>&#8226; Photos, Q&amp;A, and the details that separate page-one businesses from everyone else</li>
                <li>&#8226; How GBP fits into the bigger picture with your website and paid ads</li>
              </ul>
            </div>

            {/* Section: Why GBP Matters */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Why Google Business Profile Matters for Atlanta Businesses
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Atlanta is home to over 1.3 million small businesses across Georgia, according to the U.S. Small Business Administration. That is a lot of competition for local attention. When someone in Buckhead searches &quot;best dentist near me&quot; or a Decatur homeowner looks up &quot;plumber open now,&quot; Google does not show them a list of 500 options. It shows three.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Those three businesses in the Google Maps 3-pack get the vast majority of clicks and calls. According to Whitespark&apos;s 2026 Local Search Ranking Factors report, Google Business Profile signals account for 32% of what determines which businesses appear in the local pack. That makes your GBP the single biggest lever you can pull for local visibility.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Here are the numbers that make the case:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">46% of all Google searches have local intent</p>
                <p className="text-white text-body leading-body">
                  With Google processing an estimated 16 billion searches per day, that means over 7 billion daily searches are people looking for something nearby. (Google, Backlinko)
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">1.5 billion &quot;near me&quot; searches happen every month</p>
                <p className="text-white text-body leading-body">
                  That is 50 million local searches every single day. And these are not casual browsers. 76% of people who make a &quot;near me&quot; search visit a business within 24 hours. (Google/Ipsos)
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">Complete profiles get 4x more website visits</p>
                <p className="text-white text-body leading-body">
                  Fully verified and completed Google Business Profiles appear 80% more often in search results and generate 4 times more website visits, 12% more calls, and 10% more direction requests than incomplete profiles. (Localo)
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">80% of U.S. consumers search locally at least once a week</p>
                <p className="text-white text-body leading-body">
                  32% search daily. And with Google commanding 95.48% of mobile search market share, your Google Business Profile is where mobile users find you first. (StatCounter, SafariDigital)
                </p>
              </div>
            </div>

            {/* Google Maps 3-Pack Image */}
            <div className="my-12 rounded-[16px] overflow-hidden">
              <Image
                src="/images/google-maps-3-pack-local-search-results.webp"
                alt="Google Maps local 3-pack search results showing top three business listings for local search queries"
                width={1200}
                sizes="(max-width: 768px) 100vw, 1200px"
                height={801}
                className="w-full h-auto"
              />
            </div>

            {/* Section: How the 3-Pack Works */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              How Google Decides Who Shows Up in the Local 3-Pack
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Google has publicly stated that local search rankings depend on three factors: relevance, distance, and prominence. Understanding these is the foundation of everything else in this guide.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Relevance</h3>
                <p className="text-white text-body leading-body">
                  How well does your business match what someone is searching for? Google looks at your business categories, description, services, and even the content of your reviews to determine this. If you are a dentist in Midtown Atlanta but your profile just says &quot;healthcare,&quot; you are less relevant than the competitor who has &quot;cosmetic dentist&quot; as their primary category.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Distance</h3>
                <p className="text-white text-body leading-body">
                  How far is your business from the person searching? If someone in Sandy Springs searches for a coffee shop, Google is going to prioritize coffee shops near Sandy Springs over ones in Marietta. You cannot control where the searcher is, but you can make sure your address and service areas are accurate.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Prominence</h3>
                <p className="text-white text-body leading-body">
                  How well-known and reputable is your business? Google measures this through reviews (volume, rating, and recency), backlinks to your website, citations across the web, and general online presence. A business with 150 reviews and a 4.7 rating is going to outrank one with 8 reviews and a 3.9, all else being equal.
                </p>
              </div>
            </div>

            <p className="text-white text-body leading-relaxed mb-6">
              According to Whitespark&apos;s 2026 survey of 47 local SEO experts, the top ranking factors for the local pack are: primary GBP category (ranked #1), keywords in business title, proximity of the searcher, physical address in the city of search, and review signals. Eight of the top 10 ranking signals come directly from the Google Business Profile itself.
            </p>

            {/* Section: Step-by-Step Optimization */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Step-by-Step: How to Optimize Every Section of Your Profile
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Here is exactly what to do, section by section. If you already have a Google Business Profile, go through each step and make sure nothing is missing or outdated. If you do not have one yet, go to <strong>business.google.com</strong> and create one first.
            </p>

            {/* Step 1: Categories */}
            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">1. Choose the Right Primary Category</h3>

            <p className="text-white text-body leading-relaxed mb-6">
              Your primary category is the single most important field in your entire profile. Whitespark&apos;s 2026 data ranked it as the #1 local pack ranking factor with a score of 193 out of all 187 factors evaluated. Choosing the wrong primary category scored 176 as the most damaging negative factor.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Be as specific as possible. If you are a pediatric dentist, select &quot;Pediatric Dentist,&quot; not just &quot;Dentist.&quot; If you run a yoga studio, pick &quot;Yoga Studio,&quot; not &quot;Gym.&quot; Google offers thousands of categories, and specificity is what separates you from generic competitors.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              You can also add secondary categories for additional services. A chiropractor might add &quot;Sports Medicine Clinic&quot; and &quot;Physical Therapy Clinic&quot; as secondary categories. But your primary category should be your core service.
            </p>

            {/* Step 2: Business Description */}
            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">2. Write a Description That Works for Humans and Search</h3>

            <p className="text-white text-body leading-relaxed mb-6">
              You get 750 characters for your business description. Localo&apos;s data shows that 75% of businesses ranking in the top three positions on Google have filled in the description section, compared to under 40% for lower-ranked profiles.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Your description should include what you do, who you serve, and where you operate. Incorporate your key services and location naturally. Do not stuff keywords. Write it the way you would explain your business to someone at a networking event.
            </p>

            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(212,165,116,0.3)] rounded-[16px] p-6 my-8">
              <p className="text-[#5FA99F] text-[1.2rem] font-medium mb-3">Example description for an Atlanta business</p>
              <p className="text-white text-body leading-body">
                &quot;Village Pediatrics has been providing compassionate pediatric care to families in Sandy Springs and North Atlanta since 2012. Our board-certified pediatricians specialize in newborn care, well-child visits, same-day sick appointments, and adolescent medicine. We accept most major insurance plans and offer early morning and Saturday hours for working parents.&quot;
              </p>
            </div>

            {/* Step 3: Services & Products */}
            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">3. Add All Services and Products</h3>

            <p className="text-white text-body leading-relaxed mb-6">
              Google lets you list individual services with descriptions and prices. This is a relevance signal. If someone searches &quot;teeth whitening Sandy Springs&quot; and your dental practice lists teeth whitening as a service with a description, you are more relevant to that query than a competitor who left this section empty.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Make sure your services on Google match what is on your website. Multiple local SEO sources in 2025 and 2026 have noted that Google cross-references your GBP services with your website content. If your GBP says you do kitchen remodeling but your website does not mention it anywhere, that inconsistency works against you.
            </p>

            {/* Step 4: Hours & Attributes */}
            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">4. Set Accurate Hours and Business Attributes</h3>

            <p className="text-white text-body leading-relaxed mb-6">
              According to the Whitespark 2026 report, businesses that are open at the time of the search are more likely to rank higher. If your hours are wrong or missing, you could be invisible during your actual business hours.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              Update your hours for holidays, seasonal changes, and any temporary closures. Also fill in every applicable attribute: wheelchair accessibility, free Wi-Fi, outdoor seating, women-owned, LGBTQ-friendly, and whatever else applies to your business. These attributes show up directly in search results and help customers make faster decisions.
            </p>

            {/* Mid-article CTA */}
            <ScrollFadeIn className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 lg:p-12 my-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-white font-heading text-[1.8rem] sm:text-[2rem] font-bold mb-4">
                  Want Help Optimizing Your Google Presence?
                </h3>
                <p className="text-gray-300 text-body mb-6 max-w-[600px] mx-auto leading-relaxed">
                  We build fast websites, run targeted ads, and help Atlanta businesses show up where it matters. Let us take a look at your online presence and tell you what is working and what is not.
                </p>
                <Link
                  href="/book"
                  className="inline-block bg-gradient-to-r from-[#5FA99F] to-[#85C7B3] text-white px-8 py-4 rounded-xl font-heading font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(95,169,159,0.4)]"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </ScrollFadeIn>

            {/* Google Reviews Image */}
            <div className="my-12 rounded-[16px] overflow-hidden">
              <Image
                src="/images/google-reviews-customer-rating-stars.webp"
                alt="Google reviews and star ratings showing customer feedback impact on local business visibility and rankings"
                width={1200}
                sizes="(max-width: 768px) 100vw, 1200px"
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Section: Reviews */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Google Reviews: The Ranking Factor You Can Actually Control
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Reviews are one of the strongest signals Google uses to rank local businesses, and they are also the factor you have the most direct influence over. According to WiserReview&apos;s 2026 data, Google reviews have approximately a 20% impact on your local business visibility. Businesses ranking in the top three positions on Google average 47 reviews, compared to far fewer for lower-ranked competitors (Localo).
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              But it is not just about the number. Here is what actually matters:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl rounded-[16px] overflow-hidden">
                <thead>
                  <tr className="bg-[rgba(95,169,159,0.2)]">
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Review Factor</th>
                    <th className="text-left p-4 text-[#5FA99F] font-medium">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-medium">Volume</td>
                    <td className="p-4 text-white">More reviews build trust. Top-3 businesses average 47+ reviews. Businesses with 200+ reviews are more likely to appear in the top 3 on SERPs. (Localo)</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-medium">Recency</td>
                    <td className="p-4 text-white">73% of consumers only trust reviews written in the last month. Google also weights recent reviews more heavily than old ones. (WiserReview)</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-medium">Rating</td>
                    <td className="p-4 text-white">31% of consumers will only use a business with 4.5 stars or higher. An increase of just 0.5 stars can boost revenue by 20%. (WiserReview)</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-medium">Review Content</td>
                    <td className="p-4 text-white">Top-ranking businesses receive reviews averaging 350 words. Reviews that mention specific services help Google understand what you offer. (Localo)</td>
                  </tr>
                  <tr className="border-t border-[rgba(95,169,159,0.1)]">
                    <td className="p-4 text-white font-medium">Owner Responses</td>
                    <td className="p-4 text-white">Only 5% of businesses respond to reviews, despite 89% of consumers expecting a response. Responses averaging 140 words correlate with higher rankings. (WiserReview, Localo)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">How to Get More Reviews (Without Being Pushy)</h3>

            <p className="text-white text-body leading-relaxed mb-6">
              Google formalized direct review request links and QR codes in late 2025. You can now generate a link that takes customers directly to your review form. Here is how to use it effectively:
            </p>

            <ul className="space-y-3 text-white text-body leading-relaxed mb-8 ml-6">
              <li><strong>Ask at the moment of satisfaction.</strong> Right after a successful appointment, delivery, or purchase, that is when customers are most willing to leave a review. Do not wait a week to send a follow-up email.</li>
              <li><strong>Make it easy.</strong> Send your Google review link via text or email. Print a QR code and put it at your checkout counter, on receipts, or on follow-up cards.</li>
              <li><strong>Be specific in your ask.</strong> Instead of &quot;leave us a review,&quot; try &quot;Would you mind sharing what you thought about your experience with [specific service]?&quot; This naturally leads to more detailed, keyword-rich reviews.</li>
              <li><strong>Respond to every review.</strong> Thank positive reviewers by name. For negative reviews, acknowledge the concern and offer to resolve it offline. This shows future customers that you care, and it signals engagement to Google.</li>
            </ul>

            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(212,165,116,0.3)] rounded-[16px] p-6 my-8">
              <p className="text-[#5FA99F] text-[1.2rem] font-medium mb-3">What about negative reviews?</p>
              <p className="text-white text-body leading-body">
                Four negative reviews can drive away up to 70% of potential customers (WiserReview). But here is the good news: 44.6% of consumers will still engage with a business despite negative reviews if the owner responds thoughtfully. Never ignore a bad review. A professional, empathetic response often does more for your reputation than the negative review took away.
              </p>
            </div>

            {/* Section: NAP Consistency */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              NAP Consistency: The Detail Most Businesses Get Wrong
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              NAP stands for Name, Address, and Phone Number. It sounds simple, but inconsistent NAP data across the internet is one of the most common reasons businesses struggle to rank locally.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              According to multiple local SEO sources, businesses with consistent NAP data across major citation sources are 40% more likely to appear in the local pack. Google cross-references your business information across directories like Yelp, Yellow Pages, your local Chamber of Commerce, and hundreds of other sites. If your phone number is different on Yelp than it is on your Google Business Profile, that inconsistency hurts your credibility with Google.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              In January 2026, Google tightened its GBP verification requirements. Phone verification alone no longer works for most industries. Google now checks citation consistency before approving profiles and flags businesses with conflicting NAP data.
            </p>

            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">How to Fix Your NAP</h3>

            <ul className="space-y-3 text-white text-body leading-relaxed mb-8 ml-6">
              <li><strong>Start with Google.</strong> Make sure your name, address, and phone number on your Google Business Profile are exactly how you want them everywhere else.</li>
              <li><strong>Check the major directories.</strong> Yelp, Facebook, Yellow Pages, BBB, Apple Maps, Bing Places, and any industry-specific directories (Healthgrades for doctors, Avvo for lawyers, etc.).</li>
              <li><strong>Be exact.</strong> &quot;123 Peachtree St NE, Suite 200&quot; and &quot;123 Peachtree Street Northeast, Ste 200&quot; look the same to a human but not necessarily to a search engine. Pick one format and use it everywhere.</li>
              <li><strong>Do not forget your website.</strong> Your footer, contact page, and any location pages should use the exact same NAP as your Google Business Profile.</li>
            </ul>

            <p className="text-white text-body leading-relaxed mb-6">
              While citations now account for an estimated 7-10% of local pack ranking factors (down from 15-20% in previous years), they still matter. And in the era of AI search, citations are gaining importance as a verification layer. Whitespark&apos;s 2026 data shows that three of the top five ranking factors for AI visibility are related to citations.
            </p>

            {/* Section: Photos & Visual Content */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Photos and Visual Content: More Than a Nice-to-Have
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              According to Localo&apos;s analysis of top-ranking businesses, profiles in the top three positions maintain 250 or more images, compared to fewer than 200 for lower-ranked competitors. Photos are not just decoration. They are a ranking signal and a conversion driver.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              In 2026, visual search has evolved into a core ranking pillar for local businesses. Google is prioritizing profiles that offer immersive visual experiences, including 360-degree views and AR store tours for businesses that want to go the extra mile.
            </p>

            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">What Photos to Upload</h3>

            <ul className="space-y-3 text-white text-body leading-relaxed mb-8 ml-6">
              <li><strong>Cover photo.</strong> This is the first thing people see. Use a high-quality image of your storefront, team, or a signature product/service.</li>
              <li><strong>Interior and exterior shots.</strong> Help customers know what to expect when they walk in. This is especially important for restaurants, retail stores, and clinics.</li>
              <li><strong>Team photos.</strong> People want to see the humans behind the business. A team photo builds trust before a customer even contacts you.</li>
              <li><strong>Product and service photos.</strong> Show what you actually do. Before-and-after shots, completed projects, plated dishes, or finished designs all work well.</li>
              <li><strong>Customer interaction photos.</strong> Real photos of your team working with customers (with their permission) feel authentic and build confidence.</li>
            </ul>

            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(212,165,116,0.3)] rounded-[16px] p-6 my-8">
              <p className="text-[#5FA99F] text-[1.2rem] font-medium mb-3">Keep photos fresh</p>
              <p className="text-white text-body leading-body">
                Add new photos at least weekly. Multiple local SEO reports from 2025 and 2026 have shown that profiles with no updates in 30+ days experience drops in visibility. A quick phone photo of your team at work or a new product is better than no photo at all.
              </p>
            </div>

            {/* GBP Posts Image */}
            <div className="my-12 rounded-[16px] overflow-hidden">
              <Image
                src="/images/google-business-profile-posts-local-marketing.webp"
                alt="Business owner creating Google Business Profile posts for local marketing and customer engagement"
                width={1200}
                sizes="(max-width: 768px) 100vw, 1200px"
                height={801}
                className="w-full h-auto"
              />
            </div>

            {/* Section: GBP Posts */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Google Business Profile Posts: Free Marketing Most Businesses Ignore
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Google lets you publish short updates directly to your Business Profile. These posts appear in your listing when someone finds your business on Google Search or Maps. Think of them as mini social media posts, but they show up right when potential customers are deciding whether to call you or your competitor.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              While GBP posts do not directly change your ranking position, they influence engagement signals like click-through rates, calls, and direction requests, which Google does factor into rankings. More importantly, posting regularly signals to Google that your business is active and dependable.
            </p>

            <h3 className="text-[#5FA99F] text-h3 font-medium mt-8 mb-4">What to Post</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">Offers and promotions</p>
                <p className="text-white text-body leading-body">
                  Running a special this month? Post it. &quot;20% off first visit&quot; or &quot;Free consultation for new patients&quot; gives people a reason to choose you right now.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">Updates and news</p>
                <p className="text-white text-body leading-body">
                  New team member? Extended hours? Just finished a big project? These updates keep your profile looking alive and give Google fresh content to index.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">Events</p>
                <p className="text-white text-body leading-body">
                  Hosting an open house, workshop, or community event? Event posts include dates and call-to-action buttons that drive direct engagement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">Educational content</p>
                <p className="text-white text-body leading-body">
                  Quick tips related to your industry. A dentist might post about flossing technique. A landscaper might share seasonal lawn care advice. This positions you as the expert.
                </p>
              </div>
            </div>

            <p className="text-white text-body leading-relaxed mb-6">
              Aim for at least one post per week. For single-location businesses, one to three posts per week is the sweet spot. Monday could be a service spotlight, Thursday a promotion or tip, and the weekend could be a behind-the-scenes update.
            </p>

            {/* Section: Q&A */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              The Q&amp;A Section: Seed It Before Your Competitors Do
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Your Google Business Profile has a Q&amp;A section where anyone can ask and answer questions about your business. The problem is that if you do not manage it, random people (or competitors) will answer for you.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              In 2026, this section is even more important because Google&apos;s AI features (including &quot;Ask Maps&quot; powered by Gemini) pull information from your Q&amp;A to generate conversational answers for searchers. Seed your Q&amp;A with real questions your customers ask, and provide detailed, helpful answers.
            </p>

            <ul className="space-y-3 text-white text-body leading-relaxed mb-8 ml-6">
              <li><strong>Add your own questions.</strong> Think about the 5 to 10 questions your front desk or sales team answers every week. &quot;Do you accept walk-ins?&quot; &quot;Is parking available?&quot; &quot;Do you offer financing?&quot; Post these and answer them yourself.</li>
              <li><strong>Use customer language.</strong> Write questions and answers the way real people talk, not in marketing jargon. This helps Google&apos;s AI better match your answers to voice and conversational searches.</li>
              <li><strong>Monitor it regularly.</strong> Set a reminder to check your Q&amp;A at least once a week. Answer new questions quickly and flag any inappropriate or spam questions for removal.</li>
            </ul>

            {/* Section: AI and GBP */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              AI Search Is Changing the Game for Local Businesses
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              As of late 2025, Google began replacing its manual &quot;ask a question&quot; feature with &quot;Ask Maps,&quot; where Gemini (Google&apos;s AI) scans your profile, website, and reviews to generate instant, conversational answers. According to recent data, 40.16% of local business queries now trigger Google&apos;s AI Overviews, and 78% of consumers now discover local businesses through AI-generated recommendations rather than traditional search results.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              This means your Google Business Profile is no longer just a listing. It is the source material that AI uses to decide whether or not to recommend your business. The businesses with the most complete, consistent, and well-reviewed profiles are the ones AI will surface.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              To position your business for AI search:
            </p>

            <ul className="space-y-3 text-white text-body leading-relaxed mb-8 ml-6">
              <li><strong>Complete every field.</strong> AI needs data to work with. Empty fields mean missed opportunities to be recommended.</li>
              <li><strong>Keep your website and GBP aligned.</strong> AI cross-references both. Mismatches in services, hours, or contact information confuse the algorithm.</li>
              <li><strong>Focus on detailed reviews.</strong> AI reads review content to understand what your business is known for. Longer, more specific reviews give AI more to work with.</li>
              <li><strong>Maintain citations.</strong> Whitespark&apos;s 2026 data shows that three of the top five AI visibility factors are related to citations. Consistent mentions of your business across the web build the trust signals AI relies on.</li>
            </ul>

            {/* Section: The Full Stack */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              GBP + Website + Ads: The Full Local Marketing Stack
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Your Google Business Profile does not work in isolation. It is most powerful when it is part of a connected local marketing system.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Your website</h3>
                <p className="text-white text-body leading-body">
                  Your GBP links directly to your website. When someone clicks through from your Google listing, your website needs to load fast, look professional, and make it easy to take the next step (call, book, fill out a form). A slow or outdated website undoes all the work your GBP is doing to get people there. If you are curious about website options, our <Link href="/blog/atlanta-business-website-cost-2026" className="text-[#5FA99F] underline hover:text-gray-300">Atlanta business website cost guide</Link> breaks down pricing for every option.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Meta (Facebook and Instagram) ads</h3>
                <p className="text-white text-body leading-body">
                  GBP captures people who are already searching for what you offer. Meta ads let you reach people who are not searching yet but match your ideal customer profile. Together, you cover both intent-based search and awareness-based discovery. For a deeper look at how this works, check out our <Link href="/blog/facebook-ads-atlanta-guide" className="text-[#5FA99F] underline hover:text-gray-300">complete guide to Facebook ads for Atlanta businesses</Link>.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Consistent branding</h3>
                <p className="text-white text-body leading-body">
                  Your GBP, website, social media, and directory listings should all tell the same story. Same name, same phone number, same services, same visual identity. Consistency builds trust with both customers and search algorithms.
                </p>
              </div>
            </div>

            {/* Section: Common Mistakes */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              7 Common Google Business Profile Mistakes Atlanta Businesses Make
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">1. Choosing a generic primary category</p>
                <p className="text-white text-body leading-body">
                  Selecting &quot;Restaurant&quot; instead of &quot;Mexican Restaurant&quot; or &quot;Doctor&quot; instead of &quot;Dermatologist.&quot; Specificity matters for relevance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">2. Leaving the description and services empty</p>
                <p className="text-white text-body leading-body">
                  60%+ of lower-ranked businesses have empty descriptions. Fill in every field.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">3. Not responding to reviews</p>
                <p className="text-white text-body leading-body">
                  95% of businesses do not respond to reviews. That is a massive missed opportunity for engagement and trust.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">4. Inconsistent NAP across the web</p>
                <p className="text-white text-body leading-body">
                  Your phone number on Yelp differs from your GBP, which differs from your website footer. Pick one format and use it everywhere.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">5. Never posting updates</p>
                <p className="text-white text-body leading-body">
                  A profile with no posts looks abandoned. Google notices, and so do potential customers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">6. Wrong or outdated business hours</p>
                <p className="text-white text-body leading-body">
                  A customer shows up during what they think are your hours, only to find you closed. That is a one-star review waiting to happen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <p className="text-[#5FA99F] text-body font-medium mb-2">7. Only asking for reviews once</p>
                <p className="text-white text-body leading-body">
                  Getting 30 reviews in your first month and then never asking again. Recency matters. A steady flow of 2 to 4 reviews per month is more valuable than a one-time push.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <CollapsibleFAQ items={faqItems} />

            {/* Final CTA Section */}
            <h2 className="text-white font-heading text-h2 font-bold mt-12 mb-6">
              Start Showing Up Where Atlanta Customers Are Looking
            </h2>

            <p className="text-white text-body leading-relaxed mb-6">
              Your Google Business Profile is the front door to your business for most local customers. Optimizing it is not complicated, but it does take consistency. Fill out every field. Get reviews every week. Post updates. Keep your information consistent across the web. Do those things, and you are already ahead of most businesses in Atlanta.
            </p>

            <p className="text-white text-body leading-relaxed mb-6">
              But your GBP is just one piece of the puzzle. The businesses that dominate local search in 2026 are the ones that combine an optimized Google profile with a fast website and targeted advertising. When all three are working together, you are not just showing up in search results. You are the obvious choice.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Do It Yourself</h3>
                <p className="text-white text-body leading-body mb-4">
                  Follow this guide step by step. Set aside 30 minutes a week for GBP management, and you will see improvement within 60 to 90 days.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-6">
                <h3 className="text-[#5FA99F] text-h3 font-medium mb-3">Let Us Help</h3>
                <p className="text-white text-body leading-body mb-4">
                  We are Drive Lead Media, an Atlanta agency that builds fast websites and runs targeted Meta ad campaigns. We will audit your online presence and show you exactly where you are losing visibility.
                </p>
                <Link href="/book" className="text-[#5FA99F] underline">Book a free strategy call</Link>
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#1A1A1A]/40 backdrop-blur-xl border border-[rgba(95,169,159,0.3)] rounded-[16px] p-8 my-12">
              <h3 className="text-[#5FA99F] font-heading text-[1.5rem] font-normal mb-4">
                Continue Learning
              </h3>
              <ul className="space-y-3 text-white text-lg">
                <li>
                  <Link href="/blog/atlanta-business-website-cost-2026" className="text-[#5FA99F] underline hover:text-gray-300">
                    How Much Does a Business Website Cost in Atlanta? (2026 Guide)
                  </Link>
                </li>
                <li>
                  <Link href="/blog/facebook-ads-atlanta-guide" className="text-[#5FA99F] underline hover:text-gray-300">
                    Facebook Ads Atlanta: Complete Guide for Local Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/blog/facebook-ads-vs-google-ads-atlanta" className="text-[#5FA99F] underline hover:text-gray-300">
                    Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses?
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-[#5FA99F] underline hover:text-gray-300">
                    View Our Portfolio and Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Data Sources */}
            <div className="mt-12 pt-8 border-t border-[rgba(95,169,159,0.2)]">
              <p className="text-gray-300 text-[0.9rem] font-medium mb-2">Data Sources:</p>
              <ul className="text-white text-[0.875rem] opacity-70 space-y-1">
                <li>&#8226; Whitespark -- 2026 Local Search Ranking Factors Report (survey of 47 local SEO experts, 187 factors)</li>
                <li>&#8226; Localo -- Google Business Profile ranking data and profile completion analysis</li>
                <li>&#8226; Statista -- Consumer search behavior surveys (87% use Google for local businesses)</li>
                <li>&#8226; Google/Ipsos -- &quot;Near me&quot; search behavior study (76% visit within 24 hours)</li>
                <li>&#8226; WiserReview -- 2026 Google Review Statistics (20 data points on review impact)</li>
                <li>&#8226; StatCounter -- Global and U.S. search engine market share data (March 2026)</li>
                <li>&#8226; Backlinko -- Local SEO statistics (46% local intent, 1.5B near me searches)</li>
                <li>&#8226; SafariDigital -- Local SEO statistics (80% weekly local search frequency)</li>
                <li>&#8226; Birdeye -- State of Google Business Profiles 2025 report</li>
                <li>&#8226; U.S. Small Business Administration -- 2025 Georgia Small Business Profile</li>
                <li>&#8226; Google -- Official Google Business Profile documentation and support pages</li>
              </ul>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio author={post.author} />

          {/* Back to Blog Link */}
          <div className="mt-12 pt-8 border-t border-[rgba(95,169,159,0.2)]">
            <Link
              href="/blog"
              className="text-[#5FA99F] hover:text-gray-300 transition-colors inline-flex items-center gap-2"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
