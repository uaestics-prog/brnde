const reviews = [
  {
    company: "mindsharelab",
    client: "Osman Lee",
    role: "CEO @ Mindshare Lab",
    text: "It's been such a great experience working with Mahi. He's super responsive, proactive and always looking to make improvements on every project. Can't recommend him enough!",
    avatar: "https://i.pravatar.cc/150?u=osman"
  },
  {
    client: "Soma Akpati",
    role: "Senior Mentor",
    text: "Mahi is absolutely phenomenal! He has a knack for understanding your needs and creating visual designs that brings them to life.",
    avatar: "https://i.pravatar.cc/150?u=soma"
  },
  {
    client: "Stijn Verhagen",
    role: "Scaling B2B creators",
    text: "Mahi blew my profile redesign out of the park for me. With a super quick turnaround time of only two days he designed my profile in one version. Which was insane.",
    avatar: "https://i.pravatar.cc/150?u=stijn2"
  },
  {
    company: "niddo",
    client: "Sam Fourie",
    role: "Founder, Niddo",
    text: "Amazing to work with, top quality and communicated effectively throughout the whole project. I am very grateful and happy with the work, definitely will use Mahi again! Thank you, highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=sam",
    featured: true
  },
  {
    client: "Phil Acquah",
    role: "Chief Financial Officer @Bite Cro",
    text: "Fast & Great work, did more than what I expected in a very short timeframe, definitely outcame. My go to guy for anything LinkedIn...",
    avatar: "https://i.pravatar.cc/150?u=phil"
  },
  {
    client: "Ozan Denman",
    role: "Founder & CEO, Right Time Offers",
    text: "Always a pleasure working with Mahi, delivering a second to none service everytime which is much appreciated.",
    avatar: "https://i.pravatar.cc/150?u=ozan"
  },
  {
    client: "April Hines",
    role: "Senior Director Client Success",
    text: "This was, by far the best experience I have had. If you want your profile to truly stand out, use him. He is worth every dime. He went way above and beyond to make sure I got exactly what I envisioned.",
    avatar: "https://i.pravatar.cc/150?u=april",
    colSpan: true
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-brand-purple text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border border-white/5">
            <div className="flex -space-x-2 md:-space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i + 10}`} className="w-7 h-7 md:w-[35px] md:h-[35px] rounded-full border border-[#09090B] grayscale" alt="avatar" />
              ))}
            </div>
            <div className="text-left leading-tight md:leading-[17px]">
              Trusted by <span className="bg-gradient-to-br from-brand-purple to-transparent px-1 rounded-sm font-black text-white">100+</span> <br />
              Creators and Founders
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Explore <span className="font-serif italic text-brand-purple font-normal">testimonials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] ${review.featured
                ? 'bg-brand-purple text-white shadow-[0_30px_60px_-15px_rgba(168,85,247,0.3)] lg:row-span-2'
                : 'bg-[#121217] border border-white/5 text-white hover:bg-[#15151C] hover:border-white/10'
                } ${review.colSpan ? 'md:col-span-2' : ''}`}
            >
              <div>
                {review.company && (
                  <div className={`font-black text-base sm:text-lg mb-8 flex items-center gap-3 uppercase tracking-wider ${review.featured ? 'text-white' : 'text-brand-purple'}`}>
                    {review.featured ? (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1.5 shadow-lg"><div className="w-full h-full bg-brand-purple rounded-sm transform rotate-45" /></div>
                    ) : (
                      <div className="w-6 h-6 bg-brand-purple rounded-full flex items-center justify-center p-1.5 shadow-lg"><div className="w-full h-full bg-white rounded-sm transform rotate-45" /></div>
                    )}
                    {review.company}
                  </div>
                )}
                <p className={`text-base sm:text-lg leading-relaxed mb-10 font-bold ${review.featured ? 'text-purple-50' : 'text-gray-400'}`}>
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                   <img src={review.avatar} alt={review.client} className={`w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-xl ${review.featured ? 'border-2 border-white' : 'border border-white/20'}`} />
                   {review.featured && <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-brand-purple shadow-sm">
                      <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />
                   </div>}
                </div>
                <div>
                  <h4 className={`font-black text-sm md:text-base ${review.featured ? 'text-white' : 'text-white'}`}>{review.client}</h4>
                  <p className={`text-[11px] md:text-[13px] font-bold tracking-tight ${review.featured ? 'text-purple-200' : 'text-gray-500'}`}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
