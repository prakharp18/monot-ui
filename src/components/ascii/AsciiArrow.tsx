import { useState, useEffect } from 'react'

interface AsciiArrowProps {
  speed?: number
  className?: string
}

const TRAIL = ['→', '→→', '→→→', '→→', '→', ' ']

export const AsciiArrow: React.FC<AsciiArrowProps> = ({
  speed = 400,
  className = '',
}) => {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % TRAIL.length)
    }, speed)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <span className="font-mono text-4xl text-white tracking-widest">
        {TRAIL[frame] || '\u00A0'}
      </span>
    </div>
  )
}
