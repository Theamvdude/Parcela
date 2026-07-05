import { useState } from 'react';
import { CATEGORIES } from '../data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    brandName: '',
    website: '',
    packagingType: '',
    quantityRange: '',
    monthlyBudget: '',
    notes: '',
  });

  const update = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!form.email.includes('@')) e.email = 'Enter a valid email';
    if (!form.brandName.trim()) e.brandName = 'Required';
    if (!form.packagingType) e.packagingType = 'Select a product type';
    if (!form.quantityRange) e.quantityRange = 'Select a range';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <>
      <section className="bg-forest pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="max-w-container mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-amber mb-4 reveal">Get in touch</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream reveal max-w-3xl mx-auto leading-tight">
            Request a free quote in 24 hours.
          </h1>
          <p className="text-cream/70 text-lg mt-6 max-w-2xl mx-auto reveal">
            Tell us about your project. We will return a detailed quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          {submitted ? (
            <div className="max-w-lg mx-auto text-center bg-white rounded-3xl p-12 shadow-card reveal">
              <div className="w-20 h-20 rounded-full bg-forest/10 mx-auto mb-6 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-dark-text mb-3">Quote request received.</h2>
              <p className="text-body-text leading-relaxed">
                Thanks, {form.firstName}. Our team will review your project and return a detailed quote within 24 hours. Keep an eye on your inbox at {form.email}.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2 reveal">
                <h2 className="font-display text-2xl font-bold text-dark-text mb-6">Contact details</h2>
                <div className="space-y-5 mb-8">
                  <ContactItem
                    icon="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8 M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                    label="Email"
                    value="hello@parcela.co"
                  />
                  <ContactItem
                    icon="M12 6v6l4 2 M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
                    label="Response time"
                    value="Within 24 hours"
                  />
                  <ContactItem
                    icon="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"
                    label="Location"
                    value="United States"
                  />
                </div>

                <div className="flex gap-3 mb-8">
                  {['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', 'M9 7h6v10H9z M4 10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 M4 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z M23 10a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2z'].map((d, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-cream-deep flex items-center justify-center hover:bg-forest hover:text-cream transition-colors text-forest">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={d} />
                      </svg>
                    </a>
                  ))}
                  <a href="#" className="w-10 h-10 rounded-full bg-cream-deep flex items-center justify-center hover:bg-forest hover:text-cream transition-colors text-forest">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01" />
                    </svg>
                  </a>
                </div>

                <div className="bg-forest rounded-2xl p-8 text-center">
                  <p className="text-cream/70 text-sm mb-2">Headquartered in the United States</p>
                  <div className="relative h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-forest-mid/30 rounded-xl flex items-center justify-center">
                      <p className="text-cream font-display text-lg italic">Serving All 50 States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 reveal">
                <h2 className="font-display text-2xl font-bold text-dark-text mb-6">Quote request</h2>
                <form onSubmit={submit} className="bg-white rounded-3xl p-7 md:p-8 shadow-card space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="First Name" error={errors.firstName}>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => update('firstName', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                        placeholder="Jane"
                      />
                    </Field>
                    <Field label="Last Name" error={errors.lastName}>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => update('lastName', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                        placeholder="Doe"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Business Email" error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                        placeholder="jane@brand.com"
                      />
                    </Field>
                    <Field label="Brand Name" error={errors.brandName}>
                      <input
                        type="text"
                        value={form.brandName}
                        onChange={(e) => update('brandName', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                        placeholder="Your Brand"
                      />
                    </Field>
                  </div>

                  <Field label="Website URL (optional)">
                    <input
                      type="text"
                      value={form.website}
                      onChange={(e) => update('website', e.target.value)}
                      className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                      placeholder="yourbrand.com"
                    />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Product Type" error={errors.packagingType}>
                      <select
                        value={form.packagingType}
                        onChange={(e) => update('packagingType', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                      >
                        <option value="">Select product type</option>
                        {CATEGORIES.map((cat) => (
                          <optgroup key={cat.slug} label={cat.name}>
                            {cat.items.map((item) => (
                              <option key={item} value={item}>{item}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </Field>
                    <Field label="Quantity Range" error={errors.quantityRange}>
                      <select
                        value={form.quantityRange}
                        onChange={(e) => update('quantityRange', e.target.value)}
                        className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                      >
                        <option value="">Select range</option>
                        <option>Under 500</option>
                        <option>500 - 2,000</option>
                        <option>2,000 - 10,000</option>
                        <option>10,000 - 25,000</option>
                        <option>25,000 - 50,000</option>
                        <option>50,000+</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Estimated Monthly Budget (optional)">
                    <select
                      value={form.monthlyBudget}
                      onChange={(e) => update('monthlyBudget', e.target.value)}
                      className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text"
                    >
                      <option value="">Prefer not to say</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </Field>

                  <Field label="Project Notes">
                    <textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      rows={4}
                      className="form-input w-full px-4 py-3 rounded-xl border-2 border-cream-deep bg-cream/50 text-dark-text resize-none"
                      placeholder="Tell us about your project, timeline, dimensions, materials, and any specific requirements."
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full bg-amber text-dark-text font-bold py-4 rounded-full text-lg hover:bg-amber-dark transition-all hover:scale-[1.02]"
                  >
                    Request Free Quote
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d={icon} />
        </svg>
      </div>
      <div>
        <p className="text-xs text-muted-text">{label}</p>
        <p className="font-bold text-dark-text">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-bold text-dark-text mb-2">{label}</label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1 font-semibold">{error}</p>}
    </div>
  );
}
