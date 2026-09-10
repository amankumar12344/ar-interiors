import React from 'react';
import ServicesGallery from '../components/home/ServicesGallery';
import Container from '../components/common/Container';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function GalleryPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Hero Header */}
      <section className="py-16 sm:py-24 bg-charcoal text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70 z-0" />
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-3">
            ARCHITECTURAL PORTFOLIO & SPACES
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-ivory tracking-tight mb-6">
            Services & Spaces Gallery
          </h1>
          <p className="text-base sm:text-lg text-ivory/80 font-light max-w-2xl mx-auto leading-relaxed">
            Explore our crafted spaces across residential villas, turnkey apartments, modular kitchens, and executive offices throughout Noida & Delhi NCR.
          </p>
        </Container>
      </section>

      {/* Main Interactive Services Gallery */}
      <ServicesGallery />

      {/* Consultation CTA */}
      <ConsultationCTA />
    </div>
  );
}
