import { useState, useRef, useEffect } from 'react';
import { MoveRight, X, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import fayyazBefore from '../assets/fayyaz old.png';
import fayyazAfter from '../assets/Fayyaz After.png';
import { cn } from '../utils/cn';

export function Expertise() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsResizing(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isResizing) return;
      handleMove(e.clientX);
    };

    const handlePointerUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isResizing]);

  return (
    <section className="py-16 md:py-24 bg-[#09090B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Your expertise is strong. Your <br />
            <span className="font-serif italic text-brand-purple font-normal">presentation</span> isn't.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            A high-performing LinkedIn profile communicates value instantly, before anyone reads a word.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm font-bold text-gray-300">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm"><MoveRight className="w-4 h-4 text-brand-purple transform -rotate-45" /> +27% profile reach</span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm"><MoveRight className="w-4 h-4 text-brand-purple transform -rotate-45" /> +53% inbound inquiries</span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-sm"><MoveRight className="w-4 h-4 text-brand-purple transform -rotate-45" /> +41% week ready conversations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 mt-8 md:mt-16 items-center">
          {/* Before List */}
          <div className="w-full order-2 lg:order-1">
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 h-full">
              <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg">Before working with us</h4>
              <ul className="space-y-4">
                {[
                  'Unclear brand direction',
                  'Generic looking content',
                  'Weak first impression',
                  'Limited profile growth'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                    <X className="w-5 h-5 text-red-900/50 shrink-0 mt-0.5" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full flex justify-center py-4 order-1 lg:order-2">
            <div
              ref={containerRef}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl flex border border-white/10 cursor-col-resize select-none touch-none"
              onPointerDown={handlePointerDown}
            >
              {/* After Image (Base) */}
              <img
                src={fayyazAfter}
                className="absolute inset-0 w-full h-full object-cover object-[center_top]"
                alt="After LinkedIn Brand Design"
                draggable={false}
              />

              {/* Before Image (Overlay with clipping) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={fayyazBefore}
                  className="absolute inset-0 w-full h-full object-cover object-[center_top]"
                  alt="Before LinkedIn Brand Design"
                  draggable={false}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1.5 bg-brand-purple z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] border-4 border-[#09090B] z-30">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>

              {/* Labels */}
              <div
                className={cn(
                  "absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg z-10 transition-opacity duration-300",
                  sliderPosition <= 15 ? 'opacity-0' : 'opacity-100'
                )}
              >
                Before
              </div>
              <div
                className={cn(
                  "absolute bottom-4 right-4 bg-brand-purple text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg z-10 transition-opacity duration-300",
                  sliderPosition >= 85 ? 'opacity-0' : 'opacity-100'
                )}
              >
                After
              </div>
            </div>
          </div>

          {/* After List */}
          <div className="w-full order-3">
            <div className="bg-brand-purple text-white p-6 md:p-8 rounded-3xl shadow-xl shadow-brand-purple/10 border border-brand-purple/20 h-full">
              <h4 className="font-bold mb-6 flex items-center gap-2 text-lg">With Brnde</h4>
              <ul className="space-y-4">
                {[
                  'Strategic brand positioning',
                  'Polished, premium design',
                  'Strong first impression',
                  'Consistent profile growth'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-white/50 shrink-0 mt-0.5" /> 
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
