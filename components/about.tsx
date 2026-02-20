'use client';

import Image from 'next/image';
import LightRays from './LightRays';

export function About() {
  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Light Rays Background */}
      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#f6ab20"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Container for the centered content */}
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Title */}
          <div>
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              About Neko
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl">
            {/* Text Content */}
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-gray-200 lg:text-left">
              <p>
                Neko means "cat" in Japanese. In Japan and across Asia, cats are symbols of luck, protection, and prosperity. The Maneki-neko is one of the most recognized symbols of good fortune and has represented wealth and positivity for generations.
              </p>

              <p>
                For decades, cats have shaped internet culture and powered memes around the world. They capture attention and create movements. In crypto, however, dogs have dominated the space.
              </p>

              <p className="font-semibold text-white">
                Dogs had their moment. Now it's the cat's turn. Neko is more than a meme. It's a decentralized movement driven by its holders.
              </p>
            </div>

            {/* Floating Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow background - red/orange on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(203, 33, 44, 0.4) 0%, rgba(246, 165, 50, 0.2) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Floating image container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <style>{`
                    @keyframes floatingAbout {
                      0%, 100% {
                        transform: translateY(0px) scale(1);
                      }
                      50% {
                        transform: translateY(-20px) scale(1.02);
                      }
                    }
                    .floating-about {
                      animation: floatingAbout 4s ease-in-out infinite;
                    }
                  `}</style>

                  <Image
                    src="/floating.png"
                    alt="Neko Cat"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain floating-about"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
