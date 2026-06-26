import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'School Programs', href: '#programs' },
  { label: 'Destinations',    href: '#destinations' },
  { label: 'Safety & Risk',   href: '#safety' },
  { label: 'About Us',        href: '#about' },
  { label: 'Testimonials',    href: '#testimonials' },
]

export default function SiteHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout, isLoggedIn } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = location.pathname === '/'

  function handleLogout() {
    logout()
    navigate('/')
    setMenuOpen(false)
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-line"
      style={{ background: 'rgba(250,247,242,0.92)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3">

        {/* ── Logo ── */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
          onClick={() => navigate('/')}
          role="link"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/')}
          aria-label="MyTravelBox home"
        >
          <span className="font-fraunces font-semibold text-ink text-[16px] sm:text-[17px]">
            My<span className="text-amber">Travel</span>Box
          </span>
          <span className="hidden sm:inline text-[10px] font-bold tracking-[0.13em] text-ink-faint uppercase pl-3 border-l border-line whitespace-nowrap">
            Learn. Explore. Grow.
          </span>
        </div>

        {/* ── Desktop nav (only on home page) ── */}
        {isHome && (
          <nav className="hidden lg:flex gap-6 items-center" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-ink-soft hover:text-ink transition-colors duration-150 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* ── Right actions ── */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {isLoggedIn ? (
            <>
              {/* Avatar + name */}
              <button
                onClick={() => navigate('/dashboard')}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-line hover:border-amber hover:bg-amber-soft/30 transition-all"
                aria-label="Go to dashboard"
              >
                <div className="w-7 h-7 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[12px] flex items-center justify-center flex-shrink-0">
                  {user?.avatar}
                </div>
                <span className="text-[12.5px] font-semibold text-ink max-w-[100px] truncate">{user?.name}</span>
              </button>
              <Button variant="ghost" onClick={handleLogout} className="text-[12.5px] py-2 px-3">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                onClick={() => navigate('/login')}
                className="text-[12.5px] sm:text-[13.5px] py-2 sm:py-[11px] px-3 sm:px-[18px]"
              >
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => navigate('/register')}
                className="text-[12.5px] sm:text-[13.5px] py-2 sm:py-[11px] px-3 sm:px-5 hidden sm:inline-flex"
              >
                Request Proposal
              </Button>
            </>
          )}

          {/* ── Hamburger (mobile) ── */}
          <button
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none lg:hidden"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-ink rounded transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-line bg-paper shadow-md">
          {/* Nav links (home page only) */}
          {isHome && (
            <div className="px-4 pt-3 pb-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center text-[14px] font-medium text-ink-soft py-3 border-b border-line/50 last:border-0 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Auth section */}
          <div className="px-4 py-4 flex flex-col gap-2.5">
            {isLoggedIn ? (
              <>
                {/* User info */}
                <div className="flex items-center gap-3 bg-paper-raised border border-line rounded-xl px-3 py-2.5">
                  <div className="w-9 h-9 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[14px] flex items-center justify-center flex-shrink-0">
                    {user?.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14px] font-semibold text-ink truncate">{user?.name}</div>
                    <div className="text-[11.5px] text-ink-faint truncate">{user?.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}
                  className="w-full bg-ink text-paper font-bold text-[14px] py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Go to Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full border border-line text-ink-soft font-semibold text-[14px] py-3 rounded-xl hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { navigate('/login'); setMenuOpen(false) }}
                  className="w-full bg-ink text-paper font-bold text-[14px] py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Login
                </button>
                <button
                  onClick={() => { navigate('/register'); setMenuOpen(false) }}
                  className="w-full bg-amber text-white font-bold text-[14px] py-3 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Request Proposal
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
