import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/LandingPage'
import { DashboardPage } from '@/components/DashboardPage'
import { FacePage } from '@/components/pages/FacePage'
import { ArrowPage } from '@/components/pages/ArrowPage'
import { MagneticPage } from '@/components/pages/MagneticPage'
import { PathPage } from '@/components/pages/PathPage'
import { BeamPage } from '@/components/pages/BeamPage'
import { RipplePage } from '@/components/pages/RipplePage'
import { OrbitPage } from '@/components/pages/OrbitPage'
import { SparkPage } from '@/components/pages/SparkPage'
import { DecisionPage } from '@/components/pages/DecisionPage'
import { MemoryPage } from '@/components/pages/MemoryPage'
import { StabilizePage } from '@/components/pages/StabilizePage'
import { FloatPage } from '@/components/pages/FloatPage'
import { EyePage } from '@/components/pages/EyePage'

import './index.css'

function App() {
  return (

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/component/face" element={<FacePage />} />
        <Route path="/component/arrow" element={<ArrowPage />} />
        <Route path="/component/magnetic" element={<MagneticPage />} />
        <Route path="/component/path" element={<PathPage />} />
        <Route path="/component/beam" element={<BeamPage />} />
        <Route path="/component/ripple" element={<RipplePage />} />
        <Route path="/component/orbit" element={<OrbitPage />} />
        <Route path="/component/spark" element={<SparkPage />} />
        <Route path="/component/decision" element={<DecisionPage />} />
        <Route path="/component/memory" element={<MemoryPage />} />
        <Route path="/component/stabilize" element={<StabilizePage />} />
        <Route path="/component/float" element={<FloatPage />} />
        <Route path="/component/eye" element={<EyePage />} />
      </Routes>

  )
}

export default App
