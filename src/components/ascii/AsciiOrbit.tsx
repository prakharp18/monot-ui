import { useEffect, useRef, useState } from 'react'

interface RingConfig {
  radius: number
  chars: string
  count: number
  speed: number
  reverse?: boolean
  color?: string
}

interface AsciiOrbitProps {
  centerSymbol?: string
  rings?: RingConfig[]
  size?: number
  className?: string
  glowColor?: string
}

const DEFAULT_RINGS: RingConfig[] = [
  { radius: 40, chars: '◆◇○●', count: 6, speed: 1.2, color: '#888' },
  { radius: 70, chars: '★☆⬡⬢', count: 8, speed: 0.8, reverse: true, color: '#aaa' },
  { radius: 100, chars: '◈◉◊⊙', count: 10, speed: 0.5, color: '#666' },
  { radius: 130, chars: '⟐⟡⬟⬠', count: 14, speed: 0.3, reverse: true, color: '#555' },
]

interface Particle {
  ringIdx: number
  charIdx: number
  angle: number
  char: string
  trail: { x: number; y: number; opacity: number }[]
}

export const AsciiOrbit: React.FC<AsciiOrbitProps> = ({
  centerSymbol = '⬣',
  rings = DEFAULT_RINGS,
  size = 300,
  className = '',
  glowColor = '#00ff41',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const hoverRef = useRef(false)

  useEffect(() => {
    hoverRef.current = isHovered
  }, [isHovered])

  useEffect(() => {
    const particles: Particle[] = []
    rings.forEach((ring, ringIdx) => {
      const chars = ring.chars.split('')
      for (let i = 0; i < ring.count; i++) {
        particles.push({
          ringIdx,
          charIdx: i,
          angle: (i / ring.count) * Math.PI * 2,
          char: chars[i % chars.length],
          trail: [],
        })
      }
    })
    particlesRef.current = particles
  }, [rings])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2

    let pulsePhase = 0

    const draw = () => {
      ctx.clearRect(0, 0, size, size)

      const hovered = hoverRef.current
      const speedMultiplier = hovered ? 2.5 : 1

      pulsePhase += 0.03
      const pulse = 0.5 + Math.sin(pulsePhase) * 0.3

      rings.forEach((ring, ringIdx) => {
        ctx.beginPath()
        const eccentricity = 0.65
        const rx = ring.radius
        const ry = ring.radius * eccentricity
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,255,255,${0.04 + pulse * 0.03})`
        ctx.lineWidth = 0.5
        ctx.setLineDash([2, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      particlesRef.current.forEach((particle) => {
        const ring = rings[particle.ringIdx]
        const dir = ring.reverse ? -1 : 1
        particle.angle += (ring.speed * 0.02 * dir) * speedMultiplier

        const eccentricity = 0.65
        const rx = ring.radius
        const ry = ring.radius * eccentricity
        const x = cx + Math.cos(particle.angle) * rx
        const y = cy + Math.sin(particle.angle) * ry

        particle.trail.unshift({ x, y, opacity: 0.6 })
        if (particle.trail.length > 5) particle.trail.pop()

        particle.trail.forEach((t, idx) => {
          const trailOpacity = t.opacity * (1 - idx / particle.trail.length)
          ctx.font = `${10 - idx}px monospace`
          ctx.fillStyle = `rgba(255,255,255,${trailOpacity * 0.3})`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(particle.char, t.x, t.y)
        })

        const distFromFront = Math.cos(particle.angle)
        const depthOpacity = 0.3 + (distFromFront + 1) * 0.35
        const charSize = 12 + (distFromFront + 1) * 3

        ctx.font = `${charSize}px monospace`
        ctx.fillStyle = ring.color || '#fff'
        ctx.globalAlpha = depthOpacity
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        if (distFromFront > 0.3) {
          ctx.shadowColor = glowColor
          ctx.shadowBlur = 6 + pulse * 4
        }

        ctx.fillText(particle.char, x, y)
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      })

      const centerPulse = 1 + Math.sin(pulsePhase * 1.5) * 0.15
      ctx.save()
      ctx.translate(cx, cy)
      ctx.scale(centerPulse, centerPulse)

      ctx.shadowColor = glowColor
      ctx.shadowBlur = 20 + pulse * 15
      ctx.font = 'bold 28px monospace'
      ctx.fillStyle = '#fff'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(centerSymbol, 0, 0)

      ctx.shadowBlur = 0
      ctx.font = '10px monospace'
      ctx.fillStyle = `rgba(255,255,255,${0.2 + pulse * 0.2})`
      const statusText = hovered ? '[ ACTIVE ]' : '[ IDLE ]'
      ctx.fillText(statusText, 0, 22)

      ctx.restore()

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [rings, size, centerSymbol, glowColor])

  return (
    <div
      className={`relative flex items-center justify-center bg-black ${className}`}
      style={{ width: '100%', height: '100%', minHeight: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size, maxWidth: '100%', maxHeight: '100%' }}
      />
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: `inset 0 0 60px rgba(0,255,65,${0.05})`,
        }}
      />
    </div>
  )
}
