import DashboardShell from '../../components/layout/DashboardShell'
import { liveManifest } from '../../data/mockData'

const alerts = [
  { id: 1, type: 'red',   tour: 'Switzerland — DAV',    msg: 'Budget variance ₹3,200 above threshold — approval required' },
  { id: 2, type: 'red',   tour: 'Vietnam — Sacred Heart', msg: 'Visa documents not submitted — 7 days to deadline' },
  { id: 3, type: 'amber', tour: 'Singapore — St. Joseph\'s', msg: 'Payment collection at 38% — 2nd installment overdue' },
]

const approvals = [
  { id: 1, type: 'Refund Request',     amount: '₹12,000', tour: 'Dubai — Bhavan\'s',    from: 'Sunita Kapoor (BM)' },
  { id: 2, type: 'Tour Manager Change',amount: '',         tour: 'Japan — Yadavindra',   from: 'Rajesh Kumar (Ops)' },
  { id: 3, type: 'Vendor Payment',     amount: '₹45,000', tour: 'Switzerland — DAV',    from: 'Meena Joshi (Accounts)' },
]

const profitability = [
  { tour: 'Dubai — Bhavan\'s',      revenue: '₹18,00,000', cost: '₹13,50,000', margin: '25%', status: 'ok' },
  { tour: 'Japan — Yadavindra',     revenue: '₹33,75,000', cost: '₹26,10,000', margin: '22.6%', status: 'ok' },
  { tour: 'Singapore — St. Joseph\'s', revenue: '₹24,00,000', cost: '₹19,80,000', margin: '17.5%', status: 'warn' },
  { tour: 'Switzerland — DAV',      revenue: '₹29,40,000', cost: '₹25,50,000', margin: '13.3%', status: 'warn' },
  { tour: 'Vietnam — Sacred Heart', revenue: '₹27,75,000', cost: '₹23,50,000', margin: '15.3%', status: 'ok' },
]

export default function DirectorDashboard() {
  return (
    <DashboardShell title="Director Dashboard" subtitle="MyTravelBox — All Projects Overview">
      {/* ── KPI strip ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Active Projects', value: '5', icon: '📋' },
          { label: 'Total Revenue',   value: '₹1.33 Cr', icon: '💰' },
          { label: 'Students Travelling', value: '202', icon: '🎒' },
          { label: 'Unresolved Alerts', value: '3 🔴', icon: '⚠️' },
        ].map(kpi => (
          <div key={kpi.label} className="bg-paper-raised border border-line rounded-2xl px-4 py-4">
            <div className="text-[20px] mb-1">{kpi.icon}</div>
            <div className="font-fraunces text-[22px] font-semibold text-ink">{kpi.value}</div>
            <div className="text-[11.5px] text-ink-faint mt-0.5">{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* ── Critical alerts ── */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">🚨 Critical Escalations</h2>
          <div className="flex flex-col gap-3">
            {alerts.map(a => (
              <div key={a.id} className={`rounded-xl px-4 py-3 border ${a.type === 'red' ? 'bg-terracotta-soft border-terracotta/30' : 'bg-amber-soft border-amber/30'}`}>
                <div className="text-[12px] font-bold text-ink-soft">{a.tour}</div>
                <div className="text-[13px] font-medium text-ink mt-0.5">{a.msg}</div>
                <button className="mt-2 text-[11.5px] font-bold text-amber-deep hover:underline">
                  Take Action →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pending approvals ── */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">✅ Pending Your Approval</h2>
          <div className="flex flex-col">
            {approvals.map((a, i) => (
              <div key={a.id} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-semibold">{a.type} {a.amount && <span className="text-amber-deep">{a.amount}</span>}</div>
                  <div className="text-[11.5px] text-ink-faint mt-0.5">{a.tour} · {a.from}</div>
                </div>
                <div className="flex gap-2 flex-shrink-0 ml-3">
                  <button className="text-[11.5px] font-bold bg-sage-soft text-sage px-2.5 py-1 rounded-full hover:opacity-80">Approve</button>
                  <button className="text-[11.5px] font-bold bg-terracotta-soft text-terracotta px-2.5 py-1 rounded-full hover:opacity-80">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Project readiness ── */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">📊 Project Readiness</h2>
          <div className="flex flex-col gap-3">
            {liveManifest.map(t => (
              <div key={t.destination} className="flex items-center gap-3">
                <span className="text-[18px] flex-shrink-0">{t.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-[12.5px] font-semibold truncate">{t.destination} — {t.school}</span>
                    <span className={`text-[12px] font-bold ml-2 flex-shrink-0 ${t.readiness >= 80 ? 'text-sage' : t.readiness >= 60 ? 'text-amber-deep' : 'text-terracotta'}`}>
                      {t.readiness}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-line rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${t.readiness >= 80 ? 'bg-sage' : t.readiness >= 60 ? 'bg-amber' : 'bg-terracotta'}`}
                      style={{ width: `${t.readiness}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Profitability ── */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">💹 Profitability Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[12.5px]">
              <thead>
                <tr className="text-ink-faint text-[11px] uppercase tracking-wider border-b border-line">
                  <th className="text-left py-2 font-semibold">Tour</th>
                  <th className="text-right py-2 font-semibold">Revenue</th>
                  <th className="text-right py-2 font-semibold">Margin</th>
                </tr>
              </thead>
              <tbody>
                {profitability.map((p, i) => (
                  <tr key={i} className={i > 0 ? 'border-t border-line' : ''}>
                    <td className="py-2.5 font-medium">{p.tour}</td>
                    <td className="py-2.5 text-right text-ink-soft">{p.revenue}</td>
                    <td className={`py-2.5 text-right font-bold ${p.status === 'ok' ? 'text-sage' : 'text-amber-deep'}`}>{p.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
