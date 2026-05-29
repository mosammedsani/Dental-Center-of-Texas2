import { AlertTriangle, Phone, ShieldAlert, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface EmergenciesPageProps {
  onRequestAppointment: (serviceId?: string) => void;
}

export default function EmergenciesPage({ onRequestAppointment }: EmergenciesPageProps) {
  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-12 animate-fade-in">
      
      {/* Visual Header Grid with Red Alert Elements */}
      <div className="bg-red-50/70 border border-red-150 rounded-[2rem] p-8 sm:p-10 space-y-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10 pointer-events-none">
          <AlertTriangle className="w-96 h-96 text-red-650" />
        </div>

        <div className="space-y-3 relative z-10 max-w-2xl">
          <span className="px-3.5 py-1.5 bg-red-100 text-red-700 text-[10px] font-extrabold tracking-widest uppercase rounded-full inline-block border border-red-200">
            Urgent Dental Relief Katy TX
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7f1d1d] leading-none">
            Dental Emergencies
          </h1>
          <p className="text-red-950 font-normal text-xs sm:text-sm leading-relaxed max-w-xl">
            Experiencing severe toothache pressure, a knocked-out tooth, visible swelling, or a broken crown? Call our immediate response lines for same-day priority appointments.
          </p>
        </div>

        {/* Big Urgent Hotline Banner */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 relative z-10">
          <a 
            href="tel:2813951919" 
            className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-mono text-center font-bold rounded-xl shadow-lg shadow-red-600/20 active:scale-98 transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span>(281) 395-1919 Urgent Desk</span>
          </a>
          <button
            onClick={() => onRequestAppointment('general-dentistry')}
            className="px-6 py-4 bg-white hover:bg-red-100 text-[#7f1d1d] border border-red-200 font-bold rounded-xl text-xs text-center cursor-pointer transition-colors"
          >
            Request Same-Day Emergency Slot
          </button>
        </div>
      </div>

      {/* Grid: Immediate Practical Home Actions */}
      <div className="space-y-6">
        <h2 className="font-display font-bold text-xl text-brand-navy flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-red-650" />
          Immediate Home Action Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-650">
          
          <div className="bg-white p-5 rounded-2xl border border-gray-150 space-y-3">
            <span className="font-bold text-brand-navy block text-sm">1. Knocked-Out Permanent Tooth</span>
            <p className="leading-relaxed font-light text-gray-500">
              Hold the tooth strictly by the crown (the chew surface)—never touch the organic root tissues. Gently rinse under cool water if dirty. Try to carefully reinsert the tooth back into its socket. If not possible, submerge the tooth in a glass of milk or saline and get to our Katy dental clinic within 60 minutes.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 space-y-3">
            <span className="font-bold text-brand-navy block text-sm">2. Severe Unmanaged Toothache</span>
            <p className="leading-relaxed font-light text-gray-500">
              Rinse your mouth with warm saline water to dislodge any packing materials. Gently use dental floss to check if food debris is wedged between teeth. Never place aspirin pills directly against sensitive gums as this triggers chemical acid burns. Take over-the-counter ibuprofen.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 space-y-3">
            <span className="font-bold text-brand-navy block text-sm">3. Broken or Cracked Tooth</span>
            <p className="leading-relaxed font-light text-gray-500">
              Rinse your mouth with warm water to cleanse the cracked site. If soft bleeding occurs, apply gentle pressure using a clean gauze pad for 15 minutes. Use cold ice packs against your cheek to mitigate swelling until our dentist reviews the structure coordinates.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-150 space-y-3">
            <span className="font-bold text-brand-navy block text-sm">4. Lost Dental Crown or Bridge</span>
            <p className="leading-relaxed font-light text-gray-500">
              Retrieve your crown if possible. You can temporarily slide the cap back over the sensitive tooth using dab of temporary pharmacy dental cement, toothpaste, or sugar-free gum to shield the exposed nerve from cold/hot elements until your appointment.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
