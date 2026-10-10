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
              className="inline-flex items-center gap-3 text-xs tracking-architectural uppercase font-medium text-[#96743A] mb-4 px-3 py-1 bg-[#EBE4D6] border border-[#DDD3C3] rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#BF9C60]" />
              <span>AR INTERIORS & ARCHITECT STUDIO</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#1F1D1A] font-normal leading-tight mt-2">
              Studio of Architecture, <br />
              <span className="italic text-[#7A5E44]">Interior Spatial Design</span> <br />
              & Turnkey Execution
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#4A453F] font-light leading-relaxed">
              At AR Interiors, we reject formulaic templates and fast trends. We believe every home or workspace in Noida & NCR must reflect the authentic cadence of your daily rituals, the choreography of natural light, and the tactile joy of genuine materials.
            </p>

            {/* Studio Key Stats in Warm Stone Tiles */}
            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 pt-6 border-t border-[#DDD3C3]">
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Focus</span>
                <span className="font-serif text-xs sm:text-base font-semibold text-[#1F1D1A]">Noida & NCR</span>
              </div>
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Method</span>
                <span className="font-serif text-xs sm:text-base font-semibold text-[#1F1D1A]">Turnkey</span>
              </div>
              <div className="p-2 sm:p-3 bg-white/80 border border-[#DDD3C3] rounded-sm text-center">
                <span className="text-[10px] sm:text-xs text-[#9E9080] uppercase tracking-wider block font-sans">Delivery</span>
                <span className="font-serif text-xs sm:text-base font-semibold text-[#96743A]">Fixed BoQ</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery & Architectural Composition */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Architectural Showcase Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-sm overflow-hidden shadow-2xl border border-[#DDD3C3] w-full h-[320px] sm:h-[400px] md:h-[460px] bg-black"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover brightness-[0.98] contrast-[1.02]"
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
