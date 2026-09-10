import React from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProcessSection from '../components/home/ProcessSection';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function ProcessPage() {
  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="pb-16 border-b border-taupe/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>THE TURNKEY METHODOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Predictable Excellence from Concept to Turnover
            </h1>

            <p className="mt-8 text-lg text-charcoal/75 font-light leading-relaxed">
              We replace the unpredictability of traditional interior contractors with architectural rigor, fixed milestone pricing, and obsessive site supervision.
            </p>
          </div>
        </div>
      </Container>

      <ProcessSection />
      <ConsultationCTA />
    </main>
  );
}
