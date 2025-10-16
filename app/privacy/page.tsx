import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Drive Lead Media',
  description: 'Learn how Drive Lead Media collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-[100px] pb-[80px] px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#85C7B3] hover:text-[#F2A922] transition-colors duration-300 mb-6 font-serif text-[0.95rem]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-serif text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-bold text-[#EEF4D9] mb-4 leading-[1.1] break-words">
            Privacy Policy
          </h1>
          <p className="font-serif text-[1rem] text-[#85C7B3]">
            Last Updated: October 13, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 font-serif text-[#85C7B3] leading-[1.8]">
          {/* Introduction */}
          <section>
            <p className="text-[1.05rem]">
              At Drive Lead Media ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
              <a href="https://driveleadmedia.com" className="text-[#F2A922] hover:underline">
                driveleadmedia.com
              </a>{' '}
              or use our services.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-[1.25rem] font-semibold text-[#EEF4D9] mb-2">
                  Personal Information
                </h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Fill out contact forms on our website</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Request a consultation or strategy call</li>
                  <li>Engage with our services</li>
                </ul>
                <p className="mt-2">
                  This information may include: name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[1.25rem] font-semibold text-[#EEF4D9] mb-2">
                  Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referral source</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Device identifiers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Communicate with you about our services, including responding to inquiries</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve and optimize our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues or fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              3. How We Share Your Information
            </h2>
            <p className="mb-3">We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#EEF4D9]">Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., email marketing, analytics, hosting)
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Business Partners:</strong> With your consent, we may share information with partners who provide complementary services
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Legal Requirements:</strong> When required by law, legal process, or to protect our rights and safety
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
              </li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <p className="mt-3">
              We use Google Analytics to analyze website usage. You can opt out of Google Analytics by installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F2A922] hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#EEF4D9]">Access:</strong> Request access to your personal information
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Correction:</strong> Request correction of inaccurate information
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Opt-Out:</strong> Unsubscribe from marketing communications
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Data Portability:</strong> Request a copy of your data in a portable format
              </li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:hello@driveleadmedia.com" className="text-[#F2A922] hover:underline">
                hello@driveleadmedia.com
              </a>.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[rgba(133,199,179,0.05)] p-6 rounded-lg border border-[rgba(133,199,179,0.2)]">
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2">
              <li>
                <strong className="text-[#EEF4D9]">Email:</strong>{' '}
                <a href="mailto:hello@driveleadmedia.com" className="text-[#F2A922] hover:underline">
                  hello@driveleadmedia.com
                </a>
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Website:</strong>{' '}
                <a href="https://driveleadmedia.com" className="text-[#F2A922] hover:underline">
                  driveleadmedia.com
                </a>
              </li>
              <li>
                <strong className="text-[#EEF4D9]">Location:</strong> Atlanta, GA
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
