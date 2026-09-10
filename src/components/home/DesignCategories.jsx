import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { designCategories } from '../../data/categories';

export default function DesignCategories() {
  return (
    <section className="py-24 sm:py-32 bg-cream/30 border-b border-taupe/15">
      <Container>
        <SectionHeading
          eyebrow="Specialized Zones"
          title="Spaces Tailored To Every Ritual"
          subtitle="Explore our spatial execution across dedicated residential and executive zones."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {designCategories.map((cat, idx) => (
            <Link
              key={cat.id}
              to="/projects"
              className="group relative overflow-hidden bg-cream block aspect-[4/5]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-gold-light block mb-1">
                  {cat.count}
                </span>
                <h4 className="text-lg sm:text-xl font-serif font-normal group-hover:text-cream transition-colors">
                  {cat.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
