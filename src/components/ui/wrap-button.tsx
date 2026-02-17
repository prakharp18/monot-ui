import React from "react"
import { ArrowRight, Globe } from "lucide-react"

import { cn } from "@/lib/utils"

interface WrapButtonProps {
  className?: string
  children: React.ReactNode
  href?: string
  onClick?: () => void
}

const WrapButton: React.FC<WrapButtonProps> = ({
  className,
  children,
  href,
  onClick,
}) => {
  const innerContent = (
    <>
      <div className="border border-[#3B3A3A] bg-[#ff3f17] h-[43px] rounded-full flex items-center justify-center text-white">
        <p className="font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center">
          {children}
        </p>
      </div>
      <div className="text-[#3b3a3a] group-hover:ml-2 ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
        <ArrowRight
          size={18}
          className="group-hover:rotate-45 ease-in-out transition-all"
        />
      </div>
    </>
  )

  const wrapperClass = cn(
    "group cursor-pointer border border-[#3B3A3A] bg-[#151515] gap-2 h-[64px] flex items-center p-[11px] rounded-full",
    className
  )

  if (href) {
    return (
      <div className="flex items-center justify-center">
        <a href={href} className={wrapperClass}>
          {innerContent}
        </a>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center">
      <div className={wrapperClass} onClick={onClick}>
        {innerContent}
      </div>
    </div>
  )
}

export { WrapButton }
