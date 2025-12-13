'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArticleSchema, BreadcrumbSchema, FAQSchema, HowToSchema } from '@/components/StructuredDataSchemas';
import { getPostBySlug } from '@/lib/blog-posts';
import AuthorBio from '@/components/blog/AuthorBio';

export default function FacebookPixelSetupPage() {
  const post = getPostBySlug('how-to-set-up-facebook-pixel');

  if (!post) {
    return <div>Post not found</div>;
  }

  const faqItems = [
    {
      question: "What is the Facebook Pixel and why do I need it?",
      answer: "The Facebook Pixel (now called Meta Pixel) is a piece of tracking code that you install on your website to measure the effectiveness of your Facebook and Instagram advertising. It tracks visitor actions like page views, purchases, and form submissions, allowing you to optimize your ads, build remarketing audiences, and measure ROI accurately."
    },
    {
      question: "How long does it take to install the Facebook Pixel?",
      answer: "Installation time varies by method: Partner integrations (WordPress, Shopify) take 5-10 minutes, manual code installation takes 10-15 minutes, and Google Tag Manager setup takes 15-20 minutes if you're familiar with GTM. First-time installations may take longer as you familiarize yourself with Meta Events Manager."
    },
    {
      question: "Do I need coding knowledge to install Facebook Pixel?",
      answer: "Not necessarily. If you use WordPress, Shopify, Wix, or another CMS with a Facebook integration, you can install the Pixel without any coding. However, for custom websites or manual installation, basic HTML knowledge is helpful to place the code correctly in your website's header."
    },
    {
      question: "Can I have multiple Facebook Pixels on one website?",
      answer: "While technically possible, Meta recommends using only one Pixel per website for accurate tracking. If you need to share data with multiple ad accounts, use the Pixel's built-in sharing features in Events Manager rather than installing multiple Pixels, which can cause tracking conflicts and inflated metrics."
    },
    {
      question: "How do I know if my Facebook Pixel is working correctly?",
      answer: "Use three verification methods: 1) Install the Meta Pixel Helper Chrome extension and visit your website to see if events fire, 2) Check the Test Events tab in Events Manager to see real-time activity, and 3) Verify that your Pixel shows 'Active' status with recent events in the Events Manager overview."
    },
    {
      question: "What's the difference between the base Pixel code and event codes?",
      answer: "The base Pixel code tracks PageView events automatically whenever someone visits your website. Event codes track specific actions like Add to Cart, Purchase, or Lead submissions. You install the base code once in your site's header, then add event codes on specific pages where those actions occur."
    },
    {
      question: "Should I enable Automatic Advanced Matching?",
      answer: "Yes, absolutely. Automatic Advanced Matching improves conversion tracking and remarketing audience quality by securely matching website visitors with their Facebook profiles using hashed data like email addresses. This feature is privacy-safe, GDPR-compliant, and can improve your match rates by 10-20%."
    },
    {
      question: "Can I install Facebook Pixel on Shopify without an app?",
      answer: "Yes, Shopify has native Facebook Pixel integration. Go to Settings > Apps and sales channels > Facebook, then connect your Meta account. However, apps like the official Facebook & Instagram app provide additional features like product catalog syncing and easier event tracking for e-commerce."
    },
    {
      question: "How is Google Tag Manager different from installing Pixel directly?",
      answer: "Google Tag Manager (GTM) is a container that manages all your tracking codes in one place. Installing Pixel through GTM means you don't edit your website's code directly—instead, you add and update tracking through GTM's interface. This makes it easier to manage multiple marketing tools and make changes without developer help."
    },
    {
      question: "What should I do if my Pixel shows errors in the diagnostic tool?",
      answer: "Common errors include: duplicate Pixels (remove extra installations), blocked Pixel (check ad blockers or privacy tools), or event parameter issues (verify your event code syntax). Check the Diagnostics tab in Events Manager for specific error messages, then reference Meta's troubleshooting documentation or reinstall the Pixel following this guide."
    }
  ];

  const howToSteps = [
    {
      name: "Access Meta Events Manager",
      text: "Log into Meta Business Suite at business.facebook.com, click 'All Tools' in the menu, then select 'Events Manager' to access your Pixel creation dashboard."
    },
    {
      name: "Create Your Meta Pixel",
      text: "In Events Manager, click 'Connect Data Sources', select 'Web', choose 'Meta Pixel', then give your Pixel a descriptive name and enter your website URL."
    },
    {
      name: "Choose Your Installation Method",
      text: "Select from three options: Partner Integration (for WordPress, Shopify, etc.), Manual Code Installation (copy/paste into website header), or Email Instructions (send to your developer)."
    },
    {
      name: "Install Pixel Code on Your Website",
      text: "If using partner integration, connect your platform and follow prompts. For manual installation, copy the base Pixel code and paste it in your website's <head> section before the closing </head> tag."
    },
    {
      name: "Verify Pixel Installation",
      text: "Install Meta Pixel Helper Chrome extension, visit your website, and verify the extension shows your Pixel firing. Also check the Test Events tab in Events Manager to see real-time activity."
    },
    {
      name: "Enable Automatic Advanced Matching",
      text: "In Events Manager, go to your Pixel settings, find 'Automatic Advanced Matching' and toggle it on to improve conversion tracking accuracy."
    },
    {
      name: "Set Up Event Tracking",
      text: "Add standard event codes (like Purchase, Lead, AddToCart) to specific pages where those actions occur, or use your platform's integration to automatically track key events."
    },
    {
      name: "Test and Monitor",
      text: "Perform test actions on your website while watching the Test Events tab in Events Manager. Confirm all events are tracking correctly before launching ad campaigns."
    }
  ];

  return (
    <main className="min-h-screen bg-[#000000]">
      {/* Structured Data */}
      <ArticleSchema
        headline="How to Set Up Facebook Pixel: Complete 2025 Installation Guide"
        description="Complete step-by-step guide to installing Facebook Pixel (Meta Pixel) on your website. Includes WordPress, Shopify, GTM setup methods, testing & verification with screenshots."
        author="Nicolas Leroo"
        datePublished="2025-12-13"
        dateModified="2025-12-13"
        image="https://driveleadmedia.com/images/meta-events-manager-overview.webp"
        url="https://driveleadmedia.com/blog/how-to-set-up-facebook-pixel"
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://driveleadmedia.com' },
          { name: 'Blog', url: 'https://driveleadmedia.com/blog' },
          { name: 'How to Set Up Facebook Pixel', url: 'https://driveleadmedia.com/blog/how-to-set-up-facebook-pixel' }
        ]}
      />

      <FAQSchema items={faqItems} />

      <HowToSchema
        name="How to Install Facebook Pixel (Meta Pixel) on Your Website"
        description="Complete step-by-step guide to installing Facebook Pixel for conversion tracking and remarketing"
        steps={howToSteps}
      />

      {/* Hero Section */}
      <section className="pt-[140px] pb-[60px] px-6 bg-[#000000] relative">
        {/* Background gradient orbs */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#5FA99F] opacity-10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-[#85C7B3] opacity-10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[900px] mx-auto relative z-10">
          <h1 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            How to Set Up Facebook Pixel: Complete 2025 Installation Guide
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 font-body text-sm sm:text-base mb-6">
            <span>By {post.author.name}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Link href="/blog/category/meta-ads-setup" className="px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-sm hover:bg-[#5FA99F]/30 transition-colors">
              Meta Ads Setup
            </Link>
            <Link href="/blog/category/conversion-optimization" className="px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-sm hover:bg-[#5FA99F]/30 transition-colors">
              Conversion Optimization
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-8">
            <div className="relative w-full rounded-xl overflow-hidden border border-[#5FA99F]/30 shadow-[0_0_30px_rgba(95,169,159,0.2)]">
              <Image
                src="/images/meta-events-manager-overview.webp"
                alt="Meta Events Manager dashboard showing Facebook Pixel overview and setup options for conversion tracking"
                width={900}
                height={566}
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
          <div className="mb-16">
            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              If you're running Facebook or Instagram ads without the Meta Pixel installed, you're flying blind. You can't accurately track conversions, build remarketing audiences, or measure your return on investment.
            </p>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The good news? Installing the Facebook Pixel (officially called "Meta Pixel") isn't complicated. Whether you're using WordPress, Shopify, a custom website, or Google Tag Manager, this complete guide will walk you through the entire installation process with screenshots for every step.
            </p>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              By the end of this guide, you'll have your Pixel installed, verified, and tracking conversions correctly—no technical experience required.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-16 bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 sm:p-8">
            <h2 className="font-heading text-[1.5rem] font-bold text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-[#5FA99F] font-body">
              <li><a href="#what-is-facebook-pixel" className="hover:text-[#85C7B3] transition-colors">1. What is Facebook Pixel?</a></li>
              <li><a href="#creating-your-pixel" className="hover:text-[#85C7B3] transition-colors">2. Creating Your Meta Pixel</a></li>
              <li><a href="#installation-methods" className="hover:text-[#85C7B3] transition-colors">3. Installation Methods Overview</a></li>
              <li><a href="#wordpress-installation" className="hover:text-[#85C7B3] transition-colors">4. WordPress Installation</a></li>
              <li><a href="#shopify-installation" className="hover:text-[#85C7B3] transition-colors">5. Shopify Installation</a></li>
              <li><a href="#manual-installation" className="hover:text-[#85C7B3] transition-colors">6. Manual Code Installation</a></li>
              <li><a href="#gtm-installation" className="hover:text-[#85C7B3] transition-colors">7. Google Tag Manager Installation</a></li>
              <li><a href="#testing-verification" className="hover:text-[#85C7B3] transition-colors">8. Testing & Verification</a></li>
              <li><a href="#advanced-settings" className="hover:text-[#85C7B3] transition-colors">9. Advanced Settings</a></li>
              <li><a href="#faq" className="hover:text-[#85C7B3] transition-colors">10. FAQ</a></li>
            </ul>
          </div>

          {/* Section 1: What is Facebook Pixel */}
          <div id="what-is-facebook-pixel" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              What is Facebook Pixel (Meta Pixel)?
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The Meta Pixel (formerly Facebook Pixel) is a small piece of JavaScript code that you install on your website to track visitor behavior and conversions from your Facebook and Instagram advertising campaigns.
            </p>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Think of it as a bridge between your website and Meta's advertising platform. Every time someone visits your site, the Pixel sends information back to Facebook about what pages they viewed, what actions they took, and whether they converted.
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Why You Need the Facebook Pixel
            </h3>

            <ul className="list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2">
              <li><strong>Track Conversions:</strong> See exactly which ads drive sales, leads, and sign-ups</li>
              <li><strong>Build Remarketing Audiences:</strong> Show ads to people who visited your website</li>
              <li><strong>Optimize Ad Delivery:</strong> Facebook automatically shows your ads to people most likely to convert</li>
              <li><strong>Measure ROI:</strong> Calculate your actual return on ad spend with accurate conversion data</li>
              <li><strong>Create Lookalike Audiences:</strong> Find new customers similar to your best existing customers</li>
            </ul>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Without the Pixel, you're guessing. With it, you have concrete data to make informed decisions about your advertising budget.
            </p>
          </div>

          {/* Section 2: Creating Your Pixel */}
          <div id="creating-your-pixel" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Step 1: Creating Your Meta Pixel
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Before you can install anything, you need to create your Pixel in Meta's Events Manager. Here's the complete process:
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Access Meta Events Manager
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              First, you'll need to navigate to Events Manager where all your tracking setup happens:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2 ml-4">
              <li>Go to <a href="https://business.facebook.com" className="text-[#5FA99F] hover:text-[#85C7B3] underline" target="_blank" rel="noopener noreferrer">business.facebook.com</a></li>
              <li>Click on the menu icon (three horizontal lines) in the top left</li>
              <li>Click "All Tools"</li>
              <li>Find and select "Events Manager" under the "Measure & Report" section</li>
            </ol>

            {/* Image 1: Finding All Tools */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/meta-business-suite-all-tools.webp"
                  alt="Finding All Tools in Meta Business Suite navigation menu"
                  width={900}
                  height={532}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Click "All Tools" in the Meta Business Suite menu to access Events Manager
              </p>
            </div>

            {/* Image 2: Locating Events Manager */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/locate-events-manager-business-suite.webp"
                  alt="Locating Events Manager in Business Suite tools menu"
                  width={900}
                  height={702}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Find Events Manager under the "Measure & Report" section
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Create a New Data Source
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Once you're in Events Manager, you'll create your Pixel as a new data source:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2 ml-4">
              <li>Click the green "Connect Data Sources" button</li>
              <li>Select "Web" as your data source type</li>
              <li>Click "Get Started" under "Meta Pixel"</li>
              <li>Enter a name for your Pixel (example: "Your Company Website")</li>
              <li>Enter your website URL</li>
              <li>Click "Create Pixel"</li>
            </ol>

            {/* Image 3: Connect Data Sources */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/connect-data-sources-events-manager.webp"
                  alt="Connect Data Sources button in Meta Events Manager"
                  width={900}
                  height={400}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Click "Connect Data Sources" to begin creating your Meta Pixel
              </p>
            </div>

            {/* Image 4: Choose Web Data Source */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/choose-web-data-source-meta.webp"
                  alt="Selecting Web as data source type in Meta Events Manager"
                  width={1024}
                  height={355}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Select "Web" to create a Meta Pixel for your website
              </p>
            </div>

            {/* Image 5: Connect Via Meta Pixel */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/connect-website-activity-meta-pixel.webp"
                  alt="Choosing Meta Pixel to connect website activity tracking"
                  width={819}
                  height={631}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Choose Meta Pixel to track website activity and conversions
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-[#5FA99F] p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-[#5FA99F]">Pro Tip:</strong> Use a clear, descriptive name for your Pixel like "Main Website - YourBusiness.com" instead of generic names like "Pixel 1". If you manage multiple websites, this makes it easy to identify which Pixel belongs to which site.
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Congratulations! Your Pixel is now created. Next, you'll choose how to install it on your website.
            </p>
          </div>

          {/* Section 3: Installation Methods Overview */}
          <div id="installation-methods" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Step 2: Choose Your Installation Method
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              After creating your Pixel, Meta will ask you how you want to install it. You have three main options, each suited for different situations:
            </p>

            {/* Image 6: Installation Options */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/pixel-installation-methods-overview.webp"
                  alt="Meta Pixel installation method options: Partner integration, Manual code, or Email instructions"
                  width={1024}
                  height={760}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Choose your installation method based on your website platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 hover:border-[rgba(95,169,159,0.6)] transition-all duration-300">
                <h3 className="font-heading text-[1.125rem] font-bold text-[#5FA99F] mb-3">Partner Integration</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed mb-3">
                  <strong>Best for:</strong> WordPress, Shopify, Wix, Squarespace, and other popular platforms
                </p>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  <strong>Difficulty:</strong> Easiest (5-10 minutes)
                </p>
              </div>

              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 hover:border-[rgba(95,169,159,0.6)] transition-all duration-300">
                <h3 className="font-heading text-[1.125rem] font-bold text-[#5FA99F] mb-3">Manual Installation</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed mb-3">
                  <strong>Best for:</strong> Custom websites or platforms without Meta integration
                </p>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  <strong>Difficulty:</strong> Moderate (10-15 minutes)
                </p>
              </div>

              <div className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 hover:border-[rgba(95,169,159,0.6)] transition-all duration-300">
                <h3 className="font-heading text-[1.125rem] font-bold text-[#5FA99F] mb-3">Google Tag Manager</h3>
                <p className="text-gray-300 font-body text-sm leading-relaxed mb-3">
                  <strong>Best for:</strong> Sites already using GTM or managing multiple tracking tools
                </p>
                <p className="text-gray-300 font-body text-sm leading-relaxed">
                  <strong>Difficulty:</strong> Moderate (15-20 minutes)
                </p>
              </div>
            </div>

            {/* Image 7: Partner Integration Options */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/meta-partner-integrations-shopify-wordpress.webp"
                  alt="Meta partner integration options showing WordPress, Shopify, Wix, and other platforms"
                  width={1024}
                  height={713}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Partner integrations make Pixel installation easy for popular platforms
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The following sections will walk through each installation method in detail. Jump to the one that matches your website platform.
            </p>
          </div>

          {/* Section 4: WordPress Installation */}
          <div id="wordpress-installation" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Method 1: WordPress Installation
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              WordPress users have the easiest installation process. You can use either the official Meta partnership or a plugin. Here's the recommended approach using the Header Footer Code Manager plugin:
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Install Header Footer Code Manager Plugin
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Log into your WordPress admin dashboard</li>
              <li>Go to Plugins → Add New</li>
              <li>Search for "Header Footer Code Manager"</li>
              <li>Click "Install Now" then "Activate"</li>
            </ol>

            {/* Image 8: WordPress HFCM Plugin */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/wordpress-head-footer-code-manager-plugin.webp"
                  alt="Header Footer Code Manager plugin in WordPress dashboard"
                  width={900}
                  height={300}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                The Header Footer Code Manager plugin makes it easy to add Meta Pixel to WordPress
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Add Your Pixel Code
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>In WordPress, go to HFCM → Add New Snippet</li>
              <li>Give it a name like "Meta Pixel"</li>
              <li>Select "Header" as the location</li>
              <li>Go back to Events Manager and copy your Pixel code</li>
              <li>Paste the code into the snippet</li>
              <li>Set it to display "Site Wide"</li>
              <li>Click "Save"</li>
            </ol>

            {/* Image 9: Adding Pixel in HFCM */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/add-meta-pixel-code-hfcm-wordpress.webp"
                  alt="Adding Meta Pixel code snippet using Header Footer Code Manager in WordPress"
                  width={883}
                  height={660}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Paste your Meta Pixel code into HFCM and set it to display site-wide
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-[#5FA99F] p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-[#5FA99F]">Alternative:</strong> You can also use the official "PixelYourSite" plugin, which provides a simple interface to add your Pixel ID without touching any code. Go to Plugins → Add New, search for "PixelYourSite", install and activate, then enter your Pixel ID in the plugin settings.
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              That's it! Your Pixel is now installed on your WordPress site. Skip ahead to the <a href="#testing-verification" className="text-[#5FA99F] hover:text-[#85C7B3] underline">Testing & Verification section</a> to confirm it's working.
            </p>
          </div>

          {/* Section 5: Manual Installation */}
          <div id="manual-installation" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Method 2: Manual Code Installation
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              For custom websites or platforms without a Meta integration, you'll install the Pixel by adding code directly to your website's HTML. Don't worry—it's easier than it sounds.
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Get Your Pixel Code
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>In Events Manager, click on your Pixel name</li>
              <li>Click "Continue Pixel Setup"</li>
              <li>Select "Install code manually"</li>
              <li>Copy the entire Pixel base code</li>
            </ol>

            {/* Image 10: Copy Pixel Base Code */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/copy-meta-pixel-base-code.webp"
                  alt="Copying Meta Pixel base code from Events Manager"
                  width={891}
                  height={523}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Copy the complete Pixel base code from Events Manager
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Add Code to Your Website
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              You need to paste this code in the <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#5FA99F]">&lt;head&gt;</code> section of your website, right before the closing <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#5FA99F]">&lt;/head&gt;</code> tag.
            </p>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The exact process depends on your website platform:
            </p>

            <ul className="list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2">
              <li><strong>Custom HTML site:</strong> Open your header.php or index.html file and paste the code before <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#5FA99F]">&lt;/head&gt;</code></li>
              <li><strong>Wix:</strong> Go to Settings → Custom Code → Add Custom Code → Paste in the "Head" section</li>
              <li><strong>Squarespace:</strong> Go to Settings → Advanced → Code Injection → Paste in the "Header" box</li>
              <li><strong>Webflow:</strong> Go to Project Settings → Custom Code → Paste in "Head Code"</li>
            </ul>

            {/* Image 11: Code Placement in Header */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/meta-pixel-code-placement-header.webp"
                  alt="Meta Pixel code placement in website header before closing head tag"
                  width={855}
                  height={250}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Place the Pixel code in your website's header, before the closing &lt;/head&gt; tag
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-[#5FA99F] p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-[#5FA99F]">Important:</strong> The Pixel code must be installed on EVERY page of your website. If you place it in your site's header template, it will automatically appear on all pages. If you're manually adding it to individual pages, you'll need to add it to each page separately.
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Once the code is in place, save your changes and proceed to <a href="#testing-verification" className="text-[#5FA99F] hover:text-[#85C7B3] underline">Testing & Verification</a>.
            </p>
          </div>

          {/* Section 6: GTM Installation */}
          <div id="gtm-installation" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Method 3: Google Tag Manager Installation
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              If you're already using Google Tag Manager (GTM) to manage your website's tracking codes, installing the Meta Pixel through GTM is the cleanest approach. It keeps all your tracking in one place and makes future updates easier.
            </p>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-yellow-500">Prerequisites:</strong> This method requires that you already have Google Tag Manager installed on your website. If you don't have GTM set up yet, use one of the other installation methods above.
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Create a New Tag in GTM
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Log into your Google Tag Manager account</li>
              <li>Select your website container</li>
              <li>Click "Tags" in the left sidebar</li>
              <li>Click "New" to create a new tag</li>
              <li>Click on the tag configuration area</li>
            </ol>

            {/* Image 12: Create New GTM Tag */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/create-new-tag-google-tag-manager.webp"
                  alt="Creating a new tag in Google Tag Manager interface"
                  width={1024}
                  height={385}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Create a new tag in your Google Tag Manager container
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Use the Facebook Pixel Template
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Click "Discover more tag types in the Community Template Gallery"</li>
              <li>Search for "Facebook Pixel"</li>
              <li>Select the official "Facebook Pixel" template by Facebook</li>
              <li>Click "Add to workspace"</li>
            </ol>

            {/* Image 13: Facebook Pixel Template */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/gtm-facebook-pixel-template-gallery.webp"
                  alt="Searching for Facebook Pixel template in GTM community gallery"
                  width={1024}
                  height={459}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Find the official Facebook Pixel template in the GTM community gallery
              </p>
            </div>

            {/* Image 14: Add Template to Workspace */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/add-facebook-pixel-tag-gtm-workspace.webp"
                  alt="Adding Facebook Pixel tag template to GTM workspace"
                  width={1024}
                  height={552}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Add the Facebook Pixel template to your GTM workspace
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Configure the Pixel Tag
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>In the tag configuration, set the Event Name to "PageView"</li>
              <li>Find your Pixel ID in Meta Events Manager (it's a long number like 123456789012345)</li>
              <li>Enter your Pixel ID in the "Facebook Pixel ID" field</li>
              <li>Leave all other settings at their defaults for now</li>
            </ol>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Set Up the Trigger
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Now you need to tell GTM when to fire this tag. For the base Pixel (PageView), you want it to fire on every page:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Click on the "Triggering" section</li>
              <li>Click the "+" icon to create a new trigger</li>
              <li>Select "All Pages" as the trigger type</li>
              <li>Click "Save"</li>
            </ol>

            {/* Image 15: Trigger Setup */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/setup-trigger-meta-pixel-gtm.webp"
                  alt="Setting up All Pages trigger for Meta Pixel in Google Tag Manager"
                  width={1024}
                  height={609}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Configure the trigger to fire the Meta Pixel on all pages
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Test and Publish
            </h3>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Name your tag "Meta Pixel - PageView"</li>
              <li>Click "Save"</li>
              <li>Click "Preview" in the top right to test your changes</li>
              <li>Visit your website in the new window that opens</li>
              <li>Verify that the Meta Pixel tag fires on page load</li>
              <li>If everything looks good, click "Submit" to publish your changes</li>
            </ol>

            {/* Image 16: GTM Preview Mode */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/google-tag-manager-preview-mode.webp"
                  alt="Google Tag Manager preview mode showing Meta Pixel tag firing"
                  width={1024}
                  height={834}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Use GTM Preview mode to test your Meta Pixel before publishing
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Your Meta Pixel is now installed via Google Tag Manager! Proceed to the next section to verify it's working correctly.
            </p>
          </div>

          {/* Section 7: Testing & Verification */}
          <div id="testing-verification" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Step 3: Testing & Verification
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Installing the code is only half the battle. You MUST verify that your Pixel is actually working before you start running ads. Here are three reliable ways to confirm your Pixel is tracking correctly:
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Method 1: Meta Pixel Helper Chrome Extension
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              This is the fastest and easiest verification method:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Install the <a href="https://chrome.google.com/webstore/detail/meta-pixel-helper" className="text-[#5FA99F] hover:text-[#85C7B3] underline" target="_blank" rel="noopener noreferrer">Meta Pixel Helper</a> extension in Chrome</li>
              <li>Visit your website</li>
              <li>Click the Pixel Helper icon in your browser toolbar</li>
              <li>You should see your Pixel ID with a green checkmark and "PageView" event</li>
            </ol>

            {/* Image 17: Pixel Helper Extension */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/meta-pixel-helper-chrome-extension.webp"
                  alt="Meta Pixel Helper Chrome extension showing active Pixel with green checkmark"
                  width={768}
                  height={340}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                The Meta Pixel Helper shows your Pixel is installed and firing correctly
              </p>
            </div>

            {/* Image 18: Pixel Helper Showing Events */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/pixel-helper-showing-events-details.webp"
                  alt="Meta Pixel Helper extension showing detailed PageView event and Pixel information"
                  width={1024}
                  height={387}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Detailed view showing PageView event firing with Pixel ID and parameters
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed mb-3">
                <strong className="text-red-500">Common Issues:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-300 font-body text-sm leading-relaxed space-y-2 ml-4">
                <li><strong>No Pixel detected:</strong> The code isn't installed correctly or isn't in the header</li>
                <li><strong>Yellow warning icon:</strong> Pixel is working but has minor issues (usually safe to ignore)</li>
                <li><strong>Red error icon:</strong> Pixel has critical errors—check your code placement</li>
                <li><strong>Duplicate Pixels:</strong> You've installed the code more than once—remove the extra instance</li>
              </ul>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Method 2: Test Events in Events Manager
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Meta's built-in testing tool shows real-time Pixel activity:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Go to Events Manager in Meta Business Suite</li>
              <li>Click on your Pixel name</li>
              <li>Click the "Test Events" tab</li>
              <li>Enter your website URL in the test browser field</li>
              <li>Browse your website in the test window</li>
              <li>Watch events appear in real-time on the left side</li>
            </ol>

            {/* Image 19: Test Events Tab */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/test-events-tab-meta-events-manager.webp"
                  alt="Test Events tab in Meta Events Manager showing real-time Pixel activity"
                  width={1024}
                  height={571}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Use the Test Events tab to monitor real-time Pixel activity
              </p>
            </div>

            {/* Image 20: Events Received */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/events-received-test-events-tab.webp"
                  alt="Events successfully received and displayed in Test Events interface"
                  width={1024}
                  height={366}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Events appearing in real-time confirm your Pixel is tracking correctly
              </p>
            </div>

            {/* Image 21: Event Details */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/expanded-event-details-verification.webp"
                  alt="Expanded event details showing parameters and tracking data for verification"
                  width={1024}
                  height={477}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Click on events to see detailed parameter data and verify accuracy
              </p>
            </div>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Method 3: Check Events Manager Overview
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              After 10-15 minutes, you should see activity in your main Events Manager dashboard:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>Go to Events Manager</li>
              <li>Look at your Pixel's overview page</li>
              <li>You should see "Active" status with a green dot</li>
              <li>The "Activity" section should show recent PageView events</li>
              <li>Your website URL should appear in the "Website" field</li>
            </ol>

            {/* Image 22: Domain Verification */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/pixel-pageview-events-domain-verification.webp"
                  alt="Events Manager showing PageView events and website domain verification"
                  width={1024}
                  height={467}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Events Manager overview confirms Pixel is active and tracking your domain
              </p>
            </div>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-[#5FA99F] p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-[#5FA99F]">Pro Tip:</strong> Test from multiple devices (desktop, mobile, tablet) and different browsers to ensure your Pixel works everywhere. Also test with ad blockers disabled—many users block tracking pixels, which is normal and expected.
              </p>
            </div>
          </div>

          {/* Section 8: Advanced Settings */}
          <div id="advanced-settings" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              Step 4: Configure Advanced Settings
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Now that your Pixel is installed and verified, there are a few important settings you should configure to maximize tracking accuracy.
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Enable Automatic Advanced Matching
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              This feature dramatically improves your conversion tracking and remarketing audience quality by matching website visitors with their Facebook profiles using hashed customer data:
            </p>

            <ol className="list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-3 ml-4">
              <li>In Events Manager, click on your Pixel name</li>
              <li>Click "Settings" in the left sidebar</li>
              <li>Scroll to "Automatic Advanced Matching"</li>
              <li>Toggle the switch to "On"</li>
              <li>Click "Save Changes"</li>
            </ol>

            {/* Image 23: Automatic Advanced Matching */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/automatic-advanced-matching-meta-pixel.webp"
                  alt="Enabling Automatic Advanced Matching in Meta Pixel settings for improved conversion tracking"
                  width={899}
                  height={669}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Enable Automatic Advanced Matching to improve conversion tracking accuracy by 10-20%
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              This feature is completely privacy-safe and GDPR-compliant. Facebook only uses this data for attribution and doesn't share it externally.
            </p>

            <h3 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-semibold text-[#5FA99F] mb-4">
              Add Standard Event Tracking
            </h3>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The base Pixel code only tracks PageViews. To track conversions (purchases, form submissions, etc.), you need to add standard event codes:
            </p>

            <ul className="list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2">
              <li><strong>Purchase:</strong> Track completed transactions</li>
              <li><strong>Lead:</strong> Track form submissions or lead captures</li>
              <li><strong>AddToCart:</strong> Track when someone adds products to cart</li>
              <li><strong>InitiateCheckout:</strong> Track when checkout process starts</li>
              <li><strong>CompleteRegistration:</strong> Track account sign-ups</li>
            </ul>

            {/* Image 24: Standard Events Code */}
            <div className="my-12">
              <div className="relative w-full max-w-[900px] mx-auto rounded-2xl overflow-hidden border-2 border-[#5FA99F]/50 shadow-[0_10px_50px_rgba(95,169,159,0.3)] hover:shadow-[0_15px_60px_rgba(95,169,159,0.4)] transition-all duration-300">
                <Image
                  src="/images/standard-events-code-example.webp"
                  alt="Standard event code example showing how to add Purchase, Lead, and other conversion events"
                  width={612}
                  height={501}
                  className="w-full h-auto"
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 95vw, 900px"
                />
              </div>
              <p className="text-gray-400 font-body text-sm sm:text-base mt-6 text-center italic max-w-[800px] mx-auto px-4">
                Example showing standard event codes placed on conversion pages
              </p>
            </div>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              For platform-specific event tracking:
            </p>

            <ul className="list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2">
              <li><strong>WordPress:</strong> Use the PixelYourSite plugin to configure events without code</li>
              <li><strong>Shopify:</strong> Events are automatically tracked through the Facebook & Instagram integration</li>
              <li><strong>GTM:</strong> Create separate tags for each event type with specific triggers</li>
              <li><strong>Manual:</strong> Add event code snippets to your conversion pages</li>
            </ul>

            <div className="bg-[#1A1A1A]/60 border-l-4 border-[#5FA99F] p-6 rounded-lg mb-8">
              <p className="text-gray-300 font-body text-base leading-relaxed">
                <strong className="text-[#5FA99F]">Next Steps:</strong> Event tracking setup deserves its own detailed guide. For now, focus on getting your base Pixel installed and verified. You can add event tracking later as you optimize your conversion tracking. The base PageView tracking alone enables remarketing and most optimization features.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div id="faq" className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-[#1A1A1A]/40 backdrop-blur-xl border-2 border-[rgba(95,169,159,0.3)] rounded-[20px] p-6 hover:border-[rgba(95,169,159,0.5)] transition-all duration-300">
                  <h3 className="font-heading text-[1.125rem] font-bold text-[#5FA99F] mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 font-body text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-16">
            <h2 className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] font-bold text-white mb-6">
              You're Ready to Track Conversions
            </h2>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              If you followed this guide, your Meta Pixel is now installed, verified, and ready to track conversions from your Facebook and Instagram advertising campaigns.
            </p>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              Here's what you can do now:
            </p>

            <ul className="list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2">
              <li>Create remarketing audiences from your website visitors</li>
              <li>Track which ads drive real conversions and revenue</li>
              <li>Let Facebook optimize your ad delivery to people most likely to convert</li>
              <li>Build lookalike audiences from your best customers</li>
              <li>Measure your true return on ad spend with accurate conversion data</li>
            </ul>

            <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
              The Pixel will immediately start collecting data. Give it at least 24-48 hours of activity before using it for audience creation or conversion optimization to ensure you have enough data for accurate targeting.
            </p>

            <div className="bg-gradient-to-r from-[#1A1A1A]/60 to-[#5FA99F]/10 border-2 border-[#5FA99F]/50 rounded-[20px] p-8 text-center">
              <h3 className="font-heading text-[1.5rem] font-bold text-white mb-4">
                Need Help With Your Facebook Advertising?
              </h3>
              <p className="text-gray-300 font-body text-base leading-relaxed mb-6 max-w-[700px] mx-auto">
                We handle complete Meta Pixel setup, conversion tracking, and full-service Facebook & Instagram advertising campaign management for businesses in Atlanta.
              </p>
              <Link
                href="/contact"
                className="inline-block font-heading text-base px-8 py-4 bg-[#5FA99F] text-black font-semibold rounded-lg hover:bg-[#85C7B3] transition-all duration-300"
              >
                Schedule a Free Strategy Call
              </Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio author={post.author} />

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="font-heading text-[1.5rem] font-bold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/how-much-do-facebook-ads-cost-atlanta" className="bg-[#1A1A1A] rounded-lg p-6 hover:bg-[#222222] transition-colors border border-[#5FA99F]/20 hover:border-[#5FA99F]/40">
                <h4 className="font-heading text-lg font-semibold text-white mb-2">How Much Do Facebook Ads Cost in Atlanta?</h4>
                <p className="text-gray-400 font-body text-sm">Complete 2025 pricing guide with industry breakdowns and ROI calculator</p>
              </Link>
              <Link href="/blog/meta-ads-target-audience-guide" className="bg-[#1A1A1A] rounded-lg p-6 hover:bg-[#222222] transition-colors border border-[#5FA99F]/20 hover:border-[#5FA99F]/40">
                <h4 className="font-heading text-lg font-semibold text-white mb-2">Meta Ads Target Audience Guide</h4>
                <p className="text-gray-400 font-body text-sm">Master targeting strategies to find your perfect customers</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
