import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AsciiFace, type FaceMode } from '@/components/ascii/AsciiFace'

const MODES: { value: FaceMode; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'wink', label: 'Wink' },
  { value: 'thinking', label: 'Thinking' },
  { value: 'sleep', label: 'Sleep' },
  { value: 'tilt', label: 'Tilt' },
  { value: 'calm', label: 'Calm' },
]

export const FacePage = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<FaceMode>('default')

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-8 font-sans">
      <button 
        onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} 
        className="absolute top-8 left-8 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer"
      >
        ← Back
      </button>
      
      <div className="text-center">
        <h1 className="font-mono text-sm tracking-[0.3em] uppercase text-white mb-2">
          Personality Engine
        </h1>
        <p className="text-zinc-400 text-xs tracking-wide max-w-xs">
          An expressive ASCII face with micro-interactions. Blinks, thinks, sleeps, and reacts to build emotional connection.
        </p>
      </div>

      <div className="w-80 h-60 border border-white/20 rounded-2xl overflow-hidden flex items-center justify-center relative">
        <AsciiFace size="lg" mode={mode} />
        
        {/* Mode Toggles */}
        <div className="absolute bottom-4 flex gap-2">
          {MODES.map((m) => (
            <button
              key={m.value}
              onClick={() => setMode(m.value)}
              className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded border transition-colors ${
                mode === m.value 
                  ? 'bg-white text-black border-white' 
                  : 'bg-black text-zinc-500 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-zinc-500 text-xs font-mono">
        Props: mode · size
      </p>
    </div>
  )
}
