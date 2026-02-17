import { useState } from 'react';
import { Preloader } from '@/components/ui/preloader';
import FlipLink from '@/components/ui/text-effect-flipper';
import HoverExpand from '@/components/ui/hover-expand';

const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
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

            {/* Hero Section — HoverExpand */}
            <HoverExpand
              images={images}
              initialSelectedIndex={0}
              thumbnailHeight={450}
              modalImageSize={800}
              maxThumbnails={11}
            />

          </div>
        </div>
      )}
    </>
  );
};
