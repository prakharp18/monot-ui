import { useState, useEffect } from 'react'

interface AsciiPathProps {
  speed?: number
  className?: string
}

const STEPS = ['.', '. .', '. . .', '. . . .', '. . . . .']

export const AsciiPath: React.FC<AsciiPathProps> = ({
  speed = 300,
  className = '',
}) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % (STEPS.length + 2)) // Slight pause at end
    }, speed)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <span className="font-mono text-2xl text-white tracking-widest">
        {step < STEPS.length ? STEPS[step] : STEPS[STEPS.length - 1]}
      </span>
    </div>
  )
}
