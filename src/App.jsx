import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ErrorBoundary from './components/common/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProcessPage from './pages/ProcessPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans relative">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow">
        <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </ErrorBoundary>
      </div>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}