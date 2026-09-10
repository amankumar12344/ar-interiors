import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { Instagram, Facebook, Linkedin, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-[#BF9C60]/30 pt-20 pb-12 text-[#F5F2EB] select-none relative overflow-hidden"
      style={{
        backgroundColor: '#12100E',
        backgroundImage: 'radial-gradient(ellipse at 20% 0%, rgba(191,156,96,0.08) 0%, rgba(18,16,14,0) 60%)'
      }}
    >
      <Container>
        {/* Editorial Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Mission Column with 3D Architectural Logo */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-flex items-center gap-4 group mb-5">
                {/* 3D Architectural Logo Emblem */}
                <img
                  src="/logo.jpg"
                  alt="AR Interiors Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm object-cover border border-[#BF9C60]/60 shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="flex flex-col">
                  {/* Metallic Champagne Gold AR INTERIORS - matching top navbar */}
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-semibold leading-none bg-gradient-to-r from-[#DFBA73] via-[#F4E3BA] to-[#C89B48] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] group-hover:brightness-110 transition-all">
                    AR INTERIORS
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#D6BA85] uppercase font-sans mt-1.5 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BF9C60] inline-block"></span>
                    <span>ARCHITECT & DESIGNER STUDIO</span>
                  </span>
                </div>
              </Link>

              <p className="text-xl sm:text-2xl font-serif text-[#DFBA73] mt-4 leading-relaxed max-w-md italic font-light">
                Architecture. Interiors. Spaces designed around you.
              </p>

              <p className="text-sm text-[#C7BFB3] font-light mt-3 leading-relaxed max-w-md">
                Creating bespoke residential sanctuaries, commercial executive environments, and timeless architectural forms throughout Noida, Greater Noida, and Delhi NCR.
              </p>
            </div>

            {/* Social Links with Warm Gold Accents */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="Pinterest"
              >
                <span className="text-xs font-semibold">P</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-architectural text-[#DFBA73] font-semibold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Studio & Philosophy</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Projects Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Design Process</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Contact Studio</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Studio Disciplines */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-architectural text-[#DFBA73] font-semibold mb-6">
              Core Expertise
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/services/residential-interiors" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Residential Interiors</span>
                </Link>
              </li>
              <li>
                <Link to="/services/architecture-design" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Architecture Design</span>
                </Link>
              </li>
              <li>
                <Link to="/services/modular-kitchens" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Modular Kitchens</span>
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-interiors" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Commercial Interiors</span>
                </Link>
              </li>
              <li>
                <Link to="/services/furniture-lighting" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Furniture & Lighting</span>
                </Link>
              </li>
              <li>
                <Link to="/services/space-planning" className="text-[#C7BFB3] hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 group">
                  <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40 group-hover:bg-[#BF9C60]" />
                  <span>Space Planning & 3D</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-architectural text-[#DFBA73] font-semibold mb-6">
              Studio & Contact
            </h4>
            <div className="space-y-4 text-sm text-[#C7BFB3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DFBA73] mt-1 shrink-0" />
                <p className="leading-relaxed">
                  Sector 128 / Noida Expressway, Noida, Uttar Pradesh 201304, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFBA73] shrink-0" />
                <p className="text-[#F5F2EB] font-medium">+91 9810X XXXXX / +91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DFBA73] shrink-0" />
                <p>studio@arinteriors.in</p>
              </div>
              <div className="pt-2">
                <span className="inline-block px-3 py-1.5 bg-[#BF9C60]/15 border border-[#BF9C60]/30 rounded-sm text-xs text-[#DFBA73] font-medium">
                  Service Area: Noida · Greater Noida · Delhi NCR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#8E867A] gap-4">
          <p>© {currentYear} AR Interiors & Architect Designer Studio. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#DFBA73] transition-colors">Interior Designers in Noida</span>
            <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40" />
            <span className="hover:text-[#DFBA73] transition-colors">Architectural Planning</span>
            <span className="w-1 h-1 rounded-full bg-[#BF9C60]/40" />
            <span className="hover:text-[#DFBA73] transition-colors">Turnkey Execution</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
