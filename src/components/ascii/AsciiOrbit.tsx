import { useState, useEffect } from 'react'

interface AsciiOrbitProps {
  speed?: number
  className?: string
}


const SIMPLE_ORBIT = [
  ['  •  ', '     ', '  ○  ', '     ', '  •  '],
  ['     ', ' •   ', '  ○  ', '   • ', '     '],
  ['     ', '     ', '• ○ •', '     ', '     '],
  ['     ', '   • ', '  ○  ', ' •   ', '     '],
  ['  •  ', '     ', '  ○  ', '     ', '  •  '],
];


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
