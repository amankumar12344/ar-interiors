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

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-12">
          {designCategories.map((cat, idx) => (
            <Link
              key={cat.id}
              to="/projects"
              className="group block"
            >
              <div className="relative overflow-hidden bg-cream aspect-[4/5] rounded-sm shadow-subtle border border-taupe/20">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="pt-3 pb-1">
                <span className="text-[10px] uppercase tracking-widest text-[#96743A] font-semibold block">
                  {cat.count}
                </span>
                <h4 className="text-base sm:text-lg font-serif font-normal text-charcoal group-hover:text-[#96743A] transition-colors mt-0.5">
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
