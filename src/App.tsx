import { useState } from 'react'
import { LandingPage } from '@/components/LandingPage'
import './index.css'

type AppState = 'landing' | 'preloader' | 'dashboard'

function App() {
  const [appState, setAppState] = useState<AppState>('landing')

  return (
    <>
      {appState === 'landing' && (
        <LandingPage onEnter={() => setAppState('preloader')} />
      )}

      {appState === 'preloader' && (
        <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
          <p>Loading...</p>
        </div>
      )}

      {appState === 'dashboard' && (
        <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl">
          <p>Dashboard</p>
        </div>
      )}
    </>
  )
}

export default App
