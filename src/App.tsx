import { HashRouter, Routes, Route } from 'react-router-dom'
import MarketingSite from './pages/MarketingSite'
import RegistrationFlow from './pages/RegistrationFlow'
import ParentOnboarding from './pages/ParentOnboarding'
import ParentDashboard from './pages/ParentDashboard'
import DeliverablesCenter from './pages/DeliverablesCenter'
import DeparturePage from './pages/DeparturePage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MarketingSite />} />
        <Route path="/register" element={<RegistrationFlow />} />
        <Route path="/onboarding" element={<ParentOnboarding />} />
        <Route path="/dashboard" element={<ParentDashboard />} />
        <Route path="/deliverables" element={<DeliverablesCenter />} />
        <Route path="/departure" element={<DeparturePage />} />
      </Routes>
    </HashRouter>
  )
}
