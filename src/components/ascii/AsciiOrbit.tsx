import { useState, useEffect } from 'react'

interface AsciiOrbitProps {
  speed?: number
  className?: string
}

const FRAMES = [
  '  •  \n•   •\n  ○  \n•   •\n  •  ', // 0
  '  •  \n•   •\n  ○  \n•   •\n  •  ', // 1
]


const ORBIT_FRAMES = [
  '  •  \n•   •\n  ○  \n•   •\n  •  ',
  '  •  \n•   •\n  ○  \n•   •\n  •  ', 
]


// Let's try 8 frames of a dot circling a center char
const CIRCLE_FRAMES = [
  '  •  \n     \n  ○  \n     \n     ', // Top
  '     \n    •\n  ○  \n     \n     ', // Top-Right
  '     \n     \n  ○  \n    •\n     ', // Right
  '     \n     \n  ○  \n     \n    •', // Bottom-Right
  '     \n     \n  ○  \n     \n  •  ', // Bottom
  '     \n     \n  ○  \n•    \n     ', // Bottom-Left
  '     \n     \n  ○  \n     \n•    ', // Left 
]
// Simplified 8-point orbit
const SIMPLE_ORBIT = [
  ['  •  ', '     ', '  ○  ', '     ', '     '],
  ['     ', '    •', '  ○  ', '     ', '     '],
  ['     ', '     ', '  ○ •', '     ', '     '], // Right
  ['     ', '     ', '  ○  ', '    •', '     '],
  ['     ', '     ', '  ○  ', '     ', '  •  '],
  ['     ', '     ', '  ○  ', '•    ', '     '],
  ['     ', '     ', '• ○  ', '     ', '     '], // Left
  ['     ', '•    ', '  ○  ', '     ', '     '],
]

export const AsciiOrbit: React.FC<AsciiOrbitProps> = ({
  speed = 150,
  className = '',
}) => {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % SIMPLE_ORBIT.length)
    }, speed)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <pre className="font-mono text-xl text-white whitespace-pre leading-none">
        {SIMPLE_ORBIT[frame].join('\n')}
      </pre>
    </div>
  )
}
