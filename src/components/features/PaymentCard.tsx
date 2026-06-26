import { paymentInstallments } from '../../data/mockData'
import ProgressBar from '../ui/ProgressBar'
import Badge from '../ui/Badge'

export default function PaymentCard() {
  return (
    <div className="bg-paper-raised border border-line rounded-2xl p-[18px]">
      <h3 className="text-[17px] font-semibold mb-3">Payments</h3>

      {/* Summary */}
      <div className="flex justify-between items-end mb-1">
        <div>
          <span className="font-fraunces text-[22px] font-semibold">₹18,500</span>
          <span className="text-[12.5px] font-medium text-ink-soft font-inter ml-1">of ₹75,000 collected</span>
        </div>
        <span className="text-[12.5px] text-ink-faint">25%</span>
      </div>
      <ProgressBar value={25} color="#E87521" className="mb-4" />

      {/* Installments */}
      <div>
        {paymentInstallments.map((inst, i) => (
          <div
            key={inst.label}
            className={`flex items-center gap-3 py-[11px] ${i > 0 ? 'border-t border-line' : ''}`}
          >
            {/* Icon */}
            <div
              className={`w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0
                ${inst.status === 'paid' ? 'bg-sage-soft' : inst.status === 'due' ? 'bg-amber-soft' : 'bg-paper'}
              `}
            >
              <svg viewBox="0 0 17 17" fill="none" className="w-[17px] h-[17px]" aria-hidden="true">
                {inst.status === 'paid' ? (
                  <path d="M3 8.5l3.5 3.5 7-7" stroke="#5B8A6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                ) : inst.status === 'due' ? (
                  <path d="M8.5 4v4.5h4M8.5 1.5a7 7 0 100 14 7 7 0 000-14z" stroke="#E87521" strokeWidth="1.5" />
                ) : (
                  <circle cx="8.5" cy="8.5" r="5.5" stroke="#9C8170" strokeWidth="1.5" />
                )}
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13.5px] font-semibold">{inst.label}</div>
              <div className="text-[11.5px] text-ink-soft mt-0.5">
                {inst.dueDate ? `Due ${inst.dueDate}` : 'Scheduled'}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[13.5px] font-semibold">{inst.amount}</span>
              <Badge
                variant={inst.status === 'paid' ? 'ok' : inst.status === 'due' ? 'warn' : 'default'}
              >
                {inst.status === 'paid' ? 'PAID ✅' : inst.status === 'due' ? 'DUE ⚠️' : '—'}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className="w-full bg-amber text-white rounded-xl py-[13px] text-[14px] font-bold mt-3 hover:opacity-90 transition-opacity cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-deep focus-visible:outline-none"
        aria-label="Pay ₹18,500 installment"
      >
        Pay ₹18,500
      </button>
    </div>
  )
}
