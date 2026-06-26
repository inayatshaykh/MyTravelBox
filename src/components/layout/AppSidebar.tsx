import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import MTBLogo from '../ui/MTBLogo'

interface SidebarProps {
  activeItem: string
  onNavigate: (item: string) => void
}

const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9.5" y="1" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="1" y="9.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9.5" y="9.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: (
      <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
        <rect x="1" y="3.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1 7h15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: (
      <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
        <path d="M4 1h6l4 4v10a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 1v4h4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 9h7M5 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'mytrip',
    label: 'My Trip',
    icon: (
      <svg viewBox="0 0 17 17" fill="none" aria-hidden="true">
        <path d="M8.5 1.5L10.5 6.5H15.5L11.5 9.5L13 14.5L8.5 11.5L4 14.5L5.5 9.5L1.5 6.5H6.5L8.5 1.5Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function AppSidebar({ activeItem, onNavigate }: SidebarProps) {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  function handleClick(id: string) {
    onNavigate(id)
    if (id === 'mytrip') navigate('/departure')
    else if (id === 'documents') navigate('/deliverables')
    else if (id === 'dashboard') navigate('/dashboard')
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <>
      {/* ── Desktop sidebar (md+) ── */}
      <aside className="hidden md:flex w-[220px] flex-shrink-0 bg-paper-raised border-r border-line px-4 py-6 flex-col sticky top-0 h-screen">
        {/* Logo */}
        <div
          className="mb-5 cursor-pointer"
          onClick={() => navigate('/')}
          role="link"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/')}
          aria-label="MyTravelBox home"
        >
          <MTBLogo height="32px" />
        </div>

        {/* User chip */}
        {user && (
          <div className="flex items-center gap-2.5 bg-paper border border-line rounded-xl px-3 py-2.5 mb-5">
            <div className="w-8 h-8 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[12px] flex items-center justify-center flex-shrink-0">
              {user.avatar}
            </div>
            <div className="min-w-0">
              <div className="text-[12.5px] font-semibold text-ink truncate">{user.name}</div>
              <div className="text-[10.5px] text-ink-faint capitalize truncate">
                {user.role.replace('_', ' ')}
              </div>
            </div>
          </div>
        )}

        {/* Nav */}
        <nav className="flex flex-col gap-[3px] flex-1" aria-label="Portal navigation">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex items-center gap-[11px] px-3 py-[10px] rounded-[10px] text-[13.5px] font-semibold transition-colors duration-150 text-left w-full
                ${activeItem === item.id ? 'bg-ink text-paper' : 'text-ink-soft hover:bg-paper'}`}
              aria-current={activeItem === item.id ? 'page' : undefined}
            >
              <span className="w-[17px] h-[17px] flex-shrink-0">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={() => navigate('/')}
            className="text-[12px] font-semibold text-ink-faint px-3 py-[10px] text-left hover:text-ink transition-colors"
          >
            ← Exit Portal
          </button>
          <button
            onClick={handleLogout}
            className="text-[12px] font-semibold text-terracotta px-3 py-[10px] text-left hover:opacity-75 transition-opacity flex items-center gap-1.5"
          >
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3M10 11l3-3-3-3M13 8H6"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* ── Mobile bottom tab bar ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-paper-raised border-t border-line flex"
        aria-label="Portal navigation"
      >
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-semibold transition-colors duration-150
              ${activeItem === item.id ? 'text-amber-deep' : 'text-ink-faint'}`}
            aria-current={activeItem === item.id ? 'page' : undefined}
          >
            <span className={`w-5 h-5 ${activeItem === item.id ? 'text-amber-deep' : 'text-ink-faint'}`}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
