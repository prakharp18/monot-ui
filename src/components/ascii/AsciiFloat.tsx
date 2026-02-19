import { useState, useEffect } from 'react'

interface AsciiFloatProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '•     •\n   •   \n      •\n  •    ',
  ' •     \n  • •  \n     • \n •     ',
  '   •   \n •   • \n    •  \n•      ',
  '    •  \n•     •\n   •   \n  •    ',
]

export const AsciiFloat: React.FC<AsciiFloatProps> = ({
  speed = 800,
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
      <pre className="font-mono text-xl text-white whitespace-pre leading-relaxed text-center opacity-80">
        {FRAMES[frame]}
      </pre>
    </div>
  )
}
