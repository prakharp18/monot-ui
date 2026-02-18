import { useState, useEffect, useCallback } from 'react'

interface AsciiFaceProps {
  className?: string
  blinkInterval?: number
  size?: 'sm' | 'md' | 'lg'
}

export const AsciiFace: React.FC<AsciiFaceProps> = ({
  className = '',
  blinkInterval = 3000,
  size = 'md',
}) => {
  const [isBlinking, setIsBlinking] = useState(false)
  const [breatheScale, setBreatheScale] = useState(1)

  const blink = useCallback(() => {
    setIsBlinking(true)
    setTimeout(() => setIsBlinking(false), 150)
  }, [])

  useEffect(() => {
    const scheduleNextBlink = () => {
      const jitter = blinkInterval * 0.5 * (Math.random() - 0.5)
      return setTimeout(() => {
        blink()
        timerId = scheduleNextBlink()
      }, blinkInterval + jitter)
    }

    let timerId = scheduleNextBlink()
    return () => clearTimeout(timerId)
  }, [blinkInterval, blink])

  useEffect(() => {
    let frame: number
    let start: number | null = null

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsed = (timestamp - start) / 1000
      const scale = 1 + Math.sin(elapsed * 1.2) * 0.02
      setBreatheScale(scale)
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  }

  const eyes = isBlinking ? '−' : '•'
  const face = `(${eyes}‿${eyes})`

  return (
    <div
      className={`flex items-center justify-center select-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    >
      <span
        className={`font-mono ${sizeClasses[size]} text-zinc-300 transition-colors duration-700`}
        style={{
          transform: `scale(${breatheScale})`,
          display: 'inline-block',
        }}
      >
        {face}
      </span>
    </div>
  )
}
