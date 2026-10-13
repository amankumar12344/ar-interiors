import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Container from '../common/Container';

export default function ProjectShowcase() {
  return (
    <section className="py-10 sm:py-16 bg-ivory border-b border-taupe/15">
      <Container>
        <div className="group overflow-hidden rounded-sm border border-taupe/20 bg-white shadow-elevated">
          {/* Completely Clean Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-cream">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
              alt="Residence 01 - Noida"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>

          {/* Clean Information Bar Below Image */}
          <div className="p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white">
            <div>
              <div className="text-[11px] tracking-widest uppercase text-[#96743A] font-semibold mb-1.5">
                PROJECT HIGHLIGHT · NOIDA EXPRESSWAY
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-charcoal">
                Residence 01
              </h3>
              <p className="text-sm text-charcoal/70 font-light mt-1">
                Residential Interior · 6,800 sq.ft Double-Height Duplex
              </p>
            </div>

            <Link
              to="/projects/residence-01-knightsbridge"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-charcoal hover:bg-[#96743A] text-white font-sans text-xs tracking-architectural uppercase font-medium transition-all duration-300 self-start md:self-auto shrink-0 shadow-sm"
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
