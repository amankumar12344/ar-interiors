import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { Sun, Maximize2, UserCheck, Gem } from 'lucide-react';

export default function DesignPhilosophy() {
  const pillars = [
    {
      number: '01',
      icon: Sun,
      title: 'Aesthetics & Light',
      desc: 'Sculpting volumes where North Indian daylight choreographs tactile textures, cast shadows, and serene atmospheric warmth.'
    },
    {
      number: '02',
      icon: Maximize2,
      title: 'Ergonomic Function',
      desc: 'Spaces engineered intuitively for human comfort, seamless family circulation, acoustic silence, and effortless daily ease.'
    },
    {
      number: '03',
      icon: UserCheck,
      title: 'Client Lifestyle',
      desc: 'Rejecting cookie-cutter templates. Every layout reflects your specific hosting rituals, privacy needs, and aesthetic temperament.'
    },
    {
      number: '04',
      icon: Gem,
      title: 'Material Honesty',
      desc: 'Uncompromising natural travertine, seasoned teakwood, fluted acoustics, and durable German hardware built for generations.'
    },
  ];

  return (
    <section 
      className="py-24 sm:py-36 text-white relative overflow-hidden border-y border-[#BF9C60]/30 select-none"
      style={{
        backgroundColor: '#13110F',
        backgroundImage: 'radial-gradient(ellipse at 50% 10%, rgba(191,156,96,0.12) 0%, rgba(19,17,15,0) 70%)'
      }}
    >
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 text-xs tracking-architectural uppercase text-[#D6BA85] font-medium mb-6 px-3.5 py-1.5 bg-[#BF9C60]/10 border border-[#BF9C60]/30 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#BF9C60]" />
            <span>STUDIO PHILOSOPHY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-[1.12] tracking-tight text-white"
          >
            Not just beautiful spaces. <br />
            <span className="italic text-[#DFBA73] font-light">Spaces designed for living.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg text-[#D5CDC2] font-light leading-relaxed max-w-2xl mx-auto"
          >
            True architectural luxury is neither ostentatious nor loud. It is the quiet feeling of walking into a room where acoustics are hushed, proportions feel comforting, and every detail has been anticipated.
          </motion.p>
        </div>

        {/* 4 Pillars Grid with High Contrast Luxury Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 border-t border-[#BF9C60]/20">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#1C1A17] border border-[#BF9C60]/25 hover:border-[#BF9C60] p-6 sm:p-7 rounded-sm shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-serif font-bold text-[#E5C378] tracking-widest px-2 py-0.5 bg-[#BF9C60]/15 rounded-sm border border-[#BF9C60]/20">
                      {item.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#BF9C60] group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-serif text-white font-medium mb-2.5 group-hover:text-[#D6BA85] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C4BBAE] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="w-8 h-[2px] bg-[#BF9C60]/40 group-hover:w-full group-hover:bg-[#BF9C60] transition-all duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
