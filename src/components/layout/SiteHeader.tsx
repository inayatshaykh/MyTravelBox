import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navLinks = [
  { label: 'About MTB',            href: '#about' },
  { label: 'Explore our Programs', href: '#programs' },
  { label: 'Tours in Motion',      href: '#tours' },
  { label: 'Parent Portal',        href: '/onboarding' },
  { label: 'Principal Portal',     href: '/login' },
]

/* ── Exact MTB logo SVG (box icon + stylised wordmark) ── */
function MTBLogo() {
  return (
    <svg viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[34px] w-auto">
      {/* Box icon */}
      <rect x="1" y="6" width="26" height="26" rx="3" fill="#E87521"/>
      <path d="M1 14h26" stroke="white" strokeWidth="1.8"/>
      <path d="M14 14v18" stroke="white" strokeWidth="1.8"/>
      <path d="M8 6 L14 2 L20 6" stroke="white" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
      {/* "My" */}
      <text x="31" y="20" fontFamily="Georgia,serif" fontSize="11" fontWeight="700" fill="#2C1A0E">My</text>
      {/* "Travel" in orange italic */}
      <text x="31" y="31" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fontStyle="italic" fill="#E87521">Travel</text>
      {/* "Box" */}
      <text x="79" y="31" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#2C1A0E">Box</text>
      {/* dot after Box */}
      <circle cx="107" cy="28" r="1.5" fill="#E87521"/>
      {/* tagline */}
      <text x="31" y="38" fontFamily="Arial,sans-serif" fontSize="5.5" letterSpacing="0.5" fill="#9C8170">Surprising You Everyday</text>
    </svg>
  )
}

export default function SiteHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, logout, isLoggedIn } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = location.pathname === '/'

  function handleNav(href: string) {
    setMenuOpen(false)
    if (href.startsWith('/')) { navigate(href); return }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/96 backdrop-blur-md border-b border-[#E8DDD0]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 h-[60px] flex items-center justify-between gap-4">

        {/* Logo */}
        <button onClick={() => navigate('/')} className="flex-shrink-0 hover:opacity-80 transition-opacity" aria-label="My Travel Box home">
          <MTBLogo />
        </button>

        {/* Desktop nav */}
        {isHome && (
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main navigation">
            {navLinks.map(link => (
              <button key={link.label} onClick={() => handleNav(link.href)}
                className="text-[13px] font-medium text-[#4A3020] hover:text-[#E87521] transition-colors whitespace-nowrap">
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Right actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isLoggedIn ? (
            <>
              <button onClick={() => navigate('/dashboard')}
                className="hidden sm:flex items-center gap-2 text-[13px] font-semibold text-[#2C1A0E] hover:text-[#E87521] transition-colors">
                <div className="w-7 h-7 rounded-full bg-[#FCE3C9] text-[#E87521] font-bold text-[11px] flex items-center justify-center">
                  {user?.avatar}
                </div>
                Dashboard
              </button>
              <button onClick={() => { logout(); navigate('/') }}
                className="text-[12.5px] font-semibold text-[#9C8170] hover:text-[#C25640] transition-colors px-2">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate('/login')}
                className="hidden sm:block text-[13px] font-medium text-[#4A3020] hover:text-[#E87521] transition-colors px-2 py-1.5">
                Login
              </button>
              <button onClick={() => navigate('/register')}
                className="bg-[#E87521] hover:opacity-90 text-white font-bold text-[13px] px-5 py-2.5 rounded-full transition-opacity shadow-sm">
                Plan a tour
              </button>
            </>
          )}

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            <span className={`w-5 h-[2px] bg-[#2C1A0E] rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
            <span className={`w-5 h-[2px] bg-[#2C1A0E] rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`w-5 h-[2px] bg-[#2C1A0E] rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[#E8DDD0] bg-[#FAF7F2] shadow-lg">
          {isHome && (
            <div className="px-5 pt-3 pb-2">
              {navLinks.map(link => (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  className="w-full text-left text-[14px] font-medium text-[#4A3020] py-3 border-b border-[#E8DDD0] last:border-0 hover:text-[#E87521] transition-colors">
                  {link.label}
                </button>
              ))}
            </div>
          )}
          <div className="px-5 py-4 flex flex-col gap-2.5">
            {isLoggedIn ? (
              <>
                <button onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}
                  className="w-full bg-[#2C1A0E] text-white font-bold text-[14px] py-3 rounded-full">Go to Dashboard</button>
                <button onClick={() => { logout(); navigate('/'); setMenuOpen(false) }}
                  className="w-full border border-[#E8DDD0] text-[#4A3020] font-semibold text-[14px] py-3 rounded-full">Sign Out</button>
              </>
            ) : (
              <>
                <button onClick={() => { navigate('/login'); setMenuOpen(false) }}
                  className="w-full border border-[#E8DDD0] text-[#2C1A0E] font-semibold text-[14px] py-3 rounded-full">Login</button>
                <button onClick={() => { navigate('/register'); setMenuOpen(false) }}
                  className="w-full bg-[#E87521] text-white font-bold text-[14px] py-3 rounded-full">Plan a tour</button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
