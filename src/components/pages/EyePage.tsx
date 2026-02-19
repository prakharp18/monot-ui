import { useNavigate } from 'react-router-dom'
import { AsciiEye } from '@/components/ascii/AsciiEye'

export const EyePage = () => {
  const navigate = useNavigate()
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
          Cyber Eye
        </h1>
        <p className="text-zinc-400 text-sm max-w-sm mx-auto">
          Reactive tracking component. High-precision mouse following using delta coordinates.
        </p>
      </div>

      <div className="w-full max-w-md aspect-square flex items-center justify-center border border-white/10 rounded-3xl bg-zinc-900/20 shadow-2xl">
        <AsciiEye size="lg" />
      </div>

      <p className="text-zinc-600 text-xs font-mono">
        Moves with your cursor
      </p>
    </div>
  )
}
