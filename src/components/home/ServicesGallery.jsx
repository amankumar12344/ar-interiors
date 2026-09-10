import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export const GALLERY_SERVICES = [
  {
    id: "architecture",
    category: "Architecture",
    categoryKey: "architecture",
    title: "New Architectural Design & Villas",
    subtitle: "Ground-up planning, elevations & structural execution",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Holistic architectural masterplanning for luxury private villas, bungalows, and multi-floor residences. We integrate daylight geometry, structural engineering liaison, municipal approval packages, and turnkey civil execution under one studio.",
    features: [
      "Custom 2D/3D Master Floor Plans & Circulation Zoning",
      "Photorealistic 3D Exterior Elevations & Daylight Studies",
      "End-to-end Structural & MEP Authority Liaison",
      "Turnkey Civil Supervision from Foundation to Roof Slab"
    ],
    materials: ["Dholpur Sandstone", "Structural Steel", "Low-E Glazing", "Weatherproof Louvers"]
  },
  {
    id: "living-room",
    category: "Living Rooms",
    categoryKey: "living",
    title: "Luxury Living Rooms & Spatial Zoning",
    subtitle: "Double-height volumes, conversational seating & statement walls",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "We craft living rooms as welcoming architectural centerpieces. Every layout balances large family gatherings with intimate conversation corners, incorporating seamless TV media plinths, acoustic ceiling coves, and curated art backdrops.",
    features: [
      "Bespoke Marble TV Consoles & Built-in Joinery",
      "Layered Multi-Circuit Architectural Warm Lighting",
      "Acoustic Wall Panelling with 1mm Shadow Gaps",
      "Tailored Bouclé Sofas & Full-Grain Leather Loungers"
    ],
    materials: ["Italian Travertine", "Natural White Oak", "Ivory Linen", "Brushed Brass"]
  },
  {
    id: "modular-kitchen",
    category: "Modular Kitchens",
    categoryKey: "kitchen",
    title: "Bespoke Modular Kitchens & Islands",
    subtitle: "Precision engineering tailored for modern Indian culinary habits",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Precision-engineered kitchens that marry heavy-duty durability with showroom elegance. We use marine-grade waterproof plywood (BWP/BWR), stain-proof quartz countertops, motorized corner carousels, and premium German hardware.",
    features: [
      "100% Waterproof Marine Plywood (IS 710 Grade)",
      "German Soft-Close Systems (Blum & Hafele Certified)",
      "Waterfall Quartz Island with Integrated Breakfast Bar",
      "Motorized Pull-out Pantry Towers & Spice Organizing Pullouts"
    ],
    materials: ["Calacatta Quartz", "Cashmere Matte Acrylic", "Champagne Gold Trims", "Tinted Glass"]
  },
  {
    id: "master-bedroom",
    category: "Bedrooms",
    categoryKey: "bedroom",
    title: "Master Bedroom Suites & Dressing Rooms",
    subtitle: "Restful acoustic sanctuaries with walk-in wardrobe suites",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Designed for profound rest and effortless organization. Featuring custom upholstered headboard feature walls, acoustic fluted timber panels, concealed dressing tables, and walk-in wardrobe suites with automated interior warm LEDs.",
    features: [
      "Full-Height Integrated Headboard Wall Detailing",
      "Floor-to-Ceiling Tinted Glass Sliding Wardrobes",
      "Automated Sensor LED Interior Wardrobe Illumination",
      "Concealed Vanity Dressing Table with Fluted Mirrors"
    ],
    materials: ["Warm American Walnut", "Oatmeal Linen", "Bronze Tinted Glass", "Soft Bouclé"]
  },
  {
    id: "commercial-office",
    category: "Workplaces",
    categoryKey: "commercial",
    title: "Corporate Offices & Executive Workplaces",
    subtitle: "Dynamic commercial interiors engineered for focus & brand pride",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    description: "High-impact workplace environments balancing collaboration with deep focus zones. Designed to express corporate identity, optimize usable carpet area, minimize acoustic bleed, and deliver on strict turnkey timelines.",
    features: [
      "Acoustic Felt Baffles & Wooden Ceiling Systems",
      "Executive MD Cabins & Soundproof Meeting Pods",
      "Modular Team Workstations with Wire Management",
      "HVAC Duct Coordination & Ergonomic Task Lighting"
    ],
    materials: ["Birch Plywood", "Architectural Concrete", "Acoustic Baffles", "Powder-Coated Steel"]
  },
  {
    id: "pooja-room",
    category: "Pooja Sanctums",
    categoryKey: "pooja",
    title: "Mandir & Sacred Pooja Sanctuaries",
    subtitle: "Spiritual sanctuaries of serenity, marble & brass",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Tranquil spiritual spaces crafted with reverence and architectural refinement. Featuring pure white Makrana marble, laser-cut solid brass jalis, warm backlit alabaster stone, and concealed storage drawers for ritual pooja items.",
    features: [
      "Hand-Selected White Makrana Marble Inlays",
      "Solid Brass CNC Laser-Cut Jali Screens",
      "Backlit Translucent Onyx / Alabaster Ambient Glow",
      "Concealed Velvet-Lined Drawers for Pooja Samagri"
    ],
    materials: ["Makrana Marble", "Solid Brushed Brass", "Translucent Onyx", "Teak Wood Accents"]
  },
  {
    id: "dining-room",
    category: "Living & Dining",
    categoryKey: "living",
    title: "Bespoke Dining Rooms & Bar Units",
    subtitle: "Intimate celebration spaces with statement chandeliers",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    description: "Refined dining environments anchored by monolithic stone tables, custom upholstered dining chairs, architectural chandeliers, and integrated bar credenzas with temperature-controlled wine displays.",
    features: [
      "Monolithic 8-Seater Quartz & Marble Dining Tables",
      "Fluted Glass Bar Units with Warm Edge-Lit Shelves",
      "Architectural Ceiling Niches for Chandelier Integration",
      "Concealed Crockery Units with Soft Push-to-Open Hardware"
    ],
    materials: ["Quartzite Top", "Smoked Oak Wood", "Fluted Glass", "Champagne Brass"]
  },
  {
    id: "balcony-deck",
    category: "Outdoor Verandas",
    categoryKey: "outdoor",
    title: "Balcony Retreats & Green Verandas",
    subtitle: "Weatherproof urban sanctuaries connecting indoor living to nature",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    description: "Transform apartment balconies into lush, serene extensions of your home. Incorporating composite wooden decking, vertical biophilic green walls, louvered sunshading, and weatherproof warm outdoor spotlights.",
    features: [
      "UV & Weather-Resistant Composite Deck Flooring",
      "Automated Drip-Irrigation Vertical Green Walls",
      "Custom Outdoor Daybeds & Weatherproof Joinery",
      "Warm Architectural Spotlights & Ambient Lanterns"
    ],
    materials: ["Composite Teak Decking", "Vertical Living Greens", "Powder-Coated Aluminum", "Natural Jute"]
  }
];

export default function ServicesGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalIndex, setModalIndex] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All Services & Spaces' },
    { key: 'architecture', label: 'Architecture & Villas' },
    { key: 'living', label: 'Living & Dining' },
    { key: 'kitchen', label: 'Modular Kitchens' },
    { key: 'bedroom', label: 'Bedroom Suites' },
    { key: 'commercial', label: 'Commercial Offices' },
    { key: 'pooja', label: 'Pooja Sanctums' }
  ];

  const filteredServices = activeFilter === 'all'
    ? GALLERY_SERVICES
    : GALLERY_SERVICES.filter(s => s.categoryKey === activeFilter);

  const activeModalService = modalIndex !== null ? GALLERY_SERVICES[modalIndex] : null;

  const handleOpenModal = (serviceId) => {
    const idx = GALLERY_SERVICES.findIndex(s => s.id === serviceId);
    if (idx !== -1) setModalIndex(idx);
  };

  const handleNextModal = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev + 1) % GALLERY_SERVICES.length);
  };

  const handlePrevModal = (e) => {
    e.stopPropagation();
    setModalIndex((prev) => (prev - 1 + GALLERY_SERVICES.length) % GALLERY_SERVICES.length);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden border-b border-taupe/20" id="gallery">
      {/* Top accent divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/15 text-gold-dark rounded-full text-xs font-semibold tracking-architectural uppercase mb-3 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>FULL ARCHITECTURAL & INTERIOR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal font-normal tracking-tight leading-[1.15]">
            Spaces We Specialize In & Shape
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/75 font-light leading-relaxed">
            Click on any space below to inspect architectural details, material palettes, and execution deliverables.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-14">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`text-xs uppercase tracking-architectural font-medium px-4 sm:px-5 py-2.5 rounded-sm transition-all duration-200 cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-charcoal text-white shadow-md border border-charcoal'
                  : 'bg-white text-charcoal/75 hover:text-charcoal hover:bg-cream/60 border border-taupe/25'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm border border-taupe/25 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Click-to-Inspect */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-cream cursor-pointer"
                onClick={() => handleOpenModal(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 bg-charcoal/85 text-gold-light backdrop-blur-md rounded-sm border border-white/15">
                    {item.category}
                  </span>
                </div>

                {/* Hover Quick View Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/90 text-ivory text-xs uppercase tracking-widest rounded-sm border border-white/20 backdrop-blur-md shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                    <span>Inspect Full Specs</span>
                  </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-2xl font-serif text-white font-normal group-hover:text-gold-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory/80 font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-white">
                <div>
                  <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="mb-6 pt-5 border-t border-taupe/15">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-dark block mb-3">
                      Key Execution Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/85">
                          <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Material Palette Tags */}
                  <div className="pt-4 border-t border-taupe/15 flex flex-wrap items-center gap-1.5 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-taupe font-medium mr-1">
                      Materials:
                    </span>
                    {item.materials.map((mat, mIdx) => (
                      <span key={mIdx} className="text-[11px] px-2.5 py-0.5 bg-cream/70 text-charcoal/90 rounded-sm font-sans border border-taupe/20">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-taupe/15 flex items-center justify-between">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="sm"
                    icon
                    className="!bg-charcoal hover:!bg-gold-dark !text-white text-xs font-semibold"
                  >
                    Inquire For This Space
                  </Button>

                  <button
                    onClick={() => handleOpenModal(item.id)}
                    className="text-xs tracking-wider uppercase font-serif text-gold-dark hover:text-charcoal font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Full Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Interactive Service Lightbox / Detail Modal */}
      {activeModalService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md"
          onClick={() => setModalIndex(null)}
        >
          <div 
            className="bg-white rounded-sm max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-taupe/30 shadow-modal relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 p-2 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image with Prev/Next Navigation */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-6 bg-cream">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />

              {/* Modal Prev / Next Arrows */}
              <button
                onClick={handlePrevModal}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/70 text-white flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextModal}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal/70 text-white flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 text-gold-dark rounded-full text-xs font-semibold uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{activeModalService.category}</span>
              </div>
              <span className="text-xs text-charcoal/50 font-serif">
                {modalIndex + 1} of {GALLERY_SERVICES.length}
              </span>
            </div>

            <h3 className="text-3xl font-serif text-charcoal font-normal mb-2">
              {activeModalService.title}
            </h3>
            <p className="text-base text-charcoal/75 font-light mb-6 leading-relaxed">
              {activeModalService.description}
            </p>

            <div className="mb-6 p-5 bg-[#FAF7F2] rounded-sm border border-taupe/20">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gold-dark mb-3">
                Studio Execution Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalService.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal/85">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-taupe/20">
              <div className="flex flex-wrap gap-1.5 items-center">
                <span className="text-xs text-taupe uppercase font-medium mr-1">Materials:</span>
                {activeModalService.materials.map((mat, mIdx) => (
                  <span key={mIdx} className="text-xs px-2.5 py-1 bg-cream rounded-sm text-charcoal">
                    {mat}
                  </span>
                ))}
              </div>

              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon
                onClick={() => setModalIndex(null)}
                className="!bg-charcoal hover:!bg-gold-dark !text-white"
              >
                Book Consultation for {activeModalService.category}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
