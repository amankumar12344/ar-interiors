import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { projectsData } from '../data/projects';
import { cn } from '../utils/cn';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { label: 'All Works', value: 'all' },
    { label: 'Residential', value: 'residential-interiors' },
    { label: 'Architecture', value: 'architecture-design' },
    { label: 'Commercial', value: 'commercial-interiors' },
    { label: 'Modular Kitchens', value: 'modular-kitchens' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === activeFilter);

  return (
    <main className="pt-32 pb-16">
      <Container>
        {/* Header */}
        <div className="pb-16 border-b border-taupe/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>PROJECT PORTFOLIO</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Selected Works & Architectural Case Studies
            </h1>

            <p className="mt-6 text-lg text-charcoal/75 font-light leading-relaxed">
              A curated catalog of bespoke penthouses, independent villas, executive corporate headquarters, and modular culinary spaces across Noida and Delhi NCR.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-taupe/15">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={cn(
                  'text-xs tracking-architectural uppercase px-5 py-2.5 transition-all duration-200 border',
                  activeFilter === cat.value
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white/60 text-charcoal/70 border-taupe/30 hover:border-charcoal hover:text-charcoal'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 py-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>

      <ConsultationCTA />
    </main>
  );
}
