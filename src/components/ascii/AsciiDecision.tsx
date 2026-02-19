import { useState, useEffect } from 'react'

interface AsciiDecisionProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '  •  \n     \n     \n     \n     ',
  '     \n / \\ \n     \n \\ / \n     ',
  '     \n     \n•   •\n     \n     ',
  '     \n / \\ \n     \n \\ / \n     ',
  '     \n     \n     \n     \n  •  ',
]

export const AsciiDecision: React.FC<AsciiDecisionProps> = ({
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
      <pre className="font-mono text-xl text-white whitespace-pre leading-none text-center">
        {FRAMES[frame]}
      </pre>
    </div>
  )
}
