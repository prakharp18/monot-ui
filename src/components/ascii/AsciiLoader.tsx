import React, { useState, useEffect } from 'react';

interface AsciiLoaderProps {
  type?: 'spinner' | 'bar' | 'dots';
  speed?: number;
  length?: number;
}

export const AsciiLoader: React.FC<AsciiLoaderProps> = ({
  type = 'spinner',
  speed = 100,
  length = 20,
}) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => prev + 1);
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  const renderSpinner = () => {
    const chars = ['|', '/', '-', '\\'];
    return chars[frame % chars.length];
  };

  const renderBar = () => {
    const progress = frame % (length + 1);
    const filled = '#'.repeat(progress);
    const empty = '-'.repeat(length - progress);
    return `[${filled}${empty}]`;
  };

  const renderDots = () => {
    const dots = '.'.repeat((frame % 4) + 1);
    return `Loading${dots}`;
  };

  return (
    <span className="font-mono">
      {type === 'spinner' && renderSpinner()}
      {type === 'bar' && renderBar()}
      {type === 'dots' && renderDots()}
    </span>
  );
};
