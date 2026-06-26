import { useState } from 'react'
import DashboardShell from '../../components/layout/DashboardShell'
import { liveManifest, readinessScores } from '../../data/mockData'

const tasks = [
  { id: 1, task: 'Upload rooming list — Japan',         due: 'Dec 18', status: 'overdue' },
  { id: 2, task: 'Confirm transport contact — Dubai',   due: 'Dec 12', status: 'overdue' },
  { id: 3, task: 'Activate parent portal — Vietnam',    due: 'Dec 20', status: 'pending' },
  { id: 4, task: 'Assign tour manager — Switzerland',   due: 'Dec 25', status: 'pending' },
  { id: 5, task: 'Send pre-departure briefing — Japan', due: 'Jan 10', status: 'upcoming' },
]

const bookings = [
  { category: 'Flights',    japan: '✅', singapore: '✅', dubai: '✅', vietnam: '⏳', switzerland: '✅' },
  { category: 'Hotels',     japan: '✅', singapore: '✅', dubai: '✅', vietnam: '✅', switzerland: '✅' },
  { category: 'Transport',  japan: '✅', singapore: '⏳', dubai: '❌', vietnam: '⏳', switzerland: '✅' },
  { category: 'Guides',     japan: '✅', singapore: '⏳', dubai: '✅', vietnam: '❌', switzerland: '⏳' },
  { category: 'Insurance',  japan: '✅', singapore: '✅', dubai: '✅', vietnam: '⏳', switzerland: '✅' },
]

const statusColor: Record<string, string> = {
  overdue: 'bg-terracotta-soft text-terracotta',
  pending: 'bg-amber-soft text-amber-deep',
  upcoming: 'bg-sage-soft text-sage',
}

export default function OperationsDashboard() {
  const [activeProject, setActiveProject] = useState('Japan')

  return (
    <DashboardShell title="Operations Dashboard" subtitle="Project Owner — Assigned Projects">
      {/* Readiness scores */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
        {Object.entries(readinessScores).map(([key, val]) => (
          <div key={key} className={`rounded-xl border px-3 py-3 text-center ${key === 'overall' ? 'bg-ink border-ink text-paper' : 'bg-paper-raised border-line'}`}>
            <div className={`font-fraunces text-[20px] font-semibold ${key === 'overall' ? 'text-amber' : 'text-ink'}`}>{val}%</div>
            <div className={`text-[10px] font-bold uppercase tracking-wide mt-0.5 ${key === 'overall' ? 'text-paper/70' : 'text-ink-faint'}`}>{key}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Task list */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">📝 My Tasks</h2>
          {tasks.map((t, i) => (
            <div key={t.id} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div className="min-w-0 flex items-start gap-3">
                <input type="checkbox" className="mt-0.5 flex-shrink-0 accent-amber" />
                <div>
                  <div className="text-[13px] font-medium">{t.task}</div>
                  <div className="text-[11.5px] text-ink-faint mt-0.5">Due {t.due}</div>
                </div>
              </div>
              <span className={`text-[10.5px] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ml-3 ${statusColor[t.status]}`}>
                {t.status}
              </span>
            </div>
          ))}
        </div>

        {/* Booking matrix */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5 overflow-x-auto">
          <h2 className="text-[16px] font-semibold mb-4">📦 Bookings Matrix</h2>
          <div className="flex gap-1.5 mb-3 flex-wrap">
            {liveManifest.map(t => (
              <button
                key={t.destination}
                onClick={() => setActiveProject(t.destination)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-colors ${activeProject === t.destination ? 'bg-ink text-paper' : 'bg-paper border border-line text-ink-soft'}`}
              >
                {t.flag} {t.destination}
              </button>
            ))}
          </div>
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="text-left border-b border-line">
                <th className="py-2 font-semibold text-ink-faint text-[11px] uppercase">Category</th>
                <th className="py-2 font-semibold text-ink-faint text-[11px] uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => {
                const dest = activeProject.toLowerCase() as keyof typeof b
                return (
                  <tr key={i} className={i > 0 ? 'border-t border-line' : ''}>
                    <td className="py-2.5 font-medium">{b.category}</td>
                    <td className="py-2.5 text-[16px]">{b[dest] ?? '—'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Live projects */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-[16px] font-semibold mb-4">🗺️ All Active Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {liveManifest.map(t => (
              <div key={t.destination} className="bg-ink text-paper rounded-xl p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-fraunces text-[16px] font-semibold">{t.destination}</div>
                    <div className="text-[11px] text-paper/60 mt-0.5">{t.school}</div>
                  </div>
                  <span className="text-[20px]">{t.flag}</span>
                </div>
                <div className="flex gap-4 mt-3">
                  <div><div className="font-fraunces text-[16px] text-amber font-semibold">{t.students}</div><div className="text-[9px] text-paper/55 uppercase">Students</div></div>
                  <div><div className="font-fraunces text-[16px] text-amber font-semibold">{t.daysToGo}</div><div className="text-[9px] text-paper/55 uppercase">Days left</div></div>
                  <div><div className={`font-fraunces text-[16px] font-semibold ${t.readiness >= 80 ? 'text-[#8FD4A8]' : t.readiness >= 60 ? 'text-[#F2BC7B]' : 'text-[#F2A38C]'}`}>{t.readiness}%</div><div className="text-[9px] text-paper/55 uppercase">Ready</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
