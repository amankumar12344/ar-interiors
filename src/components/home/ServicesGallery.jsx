import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';

export const GALLERY_SERVICES = [
  {
    id: "panoramic-penthouse-lounge",
    category: "Living Rooms",
    categoryKey: "living",
    title: "Panoramic Penthouse Living Lounge",
    subtitle: "Double-height volume, Italian chandelier & floor-to-ceiling sunset skyline",
    image: "/gallery/360-vr-penthouse-living.jpg",
    badge: "PENTHOUSE LOUNGE",
    description: "An expansive architectural showcase of a signature luxury penthouse living lounge. Features double-height glass facades, bespoke crystal chandelier, conversational velvet seating layout, and illuminated fluted feature wall.",
    features: [
      "Expansive Panoramic Architecture with Complete Visual Horizon",
      "Double-Height Curtain Wall with Sunset Skyline Vista",
      "Sculptural Custom Italian Glass Chandelier Installation",
      "Monolithic Low-Profile Sectional Sofa & Floating Hearth"
    ],
    materials: ["Fluted Travertine", "Curved Glass Facade", "Deep Charcoal Velvet", "Brushed Champagne Brass"]
  },
  {
    id: "sky-duplex-completed",
    category: "Architecture & Villas",
    categoryKey: "architecture",
    title: "Sky Duplex: Turnkey Architecture & Handover",
    subtitle: "Sculptural spiral staircase, Venetian plaster & curated designer furnishings",
    image: "/gallery/360-construction-duplex-completed.jpg",
    badge: "READY HANDOVER",
    description: "A completed luxury penthouse duplex following turnkey execution. Features hand-applied Venetian plaster walls, recessed magnetic track lights, illuminated spiral staircase, and rich chevron hardwood floors.",
    features: [
      "Complete Architectural Turnkey Delivery & Handover",
      "Architectural Sculptural Spiral Staircase with Warm Under-Tread LEDs",
      "Seamless Venetian Plaster Wall Hand-Applied Finishes",
      "Dual Conversational Lounge Areas with Curated Designer Furnishings"
    ],
    materials: ["Chevron Hardwood", "Venetian Stucco", "Glass Balustrades", "Recessed Black Line Tracks"]
  },
  {
    id: "grand-villa-completed",
    category: "Architecture & Villas",
    categoryKey: "architecture",
    title: "Grand Villa: Double-Height Opulent Living Hall",
    subtitle: "Bookmatched Italian marble, curved staircase & fluted walnut panelling",
    image: "/gallery/360-construction-villa-completed.jpg",
    badge: "VILLA MASTERPIECE",
    description: "A palatial luxury villa architectural fit-out. Features high-gloss bookmatched Italian marble flooring, glass-and-brass curved grand staircase, architectural walnut fluting, and bespoke luxury seating arrangements.",
    features: [
      "Double-Height Grand Living Hall with Mezzanine Overlook",
      "Mirror-Finish Bookmatched Italian Marble Flooring",
      "Sculptural Curved Staircase with Integrated Step Lighting & Brass Rails",
      "Full-Height Fluted American Walnut Feature Architecture"
    ],
    materials: ["Statuario Italian Marble", "American Walnut Fluting", "Brushed Brass Railings", "Boucle & Velvet Upholstery"]
  },
  {
    id: "contemporary-living-pavilion",
    category: "Living & Dining",
    categoryKey: "living",
    title: "Minimalist Linear Living & Media Suite",
    subtitle: "Seamless timber ceiling coves, marble plinth & daylight geometry",
    image: "/gallery/contemporary-living-pavilion.jpg",
    badge: "ARCHITECTURAL LIVING",
    description: "An expansive, open-format living pavilion designed around uninterrupted sightlines and calibrated natural daylight. Features a floating marble media bench, dual architectural art alcoves, concealed HVAC ceiling detailing, and customized low-slung lounge seating.",
    features: [
      "Floating Italian Marble Media Plinth with Concealed Wire Inlets",
      "Recessed Warm Walnut Ceiling Perimeter with Flush LED Tracks",
      "Minimalist Low-Profile L-Sectional in Stain-Resistant Linen Fabric",
      "Floor-to-Ceiling Thermal Acoustic Fenestration"
    ],
    materials: ["Botticino Marble", "Natural Teak Trims", "Oatmeal Linen", "Matte Anthracite Panels"]
  },
  {
    id: "fluted-timber-master-suite",
    category: "Bedroom Suites",
    categoryKey: "bedroom",
    title: "Biophilic Fluted Timber Master Suite",
    subtitle: "Acoustic vertical louvers, Japanese cherry blossom art & forest vista",
    image: "/gallery/fluted-timber-master-suite.jpg",
    badge: "SIGNATURE BEDROOM",
    description: "A sanctuary of profound calm and natural tactility. The focal wall showcases full-height vertical timber acoustic louvers integrated with hand-crafted golden branch botanical artwork, ambient orb pendants, and a platform bed facing sweeping panoramic green views.",
    features: [
      "Floor-to-Ceiling Solid Wood Fluted Acoustic Wall Screen",
      "Sculptural Hand-Applied Gilded Botanical Branch Installation",
      "Twin Low-Voltage Brass & Frosted Orb Ambient Reading Pendants",
      "Full-Height Triple-Glazed Acoustic Panoramic Nature Wall"
    ],
    materials: ["Seasoned Ash Wood", "Champagne Gold Metal", "Raw Silk Bedding", "Brushed Bronze Profiles"]
  },
  {
    id: "curated-art-library-lounge",
    category: "Living & Dining",
    categoryKey: "living",
    title: "Curated Art & Library Salon",
    subtitle: "Full-height custom walnut shelving, statement abstract art & velvet seating",
    image: "/gallery/curated-art-library-lounge.jpg",
    badge: "BESPOKE LIBRARY",
    description: "An intellectual, artistic salon marrying classical library millwork with vibrant contemporary art. Anchored by a bespoke multi-tier solid walnut bookcase, mid-century lounge chairs, an organic low-slung coffee table, and tailored velvet sofa seating.",
    features: [
      "Bespoke Full-Height Solid Walnut Millwork & Display Cabinetry",
      "Statement Large-Format Abstract Canvas Feature Wall",
      "Mid-Century Ergonomic Accent Armchairs in Grain Leather & Linen",
      "Low-Profile Dual-Tier Organic Teak Wood Coffee Table"
    ],
    materials: ["Solid American Walnut", "Deep Petrol Blue Velvet", "Terracotta Accents", "Hand-Tufted Wool Rug"]
  },
  {
    id: "site-execution-false-ceiling",
    category: "Civil & Fit-Out",
    categoryKey: "construction",
    title: "Precision Gypsum False Ceiling & Linear Light Channels",
    subtitle: "On-site framing, recessed magnetic channels & laser level alignment",
    image: "/gallery/site-execution-false-ceiling.jpg",
    badge: "ON-SITE FIT-OUT",
    description: "High-precision ceiling fit-out in an executive apartment. Skilled technicians aligning gypsum framing, magnetic track light channels, and timber ceiling soffits using digital laser alignment.",
    features: [
      "Level-10 Acoustic Gypsum Framing with Anti-Crack Shadow Beads",
      "Recessed Flush Magnetic Track Profile Installation",
      "Laser-Calibrated Level Lines across Living & Dining Zones",
      "Organized, Clean Jobsite Execution following Zero-Dust Standards"
    ],
    materials: ["Gyproc Gypsum Boards", "Galvanized GI Channels", "Magnetic LED Aluminum Profiles", "Teak Veneer Trim"]
  },
  {
    id: "site-execution-marble-woodwork",
    category: "Civil & Fit-Out",
    categoryKey: "construction",
    title: "Turnkey Italian Marble Laying & Wall Millwork Fit-Out",
    subtitle: "Skilled artisans installing bookmatched marble & bespoke timber panelling",
    image: "/gallery/site-execution-marble-woodwork.jpg",
    badge: "ON-SITE FIT-OUT",
    description: "Master craftsmen installing large-format bookmatched Italian marble slabs with protective coating, while carpenters erect fluted timber architectural wall paneling with integrated warm cove backlighting.",
    features: [
      "Bookmatched Italian Marble Dry-Lay & Precision Zero-Lippage Setting",
      "Protective Surface Cushion Films applied During Active Fit-Out",
      "Bespoke Factory-Manufactured Fluted Veneer Wall Panels",
      "Detailed Architectural Blueprint Execution on Workstations"
    ],
    materials: ["Calacatta Marble Slabs", "Polyurethane Adhesives", "Natural Fluted Oak Panels", "Low-VOC Sealers"]
  },
  {
    id: "architecture",
    category: "Architecture & Villas",
    categoryKey: "architecture",
    title: "New Architectural Design & Villas",
    subtitle: "Ground-up planning, elevations & structural execution",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    badge: "ARCHITECTURAL ELEVATION",
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
    id: "commercial-office",
    category: "Commercial Workplaces",
    categoryKey: "commercial",
    title: "Corporate Offices & Executive Workplaces",
    subtitle: "Dynamic commercial interiors engineered for focus & brand pride",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    badge: "COMMERCIAL FIT-OUT",
    description: "High-impact workplace environments balancing collaboration with deep focus zones. Designed to express corporate identity, optimize practical carpet area, minimize acoustic bleed, and deliver on strict turnkey timelines.",
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
    badge: "SACRED SANCTUM",
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
    badge: "DINING & BAR",
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
    badge: "OUTDOOR VERANDA",
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
    { key: 'all', label: 'All Showcase' },
    { key: 'living', label: 'Living & Dining' },
    { key: 'bedroom', label: 'Bedroom Suites' },
    { key: 'architecture', label: 'Architecture & Villas' },
    { key: 'commercial', label: 'Commercial Offices' },
    { key: 'pooja', label: 'Pooja Sanctums' },
    { key: 'construction', label: 'On-Site Civil & Fit-Out' }
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
    <section className="py-12 sm:py-16 bg-[#FAF7F2] relative overflow-hidden border-b border-taupe/20" id="gallery">
      {/* Top accent divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-gold/15 text-gold-dark rounded-full text-xs font-semibold tracking-architectural uppercase mb-3 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>FULL ARCHITECTURAL & INTERIOR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal font-normal tracking-tight leading-[1.15]">
            Spaces We Specialize In & Shape
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/75 font-light leading-relaxed">
            Click on any space below to inspect architectural details, turnkey execution standards, bespoke finishes, and curated material palettes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar mb-6 sm:mb-8 px-1 sm:px-0">
          {filterTabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`text-[11px] sm:text-xs uppercase tracking-architectural font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm border border-taupe/25 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Click-to-Inspect - 100% Clean Image */}
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
              </div>

              {/* Card Body with Key Features */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                <div>
                  {/* Category & Badge Below Image */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-0.5 bg-cream text-charcoal rounded-xs border border-taupe/20">
                      {item.category}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-xs border border-amber-300">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle Below Image */}
                  <h3 
                    onClick={() => handleOpenModal(item.id)}
                    className="text-xl sm:text-2xl font-serif text-charcoal font-normal group-hover:text-[#96743A] transition-colors mb-1 cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A6F62] font-normal mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-charcoal/75 leading-relaxed line-clamp-2 font-light mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-charcoal/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Material Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-taupe/15">
                    {item.materials.map((mat, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-cream/70 text-charcoal/70 border border-taupe/20 rounded-xs"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-4 border-t border-taupe/15 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(item.id)}
                    className="text-xs uppercase tracking-architectural font-semibold text-charcoal hover:text-gold-dark flex items-center gap-1.5 group/btn transition-colors cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a
                    href="#consultation"
                    className="text-[11px] uppercase tracking-wider text-taupe hover:text-charcoal transition-colors"
                  >
                    Request Estimate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-sm"
            onClick={() => setModalIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-sm max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-taupe/30 relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-taupe/20 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-0.5 bg-charcoal text-gold-light rounded-xs">
                    {activeModalService.category}
                  </span>
                  {activeModalService.badge && (
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-xs">
                      {activeModalService.badge}
                    </span>
                  )}
                  <span className="text-xs text-taupe font-mono hidden sm:inline">
                    {modalIndex + 1} / {GALLERY_SERVICES.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevModal}
                    className="p-1.5 hover:bg-cream rounded-sm text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
                    title="Previous Space"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextModal}
                    className="p-1.5 hover:bg-cream rounded-sm text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
                    title="Next Space"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setModalIndex(null)}
                    className="p-1.5 hover:bg-cream rounded-sm text-charcoal/70 hover:text-charcoal transition-colors ml-2 cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Hero Showcase Image - 100% Clean Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden bg-charcoal shadow-inner">
                  <img
                    src={activeModalService.image}
                    alt={activeModalService.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title, Subtitle & Full Description Cleanly Below Image */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#96743A] font-semibold mb-1">
                    AR Interiors Signature Discipline
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
                    {activeModalService.title}
                  </h3>
                  <h4 className="text-sm sm:text-base font-serif text-[#7A6F62] font-medium mt-1">
                    {activeModalService.subtitle}
                  </h4>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-light mt-3">
                    {activeModalService.description}
                  </p>
                </div>

                {/* Key Deliverables Grid */}
                <div className="bg-[#FAF7F2] p-5 sm:p-6 rounded-sm border border-taupe/20">
                  <h5 className="text-xs uppercase tracking-architectural text-charcoal font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                    <span>Architectural Specifications & Deliverables</span>
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activeModalService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/85">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material Palette */}
                <div>
                  <h5 className="text-xs uppercase tracking-architectural text-charcoal font-semibold mb-3">
                    Curated Material Palette
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeModalService.materials.map((mat, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-cream/80 text-charcoal border border-taupe/25 rounded-xs font-light"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-taupe/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-taupe text-center sm:text-left">
                    Want to execute a similar bespoke concept for your property?
                  </p>
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    onClick={() => setModalIndex(null)}
                  >
                    Consult Our Principal Architect
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
