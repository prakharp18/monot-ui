import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/LandingPage'
import { DashboardPage } from '@/components/DashboardPage'
import { FacePage } from '@/components/pages/FacePage'
import { BouncePage } from '@/components/pages/BouncePage'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/component/face" element={<FacePage />} />
      <Route path="/component/bounce" element={<BouncePage />} />
    </Routes>
  )
}

export default App
