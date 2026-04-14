import { ArrowRight, CalendarDays, Zap, Star } from 'lucide-react';
import sdIcon from '../assets/sd.svg';

export function Hero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-x-hidden">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-purple text-[10px] md:text-[11px] font-semibold uppercase tracking-wider mb-8 border border-white/5">
        <div className="flex -space-x-2 md:-space-x-3">
          {[1, 2, 3, 4].map(i => (
            <img
              key={i}
              src={`https://i.pravatar.cc/150?u=${i}`}
              className="w-7 h-7 md:w-[35px] md:h-[35px] rounded-full border border-[#09090B] grayscale transition-all hover:grayscale-0"
              alt="avatar"
            />
          ))}
        </div>
        <div className="text-left leading-tight md:leading-[17px]">
          Trusted by <span className="bg-gradient-to-br from-brand-purple to-transparent px-1 rounded-sm font-black text-white">100+</span> <br />
          Creators and FFFounders
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
        The Home of Premium <br className="hidden sm:block" />
        Linked<span className="inline-flex items-center justify-center text-white px-2 py-0.5 sm:px-3 sm:py-1 mx-1 rounded-lg text-[0.85em] leading-none transform -translate-y-1 bg-brand-gradient">in</span> Brand <br className="sm:hidden" />
        <span className="font-serif italic text-brand-purple font-normal">Design</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4">
        LinkedIn's <strong className="text-white font-semibold">#1 brand design</strong> agency. <br className="md:hidden" />
        All your LinkedIn design covered.
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
          3 spots left this month
        </div>

        <a
          href="#schedule"
          className="group inline-flex items-center gap-2 bg-brand-purple text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-brand-purple/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-purple/20 border-4 border-black/20"
        >
          <CalendarDays className="w-5 h-5" />
          Schedule a 1:1 call
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-12 text-[13px] sm:text-[15px] text-gray-400 font-medium max-w-3xl">
          <span className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-[35px] sm:h-[35px] border border-brand-purple/30 rounded-lg flex items-center justify-center shrink-0">
              <img
                src={sdIcon}
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(91%) saturate(3626%) hue-rotate(247deg) brightness(101%) contrast(102%)' }}
              />
            </div>
            Senior designers
          </span>
          <span className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-[35px] sm:h-[35px] border border-brand-purple/30 rounded-lg flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple" />
            </div>
            Fast Delivery
          </span>
          <span className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-[35px] sm:h-[35px] border border-brand-purple/30 rounded-lg flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-purple" />
            </div>
            100+ Brands
          </span>
        </div>
      </div>
    </section>
  );
}
