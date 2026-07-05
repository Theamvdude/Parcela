import { type Route } from '../hooks/useHashRoute';

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-dark-text mb-3">{title}</h2>
      <div className="text-body-text leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function Terms({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <section className="bg-forest pt-28 md:pt-36 pb-14">
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-amber mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-cream/70 mt-4">Effective date: January 1, 2025 &nbsp;|&nbsp; Parcela, Inc. — United States</p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">

            <LegalSection title="1. Acceptance of Terms">
              <p>By accessing parcela.co or placing an order with Parcela, Inc. ("Parcela," "we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, do not use our services.</p>
              <p>These terms apply to all customers, visitors, and users of our website and services, whether placing orders for custom packaging, printing, labels, promotional products, or any other products offered through Parcela.</p>
            </LegalSection>

            <LegalSection title="2. Services">
              <p>Parcela provides custom printing and packaging services including but not limited to custom boxes, bags, flexible packaging, labels and stickers, marketing materials, large format printing, promotional products, office and corporate printing, restaurant and food printing, event and wedding printing, specialty printing, and custom solutions.</p>
              <p>All products are manufactured to customer specifications. Parcela does not sell standard off-the-shelf inventory. Every order is custom-produced based on specifications submitted by the customer.</p>
            </LegalSection>

            <LegalSection title="3. Quotes and Pricing">
              <p>All prices are provided through custom quotes based on your product type, specifications, quantity, materials, and finishing requirements. Quoted prices are valid for 30 days from the date of issue unless otherwise stated in writing.</p>
              <p>Parcela reserves the right to adjust a quote if the specifications provided change before production begins. Final pricing is confirmed in a written order confirmation.</p>
              <p>All prices are in US dollars. Applicable taxes will be added where required by law.</p>
            </LegalSection>

            <LegalSection title="4. Order Approval and Production">
              <p>Production begins only after the customer provides written approval of: (a) the detailed quote, (b) artwork files reviewed and signed off, and (c) physical sample approval where applicable. Parcela will not start full production without written customer sign-off at each required stage.</p>
              <p>Customers are responsible for reviewing all artwork, proofs, and physical samples carefully before approval. Errors not caught at the approval stage are the responsibility of the customer.</p>
              <p>Parcela reserves the right to refuse orders that contain unlawful, infringing, or offensive content.</p>
            </LegalSection>

            <LegalSection title="5. Artwork and Intellectual Property">
              <p>Customers are responsible for ensuring they own or have the right to use all artwork, logos, trademarks, and content submitted to Parcela. By submitting artwork, you confirm you have all necessary rights and grant Parcela a limited license to reproduce that content solely for fulfilling your order.</p>
              <p>Parcela is not responsible for any intellectual property claims arising from artwork submitted by the customer. You agree to indemnify Parcela against any claims arising from your submitted content.</p>
            </LegalSection>

            <LegalSection title="6. Payment Terms">
              <p>Payment is due as follows unless otherwise agreed in writing: a deposit of 50% is required to initiate production, with the remaining balance due before shipment. For repeat customers with established credit, net payment terms may be arranged by written agreement.</p>
              <p>Parcela accepts payment via bank transfer, major credit cards, and other methods specified in your quote. Late payments may be subject to a 1.5% monthly finance charge.</p>
            </LegalSection>

            <LegalSection title="7. Lead Times and Delivery">
              <p>Standard lead times are 4 to 6 weeks from written order approval, depending on product type and complexity. Lead times are estimates and are not guaranteed unless specified as such in a written agreement.</p>
              <p>Parcela is not liable for delays caused by events outside its control including shipping carrier delays, customs, natural disasters, supply chain disruptions, or force majeure events.</p>
              <p>Delivery is made to the US shipping address provided at the time of order. Risk of loss passes to the customer upon delivery to the carrier.</p>
            </LegalSection>

            <LegalSection title="8. Quality Guarantee">
              <p>Parcela guarantees that all delivered products will materially conform to the approved sample and approved specifications. Customers must inspect goods within 10 business days of receipt and report any defects or non-conformance in writing.</p>
              <p>In the event of a confirmed quality defect caused by Parcela, our sole obligation is, at our discretion, to reprint the defective portion of the order or issue a credit toward a future order. We do not issue cash refunds for orders that have entered production.</p>
            </LegalSection>

            <LegalSection title="9. Limitation of Liability">
              <p>To the maximum extent permitted by law, Parcela's total liability for any claim arising from or related to an order shall not exceed the amount paid by the customer for that specific order.</p>
              <p>Parcela is not liable for any indirect, incidental, consequential, special, or punitive damages, including lost profits, lost revenue, or loss of business opportunity, even if advised of the possibility of such damages.</p>
            </LegalSection>

            <LegalSection title="10. Governing Law">
              <p>These Terms and Conditions are governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association, seated in Delaware.</p>
            </LegalSection>

            <LegalSection title="11. Changes to Terms">
              <p>Parcela reserves the right to update these Terms and Conditions at any time. Updated terms will be posted on this page with a new effective date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.</p>
            </LegalSection>

            <LegalSection title="12. Contact">
              <p>If you have questions about these Terms and Conditions, contact us at hello@parcela.co or through our contact page.</p>
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
