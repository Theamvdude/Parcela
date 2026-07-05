import { type Route } from '../hooks/useHashRoute';
import { UNSPLASH } from '../data/content';
import { PageHero, CTABanner } from '../components/Shared';

export default function CaseStudies({ navigate }: { navigate: (r: Route) => void }) {
  const studies = [
    {
      img: UNSPLASH.candle,
      type: 'Candle Brand',
      brand: 'Hearthlight Candles',
      challenge: 'Inconsistent print quality from their previous supplier. Kraft board felt flimsy and customers were complaining about dented corners on arrival. Needed a reliable partner for consistent quality at scale.',
      solution: 'Switched to E-flute kraft board with full CMYK print and matte lamination. A dedicated account manager now coordinates each reorder to the same approved spec.',
      order: '5,000',
      reorder: '100%',
      result: 'Zero defect complaints since switching to Parcela.',
    },
    {
      img: UNSPLASH.rigidBox,
      type: 'Skincare Brand',
      brand: 'Aura Botanics',
      challenge: 'Needed rigid luxury boxes for a serum launch with gold foil logo and magnetic closure. US quotes made the product unviable at their planned price point and no supplier could meet the timeline.',
      solution: 'Produced rigid boxes with foil stamping and magnetic closure. Three-checkpoint QC caught a foil alignment issue before shipment. Delivered on schedule for the product launch.',
      order: '2,000',
      reorder: '4x',
      result: 'Launched on time. Reordered four times since launch.',
    },
    {
      img: UNSPLASH.customBox,
      type: 'Subscription Box Brand',
      brand: 'Glow Season',
      challenge: 'Shipping 3,000 boxes monthly with inconsistent print color run to run. Needed a reliable supply partner who could maintain consistent color and quality across recurring monthly orders.',
      solution: 'Set up a standing monthly production of 3,000 mailer boxes. Dedicated account manager coordinates each month\'s run against the original approved artwork with a rolling lead time.',
      order: '3,000/mo',
      reorder: 'Monthly',
      result: 'Consistent color and quality maintained across every monthly run.',
    },
  ];

  return (
    <>
      <PageHero
        title="Real brands. Real results."
        subtitle="See how DTC brands across candles, skincare, and subscription boxes worked with Parcela to solve packaging challenges and scale with confidence."
      />

      <section className="bg-cream py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8 space-y-16">
          {studies.map((s, i) => (
            <div key={s.brand} className="bg-white rounded-3xl overflow-hidden shadow-card reveal">
              <div className="grid md:grid-cols-5">
                <div className={`md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src={s.img} alt={s.brand} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <p className="eyebrow mb-2">{s.type}</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-text mb-6">{s.brand}</h2>

                  <div className="grid sm:grid-cols-2 gap-4 mb-7">
                    <div className="text-center bg-cream-deep rounded-xl p-4">
                      <p className="font-display text-3xl md:text-4xl font-bold text-amber">{s.order}</p>
                      <p className="text-xs text-muted-text mt-1">Order Size</p>
                    </div>
                    <div className="text-center bg-cream-deep rounded-xl p-4">
                      <p className="font-display text-3xl md:text-4xl font-bold text-amber">{s.reorder}</p>
                      <p className="text-xs text-muted-text mt-1">Reorder Rate</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-dark-text text-sm mb-1">Challenge</p>
                      <p className="text-sm text-body-text leading-relaxed">{s.challenge}</p>
                    </div>
                    <div>
                      <p className="font-bold text-dark-text text-sm mb-1">Solution</p>
                      <p className="text-sm text-body-text leading-relaxed">{s.solution}</p>
                    </div>
                    <div className="bg-forest/10 rounded-xl p-4">
                      <p className="font-bold text-forest text-sm mb-0.5">Result</p>
                      <p className="text-sm text-body-text leading-relaxed">{s.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </>
  );
}
