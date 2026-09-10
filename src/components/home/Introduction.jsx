import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { Award, Compass, Sparkles } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F3EFE7] border-b border-[#DDD3C3] relative overflow-hidden">
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#1F1D1A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Origin, Credentials & Editorial Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-xs tracking-architectural uppercase font-medium text-[#96743A] mb-4 px-3 py-1 bg-[#EBE4D6] border border-[#DDD3C3] rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#BF9C60]" />
              <span>AR INTERIORS & ARCHITECT STUDIO</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F1D1A] font-normal leading-tight mt-2">
              Studio of Architecture, <br />
              <span className="italic text-[#7A5E44]">Interior Spatial Design</span> <br />
              & Turnkey Execution
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#4A453F] font-light leading-relaxed">
              At AR Interiors, we reject formulaic templates and fast trends. We believe every home or workspace in Noida & NCR must reflect the authentic cadence of your daily rituals, the choreography of natural light, and the tactile joy of genuine materials.
            </p>

            {/* Studio Key Stats in Warm Stone Tiles */}
            <div className="mt-8 grid grid-cols-3 gap-3 pt-6 border-t border-[#DDD3C3]">
              <div className="p-3 bg-white/70 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Focus</span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#1F1D1A]">Noida & NCR</span>
              </div>
              <div className="p-3 bg-white/70 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Method</span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#1F1D1A]">Turnkey</span>
              </div>
              <div className="p-3 bg-white/70 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Delivery</span>
                <span className="font-serif text-base sm:text-lg font-medium text-[#96743A]">Fixed BoQ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery & Architectural Composition */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Architectural Showcase Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-sm overflow-hidden shadow-elevated border border-[#DDD3C3] aspect-[16/10]"
              >
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                  alt="Luxury living space designed by AR Interiors Noida"
                  className="w-full h-full object-cover brightness-[0.95] contrast-[1.03] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1D1A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] tracking-widest text-[#D6BA85] uppercase block font-medium">FEATURED ATELIER</span>
                    <h4 className="text-lg font-serif font-normal text-white">The Solarium Residence, Noida Sec 128</h4>
                  </div>
                  <span className="text-xs font-mono text-[#D6BA85] px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-sm border border-white/20">
                    6,200 SQ.FT
                  </span>
                </div>
              </motion.div>

              {/* Overlapping Detail Photo & Experience Stamp */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden sm:flex items-center gap-4 absolute -bottom-8 -left-8 bg-[#1F1D1A] text-white p-4 sm:p-5 rounded-sm shadow-modal border border-[#BF9C60]/40 max-w-xs"
              >
                <div className="w-12 h-12 rounded-full bg-[#BF9C60]/20 border border-[#BF9C60] flex items-center justify-center shrink-0 text-[#D6BA85]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs tracking-widest uppercase text-[#D6BA85] font-medium block">
                    100% BESPOKE
                  </span>
                  <p className="text-xs text-white/80 font-light mt-0.5 leading-snug">
                    Architectural floorplans, curated Italian marbles & precision joinery.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
