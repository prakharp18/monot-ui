import { useNavigate } from 'react-router-dom'
import { AsciiBounce } from '@/components/ascii/AsciiBounce'

export const BouncePage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 p-8">
      {/* Back */}
      <button
        onClick={() => navigate('/dashboard')}
        className="absolute top-8 left-8 font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors cursor-pointer"
      >
        ← Back
      </button>

      {/* Title */}
      <div className="text-center">
        <h1 className="font-mono text-sm tracking-[0.3em] uppercase text-zinc-400 mb-2">
          ASCII Bounce
        </h1>
        <p className="text-zinc-600 text-xs tracking-wide max-w-xs">
          A horizontal bouncing dot indicating motion and direction.
        </p>
      </div>

      {/* Live animation */}
      <div className="w-80 h-24 border border-white/10 rounded-2xl overflow-hidden">
        <AsciiBounce trackWidth={20} speed={100} />
      </div>

      {/* Info */}
      <div className="max-w-sm text-center">
        <p className="text-zinc-600 text-xs font-mono leading-relaxed">
          Props: trackWidth · speed · dot
        </p>
      </div>
    </div>
  )
}
