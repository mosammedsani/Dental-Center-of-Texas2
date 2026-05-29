import { Check, Star, BookOpen, Shield, HelpCircle, Activity } from 'lucide-react';

interface DentalHealthPagesProps {
  activeTab: string;
}

export default function DentalHealthPages({ activeTab }: DentalHealthPagesProps) {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 animate-fade-in">
      
      {/* ================= OPT 1: ORAL HYGIENE ================= */}
      {activeTab === 'oral-hygiene' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Daily Care Standards</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Oral Hygiene Guidance</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Your mechanical daily routines are the primary defense barrier shielding your teeth structures against aggressive bacterial decay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-5 text-xs text-gray-650 leading-relaxed font-light">
              <h2 className="font-display font-bold text-lg text-brand-navy">Best Scientific Brushing & Flossing Protocols</h2>
              <p>
                Proper physical hygiene relies on correct mechanics rather than vigorous force. Vigorous brushing with stiff bristles can recede your gums and erode delicate root dentin layers.
              </p>
              
              <ul className="space-y-3 font-semibold text-gray-700">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Brush twice daily for 2 full minutes using soft bristles at a 45° angle.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Floss daily, curving the floss into a C-shape against the sides of each tooth.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Utilize non-alcohol fluoride rinses to re-mineralize weakening enamel areas.</li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md h-[260px]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=700" 
                alt="Flossing routine info" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 2: PROPHYLAXIS ================= */}
      {activeTab === 'prophylaxis' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Deep Maintenance</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Prophylaxis (Professional Cleaning)</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Remove calcified deposits (calculus) that solid dental plaque leaves dynamically behind, keeping gums healthy and breath fresh.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs space-y-5">
            <h2 className="font-display font-semibold text-lg text-brand-navy">Why Professional Cleanings are Critical</h2>
            <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
              Despite diligent flossing, minerals in saliva continuously calcify plaque into tartar (calculus) over time. Tartar scale bonds physically to enamel facets and cannot be brushed away at home—it requires specialized dental instruments to lift deposits safely. Regular cleanings prevent inflamed gum collars and intercept gingivitis early.
            </p>
            <div className="p-4 bg-brand-teal/5 rounded-2xl border border-brand-teal/10 text-xs">
              <span className="font-bold text-brand-navy block">★ The Hygiene Formula</span>
              <p className="text-gray-550 mt-1 leading-normal">
                Clinical standards suggest a comprehensive prophylaxis appointment every 6 months to secure soft tissues and prevent deep-seated bacterial colony build-ups beneath the gums.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 3: DENTAL DICTIONARY ================= */}
      {activeTab === 'dictionary' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Aesthetic and Clinical Glossaries</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Dental Dictionary</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs">
              Clear, understandable definitions for common clinical terms you might encounter during your dentist visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
              <h3 className="font-display font-bold text-sm text-brand-navy">Abutment</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">The small connector post screwed securely into a dental implant, which acts as the core to support your final prosthetic crown.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
              <h3 className="font-display font-bold text-sm text-brand-navy">Calculus (Tartar)</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Solidified dental plaque that has integrated with saliva minerals to form a tough shell that only a hygienist's scaler can remove.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
              <h3 className="font-display font-bold text-sm text-brand-navy">Gingivitis</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">Reversible inflammation of the gums, characterized by redness, swelling, and bleeding during flossing, caused by plaque accumulation.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 space-y-2">
              <h3 className="font-display font-bold text-sm text-brand-navy">Periodontitis</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">An advanced inflammatory gum disease that causes destruction of the holding ligaments and jawbone, eventually leading to loose teeth.</p>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 4: PERIODONTAL MAINTENANCE ================= */}
      {activeTab === 'periodontal' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Bone and Tissue Stability</span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-navy">Periodontal Maintenance</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Specialized, deep-cleaning schedules designed to manage periodontal disease and preserve the holding bone layers around your teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Managing Bone Loss with Proactive Cleanings</h2>
              <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
                Once a patient undergoes a deep cleaning (scaling and root planing), regular preventive prophylaxis is no longer sufficient. Periodontal maintenance sessions are typically scheduled every 3 to 4 months. These deep cleans focus on clearing calculus from deeper pockets before bacteria can settle and irritate tissues.
              </p>
              
              <div className="space-y-2 text-xs text-gray-600">
                <p>✓ Halts gum line recession and dynamic support loss.</p>
                <p>✓ Smooths root facets to keep bacteria from colonizing roots.</p>
                <p>✓ Monitors deep pockets to intercept infectious flareups early.</p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-md h-[260px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700" 
                alt="Hygiene tools" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
