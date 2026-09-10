import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import Button from '../common/Button';
import { MessageCircle, PhoneCall, Sparkles, MapPin } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#EFE9DF] relative overflow-hidden">
      <Container>
        <div 
          className="p-8 sm:p-14 lg:p-16 rounded-sm shadow-modal relative overflow-hidden text-white border border-[#BF9C60]/40"
          style={{
            backgroundColor: '#161412',
            backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(191,156,96,0.16) 0%, rgba(22,20,18,0) 70%)'
          }}
        >
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#BF9C60]/20 border border-[#BF9C60]/40 rounded-full text-xs text-[#D6BA85] uppercase tracking-architectural font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#BF9C60]" />
              <span>HAVE A SPACE IN MIND? · NOIDA & NCR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal leading-[1.12] tracking-tight">
              Let's design something <br />
              <span className="italic text-[#DFBA73] font-light">remarkable together.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#D5CDC2] font-light leading-relaxed max-w-xl">
              Whether you are planning a luxury high-rise penthouse on Noida Expressway, a bespoke golf villa in Greater Noida, or an executive commercial studio, our principal architects are ready to guide you.
            </p>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6">
              <Button to="/contact" variant="gold" size="lg" icon>
                Start Your Project
              </Button>
              <Button
                href="https://wa.me/919810XXXXXX?text=Hello%20AR%20Interiors,%20I%20would%20like%20to%20schedule%20a%20free%20design%20consultation%20for%20my%20property%20in%20Noida"
                variant="secondary"
                size="lg"
                className="gap-2 !text-white !border-white/30 hover:!bg-white/15"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Design Studio</span>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-[#9E9080] font-sans">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BF9C60]" />
                <span>Studio: Sector 150 / 128 / 62, Noida</span>
              </span>
              <span>·</span>
              <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
