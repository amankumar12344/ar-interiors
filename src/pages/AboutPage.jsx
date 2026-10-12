import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { Compass, Sparkles, Building2, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16">
      {/* Page Header */}
      <section className="pb-20 border-b border-taupe/20">
        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>THE STUDIO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal font-normal leading-[1.12] tracking-tight">
              About AR INTERIORS & ARCHITECT DESIGNER STUDIO
            </h1>

            <p className="mt-6 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-3xl">
              AR Interiors is a leading home interior & architect design company providing complete interior & architect design solutions across Delhi NCR. Having 5+ years of experience and having successfully completed more than 250 projects, we help create beautiful, useful, and comfortable homes.
            </p>
          </div>
        </Container>
      </section>

      {/* Large Studio Image */}
      <section className="py-16">
        <Container fluid>
          <div className="aspect-[21/9] overflow-hidden bg-cream">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="AR Interiors Studio Design Philosophy"
              className="w-full h-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Philosophy Details */}
      <section className="py-20 bg-cream/30 border-b border-taupe/15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Ethos"
                title="Restraint is the Ultimate Sophistication"
                subtitle="In a world oversaturated with loud trends, we champion timeless proportions, tactile authenticity, and architectural permanence."
              />
            </div>

            <div className="lg:col-span-7 space-y-6 text-base text-charcoal/80 font-light leading-relaxed">
              <p>
                We design and build modular kitchens, wardrobes, false ceilings, living rooms, office spaces, and custom furniture. We have a dedicated team of 50 professionals, project managers, and supervisors handling every single step, from initial 3D design to final turnkey execution.
              </p>
              <p>
                Customer satisfaction is our motto. We are recognized among the best interior designers in Noida / Delhi NCR. We believe completed projects speak quality, and our mission is turning dreams into living spaces with good quality, transparent work, on-time delivery, premium materials, and dependable after-sales support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Studio Disciplines */}
      <section className="py-24 bg-ivory border-b border-taupe/15">
        <Container>
          <SectionHeading
            eyebrow="Our Four Pillars"
            title="The Architectural Foundation"
            subtitle="The core principles guiding every pencil sketch and material sample."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Compass,
                title: 'Solar & Spatial Rhythm',
                desc: 'Choreographing spaces where morning light illuminates breakfast niches and evening shadows bring tranquility.'
              },
              {
                icon: Layers,
                title: 'Tactile Materiality',
                desc: 'Selecting unadulterated Italian stones, seasoned natural woods, raw linens, and hand-applied lime plasters.'
              },
              {
                icon: Building2,
                title: 'Structural Precision',
                desc: 'Flawless joinery, flush architectural baseboards, and millimeter-level alignment across all transitions.'
              },
              {
                icon: Sparkles,
                title: 'Turnkey Stewardship',
                desc: 'Single-source responsibility from conceptual brief to white-glove handover with zero client stress.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 bg-cream/50 border border-taupe/20">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gold-dark mb-6 border border-taupe/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal font-medium">{item.title}</h3>
                  <p className="text-sm text-charcoal/70 font-light mt-3 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </main>
  );
}
