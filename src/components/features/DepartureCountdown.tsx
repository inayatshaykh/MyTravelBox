import { useCountdown } from '../../hooks/useCountdown'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function DepartureCountdown() {
  const { days, hours, minutes, seconds } = useCountdown()

  return (
    <div
      className="flex justify-center items-center gap-3.5 mt-4"
      aria-label={`Departure countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`}
      aria-live="polite"
      aria-atomic="true"
    >
      {[
        { value: pad(days), label: 'Days' },
        { value: pad(hours), label: 'Hours' },
        { value: pad(minutes), label: 'Mins' },
        { value: pad(seconds), label: 'Secs' },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-3.5">
          {i > 0 && (
            <span className="font-fraunces text-[36px] text-paper/30" aria-hidden="true">:</span>
          )}
          <div className="text-center">
            <div className="font-fraunces text-[52px] font-semibold text-amber leading-none">
              {item.value}
            </div>
            <div className="text-[11px] text-paper/55 uppercase tracking-[0.08em] mt-1">
              {item.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
