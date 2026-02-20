'use client';

import { TrendingDown, TrendingUp } from 'lucide-react';
import FloatingLines from './FloatingLines';

export function Tokenomics() {
  return (
    <>
      <section className="relative w-full py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Container for the main content */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-12 gap-8">
            {/* Left side - Title and Max Supply */}
            <div className="flex flex-col gap-6 flex-grow">
              <div>
                <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Tokenomics
                </h2>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light text-white">
                  Max Supply: 1,000,000,000 NEKO
                </p>
              </div>
            </div>

            {/* Divider - Horizontal on mobile, Vertical on desktop */}
            <div className="hidden md:flex md:flex-shrink-0 md:h-40 md:w-1">
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, #cb212c, #f6c520)',
                  boxShadow: '0 0 20px rgba(203, 33, 44, 0.6), 0 0 40px rgba(246, 197, 32, 0.4)',
                  filter: 'drop-shadow(0 0 10px rgba(203, 33, 44, 0.8))',
                }}
              />
            </div>

            {/* Horizontal divider for mobile */}
            <div className="md:hidden h-1 w-full">
              <div 
                className="w-full h-full rounded-full"
                style={{
                  background: 'linear-gradient(to right, #cb212c, #f6c520)',
                  boxShadow: '0 0 20px rgba(203, 33, 44, 0.6), 0 0 40px rgba(246, 197, 32, 0.4)',
                  filter: 'drop-shadow(0 0 10px rgba(203, 33, 44, 0.8))',
                }}
              />
            </div>

            {/* Right side - Tax Info */}
            <div className="flex flex-col md:flex-col gap-6 md:text-right md:flex-shrink-0 text-center">
              <div className="flex md:flex-row-reverse md:justify-end flex-col items-center md:items-center gap-3">
                <TrendingUp size={48} className="text-white" strokeWidth={1.5} />
                <p className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-200 text-white">
                  0% Buy Tax
                </p>
              </div>
              <div className="flex md:flex-row-reverse md:justify-end flex-col items-center md:items-center gap-3">
                <TrendingDown size={48} className="text-white" strokeWidth={1.5} />
                <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-200 text-white">
                  0% Sell Tax
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Lines Section */}
      <section className="relative w-full h-40 sm:h-48 md:h-56 bg-gradient-to-b from-black via-black to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
        <FloatingLines 
          enabledWaves={["middle"]}
          lineCount={6}
          lineDistance={200}
          bendRadius={15.5}
          bendStrength={1.5}
          interactive={true}
          parallax={true}
          linesGradient={["#cb212c", "#f6c520"]}
          mixBlendMode="screen"
          middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0 }}
        />
      </section>
    </>
  );
}
