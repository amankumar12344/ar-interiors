import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { contactService } from '../services/contactService';
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await contactService.submitInquiry(data);
      setSubmitted(true);
      setServerMessage(response.message);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="pt-32 pb-16">
      <Container>
        {/* Header */}
        <div className="pb-16 border-b border-taupe/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span>COMMISSION A PROJECT</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal leading-[1.08] tracking-tight">
              Begin Your Architectural Journey
            </h1>

            <p className="mt-6 text-lg text-charcoal/75 font-light leading-relaxed">
              We take on a limited number of residential and commercial commissions each quarter to ensure rigorous partner oversight and craftsmanship tolerances.
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-16">
          {/* Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-cream/40 border border-taupe/20">
              <h3 className="text-xl font-serif text-charcoal font-medium mb-6">
                Studio Headquarters
              </h3>

              <div className="space-y-6 text-sm text-charcoal/80">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <strong className="block text-charcoal">AR INTERIORS & ARCHITECT STUDIO</strong>
                    <span>Sector 128 / Noida Expressway, Noida, UP 201304, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="block text-charcoal font-medium">+91 98765 43210</span>
                    <span className="text-xs text-taupe">Direct Architectural Line</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="block text-charcoal font-medium">studio@arinteriors.in</span>
                    <span className="text-xs text-taupe">Inquiries & Tenders</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <span className="block text-charcoal">Monday — Saturday</span>
                    <span className="text-xs text-taupe">10:00 AM — 7:00 PM IST (By Appointment)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-taupe/20">
                <a
                  href="https://wa.me/919876543210?text=Hello%20AR%20Interiors,%20I%20would%20like%20to%20inquire%20about%20a%20new%20interior/architecture%20project"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 bg-white hover:bg-cream border border-taupe/30 text-charcoal text-xs tracking-architectural uppercase font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-ivory border border-taupe/20 text-xs text-charcoal/70 leading-relaxed">
              <strong className="block text-charcoal mb-1">Serving Noida & Delhi NCR:</strong>
              Specialized execution across Jaypee Greens, ATS Knightsbridge, Gulshan Dynasty, Sector 15A, Sector 44, Sector 150, Greater Noida, and South Delhi.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 bg-cream/70 border border-gold/40 text-center">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-charcoal">Inquiry Received</h3>
                <p className="text-sm text-charcoal/75 font-light mt-3 leading-relaxed max-w-md mx-auto">
                  {serverMessage}
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="secondary"
                  size="sm"
                  className="mt-6"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/70 p-8 sm:p-10 border border-taupe/20 shadow-subtle">
                <h3 className="text-2xl font-serif text-charcoal mb-2">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-taupe mb-6">
                  Please share initial details about your space. Fields marked with * are required.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Your name is required' })}
                      placeholder="e.g. Vikram Singhania"
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.name.message}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      placeholder="+91 98765 XXXXX"
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.phone.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                      })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      {...register('location', { required: 'Project location is required' })}
                      placeholder="e.g. Sector 128 Noida / Jaypee Greens"
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    />
                    {errors.location && (
                      <span className="text-[11px] text-red-600 mt-1 block">{errors.location.message}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Project Type *
                    </label>
                    <select
                      {...register('projectType')}
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option value="Residential Interior">Residential Interior</option>
                      <option value="Commercial Interior">Commercial Interior</option>
                      <option value="Architecture">Architecture</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Furniture">Furniture & Decor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Property Type
                    </label>
                    <select
                      {...register('propertyType')}
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option value="Apartment / Penthouse">Apartment / Penthouse</option>
                      <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Retail / Lounge">Retail / Lounge</option>
                      <option value="Raw Plot">Raw Plot / New Build</option>
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                      Approx. Budget
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option value="₹25 Lakhs – ₹50 Lakhs">₹25L – ₹50L</option>
                      <option value="₹50 Lakhs – ₹1 Crore">₹50L – ₹1 Cr</option>
                      <option value="₹1 Crore – ₹3 Crores">₹1 Cr – ₹3 Cr</option>
                      <option value="₹3 Crores+">₹3 Cr+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-medium mb-1.5">
                    Describe Your Vision or Requirements
                  </label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    placeholder="Tell us about the property size, key requirements, timeline, or specific aesthetic references..."
                    className="w-full px-4 py-3 bg-ivory/60 border border-taupe/30 text-charcoal text-sm focus:outline-none focus:border-charcoal transition-colors resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Submitting Inquiry...' : 'Submit Project Brief'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
