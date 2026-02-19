import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export interface PanelItem {
  label: string
  description: string
  preview: ReactNode
  route: string
}

import type { ReactNode } from "react"

interface HoverExpandProps {
  panels: PanelItem[]
  initialSelectedIndex?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  panels,
  initialSelectedIndex = 0,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className="relative">
      {/* Thumbnails row */}
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {panels.slice(0, maxThumbnails).map((panel, i) => (
          <div
            key={`panel-container-${i}`}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] border ${
              selectedIndex === i
                ? "w-[calc(100vw-80px)] sm:w-[300px] md:w-[340px] h-[400px] border-white/20"
                : "w-4 sm:w-5 md:w-8 xl:w-12 h-[400px] border-white/5"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onMouseLeave={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div
              layoutId={`panel-${i}`}
              className="absolute inset-0 size-full"
            >
              {/* Static preview */}
              <div className="size-full overflow-hidden bg-black flex items-center justify-center translate-x-[-50%] left-[50%] absolute">
                <div className="scale-75 sm:scale-100 transition-transform">
                  {panel.preview}
                </div>
              </div>

              {/* Label overlay at bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
                  selectedIndex === i ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                }}
              >
                <span className="font-mono text-[11px] text-zinc-400 tracking-[0.2em] uppercase block">
                  {panel.label}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal — shows description + static preview + "View Live" button */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 w-full max-w-[500px]"
            >
              <motion.div
                layoutId={`panel-${selectedIndex}`}
                className="relative aspect-video w-full"
              >
                <div className="size-full overflow-hidden bg-black flex items-center justify-center">
                  <div className="scale-75 sm:scale-100 transition-transform">
                    {panels[selectedIndex]?.preview}
                  </div>
                </div>
              </motion.div>

              {/* Info section */}
              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-mono text-sm text-white tracking-[0.15em] uppercase">
                  {panels[selectedIndex]?.label}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {panels[selectedIndex]?.description}
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false)
                    navigate(panels[selectedIndex]?.route)
                  }}
                  className="mt-2 self-start font-mono text-xs tracking-[0.2em] uppercase px-5 py-2.5 border border-white/20 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  View Live →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
