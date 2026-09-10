import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex flex-col justify-between h-full bg-white border border-[#DDD3C3] hover:border-[#BF9C60] transition-all duration-500 rounded-sm overflow-hidden shadow-sm hover:shadow-elevated"
    >
      <div>
        {/* Architectural Service Imagery */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE5D8]">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.96]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          
          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-sm border border-white/20 text-white flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#D6BA85] font-semibold">{service.number}</span>
            <span className="text-[10px] tracking-widest uppercase font-medium">STUDIO DISCIPLINE</span>
          </div>
        </div>

        {/* Card Content with Uniform Spacing */}
        <div className="p-6 sm:p-7">
          {/* Title with standardized height */}
          <div className="min-h-[3.25rem] flex items-center">
            <h3 className="text-xl sm:text-2xl font-serif text-[#1F1D1A] group-hover:text-[#96743A] transition-colors leading-tight">
              {service.title}
            </h3>
          </div>

          {/* Tagline with standardized height */}
          <p className="text-xs text-[#96743A] font-medium tracking-wide mt-1 line-clamp-1 min-h-[1.25rem]">
            {service.tagline}
          </p>

          {/* Description with standardized line clamp */}
          <p className="text-xs sm:text-sm text-[#5C554D] font-light mt-3 line-clamp-3 leading-relaxed min-h-[3.75rem]">
            {service.description}
          </p>

          {/* Service Feature Highlights */}
          {service.features && service.features.length > 0 && (
            <div className="mt-4 pt-4 border-t border-[#EDE5DA] space-y-1.5">
              {service.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-[#4A453F]">
                  <Check className="w-3.5 h-3.5 text-[#96743A] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer pinned to bottom */}
      <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#EDE5DA] flex items-center justify-between mt-auto bg-[#FCFAF7]">
        <span className="text-[11px] tracking-architectural uppercase text-[#96743A] font-semibold group-hover:text-[#1F1D1A] transition-colors">
          Explore Deliverables →
        </span>
        <div className="w-9 h-9 rounded-full border border-[#BF9C60]/40 bg-white flex items-center justify-center text-[#1F1D1A] group-hover:bg-[#1F1D1A] group-hover:text-[#D6BA85] group-hover:border-[#BF9C60] transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
