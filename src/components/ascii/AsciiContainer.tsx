import React, { type ReactNode } from 'react';

interface AsciiContainerProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export const AsciiContainer: React.FC<AsciiContainerProps> = ({
  children,
  className = '',
  bordered = true,
}) => {
  return (
    <div
      className={`font-mono bg-black text-green-500 p-4 border border-green-700 shadow-[0_0_10px_rgba(0,255,0,0.2)] ${
        bordered ? 'border-2' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
