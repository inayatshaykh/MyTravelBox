import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function DashboardShell({ children, title, subtitle }: Props) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  const roleColor: Record<string, string> = {
    director:       'bg-[#4A2E22] text-white',
    branch_manager: 'bg-[#C25E12] text-white',
    operations:     'bg-[#5B8A6B] text-white',
    sales:          'bg-[#3B82F6] text-white',
    visa_team:      'bg-[#7C3AED] text-white',
    accounts:       'bg-[#059669] text-white',
    tour_manager:   'bg-[#DC2626] text-white',
    parent:         'bg-amber text-ink',
  }

  const roleBadge = roleColor[user?.role ?? 'parent']

  return (
    <div className="min-h-screen bg-paper">
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-30 bg-paper-raised border-b border-line px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <button
          onClick={() => navigate('/')}
          className="font-fraunces font-semibold text-ink text-[15px] sm:text-[16px] hover:opacity-80 transition-opacity flex-shrink-0"
        >
          My<span className="text-amber">Travel</span>Box
        </button>

        {/* Page title — hidden on very small */}
        <div className="hidden sm:block text-center flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-ink truncate">{title}</div>
          {subtitle && <div className="text-[11px] text-ink-faint truncate">{subtitle}</div>}
        </div>

        {/* User + logout */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className={`hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold ${roleBadge}`}>
            <span>{user?.avatar}</span>
            <span className="capitalize">{user?.role?.replace('_', ' ')}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[12px] flex items-center justify-center sm:hidden">
            {user?.avatar}
          </div>
          <button
            onClick={handleLogout}
            className="text-[12px] font-semibold text-ink-faint hover:text-terracotta transition-colors px-2"
            aria-label="Sign out"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-8 pb-10">
        {/* Mobile title */}
        <div className="sm:hidden mb-5">
          <h1 className="text-[22px] font-semibold text-ink">{title}</h1>
          {subtitle && <p className="text-[12.5px] text-ink-faint mt-0.5">{subtitle}</p>}
        </div>
        {children}
      </main>
    </div>
  )
}
