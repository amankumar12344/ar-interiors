import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import Button from '../common/Button';
import Container from '../common/Container';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "The Solarium Villa",
    location: "Sector 128, Noida",
    area: "6,200 sq.ft",
    tag: "Architectural Living & Daylight Design",
    headline: "Spaces Designed Around The Way You Live.",
    subtext: "Double-height private residence celebrating natural travertine, white oak millwork, and seamless garden integration.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85",
    palette: ["Warm Travertine", "Natural White Oak", "Brushed Brass"]
  },
  {
    id: 2,
    title: "The Atelier Residence",
    location: "Sector 150, Noida",
    area: "2,850 sq.ft (3BHK)",
    tag: "Bespoke 3BHK Turnkey Interior",
    headline: "Serenity Sculpted in Warm Linen & Timber.",
    subtext: "A tranquil apartment transformation featuring custom fluted glass partitions, acoustic ceilings, and concealed storage.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=85",
    palette: ["Bleached Ash", "Chalk Plaster", "Textured Jute"]
  },
  {
    id: 3,
    title: "Cashmere & Quartz Kitchen",
    location: "Sector 50, Noida",
    area: "320 sq.ft",
    tag: "Precision Modular Kitchen & Pantry",
    headline: "Ergonomics Engineered for Modern Living.",
    subtext: "Calacatta quartz waterfall island, motorized pull-out pantries, and matte cashmere cabinetry with German hardware.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2200&q=85",
    palette: ["Calacatta Quartz", "Cashmere Matte", "Champagne Gold"]
  },
  {
    id: 4,
    title: "The Veranda Master Suite",
    location: "Sector 137, Noida",
    area: "420 sq.ft",
    tag: "Tailored Bedroom & Walk-In Wardrobe",
    headline: "Restful Sanctuaries of Tactile Comfort.",
    subtext: "Integrated upholstered headboard wall, acoustic fluted panels, and floor-to-ceiling tinted glass walk-in wardrobe.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2200&q=85",
    palette: ["Warm Walnut", "Oatmeal Linen", "Ambient LED Coves"]
  },
  {
    id: 5,
    title: "Cloudline Creative Studio",
    location: "Sector 62, Noida",
    area: "4,500 sq.ft",
    tag: "Corporate Workspace & Focus Pods",
    headline: "Inspiring Environments That Drive Business.",
    subtext: "Biophilic architectural workplace featuring acoustic timber baffles, ergonomic collaboration zones, and reception lounge.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=85",
    palette: ["Architectural Concrete", "Birch Timber", "Charcoal Steel"]
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5200);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[current];

  return (
    <section 
      id="home"
      className="relative min-h-[94vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-charcoal text-ivory select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slider Images with Ken Burns & Smooth Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.04]"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep, Rich Architectural Gradients (Warm Obsidian & Champagne Tones, NOT washed out white) */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/70 to-charcoal/30 sm:from-charcoal/90 sm:via-charcoal/55 sm:to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/40 z-[1]" />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Studio Eyebrow Stamp */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-xs tracking-architectural uppercase text-gold-light font-medium mb-4 sm:mb-6"
            >
              <span className="w-8 h-[1px] bg-gold" />
              <span>AR INTERIORS & ARCHITECT STUDIO · NOIDA & NCR</span>
            </motion.div>

            {/* Dynamic Headline with Slide Transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-sans text-gold-light border border-white/15 mb-3">
                  <Sparkles className="w-3 h-3 text-gold" />
                  <span>{slide.tag}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-ivory leading-[1.08] tracking-tight">
                  {slide.headline.split('The Way You Live')[0]}
                  {slide.headline.includes('The Way You Live') && (
                    <span className="italic font-light text-gold-light">The Way You Live.</span>
                  )}
                </h1>

                <p className="mt-5 sm:mt-7 text-base sm:text-lg text-ivory/85 font-light max-w-xl leading-relaxed">
                  {slide.subtext}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <Button to="/projects" variant="gold" size="lg" icon>
                Explore Projects
              </Button>
              <Button 
                to="/contact" 
                variant="secondary" 
                size="lg" 
                className="!text-ivory !border-white/30 hover:!bg-white/15 hover:!border-white"
              >
                Book a Consultation
              </Button>
            </div>

            {/* Slide Navigation Dots & Number Indicators */}
            <div className="mt-12 sm:mt-14 flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    className="group py-2 focus:outline-none"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 bg-white/20 w-8 sm:w-12">
                      {current === idx && (
                        <motion.div
                          layoutId="activeSlideProgress"
                          className="absolute inset-0 bg-gold"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: isPaused ? 0 : 5.2, ease: 'linear' }}
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-xs tracking-widest text-ivory/60 font-serif">
                <span className="text-gold font-medium">0{current + 1}</span>
                <span className="mx-1">/</span>
                <span>0{HERO_SLIDES.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Architectural Project Badge */}
          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.94, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-sm bg-charcoal/70 backdrop-blur-xl border border-white/15 p-6 rounded-sm shadow-modal"
              >
                <div className="flex items-center justify-between text-xs tracking-widest text-gold uppercase mb-2">
                  <span>Featured Work</span>
                  <span>{slide.area}</span>
                </div>

                <h3 className="text-2xl font-serif text-ivory font-normal mb-1">
                  {slide.title}
                </h3>

                <p className="flex items-center gap-1.5 text-xs text-ivory/70 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  <span>{slide.location}</span>
                </p>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] tracking-widest text-taupe uppercase block mb-2 font-medium">
                    Material Palette:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {slide.palette.map((mat, mIdx) => (
                      <span 
                        key={mIdx}
                        className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-sm text-ivory/90"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-ivory/60 font-serif">40-Pt Quality Handover</span>
                  <Button to="/projects" variant="text" className="!text-gold hover:!text-gold-light !border-gold/40 text-xs">
                    View Project Specs
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* Prev / Next Floating Navigation Arrows */}
      <div className="absolute right-6 sm:right-10 bottom-6 sm:bottom-10 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-charcoal/60 backdrop-blur-md flex items-center justify-center text-ivory hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 shadow-subtle group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full border border-white/20 bg-charcoal/60 backdrop-blur-md flex items-center justify-center text-ivory hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 shadow-subtle group"
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Trust & Local Credential Bar on Hero Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block bg-charcoal/80 backdrop-blur-md border-t border-white/10 py-3">
        <Container>
          <div className="grid grid-cols-4 divide-x divide-white/10 text-center">
            <div className="px-4">
              <span className="text-xs text-gold font-medium tracking-wider block">NOIDA BASED STUDIO</span>
              <span className="text-[11px] text-ivory/60">Expressway, Sec 150, 128, 50 & NCR</span>
            </div>
            <div className="px-4">
              <span className="text-xs text-gold font-medium tracking-wider block">100% BESPOKE PLANNING</span>
              <span className="text-[11px] text-ivory/60">No Catalogues, No Replicas</span>
            </div>
            <div className="px-4">
              <span className="text-xs text-gold font-medium tracking-wider block">FIXED-PRICE BOQ</span>
              <span className="text-[11px] text-ivory/60">Zero Escalation Guarantees</span>
            </div>
            <div className="px-4">
              <span className="text-xs text-gold font-medium tracking-wider block">TURNKEY ACCOUNTABILITY</span>
              <span className="text-[11px] text-ivory/60">Civil, MEP, Furniture to Handover</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
