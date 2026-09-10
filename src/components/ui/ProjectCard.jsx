import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ProjectCard({ project, className = '' }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn('group block relative', className)}
    >
      <div className="overflow-hidden bg-cream relative">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-taupe font-medium">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.location}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-charcoal mt-1 group-hover:text-warmbrown transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="w-9 h-9 rounded-full border border-taupe/30 flex items-center justify-center text-charcoal group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-white transition-all duration-300 shrink-0 mt-1">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
