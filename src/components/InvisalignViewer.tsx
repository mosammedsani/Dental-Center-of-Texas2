import { useState } from 'react';
import { Eye, Shield, Smile, Sparkles, RefreshCcw, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface Stage {
  week: number;
  title: string;
  migration: string;
  progress: number;
  highlight: string;
  imageAlt: string;
}

const stages: Stage[] = [
  {
    week: 1,
    title: 'Initial Scan & Active First Tray',
    migration: 'Gentle expansion of the posterior dental arch to make micro-room for crowded front teeth.',
    progress: 5,
    highlight: 'Trays feel snug, reminding you of active bone remodeling.',
    imageAlt: 'Slightly crowded frontline teeth'
  },
  {
    week: 12,
    title: 'Mid-Course Rotational Correction',
    migration: 'De-crowding of lower incisors and alignment of bicuspids to secure correct bite placement.',
    progress: 35,
    highlight: 'Noticeable spaces begin closing as teeth rotate into sequence.',
    imageAlt: 'Partially aligned, gaps closing'
  },
  {
    week: 24,
    title: 'Arch Harmonization & Torque Adjustments',
    migration: 'Fine-tuning angulation of the roots. Front teeth tilt back safely into standard orientation.',
    progress: 70,
    highlight: 'Profile outline displays smoother symmetry when speaking.',
    imageAlt: 'Highly synchronized clear rows'
  },
  {
    week: 36,
    title: 'Final Smile Occlusion Locks',
    migration: 'Final teeth settling. Complete, perfect arch symmetry and custom bite alignment achieved.',
    progress: 100,
    highlight: 'Shift from active movements to nightly retainer settings.',
    imageAlt: 'Perfect linear Hollywood arch'
  }
];

export default function InvisalignViewer() {
  const [currentStage, setCurrentStage] = useState<number>(0);

  const active = stages[currentStage];

  return (
    <div id="invisalign-viewer-panel" className="bg-brand-navy text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      
      {/* Abstract orbital graphics for futuristic tech aesthetic */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-teal/5 blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-aqua/5 blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Interactive Specs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-brand-teal/15 text-brand-aqua rounded-md text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 border border-brand-teal/20">
              <Activity className="w-3.5 h-3.5" />
              Progress Simulator
            </div>
            <span className="text-xs text-white/50">iTero® 3D SmartTrack</span>
          </div>

          <h4 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            See Your Teeth Migrate <span className="text-brand-aqua">Predictably</span>
          </h4>
          <p className="text-sm text-white/70 max-w-lg leading-relaxed">
            Unlike metal brackets, Invisalign maps tooth paths before fabrication. Toggle custom stages below to view orthodontic migration.
          </p>

          {/* Selector timeline row */}
          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-2xl overflow-x-auto border border-white/10">
            {stages.map((st, i) => (
              <button
                key={st.week}
                onClick={() => setCurrentStage(i)}
                className={`flex-1 min-w-[100px] text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  currentStage === i
                    ? 'bg-brand-teal text-brand-navy font-bold shadow-md'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Week {st.week}
              </button>
            ))}
          </div>

          {/* Details segment */}
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3.5"
          >
            <div className="flex justify-between items-center">
              <span className="text-brand-aqua text-xs font-bold uppercase tracking-wider">Milestone Progress: {active.progress}%</span>
              <span className="text-xs text-white/40">{active.title}</span>
            </div>

            <p className="text-sm text-white/90 leading-relaxed font-sans font-light">
              {active.migration}
            </p>

            <div className="flex items-start gap-2 bg-brand-teal/5 p-3 rounded-lg text-xs text-brand-aqua font-medium">
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{active.highlight}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Futuristic Aligner Progress Circle */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Circumference border circle */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="105"
                className="stroke-white/10 fill-none"
                strokeWidth="6"
              />
              <motion.circle
                cx="128"
                cy="128"
                r="105"
                className="stroke-brand-teal fill-none"
                strokeWidth="6"
                strokeDasharray="660"
                initial={{ strokeDashoffset: 660 }}
                animate={{ strokeDashoffset: 660 - (660 * active.progress) / 100 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </svg>

            {/* Simulated teeth alignment image representing selected period */}
            <div className="w-48 h-48 rounded-full bg-brand-navy/60 border-2 border-white/20 overflow-hidden flex flex-col items-center justify-center p-4 relative">
              <Smile className={`w-16 h-16 text-brand-teal transition-all duration-300 ${active.progress > 80 ? 'scale-110 rotate-3' : 'scale-100'}`} />
              
              <div className="text-center mt-3">
                <span className="block text-2xl font-mono font-bold tracking-tight text-white">
                  Week {active.week}
                </span>
                <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider">
                  Trays {currentStage + 1} of 18
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4 text-xs text-white/60">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5 text-brand-teal" /> Non-invasive
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
              <RefreshCcw className="w-3.5 h-3.5 text-brand-teal" /> Clear design
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
