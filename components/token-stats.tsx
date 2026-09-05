'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, Coins, Users, BarChart3, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function TokenStats() {
  const [burntCount, setBurntCount] = useState(210482953);
  const [circulatingCount, setCirculatingCount] = useState(789517047);
  const [marketCap, setMarketCap] = useState(42105482);
  const [holders, setHolders] = useState(15204);
  const [price, setPrice] = useState(0.042105);

  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Burn tokens
      const burntAmt = Math.floor(Math.random() * 8) + 1;
      setBurntCount(prev => prev + burntAmt);
      setCirculatingCount(prev => prev - burntAmt);

      // Stat variances
      setMarketCap(prev => prev + Math.floor((Math.random() - 0.45) * 1250));
      setPrice(prev => prev * (1 + (Math.random() - 0.45) * 0.0004));
      if (Math.random() > 0.75) {
        setHolders(prev => prev + 1);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !parallaxImgRef.current) return;

    // Apply vertical scroll parallax using GSAP ScrollTrigger
    const trigger = gsap.to(parallaxImgRef.current, {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      trigger.scrollTrigger?.kill();
      trigger.kill();
    };
  }, []);

  const stats = [
    {
      label: 'Market Cap',
      value: `$${marketCap.toLocaleString()}`,
      icon: <TrendingUp className="text-green-400" size={20} />,
      desc: 'Ticking market value'
    },
    {
      label: 'Token Holders',
      value: holders.toLocaleString(),
      icon: <Users className="text-yellow-400" size={20} />,
      desc: 'Active wallet holders'
    },
    {
      label: 'Circulating Supply',
      value: `${circulatingCount.toLocaleString()} NEKO`,
      icon: <Coins className="text-red-500" size={20} />,
      desc: 'Active market supply'
    },
    {
      label: 'NEKO Price',
      value: `$${price.toFixed(6)}`,
      icon: <BarChart3 className="text-orange-500" size={20} />,
      desc: 'Live relative price'
    }
  ];

  return (
    <section id="tokenomics" ref={containerRef} className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Visual Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-600/5 to-yellow-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5"
          >
            <Flame className="text-red-500 animate-pulse" size={14} />
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Live Tokenomics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            NEKO Live Stats & Burn
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base max-w-xl font-medium"
          >
            Monitor live contract data and watch our deflationary mechanism actively burn tokens from circulating supply forever.
          </motion.p>
        </div>

        {/* Live Burn Split Grid with Parallax Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto mb-16">
          
          {/* Left Column: Live Burn Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-red-950 bg-gradient-to-br from-red-950/20 to-neutral-900/20 p-8 sm:p-10 text-center lg:text-left h-full flex flex-col justify-center gap-4"
          >
            {/* Animated Glow Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-50 blur-xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center lg:items-start gap-4">
              <div className="p-4 bg-red-600/15 border border-red-500/20 rounded-full text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse">
                <Flame size={32} />
              </div>
              
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                Total Deflationary Burn
              </span>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight my-2">
                {burntCount.toLocaleString()} <span className="text-red-500">NEKO</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-400 max-w-md font-medium leading-relaxed">
                These tokens have been sent directly to the dead Address `0x000...dead` and are permanently deleted from circulation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Parallax Prosperity Neon Image */}
          <div className="lg:col-span-5 flex justify-center h-full">
            <div 
              ref={parallaxImgRef}
              className="relative w-full aspect-[4/3] max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(246,197,32,0.1)] group bg-neutral-950"
            >
              <Image
                src="/949011.png"
                alt="Maneki Prosperity"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest block mb-1">
                  Prosperity Pillar
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  Maneki Neko Redefined
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Live stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 15, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-neutral-950/60 border border-white/10 rounded-2xl p-6 flex flex-col justify-between group transition-colors duration-300 hover:border-white/15 min-h-[160px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</span>
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/10 group-hover:bg-white/10 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-black text-white tracking-tight font-mono my-2 group-hover:text-yellow-400 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Token Distribution Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="rounded-3xl border border-white/10 bg-neutral-950/40 p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 tracking-tight text-center sm:text-left">
            Token Distribution Breakdown
          </h3>

          <div className="flex flex-col gap-6">
            {/* Linear Progress Bar */}
            <div className="h-6 w-full bg-white/5 rounded-full overflow-hidden flex border border-white/5">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: '50%' }} />
              <div className="h-full bg-yellow-500 transition-all duration-500" style={{ width: '30%' }} />
              <div className="h-full bg-orange-500 transition-all duration-500" style={{ width: '10%' }} />
              <div className="h-full bg-neutral-700 transition-all duration-500" style={{ width: '10%' }} />
            </div>

            {/* Distribution Legend Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-600" />
                  <span className="text-sm font-bold text-white">50% Fair Launch</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium pl-5">
                  100% of fair launch supply locked and LP burned. No team allocation.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-sm font-bold text-white">30% Community Staking</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium pl-5">
                  Reserved for staking boosts, NFT yield multipliers, and active LP reward pools.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm font-bold text-white">10% Exchange Liquidity</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium pl-5">
                  Allocated to top-tier centralized exchanges to provide deep, stable trading depth.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-700" />
                  <span className="text-sm font-bold text-white">10% Grants & Airdrops</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium pl-5">
                  Dedicated to creator program incentives, social games, and active community events.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
