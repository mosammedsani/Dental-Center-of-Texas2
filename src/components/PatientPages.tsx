import { useState } from 'react';
import { 
  Heart, Shield, Download, FileText, Check, AlertCircle, FileSpreadsheet, Hourglass, 
  HelpCircle, Sparkles, Phone, Award, Clock, DollarSign, Stethoscope, Compass, Plus, Minus
} from 'lucide-react';
import { patientResources, officeHours } from '../data';

interface PatientPagesProps {
  activeTab: string;
  onRequestAppointment: (serviceId?: string, doctorId?: string) => void;
}

export default function PatientPages({ activeTab, onRequestAppointment }: PatientPagesProps) {
  const [formDownloaded, setFormDownloaded] = useState<Record<string, boolean>>({});

  const simulateDownload = (formName: string) => {
    setFormDownloaded(prev => ({ ...prev, [formName]: true }));
    // Simulate interactive PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.click();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12">
      
      {/* ================= WELCOME ================= */}
      {activeTab === 'welcome' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Our Family Hospitality</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Welcome to Dental Center of Texas</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm font-light leading-relaxed">
              We look forward to partnering with your family to secure lifetimes of sparkling smile cosmetics, robust biological structure, and peaceful clinical trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Your Private Dental Retreat</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                Our clinic is fully custom designed around a relaxation wellness model. We replace traditional dental anxiety with spacious, high-end guest lounge suites, complimentary water/coffees, soft heated neck blankets, warm scented towels, and multi-channel ceiling-mounted media monitors in each operatory suite.
              </p>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-normal">
                Dr. Brenda Acosta and our entire specialist team coordinates a multidisciplinary approach—combining advanced cosmetic design, biological dental implants, and comfortable Invisalign aligners.
              </p>
              
              <div className="bg-brand-teal/5 border border-brand-teal/15 p-5 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-brand-navy block">★ Guest Guarantee</span>
                <p className="text-[11px] text-gray-500 leading-normal">
                  "No judgment, no pushy clinical sales pitches, and no unexpected dental invoices. Just honest, modern biological healthcare in West Houston."
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Lounge" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= NEW PATIENTS ================= */}
      {activeTab === 'new-patients' && (
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">New Guest Experience</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Become Part of the Family</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm font-light">
              We believe quality dental care should be simple, welcoming, and tailored around your personal busy schedules here in Katy, Texas.
            </p>
          </div>

          {/* Special Promotional Promo */}
          <div className="bg-brand-navy rounded-[2.5rem] p-8 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 bg-brand-teal/20 text-brand-aqua text-[9px] font-bold rounded-full uppercase tracking-widest inline-block border border-brand-teal/30">
                New Patient Introduction
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                $99 Complete Cleaning, Exam & Digital 3D Dental Mapping
              </h2>
              <p className="text-xs text-white/75 leading-relaxed font-light">
                Secure your first dental check-up with zero stress. Includes deep precision cleaning, full digital X-ray screening, 3D intraoral camera mapping, and a thorough cosmetic consultation with our lead doctors.
              </p>
              <p className="text-[10px] text-white/50">
                *Valid for new cash-paying guests without existing dental insurance coverage. Mention this website offer during intake.
              </p>
            </div>
            <div className="lg:col-span-4 justify-self-stretch text-center">
              <div className="bg-white/10 border border-white/25 rounded-2xl p-6 space-y-3">
                <span className="block text-[10px] uppercase tracking-wider font-extrabold text-brand-aqua">Instant Booking</span>
                <button
                  onClick={() => onRequestAppointment('general-dentistry')}
                  className="w-full py-2.5 bg-brand-teal hover:bg-white text-brand-navy font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Book $99 Intro Special
                </button>
                <span className="block text-[9px] text-white/65">Always complimentary initial smile scans.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 bg-white border border-gray-100 rounded-2xl space-y-3 shadow-xs">
              <DollarSign className="w-8 h-8 text-brand-teal" />
              <h3 className="font-display font-bold text-sm text-brand-navy">Transparent Estimates</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                No surprises here. We provide transparent billing breakdowns showing exactly what insurance coordinates and your exact copay options.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl space-y-3 shadow-xs">
              <Compass className="w-8 h-8 text-brand-teal" />
              <h3 className="font-display font-bold text-sm text-brand-navy">Simple Intake Forms</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Fill out intake documentation smoothly on your mobile or online ahead of arrivals. Saves 15+ minutes in our clinic lobby lounge.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-2xl space-y-3 shadow-xs">
              <Stethoscope className="w-8 h-8 text-brand-teal" />
              <h3 className="font-display font-bold text-sm text-brand-navy">Comprehensive Care</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                We design dental maps that cover cosmetic restoration, hygiene schedules, orthodontic corrections, and urgent pain relief.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= PATIENT EDUCATION ================= */}
      {activeTab === 'patient-education' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Educational Resources</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Learn About Your Oral Health</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-xs">
              Empowering our patients with deep knowledge regarding tooth biology, preventive mechanics, and cosmetic porcelain maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">01. Enamel and Plaque Chemistry</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Dental enamel is the hardest biological structure. When food starches and bacteria align, they generate microscopic lactic acids that scour trace minerals out of your enamel matrix, initiating cavities. Fluoride and proper pH balance help restabilize these vital minerals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">02. Periodontal Bone Structure</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Gums hold your teeth in anchor. Tartar scale that solidifies underneath the gum line triggers persistent immune swelling (gingivitis). If left unchecked, this infection migrates deeper, sacrificing alveolar bone support and loosening tooth anchors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">03. The Mechanics of Crowns</h3>
              <p className="text-xs text-gray-550 leading-relaxed font-light">
                When a tooth breaks or undergoes a root canal, the physical structure weakens. A customized porcelain/zirconia crown acts as a high-strength physical jacket that spreads chew forces evenly, preventing fractures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">04. Understanding Implants</h3>
              <p className="text-xs text-gray-550 leading-relaxed font-light">
                A missing tooth creates empty space where adjacent teeth will look to migrate. Over time, physical bone height recedes due to lack of chewing compression. Titanium implant posts replace the roots, stimulating cellular bone integration.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= PATIENT REGISTRATION ================= */}
      {activeTab === 'patient-registration' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Secure Intake Forms</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Onboarding & Digital Registration</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-xs sm:text-sm font-light">
              Accelerate your onboarding checking-in. Download, print, or virtually review HIPAA privacy parameters and financial agreement documents below.
            </p>
          </div>

          <div className="bg-zinc-50 border border-gray-100 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <FileText className="w-6 h-6 text-brand-teal" />
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy">HIPAA Compliant Document Registry</h3>
                <p className="text-[10px] text-gray-400">Secure PDF downloads for patient onboarding</p>
              </div>
            </div>

            <div className="space-y-4">
              {patientResources.onlineForms.links.map((form, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-gray-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <span className="block text-xs font-bold text-brand-navy font-display">{form.name}</span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{form.duration} • Electronic PDF</span>
                  </div>
                  <button
                    onClick={() => simulateDownload(form.name)}
                    className="px-4 py-2 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy text-[11px] font-bold rounded-lg transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                  >
                    {formDownloaded[form.name] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Downloaded</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Form</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 text-[10px] text-gray-500 bg-amber-50 rounded-xl p-4 border border-amber-100">
              <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-normal">
                <strong>HIPAA Core Directive:</strong> The Dental Center of Texas utilizes military-grade 256-bit SSL encryption to protect all electronic personal medical responses. Any details submitted online remain completely private and confidential.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= FIRST VISIT ================= */}
      {activeTab === 'first-visit' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Patient Exploration Roadmap</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Your Initial Discovery Session</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs font-light">
              We dedicate a complete, uninterrupted hour of medical focus to diagnose, consult, and build a lasting health roadmap during your very first visit.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pt-4">
            {/* Connection line */}
            <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-brand-teal/20" />

            <div className="space-y-8">
              {patientResources.firstVisit.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-brand-navy text-brand-teal font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow-md">
                    0{idx+1}
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-2 grow">
                    <h3 className="font-display font-bold text-sm text-brand-navy">{step.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= DENTAL EXAMS ================= */}
      {activeTab === 'exams-checkups' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Clinical Oversight</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Exams and Check-Ups</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-xs font-light">
              Routine check-ups twice a year are pivotal to maintaining decay-free structures and securing tissues against severe dental disease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-5">
              <h2 className="font-display font-bold text-lg text-brand-navy">What Happens During An Exam?</h2>
              <ul className="space-y-3.5 text-xs text-gray-600">
                <li className="flex gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                  <span><strong>Visual Enamel Audit:</strong> We scan every tooth facet using clinical high-magnification lenses to intercept micro cracks or surface decay.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                  <span><strong>Periodontal Pocket Depth Map:</strong> Charting and monitoring bone structure support around individual teeth anchors.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                  <span><strong>Oral Pathology Scan:</strong> Detailed physical screening of the cheeks, tongue, palate, and throat to evaluate tissue health.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-1.5 shrink-0" />
                  <span><strong>Digital X-Ray Assessment:</strong> Uncovering deep interstitial decay, root infections, bone degradation, or wisdom teeth impact.</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" 
                alt="Dental exam" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= SCHEDULING ================= */}
      {activeTab === 'scheduling' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Our Availability</span>
            <h1 className="font-display text-3xl sm:text-4xl  font-extrabold text-brand-navy">Appointment Scheduling</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-xs font-light">
              We coordinate precise schedules so your clinical wait times remain at absolute zero. Simple guidelines to ensure seamless bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            {/* Hours Grid */}
            <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-sm text-brand-navy flex items-center gap-1.5 border-b border-gray-150 pb-2">
                <Clock className="w-4 h-4 text-brand-teal" />
                Operating Standard Hours
              </h3>
              <div className="space-y-2">
                {officeHours.map((oh, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-gray-650 border-b border-gray-50 pb-1.5">
                    <span className="font-medium">{oh.day}</span>
                    <span className="font-mono text-gray-500">{oh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheduling Policies */}
            <div className="md:col-span-7 space-y-5 text-xs text-gray-650">
              <h2 className="font-display font-bold text-base text-brand-navy">Booking & Cancellation Directives</h2>
              <div className="space-y-4">
                <div className="p-4 bg-brand-teal/5 rounded-2xl border border-brand-teal/10">
                  <h4 className="font-bold text-brand-navy">48-Hour Reschedule Courtesy</h4>
                  <p className="text-gray-500 mt-1 leading-normal">
                    If you must adjust, cancel, or move your hygiene/cosmetic slot, we kindly request a minimum of 48-hours prior notification so our staff may pass this valuable chair availability to waiting patients.
                  </p>
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy">Late Arrivals</h4>
                  <p className="text-gray-500 mt-1 leading-normal">
                    In order to respect all scheduled patients, clinical sessions must terminate exactly on time. Delayed arrivals exceeding 15 minutes may necessitate rescheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= FINANCIAL POLICY ================= */}
      {activeTab === 'financial-policy' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Clear Transparency</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Financial Policy</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs font-light">
              Premium dentistry demands professional investing, but the financing details should remain dynamic and transparent to fit your budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            
            {/* Split 1 */}
            <div className="md:col-span-6 space-y-5">
              <h2 className="font-display font-bold text-base text-brand-navy">Our Financial Commitment</h2>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                We present written clinical cost structures upfront that outline all expected procedure items, insurance estimates, and copays before any care is initiated. Payment is expected at the time clinical care is rendered.
              </p>
              <div className="space-y-2.5 text-xs text-gray-650 font-medium">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Cash, Checks, Visa, MasterCard, Discover, AMEX</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> FSAs & HSAs (Flex Spending / Health Savings Accounts)</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> 15% Pre-payment Discount for cash-paying cosmetic guests</div>
              </div>
            </div>

            {/* Split 2: Financing partners */}
            <div className="md:col-span-6 bg-zinc-50 p-6 sm:p-8 rounded-[2rem] border border-gray-150 space-y-4">
              <h3 className="font-display font-bold text-sm text-brand-navy border-b border-gray-200 pb-2">
                Dynamic Care Installment Partners
              </h3>
              <div className="space-y-4">
                {patientResources.insuranceInfo.financingSolutions.map((sol, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 text-xs">
                    <span className="block font-bold text-brand-navy">{sol.name}</span>
                    <p className="text-gray-400 mt-0.5 leading-relaxed text-[10px]">{sol.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ================= INSURANCE ================= */}
      {activeTab === 'insurance' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Filing Assistance</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Insurance Coordination</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs font-light">
              We coordinates, files, and handles claims with major dental insurance PPO providers to maximize your annual therapeutic benefits.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-brand-teal font-bold uppercase text-[10px] tracking-widest block">In-Network PPO Hub</span>
              <h3 className="font-display font-bold text-base text-brand-navy">Accepted National Networks</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {patientResources.insuranceInfo.acceptedPlans.map((plan, idx) => (
                <div key={idx} className="bg-slate-50 border border-gray-100 p-3 rounded-xl text-center text-xs font-semibold text-brand-navy font-display truncate">
                  {plan.replace(' Dental', '').replace(' PPO', '')}
                </div>
              ))}
            </div>

            <div className="bg-brand-navy/5 p-4 rounded-2xl border border-gray-100 text-[11px] text-gray-500 leading-relaxed">
              <p>
                <strong>Pro Dental Billing Notice:</strong> While we file your claims, the ultimate balance responsibility remains with the patient. Insurance contracts represent private parameters between you and your provider. Our finance desk handles full validation checks beforehand.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= INFECTION CONTROL ================= */}
      {activeTab === 'infection-control' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Sterilzation Guarantee</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Infection Control</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs font-light">
              We exceed required clinical sterile benchmarks, preserving pristine barrier safety margins for our guests and doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-5 text-xs text-gray-650 leading-relaxed">
              <h2 className="font-display font-bold text-base text-brand-navy">Our Rigid Biological Barrier Guidelines</h2>
              <p>
                Our Katy operatory suites undergo massive biological sanitization runs as directed by the American Dental Association (ADA), the Occupational Safety and Health Administration (OSHA), and the Centers for Disease Control (CDC).
              </p>
              
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Dry-heat chemical autoclave sterilization of all hand tools</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> EPA-certified biological chemical spray sanitizing of chairs and surfaces</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> HEPA dual air-cleaning filters sweeping continuous room atmospheres</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Single-use barrier covers replaced after every guest consultation</li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" 
                alt="Clinic sterile area" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= HOME INSTRUCTIONS ================= */}
      {activeTab === 'home-instructions' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Aftercare Support</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Post-Treatment Care Guides</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs font-light">
              Recover comfortably at home. Detailed clinical directions to support healing and maintain your restorations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">After Composite Fillings</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Fillings solidify instantly under laser curing light. However, avoid extremely hot or frozen liquids until local numbing anesthetics have worn off completely to prevent biting your cheeks or tongue. Over-the-counter ibuprofen manages minor joint sensitivity.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">After Porcelain Veneers</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                While temporary veneers are placed, avoid biting directly into hard, crunchy meats or foods. Brush and floss gently without popping cords. Regular flossing can proceed normally once permanent high-strength porcelain veneers are bonded.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">After Root Canal Therapy</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Avoid chewing hard foods on the treated side of your mouth until your final strengthening crown is fabricated and permanently cemented. Your root tissues will heal over 4-6 days; minor touch tenderness is expected.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-navy">After Tooth Extractions</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Keep chewing light physical pressure on the gauze pad for 30-45 minutes following surgery. Avoid drinking with straws, hard spitting, or tobacco smoking for 72 hours to prevent disturbing the natural clot layer (dry socket). Stick to absolute soft diets initially.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
