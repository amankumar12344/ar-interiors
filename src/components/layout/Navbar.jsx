import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowUpRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { cn } from '../../utils/cn';
import { CONTACT_INFO } from '../../data/contactInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for sticky header compression
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Dynamic ScrollSpy for homepage sections
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const sectionIds = ['home', 'about', 'gallery', 'projects', 'services', 'process', 'contact'];

    const handleScrollSpy = () => {
      // Check if user has scrolled near page bottom
      const scrollPosition = window.scrollY + 260;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY + windowHeight >= documentHeight - 80) {
        setActiveSection('contact');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // Trigger immediately on mount
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/', sectionId: 'home' },
    { label: 'About', path: '/about', sectionId: 'about' },
    { label: 'Services', path: '/services', sectionId: 'services' },
    { label: 'Gallery', path: '/gallery', sectionId: 'gallery' },
    { label: 'Projects', path: '/projects', sectionId: 'projects' },
    { label: 'Process', path: '/process', sectionId: 'process' },
    { label: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  // Determine if this nav link is currently active
  const isLinkActive = (link) => {
    if (link.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === link.path || location.pathname.startsWith(link.path + '/');
  };

  // Direct page navigation handler
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

        {/* Tier 2: Main High-Contrast Navigation Bar */}
        <div
          className={cn(
            'transition-all duration-300 bg-charcoal/95 backdrop-blur-xl border-b border-white/15 shadow-modal',
            isScrolled ? 'py-3 sm:py-3.5' : 'py-4 sm:py-4.5'
          )}
        >
          <Container fluid>
            <div className="flex items-center justify-between">
              
              {/* Brand Logo Box with User's 3D Luxury Architectural Logo */}
              <Link to="/" className="group flex items-center gap-3 sm:gap-3.5 text-left shrink-0 whitespace-nowrap">
                <img
                  src="/logo.jpg"
                  alt="AR Interiors Logo"
                  className="w-10 h-10 sm:w-11 sm:h-11 xl:w-12 xl:h-12 object-cover rounded-sm border border-[#BF9C60]/60 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col shrink-0">
                  <span className="font-serif text-xl sm:text-2xl xl:text-[25px] tracking-[0.16em] sm:tracking-[0.18em] font-semibold leading-none bg-gradient-to-r from-[#DFBA73] via-[#F4E3BA] to-[#C89B48] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] group-hover:brightness-110 transition-all whitespace-nowrap">
                    AR INTERIORS
                  </span>
                  <span className="text-[8px] sm:text-[9px] xl:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-ivory/75 uppercase font-sans mt-1 flex items-center gap-1.5 font-medium whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block shrink-0"></span>
                    <span>ARCHITECT & DESIGNER STUDIO</span>
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links with Active Indicator */}
              <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 shrink-0">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);

                  return (
                    <Link
                      key={link.label}
                      to={link.path}
                      onClick={(e) => handleNavLinkClick(e, link)}
                      className={cn(
                        'text-xs tracking-architectural uppercase font-medium transition-all duration-200 relative py-1.5 cursor-pointer whitespace-nowrap shrink-0',
                        active
                          ? 'text-gold-light font-semibold'
                          : 'text-ivory/80 hover:text-gold-light'
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold rounded-full shadow-[0_0_8px_rgba(191,156,96,0.6)] animate-pulse" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Side Action Button */}
              <div className="flex items-center gap-3 sm:gap-4 shrink-0">

                <Button
                  to="/contact"
                  variant="gold"
                  size="sm"
                  icon
                  className="hidden sm:inline-flex !bg-gradient-to-r !from-gold !via-gold-light !to-gold-dark !text-charcoal hover:!brightness-110 font-semibold !shadow-md !border-gold-light/40 uppercase tracking-wider text-xs shrink-0 whitespace-nowrap"
                >
                  Book Free Consultation
                </Button>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-ivory hover:text-gold transition-colors focus:outline-none cursor-pointer shrink-0"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal/80 backdrop-blur-md z-40 transition-opacity duration-300 lg:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-charcoal text-ivory z-50 p-7 flex flex-col justify-between transition-transform duration-500 ease-out border-l border-white/15 lg:hidden overflow-y-auto',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="AR Interiors Logo"
                className="w-10 h-10 rounded-sm object-cover border border-[#BF9C60]/50 shadow-md shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold bg-gradient-to-r from-[#DFBA73] via-[#F4E3BA] to-[#C89B48] bg-clip-text text-transparent">
                  AR INTERIORS
                </span>
                <span className="text-[8px] tracking-[0.2em] text-ivory/60 uppercase">
                  NOIDA & DELHI NCR
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-ivory/60 hover:text-ivory cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Direct Call & WhatsApp in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2 mb-6 pb-6 border-b border-white/10">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 border border-white/10 rounded-sm text-xs font-medium text-ivory hover:text-gold"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>Call Lead</span>
            </a>
            <a
              href={CONTACT_INFO.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-white/5 border border-white/10 rounded-sm text-xs font-medium text-gold hover:text-gold-light"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Links with Active Status */}
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={(e) => handleNavLinkClick(e, link)}
                  className={cn(
                    'font-serif text-lg py-2.5 px-3 rounded-sm flex items-center justify-between transition-all duration-200',
                    active
                      ? 'text-gold-light bg-white/10 font-semibold border-l-2 border-gold pl-4'
                      : 'text-ivory/80 hover:text-gold hover:bg-white/5'
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className={cn("w-4 h-4", active ? "text-gold" : "text-ivory/40")} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Drawer Bottom */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Button
            to="/contact"
            variant="gold"
            size="md"
            className="w-full !text-charcoal font-semibold uppercase tracking-wider"
          >
            Book Free Consultation
          </Button>
          <div className="text-center text-xs text-ivory/50 space-y-1">
            <p className="flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3 text-gold" />
              <span>Sector 62, Noida • Delhi NCR</span>
            </p>
            <p>100% Customized Turnkey Interiors</p>
          </div>
        </div>
      </aside>
    </>
  );
}
