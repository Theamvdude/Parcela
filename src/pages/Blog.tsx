import { useState } from 'react';
import { type Route } from '../hooks/useHashRoute';
import { UNSPLASH } from '../data/content';
import { PageHero } from '../components/Shared';

const CATEGORIES = ['All', 'Packaging Tips', 'Brand Building', 'Sustainability', 'Industry News'];

const POSTS = [
  {
    img: UNSPLASH.blog1,
    category: 'Packaging Tips',
    title: 'How to design a mailer box that survives shipping and looks premium',
    excerpt: 'The material and finish choices that protect your product during transit while still impressing your customer when they open it.',
    read: '6 min read',
    date: 'Jun 15, 2026',
    featured: true,
  },
  {
    img: UNSPLASH.blog2,
    category: 'Brand Building',
    title: 'The unboxing psychology: what makes customers film your packaging',
    excerpt: 'Why some boxes end up on Instagram and others end up in the trash. The design decisions that drive shareable moments.',
    read: '8 min read',
    date: 'Jun 09, 2026',
    featured: true,
  },
  {
    img: UNSPLASH.blog3,
    category: 'Sustainability',
    title: 'Sustainable packaging materials that do not cost a premium',
    excerpt: 'Kraft board, recycled stock, soy-based inks, and compostable films that perform and impress without inflating your per-unit cost.',
    read: '5 min read',
    date: 'Jun 02, 2026',
    featured: false,
  },
  {
    img: UNSPLASH.blog4,
    category: 'Packaging Tips',
    title: 'Choosing between E-flute and B-flute for your mailer box',
    excerpt: 'The corrugated flute type affects strength, print quality, and fold crispness. Here is how to pick the right one.',
    read: '4 min read',
    date: 'May 28, 2026',
    featured: false,
  },
  {
    img: UNSPLASH.blog5,
    category: 'Brand Building',
    title: 'Why your thank-you card matters more than your box insert',
    excerpt: 'The most expensive packaging is not always the most memorable. A handwritten note can beat a foil-stamped rigid box.',
    read: '7 min read',
    date: 'May 20, 2026',
    featured: false,
  },
  {
    img: UNSPLASH.blog6,
    category: 'Industry News',
    title: 'DTC packaging trends for 2026: what brands are shipping now',
    excerpt: 'Magnetic closures, textured laminates, and earthy color palettes are dominating DTC unboxing this year.',
    read: '6 min read',
    date: 'May 12, 2026',
    featured: false,
  },
];

export default function Blog({ navigate }: { navigate: (r: Route) => void }) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? POSTS : POSTS.filter((p) => p.category === active);
  const featuredPost = filtered.find((p) => p.featured) || filtered[0];
  const sidePosts = filtered.filter((p) => p !== featuredPost).slice(0, 2);
  const gridPosts = filtered.filter((p) => p !== featuredPost && !sidePosts.includes(p));

  return (
    <>
      <PageHero
        title="Packaging insights and brand strategy."
        subtitle="Practical advice for DTC founders on packaging design, cost optimization, sustainability, and building a brand that customers remember."
      />

      {active === 'All' && featuredPost && (
        <section className="bg-cream pt-16 pb-8">
          <div className="max-w-container mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <PostCard post={featuredPost} large navigate={navigate} />
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                {sidePosts.map((p) => (
                  <PostCard key={p.title} post={p} navigate={navigate} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream py-8">
        <div className="max-w-container mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                  active === cat ? 'bg-forest text-cream' : 'bg-white text-body-text hover:bg-cream-deep'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gridPosts.map((p) => (
              <PostCard key={p.title} post={p} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

function PostCard({ post, large = false, navigate }: { post: typeof POSTS[0]; large?: boolean; navigate: (r: Route) => void }) {
  return (
    <button
      onClick={() => navigate('/blog')}
      className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1 text-left reveal ${
        large ? 'md:col-span-1 row-span-2' : ''
      }`}
    >
      <div className={`${large ? 'aspect-[16/10] md:aspect-[4/3]' : 'aspect-[16/10]'} overflow-hidden`}>
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-5 md:p-6">
        <span className="text-xs font-bold uppercase tracking-[0.12em] text-forest mb-2 block">{post.category}</span>
        <h3 className={`font-display font-bold text-dark-text leading-snug mb-2 ${large ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {post.title}
        </h3>
        <p className="text-sm text-body-text leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-muted-text">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read}</span>
        </div>
      </div>
    </button>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) setSubmitted(true);
  };

  return (
    <section className="bg-forest py-16">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-2 reveal">
          Get packaging tips and industry news in your inbox.
        </h2>
        <p className="text-cream/70 mb-6 reveal">One email per month. No spam. Unsubscribe anytime.</p>
        {submitted ? (
          <p className="bg-amber/20 text-cream font-bold px-6 py-4 rounded-full inline-block">
            Thanks for subscribing. Check your inbox.
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto reveal">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="form-input flex-1 px-5 py-3.5 rounded-full bg-cream text-dark-text border-2 border-transparent"
            />
            <button type="submit" className="bg-amber text-dark-text font-bold px-6 py-3.5 rounded-full hover:bg-amber-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
