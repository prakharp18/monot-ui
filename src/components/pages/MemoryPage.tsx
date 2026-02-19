import { useNavigate } from 'react-router-dom'
import { AsciiMemory } from '@/components/ascii/AsciiMemory'

export const MemoryPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-8 font-sans">
      <button onClick={() => navigate('/dashboard', { state: { skipPreloader: true } })} className="absolute top-8 left-8 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer">← Back</button>
      <div className="text-center">
        <h1 className="font-mono text-sm tracking-[0.3em] uppercase text-white mb-2">Memory Recall</h1>
        <p className="text-zinc-400 text-xs tracking-wide max-w-xs">Center expands then contracts. Represents computation, recall, or memory access events.</p>
      </div>
      <div className="w-48 h-32 border border-white/20 rounded-2xl overflow-hidden"><AsciiMemory /></div>
      <p className="text-zinc-500 text-xs font-mono">Props: speed</p>
    </div>
  )
}
