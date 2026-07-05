import { type Route } from '../hooks/useHashRoute';

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-dark-text mb-3">{title}</h2>
      <div className="text-body-text leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}

export default function Refund({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <section className="bg-forest pt-28 md:pt-36 pb-14">
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-amber mb-4">Legal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-cream leading-tight">
            Refund Policy
          </h1>
          <p className="text-cream/70 mt-4">Effective date: January 1, 2025 &nbsp;|&nbsp; Parcela, Inc. — United States</p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* Summary callout */}
          <div className="bg-forest rounded-2xl p-7 mb-8 reveal">
            <p className="text-amber font-bold uppercase tracking-[0.1em] text-xs mb-2">Important Summary</p>
            <p className="text-cream font-display text-lg font-bold leading-snug">
              All products are custom-manufactured to your approved specifications. We do not accept returns or issue cash refunds on completed production runs. If a confirmed defect is caused by Parcela, we will reprint or credit your account.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">

            <LegalSection title="1. Custom Manufacturing Policy">
              <p>All products manufactured by Parcela are custom-produced to order based on specifications and artwork approved in writing by the customer. Because every item is made exclusively for the ordering customer, we are unable to accept returns, exchanges, or issue cash refunds for completed or in-progress orders.</p>
              <p>This policy applies to all product categories including custom boxes, bags, flexible packaging, labels, stickers, marketing materials, large format printing, promotional products, specialty printing, and all other custom items.</p>
            </LegalSection>

            <LegalSection title="2. Quality Defects Caused by Parcela">
              <p>If you receive products with defects caused by Parcela's production process, and those defects represent a material departure from your approved sample and written specifications, Parcela will at its sole discretion:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reprint the defective portion of the order at no additional charge, or</li>
                <li>Issue a credit toward a future order equal to the value of the defective goods.</li>
              </ul>
              <p>To initiate a defect claim: you must notify us in writing at hello@parcela.co within 10 business days of receiving your order. You must provide written documentation of the defect including photographs, a description of the non-conformance, and the quantity affected. Claims submitted after 10 business days of delivery cannot be accepted.</p>
            </LegalSection>

            <LegalSection title="3. Customer Error — No Refund">
              <p>Parcela is not responsible for errors that were present in the customer-approved artwork, proof, or sample at the time of approval. This includes but is not limited to: spelling errors, incorrect colors, incorrect dimensions, wrong fonts, missing text, and incorrect file formatting submitted by the customer.</p>
              <p>Customers are responsible for thoroughly reviewing all proofs and physical samples before providing written approval. Production begins only after written customer sign-off.</p>
            </LegalSection>

            <LegalSection title="4. Sample Costs">
              <p>Physical samples are produced at cost and may be charged depending on complexity. Sample costs are typically credited toward your full production order when production proceeds. If you choose not to proceed with a full order after receiving a sample, sample costs are non-refundable.</p>
            </LegalSection>

            <LegalSection title="5. Order Cancellations">
              <p>Orders may be cancelled without charge before artwork has been submitted and approved. Once artwork approval has been given and production has been initiated, cancellation is not possible and deposits are non-refundable.</p>
              <p>If a customer requests cancellation before approval is given but after a deposit has been processed, the deposit may be partially refunded depending on work already performed. Any refund in this circumstance is at Parcela's discretion.</p>
            </LegalSection>

            <LegalSection title="6. Shipping Damage">
              <p>If your order arrives visibly damaged in transit, note the damage on the carrier's delivery receipt at time of receipt and photograph the damage immediately. Contact us at hello@parcela.co within 5 business days of delivery with photos of the damaged packaging and product.</p>
              <p>Parcela will work with the carrier to file a freight claim on your behalf. Resolution timelines depend on the carrier's claims process. Parcela is not liable for shipping damage beyond the extent covered by the freight claim.</p>
            </LegalSection>

            <LegalSection title="7. Color Variation">
              <p>Color output can vary between digital proofs, physical samples, and full production runs due to differences in printing processes, materials, and substrates. Parcela takes every precaution to match approved physical samples, but minor color variation between the sample and full production run is inherent to the printing process and does not constitute a defect.</p>
              <p>If color accuracy is critical to your order, please communicate this clearly before production and request a press proof where applicable.</p>
            </LegalSection>

            <LegalSection title="8. Quantity Variation">
              <p>Custom packaging and printing orders are subject to a standard industry tolerance of plus or minus 5% on delivered quantity. If the delivered quantity falls within this tolerance, it is not considered a defect and no refund or reprint is issued. You will be invoiced or refunded for any quantity variation beyond this tolerance.</p>
            </LegalSection>

            <LegalSection title="9. How to Contact Us">
              <p>For all quality concerns, defect claims, or questions about this Refund Policy, contact our client services team at hello@parcela.co. We are committed to resolving all legitimate quality issues promptly and fairly.</p>
            </LegalSection>

          </div>

          <div className="mt-10 bg-forest/10 rounded-2xl p-6 text-center reveal">
            <p className="font-display text-xl font-bold text-dark-text mb-2">Have a quality concern?</p>
            <p className="text-body-text text-sm mb-5">Contact us within 10 business days of delivery and we will resolve it.</p>
            <button onClick={() => navigate('/contact')} className="bg-amber text-dark-text font-bold px-7 py-3.5 rounded-full hover:bg-amber-dark transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
