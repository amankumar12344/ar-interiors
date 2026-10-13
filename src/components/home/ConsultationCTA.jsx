import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../common/Container';
import Button from '../common/Button';
import { CONTACT_INFO } from '../../data/contactInfo';
import { contactService } from '../../services/contactService';
import {
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Building2,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function ConsultationCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      serviceType: 'Complete Home Interior (Turnkey)',
      propertyType: '3 BHK Apartment'
    }
  });

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        phone: data.phone,
        location: data.location,
        projectType: data.serviceType,
        propertyType: data.propertyType,
        message: data.message || 'Homepage Consultation Request'
      };

      await contactService.submitInquiry(payload);
      setSubmittedData(payload);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#EFE9DF] relative overflow-hidden scroll-mt-24">
      <Container>
        <div 
          className="rounded-sm shadow-modal relative overflow-hidden text-white border border-[#BF9C60]/40 p-6 sm:p-10 lg:p-12"
          style={{
            backgroundColor: '#161412',
            backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(191,156,96,0.18) 0%, rgba(22,20,18,0) 70%)'
          }}
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BF9C60]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DFBA73]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Studio Information & Credibility */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BF9C60]/20 border border-[#BF9C60]/40 rounded-full text-[11px] sm:text-xs text-[#DFBA73] uppercase tracking-architectural font-medium mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#BF9C60]" />
                  <span>HAVE A SPACE IN MIND? · NOIDA & NCR</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-serif text-white font-normal leading-[1.18] tracking-tight">
                  Let's design something <br />
                  <span className="italic text-[#DFBA73] font-light">remarkable together.</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-[#D5CDC2] font-light leading-relaxed">
                  Book a free on-site consultation visit with our principal interior architects. We deliver 100% customized luxury designs, transparent BOQ estimates, and turnkey craftsmanship across Noida & Delhi NCR.
                </p>

                {/* Trust Badges */}
                <div className="mt-6 space-y-2.5 pt-6 border-t border-white/10 text-xs text-[#E5DDD2]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBA73] shrink-0" />
                    <span>Free On-Site Measurement & Layout Consultation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#DFBA73] shrink-0" />
                    <span>10-Year Comprehensive Material & Finish Warranty</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#DFBA73] shrink-0" />
                    <span>250+ Luxury Homes Completed on Noida Expressway & NCR</span>
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm text-xs font-semibold text-white uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DFBA73]" />
                    <span>Call: {CONTACT_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={CONTACT_INFO.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-sm text-xs font-semibold text-emerald-300 uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Architect</span>
                  </a>
                </div>

                {/* Studio Location & Timing */}
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-[#9E9080] space-y-1.5 font-sans">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#BF9C60] shrink-0 mt-0.5" />
                    <span>Building No. B69, Sector 2 (Near Sec 15 Metro), Noida • 201301</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#BF9C60] shrink-0" />
                    <span>Monday - Saturday: 10:00 AM - 7:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Fillable Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#1A1815]/90 backdrop-blur-md border border-[#BF9C60]/50 rounded-sm p-6 sm:p-8 shadow-2xl relative">
                
                {submitted ? (
                  /* Success Confirmation Screen */
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-serif text-white font-normal">
                      Thank You, {submittedData?.name || 'Valued Client'}!
                    </h3>
                    <p className="text-sm text-[#D5CDC2] max-w-md mx-auto">
                      Your consultation request has been received. Our principal architect will review your project details and reach out to you within 24 hours.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={CONTACT_INFO.getWhatsappUrl(`Hi AR Interiors, I just submitted an inquiry for my ${submittedData?.propertyType || 'property'} in ${submittedData?.location || 'Noida'}. Please connect with me.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Follow-Up</span>
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setSubmittedData(null);
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white uppercase tracking-wider rounded-sm transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* The Inquiry Form */
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="border-b border-white/10 pb-3 mb-4">
                      <h3 className="text-xl sm:text-2xl font-serif text-white flex items-center gap-2 font-normal">
                        <span>Schedule Free Consultation Visit</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      </h3>
                      <p className="text-xs text-[#BF9C60] font-sans mt-0.5">
                        Fill in your details below. Fields marked with * are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Please enter your full name' })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-400 mt-1 block">{errors.name.message}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone', {
                            required: 'Please enter your phone number',
                            pattern: {
                              value: /^[0-9+\s-]{8,15}$/,
                              message: 'Please enter a valid phone number'
                            }
                          })}
                          placeholder="+91 98765 XXXXX"
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all"
                        />
                        {errors.phone && (
                          <span className="text-[10px] text-red-400 mt-1 block">{errors.phone.message}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Location */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                          Project Location *
                        </label>
                        <input
                          type="text"
                          {...register('location', { required: 'Please enter your project location' })}
                          placeholder="e.g. Sector 150 / Expressway, Noida"
                          className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all"
                        />
                        {errors.location && (
                          <span className="text-[10px] text-red-400 mt-1 block">{errors.location.message}</span>
                        )}
                      </div>

                      {/* Service Type */}
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                          Service Required *
                        </label>
                        <select
                          {...register('serviceType')}
                          className="w-full px-3.5 py-2.5 bg-[#1F1D1A] border border-white/20 rounded-sm text-white text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all cursor-pointer"
                        >
                          <option value="Complete Home Interior (Turnkey)">Complete Home Interior (Turnkey)</option>
                          <option value="Complete Home Construction">Complete Home Construction</option>
                          <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                          <option value="Luxury Villa Architecture & Interior">Luxury Villa Architecture & Interior</option>
                          <option value="Full Home Renovation">Full Home Renovation</option>
                          <option value="Commercial / Office Interior">Commercial / Office Interior</option>
                        </select>
                      </div>
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                        Property Configuration
                      </label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-3.5 py-2.5 bg-[#1F1D1A] border border-white/20 rounded-sm text-white text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all cursor-pointer"
                      >
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Apartment</option>
                        <option value="4 BHK / 5 BHK Luxury Penthouse">4 BHK / 5 BHK Luxury Penthouse</option>
                        <option value="Independent Villa / Bungalow / Kothi">Independent Villa / Bungalow / Kothi</option>
                        <option value="Builder Floor">Builder Floor</option>
                        <option value="Raw Plot / New Construction">Raw Plot / New Construction</option>
                        <option value="Commercial / Retail Studio">Commercial / Retail Studio</option>
                      </select>
                    </div>

                    {/* Message / Brief */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1">
                        Space Details / Specific Requirements (Optional)
                      </label>
                      <textarea
                        rows={2}
                        {...register('message')}
                        placeholder="e.g. 1850 sq.ft., possession next month, looking for modern luxury theme with modular kitchen..."
                        className="w-full px-3.5 py-2 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38728] text-charcoal font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_28px_rgba(212,175,55,0.6)] hover:brightness-110 active:scale-[0.99] transition-all duration-300 border border-[#ECC06C] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                          <span>SENDING YOUR REQUEST...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-charcoal group-hover:translate-x-0.5 transition-transform" />
                          <span>BOOK FREE CONSULTATION VISIT</span>
                          <span className="text-sm">👉</span>
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center text-[#9E9080] font-sans pt-1">
                      🔒 100% Privacy Guaranteed. Your details are never shared with third parties.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
