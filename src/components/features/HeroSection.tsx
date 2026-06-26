import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

const chips = [
  { label: 'Japan',     sub: '45 students', dotColor: '#C25640', pos: { top: '6%',  left: '58%' }, anim: 'animate-float' },
  { label: 'Singapore', sub: '32 students', dotColor: '#5B8A6B', pos: { top: '38%', left: '2%'  }, anim: 'animate-float-1' },
  { label: 'Europe',    sub: '28 students', dotColor: '#E87521', pos: { top: '70%', left: '64%' }, anim: 'animate-float-2' },
  { label: 'Dubai',     sub: '60 students', dotColor: '#3B82F6', pos: { top: '22%', left: '78%' }, anim: 'animate-float-3' },
]

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-[76px] pb-10 sm:pb-14 md:pb-[60px]
      flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-[60px] items-center">

      {/* ── Left copy ── */}
      <div>
        {/* Tagline pill */}
        <div className="inline-flex items-center gap-[7px] bg-amber-soft text-amber-deep text-[11.5px] sm:text-[12.5px] font-bold px-3 sm:px-3.5 py-[6px] sm:py-[7px] rounded-full mb-3 sm:mb-4">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <path d="M6 0l1.5 4.5H12L8.5 7.3l1.3 4.2L6 9l-3.8 2.5 1.3-4.2L0 4.5h4.5z" />
          </svg>
          Learn. Explore. Grow.
        </div>

        {/* Eyebrow */}
        <p className="text-[11px] sm:text-[12.5px] font-bold tracking-[0.12em] uppercase text-amber-deep mb-3 sm:mb-[18px]">
          School &amp; College Educational Tours
        </p>

        {/* H1 */}
        <h1 className="font-fraunces font-semibold text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] tracking-[-0.015em] text-ink max-w-[560px]">
          Transforming educational travel into{' '}
          <em className="not-italic text-amber-deep">life-changing</em>{' '}
          learning experiences
        </h1>

        {/* Lede */}
        <p className="text-[14.5px] sm:text-[16px] md:text-[16.5px] text-ink-soft leading-[1.6] mt-4 sm:mt-5 md:mt-[22px] max-w-[480px]">
          My Travel Box plans and runs school tours end-to-end — itinerary to immigration to the last rupee collected — so coordinators can focus on the trip, not the logistics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
          <Button
            variant="dark"
            className="text-[14px] sm:text-[14.5px] py-3 sm:py-[13px] px-5 sm:px-[26px] justify-center"
            onClick={() => navigate('/register')}
            aria-label="Request a Proposal"
          >
            Request a Proposal
          </Button>
          <Button
            variant="ghost"
            className="text-[14px] sm:text-[14.5px] py-3 sm:py-[13px] px-5 sm:px-[26px] justify-center"
            aria-label="Explore Programs"
          >
            Explore Programs
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 sm:gap-9 mt-8 sm:mt-12">
          {[
            { num: '120+',   lbl: 'Schools served' },
            { num: '14',     lbl: 'Countries covered' },
            { num: '9,400+', lbl: 'Students travelled' },
          ].map(stat => (
            <div key={stat.lbl}>
              <div className="font-fraunces text-[22px] sm:text-[28px] font-semibold text-ink">{stat.num}</div>
              <div className="text-[11px] sm:text-[12px] text-ink-faint mt-0.5">{stat.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Globe visual ── */}
      {/* Hidden on very small screens, shown sm+ */}
      <div className="hidden sm:block relative w-full max-w-[360px] md:max-w-[460px] mx-auto" style={{ aspectRatio: '1/1' }}>
        <div className="absolute inset-0">
          {/* Core globe */}
          <div
            className="absolute rounded-full"
            style={{
              left: '50%', top: '50%',
              width: '50%', height: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle at 30% 26%, #8A5A3E 0%, #5C3A2A 38%, #4A2E22 75%)',
              boxShadow: '0 30px 60px -10px rgba(74,46,34,0.4), inset -14px -16px 44px rgba(0,0,0,0.3), inset 12px 10px 34px rgba(252,211,160,0.15)',
            }}
            aria-hidden="true"
          />
          {/* Ring 1 */}
          <div
            className="absolute rounded-full border border-ink/[0.14]"
            style={{ left: '50%', top: '50%', width: '70%', height: '70%', transform: 'translate(-50%,-50%)' }}
            aria-hidden="true"
          />
          {/* Ring 2 */}
          <div
            className="absolute rounded-full"
            style={{
              left: '50%', top: '50%', width: '88%', height: '88%',
              transform: 'translate(-50%,-50%)',
              border: '1px dashed rgba(74,46,34,0.14)',
            }}
            aria-hidden="true"
          />
          {/* Chips */}
          {chips.map(chip => (
            <div
              key={chip.label}
              className={`absolute bg-paper-raised border border-line rounded-full px-2.5 py-[6px] pl-2 shadow-sm flex items-center gap-[6px] text-[11px] font-semibold whitespace-nowrap ${chip.anim}`}
              style={{ top: chip.pos.top, left: chip.pos.left }}
              aria-label={`${chip.label}: ${chip.sub}`}
            >
              <span className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: chip.dotColor }} />
              <span>{chip.label}</span>
              <span className="text-ink-faint font-normal hidden md:inline">{chip.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
