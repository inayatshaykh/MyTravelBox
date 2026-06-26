import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

export default function ParentAccessPanel() {
  const [activeTab, setActiveTab] = useState<'tourId' | 'visa'>('tourId')
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  function handleAccess(e: React.FormEvent) {
    e.preventDefault()
    navigate('/register')
  }

  return (
    <section className="bg-ink" aria-labelledby="access-heading">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-12 sm:py-[70px] grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-[50px] items-center">
        {/* Left copy */}
        <div className="text-paper">
          <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-paper/55">Parent &amp; Student Portal</p>
          <h2
            id="access-heading"
            className="font-fraunces text-[26px] sm:text-[30px] font-semibold mt-2 text-paper"
          >
            Your child's journey, in your hands
          </h2>
          <p className="text-[14px] sm:text-[14.5px] text-paper/70 mt-3.5 max-w-[420px] leading-[1.6]">
            Track payments, upload documents, and check visa status — all in one place.
          </p>
        </div>

        {/* Right: ticket */}
        <div className="bg-paper-raised rounded-[18px] shadow-lg relative overflow-hidden">
          {/* Ticket top */}
          <div className="px-5 sm:px-[26px] pt-5 sm:pt-[26px] pb-4 sm:pb-5">
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-amber-deep">
              Access Your Journey
            </p>
            <h3 className="font-fraunces text-[19px] sm:text-[20px] font-semibold mt-1.5">Portal Sign In</h3>
            <p className="text-[13px] text-ink-soft mt-1.5 leading-[1.5]">
              Enter your Tour ID or Visa reference to access your dashboard.
            </p>
          </div>

          {/* Perforation */}
          <div className="ticket-perf" aria-hidden="true" />

          {/* Ticket bottom */}
          <div className="px-5 sm:px-[26px] pt-5 sm:pt-[22px] pb-5 sm:pb-[26px]">
            {/* Tabs */}
            <div
              className="flex gap-1.5 bg-paper rounded-[10px] p-1 mb-4"
              role="tablist"
              aria-label="Login type"
            >
              {[
                { id: 'tourId', label: 'Enter Tour ID' },
                { id: 'visa', label: 'Track Visa' },
              ].map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id as 'tourId' | 'visa')}
                  className={`flex-1 text-center py-2 text-[12px] font-semibold rounded-lg cursor-pointer transition-all duration-150
                    ${activeTab === tab.id
                      ? 'bg-paper-raised text-ink shadow-sm'
                      : 'text-ink-faint hover:text-ink'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleAccess}>
              <div>
                <label htmlFor="portal-input" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">
                  {activeTab === 'tourId' ? 'Tour ID' : 'Visa Reference Number'}
                </label>
                <input
                  id="portal-input"
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  placeholder={activeTab === 'tourId' ? 'e.g. MTB-YPS-2025-001' : 'e.g. VISA-JP-12345'}
                  className="w-full px-3.5 py-3 sm:py-[13px] border-[1.5px] border-line rounded-[10px] text-[14px] bg-paper focus:outline-none focus:border-amber transition-colors duration-150"
                  aria-label={activeTab === 'tourId' ? 'Enter Tour ID' : 'Enter Visa Reference Number'}
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="mt-4 py-3.5 text-[14px] rounded-xl"
                aria-label="Access Portal"
              >
                Access Portal
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
