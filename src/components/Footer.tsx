import { type Route } from '../hooks/useHashRoute';
import ParcelaLogo from './ParcelaLogo';

export default function Footer({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-container mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4">
              <ParcelaLogo light />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              US-based custom packaging and printing. 1,000+ vetted vendors, 130+ product types, quotes in 24 hours.
            </p>
          </div>

          <div>
            <h4 className="text-cream font-sans font-bold uppercase tracking-[0.12em] text-xs mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate('/about')} className="hover:text-amber transition-colors">About</button></li>
              <li><button onClick={() => navigate('/services')} className="hover:text-amber transition-colors">Services</button></li>
              <li><button onClick={() => navigate('/case-studies')} className="hover:text-amber transition-colors">Case Studies</button></li>
              <li><button onClick={() => navigate('/process')} className="hover:text-amber transition-colors">Our Process</button></li>
              <li><button onClick={() => navigate('/blog')} className="hover:text-amber transition-colors">Blog</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-amber transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-cream font-sans font-bold uppercase tracking-[0.12em] text-xs mb-4">Get Started</h4>
            <p className="text-sm mb-4">Custom quotes returned in 24 hours. No commitment required.</p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-amber text-dark-text font-bold text-sm px-5 py-2.5 rounded-full hover:bg-amber-dark transition-colors"
            >
              Request a Free Quote
            </button>
          </div>
        </div>

        <div className="border-t border-forest-mid/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/60">© 2024-2026 Parcela. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/privacy')} className="text-cream/60 hover:text-amber transition-colors text-xs">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="text-cream/60 hover:text-amber transition-colors text-xs">Terms & Conditions</button>
            <button onClick={() => navigate('/refund')} className="text-cream/60 hover:text-amber transition-colors text-xs">Refund Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
