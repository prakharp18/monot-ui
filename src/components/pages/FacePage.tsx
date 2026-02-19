import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AsciiFace, type FaceMode } from '@/components/ascii/AsciiFace'
import { CodeBlock } from '@/components/ui/code-block'
import { faceHTML, faceCSS, faceJS, faceFull } from '@/components/code/face-code'

const MODES: { value: FaceMode; label: string; desc: string }[] = [
  { value: 'default', label: 'Default', desc: 'Gentle blink & breathe' },
  { value: 'wink', label: 'Wink', desc: 'Playful wink animation' },
  { value: 'thinking', label: 'Thinking', desc: 'Processing / Loading state' },
  { value: 'sleep', label: 'Sleep', desc: 'Idle / Inactive state' },
  { value: 'tilt', label: 'Tilt', desc: 'Curious head tilt' },
  { value: 'calm', label: 'Calm', desc: 'Ambient drift' },
]

export const FacePage = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<FaceMode>('default')
  const [isInteractive, setIsInteractive] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24 font-sans selection:bg-white/20">
      
      {/* Navigation */}
      <button 
        onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} 
        className="fixed top-8 left-8 z-50 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-zinc-900 hover:border-zinc-700"
      >
        ← Back
      </button>

      <div className="max-w-3xl mx-auto flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="font-mono text-xl tracking-[0.3em] uppercase text-white">
            Personality Engine
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            An expressive ASCII face that builds emotional connection. reacts to cursor movement and simulates living behavior.
          </p>
        </div>

        {/* Main Interaction Stage */}
        <div className="relative w-full max-w-lg aspect-square md:aspect-video bg-zinc-900/20 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
           {/* Interactive Tag */}
           <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isInteractive ? 'bg-green-500' : 'bg-zinc-700'} animate-pulse`} />
            <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest">
              {isInteractive ? 'Tracking Active' : 'Tracking Off'}
            </span>
           </div>

           <AsciiFace size="lg" mode={mode} interactive={isInteractive} />
        </div>

        {/* Controls */}
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mode Selection */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-widest pl-1">
              Select Mode
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MODES.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMode(m.value)}
                  className={`
                    px-4 py-3 text-xs text-left rounded-xl border transition-all duration-300
                    flex flex-col gap-1
                    ${mode === m.value 
                      ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                      : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'}
                  `}
                >
                  <span className="font-medium uppercase tracking-wider">{m.label}</span>
                  <span className={`text-[10px] ${mode === m.value ? 'text-zinc-500' : 'text-zinc-600'}`}>
                    {m.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase text-zinc-500 tracking-widest pl-1">
              Settings
            </h3>
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-300">Mouse Tracking</span>
                <button
                  onClick={() => setIsInteractive(!isInteractive)}
                  className={`w-10 h-5 rounded-full transition-colors relative ${isInteractive ? 'bg-white' : 'bg-zinc-700'}`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-black rounded-full transition-transform duration-300 ${isInteractive ? 'left-6' : 'left-1'}`} />
                </button>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <p className="font-mono text-[10px] text-zinc-500 leading-relaxed">
                  The component uses a window event listener to track cursor position relative to the center, applying subtle CSS transforms for a 3D effect.
                </p>
              </div>

            </div>
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
            { label: 'Full Example', code: faceFull },
            { label: 'HTML', code: faceHTML },
            { label: 'CSS', code: faceCSS },
            { label: 'JS', code: faceJS },
          ]} />
        </div>

      </div>
    </div>
  )
}
