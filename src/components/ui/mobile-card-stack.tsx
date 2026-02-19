import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { PanelItem } from './hover-expand'

interface MobileCardStackProps {
  panels: PanelItem[]
}

export const MobileCardStack = ({ panels }: MobileCardStackProps) => {
  const navigate = useNavigate()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={scrollContainerRef}
      className="flex flex-col gap-6 pb-20 md:hidden"
    >
      <div className="flex flex-col gap-10">
        {panels.map((panel, i) => (
          <motion.div
            key={`mobile-panel-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col gap-4"
          >
            {/* Card Container */}
            <div 
              onClick={() => navigate(panel.route)}
              className="group relative w-full aspect-square sm:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 active:scale-95 transition-transform duration-200"
            >
              {/* Preview */}
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="scale-75 sm:scale-100 transition-transform">
                  {panel.preview}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-xs text-white tracking-[0.2em] uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  {panel.label}
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white opacity-0 group-active:opacity-100 transition-opacity">
                ↗
              </div>
            </div>

            {/* Description (Outside card for cleaner look on mobile) */}
            <div className="px-1">
              <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                {panel.description}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  )
}
