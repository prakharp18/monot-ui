import { useState } from 'react';
import { Preloader } from '@/components/ui/preloader';
import FlipLink from '@/components/ui/text-effect-flipper';

export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-black text-white p-8 pt-12 font-sans">
          <div className="w-full max-w-7xl mx-auto relative">
            
            {/* Top Section — Left: FlipLink, Right: description + handle */}
            <div className="flex justify-between items-start mb-8">
              
              {/* Left — FlipLink */}
              <div className="flex flex-col items-start space-y-2">
                <FlipLink href="#">MONOT</FlipLink>
                <FlipLink href="#">User Interface</FlipLink>
              </div>

              {/* Right — Description + Handle */}
              <div className="flex flex-col gap-4 max-w-sm text-right items-end">
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed tracking-tight">
                  A modern ASCII UI component platform for building clean, animated text-based interfaces — fast, lightweight, and developer-ready.
                </p>
                <span className="text-white text-sm font-medium tracking-tight">
                  Curated by <a className='text-white hover:text-zinc-400 transition-colors text-sm font-medium tracking-tight underline' href="https://pizzafolio.netlify.app/">@pizzat</a>
                </span>
              </div>

            </div>

            {/* Bottom Placeholder (Skipper Component Next) */}
            <div className="w-full h-[60vh] border border-zinc-900 bg-zinc-950/50 rounded-lg flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <p className="text-zinc-600 font-medium relative z-10 tracking-widest uppercase text-sm">
                [ Next Component Coming Soon ]
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
