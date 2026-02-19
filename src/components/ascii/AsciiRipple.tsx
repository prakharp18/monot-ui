import { useState, useEffect } from 'react'

interface AsciiRippleProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '   •   ',
  '  ○○○  ',
  ' ○   ○ ',
  '○     ○',
  '       ', // pause
]

export const AsciiRipple: React.FC<AsciiRippleProps> = ({
  speed = 400,
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
      <pre className="font-mono text-2xl text-white whitespace-pre text-center leading-none">
        {FRAMES[frame]}
      </pre>
    </div>
  )
}
