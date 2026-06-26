import DashboardShell from '../../components/layout/DashboardShell'
import { paymentInstallments } from '../../data/mockData'

const collections = [
  { tour: 'Japan — Yadavindra',      total: '₹33,75,000', collected: '₹22,04,000', pct: 65, overdue: '₹1,11,000' },
  { tour: 'Singapore — St. Joseph\'s', total: '₹24,00,000', collected: '₹9,12,000',  pct: 38, overdue: '₹3,20,000' },
  { tour: 'Dubai — Bhavan\'s',        total: '₹18,00,000', collected: '₹15,84,000', pct: 88, overdue: '₹0' },
  { tour: 'Switzerland — DAV',         total: '₹29,40,000', collected: '₹6,17,000',  pct: 21, overdue: '₹0' },
  { tour: 'Vietnam — Sacred Heart',   total: '₹27,75,000', collected: '₹3,33,000',  pct: 12, overdue: '₹0' },
]

const vendorPayments = [
  { vendor: 'Air India',            amount: '₹8,40,000', tour: 'Japan',     status: 'pending_bm',  type: 'Flights' },
  { vendor: 'Sunroute Hotels',      amount: '₹3,20,000', tour: 'Japan',     status: 'approved',    type: 'Hotels' },
  { vendor: 'Emirates',             amount: '₹5,10,000', tour: 'Dubai',     status: 'pending_dir', type: 'Flights' },
  { vendor: 'Singapore Airlines',   amount: '₹4,80,000', tour: 'Singapore', status: 'pending_bm',  type: 'Flights' },
]

const statusLabel: Record<string, { label: string, cls: string }> = {
  approved:    { label: 'Approved ✅',      cls: 'bg-sage-soft text-sage' },
  pending_bm:  { label: 'Awaiting BM',      cls: 'bg-amber-soft text-amber-deep' },
  pending_dir: { label: 'Awaiting Director', cls: 'bg-terracotta-soft text-terracotta' },
}

export default function AccountsDashboard() {
  return (
    <DashboardShell title="Accounts Dashboard" subtitle="Collections · Invoices · Vendor Payments">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Collected',  value: '₹56.5 L',  icon: '💰' },
          { label: 'Overdue Amount',   value: '₹4.31 L',  icon: '⚠️' },
          { label: 'Vendor Payments',  value: '4 pending', icon: '🧾' },
          { label: 'Invoices Today',   value: '7 issued',  icon: '📄' },
        ].map(k => (
          <div key={k.label} className="bg-paper-raised border border-line rounded-2xl px-4 py-4">
            <div className="text-[20px] mb-1">{k.icon}</div>
            <div className="font-fraunces text-[22px] font-semibold text-ink">{k.value}</div>
            <div className="text-[11.5px] text-ink-faint mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Collections */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">💳 Collections by Project</h2>
          {collections.map((c, i) => (
            <div key={i} className={`py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="flex justify-between mb-1">
                <span className="text-[13px] font-semibold">{c.tour}</span>
                <span className={`text-[12px] font-bold ${c.pct >= 80 ? 'text-sage' : c.pct >= 50 ? 'text-amber-deep' : 'text-terracotta'}`}>{c.pct}%</span>
              </div>
              <div className="h-1.5 bg-line rounded-full overflow-hidden mb-1.5">
                <div className={`h-full rounded-full ${c.pct >= 80 ? 'bg-sage' : c.pct >= 50 ? 'bg-amber' : 'bg-terracotta'}`} style={{ width: `${c.pct}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-ink-faint">
                <span>Collected: {c.collected} / {c.total}</span>
                {c.overdue !== '₹0' && <span className="text-terracotta font-semibold">Overdue: {c.overdue}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Vendor payments */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">🧾 Vendor Payment Queue</h2>
          {vendorPayments.map((v, i) => (
            <div key={i} className={`py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[13.5px] font-semibold">{v.vendor}</div>
                  <div className="text-[11.5px] text-ink-faint">{v.type} · {v.tour}</div>
                </div>
                <div className="text-right ml-3 flex-shrink-0">
                  <div className="text-[14px] font-semibold text-ink">{v.amount}</div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusLabel[v.status].cls}`}>
                    {statusLabel[v.status].label}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <button className="w-full mt-3 border border-line text-ink-soft text-[13px] font-semibold py-2.5 rounded-xl hover:border-amber hover:text-amber-deep transition-colors">
            Raise Payment Request
          </button>
        </div>

        {/* Installment tracker */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-[16px] font-semibold mb-4">📅 Japan Tour — Installment Tracker</h2>
          <div className="flex flex-col">
            {paymentInstallments.map((inst, i) => (
              <div key={i} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
                <div>
                  <div className="text-[13.5px] font-semibold">{inst.label}</div>
                  {inst.dueDate && <div className="text-[11.5px] text-ink-faint mt-0.5">Due: {inst.dueDate}</div>}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[14px] font-semibold">{inst.amount}</span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full
                    ${inst.status === 'paid' ? 'bg-sage-soft text-sage' : inst.status === 'due' ? 'bg-amber-soft text-amber-deep' : 'bg-line text-ink-soft'}`}>
                    {inst.status === 'paid' ? 'PAID ✅' : inst.status === 'due' ? 'OVERDUE ⚠️' : 'Upcoming'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
