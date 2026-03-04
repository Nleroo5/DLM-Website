'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NicolasLerooPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nicolas Leroo",
    "givenName": "Nicolas",
    "familyName": "Leroo",
    "jobTitle": "Co-Founder & Meta Advertising Strategist",
    "url": "https://driveleadmedia.com/about/nicolas-leroo",
    "image": "https://driveleadmedia.com/images/nicolas-leroo-atlanta-digital-marketing-agency-founder.webp",
    "description": "Meta Blueprint Certified advertising strategist specializing in Facebook and Instagram campaigns for healthcare practices and local service businesses in Atlanta. Expert in custom website design, landing page optimization, and conversion-focused digital marketing.",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://driveleadmedia.com/#organization",
      "name": "Drive Lead Media",
      "url": "https://driveleadmedia.com"
    },
    "foundingDate": "2021",
    "knowsAbout": [
      "Meta Advertising",
      "Facebook Advertising",
      "Instagram Advertising",
      "Meta Andromeda Algorithm",
      "Facebook Ads Manager",
      "Meta Pixel Implementation",
      "Conversion Tracking",
      "Custom Website Design",
      "Landing Page Optimization",
      "Web Development",
      "Next.js Development",
      "React Development",
      "Healthcare Marketing",
      "Local Business Marketing",
      "Conversion Rate Optimization",
      "Digital Marketing Strategy",
      "Pay-Per-Click Advertising",
      "Social Media Advertising",
      "Marketing Analytics",
      "Customer Acquisition",
      "Lead Generation",
      "Atlanta Digital Marketing"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Meta Blueprint Certified",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Meta (Facebook)"
        }
      }
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Digital Marketing Strategist",
      "occupationLocation": {
        "@type": "City",
        "name": "Atlanta",
        "containedIn": {
          "@type": "State",
          "name": "Georgia"
        }
      },
      "skills": [
        "Meta Advertising",
        "Facebook Ads Campaign Management",
        "Instagram Ads Optimization",
        "Meta Pixel Setup & Tracking",
        "Landing Page Design",
        "Conversion Rate Optimization",
        "Web Development",
        "Digital Marketing Strategy"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/in/nicolas-leroo",
      "https://www.linkedin.com/company/drive-lead-media"
    ],
    "author": [
      {
        "@type": "Article",
        "name": "Meta's Andromeda Algorithm Explained (2026)",
        "url": "https://driveleadmedia.com/blog/meta-andromeda-algorithm-2026"
      },
      {
        "@type": "Article",
        "name": "Why Your Facebook Ads Aren't Delivering (2026): 12 Reasons & Fixes",
        "url": "https://driveleadmedia.com/blog/facebook-ads-not-delivering-2026"
      },
      {
        "@type": "Article",
        "name": "How to Set Up Facebook Pixel: Complete 2025 Guide",
        "url": "https://driveleadmedia.com/blog/how-to-set-up-facebook-pixel"
      },
      {
        "@type": "Article",
        "name": "How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)",
        "url": "https://driveleadmedia.com/blog/how-much-do-facebook-ads-cost-atlanta"
      },
      {
        "@type": "Article",
        "name": "Boosted Posts vs Targeted Ads: The Truth About What Works (2025)",
        "url": "https://driveleadmedia.com/blog/boosted-posts-vs-targeted-ads"
      },
      {
        "@type": "Article",
        "name": "How to Tell If Your Facebook Ads Are Working: 5 Key Metrics (2025)",
        "url": "https://driveleadmedia.com/blog/how-to-tell-if-facebook-ads-working"
      },
      {
        "@type": "Article",
        "name": "How to Create Facebook Ads: Complete Step-by-Step Guide (2025)",
        "url": "https://driveleadmedia.com/blog/how-to-create-facebook-ads"
      },
      {
        "@type": "Article",
        "name": "Facebook Ads vs. Google Ads: Which Is Better for Atlanta Businesses? (2025)",
        "url": "https://driveleadmedia.com/blog/facebook-ads-vs-google-ads-atlanta"
      },
      {
        "@type": "Article",
        "name": "Meta Ads Target Audience Guide",
        "url": "https://driveleadmedia.com/blog/meta-ads-target-audience-guide"
      },
      {
        "@type": "Article",
        "name": "Why Your Meta Ads Need a Dedicated Landing Page",
        "url": "https://driveleadmedia.com/blog/why-meta-ads-need-landing-pages"
      },
      {
        "@type": "Article",
        "name": "Facebook Ads for Atlanta Businesses: Complete 2025 Guide",
        "url": "https://driveleadmedia.com/blog/facebook-ads-atlanta-guide"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Meta Blueprint"
    },
    "award": [
      "Meta Blueprint Certification"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Drive Lead Media",
      "url": "https://driveleadmedia.com"
    },
    "subjectOf": {
      "@type": "WebPage",
      "url": "https://driveleadmedia.com/about/nicolas-leroo",
      "name": "Nicolas Leroo - Co-Founder & Meta Advertising Strategist"
    }
  };

  const blogPosts = [
    {
      slug: 'how-much-do-facebook-ads-cost-atlanta',
      title: 'How Much Do Facebook Ads Cost in Atlanta? (2025 Complete Guide)',
      date: 'September 2025',
      category: 'Meta Ads Pricing',
    },
    {
      slug: 'why-meta-ads-need-landing-pages',
      title: 'Why Your Meta Ads Need a Dedicated Landing Page',
      date: 'October 2025',
      category: 'Conversion Optimization',
    },
    {
      slug: 'meta-ads-target-audience-guide',
      title: 'Meta Ads Target Audience Guide',
      date: 'October 2025',
      category: 'Targeting Strategy',
    },
  ];

  return (
    <main className="min-h-screen bg-[#000000] text-white relative">
      {/* Background gradient orbs */}
      <div className="fixed top-[20%] left-[10%] w-[500px] h-[500px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="pt-[140px] sm:pt-[160px] lg:pt-[180px] pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left: Photo */}
            <div className="order-2 md:order-1">
              <div className="relative w-full max-w-[400px] mx-auto aspect-square rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/nicolas-leroo-atlanta-digital-marketing-agency-founder.webp"
                  alt="Nicolas Leroo - Meta Advertising Strategist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Name & Title */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-white font-heading text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-normal leading-tight mb-4">
                Nicolas Leroo
              </h1>
              <p className="text-gray-300 font-body text-[1.25rem] sm:text-[1.375rem] font-medium mb-6">
                Co-Founder & Meta Advertising Strategist
              </p>
              <p className="text-[#5FA99F] text-[1rem] sm:text-[1.125rem] leading-relaxed italic">
                Meta advertising + custom website design for Atlanta healthcare and service businesses
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 font-body text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              I'm Nicolas Leroo, Co-Founder of Drive Lead Media and a Meta Blueprint Certified advertising strategist specializing in Facebook and Instagram campaigns for healthcare practices and local service businesses in Atlanta.
            </p>
            <p className="text-gray-300 font-body text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              What sets my approach apart is combining Meta advertising expertise with custom website design and development. While many agencies focus only on ad management, I build the complete system from strategic campaigns to optimized landing pages to conversion tracking ensuring every element works together to turn ad spend into customers.
            </p>
            <p className="text-gray-300 font-body text-[1.0625rem] sm:text-[1.125rem] leading-relaxed">
              I work with a small roster of clients where I can personally oversee every campaign detail. This means data driven targeting tailored to your business goals, custom website development built for conversions, and continuous optimization to improve results over time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-white font-heading text-[2rem] sm:text-[2.25rem] font-normal mb-6 text-center">
              Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-gray-300 font-body text-[1rem] sm:text-[1.0625rem]">Meta Blueprint Certified</p>
                </div>
              </div>
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-gray-300 font-body text-[1rem] sm:text-[1.0625rem]">Custom Website Design & Development</p>
                </div>
              </div>
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5FA99F] rounded-full"></div>
                  <p className="text-gray-300 font-body text-[1rem] sm:text-[1.0625rem]">Landing Page Optimization</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Published Articles Section */}
      <section className="pb-[60px] sm:pb-[80px] px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-white font-heading text-[2rem] sm:text-[2.25rem] font-normal mb-8 text-center">
              Published Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="inline-block bg-[rgba(95,169,159,0.2)] text-[#5FA99F] px-3 py-1 rounded-full text-[0.8125rem] font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-white font-heading text-[1.125rem] sm:text-[1.25rem] font-normal leading-tight mb-3 group-hover:text-[#5FA99F] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 font-body text-[0.875rem]">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-[80px] sm:pb-[100px] lg:pb-[120px] px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[32px] p-8 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#5FA99F]/60 hover:shadow-[0_0_40px_rgba(95,169,159,0.3)] transition-all duration-500 text-center overflow-hidden group"
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5FA99F]/5 via-transparent to-[#85C7B3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h2 className="text-white font-heading text-[1.75rem] sm:text-[2rem] font-normal mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-300 font-body text-[1rem] sm:text-[1.1rem] mb-6 leading-relaxed">
                Ready to build a complete Meta advertising system for your business? Let's discuss your goals and create a strategy that works.
              </p>
              <Link
                href="/book"
                className="inline-block bg-[#5FA99F] text-white px-8 py-4 text-[1rem] rounded-xl font-heading font-semibold hover:bg-[#85C7B3] transition-all duration-300 shadow-[0_4px_20px_rgba(95,169,159,0.4)] hover:shadow-[0_6px_30px_rgba(95,169,159,0.6)]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
