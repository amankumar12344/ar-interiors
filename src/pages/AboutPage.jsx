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

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Crafting calm, architectural sanctuaries across Noida and Delhi NCR.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-charcoal/75 font-light leading-relaxed max-w-2xl">
              AR Interiors & Architect Designer Studio was established with a singular conviction: that spaces should elevate the human spirit through natural light, honest materials, and bespoke spatial harmony.
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
                Based in Noida, our multi-disciplinary studio brings together architects, interior spatial designers, modular engineers, and turnkey project managers under one roof. We reject the fragmented model where designs look brilliant on paper but unravel during execution.
              </p>
              <p>
                Every project begins with a careful study of solar orientation, prevailing cross-winds, and client daily rituals. Whether we are orchestrating a double-height luxury penthouse at ATS Knightsbridge or designing an independent family villa in Greater Noida, our priority remains the same: creating spaces that feel peaceful, effortless, and deeply personal.
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
