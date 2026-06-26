import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppSidebar from '../components/layout/AppSidebar'
import { deliverableGroups } from '../data/mockData'

export default function DeliverablesCenter() {
  const [activeItem, setActiveItem] = useState('documents')
  const navigate = useNavigate()

  function handleNavigate(item: string) {
    setActiveItem(item)
    if (item === 'dashboard') navigate('/dashboard')
    if (item === 'mytrip') navigate('/departure')
  }

  return (
    <div className="flex min-h-screen bg-paper">
      <AppSidebar activeItem={activeItem} onNavigate={handleNavigate} />

      {/* Extra bottom padding on mobile for tab bar */}
      <main className="flex-1 min-w-0 px-4 sm:px-6 md:px-9 py-6 md:py-[30px] pb-24 md:pb-[60px]">

        {/* ── Top bar ── */}
        <div className="flex justify-between items-start mb-5 md:mb-[26px]">
          <div className="min-w-0">
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.08em] uppercase text-amber-deep truncate">
              Japan Educational Tour 2025
            </p>
            <h1 className="text-[22px] sm:text-[26px] font-semibold mt-1">What's Included</h1>
            <p className="text-[13px] sm:text-[14px] text-ink-soft mt-1.5 leading-[1.5] max-w-[560px]">
              Everything your school and students receive as part of the MTB program.
            </p>
          </div>
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[13px] flex items-center justify-center flex-shrink-0 ml-3"
            role="img"
            aria-label="User avatar: Arjun Sharma"
          >
            AS
          </div>
        </div>

        {/* ── Deliverables grid ── */}
        {/* Mobile: 1 col → Tablet+: 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {deliverableGroups.map(group => (
            <div
              key={group.title}
              className={`bg-paper-raised border border-line rounded-[14px] px-4 sm:px-[18px] py-4
                ${group.wide ? 'sm:col-span-2' : ''}`}
            >
              {/* Group header */}
              <div className="flex items-baseline justify-between mb-2.5">
                <h3 className="text-[14px] sm:text-[14.5px] font-bold">{group.title}</h3>
                {group.note && (
                  <span className="text-[11px] sm:text-[11.5px] font-medium text-ink-faint ml-2 flex-shrink-0">
                    {group.note}
                  </span>
                )}
              </div>

              {/* Items — wide groups get 2-col layout on sm+ */}
              <div className={group.wide ? 'grid grid-cols-1 sm:grid-cols-2 gap-x-6' : ''}>
                {group.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-2 sm:py-[9px] text-[13px]
                      ${!group.wide && i > 0 ? 'border-t border-line' : ''}
                      ${group.wide && i > 0 ? 'border-t border-line' : ''}
                    `}
                  >
                    <span className="leading-[1.4]">{item.label}</span>
                    {item.status && (
                      <span
                        className={`text-[11.5px] sm:text-[12px] font-semibold ml-3 flex-shrink-0
                          ${item.status === '✓' || item.status?.includes('✓') ? 'text-sage' : ''}
                          ${item.status === 'Pending' ? 'text-terracotta' : ''}
                          ${item.status && !item.status.includes('✓') && item.status !== 'Pending' ? 'text-ink-soft' : ''}
                        `}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
