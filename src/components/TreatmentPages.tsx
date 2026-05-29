import { Check, Star, Shield, HelpCircle, Sparkles, TrendingUp, Heart, Layers, ArrowRight } from 'lucide-react';

interface TreatmentPagesProps {
  activeTab: string;
  onRequestAppointment: (serviceId?: string, doctorId?: string) => void;
}

export default function TreatmentPages({ activeTab, onRequestAppointment }: TreatmentPagesProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 animate-fade-in">
      
      {/* ================= OPT 1: ORTHODONTIC ================= */}
      {activeTab === 'orthodontic' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Aligned Occlusion</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Orthodontic Treatment</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Correct severe structural overlapping, restore correct bite occlusion, and streamline healthy facial symmetry with advanced dental orthopedic alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Interceptive Orthodontic Philosophy</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                Orthodontic care is about far more than just straight teeth—it is critical to securing your temporomandibular joints and protecting your teeth from accelerated attrition. We coordinate a detailed assessment mapping facial dimensions, growth cycles, and deep skeletal proportions.
              </p>
              
              <div className="space-y-2 text-xs text-gray-650">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Multi-phase interceptive expanders to widen narrow arches</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Ceramic matching aesthetic brackets to blend with enamel</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> High-elastic continuous memory archwires to reduce tension</div>
              </div>

              <button
                onClick={() => onRequestAppointment('invisalign')}
                className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs flex items-center gap-1 cursor-pointer transition-colors"
              >
                Request Free Orthodontic Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=650" 
                alt="Orthodontic Aligners" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 2: FILLINGS / RESTORATIONS ================= */}
      {activeTab === 'fillings' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Biocompatible Materials</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Fillings & Restorations</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              We are a strictly mercury-free clinical site, utilizing advanced composite resin systems to fill cavities invisibly while bonding directly with natural tooth enamel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=650" 
                alt="Tooth Colored Filling Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Tooth-Colored Composite Artistry</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                Traditional silver amalgam metal fillings swell with temperature fluctuations, which can trigger stress fractures inside human teeth over decades. Our medical-grade, BPA-free ceramic and silica resins are custom matched to your specific tooth shade to preserve natural structural balance.
              </p>
              
              <ul className="space-y-3 text-xs text-gray-650">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Conservative:</strong> Requires removing less natural tooth structure.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Supportive:</strong> Bonds chemically, strengthening the remaining tooth frame.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Esthetic:</strong> Blends seamlessly for invisible repairs, even in the front.</li>
              </ul>

              <button
                onClick={() => onRequestAppointment('general-dentistry')}
                className="px-6 py-3 bg-brand-teal text-brand-navy font-bold rounded-xl text-xs cursor-pointer"
              >
                Schedule Decay Restoration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 3: DENTAL SEALANTS ================= */}
      {activeTab === 'sealants' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Preventive Barriers</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Dental Sealants</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Guard deep pits and molars where food starches gather. Microscopic resin layers block bacterial acids from establishing decay structures.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs max-w-3xl mx-auto space-y-5">
            <h2 className="font-display font-semibold text-lg text-brand-navy">The Ultimate Protection For Developing Molars</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Dental sealants are customized medical-grade plastic layers flowing smoothly over chewy surfaces to seal microscopic pits. Placed in just minutes without needles, drilling, or discomfort—this is a standard preventive baseline for children, teenagers, and cavity-prone adults alike.
            </p>
            <div className="p-4 bg-brand-teal/5 rounded-2xl border border-brand Teal/10 text-xs">
              <span className="font-bold text-brand-navy block">★ CDC Diagnostic Research</span>
              <p className="text-gray-500 mt-1 leading-normal">
                Clinical charts from the Center for Disease Control prove that sealants block up to 80% of school-age cavities during peak decay arches. Highly recommended for kids when their six-year permanent molars emerge.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 4: DENTURES ================= */}
      {activeTab === 'dentures' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Complete Restoration</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Custom Dentures</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Lightweight, secure, and fully customized dental arches that fit comfortably, allowing you to smile, speak, and dine with total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Premium Custom Tailored Arches</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                Traditional dentures were heavy and slipped easily. Our modern clinical dentures utilize computer-designed, medical-grade thermoplastic structures that match your natural facial dimensions. We offer:
              </p>
              
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Partial Dentures:</strong> Seamlessly clip onto adjacent teeth to close spaced gaps.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Complete Dentures:</strong> Replace full upper or lower arches with incredible balance.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-brand-teal shrink-0" /> <strong>Implant-Retained Dentures:</strong> Snaps securely onto specialized titanium posts, eliminating slippage or adhesives.</li>
              </ul>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=650" 
                alt="Prosthodontics work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 5: BRIDGES ================= */}
      {activeTab === 'bridges' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Spanned Restoration</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Dental Bridges</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Close gaps seamlessly with durable, high-strength porcelain bridges that anchor securely to neighboring teeth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=650" 
                alt="Crown and bridge models" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Replacing Missing Teeth with Durable Bridges</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                A bridge represents a single, contiguous unit consisting of anchor crowns with a suspended artificial tooth (pontic) in the center. Extremely durable, this option is designed to match the precise color profile of your existing enamel and restores 100% of your biting forces.
              </p>
              
              <div className="space-y-1.5 text-xs text-gray-600 font-medium">
                <p>✓ Keeps adjacent healthy teeth from shifting out of alignment.</p>
                <p>✓ Spreads daily chewing load evenly across root systems.</p>
                <p>✓ Fast 2-visit treatment completed with custom digital planning.</p>
              </div>

              <button
                onClick={() => onRequestAppointment()}
                className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs cursor-pointer text-center"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 6: IMPLANTS ================= */}
      {activeTab === 'implants' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Gold Standard Implantology</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Dental Implants</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              The modern gold standard for replacing missing teeth. Restores both biting power and jawbone health permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Advanced Titanium Root Integration</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                For patients dealing with single or multiple missing teeth, dental implants replace the root structure with medical-grade titanium. The anchor merges directly with the bone (osseointegration) to prevent bone collapse, before receiving a premium custom-milled porcelain crown that feels and functions look a natural tooth.
              </p>
              
              <ul className="space-y-2.5 text-xs text-gray-650">
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Preserves vital facial contours and bone density</li>
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Biting force matches natural teeth up to 99%</li>
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Won't slide, slip, or decay like traditional structures</li>
                <li className="flex gap-2"><Check className="w-4.5 h-4.5 text-brand-teal shrink-0" /> Standalone anchor doesn't put load on neighboring teeth</li>
              </ul>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=650" 
                alt="Dental implant treatment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 7: CROWNS ================= */}
      {activeTab === 'crowns' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Solid Protection</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Porcelain Crowns</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Reinforce fractured, weak, or decay-damaged teeth completely with state-of-the-art hand-crafted laboratory porcelain caps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-4">
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-[280px]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=650" 
                alt="Aesthetic crowns" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-navy">Strength Combined With Absolute Translucency</h2>
              <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-light">
                When a tooth is severely cracked or undergoes a root canal, ordinary composite resin fillings are no longer sufficient to secure the tooth long term. Our customized zirconia and lithium disilicate (E-Max) crowns slide over natural structures, protecting them from splitting under daily masticatory forces.
              </p>
              
              <div className="space-y-2 text-xs text-gray-650">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Crafted from biocompatible metals and premium ceramic</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Milled and layered to refract micro-light naturally</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Smoothly borders gumlines to protect soft tissue collars</div>
              </div>

              <button
                onClick={() => onRequestAppointment()}
                className="px-6 py-3 bg-brand-navy text-white hover:bg-brand-teal hover:text-brand-navy font-bold rounded-xl text-xs cursor-pointer text-center"
              >
                Schedule Crown Restoration
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= OPT 8: TOOTH EXTRACTIONS ================= */}
      {activeTab === 'extractions' && (
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-teal block">Surgical Wellness</span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">Tooth Extractions</h1>
            <p className="text-gray-550 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
              Comfort-focused, bone-preserving extractions in our soothing, spa-like workspace. Immediate relief for impacted teeth or severe infections.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-xs max-w-3xl mx-auto space-y-5">
            <h2 className="font-display font-semibold text-lg text-brand-navy text-center md:text-left">Gentle Extraction Protocols</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              We understand that removing a tooth can be stressful. We leverage modern localized numbing blocks, mild nitrous oxide sedation, and minimally-invasive surgical instruments that protect surrounding jawbone structures to accelerate healing.
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-xs text-amber-900">
              <span className="font-bold block">🚨 Wisdom Teeth Assessment</span>
              <p className="mt-1 leading-normal font-light text-gray-600">
                If third molars lack adequate space, they can become trapped inside the jawbone (impacted), pressure-damaging adjacent teeth, triggering painful root cysts, or trapping bacteria. Early 3D digital screening is recommended around ages 15-22.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
