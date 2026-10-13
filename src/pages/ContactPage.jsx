import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { CONTACT_INFO } from '../data/contactInfo';
import { contactService } from '../services/contactService';
import { cn } from '../utils/cn';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  Zap,
  Clock3,
  CheckCircle2,
  Send,
  Building2,
  ShieldCheck,
  Award,
  CalendarDays,
  Instagram,
  Linkedin,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [serverMessage, setServerMessage] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate');
  const [targetDate, setTargetDate] = useState('');

  const todayDateString = new Date().toISOString().split('T')[0];

  const timelineOptions = [
    {
      id: 'immediate',
      label: 'Immediate',
      subtext: 'Within 7 Days',
      badge: 'High Priority',
      badgeColor: 'bg-amber-500/20 text-[#DFBA73] border-[#BF9C60]/50',
      icon: Zap
    },
    {
      id: '15-days',
      label: 'Within 15 Days',
      subtext: 'Upcoming Handover',
      badge: null,
      icon: Clock3
    },
    {
      id: '1-month',
      label: 'Within 1 Month',
      subtext: 'Next 30 Days',
      badge: null,
      icon: Calendar
    },
    {
      id: '1-3-months',
      label: '1 – 3 Months',
      subtext: 'Under Construction',
      badge: null,
      icon: Clock
    }
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      projectType: 'Complete Home Interior (Turnkey)',
      propertyType: '3 BHK Apartment',
      budget: '₹5 Lakhs – ₹10 Lakhs',
      timeline: 'Immediate'
    }
  });

  const handleTimelineSelect = (label) => {
    setSelectedTimeline(label);
    setValue('timeline', label);
  };

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email || 'Not provided',
        location: data.location,
        projectType: data.projectType,
        propertyType: data.propertyType,
        budget: data.budget,
        timeline: selectedTimeline,
        targetDate: targetDate || 'Flexible / As per architect visit',
        message: data.message || 'Direct Consultation Inquiry'
      };

      const response = await contactService.submitInquiry(payload);
      setSubmitted(true);
      setSubmittedData(payload);
      setServerMessage(response.message);
      reset();
      setSelectedTimeline('Immediate');
      setTargetDate('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="pt-28 sm:pt-32 pb-16 bg-[#F3EFE7]">
      <Container>
        {/* Header */}
        <div className="pb-10 sm:pb-14 border-b border-taupe/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-gold-dark mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>COMMISSION A PROJECT · NOIDA & DELHI NCR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-charcoal font-normal leading-[1.12] tracking-tight">
              Begin Your Architectural Journey
            </h1>

            <p className="mt-4 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
              Book a complimentary on-site measurement & design consultation with our principal architects. We execute 100% customized turnkey interiors and architectural construction with 10-year warranty.
            </p>
          </div>
        </div>

        {/* Contact Grid with Luxury Dark Theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 sm:py-14">
          
          {/* Studio Details Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="p-6 sm:p-8 rounded-sm shadow-modal border border-[#BF9C60]/40 text-white relative overflow-hidden"
              style={{
                backgroundColor: '#161412',
                backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(191,156,96,0.18) 0%, rgba(22,20,18,0) 70%)'
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <h3 className="text-xl font-serif text-white font-medium">
                  Studio Headquarters
                </h3>
              </div>

              <div className="space-y-5 text-sm text-[#D5CDC2]">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#DFBA73] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white font-medium">AR INTERIORS & ARCHITECT STUDIO</strong>
                    <span className="text-xs sm:text-sm text-[#D5CDC2] leading-relaxed block mt-0.5">{CONTACT_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <div>
                    <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="block text-white font-semibold hover:text-[#DFBA73] transition-colors">
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#9E9080]">Direct Architectural Line</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="block text-white font-medium hover:text-[#DFBA73] transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                    <span className="text-xs text-[#9E9080]">Inquiries & Quotations</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-[#DFBA73] shrink-0" />
                  <div>
                    <span className="block text-white">Monday — Saturday</span>
                    <span className="text-xs text-[#9E9080]">{CONTACT_INFO.hours} (By Appointment)</span>
                  </div>
                </div>
              </div>

              {/* Trust Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5 text-xs text-[#E5DDD2]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#DFBA73] shrink-0" />
                  <span>Free On-Site Measurement & Consultation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#DFBA73] shrink-0" />
                  <span>10-Year Comprehensive Warranty on Modular Woodwork</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#DFBA73] shrink-0" />
                  <span>250+ Projects Delivered Across Delhi NCR</span>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={CONTACT_INFO.getWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md text-xs tracking-architectural uppercase font-bold transition-all rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Direct WhatsApp Consultation</span>
                </a>

                {/* Social Profiles */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="block text-[11px] uppercase tracking-architectural text-[#BF9C60] font-semibold mb-3">
                    Connect On Social Media
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={CONTACT_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs rounded-sm transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#DFBA73]" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href={CONTACT_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs rounded-sm transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-[#DFBA73]" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={CONTACT_INFO.socials.pinterest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs rounded-sm transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#DFBA73]" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.546.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                      </svg>
                      <span>Pinterest</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving Locations */}
            <div className="p-6 bg-white/60 border border-taupe/20 text-xs text-charcoal/80 rounded-sm leading-relaxed">
              <strong className="block text-charcoal font-semibold mb-1">Serving Noida & Delhi NCR:</strong>
              Specialized execution across Jaypee Greens, ATS Knightsbridge, Gulshan Dynasty, Sector 15A, Sector 44, Sector 128, Sector 150, Greater Noida, and South Delhi.
            </div>
          </div>

          {/* Form Right Column - Luxury Dark Container matching Homepage */}
          <div className="lg:col-span-7">
            <div className="bg-[#1A1815] text-white border border-[#BF9C60]/50 rounded-sm p-6 sm:p-10 shadow-modal relative">
              
              {submitted ? (
                /* Success Confirmation Screen */
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-serif text-white font-normal">
                    Thank You, {submittedData?.name || 'Valued Client'}!
                  </h3>
                  <p className="text-sm text-[#D5CDC2] max-w-md mx-auto">
                    Your inquiry for <strong>{submittedData?.propertyType}</strong> ({submittedData?.budget}) has been received. Our senior architect will review your brief and connect with you within 24 hours.
                  </p>
                  {submittedData?.targetDate && submittedData?.targetDate !== 'Flexible / As per architect visit' && (
                    <p className="text-xs text-[#DFBA73] bg-[#BF9C60]/15 py-1.5 px-3 rounded-xs inline-block">
                      📅 Preferred Visit / Possession Date: {submittedData.targetDate} ({submittedData.timeline})
                    </p>
                  )}
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
                      className="w-full sm:w-auto px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* The Inquiry Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="border-b border-white/10 pb-4 mb-4">
                    <h3 className="text-2xl font-serif text-white flex items-center gap-2.5 font-normal">
                      <span>Project Inquiry Form</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    </h3>
                    <p className="text-xs text-[#BF9C60] font-sans mt-1">
                      Please share initial details about your space. Fields marked with * are required.
                    </p>
                  </div>

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: 'Your name is required' })}
                        placeholder="e.g. Vikram Singhania"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.name.message}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', {
                          required: 'Phone number is required',
                          pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Please enter a valid phone number' }
                        })}
                        placeholder="+91 98765 XXXXX"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email and Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        {...register('location', { required: 'Project location is required' })}
                        placeholder="e.g. Sector 128 / Sector 150, Noida"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors"
                      />
                      {errors.location && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.location.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Project Type, Property Type, and Budget (Starting from 5L) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Project Type *
                      </label>
                      <select
                        {...register('projectType')}
                        className="w-full px-4 py-3 bg-[#1F1D1A] border border-white/20 rounded-sm text-white text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors cursor-pointer"
                      >
                        <option value="Complete Home Interior (Turnkey)">Complete Home Interior</option>
                        <option value="Complete Home Construction">Home Construction</option>
                        <option value="Modular Kitchen & Wardrobes">Modular Kitchen</option>
                        <option value="Luxury Villa Architecture">Villa Architecture</option>
                        <option value="Renovation & Remodeling">Renovation</option>
                        <option value="Commercial Interior">Commercial Interior</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                        Property Type
                      </label>
                      <select
                        {...register('propertyType')}
                        className="w-full px-4 py-3 bg-[#1F1D1A] border border-white/20 rounded-sm text-white text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors cursor-pointer"
                      >
                        <option value="Apartment / Penthouse">Apartment / Penthouse</option>
                        <option value="Independent Villa / Bungalow">Villa / Bungalow</option>
                        <option value="Builder Floor">Builder Floor</option>
                        <option value="Raw Plot">Raw Plot / New Build</option>
                        <option value="Commercial / Office">Corporate Office</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#DFBA73] font-medium mb-1.5 flex items-center justify-between">
                        <span>Approx. Budget</span>
                        <span className="text-[10px] text-[#BF9C60]">From 5L</span>
                      </label>
                      <select
                        {...register('budget')}
                        className="w-full px-4 py-3 bg-[#1F1D1A] border border-[#BF9C60]/60 rounded-sm text-white text-sm focus:outline-none focus:border-[#DFBA73] focus:ring-1 focus:ring-[#DFBA73] transition-colors cursor-pointer font-medium"
                      >
                        <option value="₹5 Lakhs – ₹10 Lakhs">₹5L – ₹10L (Affordable)</option>
                        <option value="₹10 Lakhs – ₹25 Lakhs">₹10L – ₹25L (Standard)</option>
                        <option value="₹25 Lakhs – ₹50 Lakhs">₹25L – ₹50L (High-End)</option>
                        <option value="₹50 Lakhs – ₹1 Crore">₹50L – ₹1 Cr (Ultra)</option>
                        <option value="₹1 Crore – ₹3 Crores">₹1 Cr – ₹3 Cr (Bespoke)</option>
                        <option value="₹3 Crores+">₹3 Cr+ (Palatial)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Timeline Pills */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium">
                        When Would You Like To Start? (Timeline) *
                      </label>
                      <span className="text-[10px] text-[#BF9C60] font-sans">
                        Select timeframe or pick exact date below
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {timelineOptions.map((opt) => {
                        const isSelected = selectedTimeline === opt.label;
                        const Icon = opt.icon;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => handleTimelineSelect(opt.label)}
                            className={cn(
                              'relative text-left p-3 border transition-all duration-200 rounded-sm flex flex-col justify-between cursor-pointer',
                              isSelected
                                ? 'bg-[#BF9C60]/20 border-[#BF9C60] ring-1 ring-[#BF9C60]'
                                : 'bg-white/5 border-white/15 hover:border-white/30'
                            )}
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <Icon className={cn('w-4 h-4', isSelected ? 'text-[#DFBA73]' : 'text-white/60')} />
                              <span className={cn('w-2 h-2 rounded-full', isSelected ? 'bg-[#DFBA73]' : 'bg-white/20')} />
                            </div>
                            <span className={cn('text-sm font-serif leading-tight', isSelected ? 'text-white font-semibold' : 'text-white/80')}>
                              {opt.label}
                            </span>
                            <span className="text-[10px] text-white/50 mt-0.5">
                              {opt.subtext}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" {...register('timeline')} value={selectedTimeline} />

                    {/* CALENDAR FEATURE: Exact Date Selection */}
                    <div className="mt-3.5 p-3.5 bg-white/5 border border-[#BF9C60]/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 text-xs text-white">
                        <div className="w-7 h-7 rounded-full bg-[#BF9C60]/20 flex items-center justify-center shrink-0">
                          <CalendarDays className="w-3.5 h-3.5 text-[#DFBA73]" />
                        </div>
                        <div>
                          <span className="font-medium block leading-tight">
                            Select Specific Possession or Site Visit Date (Optional)
                          </span>
                          <span className="text-[10px] text-[#BF9C60] font-light">
                            Pick an exact date from the calendar for planned consultation
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <input
                          type="date"
                          min={todayDateString}
                          value={targetDate}
                          onChange={(e) => setTargetDate(e.target.value)}
                          className="px-3 py-1.5 bg-[#1F1D1A] border border-[#BF9C60]/50 text-white text-xs rounded-sm focus:outline-none focus:border-[#DFBA73] font-sans cursor-pointer"
                        />
                        {targetDate && (
                          <button
                            type="button"
                            onClick={() => setTargetDate('')}
                            className="text-[10px] text-red-400 hover:text-red-300 px-1 py-1 cursor-pointer"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D5CDC2] font-medium mb-1.5">
                      Describe Your Vision or Space Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      {...register('message')}
                      placeholder="Tell us about the property size (e.g. 3BHK, 1800 sq.ft., 5000 sq ft villa), key requirements, or specific aesthetic references..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#BF9C60] focus:ring-1 focus:ring-[#BF9C60] transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-sm bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38728] text-charcoal font-bold text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_28px_rgba(212,175,55,0.6)] hover:brightness-110 active:scale-[0.99] transition-all duration-300 border border-[#ECC06C] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group mt-3"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                        <span>SENDING YOUR INQUIRY...</span>
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
                    🔒 100% Confidential. Your details are safe with our executive design partners.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
