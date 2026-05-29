import { useState, FormEvent } from 'react';
import { X, Calendar, Sparkles, User, Clock, CheckCircle2, ChevronRight, AlertCircle, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { doctors, services } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
  preSelectedDoctor?: string;
}

export default function AppointmentModal({ isOpen, onClose, preSelectedService = '', preSelectedDoctor = '' }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    serviceId: preSelectedService,
    doctorId: preSelectedDoctor,
    preferredTime: '',
    preferredDay: '',
    fullName: '',
    phone: '',
    email: '',
    insuranceProvider: '',
    patientStatus: 'new', // new vs returning
    notes: ''
  });
  const [error, setError] = useState('');

  const handleNextStep = () => {
    if (step === 1 && !form.serviceId) {
      setError('Please choose a care path to continue.');
      return;
    }
    if (step === 2 && !form.doctorId) {
      setError('Please pick a dentist or choose First Available.');
      return;
    }
    if (step === 3 && (!form.preferredDay || !form.preferredTime)) {
      setError('Please indicate your preferred scheduling times.');
      return;
    }
    setError('');
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.email) {
      setError('Please populate name, phone, and email parameters.');
      return;
    }
    setSubmitted(true);
  };

  const selectedDoctorObj = doctors.find(d => d.id === form.doctorId);
  const selectedServiceObj = services.find(s => s.id === form.serviceId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="appointment-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            id="appointment-modal-card"
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
          >
            {/* Header branding */}
            <div className="bg-brand-navy p-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors font-bold cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-brand-aqua fill-brand-aqua animate-pulse" />
                <span className="text-xs uppercase font-semibold text-brand-aqua tracking-[0.2em] font-sans">Dental Center of Texas</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {submitted ? 'Request Received' : 'Schedule Clinical Discovery'}
              </h3>
              <p className="text-xs text-white/85 mt-1">
                {submitted 
                  ? 'Our clinical coordinators are preparing your onboarding file' 
                  : 'Fast 4-step secure HIPAA compliant booking reservation'}
              </p>

              {/* Progress Steps bar */}
              {!submitted && (
                <div className="flex gap-2 mt-5">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        i <= step ? 'bg-brand-teal' : 'bg-white/20'
                      }`} 
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{error}</span>
                </div>
              )}

              {submitted ? (
                /* Success view */
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-navy">
                    Congratulations, {form.fullName}!
                  </h4>
                  <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                    We have reserved your temporary appointment placeholder. A member of Dr. Acosta’s scheduling desk will contact you via <strong className="text-brand-navy">{form.phone}</strong> or <strong className="text-brand-navy">{form.email}</strong> within 1-2 business hours to lock down your exact slot.
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-2.5 border border-gray-100">
                    <div className="text-gray-400 uppercase font-bold tracking-wider text-[10px]">Your Requested Care Specs:</div>
                    <div><strong>Service:</strong> {selectedServiceObj?.title || 'Comprehensive Examination & Cleaning'}</div>
                    <div><strong>Dentist Expert:</strong> {form.doctorId === 'any' ? 'First Avaialble Doctor' : selectedDoctorObj?.name}</div>
                    <div><strong>Proposed Timeframe:</strong> {form.preferredDay} — {form.preferredTime} Window</div>
                    {form.insuranceProvider && <div><strong>Insurance Filer:</strong> {form.insuranceProvider}</div>}
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded-full hover:bg-brand-teal hover:text-brand-navy transition-colors cursor-pointer"
                  >
                    Return to Explorer
                  </button>
                </motion.div>
              ) : (
                /* Interactive Step Content */
                <div>
                  {step === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <label className="block text-sm font-semibold text-brand-navy mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-brand-teal" />
                        Select Your Care Path
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((s) => (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => {
                              setForm({ ...form, serviceId: s.id });
                              setError('');
                            }}
                            className={`p-4 rounded-2xl text-left border text-xs transition-all flex flex-col justify-between h-28 cursor-pointer ${
                              form.serviceId === s.id 
                                ? 'border-brand-teal bg-brand-teal/5 ring-1 ring-brand-teal shadow-xs' 
                                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                            }`}
                          >
                            <span className="font-bold text-brand-navy block text-sm">{s.title}</span>
                            <span className="text-gray-400 text-[11px] line-clamp-2 mt-1 leading-snug">{s.shortDesc}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <label className="block text-sm font-semibold text-brand-navy mb-2 flex items-center gap-1.5">
                        <User className="w-4 h-4 text-brand-teal" />
                        Choose Dental Practitioner
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setForm({ ...form, doctorId: 'any' });
                            setError('');
                          }}
                          className={`p-4 rounded-2xl text-left border text-xs transition-all flex items-center gap-3 cursor-pointer ${
                            form.doctorId === 'any'
                              ? 'border-brand-teal bg-brand-teal/5 ring-1 ring-brand-teal'
                              : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-full bg-brand-navy/10 text-brand-navy flex items-center justify-center font-bold">
                            ★
                          </div>
                          <div>
                            <span className="font-bold text-brand-navy block">First Available Dentist</span>
                            <span className="text-gray-400 text-[10px]">Optimizes scheduling speed & flexibility</span>
                          </div>
                        </button>

                        {doctors.map((doc) => (
                          <button
                            type="button"
                            key={doc.id}
                            onClick={() => {
                              setForm({ ...form, doctorId: doc.id });
                              setError('');
                            }}
                            className={`p-3 rounded-2xl text-left border text-xs transition-all flex items-center gap-3 cursor-pointer ${
                              form.doctorId === doc.id
                                ? 'border-brand-teal bg-brand-teal/5 ring-1 ring-brand-teal'
                                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50/50'
                            }`}
                          >
                            <img
                              src={doc.imageUrl}
                              alt={doc.name}
                              className="w-10 h-10 rounded-full object-cover shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div>
                              <span className="font-bold text-brand-navy block line-clamp-1">{doc.name}</span>
                              <span className="text-brand-teal text-[10px] font-medium block">{doc.title}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy mb-2.5 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-brand-teal" />
                          Preferred Day of Week
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                            <button
                              type="button"
                              key={day}
                              onClick={() => setForm({ ...form, preferredDay: day })}
                              className={`py-2 px-3 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                                form.preferredDay === day
                                  ? 'bg-brand-navy text-white border-brand-navy'
                                  : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-brand-navy mb-2.5 flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-brand-teal" />
                          Preferred Time Frame
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { label: 'Morning', desc: '8:00 AM - 12:00 PM' },
                            { label: 'Midday', desc: '12:00 PM - 2:00 PM' },
                            { label: 'Afternoon', desc: '2:00 PM - 5:00 PM' }
                          ].map((slot) => (
                            <button
                              type="button"
                              key={slot.label}
                              onClick={() => setForm({ ...form, preferredTime: slot.label })}
                              className={`py-3 px-2 rounded-xl text-center border text-xs font-medium transition-all cursor-pointer ${
                                form.preferredTime === slot.label
                                  ? 'bg-brand-teal text-brand-navy border-brand-teal font-semibold'
                                  : 'border-gray-200 hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              <span className="block font-bold">{slot.label}</span>
                              <span className="block text-[10px] text-gray-400 mt-0.5">{slot.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Full Dental Patient Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Emily Johnston"
                            value={form.fullName}
                            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-brand-teal focus:outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Primary Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. (281) 555-0100"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-brand-teal focus:outline-hidden font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Emergency / Routine Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="emily@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-brand-teal focus:outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Dental Insurance Provider (Optional)</label>
                          <input
                            type="text"
                            placeholder="e.g. Delta Dental / Cigna"
                            value={form.insuranceProvider}
                            onChange={(e) => setForm({ ...form, insuranceProvider: e.target.value })}
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-brand-teal focus:outline-hidden"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Relationship Status</label>
                          <div className="flex gap-2">
                            {['new', 'returning'].map((status) => (
                              <button
                                type="button"
                                key={status}
                                onClick={() => setForm({ ...form, patientStatus: status })}
                                className={`flex-1 py-1.5 rounded-lg border text-xs font-bold capitalize transition-colors cursor-pointer ${
                                  form.patientStatus === status
                                    ? 'bg-brand-navy/5 text-brand-navy border-brand-navy'
                                    : 'border-gray-200 text-gray-500'
                                }`}
                              >
                                {status === 'new' ? '✨ New Patient' : 'Returning Patient'}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1">Special Clinical Requests / Symptoms</label>
                          <input
                            type="text"
                            placeholder="e.g. interested in teeth veneers evaluation"
                            value={form.notes}
                            onChange={(e) => setForm({ ...form, notes: e.target.value })}
                            className="w-full px-4 py-2 text-sm border border-gray-200 rounded-xl focus:border-brand-teal focus:outline-hidden"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Footer */}
                  <div className="flex justify-between items-center border-t border-gray-100 pt-5 mt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={step === 1}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        step === 1 
                          ? 'text-gray-300 pointer-events-none' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-brand-navy cursor-pointer'
                      }`}
                    >
                      Back
                    </button>

                    <div className="text-xs text-gray-400 font-medium">
                      Step {step} of 4
                    </div>

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-2.5 bg-brand-navy text-white text-xs font-bold rounded-xl hover:bg-brand-teal hover:text-brand-navy transition-all duration-150 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Continue</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleFinalSubmit}
                        className="px-6 py-2.5 bg-brand-teal text-brand-navy text-xs font-bold rounded-xl hover:shadow-lg transition-all duration-150 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Confirm Slot Request</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
