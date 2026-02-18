import { useState } from 'react';
import { Preloader } from '@/components/ui/preloader';
import FlipLink from '@/components/ui/text-effect-flipper';
import HoverExpand from '@/components/ui/hover-expand';
import type { PanelItem } from '@/components/ui/hover-expand';
import { AsciiRain } from '@/components/ascii/AsciiRain';
import { AsciiOrbit } from '@/components/ascii/AsciiOrbit';

const panels: PanelItem[] = [
  {
    label: 'Rain // Matrix Cascade',
    component: <AsciiRain speed={45} density={0.9} color="#00ff41" fadeSteps={14} />,
  },
  {
    label: 'Rain // Amber Terminal',
    component: <AsciiRain speed={60} density={0.85} color="#ffb300" fadeSteps={10} charset="01" />,
  },
  {
    label: 'Orbit // Default',
    component: <AsciiOrbit size={380} />,
  },
  {
    label: 'Rain // Cyan Storm',
    component: <AsciiRain speed={35} density={0.95} color="#00e5ff" fadeSteps={16} />,
  },
  {
    label: 'Orbit // Minimal',
    component: (
      <AsciiOrbit
        size={380}
        centerSymbol="◎"
        glowColor="#ff00ff"
        rings={[
          { radius: 50, chars: '·•●', count: 5, speed: 1.5, color: '#ff69b4' },
          { radius: 90, chars: '○◌◯', count: 8, speed: 0.9, reverse: true, color: '#da70d6' },
          { radius: 125, chars: '◦∘⊚', count: 12, speed: 0.4, color: '#9370db' },
        ]}
      />
    ),
  },
  {
    label: 'Rain // Red Alert',
    component: <AsciiRain speed={30} density={1} color="#ff1744" fadeSteps={12} charset="!@#$%^&*DANGER" />,
  },
  {
    label: 'Orbit // Solar System',
    component: (
      <AsciiOrbit
        size={380}
        centerSymbol="☀"
        glowColor="#ffab00"
        rings={[
          { radius: 35, chars: '☿', count: 1, speed: 2.5, color: '#aaa' },
          { radius: 55, chars: '♀', count: 1, speed: 1.8, color: '#ffcc80' },
          { radius: 75, chars: '⊕', count: 1, speed: 1.2, color: '#64b5f6' },
          { radius: 100, chars: '♂', count: 1, speed: 0.8, color: '#ef5350' },
          { radius: 130, chars: '♃', count: 1, speed: 0.4, reverse: true, color: '#ff8a65' },
        ]}
      />
    ),
  },
  {
    label: 'Rain // Ghost Protocol',
    component: <AsciiRain speed={70} density={0.7} color="#b388ff" fadeSteps={20} charset="ψΩαβγδεζηθ" />,
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
            
            {/* Top Section — Left: FlipLink, Right: description + handle */}
            <div className="flex justify-between items-start mb-16">
              
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

            {/* Hero Section — HoverExpand with ASCII components */}
            <HoverExpand
              panels={panels}
              initialSelectedIndex={0}
              maxThumbnails={8}
            />

          </div>
        </div>
      )}
    </>
  );
};
