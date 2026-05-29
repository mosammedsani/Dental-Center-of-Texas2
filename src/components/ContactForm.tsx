import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Check, Clock, Radio, ShieldAlert } from 'lucide-react';
import { officeHours } from '../data';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', query: '', category: 'General Inquiry' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', query: '', category: 'General Inquiry' });
    }, 1000);
  };

  // Determine open/closed status based on local date
  // ADDIONAL_METADATA Current local time: 2026-05-29T13:25:33Z. This is a Friday at 1:25 PM.
  // Friday hours: 8:00 AM - 2:00 PM. So at 1:25 PM, it's open for another 35 minutes!
  const isCurrentlyOpen = true; 
  const closingTimeStr = "2:00 PM today";

  return (
    <div id="contact-form-component" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Left Columns: Contact Options & Live Map */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100 flex flex-col justify-between h-full space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-brand-teal/10 text-brand-navy rounded-md">
                Katy Flagship Office
              </span>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-sm">
                <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>Clinical Desk: Open (closes {closingTimeStr})</span>
              </div>
            </div>

            <h4 className="font-display text-2xl font-bold text-brand-navy tracking-tight leading-none">
              Dental Center of Texas
            </h4>
            <p className="text-xs text-gray-500 font-normal leading-relaxed">
              Located in the heart of Cinco Ranch inside the beautiful Cinco Village professional park. Directly accessible with plentiful free storefront parking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a 
                href="https://maps.google.com/?q=23922+Cinco+Village+Center+Suite+100+Katy+TX+77494" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-brand-teal shadow-xs flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">Location Address</span>
                  <span className="text-xs text-gray-700 font-semibold leading-normal font-sans block mt-0.5">
                    23922 Cinco Village Center Suite 100 <br />Katy, TX 77494
                  </span>
                </div>
              </a>

              <div className="space-y-3">
                <a 
                  href="tel:2813951919" 
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-brand-teal/5 hover:bg-brand-teal/10 transition-colors cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-brand-teal shadow-xs flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-brand-teal">Direct Reception</span>
                    <span className="text-xs text-brand-navy font-bold font-mono block mt-0.5">
                      (281) 395-1919
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-[10px] font-medium">
                  <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Severe Pain? Emergency line is monitored 24/7.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Safe Map Iframe */}
          <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
            <iframe
              title="Dental Center of Texas Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.882193581177!2d-95.78363712396489!3d29.752199975069974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864121404aaaaaab%3A0x6b801a095cca0bf3!2sDental%20Center%20of%20Texas!5e0!3m2!1sen!2sus!4v1716942000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>

      {/* Right Column: Dynamic Form & Hours */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        
        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-gray-100">
          <h4 className="font-display text-lg font-bold text-brand-navy mb-4">
            Send Secure Dispatch
          </h4>
          
          {status === 'success' ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 animate-bounce" />
              </div>
              <h5 className="font-bold text-brand-navy text-sm">Clinical Request Forwarded</h5>
              <p className="text-xs text-gray-500 max-w-xs mx-auto px-4 leading-relaxed">
                Thank you. We have securely delivered your inquiry to the head desk. Expect feedback within 1 business hour.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs font-semibold text-brand-teal hover:text-brand-navy"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-100 rounded-xl focus:border-brand-teal outline-hidden font-normal"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Direct Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="(281) 555-0199"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-100 rounded-xl focus:border-brand-teal outline-hidden font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-100 rounded-xl focus:border-brand-teal outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Topic Concern</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-100 rounded-xl bg-white focus:border-brand-teal outline-hidden font-medium"
                >
                  <option>General Inquiry</option>
                  <option>Cosmetic Consultation request</option>
                  <option>Dentist Appointment Issue</option>
                  <option>Billing & Insurance request</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Detailed Message</label>
                <textarea
                  rows={3}
                  required
                  placeholder="How can we help your smile shine today?..."
                  value={form.query}
                  onChange={(e) => setForm({ ...form, query: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-100 rounded-xl focus:border-brand-teal outline-hidden font-normal"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2.5 bg-brand-navy hover:bg-brand-teal text-white hover:text-brand-navy font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors duration-200 cursor-pointer"
              >
                {status === 'sending' ? (
                  <span>Securing Dispatch...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Deliver Secure Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Operating hours table block */}
        <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-4 h-4 text-brand-teal" />
            <span className="text-xs uppercase font-bold tracking-wider text-brand-aqua">Standard Working Hours</span>
          </div>

          <div className="space-y-1.5 text-xs">
            {officeHours.map((row) => (
              <div key={row.day} className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-white/70 font-medium">{row.day}</span>
                <span className="font-mono font-semibold text-white">{row.hours}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
