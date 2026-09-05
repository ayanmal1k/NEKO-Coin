'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milestone, Rocket, Landmark, Award, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RoadmapPhase {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: 'completed' | 'active' | 'upcoming';
  milestones: string[];
}

const PHASES: RoadmapPhase[] = [
  {
    number: '01',
    title: 'The Cat Awakening',
    subtitle: 'Laying the foundations of the pack',
    icon: <Rocket className="text-red-500" size={24} />,
    status: 'completed',
    milestones: [
      'Token smart contract deployment & verification',
      'Fair Launch with 100% liquidity burned permanently',
      'Community hub setup (Telegram, Twitter/X, Discord)',
      '10,000+ organic token holders achieved',
      'Listing on CoinMarketCap and CoinGecko'
    ]
  },
  {
    number: '02',
    title: 'Clawing the Charts',
    subtitle: 'Expanding outreach and utility',
    icon: <Milestone className="text-yellow-400" size={24} />,
    status: 'active',
    milestones: [
      'Interactive Neko Playground & Swap aggregator launch',
      'CEX listings on top-tier global exchanges',
      'Release of the 10,000 Lucky Neko 3D NFT collection',
      'Launch of Neko Staking with DAO multiplier boosts',
      'First major community-elected marketing campaign'
    ]
  },
  {
    number: '03',
    title: 'Feline Empire',
    subtitle: 'Global hegemony and real world impact',
    icon: <Landmark className="text-orange-500" size={24} />,
    status: 'upcoming',
    milestones: [
      'Neko Arcade launch with mini-games and weekly drops',
      'Cross-chain portal integration (Solana / Ethereum / BSC)',
      'Physical Neko streetwear store release',
      'Worldwide partnership with cat welfare sanctuaries',
      'Decentralized autonomous organization (DAO) full governance transfer'
    ]
  }
];

export function Roadmap() {
  const [activePhase, setActivePhase] = useState<number>(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const triggerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !progressBarRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline vertical line filling on scroll
      gsap.to(progressBarRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: triggerContainerRef.current || sectionRef.current,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: true
        }
      });
      
      // Auto-toggle active phase based on scroll position!
      const selectors = sectionRef.current.querySelectorAll('.roadmap-selector');
      selectors.forEach((selector, index) => {
        ScrollTrigger.create({
          trigger: selector,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActivePhase(index),
          onEnterBack: () => setActivePhase(index)
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="roadmap" ref={sectionRef} className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-600/5 to-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
            <Award className="text-yellow-400" size={14} />
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Strategic Vision</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            The Mission Plan
          </h2>
          <p className="text-gray-400 text-base max-w-xl font-medium">
            Unlike other projects, our road is built on actions, not promises. Follow our progression as we capture the decentralized web.
          </p>
        </div>

        {/* Interactive Layout with Vertical Progress Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12 relative">
          
          {/* Left Side: Timeline selectors with glowing vertical path (5 cols) */}
          <div className="lg:col-span-5 relative pl-8 md:pl-12 flex flex-col gap-6" ref={triggerContainerRef}>
            
            {/* Timeline Track (Gray) */}
            <div className="absolute left-[15px] md:left-[23px] top-4 bottom-4 w-1 bg-white/10 rounded-full" />
            
            {/* Active Timeline Fill (GSAP Scroll-Animated) */}
            <div 
              ref={progressBarRef}
              className="absolute left-[15px] md:left-[23px] top-4 w-1 rounded-full bg-gradient-to-b from-red-600 to-yellow-500 shadow-[0_0_15px_rgba(203,33,44,0.8)]"
              style={{ height: '0%' }}
            />

            {PHASES.map((phase, idx) => {
              const isActive = idx === activePhase;
              return (
                <button
                  key={phase.number}
                  onClick={() => setActivePhase(idx)}
                  className={`roadmap-selector w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-white/5 border-white/20 shadow-[0_0_30px_rgba(246,197,32,0.05)]' 
                      : 'bg-black/40 border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Dynamic Glowing dot inside the track path */}
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-black -translate-x-[29px] md:-translate-x-[37px] transition-all duration-500 z-20 ${
                    isActive 
                      ? 'bg-yellow-400 scale-125 shadow-[0_0_10px_rgba(246,197,32,0.8)]' 
                      : phase.status === 'completed'
                      ? 'bg-green-500'
                      : 'bg-neutral-800'
                  }`} />

                  {/* Vertical left border indicator with layoutId animation */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeRoadmapBorder"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-yellow-500" 
                    />
                  )}

                  {/* Phase number */}
                  <span className={`text-3xl font-black transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/20'
                  }`}>
                    {phase.number}
                  </span>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {phase.title}
                      </h4>
                      {phase.status === 'completed' && (
                        <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                      )}
                      {phase.status === 'active' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-gray-400 font-medium">
                      {phase.subtitle}
                    </p>
                  </div>

                  {/* Icon badge */}
                  <div className={`p-3 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/10 border-white/20 scale-105' 
                      : 'bg-white/5 border-white/5 group-hover:border-white/10'
                  }`}>
                    {phase.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Active details pane (7 cols) */}
          <motion.div 
            layout
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-md relative min-h-[380px] flex flex-col justify-between"
          >
            {/* Background halo */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-black px-3.5 py-1.5 bg-white/5 border border-white/10 text-yellow-400 rounded-lg tracking-widest uppercase">
                    Phase {PHASES[activePhase].number}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    PHASES[activePhase].status === 'completed' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : PHASES[activePhase].status === 'active' 
                      ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' 
                      : 'bg-white/5 text-gray-400 border border-white/10'
                  }`}>
                    {PHASES[activePhase].status.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-2">
                  {PHASES[activePhase].title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 font-medium">
                  {PHASES[activePhase].subtitle}
                </p>

                {/* Milestones Checklist */}
                <div className="flex flex-col gap-4">
                  {PHASES[activePhase].milestones.map((milestone, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className="mt-1 flex-shrink-0">
                        {PHASES[activePhase].status === 'completed' ? (
                          <div className="w-4 h-4 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center text-[10px] text-green-400 font-bold">
                            ✓
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[9px] text-yellow-400 font-bold group-hover/item:border-yellow-400/50 transition-colors">
                            •
                          </div>
                        )}
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed font-medium group-hover/item:text-white transition-colors duration-200">
                        {milestone}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom context status */}
            <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-xs text-gray-400 font-medium">
              <span>Status Check</span>
              <span className="text-white font-bold">
                {PHASES[activePhase].status === 'completed' 
                  ? 'All milestones reached' 
                  : PHASES[activePhase].status === 'active' 
                  ? 'Milestones in execution' 
                  : 'Awaiting Phase 2 completion'}
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
