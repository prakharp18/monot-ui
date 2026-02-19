import { useState, useEffect, useRef } from 'react'

interface AsciiEyeProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const AsciiEye: React.FC<AsciiEyeProps> = ({
  size = 'md',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      // Calculate normalized position (-1 to 1)
      const dx = (e.clientX - centerX) / (window.innerWidth / 2)
      const dy = (e.clientY - centerY) / (window.innerHeight / 2)
      
      // Clamp
      const x = Math.max(-1, Math.min(1, dx))
      const y = Math.max(-1, Math.min(1, dy))
      
      setPupilPos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-6xl',
    lg: 'text-8xl',
  }

 
  const pupilX = pupilPos.x * 20
  const pupilY = pupilPos.y * 10

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none ${className}`}
    >
      {/* Frame */}
      <pre className={`font-mono ${sizeClasses[size]} text-zinc-600 leading-none tracking-widest`}>
{`╭───────╮
│       │
│       │
╰───────╯`}
      </pre>

      {/* Pupil */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none`}
      >
        <span 
          className={`font-mono ${sizeClasses[size]} text-white transition-transform duration-100 ease-out`}
          style={{ transform: `translate(${pupilX}px, ${pupilY}px)` }}
        >
         (•)
        </span>
      </div>
    </div>
  )
}
