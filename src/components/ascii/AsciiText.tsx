import React, { useState, useEffect } from 'react';

interface AsciiTextProps {
  text: string;
  enableGlitch?: boolean;
  trigger?: boolean;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export const AsciiText: React.FC<AsciiTextProps> = ({
  text,
  enableGlitch = true,
  trigger = true,
  speed = 50,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    if (!trigger) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
        return;
      }

      if (enableGlitch) {
        // Show random char before locking in the correct one
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        setDisplayText((prev) => prev.slice(0, currentIndex) + randomChar);
        
        // Wait a tiny bit then set the correct char
        setTimeout(() => {
             setDisplayText(() => {
                // Return correct text slice up to current index
                return text.slice(0, currentIndex + 1);
             });
        }, speed / 2);

      } else {
        setDisplayText(text.slice(0, currentIndex + 1));
      }

      currentIndex++;
    }, speed);

    return () => clearInterval(interval);
  }, [text, trigger, speed, enableGlitch, onComplete]);

  return <span className={className}>{displayText}</span>;
};
