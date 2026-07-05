import { useState, useEffect } from 'react';
import { type Route } from '../hooks/useHashRoute';
import { CATEGORIES } from '../data/content';
import ParcelaLogo from './ParcelaLogo';

interface NavProps {
  navigate: (r: Route) => void;
  current: Route;
}

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

export default function Nav({ navigate, current }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const links: { label: string; route: Route }[] = [
    { label: 'Case Studies', route: '/case-studies' },
    { label: 'Process', route: '/process' },
    { label: 'Blog', route: '/blog' },
    { label: 'About', route: '/about' },
  ];

  const go = (r: Route) => {
    navigate(r);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-cream/95 backdrop-blur-md border-b border-cream-deep shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-container mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => go('/')} className="flex items-center group flex-shrink-0">
          <ParcelaLogo />
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
          <li>
            <button
              onClick={() => go('/')}
              className={`text-sm font-bold transition-colors hover:text-forest ${current === '/' ? 'text-forest' : 'text-dark-text'}`}
            >
              Home
            </button>
          </li>

          {/* Services mega-menu */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => go('/services')}
              className={`text-sm font-bold transition-colors hover:text-forest flex items-center gap-1 ${current === '/services' ? 'text-forest' : 'text-dark-text'}`}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[680px] transition-all duration-200 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lift border border-cream-deep p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-text mb-3 px-1">All Categories</p>
                <div className="grid grid-cols-3 gap-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => go('/services')}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-cream transition-colors text-left group/item"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center group-hover/item:bg-forest/20 transition-colors">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4A7C2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d={ICONS[cat.icon] || ICONS.box} />
                        </svg>
                      </span>
                      <span className="text-xs font-bold text-dark-text leading-tight">{cat.name}</span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-cream-deep mt-3 pt-3 px-1">
                  <button
                    onClick={() => go('/services')}
                    className="text-xs font-bold text-forest hover:underline"
                  >
                    View all categories and products →
                  </button>
                </div>
              </div>
            </div>
          </li>

          {links.map((link) => (
            <li key={link.route}>
              <button
                onClick={() => go(link.route)}
                className={`text-sm font-bold transition-colors hover:text-forest ${current === link.route ? 'text-forest' : 'text-dark-text'}`}
              >
                {link.label}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={() => go('/contact')}
              className="bg-amber text-dark-text px-5 py-2.5 rounded-full text-sm font-bold hover:bg-amber-dark transition-colors"
            >
              Get a Quote
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? <path d="M18 6 6 18 M6 6l12 12" /> : <path d="M3 12h18 M3 6h18 M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 bg-forest z-40 overflow-y-auto">
          <div className="p-6 flex flex-col gap-1">
            <button onClick={() => go('/')} className="text-white text-xl font-display font-bold py-3 text-left border-b border-forest-mid/50">
              Home
            </button>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="text-white text-xl font-display font-bold py-3 text-left flex items-center justify-between border-b border-forest-mid/50"
            >
              Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-2 pb-2 grid grid-cols-2 gap-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => go('/services')}
                    className="text-white/80 text-sm font-sans py-2 px-2 text-left hover:text-amber transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => go(link.route)}
                className="text-white text-xl font-display font-bold py-3 text-left border-b border-forest-mid/50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go('/contact')}
              className="bg-amber text-dark-text text-lg font-bold py-4 rounded-full mt-4"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
