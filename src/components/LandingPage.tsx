import { Globe } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { WrapButton } from "@/components/ui/wrap-button"

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-2 text-center">
        Monot - UI
      </h1>
      <p className="text-zinc-500 text-lg mb-10 tracking-tight">
        ASCII Animation Component Library
      </p>
      <WrapButton onClick={() => navigate('/dashboard')}>
        <Globe className="animate-spin" size={18} />
        Get started
      </WrapButton>
    </div>
  )
}

