import { useState, useEffect } from 'react'

interface AsciiBeamProps {
  speed?: number
  className?: string
}

// Light sweep illusion
const FRAMES = [
  '[████████]',
  '[░███████]',
  '[░░██████]',
  '[░░░█████]',
  '[░░░░████]',
  '[░░░░░███]',
  '[░░░░░░██]',
  '[░░░░░░░█]',
  '[░░░░░░░░]',
  '[█░░░░░░░]',
  '[██░░░░░░]',
  '[███░░░░░]',
  '[████░░░░]',
  '[█████░░░]',
  '[██████░░]',
  '[███████░]',
]

export const AsciiBeam: React.FC<AsciiBeamProps> = ({
  speed = 80,
  className = '',
}) => {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % FRAMES.length)
    }, speed)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <span className="font-mono text-2xl text-white tracking-widest">
        {FRAMES[frame]}
      </span>
    </div>
  )
}
