import { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ShieldCheck, Star, ArrowRight, MapPin, Phone, 
  HelpCircle, Award, Users, Heart, Building, Check, Clock, Info, CheckCircle, Search, ThumbsUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Navbar from './components/Navbar';
import AppointmentModal from './components/AppointmentModal';
import DrModal from './components/DrModal';
import SmileSlider from './components/SmileSlider';
import InvisalignViewer from './components/InvisalignViewer';
import ContactForm from './components/ContactForm';
import clinicLogo from './assets/images/clinic_logo_1780065900435.png';

// Advanced Modular Subpage Components
import MeetUsPages from './components/MeetUsPages';
import PatientPages from './components/PatientPages';
import TreatmentPages from './components/TreatmentPages';
import CosmeticPages from './components/CosmeticPages';
import DentalHealthPages from './components/DentalHealthPages';
import EmergenciesPage from './components/EmergenciesPage';
import ContactUsPage from './components/ContactUsPage';

import { doctors, services, testimonials, patientResources, officeHours } from './data';
import { Doctor } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingPreService, setBookingPreService] = useState<string>('');
  const [bookingPreDoctor, setBookingPreDoctor] = useState<string>('');
  const [selectedDoctorForModal, setSelectedDoctorForModal] = useState<Doctor | null>(null);

  // Trigger appointment modal with potential shortcut selections
  const triggerBooking = (serviceId: string = '', doctorId: string = '') => {
    setBookingPreService(serviceId);
    setBookingPreDoctor(doctorId);
    setIsBookingOpen(true);
  };

  const handleNavClickWrapper = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper categories lists to determine which modular file renders
  const isMeetUsPage = activeTab.startsWith('meet-');
  const isPatientPage = [
    'welcome', 'new-patients', 'patient-education', 'patient-registration', 
    'first-visit', 'exams-checkups', 'scheduling', 'financial-policy', 
    'insurance', 'infection-control', 'home-instructions'
  ].includes(activeTab);
  const isTreatmentPage = [
    'orthodontic', 'fillings', 'sealants', 'dentures', 'bridges', 'implants', 'crowns', 'extractions'
  ].includes(activeTab);
  const isCosmeticPage = [
    'bonding', 'veneers', 'whitening', 'invisalign'
  ].includes(activeTab);
  const isDentalHealthPage = [
    'oral-hygiene', 'prophylaxis', 'dictionary', 'periodontal'
  ].includes(activeTab);

  return (
    <div id="landing-root" className="min-h-screen bg-warm-white text-brand-navy flex flex-col font-sans selection:bg-brand-teal/30">
      
      {/* Sticky Top Header with Announcement & Action bars */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onRequestAppointment={() => triggerBooking()} 
        onSearchQuery={(query) => {
          // Direct users searching to treatments pages search hub or contact desk
          setActiveTab('contact');
        }}
      />

      {/* Floating Sticky Mobile Conversion Appointment CTA */}
      <div id="mobile-sticky-cta" className="fixed bottom-4 right-4 z-40 sm:hidden">
        <button
          onClick={() => triggerBooking()}
          className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-teal text-brand-navy font-bold shadow-2xl active:scale-95 transition-all text-xs cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-brand-navy animate-pulse" />
          <span>Book Appt</span>
        </button>
      </div>

      {/* Global Client Side Router / Section Container */}
      <main className="grow">
        <AnimatePresence mode="wait">
          
          {/* ==================== HOME TAB ==================== */}
          {activeTab === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="space-y-24"
            >
              
              {/* Cinematic Luxury Hero Banner */}
              <section id="banner-hero" className="relative bg-gradient-to-b from-brand-navy to-brand-navy/95 text-white overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=85&w=1920"
                    alt="Dental Center Luxury Client Lounge"
                    className="w-full h-full object-cover object-center scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating soft shapes */}
                <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-aqua/5 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6 text-left col-span-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 text-brand-aqua text-[11px] font-semibold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-brand-teal animate-pulse" />
                      <span>Elite Cosmetic & Family Practice</span>
                    </div>

                    <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                      Beautiful, Healthy <br className="hidden sm:inline" />
                      <span className="text-brand-aqua relative inline-block text-accent">
                        Smiles Start Here
                        <span className="absolute left-0 bottom-1.5 w-full h-1 bg-brand-teal/40 rounded" />
                      </span>
                    </h1>

                    <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xl leading-relaxed font-light">
                      Welcome to the Dental Center of Texas. Our modern Katy clinic balances cutting-edge biological dentistry with warm, five-star guest comforts to restore tooth symmetry and healthy facial alignment.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                      <button
                        onClick={() => triggerBooking()}
                        className="px-8 py-3.5 rounded-full bg-brand-teal text-brand-navy font-bold text-xs sm:text-sm shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/40 hover:-translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        Request Appointment Online
                      </button>
                      <button
                        onClick={() => handleNavClickWrapper('welcome')}
                        className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all text-center cursor-pointer"
                      >
                        Explore Our Philosophy
                      </button>
                    </div>

                    {/* Trust Indicators inside Hero view */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-[10px] xl:text-xs text-white/70 font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>Family & Cosmetic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>Advanced Tech</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>Friendly Experts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                        <span>Comfort First</span>
                      </div>
                    </div>
                  </div>

                  {/* Elegant Floating Abstract Promo Card */}
                  <div className="lg:col-span-5 hidden lg:block">
                    <div className="glass-effect rounded-3xl p-8 border border-white/20 text-brand-navy space-y-6 shadow-2xl relative">
                      <div className="absolute top-3 right-3 shrink-0 py-1 px-3 bg-brand-navy text-white text-[9px] font-bold rounded-full">
                        New Guest Promo
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-teal shadow-md">
                          <Building className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-brand-navy">Comfort First Dentistry</h4>
                          <span className="text-[11px] text-gray-400 font-mono">23922 Cinco Village Center</span>
                        </div>
                      </div>

                      <div className="p-4 bg-brand-teal/5 border border-brand-teal/10 rounded-2xl text-xs space-y-3">
                        <p className="font-medium text-gray-750">
                          "Dental care is not just mechanics; it’s about restoring trust, biologics, and self-esteem with state-of-the-art spa-like comforts."
                        </p>
                        <span className="block text-[11px] font-bold text-brand-navy">— Dr. Brenda Acosta, Lead Practitioner</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between text-gray-600 border-b border-gray-100 pb-1">
                          <span>Initial X-Rays + Cleaning</span>
                          <strong className="text-brand-navy">$99 Guest Special</strong>
                        </div>
                        <div className="flex items-center justify-between text-gray-600">
                          <span>Clinical Consultation</span>
                          <strong className="text-brand-navy">Always Complimentary</strong>
                        </div>
                      </div>

                      <button
                        onClick={() => triggerBooking('general-dentistry')}
                        className="w-full py-2.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-center transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer border border-transparent"
                      >
                        Claim Guest Special Promo
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trust Showcase with Live Stats & Counters */}
              <section id="trust-indicators" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  <div className="text-center md:text-left space-y-1 md:border-r border-gray-100 last:border-0 p-4">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">15,000+</div>
                    <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">Smiles Restored</div>
                    <p className="text-[11px] text-gray-400 leading-snug">Proudly looking after the teeth of West Houston since our inception.</p>
                  </div>
                  <div className="text-center md:text-left space-y-1 md:border-r border-gray-100 last:border-0 p-4">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">4 Expert</div>
                    <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">Board Dentists</div>
                    <p className="text-[11px] text-gray-400 leading-snug">Multi-specialty cooperation in cosmetic surgery, implants, and alignment.</p>
                  </div>
                  <div className="text-center md:text-left space-y-1 md:border-r border-gray-100 last:border-0 p-4">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">100%</div>
                    <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">Mercury-Free</div>
                    <p className="text-[11px] text-gray-400 leading-snug">We utilize only safe, biocompatible structure composites for teeth fillings.</p>
                  </div>
                  <div className="text-center md:text-left space-y-1 p-4">
                    <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy">4.9 Star</div>
                    <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">Patient Choice</div>
                    <p className="text-[11px] text-gray-400 leading-snug">Highest rated clinical cosmetic clinic in Cinco Ranch & Katy on Google Reviews.</p>
                  </div>
                </div>
              </section>

              {/* About the Practice Story Split-Layout */}
              <section id="about-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left content story */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-1.5 text-brand-teal text-xs font-bold uppercase tracking-widest">
                      <Award className="w-4 h-4" />
                      <span>About Dental Center of Texas</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight">
                      A Luxury Wellness Approach to Modern Dentistry
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-light">
                      At Dental Center of Texas, we replace cold clinical anxiety with premium spa comforts—including personalized nitrous oxide sedation, quiet warm blankets, complimentary refreshments, and overhead operator media entertainment.
                    </p>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                      Our physicians provide comprehensive, biocompatible services including routine prophylaxis teeth cleanings, teeth bonding, porcelain veneers, CBCT guided dental implants, and Invisalign orthodontics. Proudly serving families in <strong className="text-brand-navy font-semibold">Katy, Cinco Ranch, Brookshire, Fulshear, Firethorne, and Cross Creek Ranch</strong>.
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-xs pt-4">
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-teal flex items-center justify-center font-bold">✓</div>
                        <span className="block font-bold">Safe Sedation</span>
                        <span className="block text-[10px] text-gray-500 leading-none">Relax safely</span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-teal flex items-center justify-center font-bold">★</div>
                        <span className="block font-bold">iTero® Scans</span>
                        <span className="block text-[10px] text-gray-500 leading-none">3D digital design</span>
                      </div>
                      <div className="space-y-1">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-teal flex items-center justify-center font-bold">✦</div>
                        <span className="block font-bold">Cosmetic Mastery</span>
                        <span className="block text-[10px] text-gray-500 leading-none">Handcrafted designs</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleNavClickWrapper('welcome')}
                        className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold text-xs rounded-xl transition-all flex items-center gap-1 cursor-pointer"
                      >
                        Keep Reading Practice Story
                        <ArrowRight className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right side layered visual composition */}
                  <div className="relative">
                    <div className="absolute inset-10 bg-brand-teal/10 rounded-3xl -rotate-2" />
                    
                    <div className="relative grid grid-cols-12 gap-4">
                      <div className="col-span-8">
                        <img
                          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                          alt="Advanced clinical diagnostic space"
                          className="rounded-3xl shadow-xl w-full h-[320px] object-cover border-4 border-white"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="col-span-4 self-end">
                        <img
                          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=500"
                          alt="Patient consultation desk"
                          className="rounded-2xl shadow-lg w-full h-[180px] object-cover border-4 border-white transform translate-y-6 -translate-x-4"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Intersectional Promotional Banner */}
              <section id="promo-break" className="bg-brand-navy text-white py-16 px-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-between">
                  <div className="space-y-3 max-w-xl text-center md:text-left">
                    <span className="text-xs font-bold text-brand-aqua tracking-widest uppercase block">Esthetic Enhancement Special</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                      Ready to Transform Your Confidence with Cosmetic Porcelain?
                    </h3>
                    <p className="text-white/70 text-xs">
                      Join hundreds of guests in West Houston who have completely transformed their smiles using custom hand-made veneers under Dr. Acosta's guidance.
                    </p>
                  </div>
                  <div className="shrink-0 flex gap-3">
                    <button
                      onClick={() => triggerBooking('porcelain-veneers')}
                      className="px-6 py-3 bg-brand-teal text-brand-navy text-xs font-bold rounded-xl hover:shadow-lg transition-transform active:scale-95 cursor-pointer"
                    >
                      Reserve Free Cosmetic Exam
                    </button>
                    <button
                      onClick={() => handleNavClickWrapper('veneers')}
                      className="px-5 py-3 bg-white/5 border border-white/20 text-xs font-bold rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      View Veneers Result
                    </button>
                  </div>
                </div>
              </section>

              {/* Doctors Spotlight section */}
              <section id="doctors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
                <div className="text-center space-y-3">
                  <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Meet the Clinical Partners</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                    Elite Dental Specialists Cooperating For Your Family
                  </h3>
                  <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
                    Our board-certified dentists bring together expertise across cosmetic surgery, digital orthodontics, and international implantology boards.
                  </p>
                </div>

                {/* Grid of doctor cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {doctors.map((doc) => {
                    const routingId = doc.id === 'dr-acosta' ? 'meet-acosta' 
                                    : doc.id === 'dr-nguyen' ? 'meet-nguyen' 
                                    : doc.id === 'dr-sayani' ? 'meet-sayani' 
                                    : 'meet-suhail';
                    return (
                      <div 
                        key={doc.id}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div className="aspect-square relative overflow-hidden bg-slate-50">
                          <img
                            src={doc.imageUrl}
                            alt={doc.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 animate-fade-in placeholder-shimmer"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-80" />
                          <div className="absolute bottom-3 left-3 text-white">
                            <span className="block text-[10px] text-brand-aqua uppercase tracking-wider font-bold">Texas Accredited</span>
                            <span className="block text-sm font-bold font-display">{doc.name}</span>
                          </div>
                        </div>

                        <div className="p-4 space-y-3 text-xs grow flex flex-col justify-between">
                          <div className="space-y-1.5">
                            <span className="text-brand-teal font-semibold text-[11px] block">{doc.title}</span>
                            <p className="text-gray-500 text-[11px] leading-snug line-clamp-3 font-light">{doc.shortBio}</p>
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {doc.specialties.slice(0, 2).map((s, i) => (
                              <span key={i} className="px-2 py-0.5 rounded bg-zinc-50 border border-gray-100 text-[9px] text-gray-600 font-medium">
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                            <button
                              onClick={() => handleNavClickWrapper(routingId)}
                              className="text-xs font-bold text-brand-navy hover:text-brand-teal transition-colors text-left flex items-center gap-0.5 cursor-pointer"
                            >
                              <span>Read Bio details</span>
                              <span className="text-[10px]">▸</span>
                            </button>
                            <button
                              onClick={() => triggerBooking('general-dentistry', doc.id)}
                              className="py-1 px-2.5 bg-brand-navy/5 hover:bg-brand-navy/10 text-[10px] font-bold text-brand-navy rounded-lg cursor-pointer"
                            >
                              Book Slot
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Popular Treatments Showcase Grid */}
              <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div className="space-y-3">
                    <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Interactive Treatment Registry</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                      Comprehensive Modern Care Under One Roof
                    </h3>
                    <p className="text-xs text-gray-500 max-w-lg leading-relaxed font-light">
                      We coordinate premium biocompatible materials and advanced mapping files to resolve your family's oral health issues seamlessly.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavClickWrapper('welcome')}
                    className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold text-xs rounded-xl transition-all inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Analyze Our Care Options</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.slice(0, 6).map((srv) => {
                    // Route to dynamic subpage IDs
                    const lookupMap: Record<string, string> = {
                      'general-dentistry': 'welcome',
                      'cosmetic-dentistry': 'bonding',
                      'dental-implants': 'implants',
                      'teeth-whitening': 'whitening',
                      'porcelain-veneers': 'veneers',
                      'preventive-dentistry': 'prophylaxis'
                    };
                    const routingId = lookupMap[srv.id] || 'welcome';
                    return (
                      <div
                        key={srv.id}
                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 p-5 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="h-44 w-full rounded-2xl overflow-hidden relative bg-slate-50">
                            <img
                              src={srv.imageUrl}
                              alt={srv.title}
                              className="w-full h-full object-cover hover:scale-103 transition-transform duration-300 rounded-2xl"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-brand-navy text-[9px] font-bold rounded-lg text-white capitalize">
                              {srv.category} care
                            </div>
                          </div>

                          <h4 className="font-display font-bold text-base text-brand-navy pt-2">
                            {srv.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-normal line-clamp-3 font-light">
                            {srv.shortDesc}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                          <button
                            onClick={() => handleNavClickWrapper(routingId)}
                            className="text-xs font-bold text-brand-teal hover:text-brand-navy transition-all cursor-pointer"
                          >
                            Learn Care Details ▸
                          </button>
                          <button
                            onClick={() => triggerBooking(srv.id)}
                            className="text-[10px] font-bold text-brand-navy bg-brand-teal/15 hover:bg-brand-teal/30 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                          >
                            Book Slot
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Advanced Cosmetic Highlight Slider Section */}
              <section id="cosmetic-aesthetic" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-zinc-50 rounded-3xl py-16 border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 space-y-6">
                    <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Porcelain Teeth Restoration</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
                      Recreate Perfect Smiles Collaboratively
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                      We model lip configurations, alignment guidelines, and facial skin tones to draft perfect smile transformations. Drag the handle below to see high-end custom hand-made veneers in action.
                    </p>

                    <ul className="space-y-2 text-xs text-gray-600 font-light">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        <span><strong>Micro-Thin Fit:</strong> Placed smoothly with conservative reduction.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        <span><strong>Durable Porcelain:</strong> High stain-resistant durability.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        <span><strong>Quick Turnaround:</strong> Completed in just two custom appointments.</span>
                      </li>
                    </ul>

                    <div className="pt-2">
                      <button
                        onClick={() => handleNavClickWrapper('veneers')}
                        className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy text-xs font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Explore Veneer Transformations
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-12 xl:col-span-7 col-span-12">
                    <SmileSlider />
                  </div>
                </div>
              </section>

              {/* Dual-View: Invisalign Technology Showcase */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <InvisalignViewer />
              </section>

              {/* Onboarding Patient Milestone Steps */}
              <section id="new-guest-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Guest Hospitality</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                    What to Expect as a New Patient in Katy TX
                  </h3>
                  <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed font-light">
                    We welcome guests with simplified digital processes that make dental exams fast, comfortable, and completely transparently mapped.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {patientResources.firstVisit.steps.map((st, i) => (
                    <div 
                      key={i} 
                      className="bg-white rounded-3xl p-6 border border-gray-100 hover:border-brand-teal/30 hover:shadow-lg transition-all relative flex flex-col justify-between h-56"
                    >
                      <div className="absolute top-4 right-4 text-3xl font-mono font-bold text-brand-teal/20">
                        0{i+1}
                      </div>

                      <div className="space-y-2">
                        <span className="block px-2 py-0.5 bg-brand-navy/5 text-brand-navy font-bold rounded text-[9px] tracking-wide uppercase max-w-max">
                          Phase 0{i+1}
                        </span>
                        <h4 className="font-display font-semibold text-sm text-brand-navy pt-2 text-left uppercase">
                          {st.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-snug font-light text-left">
                          {st.desc}
                        </p>
                      </div>

                      <div className="text-[10px] text-brand-teal font-semibold flex items-center gap-1 pt-2">
                        <CheckCircle className="w-3.5 h-3.5" /> Care Focused
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => handleNavClickWrapper('new-patients')}
                    className="px-6 py-2.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold text-xs rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Inspect Onboarding Forms & Accepted Insurance Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </section>

              {/* Patient Testimonials */}
              <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-3">
                  <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Clinical Reviews</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                    Why Katy Families Trust Dental Center of Texas
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((test) => (
                    <div
                      key={test.id}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs flex flex-col justify-between space-y-4 hover:border-brand-teal/20 transition-all text-left"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(test.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-650 font-sans italic leading-relaxed font-light">
                          "{test.text}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                        <div>
                          <span className="block text-xs font-bold text-brand-navy font-display">{test.author}</span>
                          <span className="block text-[10px] text-gray-400">{test.role}</span>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2.5 py-1 rounded">
                          ★ Google Review ({test.date})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Immersive Photo Tour */}
              <section id="office-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div className="text-center space-y-3">
                  <span className="text-xs text-brand-teal uppercase tracking-widest font-extrabold block">Clinical Tour</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                    Step Into Our Spa-Like Katy Flagship Office
                  </h3>
                  <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed font-light">
                    Designed for visual serenity. Take a look at our sterilized hygiene workspaces and welcoming dental lounge suites.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=700', label: 'Welcoming Guest Lounge' },
                    { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700', label: 'Sterilized Operatory Unit' },
                    { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=700', label: 'Private Counseling Suite' },
                    { url: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=700', label: 'Advanced Diagnostics Area' }
                  ].map((img, i) => (
                    <div 
                      key={i} 
                      className="group relative h-64 rounded-2xl overflow-hidden border border-gray-100 shadow-xs cursor-crosshair"
                    >
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" />
                      <div className="absolute bottom-4 left-4 text-white z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-[9px] uppercase font-bold text-brand-aqua tracking-widest leading-none block">Flagship Venue</span>
                        <strong className="text-xs mt-1 block">{img.label}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conversion Optimized Appointment CTA Banner */}
              <section id="home-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <div className="bg-brand-navy rounded-[36px] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-brand-teal/20 shadow-2xl text-center">
                  <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-aqua/5 blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                    <span className="text-xs font-bold text-brand-aqua uppercase tracking-[0.2em] block text-center">Let's Get Started</span>
                    <h3 className="font-display text-2xl sm:text-5xl font-bold tracking-tight leading-tight text-center">
                      Ready for Your Best Smile?
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
                      We offer simple digital pre-registration, complimentary cosmetic analysis, and take most major dental insurance PPO plans.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-3">
                      <button
                        onClick={() => triggerBooking()}
                        className="px-8 py-4 rounded-xl bg-brand-teal text-brand-navy font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer font-sans"
                      >
                        Book Online Now
                      </button>
                      <a
                        href="tel:2813951919"
                        className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all text-center font-mono"
                      >
                        Call Office: (281) 395-1919
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== MEET US SUBPAGES ==================== */}
          {isMeetUsPage && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <MeetUsPages activeTab={activeTab} onRequestAppointment={triggerBooking} />
            </motion.div>
          )}

          {/* ==================== PATIENT RESOURCES SUBPAGES ==================== */}
          {isPatientPage && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <PatientPages activeTab={activeTab} onRequestAppointment={triggerBooking} />
            </motion.div>
          )}

          {/* ==================== TREATMENTS SUBPAGES ==================== */}
          {isTreatmentPage && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <TreatmentPages activeTab={activeTab} onRequestAppointment={triggerBooking} />
            </motion.div>
          )}

          {/* ==================== COSMETIC SUBPAGES ==================== */}
          {isCosmeticPage && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <CosmeticPages activeTab={activeTab} onRequestAppointment={triggerBooking} />
            </motion.div>
          )}

          {/* ==================== DENTAL HEALTH SUBPAGES ==================== */}
          {isDentalHealthPage && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <DentalHealthPages activeTab={activeTab} />
            </motion.div>
          )}

          {/* ==================== EMERGENCIES SUBPAGE ==================== */}
          {activeTab === 'emergencies' && (
            <motion.div
              key="emergencies-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <EmergenciesPage onRequestAppointment={triggerBooking} />
            </motion.div>
          )}

          {/* ==================== CONTACT US SUBPAGE ==================== */}
          {activeTab === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <ContactUsPage />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Luxurious Multi-column Footer Section */}
      <footer id="premium-footer" className="bg-brand-navy text-white pt-16 pb-10 border-t border-brand-teal/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Info column */}
          <div className="md:col-span-4 space-y-4 col-span-12 text-left">
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-xl cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleNavClickWrapper('home')}>
              <img 
                src={clinicLogo} 
                alt="Clinic Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-xs text-white/70 leading-relaxed font-sans max-w-sm">
              Providing premium smile restorations, Invisalign clear trays, CBCT dental implants, and comfortable family dentistry. Proudly serving Katy and West Houston subdivision networks with pride.
            </p>

            <div className="space-y-1 text-xs text-white/80">
              <span className="block font-semibold">Flagship Katy Location:</span>
              <span className="text-white/60">23922 Cinco Village Center Suite 100, Katy, TX 77494</span>
            </div>
          </div>

          {/* Navigation links column */}
          <div className="md:col-span-2 space-y-3 col-span-6 text-left">
            <h4 className="text-brand-aqua text-[11px] font-bold uppercase tracking-wider">Practice Access</h4>
            <ul className="space-y-2 text-xs text-white/60 font-sans">
              <li><button onClick={() => handleNavClickWrapper('home')} className="hover:text-white transition-colors cursor-pointer text-left">Home Hub</button></li>
              <li><button onClick={() => handleNavClickWrapper('welcome')} className="hover:text-white transition-colors cursor-pointer text-left">Welcome Guest</button></li>
              <li><button onClick={() => handleNavClickWrapper('meet-acosta')} className="hover:text-white transition-colors cursor-pointer text-left">Our Specialists</button></li>
              <li><button onClick={() => handleNavClickWrapper('new-patients')} className="hover:text-white transition-colors cursor-pointer text-left">Onboarding Special</button></li>
              <li><button onClick={() => handleNavClickWrapper('emergencies')} className="hover:text-white transition-colors cursor-pointer text-left text-red-400 font-semibold">Immediate Pain Relief</button></li>
              <li><button onClick={() => handleNavClickWrapper('contact')} className="hover:text-white transition-colors cursor-pointer text-left font-semibold">Contact Desk</button></li>
            </ul>
          </div>

          {/* Practice treatments column */}
          <div className="md:col-span-3 space-y-3 col-span-6 text-left">
            <h4 className="text-brand-aqua text-[11px] font-bold uppercase tracking-wider">Treatments Index</h4>
            <ul className="space-y-2 text-xs text-white/60 font-sans">
              <li><button onClick={() => handleNavClickWrapper('veneers')} className="hover:text-white transition-colors cursor-pointer text-left">Porcelain Veneers</button></li>
              <li><button onClick={() => handleNavClickWrapper('invisalign')} className="hover:text-white transition-colors cursor-pointer text-left">Invisalign® Clear Trays</button></li>
              <li><button onClick={() => handleNavClickWrapper('implants')} className="hover:text-white transition-colors cursor-pointer text-left font-medium">Dental Implants</button></li>
              <li><button onClick={() => handleNavClickWrapper('whitening')} className="hover:text-white transition-colors cursor-pointer text-left">UV Teeth Whitening</button></li>
              <li><button onClick={() => handleNavClickWrapper('fillings')} className="hover:text-white transition-colors cursor-pointer text-left">Mercury-Free Fillings</button></li>
              <li><button onClick={() => handleNavClickWrapper('prophylaxis')} className="hover:text-white transition-colors cursor-pointer text-left">Standard Teeth Cleaning</button></li>
            </ul>
          </div>

          {/* Newsletter / Contact column */}
          <div className="md:col-span-3 space-y-4 col-span-12 text-left">
            <h4 className="text-brand-aqua text-[11px] font-bold uppercase tracking-wider">Katy Reception Desk</h4>
            <p className="text-xs text-white/60 leading-normal font-sans">
              Any medical inquiries or scheduling issues? Contact our desk directly or write to us secure.
            </p>

            <div className="space-y-2.5 pt-1 text-xs font-sans">
              <div>
                <span className="block text-[10px] text-white/50 leading-none uppercase">Direct Desk Call:</span>
                <a href="tel:2813951919" className="text-brand-aqua font-bold text-sm font-mono hover:underline leading-relaxed">
                  (281) 395-1919
                </a>
              </div>
              <div>
                <span className="block text-[10px] text-white/50 leading-none uppercase">Email Secure:</span>
                <a href="mailto:dentalcenteroftexas@gmail.com" className="text-white/80 hover:text-brand-teal transition-colors break-all leading-normal">
                  dentalcenteroftexas@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright metadata segment */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/50 gap-4 font-sans">
          <p>© 2026 Dental Center of Texas. All corporate content, family service descriptions, and doctor bios fully preserved.</p>
          <div className="flex gap-4 font-semibold">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); triggerBooking(); }} className="hover:text-brand-aqua">HIPAA Privacy Protocol</a>
            <span>|</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); triggerBooking(); }} className="hover:text-brand-aqua">Patient Liability Terms</a>
          </div>
        </div>
      </footer>

      {/* Appointment Booking modal overlay */}
      <AppointmentModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedService={bookingPreService}
        preSelectedDoctor={bookingPreDoctor}
      />

      {/* Detailed doctor bio overlay modal */}
      <DrModal
        doctor={selectedDoctorForModal}
        onClose={() => setSelectedDoctorForModal(null)}
        onBookDoctor={(docId) => {
          setSelectedDoctorForModal(null);
          triggerBooking('general-dentistry', docId);
        }}
      />

    </div>
  );
}
