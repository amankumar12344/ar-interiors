import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { Award, Compass, Sparkles, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function Introduction() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitEnterFullscreen) {
        videoRef.current.webkitEnterFullscreen();
      }
    }
  };
  return (
    <section id="about" className="py-12 sm:py-24 bg-[#F3EFE7] border-b border-[#DDD3C3] relative overflow-hidden">
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#1F1D1A 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Origin, Credentials & Editorial Title */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 text-xs tracking-architectural uppercase font-medium text-[#96743A] mb-3 px-3 py-1 bg-[#EBE4D6] border border-[#DDD3C3] rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#BF9C60]" />
              <span>ABOUT US</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F1D1A] font-normal leading-tight mt-1">
              About AR INTERIORS & <br />
              <span className="italic text-[#7A5E44]">ARCHITECT DESIGNER STUDIO</span>
            </h2>

            <div className="mt-4 space-y-3 text-sm sm:text-[15px] text-[#4A453F] font-light leading-relaxed">
              <p>
                AR Interiors is a leading home interior & architect design company providing complete interior & architect design solutions across Delhi NCR. Having <strong>5+ years of experience</strong> and successfully completed <strong>more than 250 projects</strong>, we help create beautiful, useful, and comfortable homes.
              </p>
              <p>
                We design and build modular kitchens, wardrobes, false ceilings, living rooms, office spaces, and custom furniture. We have a dedicated team of <strong>50 professionals</strong>, project managers, and supervisors handling every step, from design to final execution.
              </p>
              <p className="font-normal text-[#1F1D1A]">
                Customer satisfaction is our motto. We are recognized among the best interior designers in Noida / Delhi NCR, turning dreams into living spaces with high quality, transparency, on-time delivery, and trusted after-sales support.
              </p>
            </div>

            {/* Studio Key Stats in Warm Stone Tiles */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 pt-5 border-t border-[#DDD3C3]">
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Experience</span>
                <span className="font-serif text-sm sm:text-lg font-bold text-[#1F1D1A]">5+ Years</span>
              </div>
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Completed</span>
                <span className="font-serif text-sm sm:text-lg font-bold text-[#1F1D1A]">250+ Sites</span>
              </div>
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Team</span>
                <span className="font-serif text-sm sm:text-lg font-bold text-[#96743A]">50+ Pros</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery & Architectural Composition */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Architectural Showcase Video - 100% Full Uncropped Frame with Logo Visible */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-sm overflow-hidden shadow-2xl border border-[#DDD3C3] w-full aspect-video bg-black"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain aspect-video block"
                >
                  <source src="/showcase-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Control Overlay Buttons */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                  {/* Fullscreen Button */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white/90 border border-white/20 transition-all cursor-pointer shadow-md"
                    title="Watch Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#D6BA85]" />
                  </button>

                  {/* Audio Mute/Unmute Toggle */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md text-white/90 text-xs font-medium border border-white/20 transition-all cursor-pointer shadow-md"
                    title={isMuted ? "Click to Unmute Video" : "Click to Mute Video"}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-[#D6BA85]" />
                        <span className="text-[11px] font-sans">Unmute Audio</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] font-sans">Sound On</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
