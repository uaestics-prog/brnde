import { Check, ArrowRight, CheckCircle2, Star } from 'lucide-react';

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-[#0D0D11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Your <span className="font-serif italic text-brand-purple font-normal">linkedin brand</span>, designed in four clear, strategic steps
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Your brand isn't just seen — it's felt. Brnde ensures every piece of your LinkedIn identity resonates on a deeper level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 shadow-sm border border-white/10 flex flex-col h-full relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <div className="w-4 h-4 rounded-full border-2 border-brand-purple" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Deep-Dive<br />Brand <span className="font-serif italic font-normal text-brand-purple">Research</span></h3>
            <div className="mt-8 flex-grow">
              <div className="space-y-3">
                <div className="bg-white/5 rounded-full px-4 py-2 text-xs sm:text-sm flex justify-between items-center text-gray-400">Market Analysis <Check className="w-4 h-4 text-brand-purple" /></div>
                <div className="bg-white/5 rounded-full px-4 py-2 text-xs sm:text-sm flex justify-between items-center text-gray-400">Competitor Scan <Check className="w-4 h-4 text-brand-purple" /></div>
                <div className="bg-white/5 rounded-full px-4 py-2 text-xs sm:text-sm flex justify-between items-center text-gray-400">Positioning Map <Check className="w-4 h-4 text-brand-purple" /></div>
              </div>
              <div className="mt-4 bg-brand-purple text-white rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium flex justify-between items-center shadow-lg shadow-brand-purple/20">
                Strategy Direction <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 shadow-sm border border-white/10 flex flex-col h-full relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <div className="w-4 h-4 rounded-sm border-2 border-brand-purple" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Story &<br />Message <span className="font-serif italic font-normal text-brand-purple">Crafting</span></h3>
            <div className="mt-8 flex-grow relative min-h-[140px]">
              <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="px-3 py-1.5 border border-white/10 rounded-lg text-[10px] sm:text-xs font-medium bg-[#0D0D11] mb-2 shadow-sm text-white inline-block">Value Definition</div>
                  <div className="w-0.5 h-4 bg-white/10 mx-auto"></div>
                  <div className="px-3 py-1.5 border border-white/10 rounded-lg text-[10px] sm:text-xs font-medium bg-[#0D0D11] shadow-sm mt-2 text-white inline-block">Content Pillars</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 shadow-sm border border-white/10 flex flex-col h-full relative overflow-hidden group hover:border-brand-purple/30 transition-colors">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-brand-purple" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">High-Impact<br />Content <span className="font-serif italic font-normal text-brand-purple">Design</span></h3>
            <div className="mt-8 flex-grow">
              <div className="relative h-full min-h-[140px]">
                <div className="absolute top-0 right-0 px-3 py-1 border border-white/10 bg-[#0D0D11] rounded-full text-[10px] sm:text-xs shadow-sm z-10 text-white">Visual Identity</div>
                <div className="absolute bottom-4 left-0 px-3 py-1 border border-white/10 bg-[#0D0D11] rounded-full text-[10px] sm:text-xs shadow-sm z-10 text-white">UI / UX Design</div>
                <svg className="absolute inset-0 w-full h-full text-white/5 stroke-current" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 10 90 Q 50 10 90 90" fill="none" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-brand-gradient text-white rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col h-full relative overflow-hidden group">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-white fill-current" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Profile Optimization<br />& Final <span className="font-serif italic font-normal text-purple-200">Build</span></h3>
            <div className="mt-8 flex-grow">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-white"><CheckCircle2 className="w-5 h-5 text-purple-200 shrink-0" /> Profile Copy</li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-white"><CheckCircle2 className="w-5 h-5 text-purple-200 shrink-0" /> Section Polish</li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-white"><CheckCircle2 className="w-5 h-5 text-purple-200 shrink-0" /> Visual Integration</li>
                <li className="flex items-center gap-3 text-xs sm:text-sm font-medium"><CheckCircle2 className="w-5 h-5 text-green-300 shrink-0" /> Final Setup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
