const reviews = [
  { name: 'Aseeyah Shahid', role: 'Personal Branding Strategist', text: "This is my THIRD TIME working with Mahi. So obviously I'm a big fan. He exceeded expectations.", image: 'https://i.pravatar.cc/150?u=a1' },
  { name: 'Sam Fourie', role: 'Founder, Niddo', text: 'Amazing to work with top quality, and communicated effectively throughout the whole process.', image: 'https://i.pravatar.cc/150?u=b2' },
  { name: 'Fred Musse', role: 'Founder, Something legal LLC', text: 'Mahi did an amazing job. Everything came out clean, consistent, and perfectly aligned with the...', image: 'https://i.pravatar.cc/150?u=c3' },
  { name: 'Sarah Jenkins', role: 'CEO, TechFlow', text: 'The branding transformed our LinkedIn presence. We saw a 40% increase in inbound leads within a month.', image: 'https://i.pravatar.cc/150?u=d4' },
  { name: 'David Chen', role: 'Growth Lead, ScaleUp', text: 'Mahi has an incredible eye for detail. The design system he built is both beautiful and functional.', image: 'https://i.pravatar.cc/150?u=e5' },
];

export function ReviewCards() {
  // Duplicate items for seamless loop
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-0 bg-[#09090B] border-y border-white/5 overflow-hidden relative">
      <div className="relative flex">
        <div
          className="flex flex-none animate-marquee py-0"
          style={{ width: "max-content" }}
        >
          {marqueeReviews.map((r, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[320px] md:w-[400px] bg-[#0F0F13] p-6 sm:p-8 border-r border-white/5 flex flex-col justify-between h-[220px] sm:h-[250px] group transition-colors hover:bg-[#121217]"
            >
              <p className="text-gray-400 leading-relaxed italic text-[13px] sm:text-[14px] md:text-[15px] mb-6 line-clamp-4 group-hover:text-gray-300 transition-colors font-medium">
                "{r.text}"
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 sm:pt-6">
                <div className="text-left">
                  <h4 className="font-bold text-white text-sm sm:text-base mb-0.5">{r.name}</h4>
                  <p className="text-[11px] sm:text-[13px] text-brand-purple font-semibold tracking-wide uppercase">{r.role}</p>
                </div>
                <img src={r.image} alt={r.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
