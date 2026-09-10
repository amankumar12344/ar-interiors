import React from 'react';
import Hero from '../components/home/Hero';
import Introduction from '../components/home/Introduction';
import ServicesGallery from '../components/home/ServicesGallery';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesSection from '../components/home/ServicesSection';
import DesignPhilosophy from '../components/home/DesignPhilosophy';
import ProjectShowcase from '../components/home/ProjectShowcase';
import WhyUs from '../components/home/WhyUs';
import ProcessSection from '../components/home/ProcessSection';
import BeforeAfterSection from '../components/home/BeforeAfterSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ServicesGallery />
      <FeaturedProjects />
      <ServicesSection />
      <DesignPhilosophy />
      <ProjectShowcase />
      <WhyUs />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ConsultationCTA />
    </main>
  );
}
