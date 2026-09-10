import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { studioProcess } from '../../data/process';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-cream/30 border-b border-taupe/15">
      <Container>
        <SectionHeading
          eyebrow="Methodology"
          title="Our Five-Step Architectural Process"
          subtitle="A structured, predictable journey transforming raw architectural volume into effortless turnkey luxury."
        />

        <div className="mt-16 space-y-8">
          {studioProcess.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 sm:p-10 bg-white/70 border border-taupe/20 transition-all duration-300 hover:bg-white grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-2 flex items-center gap-4">
                <span className="font-serif text-4xl sm:text-5xl text-gold-dark font-light">
                  {item.step}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-taupe block lg:hidden">
                  {item.duration}
                </span>
              </div>

              <div className="lg:col-span-6">
                <span className="hidden lg:inline-block text-[10px] tracking-widest uppercase text-taupe mb-1">
                  {item.duration}
                </span>
                <h3 className="text-2xl font-serif text-charcoal">
                  {item.phase}
                </h3>
                <p className="text-xs text-gold-dark font-medium mt-1">
                  {item.tagline}
                </p>
                <p className="text-sm text-charcoal/70 font-light mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-taupe/20 pt-4 lg:pt-0 border-t lg:border-t-0 border-taupe/10">
                <span className="text-[11px] uppercase tracking-wider text-charcoal/80 font-medium block mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-charcoal/70 font-light">
                  {item.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
