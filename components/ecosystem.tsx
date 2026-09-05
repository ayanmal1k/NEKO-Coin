'use client';

import { useState, useRef, MouseEvent, useEffect } from 'react';
import Image from 'next/image';
import { RefreshCw, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EcosystemCardProps {
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
  imageSrc: string;
  linkText?: string;
  linkHref?: string;
  cardIndex: number;
}

function EcosystemCard({ title, description, badge, icon, imageSrc, linkText = 'Learn More', linkHref = '#', cardIndex }: EcosystemCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  useEffect(() => {
    if (!cardRef.current) return;

    // Custom parallax scroll settings for each card (scrub based scroll up and down)
    const offsets = [40, 10, 60]; // Staggered starting vertical offsets
    const speed = offsets[cardIndex % 3];

    const anim = gsap.fromTo(cardRef.current, 
      { y: speed },
      { 
        y: -speed,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1 // Smooth scrub
        }
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [cardIndex]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ecosystem-card relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-6 sm:p-8 transition-all duration-300 hover:border-white/20 group min-h-[540px] h-auto pb-8 flex flex-col justify-between"
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(246, 197, 32, 0.1) 0%, rgba(203, 33, 44, 0.05) 50%, transparent 100%)`,
        }}
      />

      {/* Decorative Glow Ring */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl border border-transparent transition-all duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(246, 197, 32, 0.4) 0%, rgba(203, 33, 44, 0.2) 60%, transparent 100%)`
            : '',
          WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Card Content */}
      <div className="flex flex-col h-full justify-between relative z-10 gap-4">
        <div>
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5 transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
            {badge && (
              <span className="text-[10px] font-bold tracking-widest uppercase bg-gradient-to-r from-red-600 to-yellow-500 text-white px-3 py-1 rounded-full border border-white/10 shadow-[0_0_10px_rgba(203,33,44,0.3)]">
                {badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Embedded Cyberpunk Image Showcase (No crop, object-contain on a padded canvas frame) */}
        <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-white/5 bg-neutral-950/60 p-3 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Neon vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Bottom Link */}
        <a
          href={linkHref}
          className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-white hover:text-yellow-400 transition-colors duration-300 w-fit group/link"
        >
          <span>{linkText}</span>
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

export function Ecosystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header scroll trigger reveal
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="ecosystem" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div ref={headerRef} className="flex flex-col gap-4 mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Feline Universe</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              An Ecosystem <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                With Nine Lives.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-base max-w-sm md:mb-2 font-medium">
            NEKO is building a decentralized suite of utilities to ensure the community rules the internet. One claw-step at a time.
          </p>
        </div>

        {/* 3-Column Grid with GSAP Parallax Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <EcosystemCard
            title="NekoSwap"
            cardIndex={0}
            description="The sleekest aggregator in the ecosystem. Swap your favorite tokens at ultra-low slippage with auto-routed liquidity."
            icon={<RefreshCw className="text-red-500" size={24} />}
            imageSrc="/ChatGPT Image Feb 14_ 2026_ 12_59_04 PM.png"
            badge="Popular"
            linkText="Launch Swap"
            linkHref="#how-to-buy"
          />

          <EcosystemCard
            title="Neko DAO"
            cardIndex={1}
            description="No venture capitalists. No shadow team. Every token holder has a vote. Lock your NEKO, submit proposals, and decide on community actions."
            icon={<ShieldAlert className="text-yellow-400" size={24} />}
            imageSrc="/ChatGPT Image Feb 15_ 2026_ 08_03_52 PM.png"
            badge="Governance"
            linkText="Read Proposal"
          />

          <EcosystemCard
            title="Lucky Neko NFTs"
            cardIndex={2}
            description="A premium collection of 10,000 uniquely algorithm-generated 3D Maneki-neko avatars. Stake to boost your token yield."
            icon={<Sparkles className="text-orange-500" size={24} />}
            imageSrc="/ChatGPT Image Feb 16_ 2026_ 01_59_13 AM.png"
            badge="Staking Active"
            linkText="View Collection"
          />
        </div>
      </div>
    </section>
  );
}
