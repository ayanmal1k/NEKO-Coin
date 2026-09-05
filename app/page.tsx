import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Ecosystem } from '@/components/ecosystem';
import { HowToBuy } from '@/components/how-to-buy';
import { TokenStats } from '@/components/token-stats';
import { Roadmap } from '@/components/roadmap';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <Ecosystem />
      <HowToBuy />
      <div id="tokenomics">
        <TokenStats />
      </div>
      <Roadmap />
      <Footer />
    </main>
  );
}





