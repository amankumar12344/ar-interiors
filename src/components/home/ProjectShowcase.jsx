import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';

export default function ProjectShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory border-b border-taupe/15">
      <Container fluid>
        <div className="relative overflow-hidden group min-h-[550px] sm:min-h-[700px] flex items-end">
          {/* Large Full-Width Photograph */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
              alt="Residence 01 - Noida"
              className="w-full h-full object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
            />
            {/* Subtle gradient vignette to preserve light editorial atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          </div>

          {/* Minimal Overlay Information */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-white w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-widest uppercase text-cream/80 font-sans mb-2">
                PROJECT HIGHLIGHT · NOIDA EXPRESSWAY
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal">
                Residence 01
              </h3>
              <p className="text-sm sm:text-base text-cream/90 font-light mt-2 max-w-md">
                Residential Interior · 6,800 sq.ft Double-Height Duplex
              </p>
            </div>

            <Link
              to="/projects/residence-01-knightsbridge"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/90 hover:bg-white text-charcoal font-sans text-xs tracking-architectural uppercase font-medium backdrop-blur-sm transition-all duration-300"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
