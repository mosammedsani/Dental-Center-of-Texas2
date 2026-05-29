import { BookOpen, GraduationCap, Award, Heart, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { doctors } from '../data';

interface MeetUsPagesProps {
  activeTab: string;
  onRequestAppointment: (serviceId?: string, doctorId?: string) => void;
}

export default function MeetUsPages({ activeTab, onRequestAppointment }: MeetUsPagesProps) {
  // Find doctor matching activeTab
  const docId = activeTab === 'meet-acosta' ? 'dr-acosta' 
              : activeTab === 'meet-nguyen' ? 'dr-nguyen' 
              : activeTab === 'meet-sayani' ? 'dr-sayani' 
              : 'dr-suhail';

  const doctor = doctors.find(d => d.id === docId);

  if (!doctor) {
    return (
      <div className="py-20 text-center text-gray-500">
        Doctor profile not found.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-16">
      
      {/* Split layout introducing the doctor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Large stylized portrait border & backdrop */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-4 bg-brand-teal/10 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-square sm:aspect-4/5 lg:aspect-square bg-slate-50">
            <img 
              src={doctor.imageUrl} 
              alt={doctor.name} 
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Soft overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute bottom-4 left-6 right-6 text-white text-xs bg-brand-navy/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
            <span className="font-semibold block text-brand-aqua">Texas State Board Accredited</span>
            <span className="text-[10px] text-white/80">Continuous Practice & Surgical Excellence</span>
          </div>
        </div>

        {/* Right Side: High-fidelity details & specialties */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Practitioner Spotlight</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-none">
              {doctor.name}
            </h1>
            <p className="text-brand-teal font-semibold text-sm sm:text-base">
              {doctor.title}
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-gray-600 space-y-4 font-light">
            <p className="leading-relaxed">
              {doctor.longBio}
            </p>
            <p className="leading-relaxed font-sans text-gray-500 border-l-4 border-brand-teal pl-4 italic">
              "We believe visiting the dentist should represent an artistic, biological restoration of trust and absolute self-esteem."
            </p>
          </div>

          {/* Specialities Tags */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-xs text-brand-navy uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              Clinical Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {doctor.specialties.map((spec, idx) => (
                <span key={idx} className="bg-brand-teal/5 text-brand-navy text-xs font-semibold px-3.5 py-1.5 rounded-full border border-brand-teal/15">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Row */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onRequestAppointment('general-dentistry', doctor.id)}
              className="px-8 py-3.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-center text-xs shadow-md shadow-brand-navy/10 hover:shadow-lg transition-all active:scale-98 cursor-pointer"
            >
              Request Appointment with {doctor.name.split(' ').pop()}
            </button>
            <a
              href="tel:2813951919"
              className="px-6 py-3.5 bg-gray-50 hover:bg-gray-100 text-brand-navy font-semibold rounded-xl text-center text-xs border border-gray-200 transition-colors font-mono flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-teal" />
              (281) 395-1919
            </a>
          </div>

        </div>

      </div>

      {/* Grid: Education & Professional Affiliations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-100">
        
        {/* Education Column */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-display text-lg font-bold text-brand-navy flex items-center gap-2 border-b border-gray-100 pb-3">
            <GraduationCap className="w-5 h-5 text-brand-teal" />
            Educational Foundation
          </h2>
          <div className="space-y-4 text-xs text-gray-600">
            {doctor.education.map((edu, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="font-bold text-brand-teal text-base">0{idx+1}</span>
                <div>
                  <p className="font-bold text-brand-navy">{edu.split(' - ')[0]}</p>
                  <p className="text-gray-400 mt-0.5">{edu.split(' - ')[1] || 'Accredited Curriculum'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Column */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs space-y-4">
          <h2 className="font-display text-lg font-bold text-brand-navy flex items-center gap-2 border-b border-gray-100 pb-3">
            <Award className="w-5 h-5 text-brand-teal" />
            Board Credentials & Guilds
          </h2>
          <ul className="space-y-3 text-xs text-gray-600">
            {doctor.credentials.map((cred, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal shrink-0" />
                <span className="font-medium text-gray-700">{cred}</span>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal shrink-0" />
              <span className="font-medium text-gray-700">Licensed Practitioner — State of Texas Dental Association</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
