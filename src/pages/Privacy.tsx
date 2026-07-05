import { type Route } from '../hooks/useHashRoute';

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-dark-text mb-3">{title}</h2>
      <div className="text-body-text leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function Privacy({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <section className="bg-forest pt-28 md:pt-36 pb-14">
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-amber mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
            Privacy Policy
          </h1>
          <p className="text-cream/70 mt-4">Effective date: January 1, 2025 &nbsp;|&nbsp; Parcela, Inc. — United States</p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">

            <LegalSection title="1. Introduction">
              <p>Parcela, Inc. ("Parcela," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit parcela.co or use our services.</p>
              <p>By using our website or services, you agree to the collection and use of information as described in this policy.</p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
              <p><strong>Information you provide directly:</strong> When you request a quote, place an order, subscribe to our newsletter, or contact us, we collect information including your name, business name, email address, phone number, shipping address, and project specifications.</p>
              <p><strong>Information collected automatically:</strong> When you visit our website, we automatically collect certain information including your IP address, browser type, pages visited, time spent on pages, and referring URLs. We use cookies and similar tracking technologies for this purpose.</p>
              <p><strong>Artwork and files:</strong> When you submit artwork files for production, we store those files to fulfill your order and may retain them for reorder convenience unless you request deletion.</p>
            </LegalSection>

            <LegalSection title="3. How We Use Your Information">
              <p>We use collected information to: process and fulfill your orders; communicate with you about your orders and quotes; respond to your inquiries; send transactional emails and order updates; send marketing communications (with your consent, and you may unsubscribe at any time); improve our website and services; comply with legal obligations; and detect and prevent fraud.</p>
              <p>We do not sell your personal information to third parties.</p>
            </LegalSection>

            <LegalSection title="4. Cookies and Tracking">
              <p>We use essential cookies to operate our website, and analytics cookies to understand how visitors interact with our site. You may disable cookies through your browser settings, though this may affect website functionality.</p>
              <p>We use Google Analytics to analyze website traffic. Google Analytics data is aggregated and does not personally identify you. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.</p>
            </LegalSection>

            <LegalSection title="5. Sharing Your Information">
              <p>We share your information only in the following circumstances:</p>
              <p><strong>Service providers:</strong> We share data with trusted third parties who help us operate our business, including payment processors, shipping carriers, and IT service providers. These parties are contractually obligated to protect your data and may only use it to provide services to us.</p>
              <p><strong>Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.</p>
              <p><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
            </LegalSection>

            <LegalSection title="6. Data Retention">
              <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Order records are typically retained for 7 years for accounting and legal compliance. You may request deletion of your personal data at any time, subject to legal retention requirements.</p>
            </LegalSection>

            <LegalSection title="7. Your Rights">
              <p>Depending on your location, you may have the right to: access the personal information we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict our processing of your data; and withdraw consent for marketing communications at any time by clicking "unsubscribe" in any email or contacting us at hello@parcela.co.</p>
            </LegalSection>

            <LegalSection title="8. Data Security">
              <p>We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </LegalSection>

            <LegalSection title="9. Children's Privacy">
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected information from a minor, please contact us immediately.</p>
            </LegalSection>

            <LegalSection title="10. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.</p>
            </LegalSection>

            <LegalSection title="11. Contact Us">
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, contact us at hello@parcela.co or through the contact form on our website.</p>
            </LegalSection>

          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/contact')} className="bg-forest text-cream font-bold px-7 py-3.5 rounded-full hover:bg-forest-mid transition-colors">
              Contact Us With Questions
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
