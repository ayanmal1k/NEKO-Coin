'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Twitter, Send, Disc, Sparkles, CheckCircle2 } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setErrorMsg('Please enter your email.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="relative w-full bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          
          {/* Logo & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_2-removebg-preview-kRW537E1VIoeZVb4RJMJ1IqpXtHWGG.png"
                  alt="Neko"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-wider">Neko</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              The maneki-neko of Web3. Restoring power to internet culture, powered 100% by the community. No owners, no fees. Just feline power.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/5 hover:border-yellow-500/30 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/5 hover:border-yellow-500/30 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Send size={18} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/5 hover:border-yellow-500/30 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Disc size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                About Neko
              </a>
              <a href="#ecosystem" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Ecosystem
              </a>
              <a href="#how-to-buy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                How to Buy
              </a>
              <a href="#meme-hub" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Meme Gallery
              </a>
              <a href="#tokenomics" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Tokenomics
              </a>
              <a href="#roadmap" className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
                Roadmap Timeline
              </a>
            </div>
          </div>

          {/* Newsletter Box (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl backdrop-blur-sm relative">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="text-yellow-400" size={16} />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Join the newsletter</h4>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-medium mb-2">
              Subscribe to get claw-updates on drops, listings, and DAO decisions.
            </p>

            {status === 'success' ? (
              <div className="bg-green-500/5 border border-green-500/20 p-4 rounded-xl flex items-center gap-3 text-green-400 text-xs font-bold animate-in fade-in duration-300">
                <CheckCircle2 size={18} className="flex-shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter email address"
                    className="w-full bg-white/5 border border-white/10 focus:border-yellow-500/50 rounded-xl px-4 py-3 pl-10 text-sm text-white focus:outline-none focus:ring-0 transition-colors placeholder-gray-500 font-medium"
                  />
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
                
                {status === 'error' && (
                  <span className="text-[10px] text-red-500 font-extrabold ml-1 uppercase tracking-wider">
                    {errorMsg}
                  </span>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white hover:bg-yellow-400 hover:text-black text-black text-xs font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/sub cursor-pointer disabled:opacity-50"
                >
                  <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight size={14} className="group-hover/sub:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Lower Footer: Legal & Giant Typography */}
        <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-semibold tracking-wider uppercase">
          <span>&copy; {new Date().getFullYear()} Neko Pack. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Disclaimer
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Use
            </a>
          </div>
        </div>

        {/* Huge Typographic Wordmark at bottom */}
        <div className="w-full text-center mt-16 select-none relative flex items-center justify-center">
          <motion.h2
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            whileHover={{ 
              scale: 1.05,
              opacity: 1,
              backgroundImage: 'linear-gradient(to right, #cb212c, #f68b20, #f6c520)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px rgba(246, 197, 32, 0.4)',
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            className="text-[14vw] font-black tracking-tighter text-white/5 leading-none cursor-default transition-all duration-700 select-none bg-gradient-to-r from-white/10 to-white/10 bg-clip-text"
          >
            NEKO
          </motion.h2>
        </div>

      </div>
    </footer>
  );
}
