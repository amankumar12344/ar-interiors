import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { serviceService } from '../services/serviceService';
import { projectService } from '../services/projectService';
import ProjectCard from '../components/ui/ProjectCard';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await serviceService.getServiceBySlug(slug);
      setService(data);
      if (data) {
        const projs = await projectService.getProjectsByCategory(data.slug);
        setRelatedProjects(projs);
      }
      setLoading(false);
    }
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center font-serif text-xl text-charcoal">Loading Studio Discipline...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory p-6">
        <h2 className="text-3xl font-serif text-charcoal">Service Not Found</h2>
        <Button to="/services" variant="secondary" size="md" className="mt-6">
          Return to All Services
        </Button>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-16">
      <Container>
        <Link to="/services" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-taupe hover:text-charcoal mb-8">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Services Overview
        </Link>

        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-16 border-b border-taupe/20">
          <div className="lg:col-span-8">
            <span className="text-xs font-serif text-gold-dark tracking-widest uppercase block mb-3">
              STUDIO DISCIPLINE {service.number}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-charcoal">
              {service.title}
            </h1>
            <p className="text-lg text-gold-dark font-medium mt-3">
              {service.tagline}
            </p>
            <p className="mt-6 text-base sm:text-lg text-charcoal/75 font-light leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Button to="/contact" variant="primary" size="lg" icon>
              Inquire For This Service
            </Button>
          </div>
        </div>

        {/* Hero Photograph */}
        <div className="my-16 aspect-[21/9] overflow-hidden bg-cream border border-taupe/20">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sub-services Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-taupe/20">
          <div className="lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal">
              Comprehensive Scope & Deliverables
            </h3>
            <p className="text-sm text-charcoal/70 font-light mt-3 leading-relaxed">
              Every detail is accounted for under our single-source accountability model.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.includedServices.map((sub, i) => (
                <div key={i} className="p-4 bg-cream/40 border border-taupe/20 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-xs sm:text-sm text-charcoal/80 font-medium">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="py-20 border-b border-taupe/20">
            <SectionHeading
              eyebrow="Portfolio Case Studies"
              title={`Recent ${service.title} Works`}
              subtitle="See how this discipline was executed for luxury residences across Noida."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {relatedProjects.map((p) => (
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
