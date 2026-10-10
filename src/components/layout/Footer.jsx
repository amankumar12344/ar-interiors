import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/contactInfo';

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
                <img
                  src="/logo.jpg"
                  alt="AR Interiors Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm object-cover border border-[#BF9C60]/60 shadow-lg shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-semibold leading-none bg-gradient-to-r from-[#DFBA73] via-[#F4E3BA] to-[#C89B48] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] group-hover:brightness-110 transition-all">
                    AR INTERIORS &
                  </span>
                  <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-[#D6BA85] uppercase font-sans mt-1.5 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BF9C60] inline-block"></span>
                    <span>ARCHITECT DESIGNER STUDIO</span>
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
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3.5 flex-wrap">
              {/* Instagram */}
              <a
                href={CONTACT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="Instagram - AR Interiors Noida"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="LinkedIn - AR Interiors Noida"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Pinterest */}
              <a
                href={CONTACT_INFO.socials.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="Pinterest - AR Interiors Noida"
                title="Explore Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>

                            {/* X / Twitter */}
              <a
                href={CONTACT_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#BF9C60]/30 bg-[#1A1815] flex items-center justify-center text-[#D6BA85] hover:bg-[#BF9C60] hover:text-[#12100E] hover:border-[#BF9C60] transition-all shadow-sm"
                aria-label="X (Twitter) - AR Interiors Noida"
                title="Follow on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Direct WhatsApp */}
              <a
                href={CONTACT_INFO.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#25D366]/40 bg-[#1A1815] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all shadow-sm"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.772.84 2.791.84 3.185 0 5.768-2.587 5.768-5.766.001-3.18-2.582-5.766-5.768-5.766zm9.969 5.766c0 5.519-4.481 10-10 10-1.748 0-3.385-.45-4.819-1.242l-5.181 1.355 1.378-5.034c-.879-1.488-1.378-3.224-1.378-5.079 0-5.519 4.481-10 10-10s10 4.481 10 10zm-5.467 2.593c-.092-.153-.339-.244-.707-.428-.368-.184-2.179-1.076-2.517-1.199-.338-.123-.584-.184-.83.184-.246.368-.953 1.199-1.168 1.445-.215.246-.43.277-.798.093-.368-.184-1.555-.573-2.962-1.828-1.096-.977-1.836-2.184-2.051-2.553-.215-.368-.023-.567.161-.75.166-.165.368-.43.552-.645.184-.215.246-.368.369-.614.123-.246.061-.46-.031-.645-.092-.184-.83-2.001-1.137-2.742-.299-.721-.603-.623-.83-.635l-.707-.012c-.246 0-.645.092-.983.46-.338.368-1.29 1.26-1.29 3.073 0 1.813 1.321 3.565 1.505 3.811.184.246 2.599 3.968 6.297 5.566.88.381 1.567.608 2.102.778.884.281 1.689.241 2.324.146.709-.106 2.179-.89 2.486-1.749.307-.86.307-1.597.215-.75-.092-.153-.338-.244-.706-.428z" />
                </svg>
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
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#DFBA73] shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-[#F5F2EB] font-medium hover:text-[#DFBA73] transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#DFBA73] shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#DFBA73] transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
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