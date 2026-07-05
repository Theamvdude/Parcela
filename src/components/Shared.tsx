import { type Route } from '../hooks/useHashRoute';

export function CTABanner({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="bg-forest py-20">
      <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream reveal max-w-3xl mx-auto">
          Ready to get a custom quote?
        </h2>
        <p className="text-cream/70 text-lg mt-4 max-w-xl mx-auto reveal">
          Tell us about your project and receive a detailed quote within 24 hours.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-8 bg-amber text-dark-text font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-dark transition-all hover:scale-105 reveal"
        >
          Request a Free Quote
        </button>
      </div>
    </section>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-forest pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow text-amber mb-4 reveal">Parcela</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream reveal max-w-3xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="text-cream/70 text-lg mt-6 max-w-2xl mx-auto reveal">{subtitle}</p>
      </div>
    </section>
  );
}
