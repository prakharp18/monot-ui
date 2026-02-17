import { Globe } from "lucide-react"
import { WrapButton } from "@/components/ui/wrap-button"

interface LandingPageProps {
  onEnter: () => void
}

export const LandingPage = ({ onEnter }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white tracking-tighter mb-2">
        Monot - UI
      </h1>
      <p className="text-zinc-500 text-lg mb-10 tracking-tight">
        ASCII Animation Component Library
      </p>
      <WrapButton onClick={onEnter}>
        <Globe className="animate-spin" size={18} />
        Get started
      </WrapButton>
    </div>
  )
}
