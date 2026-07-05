import { useState } from 'react';
import { type Route } from '../hooks/useHashRoute';
import { PageHero, CTABanner } from '../components/Shared';

const STEPS = [
  {
    num: '01',
    title: 'Brief & Quote',
    time: '24 hours',
    desc: 'Submit your specs, artwork, and quantity. We route to the best-fit vendor from our network of 1,000+ manufacturers and return a detailed, line-itemed quote within 24 hours.',
  },
  {
    num: '02',
    title: 'Artwork Approval',
    time: '1-3 days',
    desc: 'We prepare a detailed digital color proof based on your artwork and specifications. You review, request any changes, and give written approval before production begins.',
  },
  {
    num: '03',
    title: 'Production & QC',
    time: '14-21 days',
    desc: 'Your order runs with three QC checkpoints: pre-production material check, mid-run print inspection, and pre-shipment final review. We find issues before they ship.',
  },
  {
    num: '04',
    title: 'Shipping & Delivery',
    time: '5-10 days',
    desc: 'Finished goods ship door-to-door to your US warehouse. You receive full tracking and shipping documentation. Our logistics team handles everything end to end.',
  },
];

const FAQS = [
  {
    q: 'How fast do I get a quote?',
    a: 'Within 24 hours of submitting your specs. If your project is complex, we will send an initial estimate the same day and a detailed breakdown within 24 hours.',
  },
  {
    q: 'What is the total lead time?',
    a: '3 to 5 weeks end-to-end from quote approval to delivery at your US warehouse. This includes artwork approval, full production, and shipping.',
  },
  {
    q: 'Can I review artwork before production?',
    a: 'Yes. We provide detailed digital color proofs for your approval before production begins. You give written sign-off before any materials are committed.',
  },
  {
    q: 'What happens if there are quality issues?',
    a: 'If your order has defects that do not match your approved specifications, we reprint or credit your account. Our three-checkpoint QC process catches most issues before shipment.',
  },
  {
    q: 'Do you handle shipping and logistics?',
    a: 'Yes. All quotes include door-to-door delivery to your US warehouse. Our logistics team handles freight and shipping documentation. You receive full tracking from production to delivery.',
  },
  {
    q: 'What materials and finishes are available?',
    a: 'Corrugated kraft and white board, SBS folding carton, rigid greyboard, poly mailers, stand-up pouches, and custom inserts. Finishes include matte, gloss, soft-touch, spot UV, foil stamping, embossing, and debossing.',
  },
  {
    q: 'Is there a minimum order quantity?',
    a: 'Minimums vary by product type and are provided in your custom quote. We serve both growing brands and high-volume commercial buyers across all 12 categories.',
  },
];

export default function Process({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        title="From quote to delivery in 3 to 5 weeks."
        subtitle="Four steps, three quality checkpoints, and a dedicated account manager from start to finish."
      />
      <Timeline />
      <section className="bg-white py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="bg-forest rounded-3xl p-8 md:p-12 text-center reveal">
            <p className="eyebrow text-amber mb-3">Total timeline</p>
            <p className="font-display text-5xl md:text-7xl font-bold text-cream">3-5 weeks</p>
            <p className="text-cream/70 mt-4 text-lg">From first quote to delivery at your door.</p>
          </div>
        </div>
      </section>
      <FAQ />
      <CTABanner navigate={navigate} />
    </>
  );
}

function Timeline() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow reveal">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-3 reveal">
            Four steps from brief to delivered.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 relative reveal"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-5xl font-bold text-cream-deep">{step.num}</span>
                <span className="bg-forest/10 text-forest text-xs font-bold px-3 py-1.5 rounded-full">{step.time}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-dark-text mb-3">{step.title}</h3>
              <p className="text-sm text-body-text leading-relaxed">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-cream-deep z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow reveal">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-3 reveal">
            Questions, answered.
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-card overflow-hidden reveal">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-bold text-dark-text text-lg">{faq.q}</span>
                <svg
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className={`flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <p className="px-5 pb-5 text-body-text leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
