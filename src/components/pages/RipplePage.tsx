import { useNavigate } from 'react-router-dom'
import { AsciiRipple } from '@/components/ascii/AsciiRipple'

export const RipplePage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-8 font-sans">
      <button onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} className="absolute top-8 left-8 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer">← Back</button>
      <div className="text-center">
        <h1 className="font-mono text-sm tracking-[0.3em] uppercase text-white mb-2">Soft Ripple</h1>
        <p className="text-zinc-400 text-xs tracking-wide max-w-xs">Expands outward then resets. A gentle emitter for signals, broadcasts, or interaction feedback.</p>
      </div>
      <div className="w-64 h-48 border border-white/20 rounded-2xl overflow-hidden"><AsciiRipple /></div>
      <p className="text-zinc-500 text-xs font-mono">Props: speed</p>
    </div>
  )
}
