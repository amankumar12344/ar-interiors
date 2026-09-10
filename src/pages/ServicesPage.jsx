import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { serviceCategories } from '../data/services';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16">
      {/* Header */}
      <section className="pb-20 border-b border-taupe/20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>SERVICES & DISCIPLINES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Comprehensive Architectural & Interior Design
            </h1>

            <p className="mt-8 text-lg text-charcoal/75 font-light leading-relaxed">
              AR Interiors provides end-to-end design, modular manufacturing, and turnkey architectural execution across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List with Detailed Sub-Services */}
      <section className="py-20 bg-ivory">
        <Container>
          <div className="space-y-24">
            {serviceCategories.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-taupe/20 last:border-b-0"
              >
                {/* Image Column */}
                <div className="lg:col-span-5">
                  <div className="aspect-[4/3] overflow-hidden bg-cream shadow-subtle border border-taupe/20">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-cream/50 text-xs text-charcoal/70 border-l-2 border-gold">
                    {service.noidaHighlight}
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 text-xs font-serif text-gold-dark tracking-widest uppercase mb-2">
                    <span>DISCIPLINE {service.number}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gold-dark font-medium mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-base text-charcoal/75 font-light mt-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Services Tags */}
                  <div className="mt-8">
                    <h4 className="text-xs tracking-architectural uppercase text-taupe font-medium mb-3">
                      Included Specialized Services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.includedServices.map((sub, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 bg-cream/70 text-charcoal border border-taupe/20"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-8 space-y-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80 font-light">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-taupe/15">
                    <Button to={`/services/${service.slug}`} variant="secondary" size="md" icon>
                      View Dedicated Service Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </main>
  );
}
