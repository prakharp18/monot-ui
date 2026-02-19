import { useState, useEffect } from 'react'

interface AsciiSparkProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '.',
  '*',
  '✦',
  '*',
  '.',
  ' ',
  ' ',
]

export const AsciiSpark: React.FC<AsciiSparkProps> = ({
  speed = 150,
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
      <span className="font-mono text-4xl text-white transition-all duration-75">
        {FRAMES[frame] || '\u00A0'}
      </span>
    </div>
  )
}
