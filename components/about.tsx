'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from './LightRays';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !catRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on the floating cat image
      gsap.to(catRef.current, {
        y: -100,
        rotate: -10,
        scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5"
    >
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              About Neko
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-gray-300 lg:text-left font-medium"
            >
              <p>
                Neko means "cat" in Japanese. In Japan and across Asia, cats are symbols of luck, protection, and prosperity. The Maneki-neko is one of the most recognized symbols of good fortune and has represented wealth and positivity for generations.
              </p>

              <p>
                For decades, cats have shaped internet culture and powered memes around the world. They capture attention and create movements. In crypto, however, dogs have dominated the space.
              </p>

              <p className="font-extrabold text-white bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent w-fit">
                Dogs had their moment. Now it's the cat's turn. Neko is more than a meme. It's a decentralized movement driven by its holders.
              </p>
            </motion.div>

            {/* Floating Image */}
            <div className="flex items-center justify-center">
              <div ref={catRef} className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow background - red/orange on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, rgba(203, 33, 44, 0.4) 0%, rgba(246, 165, 50, 0.2) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Floating image container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/floating.png"
                    alt="Neko Cat"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
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

