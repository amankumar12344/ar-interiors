import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';
import ProjectCard from '../components/ui/ProjectCard';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { projectService } from '../services/projectService';
import { ArrowLeft, MapPin, Calendar, Maximize2, Clock } from 'lucide-react';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const proj = await projectService.getProjectBySlug(slug);
      setProject(proj);
      if (proj) {
        const rel = await projectService.getRelatedProjects(slug, 2);
        setRelated(rel);
      }
      setLoading(false);
    }
    load();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="font-serif text-xl text-charcoal">Loading Project Case Study...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory p-6">
        <h2 className="text-3xl font-serif text-charcoal">Project Not Found</h2>
        <Button to="/projects" variant="secondary" size="md" className="mt-6">
          Return to Portfolio
        </Button>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-16">
      <Container>
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-taupe hover:text-charcoal mb-8">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
        </Link>

        {/* Project Header */}
        <div className="pb-12 border-b border-taupe/20">
          <div className="text-xs font-serif text-gold-dark tracking-widest uppercase mb-3">
            {project.category} · {project.location}
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-charcoal font-normal">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-charcoal/70 font-light mt-4 max-w-2xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Project Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-taupe/15 text-xs">
            <div>
              <span className="text-taupe uppercase tracking-wider block mb-1">Location</span>
              <span className="font-medium text-charcoal text-sm">{project.location}</span>
            </div>
            <div>
              <span className="text-taupe uppercase tracking-wider block mb-1">Built Area</span>
              <span className="font-medium text-charcoal text-sm">{project.area}</span>
            </div>
            <div>
              <span className="text-taupe uppercase tracking-wider block mb-1">Year Completed</span>
              <span className="font-medium text-charcoal text-sm">{project.year}</span>
            </div>
            <div>
              <span className="text-taupe uppercase tracking-wider block mb-1">Execution Period</span>
              <span className="font-medium text-charcoal text-sm">{project.completionTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Gallery Image */}
        <div className="my-16 aspect-[16/9] overflow-hidden bg-cream shadow-elevated border border-taupe/20">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overview & Client Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-taupe/20">
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-4">
              The Architectural Vision
            </h3>
            <p className="text-base text-charcoal/80 font-light leading-relaxed">
              {project.overview}
            </p>

            <div className="mt-8 p-6 bg-cream/50 border-l-2 border-gold">
              <h4 className="text-xs uppercase tracking-architectural text-gold-dark font-medium mb-2">
                Client Brief & Mandate:
              </h4>
              <p className="text-sm text-charcoal/80 font-light leading-relaxed italic">
                "{project.clientBrief}"
              </p>
            </div>
          </div>

          {/* Material Palette */}
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-taupe/20">
            <h3 className="text-xl font-serif text-charcoal mb-4">
              Materiality & Finishes
            </h3>
            <ul className="space-y-3">
              {project.materials.map((m, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-charcoal/75 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before / After Slider for Project */}
        {project.beforeImage && project.afterImage && (
          <div className="py-20 border-b border-taupe/20">
            <SectionHeading
              eyebrow="Transformation"
              title="Site Evolution"
              subtitle="Comparing the initial concrete volume with the completed turnkey interior."
            />
            <div className="aspect-[16/10] overflow-hidden shadow-elevated border border-taupe/20 mt-8">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            </div>
          </div>
        )}

        {/* Secondary Gallery */}
        <div className="py-20 border-b border-taupe/20">
          <SectionHeading
            eyebrow="Visual Journal"
            title="Spatial Details & Perspectives"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden bg-cream border border-taupe/20">
                <img
                  src={img}
                  alt={`${project.title} detail ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Related Works */}
        {related.length > 0 && (
          <div className="py-20">
            <SectionHeading
              eyebrow="Further Exploration"
              title="Related Studio Works"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </Container>

      <ConsultationCTA />
    </main>
  );
}
