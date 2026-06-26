import { liveManifest } from '../../data/mockData'
import ProgressBar from '../ui/ProgressBar'

export default function ManifestStrip() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-[70px]">
      <div className="flex justify-between items-end mb-5 sm:mb-7 md:mb-9">
        <div>
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-ink-faint">Live</p>
          <h2 className="font-fraunces text-[22px] sm:text-[26px] md:text-[30px] font-semibold mt-1.5 tracking-[-0.01em]">
            Tours in Motion
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-ink-soft mt-1.5 max-w-[420px]">
            Active school programs running right now, tracked in real time.
          </p>
        </div>
        <a href="#" className="hidden sm:block text-[13px] font-semibold text-amber-deep hover:underline flex-shrink-0 ml-4">
          View all →
        </a>
      </div>

      {/* Bleed to screen edge on mobile for the scroll strip */}
      <div className="-mx-4 sm:mx-0 px-4 sm:px-0">
        <div
          className="manifest-strip flex gap-3 sm:gap-4 overflow-x-auto pb-2"
          role="list"
          aria-label="Live tour manifest"
        >
          {liveManifest.map(tour => (
            <div
              key={tour.destination}
              className="min-w-[230px] sm:min-w-[260px] md:min-w-[270px] bg-ink text-paper rounded-2xl p-4 sm:p-5 flex-shrink-0"
              role="listitem"
            >
              <div className="flex justify-between items-start">
                <div className="min-w-0 pr-2">
                  <div className="font-fraunces text-[17px] sm:text-[19px] font-semibold truncate">{tour.destination}</div>
                  <div className="text-[10.5px] sm:text-[11.5px] text-paper/60 mt-0.5 truncate">{tour.school}</div>
                </div>
                <span className="text-[20px] sm:text-[22px] flex-shrink-0" aria-hidden="true">{tour.flag}</span>
              </div>

              <div className="flex gap-3 sm:gap-[18px] mt-4 sm:mt-[22px]">
                {[
                  { v: tour.students,        l: 'Students' },
                  { v: tour.daysToGo,        l: 'Days to go' },
                  { v: `${tour.readiness}%`, l: 'Ready' },
                ].map(item => (
                  <div key={item.l}>
                    <div className="font-fraunces text-[17px] sm:text-[19px] font-semibold text-amber">{item.v}</div>
                    <div className="text-[9.5px] sm:text-[10px] text-paper/55 mt-0.5 uppercase tracking-[0.05em]">{item.l}</div>
                  </div>
                ))}
              </div>

              <ProgressBar value={tour.readiness} color="#E87521" className="mt-3 sm:mt-3.5 h-1" />
            </div>
          ))}
          {/* trailing spacer so last card doesn't clip on mobile */}
          <div className="w-4 flex-shrink-0 sm:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
