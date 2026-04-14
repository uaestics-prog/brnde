import { MoveRight } from 'lucide-react';
import usmanHeadshot from '../assets/Usman Headshot.jfif';
import client1 from '../assets/client 1.webp';
import client2 from '../assets/client 2.webp';
import client3 from '../assets/client 3.webp';
import rafahHeadshot from '../assets/rafah headshot.jfif';
import deanHeadshot from '../assets/dean headshot.jfif';

const projects = [
  {
    title: "Usman's LinkedIn Branding",
    client: "Usman Ahmad",
    role: "Web Developer",
    desc: "She has a great ability to understand her client’s vision, goals, and ideas, and then transform them into designs that perfectly match what we imagine in our minds.",
    avatar: usmanHeadshot,
    image: client2,
    tags: ["COPYWRITING", "VISUAL BRANDING", "CONTENT DESIGN"]
  },
  {
    title: "Rafeh's LinkedIn Branding",
    client: "Abdul Rafeh",
    role: "Full stack developer",
    desc: "I recommend Mahi for LinkedIn rebranding. Bcz, She’s great at design and truly understands positioning. Working with her felt easy like a buddy who genuinely cares about your growth.",
    avatar: rafahHeadshot,
    image: client1,
    tags: ["COPYWRITING", "VISUAL BRANDING"]
  },
  {
    title: "Dean's LinkedIn Branding",
    client: "Dean Freeberg",
    role: "Founder at MYDEE MEDIA LLC",
    desc: "Mahi is a very talented creator who does FANTASTIC work and is easy to communicate with, and works very efficiently. I will hire her again and again.",
    avatar: deanHeadshot,
    image: client3,
    tags: ["VISUAL BRANDING", "CONTENT DESIGN"]
  }
];

export function Portfolio() {
  return (
    <section id="works" className="py-16 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Explore our latest <br />
            <span className="font-serif italic text-brand-purple font-normal">personal brand</span> designs
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            From visual identity to content design, these brands showcase how strategy and design come together to elevate LinkedIn presence.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              <div className="w-full lg:w-1/2 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative aspect-[4/3] bg-gray-900 border border-white/5 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-between py-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 group-hover:text-brand-purple transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
                    <img 
                      src={project.avatar} 
                      alt={project.client} 
                      className="w-12 h-12 rounded-full border border-white/10 p-0.5 object-cover" 
                    />
                    <div>
                      <h4 className="font-bold text-white text-base">{project.client}</h4>
                      <p className="text-sm font-medium text-gray-500">{project.role}</p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 font-medium">
                    "{project.desc}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] md:text-[11px] font-bold tracking-widest text-gray-400 bg-white/5 px-4 py-2 rounded-full uppercase border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-purple transition-all group/link"
                  >
                    View Full Case Study 
                    <MoveRight className="w-4 h-4 transform -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-8 py-5 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 shadow-xl shadow-black/20"
          >
            Check out some extensive banners
          </a>
        </div>
      </div>
    </section>
  );
}
