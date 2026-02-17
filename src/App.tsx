import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/LandingPage'
import { DashboardPage } from '@/components/DashboardPage'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
