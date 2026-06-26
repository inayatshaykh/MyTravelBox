import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppSidebar from '../components/layout/AppSidebar'
import BoardingPass from '../components/features/BoardingPass'
import PaymentCard from '../components/features/PaymentCard'
import Timeline from '../components/features/Timeline'
import { readinessScores } from '../data/mockData'

type StatusIndicator = 'ok' | 'warn' | 'due'

interface ReadinessCard {
  label: string
  value: number
  status: StatusIndicator
  dark?: boolean
}

const readinessCards: ReadinessCard[] = [
  { label: 'Overall',      value: readinessScores.overall,       status: 'due',  dark: true },
  { label: 'Registration', value: readinessScores.registration,  status: 'ok' },
  { label: 'Payments',     value: readinessScores.payments,      status: 'warn' },
  { label: 'Visa',         value: readinessScores.visa,          status: 'warn' },
  { label: 'Bookings',     value: readinessScores.bookings,      status: 'ok' },
  { label: 'Ops',          value: readinessScores.ops,           status: 'warn' },
]

const statusEmoji: Record<StatusIndicator, string> = {
  ok: '✅',
  warn: '⚠️',
  due: '🔴',
}

export default function ParentDashboard() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-paper">
      <AppSidebar activeItem={activeItem} onNavigate={setActiveItem} />

      {/* Main content — extra bottom padding on mobile for the tab bar */}
      <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-9 py-6 md:py-[30px] pb-24 md:pb-[60px]">

        {/* ── Top bar ── */}
        <div className="flex justify-between items-start mb-5 md:mb-[26px]">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase text-amber-deep truncate">
              Japan Educational Tour 2025
            </p>
            <h1 className="text-[22px] sm:text-[26px] font-semibold mt-1">Dashboard</h1>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-3">
            <span className="hidden sm:inline text-[12px] font-semibold text-ink-soft bg-paper border border-line rounded-lg px-2.5 py-1">
              Japan 2025
            </span>
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[13px] flex items-center justify-center"
              role="img"
              aria-label="User avatar: Arjun Sharma"
            >
              AS
            </div>
          </div>
        </div>

        {/* ── Readiness grid ── */}
        <section aria-label="Tour readiness overview">
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-5 md:mb-[26px]">
            {readinessCards.map(card => (
              <div
                key={card.label}
                className={`rounded-xl border px-3 py-3 sm:px-4 sm:py-3.5 ${card.dark ? 'bg-ink border-ink' : 'bg-paper-raised border-line'}`}
                aria-label={`${card.label}: ${card.value}% ${statusEmoji[card.status]}`}
              >
                <div className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.04em] ${card.dark ? 'text-paper/70' : 'text-ink-faint'}`}>
                  {card.label}
                </div>
                <div className={`font-fraunces text-[18px] sm:text-[22px] font-semibold mt-0.5 ${card.dark ? 'text-paper' : 'text-ink'}`}>
                  {card.value}%
                </div>
                <div className="text-[11px] mt-0.5">{statusEmoji[card.status]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dash columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            <BoardingPass />

            {/* Quick info */}
            <div className="bg-paper-raised border border-line rounded-2xl p-4 sm:p-[18px]">
              <h3 className="text-[16px] sm:text-[17px] font-semibold mb-2">Quick Info</h3>
              {[
                { icon: '📅', label: 'Departure',    value: 'Feb 15, 2025 · 05:30 IST' },
                { icon: '✈️', label: 'Flight',       value: 'Air India AI-306' },
                { icon: '🏨', label: 'Hotel',        value: 'Sunroute Higashi Shinjuku' },
                { icon: '👤', label: 'Tour Manager', value: 'Rajesh Kumar' },
              ].map((row, i) => (
                <div key={row.label} className={`flex items-center gap-3 py-2.5 sm:py-[11px] ${i > 0 ? 'border-t border-line' : ''}`}>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[10px] bg-paper flex items-center justify-center flex-shrink-0 text-[14px]" aria-hidden="true">
                    {row.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] text-ink-soft">{row.label}</div>
                    <div className="text-[13px] sm:text-[13.5px] font-semibold mt-0.5 truncate">{row.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <PaymentCard />
            <Timeline />
          </div>
        </div>

        {/* ── Departure mode button ── */}
        <div className="mt-6 md:mt-8">
          <button
            onClick={() => navigate('/departure')}
            className="w-full sm:w-auto bg-ink text-paper font-bold text-[14px] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none flex items-center justify-center gap-2"
            aria-label="Enter Departure Mode"
          >
            <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]" aria-hidden="true">
              <path d="M8.5 1.5L10.5 6.5H15.5L11.5 9.5L13 14.5L8.5 11.5L4 14.5L5.5 9.5L1.5 6.5H6.5L8.5 1.5Z"
                stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            </svg>
            Departure Mode
          </button>
        </div>
      </main>
    </div>
  )
}
