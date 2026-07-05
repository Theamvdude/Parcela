import { type Route } from '../hooks/useHashRoute';
import { UNSPLASH } from '../data/content';
import { CTABanner } from '../components/Shared';

export default function About({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <HeroSection />
      <Story />
      <Network />
      <Values />
      <Team />
      <CTABanner navigate={navigate} />
    </>
  );
}

function HeroSection() {
  return (
    <section className="bg-cream pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">Our story</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text leading-[1.1] mb-6">
              Built to close the gap between{' '}
              <span className="italic text-forest">cost and quality.</span>
            </h1>
            <p className="text-lg text-body-text leading-relaxed mb-6">
              Parcela is a US-based custom packaging and printing company. We connect American brands to a vetted network of 1,000+ manufacturers, delivering premium quality at 35 to 50 percent below standard market pricing.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lift aspect-[4/3] reveal">
            <img src={UNSPLASH.workshop} alt="Packaging production" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="reveal">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-text mb-6">The Parcela story</h2>
          <div className="space-y-4 text-body-text leading-relaxed text-lg">
            <p>
              Parcela was founded by US brand operators who kept running into the same problem. Premium packaging quality was available, but the pricing made it unworkable for growing brands. Existing suppliers added wide margins between manufacturers and customers, and small brands paid the most for it.
            </p>
            <p>
              We built Parcela to fix that. We operate from the United States and have spent years assembling a direct network of 1,000+ vetted manufacturers. Every factory is inspected, audited, and held to our three-checkpoint quality control process. We handle the sourcing, the communication, the QC, and the logistics so brands get production-direct pricing without production-direct complexity.
            </p>
            <p>
              Today, Parcela serves candle brands, skincare founders, supplement companies, subscription box operators, restaurants, event planners, and commercial print buyers across the United States. Every customer gets a dedicated account manager. Every quote returns within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Network() {
  const stats = [
    { num: '1,000+', label: 'Vetted Vendors' },
    { num: '130+', label: 'Product Types' },
    { num: '12', label: 'Categories' },
  ];
  return (
    <section className="bg-forest py-20 text-cream">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow text-amber reveal">Our network</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 reveal">
            A manufacturing network, not a single vendor.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <USMap />
            <p className="text-center text-cream/70 text-sm mt-4">Serving brands across all 50 US states</p>
          </div>
          <div className="grid grid-cols-3 gap-4 reveal">
            {stats.map((s) => (
              <div key={s.label} className="bg-cream/10 rounded-2xl p-6 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-amber leading-none">{s.num}</p>
                <p className="text-sm text-cream/70 mt-2">{s.label}</p>
              </div>
            ))}
            <div className="col-span-3 bg-cream/10 rounded-2xl p-6">
              <p className="text-cream leading-relaxed text-sm">
                Parcela is headquartered in the United States. Our team manages vendor relationships, quality inspections, and logistics so you get the best pricing with a single US-based point of contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function USMap() {
  const dots = [
    { x: 22, y: 30 }, { x: 30, y: 25 }, { x: 40, y: 28 }, { x: 50, y: 32 },
    { x: 60, y: 30 }, { x: 70, y: 28 }, { x: 78, y: 32 }, { x: 35, y: 40 },
    { x: 55, y: 38 }, { x: 65, y: 42 }, { x: 45, y: 45 }, { x: 72, y: 42 },
  ];
  return (
    <div className="relative bg-cream/5 rounded-3xl p-8 overflow-hidden">
      <svg viewBox="0 0 100 65" className="w-full h-auto">
        {/* Simplified US outline */}
        <g fill="#4A7C2F" fillOpacity="0.3">
          <path d="M10 20 Q15 15 25 18 L45 16 Q55 14 65 16 L80 18 Q88 20 90 25 L88 35 Q85 42 80 44 L70 46 L60 50 Q50 52 40 50 L25 46 Q15 42 12 36 L10 28 Z" />
          <path d="M90 25 Q94 22 96 26 L95 32 Q93 35 90 33 Z" />
          <path d="M20 44 Q18 48 16 50 L14 53 Q16 54 18 52 L22 48 Z" />
        </g>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="1.6" fill="#E8A045" className="animate-pulse" />
        ))}
      </svg>
    </div>
  );
}

function Values() {
  const values = [
    { title: 'Quality First', desc: 'Every order ships through three quality checkpoints. We find issues before your customer does.', icon: <path d="M9 12l2 2 4-4 M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" /> },
    { title: 'Transparent Pricing', desc: 'Custom quotes with no hidden fees. What you see is what you pay, every time.', icon: <path d="M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> },
    { title: 'Proof Before Production', desc: 'Detailed digital color proofs reviewed and approved by you before any materials are committed. You sign off before production begins.', icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" /> },
    { title: 'Partnership Not Transactions', desc: 'One account manager who knows your brand, specs, and preferences across every order.', icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" /> },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow reveal">What we value</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-3 reveal">
            Four principles we do not compromise on.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-cream rounded-2xl p-7 reveal">
              <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {v.icon}
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-dark-text mb-2">{v.title}</h3>
              <p className="text-sm text-body-text leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: 'Marcus Lee', role: 'Founder & CEO', bio: 'Former brand operator who built Parcela to fix the pricing gap between brands and manufacturers.' },
    { name: 'Priya Sharma', role: 'Head of Production', bio: 'Packaging industry veteran with 12 years overseeing QC protocols and vendor relationships.' },
    { name: 'James Okonkwo', role: 'Head of Client Services', bio: 'DTC brand expert. Manages the account team and ensures every client has a dedicated US-based contact.' },
  ];
  return (
    <section className="bg-cream py-20">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow reveal">The team</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text mt-3 reveal">
            People who know packaging.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-7 text-center shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 reveal">
              <div className="w-24 h-24 rounded-full bg-forest/10 mx-auto mb-5 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-dark-text">{m.name}</h3>
              <p className="text-sm text-forest font-bold mb-3">{m.role}</p>
              <p className="text-sm text-body-text leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
