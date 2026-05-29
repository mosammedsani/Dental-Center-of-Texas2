import { useState, useRef, useEffect } from 'react';
import { Eye, ShieldCheck, Sparkle } from 'lucide-react';

export default function SmileSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div id="smile-slider-element" className="relative w-full max-w-2xl mx-auto">
      {/* Visual Instruction Badge */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-brand-navy/90 text-warm-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
        <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
        <Eye className="w-3.5 h-3.5" />
        <span>Drag center handle to compare</span>
      </div>

      <div 
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white cursor-ew-resize select-none"
      >
        {/* AFTER (Perfectly radiant, premium cosmetic porcelain teeth) */}
        <div className="absolute inset-0 w-full h-full bg-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200" 
            alt="After - Flawless smile design makeover" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 right-4 bg-emerald-500/90 text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-xs">
            After Makeover
          </div>
        </div>

        {/* BEFORE (Chipped/warped color, simulated via absolute filter and desaturation offsets) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-[630px] sm:w-[670px] h-full">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200" 
              alt="Before makeover" 
              className="absolute inset-0 w-full h-full object-cover grayscale-40 sepia-25 brightness-85 contrast-95"
              style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw', height: '100%' }}
              referrerPolicy="no-referrer"
            />
            {/* Dark contrast filter */}
            <div className="absolute inset-0 bg-yellow-904/10 mix-blend-color" />
          </div>
          <div className="absolute bottom-4 left-4 bg-brand-navy/90 text-white text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md shadow-xs whitespace-nowrap z-10">
            Before Aesthetics
          </div>
        </div>

        {/* Sliding Drag Handle Bar */}
        <div 
          className="absolute inset-y-0 w-1.5 bg-white shadow-2xl z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-navy border-4 border-white text-brand-aqua flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Accompanying Editorial Callout */}
      <div className="mt-6 p-5 rounded-2xl bg-brand-navy/5 border border-brand-teal/10 flex flex-col sm:flex-row items-center gap-4 text-xs">
        <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-teal shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h5 className="font-bold text-brand-navy leading-none flex items-center gap-1.5">
            Artistic Precision Dental Crafting
            <Sparkle className="w-3 h-3 text-brand-teal fill-brand-teal" />
          </h5>
          <p className="text-gray-500 mt-1">
            Our porcelain veneers are hand-layered by top cosmetic ceramicists right here in Texas. They match natural facial profile scales to present genuine smiles.
          </p>
        </div>
      </div>
    </div>
  );
}
