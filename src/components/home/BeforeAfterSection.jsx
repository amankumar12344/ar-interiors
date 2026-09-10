import React from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import { projectsData } from '../../data/projects';

export default function BeforeAfterSection() {
  const highlightProject = projectsData[0];

  return (
    <section className="py-24 sm:py-32 bg-ivory border-b border-taupe/15">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Transformation"
              title="From Raw Concrete to Curated Sanctuaries"
              subtitle="Drag the interactive slider to experience the architectural transformation of our Solarium Penthouse in Noida."
              className="mb-8"
            />
            <div className="space-y-4 text-sm text-charcoal/75 font-light leading-relaxed">
              <p>
                We stripped away poorly proportioned developer drywall, re-engineered the double-height spatial volume, and installed floor-to-ceiling acoustic glazing.
              </p>
              <div className="p-4 bg-cream/50 border-l-2 border-gold text-xs text-charcoal/80">
                <strong>Project:</strong> {highlightProject.title} · {highlightProject.location}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-taupe/30 shadow-elevated overflow-hidden aspect-[16/10]">
              <BeforeAfterSlider
                beforeImage={highlightProject.beforeImage}
                afterImage={highlightProject.afterImage}
                beforeLabel="Raw Shell"
                afterLabel="Turnkey Handover"
              />
            </div>
            <p className="text-center text-xs text-taupe mt-3 italic">
              ← Drag slider horizontally to compare before and after →
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
