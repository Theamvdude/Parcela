import { useState } from 'react';
import { type Route } from '../hooks/useHashRoute';
import { CATEGORIES } from '../data/content';
import { CTABanner } from '../components/Shared';

const ICONS: Record<string, string> = {
  box: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.3 7 12 12l8.7-5 M12 22V12',
  'shopping-bag': 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z M3 6h18 M16 10a4 4 0 0 1-8 0',
  package: 'M16.5 9.4 7.5 4.21 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.27 6.96 12 12.01l8.73-5.05 M12 22.08V12',
  tags: 'M9 7h.01 M3 7v5.586a1 1 0 0 0 .293.707l8.414 8.414a1 1 0 0 0 1.414 0l6.586-6.586a1 1 0 0 0 0-1.414L11.293 5.293A1 1 0 0 0 10.586 5H5a2 2 0 0 0-2 2z',
  'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  layout: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z M3 9h18 M9 21V9',
  gift: 'M20 12v10H4V12 M22 7H2v5h20V7 M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7 M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7',
  briefcase: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16 M2 9h20 M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z',
  utensils: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7',
  calendar: 'M8 2v4 M16 2v4 M3 10h18 M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z',
  sparkles: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z M19 14l.7 2.1L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z M5 14l.7 2.1L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.7L5 14Z',
  layers: 'M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
};

export default function Services({ navigate }: { navigate: (r: Route) => void }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = CATEGORIES.find((c) => c.slug === activeSlug) || null;

  return (
    <>
      {/* Hero */}
      <section className="bg-forest pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-amber mb-4 reveal">What we produce</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream reveal max-w-3xl mx-auto leading-tight">
            Everything your brand prints, packages, and ships.
          </h1>
          <p className="text-cream/70 text-lg mt-6 max-w-2xl mx-auto reveal">
            12 categories. 130+ product types. Custom quotes returned within 24 hours for every item we make.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="mt-8 bg-amber text-dark-text font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-dark transition-all hover:scale-105 reveal"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-cream py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow reveal">Browse categories</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mt-3 reveal">
              Select a category to explore products.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveSlug(activeSlug === cat.slug ? null : cat.slug)}
                className={`flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all duration-200 text-left reveal ${
                  activeSlug === cat.slug
                    ? 'bg-forest border-forest text-cream shadow-lift'
                    : 'bg-white border-cream-deep hover:border-forest hover:shadow-card'
                }`}
              >
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeSlug === cat.slug ? 'bg-cream/20' : 'bg-forest/10'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeSlug === cat.slug ? '#FAF7F2' : '#4A7C2F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={ICONS[cat.icon] || ICONS.box} />
                  </svg>
                </span>
                <div>
                  <p className={`font-bold text-sm leading-snug ${activeSlug === cat.slug ? 'text-cream' : 'text-dark-text'}`}>{cat.name}</p>
                  <p className={`text-xs mt-0.5 ${activeSlug === cat.slug ? 'text-cream/70' : 'text-muted-text'}`}>{cat.items.length} products</p>
                </div>
              </button>
            ))}
          </div>

          {/* Expanded product list */}
          {active && (
            <div className="mt-8 bg-white rounded-3xl p-7 md:p-10 shadow-card reveal border-t-4 border-forest">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-7">
                <div>
                  <p className="eyebrow mb-1">{active.items.length} products</p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-text">{active.name}</h3>
                </div>
                <button
                  onClick={() => navigate('/contact')}
                  className="flex-shrink-0 bg-amber text-dark-text font-bold px-6 py-3 rounded-full hover:bg-amber-dark transition-colors text-sm"
                >
                  Get a Quote for This Category
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {active.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => navigate('/contact')}
                    className="flex items-center gap-2 p-3 rounded-xl bg-cream hover:bg-forest hover:text-cream transition-all duration-200 text-left group"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-forest group-hover:text-cream transition-colors">
                      <path d="M5 12h14 M12 5l7 7-7 7" />
                    </svg>
                    <span className="text-xs font-semibold text-dark-text group-hover:text-cream transition-colors">{item}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All products quick reference */}
      <section className="bg-white py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow reveal">Full product catalog</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-text mt-3 reveal">
              130+ products, one supplier.
            </h2>
            <p className="text-muted-text mt-3 reveal max-w-xl mx-auto">Every item is custom-quoted to your exact specs, materials, and quantities. No standard price lists. No surprises.</p>
          </div>

          <div className="space-y-6">
            {CATEGORIES.map((cat, i) => (
              <div key={cat.slug} className={`rounded-2xl p-6 reveal ${i % 2 === 0 ? 'bg-cream' : 'bg-cream-deep'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={ICONS[cat.icon] || ICONS.box} />
                    </svg>
                  </span>
                  <h3 className="font-display text-lg font-bold text-dark-text">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => navigate('/contact')}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-body-text border border-cream-deep hover:bg-forest hover:text-cream hover:border-forest transition-all duration-200"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner navigate={navigate} />
    </>
  );
}
