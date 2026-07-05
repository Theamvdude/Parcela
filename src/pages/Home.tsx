import { type Route } from '../hooks/useHashRoute';
import { UNSPLASH } from '../data/content';
import { CTABanner } from '../components/Shared';

export default function Home({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <TrustBar />
      <FeaturedServices navigate={navigate} />
      <WhyParcela />
      <Testimonials />
      <BlogPreview navigate={navigate} />
      <CTABanner navigate={navigate} />
    </>
  );
}

function Hero({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cream via-cream to-cream-deep flex items-center pt-24 md:pt-20 pb-12 relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-forest/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/15 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-5 sm:px-8 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-full mb-6">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              US-based custom packaging and printing
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text leading-[1.05] mb-6">
              Packaging that makes your brand{' '}
              <span className="italic text-forest relative">
                impossible to ignore.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4c50 0 100 4 200 4" stroke="#E8A045" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-body-text leading-relaxed max-w-xl mb-8">
              Custom packaging, labels, marketing materials, and more. 1,000+ vetted vendors, 12 categories, 130+ product types — all custom-quoted to your exact specs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="group bg-amber text-dark-text font-bold px-7 py-4 rounded-full text-lg hover:bg-amber-dark transition-all hover:scale-[1.02] shadow-lift hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get a Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => navigate('/services')}
                className="bg-white border-2 border-forest text-forest font-bold px-7 py-4 rounded-full text-lg hover:bg-forest hover:text-cream transition-all shadow-card flex items-center justify-center gap-2"
              >
                Browse Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 12h16M8 8l4 4-4 4" />
                </svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#4A7C2F', '#E8A045', '#2D5016'].map((color) => (
                    <div key={color} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: color }}>
                      {color === '#4A7C2F' ? 'M' : color === '#E8A045' ? 'S' : 'J'}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-text">500+ happy brands</span>
              </div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E8A045">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-text ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="relative reveal">
            <div className="rounded-[2rem] overflow-hidden shadow-lift aspect-[4/5] sm:aspect-[5/4] relative">
              <img
                src={UNSPLASH.luxuryBox}
                alt="Custom packaging"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-text/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-lift p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-forest to-forest-mid flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF7F2" strokeWidth="2.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-dark-text">1,000+</p>
                  <p className="text-xs text-muted-text">Vetted Vendors</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-2xl shadow-lift p-5 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A14" strokeWidth="2.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-forest leading-tight">Quality Guaranteed</p>
                  <p className="text-xs text-muted-text mt-0.5">3-checkpoint QC on every order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { text: '1,000+ Vetted Vendors', icon: 'network' },
    { text: 'US-Based Team', icon: 'flag' },
    { text: '24hr Quote Turnaround', icon: 'clock' },
    { text: '130+ Product Types', icon: 'package' },
    { text: 'No Hidden Fees', icon: 'shield' },
  ];

  return (
    <section className="bg-gradient-to-r from-forest via-forest to-forest-mid py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNiIgc3Ryb2tlPSJyZ2JhKDI1MCwgMjQ3LCAyNDIsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-50" />
      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-white">
              <div className="w-6 h-6 rounded-full bg-amber/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8A045" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedServices({ navigate }: { navigate: (r: Route) => void }) {
  const services = [
    { img: UNSPLASH.kraftMailer, name: 'Custom Boxes', desc: 'Mailer boxes, rigid boxes, folding cartons, kraft boxes, subscription boxes, and 16 more box types — all custom-quoted to your specs.', products: '20+ products' },
    { img: UNSPLASH.subscription, name: 'Flexible Packaging', desc: 'Stand-up pouches, mylar bags, ziplock pouches, spout pouches, coffee bags, and food-grade flexible formats.', products: '7 products' },
    { img: UNSPLASH.kraftDetail, name: 'Labels & Stickers', desc: 'Product labels, roll labels, die-cut stickers, holographic stickers, vinyl, and more label formats for any surface.', products: '17 products' },
  ];

  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-forest/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-full mb-5 reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2 2 4-4M12 22v-6M2 12h6M22 12h-6" />
            </svg>
            Featured categories
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text reveal">
            12 categories. 130+ products.{' '}
            <span className="text-forest">One supplier.</span>
          </h2>
          <p className="text-body-text text-lg mt-4 max-w-2xl mx-auto reveal">
            Everything you need to package, brand, and market your products — all under one roof.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((s, idx) => (
            <div key={s.name}>
              <div
                className={`bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-500 border border-cream-deep reveal ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
              >
                <div className={`grid md:grid-cols-2 items-center ${idx % 2 === 1 ? '[direction:rtl]' : ''}`}>
                  <div className={`aspect-[16/10] md:aspect-[4/3] overflow-hidden relative ${idx % 2 === 1 ? '[direction:ltr]' : ''}`}>
                    <img src={s.img} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:from-transparent md:to-white/5" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold text-forest px-3 py-1.5 rounded-full">
                      {s.products}
                    </div>
                  </div>
                  <div className={`p-8 md:p-12 ${idx % 2 === 1 ? '[direction:ltr] md:pr-12 md:pl-16' : 'md:pl-12 md:pr-16'}`}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-dark-text mb-4">{s.name}</h3>
                    <p className="text-body-text leading-relaxed mb-6 text-lg">{s.desc}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => navigate('/services')}
                        className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-bold px-5 py-3 rounded-full hover:bg-forest-mid transition-all"
                      >
                        View Products
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center justify-center gap-2 bg-amber/10 text-amber-dark font-bold px-5 py-3 rounded-full hover:bg-amber/20 transition-all"
                      >
                        Get a Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA row between service cards */}
              {idx < services.length - 1 && (
                <div className="my-10 bg-gradient-to-r from-forest/5 via-forest/10 to-forest/5 rounded-2xl p-6 sm:p-8 reveal">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAF7F2" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-display text-lg font-bold text-dark-text">Have a specific project in mind?</p>
                        <p className="text-muted-text text-sm">Get a custom quote tailored to your needs</p>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate('/contact')}
                      className="bg-amber text-dark-text font-bold px-6 py-3 rounded-full hover:bg-amber-dark transition-all whitespace-nowrap flex items-center gap-2"
                    >
                      Request Quote
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA after services */}
        <div className="mt-12 bg-gradient-to-br from-forest via-forest to-forest-mid rounded-3xl p-8 sm:p-12 relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-forest-mid/30 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream mb-2">Ready to see all 130+ products?</h3>
              <p className="text-cream/70 max-w-md">Browse our complete catalog of packaging, printing, and branding solutions.</p>
            </div>
            <button
              onClick={() => navigate('/services')}
              className="bg-cream text-forest font-bold px-8 py-4 rounded-full hover:bg-amber hover:text-dark-text transition-all whitespace-nowrap flex items-center gap-2 shadow-lift"
            >
              View Full Catalog
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyParcela() {
  const values = [
    {
      title: 'Quality Control',
      desc: 'Every order is inspected at three checkpoints: pre-production, mid-run, and pre-shipment. You never find out about a problem from your customer.',
      icon: <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" />,
      stat: '99.5%',
      statLabel: 'Defect-free rate',
    },
    {
      title: 'Vendor Network',
      desc: 'Over 1,000 vetted manufacturers in our network. We route your order to the producer best suited for your material, volume, and finish requirements.',
      icon: <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />,
      stat: '1,000+',
      statLabel: 'Vetted manufacturers',
    },
    {
      title: 'Custom Quotes',
      desc: 'Every product is priced to your exact specifications, materials, and quantities. Request a quote and receive a detailed breakdown within 24 hours.',
      icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />,
      stat: '24hr',
      statLabel: 'Quote turnaround',
    },
    {
      title: 'Dedicated Account Manager',
      desc: 'One person handles your account from first quote to repeat order. They know your brand, your specs, and your preferences.',
      icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
      stat: '1:1',
      statLabel: 'Personal support',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-cream via-white to-cream py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-full mb-5 reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Why Parcela
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text reveal">
            The difference is in{' '}
            <span className="text-forest">the details.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl p-7 shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-2 border border-cream-deep reveal group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-forest/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-forest to-forest-mid flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-3xl font-bold text-forest">{v.stat}</span>
                  <span className="text-sm text-muted-text">{v.statLabel}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-dark-text mb-2">{v.title}</h3>
                <p className="text-sm text-body-text leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after Why Parcela */}
        <div className="mt-16 reveal">
          <div className="bg-gradient-to-r from-amber/10 via-amber/20 to-amber/10 rounded-3xl p-8 sm:p-10 border border-amber/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber/20 rounded-full blur-2xl" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1A1A14" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-text mb-1">Join 500+ brands that trust Parcela</h3>
                  <p className="text-muted-text">Start your first project with zero commitment</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate('/process')}
                  className="bg-white text-forest font-bold px-6 py-3 rounded-full hover:bg-cream transition-all border border-forest/20"
                >
                  Our Process
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-forest text-cream font-bold px-6 py-3 rounded-full hover:bg-forest-mid transition-all flex items-center gap-2"
                >
                  Start Your Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Parcela completely changed how we think about packaging. The team understood our brand from day one and the quality of our mailer boxes exceeded what we had before.",
      name: 'Maya Chen',
      brand: 'Hearthlight Candles',
      type: 'Candle brand',
      product: 'Mailer Boxes',
    },
    {
      quote: "Our supplement packaging had to meet strict FDA labeling standards. Parcela's team navigated the requirements and delivered a flawless run of 10,000 boxes in five weeks. Zero defects.",
      name: 'David Okoro',
      brand: 'Vital Root Nutrition',
      type: 'Supplement brand',
      product: 'Supplement Boxes',
    },
    {
      quote: "We ship 3,000 subscription boxes monthly and the quality has been consistent every single run. The rigid boxes with our gold foil logo are exactly what we envisioned and our customers love them.",
      name: 'Sarah Whitman',
      brand: 'Glow Season Box',
      type: 'Subscription box brand',
      product: 'Rigid Boxes',
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber/20 text-amber-dark text-sm font-bold px-4 py-2 rounded-full mb-5 reveal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E8A045">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
            </svg>
            What clients say
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text reveal">
            Brands that{' '}
            <span className="text-forest">trust Parcela.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.brand}
              className="bg-gradient-to-b from-cream to-cream-deep rounded-3xl p-8 shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-2 reveal group relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 bg-forest/10 text-forest text-xs font-bold px-3 py-1.5 rounded-full">
                {t.product}
              </div>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#E8A045">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4L2 9.4h7.6L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-body-text leading-relaxed mb-6 text-base">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-cream">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest to-forest-mid flex items-center justify-center text-cream font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-dark-text">{t.name}</p>
                  <p className="text-sm text-muted-text">{t.brand} · {t.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after testimonials */}
        <div className="mt-16 reveal">
          <div className="bg-forest rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-forest-mid/30 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream mb-2">Ready to join these brands?</h3>
                <p className="text-cream/70">Get your custom quote within 24 hours</p>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="bg-cream text-forest font-bold px-8 py-4 rounded-full hover:bg-amber hover:text-dark-text transition-all whitespace-nowrap flex items-center gap-2"
              >
                Request Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPreview({ navigate }: { navigate: (r: Route) => void }) {
  const posts = [
    { tag: 'Packaging Tips', title: 'How to design a mailer box that survives shipping and looks premium', excerpt: 'The right material and finish choices that protect your product and impress your customer.', img: UNSPLASH.blog1, read: '6 min read' },
    { tag: 'Brand Building', title: 'The unboxing psychology: what makes customers film your packaging', excerpt: 'Why some boxes end up on Instagram and others end up in the trash.', img: UNSPLASH.blog2, read: '8 min read' },
    { tag: 'Sustainability', title: 'Sustainable packaging materials that perform and impress', excerpt: 'Kraft, recycled board, and soy-based inks that meet your brand standards.', img: UNSPLASH.blog3, read: '5 min read' },
  ];

  return (
    <section className="bg-cream py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-container mx-auto px-5 sm:px-8 relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-sm font-bold px-4 py-2 rounded-full mb-5 reveal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              </svg>
              Latest from the blog
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-text reveal">
              Packaging insights and{' '}
              <span className="text-forest">brand strategy.</span>
            </h2>
          </div>
          <button onClick={() => navigate('/blog')} className="text-forest font-bold hover:underline reveal flex items-center gap-2">
            View all posts
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <button
              key={p.title}
              onClick={() => navigate('/blog')}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-2 text-left reveal group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-text/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-forest mb-3 block">{p.tag}</span>
                <h3 className="font-display text-xl font-bold text-dark-text leading-snug mb-3 group-hover:text-forest transition-colors">{p.title}</h3>
                <p className="text-sm text-body-text leading-relaxed mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-forest font-bold flex items-center gap-1">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-xs text-muted-text">{p.read}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
