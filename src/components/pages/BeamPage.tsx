import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AsciiBeam } from '@/components/ascii/AsciiBeam'

export const BeamPage = () => {
  const navigate = useNavigate()
  const [speed, setSpeed] = useState(80)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 font-sans selection:bg-white/20">
      
      <button 
        onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} 
        className="fixed top-8 left-8 z-50 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-900 hover:border-zinc-700"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
        
        <div className="text-center space-y-4">
          <h1 className="font-mono text-xl tracking-[0.3em] uppercase text-white">
            Scanning Beam
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            A light sweep illusion moving through a solid block. Perfect for searching, indexing, or processing states.
          </p>
        </div>

        <div className="relative w-full max-w-lg aspect-video flex items-center justify-center bg-zinc-900/20 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
           <AsciiBeam speed={speed} />
        </div>

        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-500">
              <label htmlFor="speed">Animation Speed</label>
              <span className="text-white">{speed}ms</span>
            </div>
            <input
              id="speed"
              type="range"
              min="20"
              max="500"
              step="10"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-zinc-300"
            />
          </div>
        </div>

        <div className="w-full max-w-lg p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 font-mono text-xs overflow-x-auto">
          <p className="text-zinc-500 mb-2">// Usage</p>
          <p className="text-zinc-300">
            {`<AsciiBeam speed={${speed}} />`}
          </p>
        </div>

      </div>
    </div>
  )
}
