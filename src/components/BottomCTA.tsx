import mahiHeadshot from '../assets/mahi headshot.jfif';
import mahiProfile from '../assets/mahi-profile.png';

export function BottomCTA() {
  return (
    <section className="bg-[#09090B] pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-purple text-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(168,85,247,0.4)]">

          <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-sm border border-white/10 mx-auto lg:mx-0">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-7 h-7 md:w-[35px] md:h-[35px] rounded-full border border-brand-purple grayscale" alt="avatar" />
                ))}
              </div>
              <div className="text-left leading-tight md:leading-[17px]">
                Trusted by <span className="bg-white/20 px-1 rounded-sm font-black text-white">100+</span> <br />
                Creators and Founders
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              Give Your <br className="hidden sm:block" />
              Brand the <br className="hidden sm:block" />
              Spotlight <br className="sm:hidden" />
              It Deserves
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <a 
                href="#chat" 
                className="group flex items-center gap-3 bg-[#4C1D95] text-white py-3 pr-8 pl-3 rounded-full font-black text-lg sm:text-xl border border-white/10 hover:bg-[#3d1777] transition-all hover:scale-105 shadow-2xl shadow-black/30"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center p-0.5 overflow-hidden border border-white/20 shrink-0">
                  <img src={mahiHeadshot} alt="Mahi" className="w-full h-full rounded-full object-cover transition-transform group-hover:scale-110" />
                </div>
                <div className="text-left leading-tight">
                  Chat with <br /> Mahi on WhatsApp
                </div>
              </a>
            </div>

            <p className="mt-8 text-sm md:text-base text-purple-200 flex items-center gap-2 justify-center lg:justify-start font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
              Or Book a 1:1 call for later
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl transform lg:rotate-3 hover:rotate-0 transition-all duration-700 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] rounded-[3rem] overflow-hidden group">
              <img 
                src={mahiProfile} 
                alt="Mahi's Premium Profile Design" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-black opacity-20 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
