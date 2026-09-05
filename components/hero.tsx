'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingLines from './FloatingLines';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // GSAP Scroll Parallax
    const ctx = gsap.context(() => {
      // Parallax logo
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: 120,
          rotate: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Parallax text (slightly slower movement)
      if (textRef.current) {
        gsap.to(textRef.current, {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero"
      ref={sectionRef} 
      className="relative min-h-screen w-full pt-32 pb-12 overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Animated background with floating lines */}
      <FloatingLines 
        enabledWaves={["middle"]}
        lineCount={2}
        lineDistance={100}
        bendRadius={15.5}
        bendStrength={1.5}
        interactive={false}
        parallax={true}
        linesGradient={["#cb212c", "#f6c520"]}
        mixBlendMode="screen"
      />

      {/* Content on top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
          
          {/* Left Content */}
          <div ref={textRef} className="flex flex-col gap-8 lg:col-span-3">
            {/* Heading */}
            <div className="flex flex-col gap-1">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                className="text-4xl md:text-5xl lg:text-7xl text-white leading-tight"
              >
                <span className="font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">Neko</span> is a Fully Decentralized Memecoin. <br /> No Owner. Just Community.
              </motion.h1>
            </div>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a 
                href="#how-to-buy"
                className="bg-white hover:bg-yellow-400 hover:text-black text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition transform hover:scale-105 active:scale-95 w-fit group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(246,197,32,0.3)]"
              >
                <span>Buy Now</span>
                <div className="bg-black group-hover:bg-black rounded-full p-1.5 flex items-center justify-center transition-colors">
                  <ArrowRight size={18} className="text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right - Logo */}
          <div ref={logoRef} className="flex items-center justify-center z-10">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-500/10 rounded-full blur-3xl" />

              {/* Logo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/pointing.png"
                  alt="Neko Logo"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Floating keyframes logic */}
              <style>{`
                @keyframes floating {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-15px);
                  }
                }
                .floating-logo {
                  animation: floating 4s ease-in-out infinite;
                }
              `}</style>
              <div className="absolute inset-0 floating-logo pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

