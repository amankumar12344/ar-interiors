import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import { serviceCategories } from '../../data/services';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#EFE9DF] border-b border-[#DDD3C3] relative">
      <Container>
        <SectionHeading
          eyebrow="Studio Disciplines"
          title="Holistic Spatial Solutions"
          subtitle="Organized across six specialized architectural and interior disciplines engineered for luxury living in Noida & NCR."
          align="center"
        />

        {/* Equalized 3-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 items-stretch">
          {serviceCategories.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Studio Capability Highlight */}
        <div className="mt-14 p-6 sm:p-8 bg-[#E6DFD3] border border-[#DDD3C3] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#BF9C60]/20 border border-[#BF9C60] flex items-center justify-center shrink-0 text-[#96743A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-[#1F1D1A] font-medium">Bespoke Architectural Feasibility</h4>
              <p className="text-xs sm:text-sm text-[#5C554D] font-light">Every project begins with on-site spatial audit, structural layout analysis, and 3D photorealistic renderings.</p>
            </div>
          </div>
          <a
            href="/services"
            className="shrink-0 px-6 py-2.5 bg-[#1F1D1A] text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#1F1D1A] transition-colors rounded-sm text-xs tracking-architectural uppercase font-medium shadow-sm"
          >
            Explore All 6 Practices →
          </a>
        </div>
      </Container>
    </section>
  );
}
