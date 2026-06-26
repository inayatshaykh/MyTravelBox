import DashboardShell from '../../components/layout/DashboardShell'

const visaProjects = [
  {
    tour: 'Japan — Yadavindra', flag: '🗾', embassy: 'Japanese Consulate', students: 45,
    submitted: 38, approved: 30, pending: 7, rejected: 1, deadline: 'Dec 20', daysLeft: 8,
  },
  {
    tour: 'Singapore — St. Joseph\'s', flag: '🦁', embassy: 'Singapore High Commission', students: 32,
    submitted: 10, approved: 8, pending: 22, rejected: 0, deadline: 'Jan 5', daysLeft: 24,
  },
  {
    tour: 'Switzerland — DAV', flag: '🏔️', embassy: 'Swiss Consulate', students: 28,
    submitted: 5, approved: 3, pending: 23, rejected: 0, deadline: 'Jan 12', daysLeft: 31,
  },
]

const missingDocs = [
  { student: 'Rahul Mehta',   tour: 'Japan',     missing: ['Passport copy', 'Bank statement'] },
  { student: 'Simran Kaur',   tour: 'Japan',     missing: ['Visa photo (white bg)'] },
  { student: 'Aditya Verma',  tour: 'Singapore', missing: ['School NOC', 'Passport copy', 'ID proof'] },
  { student: 'Neha Sharma',   tour: 'Singapore', missing: ['Consent letter'] },
]

export default function VisaDashboard() {
  return (
    <DashboardShell title="Visa Team Dashboard" subtitle="Document Tracking & Visa Status">
      {/* KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Students',     value: '105',   icon: '👨‍🎓' },
          { label: 'Docs Submitted',     value: '53',    icon: '📁' },
          { label: 'Visas Approved',     value: '41',    icon: '✅' },
          { label: 'Missing Docs Alert', value: '4 🔴',  icon: '⚠️' },
        ].map(k => (
          <div key={k.label} className="bg-paper-raised border border-line rounded-2xl px-4 py-4">
            <div className="text-[20px] mb-1">{k.icon}</div>
            <div className="font-fraunces text-[22px] font-semibold text-ink">{k.value}</div>
            <div className="text-[11.5px] text-ink-faint mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Per-project visa status */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-[16px] font-semibold mb-4">🛂 Visa Progress by Tour</h2>
          <div className="flex flex-col gap-4">
            {visaProjects.map(v => (
              <div key={v.tour} className="border border-line rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[14px] font-semibold">{v.flag} {v.tour}</div>
                    <div className="text-[11.5px] text-ink-faint">{v.embassy} · Deadline: {v.deadline}</div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${v.daysLeft <= 10 ? 'bg-terracotta-soft text-terracotta' : 'bg-amber-soft text-amber-deep'}`}>
                    {v.daysLeft} days left
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { label: 'Total',     val: v.students,  color: 'text-ink' },
                    { label: 'Submitted', val: v.submitted, color: 'text-amber-deep' },
                    { label: 'Approved',  val: v.approved,  color: 'text-sage' },
                    { label: 'Pending',   val: v.pending,   color: 'text-terracotta' },
                  ].map(s => (
                    <div key={s.label} className="bg-paper rounded-lg py-2">
                      <div className={`font-fraunces text-[18px] font-semibold ${s.color}`}>{s.val}</div>
                      <div className="text-[10px] text-ink-faint">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Progress bar */}
                <div className="mt-3 h-2 bg-line rounded-full overflow-hidden">
                  <div className="h-full bg-sage rounded-full" style={{ width: `${(v.approved / v.students) * 100}%` }} />
                </div>
                <div className="text-[11px] text-ink-faint mt-1">{Math.round((v.approved / v.students) * 100)}% approved</div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing docs alerts */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">📋 Missing Documents Alert</h2>
          {missingDocs.map((m, i) => (
            <div key={i} className={`py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13.5px] font-semibold">{m.student}</div>
                  <div className="text-[11.5px] text-ink-faint">{m.tour}</div>
                </div>
                <button className="text-[11.5px] font-bold text-amber-deep hover:underline flex-shrink-0 ml-3">
                  Send Reminder
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {m.missing.map(doc => (
                  <span key={doc} className="text-[10.5px] bg-terracotta-soft text-terracotta px-2 py-0.5 rounded-full font-medium">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visa checklist */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">✅ Standard Document Checklist</h2>
          {[
            'Passport (Original + 2 copies)',
            'Visa application form (filled)',
            'Visa photographs (white background)',
            'Bank statement (3 months)',
            'School NOC on letterhead',
            'Parent consent letter (notarized)',
            'Travel insurance certificate',
            'Confirmed flight tickets',
            'Hotel booking confirmation',
          ].map((doc, i) => (
            <label key={i} className={`flex items-center gap-2.5 py-2 text-[13px] cursor-pointer ${i > 0 ? 'border-t border-line' : ''}`}>
              <input type="checkbox" className="accent-amber flex-shrink-0" defaultChecked={i < 4} />
              <span>{doc}</span>
            </label>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}
