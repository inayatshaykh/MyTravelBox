import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DepartureCountdown from '../components/features/DepartureCountdown'
import { flightInfo, keyContacts, packingList, liveUpdates } from '../data/mockData'

export default function DeparturePage() {
  const navigate = useNavigate()
  const [checked, setChecked] = useState<Set<string>>(new Set())

  function toggleCheck(id: string) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-ink text-paper">

      {/* ── Top bar ── */}
      <header className="flex justify-between items-center px-4 sm:px-7 py-4 sm:py-5">
        <button
          onClick={() => navigate(-1)}
          className="text-[13px] font-semibold text-paper/70 hover:text-paper transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none rounded"
          aria-label="Back to Dashboard"
        >
          ← Back
        </button>
        <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.12em] bg-amber text-ink px-2.5 sm:px-3 py-1.5 rounded-full uppercase">
          DEPARTURE MODE
        </span>
      </header>

      {/* ── Hero / Countdown ── */}
      <section className="text-center px-4 sm:px-6 pt-4 sm:pt-[30px] pb-8 sm:pb-10">
        <p className="text-[12px] sm:text-[13px] text-paper/60 font-semibold">Japan Educational Tour 2025</p>
        <DepartureCountdown />
        <p className="text-[12px] sm:text-[13.5px] text-paper/65 mt-3">
          Saturday, 15 February 2025 · 05:30 IST · Terminal T3
        </p>
      </section>

      {/* ── Cards grid ── */}
      {/* Mobile: 1 col | sm+: 2 col */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 pb-14 sm:pb-[60px] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">

        {/* Flight Info */}
        <div className="bg-paper/[0.06] border border-paper/[0.12] rounded-2xl p-4 sm:p-5">
          <h2 className="text-[13px] font-bold text-paper/85 mb-3.5">✈ Flight Info</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[15px] font-bold">{flightInfo.from}</div>
              <div className="text-[11px] text-paper/55 mt-0.5">{flightInfo.fromCity}</div>
              <div className="font-fraunces text-[19px] text-amber mt-1">{flightInfo.departTime}</div>
            </div>
            <div className="flex-1 flex justify-center px-3 sm:px-4" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 opacity-50">
                <path d="M12 3l2 5h5l-4 3 1.5 5L12 13l-4.5 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-right">
              <div className="text-[15px] font-bold">{flightInfo.to}</div>
              <div className="text-[11px] text-paper/55 mt-0.5">{flightInfo.toCity}</div>
              <div className="font-fraunces text-[19px] text-amber mt-1">{flightInfo.arriveTime}</div>
            </div>
          </div>
          <div className="text-[11.5px] sm:text-[12px] text-paper/55 mt-3 pt-3 border-t border-paper/[0.12] leading-[1.5]">
            {flightInfo.airline} · Terminal {flightInfo.terminal} · {flightInfo.stops} · {flightInfo.duration}
          </div>
        </div>

        {/* Key Contacts */}
        <div className="bg-paper/[0.06] border border-paper/[0.12] rounded-2xl p-4 sm:p-5">
          <h2 className="text-[13px] font-bold text-paper/85 mb-3.5">📞 Key Contacts</h2>
          {keyContacts.map((contact, i) => (
            <div
              key={contact.role}
              className={`flex justify-between items-center text-[13px] py-2.5 ${i > 0 ? 'border-t border-paper/[0.1]' : ''}`}
            >
              <div>
                <div className="font-semibold text-[13px]">{contact.role}</div>
                <div className="text-paper/60 text-[11.5px] mt-0.5">{contact.name}</div>
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="font-bold text-amber text-[13px] hover:text-amber-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded ml-3 flex-shrink-0"
                aria-label={`Call ${contact.name}`}
              >
                {contact.phone}
              </a>
            </div>
          ))}
        </div>

        {/* Packing Checklist — full width on both breakpoints */}
        <div className="bg-paper/[0.06] border border-paper/[0.12] rounded-2xl p-4 sm:p-5 sm:col-span-2">
          <div className="flex items-center justify-between mb-3.5">
            <h2 className="text-[13px] font-bold text-paper/85">🎒 Packing Checklist</h2>
            <span className="text-[12px] text-paper/55 flex-shrink-0">
              {checked.size} / {packingList.length} packed
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {packingList.map(item => (
              <label key={item.id} className="flex items-center gap-2.5 text-[13px] cursor-pointer select-none py-0.5">
                <input
                  type="checkbox"
                  checked={checked.has(item.id)}
                  onChange={() => toggleCheck(item.id)}
                  className="w-4 h-4 flex-shrink-0"
                  aria-label={item.label}
                />
                <span className={checked.has(item.id) ? 'text-paper/40 line-through' : 'text-paper/85'}>
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Live Updates — full width */}
        <div className="bg-paper/[0.06] border border-paper/[0.12] rounded-2xl p-4 sm:p-5 sm:col-span-2">
          <h2 className="text-[13px] font-bold text-paper/85 mb-3.5">📡 Live Updates</h2>
          {liveUpdates.map((update, i) => (
            <div
              key={i}
              className={`text-[12.5px] sm:text-[13px] text-paper/85 py-3 leading-[1.5] ${i > 0 ? 'border-t border-paper/[0.1]' : ''}`}
            >
              <time className="block text-[11px] text-paper/50 font-semibold mb-1">{update.time}</time>
              {update.text}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
