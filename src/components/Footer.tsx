import logo from '../assets/brndee_logo.jfif';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#030014] pt-20 pb-10 text-white/40 text-sm border-t border-white/5 relative z-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16 px-4">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left max-w-sm">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Brnde Logo" className="w-10 h-10 rounded-full object-cover shadow-lg border border-white/10" />
              <span className="font-black text-white text-2xl tracking-tighter">Brnde</span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed italic">
              Empowering creators and founders to build <br className="hidden md:block" />
              premium, high-converting LinkedIn personal brands.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black text-white tracking-[0.2em] uppercase mb-1">Company</h4>
              <a href="#process" className="hover:text-white transition-colors font-bold">Process</a>
              <a href="#works" className="hover:text-white transition-colors font-bold">Works</a>
              <a href="#about" className="hover:text-white transition-colors font-bold">About us</a>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h4 className="text-[10px] font-black text-white tracking-[0.2em] uppercase mb-1">Contact</h4>
              <a href="#chat" className="hover:text-white transition-colors font-bold">WhatsApp</a>
              <a href="#schedule" className="hover:text-white transition-colors font-bold">Schedule Call</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <div className="font-bold tracking-tight">
            Copyright © {currentYear} • <span className="text-white font-black">Brnde</span> • All rights reserved
          </div>
          <div className="flex gap-8 font-black text-[11px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}
