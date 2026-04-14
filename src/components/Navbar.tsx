import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/brndee_logo.jfif';
import mahiHeadshot from '../assets/mahi headshot.jfif';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Process', href: '#process' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Works', href: '#works' },
  { name: 'About me', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Brnde Logo" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-xl tracking-tight text-white">Brnde</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-brand-purple transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="#chat" 
              className="flex items-center gap-2 bg-white/10 text-white py-[6px] px-[8px] rounded-full hover:bg-white/20 transition-colors border border-white/10"
            >
              <img src={mahiHeadshot} alt="Mahi" className="w-10 h-10 rounded-full border border-gray-600 object-cover" />
              <span className="text-sm font-medium">Chat with Mahi</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-20 h-[calc(100vh-5rem)] bg-[#09090B]/90 backdrop-blur-xl z-40 md:hidden transition-transform duration-500 transform border-t border-white/5",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full px-6 pt-10 pb-10 space-y-4 overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-lg font-medium text-white hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <a 
              href="#chat" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-purple text-white rounded-2xl shadow-lg shadow-brand-purple/20 font-bold"
            >
              <img src={mahiHeadshot} alt="Mahi" className="w-10 h-10 rounded-full object-cover border-2 border-white/20" />
              <span>Chat with Mahi</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
