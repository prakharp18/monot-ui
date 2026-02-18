import { useEffect, useRef, useCallback } from "react";

interface AsciiRainProps {
  charset?: string;
  speed?: number;
  density?: number;
  color?: string;
  fadeSteps?: number;
  className?: string;
}

interface Drop {
  y: number;
  speed: number;
  chars: string[];
  trailLength: number;
}

const DEFAULT_CHARSET =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";

export const AsciiRain: React.FC<AsciiRainProps> = ({
  charset = DEFAULT_CHARSET,
  speed = 50,
  density = 0.95,
  color = "#00ff41",
  fadeSteps = 12,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<string[][]>([]);
  const opacityRef = useRef<number[][]>([]);
  const dropsRef = useRef<Drop[]>([]);
  const animRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);
  const preRef = useRef<HTMLPreElement>(null);
  const colsRef = useRef(0);
  const rowsRef = useRef(0);

  const randomChar = useCallback(() => {
    return charset[Math.floor(Math.random() * charset.length)];
  }, [charset]);

  const initGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const charW = 9.6;
    const charH = 18;
    const cols = Math.floor(container.clientWidth / charW);
    const rows = Math.floor(container.clientHeight / charH);

    colsRef.current = cols;
    rowsRef.current = rows;

    gridRef.current = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => " "),
    );
    opacityRef.current = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => 0),
    );

    dropsRef.current = Array.from({ length: cols }, (_, i) => {
      if (Math.random() > density) {
        return {
          y: -999,
          speed: 0,
          chars: [],
          trailLength: 0,
        };
      }
      return {
        y: Math.floor(Math.random() * rows * -1),
        speed: 0.3 + Math.random() * 0.7,
        chars: Array.from({ length: fadeSteps }, () => randomChar()),
        trailLength: 4 + Math.floor(Math.random() * (fadeSteps - 4)),
      };
    });
  }, [density, fadeSteps, randomChar]);

  useEffect(() => {
    initGrid();

    const tick = (timestamp: number) => {
      if (timestamp - lastTickRef.current < speed) {
        animRef.current = requestAnimationFrame(tick);
        return;
      }
      lastTickRef.current = timestamp;

      const cols = colsRef.current;
      const rows = rowsRef.current;
      const grid = gridRef.current;
      const opacity = opacityRef.current;

      if (!grid.length || !rows || !cols) {
        animRef.current = requestAnimationFrame(tick);
        return;
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (opacity[r][c] > 0) {
            opacity[r][c] = Math.max(0, opacity[r][c] - 1 / fadeSteps);
          }
          if (opacity[r][c] <= 0.01) {
            grid[r][c] = " ";
            opacity[r][c] = 0;
          }
        }
      }

      for (let c = 0; c < dropsRef.current.length; c++) {
        const drop = dropsRef.current[c];
        if (drop.speed === 0) continue;

        drop.y += drop.speed;

        const headY = Math.floor(drop.y);

        if (headY >= 0 && headY < rows) {
          const newChar = randomChar();
          grid[headY][c] = newChar;
          opacity[headY][c] = 1;

          if (Math.random() < 0.08 && headY > 0 && headY < rows) {
            grid[headY][c] = randomChar();
          }
        }

        if (headY - drop.trailLength > rows) {
          drop.y = Math.floor(Math.random() * rows * -0.5);
          drop.speed = 0.3 + Math.random() * 0.7;
          drop.trailLength = 4 + Math.floor(Math.random() * (fadeSteps - 4));
        }
      }

      if (preRef.current) {
        let output = "";
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const op = opacity[r][c];
            if (op > 0.8) {
              output += `<span style="color:#fff;text-shadow:0 0 8px ${color}">${grid[r][c]}</span>`;
            } else if (op > 0) {
              output += `<span style="color:${color};opacity:${op.toFixed(2)}">${grid[r][c]}</span>`;
            } else {
              output += " ";
            }
          }
          if (r < rows - 1) output += "\n";
        }
        preRef.current.innerHTML = output;
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animRef.current);
  }, [speed, fadeSteps, color, initGrid, randomChar]);

  useEffect(() => {
    const handleResize = () => initGrid();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initGrid]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ width: "100%", height: "100%", minHeight: 200 }}
    >
      <pre
        ref={preRef}
        className="absolute inset-0 m-0 p-0 leading-[18px] text-[14px] font-mono select-none pointer-events-none"
        style={{ fontFamily: "'Courier New', monospace", letterSpacing: "2px" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`,
          backgroundSize: "100% 4px",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};
