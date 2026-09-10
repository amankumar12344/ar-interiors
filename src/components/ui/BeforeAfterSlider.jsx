import React, { useState, useRef, useCallback } from 'react';
import { GripVertical } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Concept / Before',
  afterLabel = 'Finished Handover',
  className = '',
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none cursor-ew-resize bg-cream ${className}`}
      onMouseDown={startDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={startDrag}
      onTouchEnd={stopDrag}
    >
      {/* After image (full width background) */}
      <img
        src={afterImage}
        alt="After Renovation"
        className="w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
      <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-charcoal/80 text-white text-[10px] tracking-widest uppercase font-medium backdrop-blur-sm">
        {afterLabel}
      </div>

      {/* Before image (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Renovation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%', maxWidth: 'none' }}
          loading="lazy"
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-charcoal/80 text-white text-[10px] tracking-widest uppercase font-medium backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg pointer-events-none z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-charcoal shadow-elevated flex items-center justify-center border border-taupe/30">
          <GripVertical className="w-4 h-4 text-charcoal" />
        </div>
      </div>
    </div>
  );
}
