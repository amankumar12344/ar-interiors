import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import Button from '../common/Button';
import { projectsData } from '../../data/projects';

export default function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.isFeatured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-cream/40 border-b border-taupe/15">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            eyebrow="Selected Portfolio"
            title="Curated Architectural Works"
            subtitle="Explore our recent residential and commercial interior transformations across Noida and Delhi NCR."
            className="mb-0"
          />
          <Button to="/projects" variant="text" size="none" className="shrink-0">
            Explore All Projects →
          </Button>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={project.gridSpan}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 pt-8 border-t border-taupe/20 text-center">
          <Button to="/projects" variant="secondary" size="md" icon>
            View Complete Studio Archives ({projectsData.length} Projects)
          </Button>
        </div>
      </Container>
    </section>
  );
}
