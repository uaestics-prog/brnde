import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Can this branding really bring me more clients?", a: "Yes, an optimized LinkedIn profile works like a 24/7 landing page. By strategically positioning your expertise, you naturally attract your ideal target audience and convert them effectively." },
  { q: "How long does it take to see results from a LinkedIn rebrand?", a: "Most of our clients start seeing increased profile views and better engagement within the first 2-3 weeks of launching their new brand identity." },
  { q: "What's included in a complete LinkedIn profile redesign?", a: "It includes a custom banner, a professional headshot edit, optimized headline and about section, featured section design, and visual templates for your posts." },
  { q: "Will my LinkedIn branding work if I'm not a creator or influencer?", a: "Absolutely. Whether you're a founder, executive, or consultant, a strong personal brand builds trust with prospects, partners, and top talent." },
  { q: "What if I already have an established LinkedIn profile?", a: "We elevate it. We take what's working and refine it with premium visual design and high-converting copy that matches your current level of success." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#121217] rounded-[2rem] border border-white/5 overflow-hidden shadow-sm transition-all hover:border-white/10">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-[10px] sm:text-xs font-black text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5 uppercase tracking-widest">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="font-bold text-white text-base sm:text-xl group-hover:text-brand-purple transition-colors pr-4">{faq.q}</span>
                </div>
                <div className="shrink-0 p-2 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                  {openIdx === idx ? <Minus className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 sm:p-8 sm:pt-0 text-gray-400 pl-[64px] sm:pl-[96px] border-t border-white/5 mt-0 leading-relaxed font-medium text-sm sm:text-base pr-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
