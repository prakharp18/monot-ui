import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Preloader } from '@/components/ui/preloader';
import FlipLink from '@/components/ui/text-effect-flipper';
import HoverExpand from '@/components/ui/hover-expand';
import { MobileCardStack } from '@/components/ui/mobile-card-stack';
import type { PanelItem } from '@/components/ui/hover-expand';

const P = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-full h-full bg-zinc-950">
    <span className="font-mono text-2xl text-zinc-400 whitespace-pre text-center leading-none">{children}</span>
  </div>
)

const panels: PanelItem[] = [
  {
    label: 'Face',
    description: 'Personality Engine. An expressive face with multiple modes: blink, wink, think, sleep, tilt, and calm drift. Builds emotional connection.',
    preview: <P>(•‿•)</P>,
    route: '/component/face',
  },
  {
    label: 'Eye',
    description: 'Cyber Eye. Reactive tracking component. A high-precision digital eye that follows your cursor everywhere.',
    preview: <P>{'╭───╮\n│ • │\n╰───╯'}</P>,
    route: '/component/eye',
  },
  {
    label: 'Arrow',
    description: 'Moving Arrow. Continuous directional flow with a fading trail. Indicates forward motion without interruption.',
    preview: <P>→ →→</P>,
    route: '/component/arrow',
  },
  {
    label: 'Magnetic',
    description: 'Magnetic Cursor. Dots converge to center then expand. Represents focus, attraction, grouping, or selection.',
    preview: <P>{'•   •\n  •  \n•   •'}</P>,
    route: '/component/magnetic',
  },
  {
    label: 'Path',
    description: 'Path Tracer. Progressive route drawing. Ideal for loading states, navigation steps, or workflow planning.',
    preview: <P>. .. ...</P>,
    route: '/component/path',
  },
  {
    label: 'Beam',
    description: 'Scanning Beam. A light sweep illusion moving through a solid block. Perfect for searching or indexing states.',
    preview: <P>[██░░]</P>,
    route: '/component/beam',
  },
  {
    label: 'Ripple',
    description: 'Soft Ripple. Expands outward then resets. A gentle emitter for signals, broadcasts, or interaction feedback.',
    preview: <P>{'  ○  \n○   ○'}</P>,
    route: '/component/ripple',
  },
  {
    label: 'Orbit',
    description: 'Orbiting Dot. A single dot circling a center point. Represents an active system or continuous background process.',
    preview: <P>{'  •  \n•   •\n  ○  '}</P>,
    route: '/component/orbit',
  },
  {
    label: 'Spark',
    description: 'Idea Spark. Small burst of characters. Represents thinking, idea generation, or AI response activation.',
    preview: <P>✦</P>,
    route: '/component/spark',
  },
  {
    label: 'Decision',
    description: 'Decision Split. A branch-merge loop. Represents processing choices, logic forks, or decision trees.',
    preview: <P>{' / \\ \n \\ / '}</P>,
    route: '/component/decision',
  },
  {
    label: 'Memory',
    description: 'Memory Recall. Center expands then contracts. Represents computation, recall, or memory access events.',
    preview: <P>[ • ]</P>,
    route: '/component/memory',
  },
  {
    label: 'Stabilize',
    description: 'Stabilizing Wave. A waveform settling into a stable state. Represents calibration, balancing, or system stabilization.',
    preview: <P>~ ~ ~</P>,
    route: '/component/stabilize',
  },
  {
    label: 'Float',
    description: 'Particle Field. Random slow drift of scattered dots. Creates a subtle, living ambient energy layer.',
    preview: <P>{'•    \n   • '}</P>,
    route: '/component/float',
  },
];

export const DashboardPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(() => !location.state?.skipPreloader);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="min-h-screen bg-black text-white p-8 pt-12 font-sans">
          <div className="w-full max-w-7xl mx-auto relative">
            
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-start gap-8 mb-12">
              <div className="flex flex-col items-start space-y-2">
                <FlipLink href="https://monot-ui.vercel.app/">MONOT</FlipLink>
                <FlipLink href="https://monot-ui.vercel.app/">User Interface</FlipLink>
              </div>

              <div className="flex flex-col gap-4 max-w-sm text-left md:text-right items-start md:items-end">
                <p className="text-zinc-500 text-sm leading-relaxed tracking-tight">
                  A modern ASCII UI component platform for building clean, animated text-based interfaces — fast, lightweight, and developer-ready.
                </p>
                <span className="text-white text-xs md:text-sm font-medium tracking-tight">
                  Curated by <a className='text-white hover:text-zinc-400 transition-colors underline' href="https://pizzafolio.netlify.app/">@pizzat</a>
                </span>
              </div>
            </div>



            {/* Desktop View (Hover Expand) */}
            <div className="hidden md:block">
              <HoverExpand
                panels={panels}
                initialSelectedIndex={0}
                maxThumbnails={13}
              />
            </div>

            {/* Mobile View (Vertical Stack) */}
            <div className="block md:hidden">
              <MobileCardStack panels={panels} />
            </div>

          </div>
        </div>
      )}
    </>
  );
};
