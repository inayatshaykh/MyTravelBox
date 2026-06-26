import { timelineEvents } from '../../data/mockData'

export default function Timeline() {
  return (
    <div className="bg-paper-raised border border-line rounded-2xl p-[18px]">
      <h3 className="text-[17px] font-semibold mb-4">Timeline</h3>
      <div className="pt-1.5">
        {timelineEvents.map((event, i) => (
          <div key={i} className="flex gap-3 pb-[18px] last:pb-0">
            {/* Rail */}
            <div className="w-[18px] flex flex-col items-center flex-shrink-0">
              <div
                className={`w-2 h-2 rounded-full mt-0.5 flex-shrink-0 ${event.done ? 'bg-sage' : 'bg-line'}`}
                aria-hidden="true"
              />
              {i < timelineEvents.length - 1 && (
                <div className="w-[1.5px] flex-1 bg-line mt-0.5" aria-hidden="true" />
              )}
            </div>
            {/* Content */}
            <div className="flex-1 pb-0.5">
              <div className="text-[10.5px] text-ink-soft font-semibold tracking-[0.02em]">{event.date}</div>
              <div className="text-[13px] mt-0.5 leading-[1.4]">
                <strong className={`font-semibold ${!event.done ? 'text-ink' : 'text-ink-soft'}`}>
                  {event.text}
                </strong>
              </div>
            </div>
            {event.done && (
              <span className="text-sage text-[11px] font-bold mt-0.5 flex-shrink-0" aria-label="completed">✓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
