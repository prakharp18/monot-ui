import { useState, useEffect } from 'react'

interface AsciiStabilizeProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '~ ~ ~ ~ ~',
  ' ~ ~ ~ ~ ',
  '  ~ ~ ~  ',
  '   ~ ~   ',
  '    ~    ',
  '   ~ ~   ',
  '  ~ ~ ~  ',
  ' ~ ~ ~ ~ ',
]

export const AsciiStabilize: React.FC<AsciiStabilizeProps> = ({
  speed = 200,
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
