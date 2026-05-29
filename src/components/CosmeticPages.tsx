import { Check, Sparkles, Award, Star, ArrowRight } from 'lucide-react';
import SmileSlider from './SmileSlider';
import InvisalignViewer from './InvisalignViewer';

interface CosmeticPagesProps {
  activeTab: string;
  onRequestAppointment: (serviceId?: string, doctorId?: string) => void;
}

export default function CosmeticPages({ activeTab, onRequestAppointment }: CosmeticPagesProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 animate-fade-in">
      
      {/* ================= OPT 1: BONDING ================= */}
      {activeTab === 'bonding' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Conservative Perfecting</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Cosmetic Bonding</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Finesse minor gaps, cover persistent chemical tooth stains, and sculpt chipped tooth structures with direct direct composite resin in just a single appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Immediate Chairside Smile Sculpting</h2>
              <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
                For patients seeking fast, non-invasive visual adjustments, dental bonding represents an ideal solution. Dr. Brenda Acosta uses premium tooth shade resins, molding them directly to your existing enamel margins, curing with an electronic UV light, and polishing to replicate natural enamel luster.
              </p>
              
              <div className="space-y-2 text-xs text-gray-600">
                <p>✓ Requires zero enamel reductions or physical anesthetics.</p>
                <p>✓ Completed in small localized fractions—takes just under 1 hour.</p>
                <p>✓ Ideal for fixing chipped edges or correcting small visual gaps.</p>
              </div>

              <button
                onClick={() => onRequestAppointment('cosmetic-dentistry')}
                className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Schedule Direct Bonding Visit
              </button>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=650" 
                alt="Cosmetic dentistry smiles" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 2: PORCELAIN VENEERS ================= */}
      {activeTab === 'veneers' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Absolute Smile Design</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Porcelain Veneers</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              The ultimate aesthetic smile design. Ultra-thin, handmade ceramic facings that permanently redefine your teeth shape, size, color, and visual symmetry.
            </p>
          </div>

          {/* Interactive Slider embedded */}
          <div className="bg-zinc-50 border border-gray-100 p-6 sm:p-10 rounded-3xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] text-brand-teal uppercase tracking-widest font-extrabold block">Drag Comparison Slider</span>
              <h3 className="font-display font-bold text-lg text-brand-navy">Interactive Clinical Transformation</h3>
            </div>
            <SmileSlider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">The Craftsmanship of Ceramic Veneers</h2>
              <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
                Crafted from advanced biological light-reflective medical porcelain, veneers are bonded permanently to front tooth structures. Designed collaboratively by Dr. Acosta to integrate seamlessly with your facial features, skin tone, and lip lines.
              </p>
              
              <ul className="space-y-2 text-xs text-gray-650">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Exquisite resistance to organic stains from coffees or wine</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Perfectly matches dental translucencies with natural depth</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> Exceptional lifetime durability exceeding 15-20 years</li>
              </ul>

              <button
                onClick={() => onRequestAppointment('porcelain-veneers')}
                className="px-6 py-3.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Schedule Aesthetic Consultation
              </button>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=650" 
                alt="Cosmetic Smile transformed" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 3: TEETH WHITENING ================= */}
      {activeTab === 'whitening' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Luminous Enamel</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Professional Whitening</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Elevate your smile up to 8 shades lighter in just under an hour using clinical-strength UV laser systems or bespoke take-home barrier trays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=650" 
                alt="Teeth whitening model" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Deep-Stain Removal & Enamel Safety</h2>
              <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
                Generic store kits often trigger temporary tooth nerve inflammation and uneven color results. Our clinically isolated laser systems focus professional gel formulas strictly over enamel surfaces, breaking apart internal molecules that trigger dull variations without drying out your teeth.
              </p>
              
              <div className="space-y-2 text-xs text-gray-600">
                <p>✓ <strong>Fast In-Office Zoom:</strong> 1-hour session provides immediate, beautiful outcomes.</p>
                <p>✓ <strong>Bespoke Take-Home Trays:</strong> Precision-molded models for comfortable touchups.</p>
                <p>✓ <strong>Nerve-Safe:</strong> Optimized pH formula reduces temporary joint shooting sensations.</p>
              </div>

              <button
                onClick={() => onRequestAppointment('teeth-whitening')}
                className="px-6 py-3.5 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Inquire About Whitening Specials
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 4: INVISALIGN ================= */}
      {activeTab === 'invisalign' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Comfort Straightening</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Invisalign® Clear Aligners</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Straighten your teeth naturally with sleek, crystal-clear, removable trays without the wire irritation of traditional braces.
            </p>
          </div>

          {/* Interactive Invisalign Applet embedded */}
          <div className="p-6 bg-zinc-50 border border-gray-100 rounded-3xl">
            <InvisalignViewer />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">How Transparent Aligner Straightens Arches</h2>
              <p className="text-xs sm:text-sm text-gray-655 leading-relaxed font-light">
                Utilizing state-of-the-art iTero® physical scans, we map your entire dentition in 3D, creating sequence alignments and dental paths before fabrications start. Since aligners are removable, physical hygiene flossing and eating paths are simple and comfortable.
              </p>
              
              <ul className="space-y-3 text-xs text-gray-650">
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Virtually invisible during personal presentation and social events</li>
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Fully custom, comfortable scalloped lines align with your soft gums</li>
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Restores bite balance, matching healthy structural joints</li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=650" 
                alt="Clear Invisalign details" 
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
