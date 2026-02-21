import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AsciiMagnetic } from '@/components/ascii/AsciiMagnetic'
import { CodeBlock } from '@/components/ui/code-block'
import { magneticHTML, magneticCSS, magneticJS, magneticFull } from '@/components/code/magnetic-code'

export const MagneticPage = () => {
  const navigate = useNavigate()
  const [speed, setSpeed] = useState(400)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 font-sans flex flex-col items-center gap-12">
      
      <button 
        onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} 
        className="fixed top-8 left-8 z-50 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-900 hover:border-zinc-700"
      >
        ← Back
      </button>

      <div className="text-center space-y-4">
        <h1 className="font-mono text-xl tracking-[0.3em] uppercase text-white">
          Magnetic Cursor
        </h1>
        <p className="text-zinc-400 text-sm max-w-sm mx-auto">
          Dots converge to center then expand. Represents focus, attraction, grouping, or selection.
        </p>
      </div>

      <div className="relative w-full max-w-lg aspect-square md:aspect-video flex items-center justify-center bg-zinc-900/20 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
        <AsciiMagnetic speed={speed} />
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
            min="50"
            max="1000"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white hover:accent-zinc-300"
          />
        </div>
      </div>

      {/* Code */}
      <div className="w-full max-w-2xl space-y-4">
        <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-widest pl-1">
          Grab the Code
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed pl-1">
          <span className="text-white font-medium">Full Example</span> — save as <span className="font-mono text-zinc-300">.html</span> and open in your browser. Or use the separate tabs to integrate into an existing project.
        </p>
        <CodeBlock tabs={[
          { label: 'Full Example', code: magneticFull },
          { label: 'HTML', code: magneticHTML },
          { label: 'CSS', code: magneticCSS },
          { label: 'JS', code: magneticJS },
        ]} />
      </div>
    </div>
  )
}
