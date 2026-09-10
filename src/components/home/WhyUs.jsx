import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ShieldCheck, Compass, Sliders, CheckCircle2, MessageSquare, HardHat, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      number: '01',
      icon: Compass,
      title: 'Personalized Design',
      pill: '100% Bespoke Layouts',
      desc: 'No generic catalog clones. Every layout is sculpted from scratch around your daily rituals, family dynamics, and spatial dreams.'
    },
    {
      number: '02',
      icon: Sliders,
      title: 'Thoughtful Space Planning',
      pill: 'Vastu & Circulation Harmony',
      desc: 'Scientific circulation analysis, Vastu harmonization, and millimetric storage planning that maximizes usable living area.'
    },
    {
      number: '03',
      icon: CheckCircle2,
      title: 'Attention to Detail',
      pill: '1mm Shadow Gaps & Veneers',
      desc: 'From invisible door frames and flush shadow gaps to custom grain matching in our hand-finished smoked oak veneers.'
    },
    {
      number: '04',
      icon: ShieldCheck,
      title: 'Functional Solutions',
      pill: 'Marine Grade & Safe Joinery',
      desc: 'Aesthetics supported by durable marine-grade materials, easy-clean finishes, and child/elderly-safe joinery.'
    },
    {
      number: '05',
      icon: MessageSquare,
      title: 'Transparent Communication',
      pill: 'Itemized BoQ Guarantee',
      desc: 'Zero hidden expenses. Detailed itemized BoQ with milestone schedules and weekly digital photographic reports.'
    },
    {
      number: '06',
      icon: HardHat,
      title: 'Design-to-Execution Support',
      pill: 'Single-Point Accountability',
      desc: 'Single-source responsibility from initial architectural blueprint to deep cleaning and white-glove key handover.'
    }
  ];

  return (
    <section 
      id="why-us"
      className="py-24 sm:py-32 bg-[#F7F3EC] border-b border-[#DDD3C3] relative overflow-hidden select-none"
    >
      {/* Subtle warm ambient lighting accents */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-40 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(191,156,96,0.2) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-40 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(191,156,96,0.18) 0%, transparent 70%)' }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="The Studio Standard"
            title="Why Choose AR Interiors"
            subtitle="Honest architectural integrity, master craftsmanship, and transparent turnkey execution across Noida and NCR."
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2.5 px-4 py-2 bg-[#EBE4D6] border border-[#DDD3C3] rounded-full text-xs text-[#96743A] font-medium tracking-wide">
            <Sparkles className="w-4 h-4 text-[#BF9C60]" />
            <span>40-Point Quality Handover Checklist</span>
          </div>
        </div>

        {/* Dynamic Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative bg-white/95 backdrop-blur-md border border-[#DDD3C3] hover:border-[#BF9C60] p-7 sm:p-8 rounded-sm shadow-sm hover:shadow-[0_16px_36px_rgba(191,156,96,0.16)] transition-all duration-300 group flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Large Background Watermark Number */}
                <span className="absolute -top-3 right-4 font-serif text-6xl sm:text-7xl text-[#BF9C60]/10 group-hover:text-[#BF9C60]/25 group-hover:scale-105 transition-all duration-500 font-bold select-none pointer-events-none">
                  {item.number}
                </span>

                <div>
                  {/* Animated Circular Icon Badge */}
                  <div className="w-13 h-13 rounded-full bg-[#F4EFE7] border border-[#BF9C60]/40 group-hover:border-[#BF9C60] flex items-center justify-center text-[#96743A] group-hover:bg-gradient-to-br group-hover:from-[#DFBA73] group-hover:via-[#F4E3BA] group-hover:to-[#C89B48] group-hover:text-[#181614] group-hover:shadow-md transition-all duration-300 mb-5 p-3.5 ring-4 ring-[#BF9C60]/10 group-hover:ring-[#BF9C60]/25">
                    <Icon className="w-6 h-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  {/* Feature Pill */}
                  <span className="inline-block text-[10px] tracking-widest uppercase font-mono text-[#96743A] px-2.5 py-0.5 bg-[#F4EFE7] rounded-sm border border-[#DDD3C3] mb-3 group-hover:border-[#BF9C60]/40 group-hover:bg-[#FAF7F2] transition-colors">
                    {item.pill}
                  </span>

                  {/* Title with Smooth Gold Transition */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1F1D1A] font-medium mb-2.5 group-hover:text-[#96743A] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C554D] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Animated Bottom Expander & Guarantee Status */}
                <div className="mt-7 pt-4 border-t border-[#EDE5DA] flex items-center justify-between text-[11px] text-[#9E9080]">
                  <span className="uppercase tracking-wider font-mono font-medium">
                    STANDARD {item.number}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#96743A] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BF9C60] animate-pulse" />
                    <span>Guaranteed</span>
                  </span>
                </div>

                {/* Animated Bottom Gold Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2.5px] w-0 group-hover:w-full bg-gradient-to-r from-[#BF9C60] via-[#DFBA73] to-[#BF9C60] transition-all duration-500 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
