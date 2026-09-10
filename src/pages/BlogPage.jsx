import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Designing for Daylight: Maximizing North Indian Sunlight in High-Rise Penthouses",
      date: "September 2024",
      category: "Architectural Guide",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      excerpt: "How passive solar orientation, double glazing, and custom fluted screens protect Noida homes from summer heat while welcoming winter warmth."
    },
    {
      id: 2,
      title: "The Ergonomics of Modern Indian Modular Kitchens: Beyond The Triangle",
      date: "August 2024",
      category: "Joinery & Craft",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
      excerpt: "Why modern North Indian cooking requires zoned spice pullouts, heavy-duty Blum tandem runners, and non-porous sintered stone worktops."
    },
    {
      id: 3,
      title: "Acoustic Quiet in Noida Expressway Residences: Materials and Techniques",
      date: "July 2024",
      category: "Spatial Wellness",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      excerpt: "Insulating your master suite from expressway traffic through double-pane laminated acoustic windows, insulated drywall, and soft fabric wall panelling."
    }
  ];

  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="pb-16 border-b border-taupe/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>EDITORIAL JOURNAL</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Design Notes, Insights & Studio Essays
            </h1>

            <p className="mt-8 text-lg text-charcoal/75 font-light leading-relaxed">
              Perspectives on contemporary architecture, interior materiality, and luxury living in Delhi NCR.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          {articles.map((art) => (
            <article key={art.id} className="group border border-taupe/20 bg-white/60 p-6 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-cream mb-6">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-taupe uppercase tracking-wider mb-2">
                  <span>{art.category}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-xl font-serif text-charcoal group-hover:text-warmbrown transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-charcoal/70 font-light mt-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <ConsultationCTA />
    </main>
  );
}
