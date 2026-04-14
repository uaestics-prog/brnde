import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReviewCards } from './components/ReviewCards';
import { Process } from './components/Process';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Portfolio } from './components/Portfolio';
import { Mastermind } from './components/Mastermind';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-[#09090B] text-white selection:bg-brand-purple/30 selection:text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ReviewCards />
        <Process />
        <Stats />
        <Expertise />
        <Portfolio />
        <Mastermind />
        <Testimonials />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
