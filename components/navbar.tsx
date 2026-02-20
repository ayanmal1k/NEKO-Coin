'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
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
            <span className="text-xl font-bold text-white">Neko</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Community
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Tokenomics
            </a>
            <a href="#" className="text-white/70 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            
            <button className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full font-semibold transition">
              Buy Now
            </button>
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
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#" className="text-white/70 hover:text-white transition">
                About
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Community
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Tokenomics
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Contact
              </a>
              <button className="bg-white hover:bg-white/90 text-black px-6 py-2 rounded-full font-semibold transition w-full">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
