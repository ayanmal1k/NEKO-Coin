'use client';

import Image from 'next/image';
import { Menu, X, Wallet, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useWallet } from '@/hooks/use-wallet';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, walletAddress, isConnecting, connectWallet, disconnectWallet } = useWallet();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_2-removebg-preview-kRW537E1VIoeZVb4RJMJ1IqpXtHWGG.png"
                alt="Neko"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">Neko</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
              About
            </a>
            <a href="#ecosystem" className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
              Ecosystem
            </a>
            <a href="#how-to-buy" className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
              How to Buy
            </a>
            <a href="#tokenomics" className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-white/70 hover:text-white transition-colors duration-200 text-sm font-medium">
              Roadmap
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isConnected ? (
              <div className="relative group">
                <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(203,33,44,0.3)]">
                  <Wallet size={16} />
                  <span>{walletAddress}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-black/90 border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 backdrop-blur-md p-1 shadow-2xl">
                  <button 
                    onClick={disconnectWallet}
                    className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg text-sm transition-colors duration-200 text-left font-medium"
                  >
                    <LogOut size={16} />
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={connectWallet}
                disabled={isConnecting}
                className="relative overflow-hidden group bg-transparent border border-white/20 hover:border-white text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <Wallet size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}

            <a 
              href="#how-to-buy" 
              className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full font-semibold transition transform hover:scale-105 active:scale-95"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-white/5 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#about" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition py-2 text-base font-medium">
                About
              </a>
              <a href="#ecosystem" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition py-2 text-base font-medium">
                Ecosystem
              </a>
              <a href="#how-to-buy" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition py-2 text-base font-medium">
                How to Buy
              </a>
              <a href="#tokenomics" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition py-2 text-base font-medium">
                Tokenomics
              </a>
              <a href="#roadmap" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition py-2 text-base font-medium">
                Roadmap
              </a>
              
              {isConnected ? (
                <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
                  <div className="flex items-center justify-between text-white/95 px-2 py-2">
                    <span className="flex items-center gap-2 text-sm"><Wallet size={16} /> {walletAddress}</span>
                    <button 
                      onClick={() => {
                        disconnectWallet();
                        setIsOpen(false);
                      }}
                      className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1 font-semibold"
                    >
                      <LogOut size={16} /> Disconnect
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => {
                    connectWallet();
                    setIsOpen(false);
                  }}
                  disabled={isConnecting}
                  className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition w-full flex items-center justify-center gap-2"
                >
                  <Wallet size={18} />
                  <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
