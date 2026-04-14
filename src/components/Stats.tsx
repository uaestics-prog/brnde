export function Stats() {
  const stats = [
    { value: '100+', label: 'Creators helped' },
    { value: '10X', label: 'Profile Growth' },
    { value: '99%', label: 'Success Rate' },
    { value: '33 Days', label: 'Results Timeline' },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#09090B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:divide-x md:divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-2 sm:px-4">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 text-brand-purple tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
