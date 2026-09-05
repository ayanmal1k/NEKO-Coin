'use client';

import { useState, useEffect } from 'react';

const WALLET_EVENT = 'neko-wallet-state-changed';
const STORAGE_KEY = 'neko-wallet-connected';

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    // Check initial state
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setIsConnected(true);
      setWalletAddress(saved);
    }

    const handleStateChange = () => {
      const currentSaved = localStorage.getItem(STORAGE_KEY);
      if (currentSaved) {
        setIsConnected(true);
        setWalletAddress(currentSaved);
      } else {
        setIsConnected(false);
        setWalletAddress(null);
      }
    };

    window.addEventListener(WALLET_EVENT, handleStateChange);
    return () => {
      window.removeEventListener(WALLET_EVENT, handleStateChange);
    };
  }, []);

  const connectWallet = () => {
    if (isConnected || isConnecting) return;
    setIsConnecting(true);
    
    // Simulate connection lag
    setTimeout(() => {
      const mockAddress = '0x' + Array.from({ length: 40 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      const formattedAddress = `${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`;
      
      localStorage.setItem(STORAGE_KEY, formattedAddress);
      setIsConnected(true);
      setWalletAddress(formattedAddress);
      setIsConnecting(false);
      
      // Dispatch event to other instances
      window.dispatchEvent(new Event(WALLET_EVENT));
    }, 1200);
  };

  const disconnectWallet = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsConnected(false);
    setWalletAddress(null);
    window.dispatchEvent(new Event(WALLET_EVENT));
  };

  return {
    isConnected,
    walletAddress,
    isConnecting,
    connectWallet,
    disconnectWallet
  };
}
