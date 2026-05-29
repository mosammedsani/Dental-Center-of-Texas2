import { X, Award, GraduationCap, ShieldCheck, CalendarRange } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Doctor } from '../types';

interface DrModalProps {
  doctor: Doctor | null;
  onClose: () => void;
  onBookDoctor: (docId: string) => void;
}

export default function DrModal({ doctor, onClose, onBookDoctor }: DrModalProps) {
  return (
    <AnimatePresence>
      {doctor && (
        <div id="doctor-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/70 backdrop-blur-sm"
          />

          <motion.div
            id="doctor-modal-card"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 flex flex-col md:flex-row h-[90vh] md:h-auto"
          >
            {/* Left side headshot */}
            <div className="md:w-5/12 bg-zinc-100 relative h-48 md:h-auto shrink-0">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy to-transparent p-4 md:hidden">
                <span className="text-[10px] text-brand-aqua uppercase tracking-widest font-bold font-sans">Dental Practitioner</span>
                <h3 className="font-display text-xl font-bold text-white leading-none">{doctor.name}</h3>
              </div>
            </div>

            {/* Right side bios */}
            <div className="md:w-7/12 p-6 overflow-y-auto flex flex-col justify-between h-full">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-brand-navy bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors font-bold cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                {/* Desktop Titles */}
                <div className="hidden md:block">
                  <span className="text-xs text-brand-teal uppercase tracking-widest font-bold font-sans block mb-1">Clinic Partner</span>
                  <h3 className="font-display text-2xl font-bold text-brand-navy">{doctor.name}</h3>
                  <p className="text-xs text-gray-500 font-medium">{doctor.title}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">Doctor Philosophy</h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {doctor.longBio}
                  </p>
                </div>

                {/* Academic Background */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-brand-teal" />
                    Education History
                  </h4>
                  <ul className="space-y-1">
                    {doctor.education.map((edu, idx) => (
                      <li key={idx} className="text-xs text-gray-600 font-sans flex items-start gap-1 pb-1">
                        <span className="text-brand-teal font-bold shrink-0">▸</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specialties & Credentials Grid */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <h5 className="text-[11px] uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1 mb-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" />
                      Key Focus Fields
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {doctor.specialties.map((spec, idx) => (
                        <span key={idx} className="bg-brand-teal/5 text-brand-navy border border-brand-teal/10 px-2 py-0.5 rounded text-[10px] font-semibold">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[11px] uppercase tracking-wider font-bold text-gray-400 flex items-center gap-1 mb-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-teal" />
                      Affiliated Boards
                    </h5>
                    <div className="space-y-1">
                      {doctor.credentials.map((cred, idx) => (
                        <span key={idx} className="block text-[10px] bg-brand-navy/5 text-gray-700 font-medium px-2 py-0.5 rounded border border-gray-100">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action row */}
              <div className="border-t border-gray-100 pt-4 mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-gray-600"
                >
                  Close Profile
                </button>
                <button
                  onClick={() => onBookDoctor(doctor.id)}
                  className="px-5 py-2.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy text-xs font-bold rounded-xl flex items-center gap-2 shadow-xs transition-colors duration-200 cursor-pointer"
                >
                  <CalendarRange className="w-4 h-4" />
                  Request Exam with {doctor.name.split(' ').pop()}
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
