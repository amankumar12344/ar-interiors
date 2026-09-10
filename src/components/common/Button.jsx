import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans tracking-architectural uppercase font-medium transition-all duration-300 relative group overflow-hidden focus:outline-none';

  const variants = {
    primary:
      'bg-charcoal text-white hover:bg-warmbrown active:bg-charcoal/90 border border-charcoal hover:border-warmbrown shadow-subtle',
    secondary:
      'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-white',
    gold:
      'bg-gold text-white hover:bg-gold-dark border border-gold shadow-subtle',
    text:
      'bg-transparent text-charcoal hover:text-gold p-0 font-medium tracking-wider lowercase first-letter:uppercase border-b border-charcoal/20 hover:border-gold pb-0.5',
    white:
      'bg-white text-charcoal hover:bg-cream border border-white/80 shadow-subtle',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs px-6 py-3.5 gap-2.5',
    lg: 'text-sm px-8 py-4 gap-3',
    none: '',
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    variant !== 'text' ? sizes[size] : '',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {content}
    </button>
  );
}
