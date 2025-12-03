import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Facebook & Instagram Advertising Services | Drive Lead Media',
  description: 'Full-service Meta advertising: custom website design, professional video ads, complete campaign setup, and continuous optimization. Get targeted Facebook and Instagram ads that bring real customers.',
  keywords: 'facebook advertising services, instagram ads services, meta advertising agency, video ad production, custom website design, social media advertising, facebook ad campaigns, instagram marketing services',
  openGraph: {
    title: 'Facebook & Instagram Advertising Services | Drive Lead Media',
    description: 'Full-service Meta advertising including websites, video ads, and campaign management.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#000000] relative">
      {/* Background gradient orbs */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#5FA99F] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[5%] w-[350px] h-[350px] bg-[#85C7B3] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] bg-[#5FA99F] opacity-10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-[140px] pb-[80px] px-6 bg-gradient-to-br from-[#0A0A0A] to-[#000000] relative">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-heading text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white mb-6 leading-[1.1]">
            Everything You Need to Win on Facebook & Instagram
          </h1>
          <p className="font-body text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#5FA99F] max-w-[800px] mx-auto leading-[1.6]">
            We handle every part of your advertising — from strategy to creative to results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[80px] px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Service 1: Custom Websites */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-white mb-6">
                  Custom Website Design
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-300 leading-[1.7] mb-6">
                  Fast, modern websites built to convert visitors into customers. If your current site isn't pulling its weight, we'll rebuild it from scratch.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Mobile-first design that looks great on every device</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Clear calls-to-action that guide visitors to contact you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Lightning-fast loading for better search rankings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Built to convert ad traffic into paying customers</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/20 shadow-lg hover:border-[#5FA99F]/40 hover:shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-400">
                  <Image
                    src="/images/website-icon.webp"
                    alt="Custom Website Design"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Video & Image Ads */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/20 shadow-lg hover:border-[#5FA99F]/40 hover:shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-400">
                  <Image
                    src="/images/creative-icon.webp"
                    alt="Video and Image Ads"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-white mb-6">
                  Professional Video & Image Ads
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-300 leading-[1.7] mb-6">
                  Actor-led videos and scroll-stopping images made specifically for Facebook and Instagram. No more generic stock photos or DIY footage.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Professional actors who represent your brand perfectly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Scripts written to connect with your specific audience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Multiple versions for testing different approaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Created specifically for mobile viewing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: Complete Campaign Setup */}
          <div className="mb-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-white mb-6">
                  Complete Campaign Setup
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-300 leading-[1.7] mb-6">
                  We build everything for you — from finding your ideal customers to tracking every lead that comes through.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Finding your perfect customers by age, location, and interests</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Complete Facebook and Instagram account setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Tracking setup so you see exactly where leads come from</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Budget management to get the most from every dollar</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/20 shadow-lg hover:border-[#5FA99F]/40 hover:shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-400">
                  <Image
                    src="/images/target-icon.webp"
                    alt="Complete Campaign Setup"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Continuous Improvement */}
          <div className="mb-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative h-[300px] sm:h-[400px] bg-[#1A1A1A] rounded-[24px] overflow-hidden border-2 border-[#5FA99F]/20 shadow-lg hover:border-[#5FA99F]/40 hover:shadow-[0_0_30px_rgba(95,169,159,0.3)] transition-all duration-400">
                  <Image
                    src="/images/performance-icon.webp"
                    alt="Continuous Improvement"
                    fill
                    className="object-contain p-12"
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-bold text-white mb-6">
                  Continuous Improvement
                </h2>
                <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-gray-300 leading-[1.7] mb-6">
                  We test new ads, adjust budgets, and remove what's not working. Your campaigns get better every single week.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Weekly performance reports showing what's working</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Testing new creative to find what converts best</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Budget adjustments to maximize results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#5FA99F] text-[1.5rem] font-bold">✓</span>
                    <span className="font-body text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] text-gray-300">Direct communication whenever you have questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] px-6 bg-gradient-to-br from-[#0A0A0A] to-[#000000] relative">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-heading text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] font-bold text-white mb-6">
            Ready to See What We Can Do For You?
          </h2>
          <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] text-[#5FA99F] mb-8 leading-[1.6]">
            Schedule a free strategy call to discuss your business and how we can help you grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block font-ui text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] px-8 py-4 bg-[#5FA99F] text-white font-bold rounded-full hover:bg-[#4E8B82] hover:shadow-lg transition-all duration-300"
            >
              Schedule Your Free Call
            </Link>
            <Link
              href="/portfolio"
              className="inline-block font-ui text-[1rem] sm:text-[1.05rem] md:text-[1.1rem] px-8 py-4 bg-transparent border-2 border-[#5FA99F] text-[#5FA99F] font-bold rounded-full hover:bg-[#5FA99F] hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
