import mahiHeadshot from '../assets/mahi headshot.jfif';

export function Mastermind() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0D1117] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20">
        <div className="w-full md:w-[40%] lg:w-[35%] relative z-10">
          <div className="relative group max-w-sm mx-auto">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-brand-purple/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <img 
              src={mahiHeadshot} 
              alt="Mahi - Brand Design Mastermind" 
              className="w-full h-auto rounded-[2rem] object-cover aspect-[4/5] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 relative z-10" 
            />
          </div>
        </div>

        <div className="w-full md:w-[60%] lg:w-1/2 z-10 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Meet the <span className="font-serif italic text-white font-normal">mastermind</span>
          </h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-medium">
              Hi, I'm Mahi. I'm a senior designer and personal branding specialist with over <strong className="text-white font-bold">7 years of experience helping 100+ global clients</strong> grow on LinkedIn.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-medium">
              When I'm not designing, you'll usually find me enjoying music, helping people, or spending time with my family.
            </p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <h4 className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">Find me on:</h4>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 px-8 py-3.5 border border-white/10 rounded-full hover:bg-white/5 hover:border-brand-purple/30 hover:text-white transition-all text-sm font-bold text-gray-400 tracking-wider shadow-sm"
              >
                LINKEDIN
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 px-8 py-3.5 border border-white/10 rounded-full hover:bg-white/5 hover:border-brand-purple/30 hover:text-white transition-all text-sm font-bold text-gray-400 tracking-wider shadow-sm"
              >
                BEHANCE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
