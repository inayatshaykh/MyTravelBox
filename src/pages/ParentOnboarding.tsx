import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checklistItems as initialItems } from '../data/mockData'
import type { ChecklistItem } from '../types'
import ReadinessRing from '../components/features/ReadinessRing'

export default function ParentOnboarding() {
  const navigate = useNavigate()
  const [items, setItems] = useState<ChecklistItem[]>(initialItems)

  function toggleItem(id: string) {
    setItems(prev => prev.map(item =>
      item.id === id && !item.done ? { ...item, done: true } : item
    ))
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* ── Top bar ── */}
      <header className="flex justify-between items-center px-4 sm:px-7 py-4 sm:py-[18px] bg-paper-raised border-b border-line sticky top-0 z-30">
        <button
          onClick={() => navigate(-1)}
          className="text-[13px] sm:text-[13.5px] font-semibold text-ink-soft hover:text-ink transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none rounded"
          aria-label="Go back"
        >
          ← Back
        </button>
        <span className="font-fraunces font-semibold text-ink text-[15px] sm:text-[16px]">
          My<span className="text-amber">Travel</span>Box
        </span>
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[13px] flex items-center justify-center cursor-pointer"
          role="img"
          aria-label="User avatar: Arjun Sharma"
        >
          AS
        </div>
      </header>

      {/* ── Dark hero ── */}
      <section className="bg-ink text-paper px-4 sm:px-7 pt-8 sm:pt-11 pb-12 sm:pb-14 text-center">
        <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-paper/55">
          Japan Educational Tour 2025
        </p>
        <h1 className="text-[24px] sm:text-[28px] font-semibold mt-2.5 tracking-[-0.01em]">
          Welcome, Arjun!
        </h1>
        <p className="text-[13.5px] sm:text-[14.5px] text-paper/70 mt-2">
          Departure in 42 days · Yadavindra Public School
        </p>

        {/* Readiness ring */}
        <div className="flex items-center justify-center gap-5 sm:gap-6 mt-6 sm:mt-8 flex-wrap">
          <ReadinessRing percentage={72} />
          <div className="text-left max-w-[200px] sm:max-w-[230px]">
            <div className="text-[13px] sm:text-[13.5px] font-bold">Your tour readiness</div>
            <p className="text-[12px] sm:text-[12.5px] text-paper/65 mt-1 leading-[1.5]">
              Complete 3 more steps to be fully ready for departure
            </p>
          </div>
        </div>
      </section>

      {/* ── Checklist card ── overlaps hero bottom */}
      <div className="relative z-10 mx-4 sm:mx-auto sm:max-w-[600px] -mt-6 sm:-mt-7 mb-8 sm:mb-10">
        <div className="bg-paper-raised border border-line rounded-[18px] shadow p-2">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 sm:gap-3.5 px-3 sm:px-3.5 py-3.5 sm:py-[15px] rounded-xl transition-colors duration-150
                ${!item.done ? 'cursor-pointer hover:bg-paper' : 'cursor-default'}
                ${idx > 0 ? 'border-t border-line' : ''}
              `}
              onClick={() => !item.done && toggleItem(item.id)}
              role={!item.done ? 'button' : undefined}
              tabIndex={!item.done ? 0 : undefined}
              onKeyDown={e => !item.done && e.key === 'Enter' && toggleItem(item.id)}
              aria-label={!item.done ? `Mark "${item.title}" as complete` : item.title}
            >
              {/* Check circle */}
              <div
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                  ${item.done ? 'bg-sage border-sage' : 'border-line'}`}
                aria-hidden="true"
              >
                {item.done && (
                  <svg viewBox="0 0 13 13" fill="none" className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px]">
                    <path d="M2 6.5l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className={`text-[13.5px] sm:text-[14px] font-semibold ${item.done ? 'text-ink-soft line-through decoration-line' : ''}`}>
                  {item.title}
                </div>
                <div className="text-[11.5px] sm:text-[12px] text-ink-faint mt-0.5 truncate">{item.subtitle}</div>
              </div>

              {/* Action badge */}
              {!item.done && item.action && (
                <span className="text-[11.5px] sm:text-[12px] font-bold text-amber-deep px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-soft rounded-full flex-shrink-0">
                  {item.action}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center pb-10 sm:pb-12 px-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full sm:w-auto bg-ink text-paper font-bold text-[14px] sm:text-[14.5px] px-8 py-[13px] rounded-xl hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none"
          aria-label="Open Dashboard"
        >
          Open Dashboard →
        </button>
      </div>
    </div>
  )
}
