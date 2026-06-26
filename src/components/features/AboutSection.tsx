const pillars = [
  { num: '01', title: 'Safety First',  desc: 'Dedicated risk protocols' },
  { num: '02', title: 'Academic Value', desc: 'Curriculum-linked itineraries' },
  { num: '03', title: 'End-to-End',    desc: 'From proposal to post-trip report' },
  { num: '04', title: 'Transparent',   desc: 'Live tracking for parents' },
]

export default function AboutSection() {
  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-[60px] items-center">

        {/* ── Left ── */}
        <div>
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-ink-faint">Since 2016</p>
          <h2 className="font-fraunces text-[22px] sm:text-[26px] md:text-[30px] font-semibold mt-2 tracking-[-0.01em]">
            Education first.<br />Adventure always.
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-[18px] mt-4">
            {pillars.map(p => (
              <div key={p.num} className="pt-3 sm:pt-4 border-t border-line">
                <div className="font-fraunces text-amber-deep text-[13px] sm:text-[14px] font-semibold">{p.num}</div>
                <h4 className="text-[13px] sm:text-[14px] md:text-[14.5px] font-bold mt-1.5">{p.title}</h4>
                <p className="text-[12px] sm:text-[12.5px] md:text-[13px] text-ink-soft mt-1 leading-[1.5]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <div className="bg-ink rounded-[20px] p-6 sm:p-8 md:p-10 text-paper">
          <blockquote>
            <p className="font-fraunces text-[17px] sm:text-[19px] md:text-[21px] leading-[1.45] font-medium">
              "We don't sell trips. We design learning journeys that happen to involve travel."
            </p>
            <footer className="mt-4 sm:mt-5 text-[12.5px] sm:text-[13px] text-paper/60">
              — Founder, MyTravelBox
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
