import React, { useEffect, useState, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"

export interface PanelItem {
  label: string
  component: ReactNode
  bg?: string
}

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative">
      {/* Thumbnails row */}
      <div className="mx-auto flex w-fit gap-1 rounded-md pb-20 pt-10 md:gap-2">
        {panels.slice(0, maxThumbnails).map((panel, i) => (
          <div
            key={`panel-container-${i}`}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
              selectedIndex === i
                ? "w-[340px] h-[400px]"
                : "w-4 sm:w-5 md:w-8 xl:w-12 h-[400px]"
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
              <div className="size-full overflow-hidden bg-black">
                {panel.component}
              </div>
              {/* Label overlay at bottom */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
                  selectedIndex === i ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                }}
              >
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                  {panel.label}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-black/70 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-2xl bg-black border border-zinc-800"
            >
              <motion.div
                layoutId={`panel-${selectedIndex}`}
                className="relative"
                style={{ width: 600, height: 500 }}
              >
                <div className="size-full overflow-hidden">
                  {panels[selectedIndex]?.component}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                  }}
                >
                  <span className="font-mono text-sm text-white tracking-widest uppercase">
                    {panels[selectedIndex]?.label}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
