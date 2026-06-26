import { destinations } from '../../data/mockData'

export default function DestinationsGrid() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-[70px]">
      <div className="flex justify-between items-end mb-5 sm:mb-7 md:mb-9">
        <div>
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-ink-faint">Where We Go</p>
          <h2 className="font-fraunces text-[22px] sm:text-[26px] md:text-[30px] font-semibold mt-1.5 tracking-[-0.01em]">
            Destinations
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[14.5px] text-ink-soft mt-1.5 max-w-[420px]">
            From Japan to Rajasthan — curated programs for every curriculum.
          </p>
        </div>
        <a href="#" className="hidden sm:block text-[13px] font-semibold text-amber-deep hover:underline flex-shrink-0 ml-4">
          View all →
        </a>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-[18px]"
        role="list"
        aria-label="Tour destinations"
      >
        {destinations.map(dest => (
          <div
            key={dest.name}
            className="rounded-xl md:rounded-2xl overflow-hidden bg-paper-raised border border-line cursor-pointer
              transition-all duration-200 hover:-translate-y-1 hover:shadow
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
            role="listitem"
            tabIndex={0}
            aria-label={`${dest.name} — ${dest.region}, ${dest.duration}`}
          >
            <div
              className="h-[90px] sm:h-[110px] md:h-[130px] flex items-center justify-center text-[26px] sm:text-[30px] md:text-[34px]"
              style={{ background: dest.bg }}
              aria-hidden="true"
            >
              {dest.emoji}
            </div>
            <div className="px-3 sm:px-4 pt-2.5 sm:pt-3 pb-3 sm:pb-3.5">
              <div className="font-fraunces font-semibold text-[13.5px] sm:text-[15px] md:text-[16px]">{dest.name}</div>
              <div className="text-[11px] sm:text-[12px] text-ink-faint mt-0.5">
                {dest.region} · {dest.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
