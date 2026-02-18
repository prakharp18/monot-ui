import { useState } from 'react';
import { Preloader } from '@/components/ui/preloader';
import FlipLink from '@/components/ui/text-effect-flipper';
import HoverExpand from '@/components/ui/hover-expand';
import type { PanelItem } from '@/components/ui/hover-expand';

const FacePreview = () => (
  <div className="flex items-center justify-center w-full h-full">
    <span className="font-mono text-4xl text-zinc-300">(•‿•)</span>
  </div>
)

const BouncePreview = () => (
  <div className="flex items-center justify-center w-full h-full">
    <pre className="font-mono text-2xl text-zinc-300 tracking-[0.15em]">
      {'     •              '}
    </pre>
  </div>
)

const panels: PanelItem[] = [
  {
    label: 'Face',
    description: 'A minimal face that gently blinks and subtly breathes to feel alive. Randomized blink intervals and a soft scale oscillation give it an organic, living presence.',
    preview: <FacePreview />,
    route: '/component/face',
  },
  {
    label: 'Bounce',
    description: 'A horizontal bouncing dot moving left to right across a clean track to indicate motion and direction. Minimal and hypnotic.',
    preview: <BouncePreview />,
    route: '/component/bounce',
  },
];

export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-black text-white p-8 pt-32 font-sans">
          <div className="w-full max-w-7xl mx-auto relative">
            
            <div className="flex justify-between items-start mb-16">
              <div className="flex flex-col items-start space-y-2">
                <FlipLink href="#">MONOT</FlipLink>
                <FlipLink href="#">User Interface</FlipLink>
              </div>

              <div className="flex flex-col gap-4 max-w-sm text-right items-end">
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed tracking-tight">
                  A modern ASCII UI component platform for building clean, animated text-based interfaces — fast, lightweight, and developer-ready.
                </p>
                <span className="text-white text-sm font-medium tracking-tight">
                  Curated by <a className='text-white hover:text-zinc-400 transition-colors text-sm font-medium tracking-tight underline' href="https://pizzafolio.netlify.app/">@pizzat</a>
                </span>
              </div>
            </div>

            <HoverExpand
              panels={panels}
              initialSelectedIndex={0}
              maxThumbnails={2}
            />

          </div>
        </div>
      )}
    </>
  );
};
