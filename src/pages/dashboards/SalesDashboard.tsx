import DashboardShell from '../../components/layout/DashboardShell'

const leads = [
  { id: 1, school: 'St. Xavier\'s Ahmedabad', contact: 'Priya Nair',    destination: 'Japan',        students: 40, stage: 'Proposal Shared', days: 3,  hot: true },
  { id: 2, school: 'Delhi Public School RK',  contact: 'Suresh Gupta',  destination: 'Singapore',    students: 55, stage: 'Negotiation',      days: 8,  hot: true },
  { id: 3, school: 'Ryan International',      contact: 'Kavita Singh',  destination: 'Switzerland',  students: 30, stage: 'Lead Identified',  days: 15, hot: false },
  { id: 4, school: 'Amity School Noida',      contact: 'Raman Bhatia',  destination: 'Dubai',        students: 65, stage: 'Work Order',        days: 1,  hot: true },
  { id: 5, school: 'Kendriya Vidyalaya',      contact: 'Meera Pillai',  destination: 'Rajasthan',    students: 80, stage: 'Lead Identified',  days: 22, hot: false },
]

const stageColor: Record<string, string> = {
  'Lead Identified':  'bg-line text-ink-soft',
  'Proposal Shared':  'bg-amber-soft text-amber-deep',
  'Negotiation':      'bg-[#FEF3C7] text-[#92400E]',
  'Work Order':       'bg-sage-soft text-sage',
}

export default function SalesDashboard() {
  return (
    <DashboardShell title="Sales Dashboard" subtitle="Lead Pipeline — Your Assigned Leads">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Active Leads',        value: '5',          icon: '🎯' },
          { label: 'Proposals Shared',    value: '2',          icon: '📄' },
          { label: 'Pipeline Value',      value: '₹1.05 Cr',  icon: '💼' },
          { label: 'Potential Students',  value: '270',        icon: '👨‍🎓' },
        ].map(k => (
          <div key={k.label} className="bg-paper-raised border border-line rounded-2xl px-4 py-4">
            <div className="text-[20px] mb-1">{k.icon}</div>
            <div className="font-fraunces text-[22px] font-semibold text-ink">{k.value}</div>
            <div className="text-[11.5px] text-ink-faint mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      {/* Pipeline */}
      <div className="bg-paper-raised border border-line rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[16px] font-semibold">🎯 Lead Pipeline</h2>
          <button className="text-[12.5px] font-bold text-amber-deep border border-amber-soft bg-amber-soft/40 px-3 py-1.5 rounded-xl hover:opacity-80">
            + New Lead
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {leads.map((l) => (
            <div key={l.id} className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:shadow-sm ${l.hot ? 'border-amber/40 bg-amber-soft/20' : 'border-line bg-paper'}`}>
              {l.hot && <span className="text-[14px] flex-shrink-0" title="Hot lead">🔥</span>}
              {!l.hot && <span className="w-[14px] flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-semibold truncate">{l.school}</div>
                <div className="text-[11.5px] text-ink-faint mt-0.5">{l.contact} · {l.destination} · {l.students} students</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full ${stageColor[l.stage]}`}>{l.stage}</span>
                <span className="text-[11px] text-ink-faint">{l.days}d ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Follow-up reminders */}
      <div className="bg-paper-raised border border-line rounded-2xl p-5">
        <h2 className="text-[16px] font-semibold mb-4">⏰ Follow-Up Reminders</h2>
        <div className="flex flex-col gap-2">
          {[
            { school: 'Amity School Noida',       action: 'Work order signed — hand over to Ops TODAY', urgent: true },
            { school: 'Delhi Public School RK',   action: 'Follow up on revised proposal — 3 days since last contact', urgent: true },
            { school: 'St. Xavier\'s Ahmedabad',  action: 'Schedule parent presentation — lead aging 3 days', urgent: false },
          ].map((r, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${r.urgent ? 'border-terracotta/30 bg-terracotta-soft/30' : 'border-line'}`}>
              <span className="text-[14px] flex-shrink-0 mt-0.5">{r.urgent ? '🔴' : '🟡'}</span>
              <div>
                <div className="text-[13px] font-semibold">{r.school}</div>
                <div className="text-[12px] text-ink-soft mt-0.5">{r.action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
