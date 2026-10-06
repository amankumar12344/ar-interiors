import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { contactService } from '../services/contactService';
import { MapPin, Phone, Mail, Clock, CheckCircle2, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../data/contactInfo';

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
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="block text-charcoal font-medium hover:text-gold transition-colors">{CONTACT_INFO.phoneDisplay}</a>
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
                  href={CONTACT_INFO.getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-sm text-xs tracking-architectural uppercase font-semibold transition-all rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Consultation</span>
                </a>

                {/* Social Profiles */}
                <div className="mt-6 pt-5 border-t border-taupe/20">
                  <span className="block text-[11px] uppercase tracking-architectural text-taupe font-semibold mb-3">
                    Connect On Social Media
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={CONTACT_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-cream border border-taupe/30 text-charcoal text-xs rounded-sm transition-colors"
                      title="Follow on Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 text-gold" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={CONTACT_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-cream border border-taupe/30 text-charcoal text-xs rounded-sm transition-colors"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-gold" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={CONTACT_INFO.socials.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-cream border border-taupe/30 text-charcoal text-xs rounded-sm transition-colors"
                      title="Explore Pinterest"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-gold" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                      <span>Pinterest</span>
                    </a>
                  </div>
                </div>
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
