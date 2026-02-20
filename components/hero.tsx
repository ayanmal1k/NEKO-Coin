'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import FloatingLines from './FloatingLines';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full pt-32 pb-12 overflow-hidden flex items-center justify-center bg-black">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            {/* Heading */}
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl md:text-5xl lg:text-7xl  text-white ">
              <span className='font-bold'>Neko</span>  is a Fully Decentralized Memecoin. <br /> No Owner. Just Community.
              </h1>
             
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white hover:bg-white/90 text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105 w-fit">
                Buy Now
                <div className="bg-black rounded-full p-1 flex items-center justify-center">
                  <ArrowRight size={20} className="text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right - Logo */}
          <div className="flex items-center justify-center z-10">
            <div className="relative w-92 h-92 sm:w-108 sm:h-108 md:w-120 md:h-120 lg:w-96 lg:h-96 aspect-square">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl" />

              {/* Logo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/pointing.png"
                  alt="Neko Logo"
                  width={600}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* Floating animation */}
              <style>{`
                @keyframes floating {
                  0%, 100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-20px);
                  }
                }
                .floating-logo {
                  animation: floating 3s ease-in-out infinite;
                }
              `}</style>
              <div className="absolute inset-0 floating-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
