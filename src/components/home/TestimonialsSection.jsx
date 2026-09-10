import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-cream/40 border-b border-taupe/15">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ivory border border-taupe/30 text-gold-dark mb-8">
            <Quote className="w-5 h-5" />
          </div>

          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal font-normal leading-relaxed italic">
                  "{current.quote}"
                </p>

                <div className="mt-8">
                  <h4 className="text-base font-serif text-charcoal font-medium">
                    {current.clientName}
                  </h4>
                  <p className="text-xs text-taupe uppercase tracking-wider mt-1">
                    {current.designation} · {current.projectRef}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-taupe/30 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-taupe font-mono">
              0{currentIndex + 1} / 0{testimonialsData.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-taupe/30 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
