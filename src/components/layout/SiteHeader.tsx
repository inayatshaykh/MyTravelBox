import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'About MTB',         href: '#about' },
  { label: 'Explore our Programs', href: '#programs' },
  { label: 'Tours in Motion',   href: '#tours' },
  { label: 'Parent Portal',     href: '/onboarding' },
  { label: 'Principal Portal',  href: '/login' },
]

export default function SiteHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout, isLoggedIn } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = location.pathname === '/'

  function handleNav(href: string) {
    setMenuOpen(false)
    if (href.startsWith('/')) navigate(href)
    else {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD0]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 h-[60px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="My Travel Box home"
        >
          {/* Box icon */}
          <div className="w-8 h-8 bg-amber rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white">
              <path d="M21 8H3M21 8l-2 12H5L3 8M21 8l-9-4-9 4M12 8v12M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-fraunces font-semibold text-[15px] sm:text-[16px] text-ink">
              My <span className="text-amber">Travel</span> Box
            </div>
            <div className="text-[8px] font-semibold tracking-[0.12em] text-ink-faint uppercase hidden sm:block">
              Surprising You Everyday
            </div>
          </div>
        </button>

        {/* ── Desktop nav ── */}
        {isHome && (
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-[13px] font-medium text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* ── Right CTA ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate('/dashboard')}
                className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-ink hover:text-amber transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[11px] flex items-center justify-center">
                  {user?.avatar}
                </div>
                Dashboard
              </button>
              <button
                onClick={() => { logout(); navigate('/') }}
                className="text-[12.5px] font-semibold text-ink-faint hover:text-terracotta transition-colors px-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="hidden sm:block text-[13px] font-medium text-ink-soft hover:text-ink transition-colors px-3 py-2"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-amber hover:opacity-90 text-white font-bold text-[13px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-opacity"
              >
                Plan a tour
              </button>
            </>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`w-5 h-[2px] bg-ink rounded transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-5 h-[2px] bg-ink rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-[2px] bg-ink rounded transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E8DDD0] bg-[#FAF7F2] shadow-lg">
          {isHome && (
            <div className="px-5 pt-3 pb-2">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left text-[14px] font-medium text-ink-soft py-3 border-b border-[#E8DDD0] last:border-0 hover:text-amber transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
          <div className="px-5 py-4 flex flex-col gap-2.5">
            {isLoggedIn ? (
              <>
                <button onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}
                  className="w-full bg-ink text-paper font-bold text-[14px] py-3 rounded-full">
                  Go to Dashboard
                </button>
                <button onClick={() => { logout(); navigate('/'); setMenuOpen(false) }}
                  className="w-full border border-[#E8DDD0] text-ink-soft font-semibold text-[14px] py-3 rounded-full">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { navigate('/login'); setMenuOpen(false) }}
                  className="w-full border border-[#E8DDD0] text-ink font-semibold text-[14px] py-3 rounded-full">
                  Login
                </button>
                <button onClick={() => { navigate('/register'); setMenuOpen(false) }}
                  className="w-full bg-amber text-white font-bold text-[14px] py-3 rounded-full">
                  Plan a tour
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
