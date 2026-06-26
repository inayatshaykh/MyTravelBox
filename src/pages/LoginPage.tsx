import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { findUser } from '../data/users'
import { useAuth } from '../context/AuthContext'
import type { UserRole } from '../types'

const roleLabels: Record<UserRole, string> = {
  director:       '🏢 Director',
  branch_manager: '📊 Branch Manager',
  operations:     '⚙️ Operations',
  sales:          '💼 Sales',
  visa_team:      '🛂 Visa Team',
  accounts:       '💰 Accounts',
  tour_manager:   '🗺️ Tour Manager',
  parent:         '👪 Parent / Guardian',
}

const roleRedirect: Record<UserRole, string> = {
  director:       '/dashboard',
  branch_manager: '/dashboard',
  operations:     '/dashboard',
  sales:          '/dashboard',
  visa_team:      '/dashboard',
  accounts:       '/dashboard',
  tour_manager:   '/departure',
  parent:         '/onboarding',
}

// Quick-fill demo credentials
const demoAccounts = [
  { label: 'Director',       email: 'director@mytravelbox.com',    password: 'Director@123' },
  { label: 'Branch Manager', email: 'bm@mytravelbox.com',          password: 'Manager@123' },
  { label: 'Operations',     email: 'ops@mytravelbox.com',         password: 'Ops@1234' },
  { label: 'Sales',          email: 'sales@mytravelbox.com',       password: 'Sales@123' },
  { label: 'Visa Team',      email: 'visa@mytravelbox.com',        password: 'Visa@1234' },
  { label: 'Accounts',       email: 'accounts@mytravelbox.com',    password: 'Accounts@1' },
  { label: 'Tour Manager',   email: 'tourmanager@mytravelbox.com', password: 'Tour@1234' },
  { label: 'Parent 1',       email: 'parent1@example.com',         password: 'Parent@123' },
  { label: 'Parent 2',       email: 'parent2@example.com',         password: 'Parent@456' },
  { label: 'Parent 3',       email: 'parent3@example.com',         password: 'Parent@789' },
]

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Please enter both email and password.'); return }
    setLoading(true)
    setTimeout(() => {
      const user = findUser(email, password)
      if (!user) {
        setError('Invalid email or password. Try a demo account below.')
        setLoading(false)
        return
      }
      login(user)
      navigate(roleRedirect[user.role])
    }, 600)
  }

  function fillDemo(acc: typeof demoAccounts[0]) {
    setEmail(acc.email)
    setPassword(acc.password)
    setError('')
    setShowDemo(false)
  }

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* ── Header ── */}
      <header className="flex justify-between items-center px-4 sm:px-8 py-4 border-b border-line">
        <button
          onClick={() => navigate('/')}
          className="font-fraunces font-semibold text-ink text-[17px] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded"
        >
          My<span className="text-amber">Travel</span>Box
        </button>
        <span className="text-[12px] text-ink-faint font-medium">Staff & Parent Portal</span>
      </header>

      {/* ── Main ── */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-[420px]">

          {/* Card */}
          <div className="bg-paper-raised border border-line rounded-2xl shadow p-6 sm:p-8">
            {/* Title */}
            <div className="mb-6">
              <h1 className="font-fraunces text-[26px] sm:text-[28px] font-semibold text-ink">
                Welcome back
              </h1>
              <p className="text-[13.5px] text-ink-soft mt-1">
                Sign in to access your dashboard
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-terracotta-soft border border-terracotta/30 text-terracotta text-[13px] font-medium rounded-xl px-4 py-3 mb-4">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-3 border-[1.5px] border-line rounded-xl text-[14px] bg-paper focus:outline-none focus:border-amber transition-colors"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPw ? 'text' : 'password'}
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-3 pr-11 border-[1.5px] border-line rounded-xl text-[14px] bg-paper focus:outline-none focus:border-amber transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink transition-colors"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                  >
                    {showPw ? (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                        <path d="M3 3l14 14M8.5 8.7A3 3 0 0013.3 13.5M6.3 5.1A8.5 8.5 0 002 10c1.4 3 4.5 5 8 5a8.4 8.4 0 004.7-1.4M9 4.1A8.5 8.5 0 0118 10c-.6 1.4-1.6 2.6-2.8 3.5"
                          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
                        <path d="M2 10c1.4-3.5 4.5-6 8-6s6.6 2.5 8 6c-1.4 3.5-4.5 6-8 6s-6.6-2.5-8-6z"
                          stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ink text-paper font-bold text-[14.5px] py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2 mt-1"
              >
                {loading ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"/>
                    <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                ) : null}
                {loading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            {/* Demo accounts toggle */}
            <div className="mt-5 pt-5 border-t border-line">
              <button
                onClick={() => setShowDemo(v => !v)}
                className="w-full flex items-center justify-between text-[13px] font-semibold text-amber-deep hover:opacity-80 transition-opacity"
              >
                <span>🔑 Try a demo account</span>
                <svg
                  viewBox="0 0 16 16" fill="none" className={`w-4 h-4 transition-transform duration-200 ${showDemo ? 'rotate-180' : ''}`}
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {showDemo && (
                <div className="mt-3 flex flex-col gap-1.5">
                  {demoAccounts.map(acc => (
                    <button
                      key={acc.email}
                      onClick={() => fillDemo(acc)}
                      className="flex items-center justify-between text-left px-3 py-2.5 rounded-xl border border-line hover:border-amber hover:bg-amber-soft/30 transition-all group"
                    >
                      <div>
                        <div className="text-[13px] font-semibold text-ink group-hover:text-amber-deep transition-colors">
                          {acc.label}
                        </div>
                        <div className="text-[11.5px] text-ink-faint mt-0.5">{acc.email}</div>
                      </div>
                      <span className="text-[11px] font-mono text-ink-faint group-hover:text-amber-deep bg-paper px-2 py-1 rounded-lg border border-line ml-2 flex-shrink-0 transition-colors">
                        {acc.password}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role badges */}
          <div className="mt-6 text-center">
            <p className="text-[12px] text-ink-faint mb-3">Access levels available</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(Object.entries(roleLabels) as [UserRole, string][]).map(([role, label]) => (
                <span
                  key={role}
                  className="text-[11px] font-semibold px-2.5 py-1 bg-paper-raised border border-line rounded-full text-ink-soft"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
