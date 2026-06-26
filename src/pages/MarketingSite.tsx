import { useNavigate } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'

export default function MarketingSite() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen" style={{ background: '#FAF7F2', color: '#2C1A0E', fontFamily: "'Inter', sans-serif" }}>
      <SiteHeader />
      <HeroSection navigate={navigate} />
      <RunwaySection />
      <StatsAndStamps />
      <ProgramsSection navigate={navigate} />
      <JourneySection />
      <CTASection navigate={navigate} />
      <Footer navigate={navigate} />
    </div>
  )
}

/* ══════════════════════════════════════════
   HERO — full-bleed with warm gradient overlay
══════════════════════════════════════════ */
function HeroSection({ navigate }: { navigate: (p: string) => void }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3D2010 0%, #6B3A1F 35%, #C4874A 70%, #E8B87A 100%)',
      }}
      id="about"
    >
      {/* decorative bokeh circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] right-[10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #F5C97A 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-100px] left-[5%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #E87521 0%, transparent 70%)' }} />
        {/* hot air balloon doodles */}
        <div className="absolute top-[8%] right-[8%] text-[80px] opacity-70 animate-float">🎈</div>
        <div className="absolute top-[15%] right-[22%] text-[55px] opacity-50 animate-float-1">🎈</div>
        <div className="absolute top-[25%] right-[35%] text-[40px] opacity-40 animate-float-2">🎈</div>
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        {/* badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full mb-8">
          For IB &amp; India's Premium Schools
        </div>

        {/* headline */}
        <h1 className="font-fraunces text-white leading-[1.05] tracking-[-0.02em] max-w-[640px]"
          style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
          The walls of a classroom<br />
          can hold{' '}
          <em className="not-italic text-amber">a whole world.</em>
        </h1>

        {/* sub */}
        <p className="text-white/80 mt-6 max-w-[460px] leading-[1.65]"
          style={{ fontSize: 'clamp(14px, 1.5vw, 17px)' }}>
          Every great journey begins with a student staring out of a window.
          My Travel Box turns that quiet curiosity into curriculum-led
          international travel for India's finest schools.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <button
            onClick={() => navigate('/register')}
            className="bg-amber hover:opacity-90 text-white font-bold px-8 py-3.5 rounded-full text-[14.5px] transition-opacity flex items-center gap-2"
          >
            Begin the journey →
          </button>
          <button
            onClick={() => {
              document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full text-[14.5px] transition-all"
          >
            See programs
          </button>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span className="text-[9px] font-bold tracking-[0.2em] text-white/50 uppercase">Scroll · The World Opens</span>
          <div className="w-[1px] h-8 bg-white/20" />
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   RUNWAY SECTION — editorial big type + flight path
══════════════════════════════════════════ */
function RunwaySection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 text-center" style={{ background: '#FAF7F2' }}>
      <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mb-5">And then, one day —</p>
      <h2 className="font-fraunces leading-[1.08] tracking-[-0.02em] text-[#2C1A0E] max-w-[700px] mx-auto"
        style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}>
        the desk becomes a{' '}
        <span className="text-amber">runway</span>,<br />
        and the textbook, a{' '}
        <span className="text-amber">boarding pass</span>.
      </h2>

      {/* Flight-path diagram */}
      <div className="relative max-w-[800px] mx-auto mt-16 h-[160px] hidden sm:block">
        <svg viewBox="0 0 800 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M 40 140 Q 200 140 300 90 Q 450 30 600 60 Q 700 75 760 40"
            fill="none" stroke="#E87521" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="40" cy="140" r="5" fill="#E87521" />
        </svg>
        {/* Labels */}
        {[
          { x: '4%',  y: '78%', label: 'DELHI · BLR · MUM' },
          { x: '36%', y: '55%', label: 'CURRICULUM-MAPPED' },
          { x: '58%', y: '18%', label: '1:8 MENTOR RATIO' },
          { x: '76%', y: '30%', label: '24/7 ON-TOUR CARE' },
          { x: '91%', y: '15%', label: 'THE WORLD', arrow: true },
        ].map(p => (
          <div
            key={p.label}
            className="absolute text-[10px] font-bold tracking-[0.1em] uppercase text-ink whitespace-nowrap bg-white border border-[#E8DDD0] px-2.5 py-1 rounded-full shadow-sm"
            style={{ left: p.x, top: p.y, transform: 'translateY(-50%)' }}
          >
            {p.label} {p.arrow && '✈'}
          </div>
        ))}
      </div>

      {/* Sub text */}
      <p className="text-[15px] sm:text-[16px] text-ink-soft leading-[1.7] max-w-[580px] mx-auto mt-14 sm:mt-6">
        We design every flight, every meal, every museum pass — so your teachers
        can do what they do best: teach. And your students can do what they were
        born to do: <em className="not-italic text-amber font-semibold">wonder.</em>
      </p>
    </section>
  )
}

/* ══════════════════════════════════════════
   STATS + PASSPORT STAMPS
══════════════════════════════════════════ */
function StatsAndStamps() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: '#FAF7F2' }} id="tours">
      <div className="max-w-[1180px] mx-auto">
        {/* Header + stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mb-3">Stamps on our passport</p>
            <h2 className="font-fraunces text-[#2C1A0E] leading-[1.1]" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Every stamp is a{' '}
              <span className="text-amber">student</span>, changed.
            </h2>
          </div>
          <div className="flex gap-8 md:justify-end">
            {[
              { num: '40+',   lbl: 'SCHOOLS' },
              { num: '12+',   lbl: 'COUNTRIES' },
              { num: '6,400', lbl: 'STUDENTS' },
            ].map(s => (
              <div key={s.lbl} className="text-center">
                <div className="font-fraunces text-amber font-semibold" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>{s.num}</div>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-ink-faint mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Passport stamp cards — rotated scattered layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { city: 'TOKYO',   country: 'JAPAN',     date: 'MAR 2025', rot: '-2deg' },
            { city: 'PARIS',   country: 'FRANCE',    date: 'JUL 2025', rot: '1.5deg' },
            { city: 'GENEVA',  country: 'CERN · CH', date: 'OCT 2025', rot: '-1deg' },
            { city: 'ORLANDO', country: 'NASA · US', date: 'DEC 2025', rot: '2deg' },
            { city: 'OXFORD',  country: 'UK',        date: 'APR 2026', rot: '-1.5deg' },
            { city: 'DUBAI',   country: 'UAE',       date: 'FEB 2026', rot: '1deg' },
          ].map(s => (
            <div
              key={s.city}
              className="bg-[#FAF7F2] border-2 border-amber rounded-xl p-4 sm:p-5 hover:shadow-lg transition-all hover:-translate-y-1 cursor-default"
              style={{ transform: `rotate(${s.rot})`, borderStyle: 'dashed' }}
            >
              <div className="text-[9px] font-bold tracking-[0.15em] text-amber mb-2 flex items-center gap-1">
                <span>✈</span> MY TRAVEL BOX
              </div>
              <div className="font-fraunces font-semibold text-[#2C1A0E] mb-0.5"
                style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}>{s.city}</div>
              <div className="text-[10px] font-semibold tracking-[0.1em] text-ink-soft uppercase">{s.country}</div>
              <div className="flex justify-between items-end mt-4">
                <div className="text-[9px] tracking-[0.1em] text-ink-faint uppercase">ENTRY</div>
                <div className="text-[9px] tracking-[0.08em] text-ink-faint">{s.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PROGRAMS SECTION
══════════════════════════════════════════ */
function ProgramsSection({ navigate }: { navigate: (p: string) => void }) {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: '#F5EFE6' }} id="programs">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mb-3">Our Programs</p>
          <h2 className="font-fraunces text-[#2C1A0E] leading-[1.08]" style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}>
            One box. <span className="text-amber">Many doors.</span>
          </h2>
          <p className="text-ink-soft mt-4 max-w-[520px] mx-auto text-[15px] leading-[1.65]">
            Curated, curriculum-led journeys built for the age, ambition and academic frame of your school.
          </p>
        </div>

        {/* Flagship card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="h-[260px] md:h-[360px] flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #3D2010, #7A4020)' }}>
              <span className="absolute top-4 left-4 bg-amber text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                Flagship
              </span>
              <div className="text-center text-white">
                <div className="text-[70px] mb-2">🌍</div>
                <div className="font-fraunces text-[24px] font-semibold">GLOBAL by MTB</div>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-amber mb-3">Global by MTB</p>
              <h3 className="font-fraunces text-[#2C1A0E] leading-[1.1] mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
                The flagship programme for IB &amp; international schools.
              </h3>
              <p className="text-ink-soft text-[14px] leading-[1.7] mb-5">
                A 10–14 day curriculum-integrated journey across two countries — co-designed with your leadership,
                mapped to IB MYP/DP, CAS and IGCSE outcomes. From the foothills of Mt Fuji to the labs of CERN.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Pre-tour curriculum kit', 'Daily parent broadcasts', 'Background-verified mentors', 'Post-tour outcome report'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-[13px] text-ink-soft">
                    <span className="text-amber">✦</span> {f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <button onClick={() => navigate('/register')}
                  className="bg-amber text-white font-bold text-[13.5px] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                  Download brochure ↓
                </button>
                <button onClick={() => navigate('/register')}
                  className="border border-[#E8DDD0] text-ink font-semibold text-[13.5px] px-6 py-2.5 rounded-full hover:border-amber transition-colors">
                  Talk to a designer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { grade: 'GRADES 6–8',  name: 'Discover by MTB', desc: 'First international steps. Singapore, Dubai, UK heritage trails.', emoji: '🌏', bg: 'linear-gradient(135deg,#2C5F3A,#4A8A5A)' },
            { grade: 'GRADES 9–12', name: 'STEM by MTB',     desc: 'NASA Kennedy, CERN, JAXA and university lab residencies.',        emoji: '🚀', bg: 'linear-gradient(135deg,#1A2C5F,#3A4A8A)' },
            { grade: 'ALL GRADES',  name: 'Culture by MTB',  desc: 'Japan, France, Italy — language, art, food, history.',            emoji: '🎎', bg: 'linear-gradient(135deg,#5F2C1A,#8A4A3A)' },
          ].map(p => (
            <div key={p.name} className="rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
              onClick={() => navigate('/register')}>
              <div className="h-[160px] flex items-end pb-4 px-4"
                style={{ background: p.bg }}>
                <div className="text-white">
                  <div className="text-[9.5px] font-bold tracking-[0.12em] uppercase opacity-70 mb-1">{p.grade}</div>
                  <div className="font-fraunces text-[20px] font-semibold">{p.name}</div>
                </div>
                <div className="text-[40px] ml-auto opacity-80">{p.emoji}</div>
              </div>
              <div className="bg-white p-4">
                <p className="text-[13px] text-ink-soft leading-[1.55]">{p.desc}</p>
                <span className="text-amber text-[13px] font-semibold mt-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   JOURNEY — Six chapters
══════════════════════════════════════════ */
function JourneySection() {
  const steps = [
    { n: '01', label: 'Dream',   sub: 'A spark at the window.',      emoji: '🌅' },
    { n: '02', label: 'Plan',    sub: 'Mapped to your curriculum.',  emoji: '🗺️' },
    { n: '03', label: 'Explore', sub: 'The world, walked in.',       emoji: '✈️' },
    { n: '04', label: 'Learn',   sub: 'Hands-on, mind-open.',        emoji: '🔬' },
    { n: '05', label: 'Reflect', sub: 'Pages of perspective.',       emoji: '📖' },
    { n: '06', label: 'Grow',    sub: 'Ready for the world.',        emoji: '🎓' },
  ]

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber mb-3">Tours in Motion</p>
            <h2 className="font-fraunces text-[#2C1A0E] leading-[1.1]" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
              Six chapters. One <span className="text-amber">becoming</span>.
            </h2>
          </div>
          <p className="text-[15px] text-ink-soft leading-[1.65] md:text-right">
            From the first map on the bedroom wall to the moment they walk taller into a board interview.
          </p>
        </div>

        {/* Step circles */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center group">
              {/* Circle */}
              <div className="relative w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full border-2 border-dashed border-[#E8DDD0] flex items-center justify-center bg-[#FAF7F2] mb-3 group-hover:border-amber group-hover:bg-amber-soft/20 transition-all">
                <span className="text-[30px] sm:text-[36px]">{s.emoji}</span>
                {/* Number badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2C1A0E] text-white text-[11px] font-bold flex items-center justify-center">
                  {s.n}
                </div>
                {/* Dotted connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-full top-1/2 w-4 h-[1px] border-t border-dashed border-[#E8DDD0] hidden sm:block" />
                )}
              </div>
              <div className="font-fraunces text-[15px] sm:text-[17px] font-semibold text-[#2C1A0E]">{s.label}</div>
              <div className="text-[11px] text-ink-faint mt-0.5 leading-[1.4]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   CTA SECTION — dark image-like block
══════════════════════════════════════════ */
function CTASection({ navigate }: { navigate: (p: string) => void }) {
  return (
    <section className="py-10 sm:py-14 px-5 sm:px-8" style={{ background: '#FAF7F2' }}>
      <div className="max-w-[1100px] mx-auto">
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden relative min-h-[340px] flex items-center"
          style={{ background: 'linear-gradient(135deg, #2C1A0E 0%, #5C3010 50%, #8A5020 100%)' }}
        >
          {/* decorative world map emoji */}
          <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 text-[120px] sm:text-[180px] opacity-10 select-none pointer-events-none">
            🌍
          </div>
          <div className="relative z-10 p-8 sm:p-14 max-w-[560px]">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber/80 mb-4">Start the conversation</p>
            <h2 className="font-fraunces text-white leading-[1.1]" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>
              Let's design the journey your students deserve.
            </h2>
            <p className="text-white/70 mt-4 text-[14px] sm:text-[15px] leading-[1.65]">
              Tell us about your school and curriculum goals — we'll craft a proposal within 5 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={() => navigate('/register')}
                className="bg-white text-[#2C1A0E] font-bold text-[13.5px] px-7 py-3 rounded-full hover:bg-amber hover:text-white transition-all"
              >
                Request a proposal
              </button>
              <button
                onClick={() => navigate('/login')}
                className="border border-white/30 text-white font-semibold text-[13.5px] px-7 py-3 rounded-full hover:bg-white/10 transition-all"
              >
                Speak to our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer({ navigate }: { navigate: (p: string) => void }) {
  return (
    <footer className="border-t border-[#E8DDD0] py-10 px-5 sm:px-8" style={{ background: '#FAF7F2' }}>
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <button onClick={() => navigate('/')} className="font-fraunces font-semibold text-[15px] text-[#2C1A0E] hover:opacity-70 transition-opacity">
          My <span className="text-amber">Travel</span> Box
        </button>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
          {['About MTB', 'Programs', 'Parent Portal', 'Privacy', 'Contact'].map(l => (
            <button key={l} className="text-[12.5px] text-ink-faint hover:text-amber transition-colors">{l}</button>
          ))}
        </div>
        <p className="text-[11.5px] text-ink-faint">© 2025 MyTravelBox Private Limited</p>
      </div>
    </footer>
  )
}
