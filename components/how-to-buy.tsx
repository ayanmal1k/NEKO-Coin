'use client';

import { motion } from 'framer-motion';
import { Wallet, CircleDollarSign, Compass, ArrowRightRight, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const STEPS = [
  {
    step: '01',
    title: 'Create a Wallet',
    description: 'Download MetaMask, Trust Wallet, or Phantom from the official app store or extension store. Set up your wallet and secure your seed phrase safely.',
    icon: <Wallet className="text-red-500" size={24} />
  },
  {
    step: '02',
    title: 'Acquire SOL or ETH',
    description: 'Purchase Solana (SOL) or Ethereum (ETH) from an exchange (like Coinbase or Binance), and transfer it directly to your newly created wallet address.',
    icon: <CircleDollarSign className="text-yellow-400" size={24} />
  },
  {
    step: '03',
    title: 'Connect to a DEX',
    description: 'Go to Raydium/Jupiter (for SOL) or Uniswap (for ETH). Click "Connect Wallet" at the top right of the page and authorize the connection.',
    icon: <Compass className="text-orange-500" size={24} />
  },
  {
    step: '04',
    title: 'Swap for NEKO',
    description: 'Paste the official NEKO contract address, select the amount of SOL/ETH you want to exchange, set slippage to 0.5%, and click swap!',
    icon: <ArrowRight className="text-yellow-400" size={24} />
  }
];

export function HowToBuy() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xNEKOCo1nFelineHegemonyLuckProtection9Lives';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Quick Start</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            How To Buy NEKO
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base max-w-xl font-medium"
          >
            Joining the feline revolution is simple. Just follow these four easy steps to secure your NEKO tokens.
          </motion.p>
        </div>

        {/* Contract Address Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Official Contract Address</span>
            <span className="font-mono text-sm sm:text-base text-gray-300 select-all break-all">{contractAddress}</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-white hover:bg-yellow-400 hover:text-black text-black px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg cursor-pointer transform active:scale-95"
          >
            {copied ? (
              <>
                <Check size={16} className="text-green-600" />
                <span>Copied Address</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 150, damping: 15, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 sm:p-8 flex flex-col justify-between h-[280px] group transition-colors duration-300 hover:border-yellow-500/20"
            >
              {/* Card gradient background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-3xl font-black text-white/10 group-hover:text-yellow-400/20 transition-colors duration-300">
                    {step.step}
                  </span>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-yellow-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed relative z-10 font-medium">
                  {step.description}
                </p>
              </div>

              <div className="text-[10px] font-bold tracking-widest text-white/30 uppercase mt-4 relative z-10">
                Step {step.step} Complete
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
