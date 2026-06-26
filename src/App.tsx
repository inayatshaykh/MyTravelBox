import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import type { ReactNode } from 'react'

import MarketingSite from './pages/MarketingSite'
import LoginPage from './pages/LoginPage'
import RegistrationFlow from './pages/RegistrationFlow'
import ParentOnboarding from './pages/ParentOnboarding'
import DashboardRouter from './pages/DashboardRouter'
import DeliverablesCenter from './pages/DeliverablesCenter'
import DeparturePage from './pages/DeparturePage'

function Protected({ children }: { children: ReactNode }) {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/"         element={<MarketingSite />} />
      <Route path="/login"    element={<LoginPage />} />
      <Route path="/register" element={<RegistrationFlow />} />

      {/* Protected — role-aware */}
      <Route path="/dashboard"    element={<Protected><DashboardRouter /></Protected>} />
      <Route path="/onboarding"   element={<Protected><ParentOnboarding /></Protected>} />
      <Route path="/deliverables" element={<Protected><DeliverablesCenter /></Protected>} />
      <Route path="/departure"    element={<Protected><DeparturePage /></Protected>} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </HashRouter>
  )
}
