import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import {
  BedDouble,
  Bed,
  Sofa,
  Tv,
  Utensils,
  Bath,
  Layers,
  PaintRoller,
  Plug,
  Handshake,
  Compass,
  Cog,
  HardHat,
  BrickWall,
  Home,
  Zap,
  Wrench,
  Grid2X2,
  Paintbrush,
  ClipboardCheck,
  CalendarDays,
  Flame,
  ArrowRight
} from 'lucide-react';

// Custom icons to match the screenshot aesthetics cleanly
const KitchenIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
    <path d="M12 9v13" />
    <circle cx="7.5" cy="6" r="1" fill="currentColor" />
    <circle cx="16.5" cy="6" r="1" fill="currentColor" />
    <line x1="7" y1="13" x2="9" y2="13" />
    <line x1="15" y1="13" x2="17" y2="13" />
  </svg>
);

const WardrobeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="9" y1="11" x2="9" y2="13" />
    <line x1="15" y1="11" x2="15" y2="13" />
    <line x1="4" y1="21" x2="4" y2="23" />
    <line x1="20" y1="21" x2="20" y2="23" />
  </svg>
);

const SoftFurnishingIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 4h18" />
    <path d="M5 4v16c0-2 2-3 2-5s-2-3-2-5 2-3 2-6" />
    <path d="M19 4v16c0-2-2-3-2-5s2-3 2-5-2-3-2-6" />
    <path d="M9 4v16" />
    <path d="M15 4v16" />
  </svg>
);

const ThreeDIcon = ({ className }) => (
  <div className={`rounded-full border-[1.6px] border-current flex items-center justify-center font-bold text-[11px] tracking-tight ${className}`}>
    3D
  </div>
);

const FalseCeilingIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="7" y="7" width="10" height="10" rx="1" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const PoojaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l3 4H9l3-4z" />
    <path d="M4 10h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10z" />
    <path d="M12 6v4" />
    <circle cx="12" cy="15" r="2" />
    <path d="M12 13v-1" />
  </svg>
);

// 15 End-to-End Interior Items
const INTERIOR_SERVICES = [
  { id: 'kitchen', label: 'Modular Kitchen', icon: KitchenIcon },
  { id: 'master-bed', label: 'Master Bedroom', icon: BedDouble },
  { id: 'kids-bed', label: 'Kids Bedroom', icon: Bed },
  { id: 'living', label: 'Living Area', icon: Sofa },
  { id: 'wardrobe', label: 'Luxury Wardrobes', icon: WardrobeIcon },
  { id: 'tv-unit', label: 'TV Unit Design', icon: Tv },
  { id: 'dining', label: 'Dining Area', icon: Utensils },
  { id: 'washroom', label: 'Modern Washroom', icon: Bath },
  { id: 'pooja', label: 'Pooja Room', icon: PoojaIcon },
  { id: 'false-ceiling', label: 'False Ceiling', icon: FalseCeilingIcon },
  { id: 'paint', label: 'Wall Decor & Paint', icon: PaintRoller },
  { id: 'electrical', label: 'Electrical Works', icon: Plug },
  { id: 'furnishing', label: 'Soft Furnishing', icon: SoftFurnishingIcon },
  { id: '3d-vis', label: '3D Visualisation', icon: ThreeDIcon },
  { id: 'handover', label: 'Turnkey Handover', icon: Handshake },
];

// 15 End-to-End Construction Items
const CONSTRUCTION_SERVICES = [
  { id: 'planning', label: 'Architectural Planning', icon: Compass },
  { id: '3d-elevation', label: '3D Elevation Design', icon: ThreeDIcon },
  { id: 'structure', label: 'Structural Design', icon: Cog },
  { id: 'site-exec', label: 'Site Execution', icon: HardHat },
  { id: 'foundation', label: 'Foundation Work', icon: BrickWall },
  { id: 'brickwork', label: 'Brickwork & Plaster', icon: BrickWall },
  { id: 'roofing', label: 'Roofing & Slab', icon: Home },
  { id: 'const-electrical', label: 'Electrical Work', icon: Zap },
  { id: 'plumbing', label: 'Plumbing Work', icon: Wrench },
  { id: 'flooring', label: 'Flooring & Tiling', icon: Grid2X2 },
  { id: 'painting', label: 'Painting & Finishing', icon: Paintbrush },
  { id: 'interior-exec', label: 'Interior Execution', icon: Sofa },
  { id: 'quality', label: 'Quality Checks', icon: ClipboardCheck },
  { id: 'timeline', label: 'Project Timeline', icon: CalendarDays },
  { id: 'turnkey-deliv', label: 'Turnkey Delivery', icon: Handshake },
];

export default function EndToEndServices() {
  return (
    <div className="bg-[#FAF8F5] py-20 sm:py-28 space-y-24 sm:space-y-32">
      {/* ========================================================= */}
      {/* FEATURE 1: END-TO-END HOME INTERIOR                       */}
      {/* ========================================================= */}
      <section id="home-interior" className="scroll-mt-24">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#E11D48] tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 inline-block">
              HOME INTERIOR DESIGN IN NOIDA
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#111827] tracking-tight leading-tight">
              End-to-End <span className="text-[#E11D48]">Home Interior</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4B5563] font-light leading-relaxed">
              We handle everything from conceptualization to final handover, ensuring a seamless experience.
            </p>
          </div>

          {/* 15 Interactive Cards Grid (5 columns on desktop, 3 on tablet, 2 on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {INTERIOR_SERVICES.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  href="/contact"
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.025 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#EBE6DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 hover:border-[#E11D48]/40 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group min-h-[110px] sm:min-h-[125px]"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#4B5563] group-hover:text-[#E11D48] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1F2937] mt-3 group-hover:text-[#E11D48] transition-colors leading-tight">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Planning your home interior? CTA Box */}
          <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Planning your home interior?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] font-light">
              Get expert consultation for interior with AR Interiors & Architect Designer Studio
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white px-8 sm:px-10 py-3.5 rounded-full text-sm font-medium hover:bg-[#E11D48] hover:shadow-lg hover:shadow-[#E11D48]/25 transition-all duration-300 group"
              >
                <span>Start Your Home Interior</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================= */}
      {/* FEATURE 2: END-TO-END HOME CONSTRUCTION                   */}
      {/* ========================================================= */}
      <section id="home-construction" className="scroll-mt-24 pt-6 sm:pt-8 border-t border-[#EBE6DF]/70">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#E11D48] tracking-widest text-xs sm:text-sm font-semibold uppercase mb-3 inline-block">
              HOUSE CONSTRUCTION SERVICES IN NOIDA
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#111827] tracking-tight leading-tight">
              End-to-End <span className="text-[#E11D48]">Home Construction</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4B5563] font-light leading-relaxed">
              From foundation to finishing — we build your dream home with quality, transparency and precision.
            </p>
          </div>

          {/* 15 Interactive Cards Grid (5 columns on desktop, 3 on tablet, 2 on mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
            {CONSTRUCTION_SERVICES.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  href="/contact"
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.025 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-[#EBE6DF] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 hover:border-[#E11D48]/40 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group min-h-[110px] sm:min-h-[125px]"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#4B5563] group-hover:text-[#E11D48] group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1F2937] mt-3 group-hover:text-[#E11D48] transition-colors leading-tight">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Planning to build your home? CTA Box */}
          <div className="mt-14 sm:mt-16 text-center max-w-2xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
              Planning to build your home?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] font-light">
              Get expert consultation for construction with AR Interiors & Architect Designer Studio
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white px-8 sm:px-10 py-3.5 rounded-full text-sm font-medium hover:bg-[#E11D48] hover:shadow-lg hover:shadow-[#E11D48]/25 transition-all duration-300 group"
              >
                <span>Start Your Home Construction</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
