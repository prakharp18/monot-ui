import { useState, useEffect } from 'react'

export type FaceMode = 'default' | 'wink' | 'thinking' | 'sleep' | 'tilt' | 'calm'

interface AsciiFaceProps {
  className?: string
  mode?: FaceMode
  size?: 'sm' | 'md' | 'lg'
}

export const AsciiFace: React.FC<AsciiFaceProps> = ({
  className = '',
  mode = 'default',
  size = 'md',
}) => {
  const [frame, setFrame] = useState(0)
  const [breatheScale, setBreatheScale] = useState(1)
  const [tiltAngle, setTiltAngle] = useState(0)

  // Breathing animation (always active unless sleeping)
  useEffect(() => {
    let animFrame: number
    let start: number | null = null

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = (timestamp - start) / 1000
      
      // Sleep mode breathes slower and deeper
      const speed = mode === 'sleep' ? 0.8 : 1.2
      const depth = mode === 'sleep' ? 0.03 : 0.02
      
      const scale = 1 + Math.sin(elapsed * speed) * depth
      setBreatheScale(scale)
      animFrame = requestAnimationFrame(animate)
    }

    animFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animFrame)
  }, [mode])

  // Mode-specific animations
  useEffect(() => {
    let interval: NodeJS.Timeout

    switch (mode) {
      case 'default': // Link blink
      case 'wink':
        const blinkSpeed = mode === 'wink' ? 2500 : 3500
        interval = setInterval(() => {
          setFrame((prev) => (prev === 0 ? 1 : 0))
          setTimeout(() => setFrame(0), 150)
        }, blinkSpeed)
        break

      case 'thinking': // (•_•) -> (•-•)
        interval = setInterval(() => {
          setFrame((prev) => (prev + 1) % 2)
        }, 1000)
        break

      case 'sleep': // (-‿-) -> (-.-)
        interval = setInterval(() => {
          setFrame((prev) => (prev + 1) % 2)
        }, 2000)
        break

      case 'tilt': // Head tilt
        interval = setInterval(() => {
          setTiltAngle((prev) => (prev === 0 ? 15 : 0))
        }, 2000)
        break

      case 'calm': // Horizontal drift
        // Handled via CSS transform in render
        break
    }

    return () => clearInterval(interval)
  }, [mode])

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  }

  const getFace = () => {
    switch (mode) {
      case 'wink':
        return frame === 1 ? '(•‿-)' : '(•‿•)'
      case 'thinking':
        return frame === 0 ? '(•_•)' : '(•-•)'
      case 'sleep':
        return frame === 0 ? '(-‿-)' : '(-.-)'
      case 'tilt':
        return '(•‿•)'
      case 'calm':
        return '(•‿•)'
      default: // default blink
        return frame === 1 ? '(−‿−)' : '(•‿•)'
    }
  }

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <span
        className={`font-mono ${sizeClasses[size]} text-white transition-all duration-700 ease-in-out`}
        style={{
          transform: `scale(${breatheScale}) rotate(${tiltAngle}deg) ${mode === 'calm' ? 'translateX(4px)' : ''}`,
          display: 'inline-block',
          animation: mode === 'calm' ? 'drift 4s ease-in-out infinite alternate' : 'none'
        }}
      >
        {getFace()}
        {mode === 'tilt' && frame === 0 && <span className="absolute -right-4 top-0 opacity-0">?</span>}
      </span>
      <style>{`
        @keyframes drift {
          from { transform: translateX(-4px) scale(${breatheScale}); }
          to { transform: translateX(4px) scale(${breatheScale}); }
        }
      `}</style>
    </div>
  )
}
