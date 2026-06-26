import DashboardShell from '../../components/layout/DashboardShell'
import { liveManifest } from '../../data/mockData'

const escalations = [
  { id: 1, level: 'L2', event: 'Parent payment overdue', tour: 'Japan — Yadavindra', detail: 'Harish Sharma · ₹18,500 overdue 12 days' },
  { id: 2, level: 'L2', event: 'Missing visa documents', tour: 'Singapore — St. Joseph\'s', detail: '8 students have not submitted passports' },
  { id: 3, level: 'L1', event: 'Booking pending near departure', tour: 'Dubai — Bhavan\'s', detail: 'Transport contact not confirmed (19 days left)' },
]

const approvals = [
  { id: 1, type: 'Vendor Payment', amount: '₹8,200',  tour: 'Japan',       status: 'pending', from: 'Ops — Rajesh Kumar' },
  { id: 2, type: 'Refund',         amount: '₹5,000',  tour: 'Singapore',   status: 'pending', from: 'Accounts — Meena Joshi' },
  { id: 3, type: 'Budget Variance',amount: '₹1,800',  tour: 'Switzerland', status: 'pending', from: 'Ops — Rajesh Kumar' },
]

export default function BranchManagerDashboard() {
  return (
    <DashboardShell title="Branch Manager Dashboard" subtitle="Operational Control — All Projects">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Active Projects',    value: '5',      icon: '📋' },
          { label: 'Escalations',        value: '3 ⚠️',   icon: '🔔' },
          { label: 'Pending Approvals',  value: '3',      icon: '✅' },
          { label: 'Collections Today',  value: '₹68,500', icon: '💳' },
        ].map(k => (
          <div key={k.label} className="bg-paper-raised border border-line rounded-2xl px-4 py-4">
            <div className="text-[20px] mb-1">{k.icon}</div>
            <div className="font-fraunces text-[22px] font-semibold text-ink">{k.value}</div>
            <div className="text-[11.5px] text-ink-faint mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Escalations */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">🔔 Escalations Assigned to You</h2>
          {escalations.map((e, i) => (
            <div key={e.id} className={`py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${e.level === 'L2' ? 'bg-terracotta-soft text-terracotta' : 'bg-amber-soft text-amber-deep'}`}>
                  {e.level}
                </span>
                <span className="text-[13px] font-semibold">{e.event}</span>
              </div>
              <div className="text-[11.5px] text-ink-soft">{e.tour}</div>
              <div className="text-[11.5px] text-ink-faint mt-0.5">{e.detail}</div>
              <button className="mt-1.5 text-[11.5px] font-bold text-amber-deep hover:underline">Resolve →</button>
            </div>
          ))}
        </div>

        {/* Approvals */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">✅ Approvals Queue</h2>
          {approvals.map((a, i) => (
            <div key={a.id} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="min-w-0">
                <div className="text-[13.5px] font-semibold">{a.type} <span className="text-amber-deep">{a.amount}</span></div>
                <div className="text-[11.5px] text-ink-faint">{a.tour} · {a.from}</div>
              </div>
              <div className="flex gap-2 ml-3 flex-shrink-0">
                <button className="text-[11.5px] font-bold bg-sage-soft text-sage px-2.5 py-1 rounded-full">Approve</button>
                <button className="text-[11.5px] font-bold bg-terracotta-soft text-terracotta px-2.5 py-1 rounded-full">Reject</button>
              </div>
            </div>
          ))}
        </div>

        {/* Project health */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-[16px] font-semibold mb-4">📊 Project Health Monitor</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {liveManifest.map(t => (
              <div key={t.destination} className={`rounded-xl border px-4 py-3 ${t.readiness < 50 ? 'border-terracotta/40 bg-terracotta-soft/40' : t.readiness < 80 ? 'border-amber/40 bg-amber-soft/30' : 'border-sage/40 bg-sage-soft/40'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] font-semibold">{t.flag} {t.destination}</span>
                  <span className={`text-[12px] font-bold ${t.readiness < 50 ? 'text-terracotta' : t.readiness < 80 ? 'text-amber-deep' : 'text-sage'}`}>{t.readiness}%</span>
                </div>
                <div className="text-[11px] text-ink-soft">{t.school}</div>
                <div className="text-[11px] text-ink-faint mt-0.5">{t.daysToGo} days to departure · {t.students} students</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
