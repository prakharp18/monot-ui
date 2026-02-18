import { useState, useEffect } from 'react'

interface AsciiBounceProps {
  trackWidth?: number
  speed?: number
  dot?: string
  className?: string
}

export const AsciiBounce: React.FC<AsciiBounceProps> = ({
  trackWidth = 20,
  speed = 120,
  dot = '•',
  className = '',
}) => {
  const [position, setPosition] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const next = prev + direction
        if (next >= trackWidth - 1) {
          setDirection(-1)
          return trackWidth - 1
        }
        if (next <= 0) {
          setDirection(1)
          return 0
        }
        return next
      })
    }, speed)

    return () => clearInterval(interval)
  }, [direction, trackWidth, speed])

  const track = Array.from({ length: trackWidth }, (_, i) =>
    i === position ? dot : ' '
  ).join('')

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <pre
        className="font-mono text-2xl text-zinc-300 m-0 p-0 tracking-[0.15em]"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {track}
      </pre>
    </div>
  )
}
