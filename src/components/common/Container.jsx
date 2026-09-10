import React from 'react';
import { cn } from '../../utils/cn';

export default function Container({ children, className = '', fluid = false }) {
  return (
    <div
      className={cn(
        'w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16',
        fluid ? 'max-w-[1920px]' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
}
