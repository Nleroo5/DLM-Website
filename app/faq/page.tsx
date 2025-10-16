'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FAQItem {
  id: number;
  icon: string;
  question: string;
  answer: string | JSX.Element;
}

export default function FAQPage() {
  // Add FAQ Schema to head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Drive Lead Media offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We combine high-end video production with precision-targeted Meta ad campaigns, including: Full Campaign Management (strategy, Meta Pixel & GA4 setup, dynamic creative, weekly optimization), Creative Bundle Only (actor-led video ads + static images + copy bank), Custom Website Design (brand aligned, mobile responsive sites built to convert ad traffic), On-Site Production, Remote Production, Access to 30,000+ Paid Actors via our exclusive casting partner for HIPAA compliant testimonial shoots, and Part 107 Certified Drone Footage."
          }
        },
        {
          "@type": "Question",
          "name": "How is pricing determined?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pricing is fully customized to the exact mix of services you require—from campaign management and creative production to add-ons like drone footage or animations. After a brief discovery conversation, we'll provide a detailed proposal outlining all deliverables, timelines, and investment so you know precisely what to expect."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to handle any filming or logistics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You don't—unless you choose on-site. Our processes are fully managed, so you can focus on running your business while we handle everything from casting to final cut."
          }
        },
        {
          "@type": "Question",
          "name": "What are targeted ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Targeted ads allow you to reach your ideal audience based on demographics, interests, location, and behaviors. Visit our Targeted Ads page for a full breakdown of how we hone in on your perfect customers."
          }
        },
        {
          "@type": "Question",
          "name": "Can you target clients outside my local area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Whether it's a 5 mile radius or a nationwide rollout, we tailor ZIP code, demographic, and interest filters to your ideal profile."
          }
        },
        {
          "@type": "Question",
          "name": "What is Meta Pixel & GA4?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meta Pixel is a snippet of code we install on your website to track visitor actions (page views, button clicks, form submissions), enabling smarter ad optimization and retargeting. Google Analytics 4 (GA4) is Google's next-gen analytics platform measuring user journeys across web and app. Together, they give you end-to-end visibility into which ads and videos drive actual business results."
          }
        },
        {
          "@type": "Question",
          "name": "How do you track performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We layer data from Meta Pixel and GA4 into custom dashboards and weekly reports. Key metrics include: Click Through Rate (CTR), Cost Per Lead (CPL), Cost Per Mille (CPM), Return on Ad Spend (ROAS), View Through Conversion Rate, Video Engagement, Landing Page Conversion Rate, Frequency & Reach, Audience Demographics & Behaviors, Session Duration & Bounce Rate, and Event Based Conversions. You'll receive a weekly dashboard plus a monthly review call with clear optimization recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build websites or just run ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer full service website design and development, from brand aligned landing pages to complete multi page sites with custom animations, mobile optimization, and conversion focused layouts."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in your website packages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom design, mobile responsive development, Meta Pixel & GA4 integration, contact forms, speed optimization, SSL security, hosting setup assistance, and basic SEO foundation."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Timelines vary based on complexity. A high converting landing page typically takes 2 to 3 weeks, while a full multi page site with custom features takes 4 to 8 weeks. We'll provide a detailed timeline during discovery."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website work on mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every site we build is fully responsive and optimized for all devices (desktop, tablet, mobile). With over 60% of traffic coming from mobile, this is non negotiable."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide website hosting and maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We can assist with hosting setup and offer ongoing maintenance packages including updates, security monitoring, performance optimization, and content changes."
          }
        },
        {
          "@type": "Question",
          "name": "Can you integrate my website with my ad campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "That's our specialty. We build websites specifically designed to convert ad traffic with optimized landing pages, tracking pixels, conversion focused layouts, and seamless handoff from ad to action."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Head to our Contact page to book your Free 30 Minute Strategy Call or send us an email at hello@driveleadmedia.com."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [headingPulse, setHeadingPulse] = useState(false);

  const toggleItem = (id: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleHeadingClick = () => {
    setHeadingPulse(true);
    setTimeout(() => setHeadingPulse(false), 600);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      icon: '',
      question: 'What services does Dive Lead Media offer?',
      answer: (
        <>
          <p className="mb-2">We combine high-end video production with precision-targeted Meta ad campaigns, including:</p>
          <ul className="my-2 pl-5 space-y-1">
            <li><strong>Full Campaign Management</strong> (strategy, Meta Pixel & GA4 setup, dynamic creative, weekly optimization)</li>
            <li><strong>Creative Bundle Only</strong> (actor-led video ads + static images + copy bank)</li>
            <li><strong>Custom Website Design</strong> (brand aligned, mobile responsive sites built to convert ad traffic into customers)</li>
            <li><strong>On-Site Production</strong> (We bring our full crew and gear to your office for polished, professional footage.)</li>
            <li><strong>Remote Production</strong> (All casting, script approvals, and editing happen virtually, no on site logistics.)</li>
            <li><strong>Access to 30,000+ Paid Actors</strong> via our exclusive casting partner for fully HIPAA compliant testimonial shoots.</li>
            <li><strong>Part 107 Certified Drone Footage</strong> for slick aerials that showcase your location and services from above.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      icon: '',
      question: 'How is pricing determined?',
      answer: 'Our pricing is fully customized to the exact mix of services you require—from campaign management and creative production to add-ons like drone footage or animations. After a brief discovery conversation, we\'ll provide a detailed proposal outlining all deliverables, timelines, and investment so you know precisely what to expect.'
    },
    {
      id: 3,
      icon: '',
      question: 'Do I need to handle any filming or logistics?',
      answer: 'You don\'t—unless you choose on-site. Our processes are fully managed, so you can focus on running your business while we handle everything from casting to final cut.'
    },
    {
      id: 4,
      icon: '',
      question: 'What are targeted ads?',
      answer: (
        <p>
          For a full breakdown of how we hone in on your ideal audience, visit our{' '}
          <Link href="/targeted-ads" className="relative text-[#05908C] font-bold no-underline pb-[2px] opacity-100 hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#05908C] after:scale-x-0 after:origin-left after:transition-transform after:duration-300">
            Targeted Ads page
          </Link>.
        </p>
      )
    },
    {
      id: 5,
      icon: '',
      question: 'Can you target clients outside my local area?',
      answer: 'Yes. Whether it\'s a 5 mile radius or a nationwide rollout, we tailor ZIP code, demographic, and interest filters to your ideal profile.'
    },
    {
      id: 6,
      icon: '',
      question: 'What is Meta Pixel & GA4?',
      answer: (
        <>
          <ul className="my-2 pl-5 space-y-2">
            <li><strong>Meta Pixel</strong> is a snippet of code we install on your website to track visitor actions (page views, button clicks, form submissions), enabling smarter ad optimization and retargeting.</li>
            <li><strong>Google Analytics 4 (GA4)</strong> is Google's next-gen analytics platform measuring user journeys across web and app, feeding us rich, privacy focused data on sessions, events, and conversions.</li>
          </ul>
          <p className="mt-2">Together, they give you end-to-end visibility into which ads and videos drive actual business results.</p>
        </>
      )
    },
    {
      id: 7,
      icon: '',
      question: 'How do you track performance?',
      answer: (
        <>
          <p className="mb-2">We layer data from Meta Pixel and GA4 into custom dashboards and weekly reports. Key metrics include:</p>
          <ul className="my-2 pl-5 space-y-1">
            <li><strong>Click Through Rate (CTR)</strong> The percentage of ad impressions that resulted in a click; shows how compelling your creative and copy are.</li>
            <li><strong>Cost Per Lead (CPL)</strong> The average amount you pay to acquire a single lead (form submission, sign up, etc.); measures cost efficiency of your funnel.</li>
            <li><strong>Cost Per Mille (CPM)</strong> The cost to serve 1,000 ad impressions; helps you understand spend efficiency and audience reach.</li>
            <li><strong>Return on Ad Spend (ROAS)</strong> Revenue generated divided by ad spend; the ultimate measure of campaign profitability.</li>
            <li><strong>View Through Conversion Rate</strong> The percentage of viewers who saw (but didn't click) your ad and later converted; captures the indirect lift from video and display.</li>
            <li><strong>Video Engagement</strong> (watch time, completion rates, drop off) Indicates how well your story holds attention.</li>
            <li><strong>Landing Page Conversion Rate</strong> The percentage of visitors who take your desired action after clicking an ad; ties creative directly to on site performance.</li>
            <li><strong>Frequency & Reach</strong> Reach is the number of unique users who saw your ad; frequency is the average times each person saw it; together they guard against ad fatigue.</li>
            <li><strong>Audience Demographics & Behaviors</strong> Breakdowns by age, gender, location, interests, device, etc.; informs targeting refinements and creative pivots.</li>
            <li><strong>Session Duration & Bounce Rate</strong> Average time on site and percentage of single page visits; signals landing page relevance and user experience quality.</li>
            <li><strong>Event Based Conversions</strong> (e.g. "Book Now," "Download Guide") Custom actions tracked to measure the micro and macro conversions that matter most.</li>
          </ul>
          <p className="mt-2">You'll receive a weekly dashboard plus a monthly review call with clear optimization recommendations.</p>
        </>
      )
    },
    {
      id: 8,
      icon: '',
      question: 'Do you build websites or just run ads?',
      answer: 'We offer full service website design and development, from brand aligned landing pages to complete multi page sites with custom animations, mobile optimization, and conversion focused layouts.'
    },
    {
      id: 9,
      icon: '',
      question: 'What\'s included in your website packages?',
      answer: 'Custom design, mobile responsive development, Meta Pixel & GA4 integration, contact forms, speed optimization, SSL security, hosting setup assistance, and basic SEO foundation.'
    },
    {
      id: 10,
      icon: '',
      question: 'How long does it take to build a website?',
      answer: 'Timelines vary based on complexity. A high converting landing page typically takes 2 to 3 weeks, while a full multi page site with custom features takes 4 to 8 weeks. We\'ll provide a detailed timeline during discovery.'
    },
    {
      id: 11,
      icon: '',
      question: 'Will my website work on mobile devices?',
      answer: 'Yes. Every site we build is fully responsive and optimized for all devices (desktop, tablet, mobile). With over 60% of traffic coming from mobile, this is non negotiable.'
    },
    {
      id: 12,
      icon: '',
      question: 'Do you provide website hosting and maintenance?',
      answer: 'We can assist with hosting setup and offer ongoing maintenance packages including updates, security monitoring, performance optimization, and content changes.'
    },
    {
      id: 13,
      icon: '',
      question: 'Can you integrate my website with my ad campaigns?',
      answer: 'That\'s our specialty. We build websites specifically designed to convert ad traffic with optimized landing pages, tracking pixels, conversion focused layouts, and seamless handoff from ad to action.'
    },
    {
      id: 14,
      icon: '',
      question: 'How do I get started?',
      answer: (
        <p>
          Head to our{' '}
          <Link href="/contact" className="relative text-[#05908C] font-bold no-underline pb-[2px] opacity-100 hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#05908C] after:scale-x-0 after:origin-left after:transition-transform after:duration-300">
            Contact page
          </Link>{' '}
          to book your Free 30 Minute Strategy Call or{' '}
          <a href="mailto:hello@driveleadmedia.com" className="relative text-[#05908C] font-bold no-underline pb-[2px] opacity-100 hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#05908C] after:scale-x-0 after:origin-left after:transition-transform after:duration-300">
            send us an email
          </a>.
        </p>
      )
    }
  ];

  return (
    <div className="bg-transparent text-[#EEF4D9] font-sans pt-32 pb-10 px-5 max-w-[800px] mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12 flex justify-center">
        <motion.h1
          className={`font-serif text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-normal text-[#EEF4D9] m-0 cursor-pointer relative inline-block px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 lg:px-12 lg:py-8 bg-[rgba(238,244,217,0.1)] backdrop-blur-[20px] border border-[rgba(238,244,217,0.2)] rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)] [text-shadow:0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-transform hover:scale-[1.03] hover:-translate-y-[2px] hover:[text-shadow:0_8px_16px_rgba(0,0,0,0.2)] hover:tracking-[0.02em] hover:bg-[rgba(238,244,217,0.15)] hover:border-[rgba(238,244,217,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.1)] active:scale-[1.02] active:translate-y-0 overflow-hidden ${headingPulse ? 'animate-[headingPulse_0.6s_ease-out]' : ''}`}
          onClick={handleHeadingClick}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 1.02, y: 0 }}
        >
          <span className="relative z-10">Your Questions, Answered</span>
          {/* Shine effect */}
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-45 from-transparent via-[rgba(238,244,217,0.2)] to-transparent -translate-x-full transition-transform duration-[600ms] rounded-[24px] pointer-events-none group-hover:translate-x-full"></span>
        </motion.h1>
      </section>

      {/* FAQ Accordion */}
      <div className="space-y-0">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(faq.id);

          return (
            <motion.div
              key={faq.id}
              className="faq-item relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Accent Line */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                  isOpen ? 'bg-[#05908C]' : 'bg-transparent'
                }`}
              />

              {/* Question Button */}
              <button
                onClick={() => toggleItem(faq.id)}
                className="relative w-full bg-none border-none py-4 pr-0 pl-6 text-left text-lg cursor-pointer border-t border-[#05908C] transition-all duration-300 text-[#EEF4D9] hover:bg-[rgba(5,144,140,0.1)] flex items-center justify-between"
              >
                <span className="inline-flex items-center font-bold">
                  <span className="mr-2 text-xl">{faq.icon}</span>
                  {faq.question}
                </span>
                <motion.span
                  className="inline-block text-2xl"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="text-base leading-relaxed pl-4 pr-4 pb-4 text-[#EEF4D9]">
                  {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Keyframe for heading pulse */}
      <style jsx>{`
        @keyframes headingPulse {
          0% { transform: scale(1.05) translateY(-2px); }
          50% { transform: scale(1.1) translateY(-4px); filter: brightness(1.1); }
          100% { transform: scale(1.05) translateY(-2px); }
        }
      `}</style>
    </div>
  );
}
