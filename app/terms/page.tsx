import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Drive Lead Media',
  description: 'Read the terms and conditions for using Drive Lead Media\'s services and website.',
};

export default function TermsPage() {
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
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] font-bold text-[#EEF4D9] mb-4 leading-[1.1]">
            Terms of Service
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
              Welcome to Drive Lead Media. By accessing or using our website{' '}
              <a href="https://driveleadmedia.com" className="text-[#F2A922] hover:underline">
                driveleadmedia.com
              </a>{' '}
              or engaging our services, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using our services.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or using this website and our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              2. Services Description
            </h2>
            <p className="mb-3">
              Drive Lead Media provides digital marketing services, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Meta (Facebook & Instagram) advertising campaign management</li>
              <li>Video ad production and creative development</li>
              <li>Website design and development</li>
              <li>Marketing strategy and consultation</li>
              <li>Campaign optimization and performance analytics</li>
            </ul>
            <p className="mt-3">
              The specific scope of services will be outlined in individual service agreements or proposals.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              3. Client Responsibilities
            </h2>
            <p className="mb-3">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Respond to requests for information or approvals in a timely manner</li>
              <li>Grant necessary access to relevant accounts and platforms</li>
              <li>Comply with all applicable laws and platform policies</li>
              <li>Maintain the confidentiality of account credentials</li>
              <li>Pay all fees as outlined in your service agreement</li>
              <li>Provide feedback and approve deliverables within agreed timeframes</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              4. Payment Terms
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[#EEF4D9]">Fees:</strong> All fees and payment schedules will be specified in your service agreement or proposal. Fees are exclusive of applicable taxes unless otherwise stated.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Payment Schedule:</strong> Invoices are due upon receipt unless otherwise agreed. Late payments may incur additional fees and may result in suspension of services.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Ad Spend:</strong> For advertising services, you are responsible for all advertising spend paid directly to advertising platforms (e.g., Meta). Our service fees are separate from ad spend.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Refunds:</strong> Due to the custom nature of our services, all fees are non-refundable once work has commenced, except as otherwise stated in writing.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              5. Intellectual Property
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[#EEF4D9]">Our Property:</strong> All content on our website, including text, graphics, logos, and software, is the property of Drive Lead Media and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Client Materials:</strong> You retain ownership of materials you provide to us. By providing materials, you grant us a license to use them for the purpose of delivering services to you.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Deliverables:</strong> Upon full payment, you will own the final deliverables created specifically for you. We retain the right to use work samples for portfolio and marketing purposes unless otherwise agreed in writing.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              6. Performance and Results
            </h2>
            <p>
              While we strive to deliver exceptional results, we cannot guarantee specific outcomes, metrics, or return on investment (ROI) from marketing campaigns. Results depend on many factors including market conditions, competition, ad spend, and platform algorithms. We make no warranties regarding campaign performance or business results.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              7. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement. This obligation survives termination of services. We will not disclose your confidential information except as required by law or with your written consent.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              8. Term and Termination
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[#EEF4D9]">Service Term:</strong> The term of service will be specified in your service agreement.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Termination by Client:</strong> You may terminate services with written notice as specified in your service agreement. You remain responsible for payment of fees for services rendered and any costs incurred prior to termination.
              </p>
              <p>
                <strong className="text-[#EEF4D9]">Termination by Us:</strong> We reserve the right to terminate services if you breach these Terms, fail to make payment, or engage in conduct that we deem harmful to our business or reputation.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Drive Lead Media shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, revenue, or data, arising from or related to our services. Our total liability shall not exceed the fees paid by you for services during the six months preceding the claim.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Drive Lead Media from any claims, damages, losses, or expenses (including legal fees) arising from your use of our services, your violation of these Terms, or your violation of any third-party rights.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              11. Third-Party Services
            </h2>
            <p>
              Our services may involve or integrate with third-party platforms (e.g., Meta, Google). Your use of third-party services is subject to their respective terms and policies. We are not responsible for the performance, availability, or policies of third-party services.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              12. Dispute Resolution
            </h2>
            <p>
              Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, with the arbitration taking place in Atlanta, Georgia.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              13. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              14. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              15. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              16. Entire Agreement
            </h2>
            <p>
              These Terms, together with any service agreements or proposals, constitute the entire agreement between you and Drive Lead Media regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-[rgba(133,199,179,0.05)] p-6 rounded-lg border border-[rgba(133,199,179,0.2)]">
            <h2 className="font-serif text-[1.75rem] font-bold text-[#EEF4D9] mb-4">
              Contact Us
            </h2>
            <p className="mb-3">
              If you have any questions about these Terms of Service, please contact us:
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
