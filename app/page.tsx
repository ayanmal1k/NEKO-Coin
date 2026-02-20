import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Tokenomics } from '@/components/tokenomics';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
    </main>
  );
}
