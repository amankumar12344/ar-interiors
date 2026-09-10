import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            'flex items-center gap-3 text-xs tracking-widest uppercase font-medium mb-3',
            light ? 'text-taupe' : 'text-gold-dark',
            isCenter && 'justify-center'
          )}
        >
          <span className="inline-block w-6 h-[1px] bg-gold/60" />
          <span>{eyebrow}</span>
          {isCenter && <span className="inline-block w-6 h-[1px] bg-gold/60" />}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-serif leading-[1.15] tracking-tight font-normal',
          light ? 'text-white' : 'text-charcoal'
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={cn(
            'mt-4 text-base sm:text-lg font-light leading-relaxed',
            light ? 'text-cream/80' : 'text-charcoal/70'
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
