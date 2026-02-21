import { useRef, useState, useEffect } from 'react'

interface AsciiMagneticProps {
  className?: string
}

interface Dot {
  baseX: number
  baseY: number
  x: number
  y: number
  char: string
}

const INITIAL_DOTS: Omit<Dot, 'x' | 'y'>[] = [
  { baseX: -80, baseY: -40, char: '•' },
  { baseX: 80, baseY: -40, char: '•' },
  { baseX: -60, baseY: 0, char: '◦' },
  { baseX: 60, baseY: 0, char: '◦' },
  { baseX: -80, baseY: 40, char: '•' },
  { baseX: 80, baseY: 40, char: '•' },
  { baseX: 0, baseY: -60, char: '◦' },
  { baseX: 0, baseY: 60, char: '◦' },
]

const PULL_RADIUS = 200
const PULL_STRENGTH = 0.6

export const AsciiMagnetic: React.FC<AsciiMagneticProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState<Dot[]>(
    INITIAL_DOTS.map((d) => ({ ...d, x: d.baseX, y: d.baseY }))
  )
  const animRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      mouseRef.current = { x: e.clientX - cx, y: e.clientY - cy }
    }

    const handleMouseLeave = () => {
      mouseRef.current = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      setDots((prev) =>
        prev.map((dot) => {
          let targetX = dot.baseX
          let targetY = dot.baseY

          if (mouseRef.current) {
            const dx = mouseRef.current.x - dot.baseX
            const dy = mouseRef.current.y - dot.baseY
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < PULL_RADIUS) {
              const force = (1 - dist / PULL_RADIUS) * PULL_STRENGTH
              targetX = dot.baseX + dx * force
              targetY = dot.baseY + dy * force
            }
          }

          return {
            ...dot,
            x: dot.x + (targetX - dot.x) * 0.12,
            y: dot.y + (targetY - dot.y) * 0.12,
          }
        })
      )
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute font-mono text-2xl text-white pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${dot.x}px), calc(-50% + ${dot.y}px))`,
            transition: 'none',
          }}
        >
          {dot.char}
        </span>
      ))}
    </div>
  )
}
