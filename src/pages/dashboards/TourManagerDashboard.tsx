import { useState } from 'react'
import DashboardShell from '../../components/layout/DashboardShell'
import { keyContacts, packingList } from '../../data/mockData'
import DepartureCountdown from '../../components/features/DepartureCountdown'

const students = [
  { name: 'Arjun Sharma',   room: '301A', meal: 'Veg',  medical: 'None',       emergency: '9820011001' },
  { name: 'Priya Kapoor',   room: '301B', meal: 'Veg',  medical: 'Asthma',     emergency: '9820011002' },
  { name: 'Rohan Mehta',    room: '302A', meal: 'Jain', medical: 'None',       emergency: '9820011003' },
  { name: 'Simran Kaur',    room: '302B', meal: 'Veg',  medical: 'Lactose',    emergency: '9820011004' },
  { name: 'Aditya Verma',   room: '303A', meal: 'Non-Veg', medical: 'None',    emergency: '9820011005' },
]

const expenses = [
  { category: 'Meals',            amount: '₹4,200',  date: 'Feb 15', receipt: true },
  { category: 'Local Transport',  amount: '₹1,800',  date: 'Feb 15', receipt: true },
  { category: 'Tips',             amount: '₹600',    date: 'Feb 15', receipt: false },
  { category: 'Student Support',  amount: '₹2,100',  date: 'Feb 16', receipt: true },
]

const updates = [
  { time: '08:30', text: 'All 45 students boarded. Flight AI-306 departing on time from T3.' },
  { time: 'Day 1 14:00', text: 'Arrived NRT. Customs cleared. Bus to hotel departed.' },
  { time: 'Day 2 09:00', text: 'Akihabara visit — all students present. No incidents.' },
]

export default function TourManagerDashboard() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [newUpdate, setNewUpdate] = useState('')

  function toggle(id: string) {
    setChecked(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  return (
    <DashboardShell title="Tour Manager Dashboard" subtitle="Japan Educational Tour 2025 — On Tour">
      {/* Countdown */}
      <div className="bg-ink text-paper rounded-2xl p-5 mb-5 text-center">
        <div className="text-[12px] text-paper/60 font-semibold mb-2">Japan Educational Tour 2025</div>
        <DepartureCountdown />
        <div className="text-[12px] text-paper/60 mt-2">45 students · Air India AI-306 · Terminal T3</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Student list */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-semibold">👨‍🎓 Student Roster</h2>
            <span className="text-[12px] text-ink-faint">Showing 5 of 45</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="border-b border-line text-ink-faint text-[10.5px] uppercase">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Room</th>
                  <th className="text-left py-2">Meal</th>
                  <th className="text-left py-2">Medical</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i} className={i > 0 ? 'border-t border-line' : ''}>
                    <td className="py-2.5 font-medium">{s.name}</td>
                    <td className="py-2.5 text-ink-soft">{s.room}</td>
                    <td className="py-2.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.meal === 'Veg' ? 'bg-sage-soft text-sage' : s.meal === 'Jain' ? 'bg-amber-soft text-amber-deep' : 'bg-line text-ink-soft'}`}>
                        {s.meal}
                      </span>
                    </td>
                    <td className={`py-2.5 text-[11px] ${s.medical !== 'None' ? 'text-terracotta font-semibold' : 'text-ink-faint'}`}>
                      {s.medical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key contacts */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <h2 className="text-[16px] font-semibold mb-4">📞 Key Contacts</h2>
          {keyContacts.map((c, i) => (
            <div key={i} className={`flex justify-between items-center py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div>
                <div className="text-[13.5px] font-semibold">{c.role}</div>
                <div className="text-[11.5px] text-ink-faint">{c.name}</div>
              </div>
              <a href={`tel:${c.phone}`} className="font-bold text-amber-deep text-[13px] hover:underline">{c.phone}</a>
            </div>
          ))}
        </div>

        {/* Ground expenses */}
        <div className="bg-paper-raised border border-line rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[16px] font-semibold">💸 Ground Expenses</h2>
            <button className="text-[12px] font-bold bg-amber-soft text-amber-deep px-3 py-1.5 rounded-xl hover:opacity-80">
              + Add Expense
            </button>
          </div>
          {expenses.map((e, i) => (
            <div key={i} className={`flex items-center justify-between py-3 ${i > 0 ? 'border-t border-line' : ''}`}>
              <div>
                <div className="text-[13px] font-semibold">{e.category}</div>
                <div className="text-[11.5px] text-ink-faint">{e.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold">{e.amount}</span>
                {e.receipt
                  ? <span className="text-[10px] bg-sage-soft text-sage px-2 py-0.5 rounded-full font-bold">Receipt ✓</span>
                  : <span className="text-[10px] bg-terracotta-soft text-terracotta px-2 py-0.5 rounded-full font-bold">No Receipt</span>
                }
              </div>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-line flex justify-between">
            <span className="text-[13px] font-semibold text-ink-soft">Total Spent</span>
            <span className="text-[15px] font-bold text-ink">₹8,700</span>
          </div>
        </div>

        {/* Live updates + packing */}
        <div className="flex flex-col gap-5">
          <div className="bg-paper-raised border border-line rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[16px] font-semibold">📡 Post Daily Update</h2>
            </div>
            <textarea
              rows={3}
              value={newUpdate}
              onChange={e => setNewUpdate(e.target.value)}
              placeholder="Write today's tour update…"
              className="w-full px-3.5 py-3 border-[1.5px] border-line rounded-xl text-[13.5px] bg-paper focus:outline-none focus:border-amber resize-none"
            />
            <button className="mt-2 w-full bg-amber text-white font-bold text-[13.5px] py-2.5 rounded-xl hover:opacity-90">
              Post Update
            </button>
            <div className="mt-3 flex flex-col gap-2">
              {updates.map((u, i) => (
                <div key={i} className="text-[12px] text-ink-soft border-l-2 border-amber pl-3">
                  <span className="font-bold text-ink-faint">{u.time}: </span>{u.text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-paper-raised border border-line rounded-2xl p-5">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[16px] font-semibold">🎒 Packing Checklist</h2>
              <span className="text-[12px] text-ink-faint">{checked.size}/{packingList.length}</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {packingList.slice(0, 6).map(item => (
                <label key={item.id} className="flex items-center gap-2.5 text-[13px] cursor-pointer">
                  <input type="checkbox" checked={checked.has(item.id)} onChange={() => toggle(item.id)} className="accent-amber" />
                  <span className={checked.has(item.id) ? 'line-through text-ink-faint' : ''}>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
