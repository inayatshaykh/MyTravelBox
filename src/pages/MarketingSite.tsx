import { useNavigate } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'

// All URLs verified 200 OK
const P = {
  hero:     'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1800&q=85&fit=crop&crop=center',
  flagship: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80&fit=crop',
  discover: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=80&fit=crop',
  stem:     'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=700&q=80&fit=crop',
  culture:  'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80&fit=crop',
  cta:      'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=1400&q=80&fit=crop',
  j1: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80&fit=crop',
  j2: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&q=80&fit=crop',
  j3: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300&q=80&fit=crop',
  j4: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=300&q=80&fit=crop',
  j5: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&q=80&fit=crop',
  j6: 'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?w=300&q=80&fit=crop',
}

export default function MarketingSite() {
  const nav = useNavigate()
  return (
    <div style={{ background: '#FAF7F2', color: '#2C1A0E' }}>
      <SiteHeader />
      <HeroSection nav={nav} />
      <RunwaySection />
      <StampsSection />
      <ProgramsSection nav={nav} />
      <JourneySection />
      <CTASection nav={nav} />
      <PageFooter nav={nav} />
    </div>
  )
}

/* ── HERO ────────────────────────────────────────────── */
function HeroSection({ nav }: { nav:(p:string)=>void }) {
  return (
    <section className="relative flex items-center overflow-hidden" style={{ minHeight:'92vh' }} id="about">
      <img src={P.hero} alt="School student dreaming of the world" loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter:'brightness(0.68) saturate(1.15)' }} />
      <div className="absolute inset-0" style={{
        background:'linear-gradient(100deg,rgba(44,12,2,0.84) 0%,rgba(90,40,10,0.62) 45%,rgba(200,130,50,0.16) 100%)'
      }}/>
      <div className="absolute inset-0" style={{
        background:'linear-gradient(to top,rgba(30,8,0,0.35) 0%,transparent 35%)'
      }}/>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-24 md:py-32">
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20
          text-white/88 text-[10px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-6">
          For IB &amp; India's Premium Schools
        </div>

        <h1 className="font-fraunces text-white max-w-[600px]" style={{
          fontSize:'clamp(34px,5.5vw,68px)', lineHeight:1.06,
          letterSpacing:'-0.02em', textShadow:'0 2px 24px rgba(0,0,0,0.35)'
        }}>
          The walls of a<br/>classroom<br/>can hold{' '}
          <em className="not-italic" style={{ color:'#E87521', textShadow:'0 0 40px rgba(232,117,33,0.5)' }}>
            a whole world.
          </em>
        </h1>

        <p className="text-white/82 mt-5 font-light max-w-[420px]" style={{
          fontSize:'clamp(13px,1.4vw,16px)', lineHeight:1.72, textShadow:'0 1px 8px rgba(0,0,0,0.3)'
        }}>
          Every great journey begins with a student staring out of a window.
          My Travel Box turns that quiet curiosity into curriculum-led
          international travel for India's finest schools.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button onClick={() => nav('/register')}
            className="bg-[#E87521] hover:opacity-90 text-white font-bold rounded-full shadow-lg w-fit transition-opacity"
            style={{ padding:'12px 28px', fontSize:14 }}>
            Begin the journey →
          </button>
          <button onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior:'smooth' })}
            className="bg-white/12 hover:bg-white/22 backdrop-blur-sm border border-white/30
              text-white font-semibold rounded-full w-fit transition-all"
            style={{ padding:'12px 28px', fontSize:14 }}>
            See programs
          </button>
        </div>

        <div className="hidden sm:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 pointer-events-none">
          <span className="text-[8.5px] font-bold tracking-[0.24em] text-white/40 uppercase">Scroll · The World Opens</span>
          <div className="w-px h-7 bg-white/18"/>
        </div>
      </div>
    </section>
  )
}

/* ── RUNWAY ──────────────────────────────────────────── */
function RunwaySection() {
  const labels = [
    { x:'2%',  y:'85%', t:'DELHI · BLR · MUM' },
    { x:'30%', y:'52%', t:'CURRICULUM-MAPPED' },
    { x:'53%', y:'18%', t:'1:8 MENTOR RATIO' },
    { x:'72%', y:'32%', t:'24/7 ON-TOUR CARE' },
    { x:'89%', y:'16%', t:'THE WORLD ✈' },
  ]
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 text-center" style={{ background:'#FAF7F2' }}>
      <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color:'#E87521' }}>And then, one day —</p>
      <h2 className="font-fraunces mx-auto text-[#2C1A0E] max-w-[700px]"
        style={{ fontSize:'clamp(28px,5vw,60px)', lineHeight:1.1, letterSpacing:'-0.02em' }}>
        the desk becomes a <span style={{ color:'#E87521' }}>runway</span>,<br/>
        and the textbook, a <span style={{ color:'#E87521' }}>boarding pass</span>.
      </h2>

      {/* Flight path — hidden on mobile, shown sm+ */}
      <div className="hidden sm:block relative max-w-[820px] mx-auto mt-14 h-[160px]">
        <svg viewBox="0 0 820 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M 40 148 Q 180 148 280 98 Q 440 32 600 58 Q 710 72 780 38"
            fill="none" stroke="#E87521" strokeWidth="2.2" strokeDasharray="7 5"/>
          <circle cx="40" cy="148" r="5.5" fill="#E87521"/>
        </svg>
        {labels.map(p => (
          <div key={p.t} className="absolute whitespace-nowrap text-[#2C1A0E]"
            style={{ left:p.x, top:p.y, transform:'translateY(-50%)',
              background:'white', border:'1px solid #E8DDD0',
              fontSize:'9.5px', fontWeight:700, letterSpacing:'0.1em',
              textTransform:'uppercase', padding:'4px 10px', borderRadius:100 }}>
            {p.t}
          </div>
        ))}
      </div>

      {/* Mobile: simple stat pills instead of flight path */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 sm:hidden">
        {['Curriculum-mapped', '1:8 Mentor ratio', '24/7 on-tour care', 'Delhi · BLR · MUM'].map(t => (
          <span key={t} className="text-[11px] font-semibold bg-white border border-[#E8DDD0] px-3 py-1.5 rounded-full text-[#6B4F3F]">{t}</span>
        ))}
      </div>

      <p className="text-[#6B4F3F] mx-auto mt-10 sm:mt-8 max-w-[560px]"
        style={{ fontSize:'clamp(13.5px,1.4vw,16px)', lineHeight:1.72 }}>
        We design every flight, every meal, every museum pass — so your teachers can do
        what they do best: teach. And your students can do what they were born to do:{' '}
        <em className="not-italic font-semibold" style={{ color:'#E87521' }}>wonder.</em>
      </p>
    </section>
  )
}

/* ── PASSPORT STAMPS ─────────────────────────────────── */
function StampsSection() {
  const stamps = [
    { city:'TOKYO',   country:'JAPAN',     date:'MAR 2025', rot:'-2.5deg' },
    { city:'PARIS',   country:'FRANCE',    date:'JUL 2025', rot:'1.8deg' },
    { city:'GENEVA',  country:'CERN · CH', date:'OCT 2025', rot:'-1.2deg' },
    { city:'ORLANDO', country:'NASA · US', date:'DEC 2025', rot:'2.3deg' },
    { city:'OXFORD',  country:'UK',        date:'APR 2026', rot:'-1.6deg' },
    { city:'DUBAI',   country:'UAE',       date:'FEB 2026', rot:'1.1deg' },
  ]
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-8" style={{ background:'#FAF7F2' }} id="tours">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-2" style={{ color:'#E87521' }}>Stamps on our passport</p>
            <h2 className="font-fraunces text-[#2C1A0E]"
              style={{ fontSize:'clamp(24px,3.8vw,44px)', lineHeight:1.12 }}>
              Every stamp is a <span style={{ color:'#E87521' }}>student</span>, changed.
            </h2>
          </div>
          <div className="flex gap-6 sm:gap-10">
            {[{n:'40+',l:'SCHOOLS'},{n:'12+',l:'COUNTRIES'},{n:'6,400',l:'STUDENTS'}].map(s=>(
              <div key={s.l} className="text-center">
                <div className="font-fraunces font-semibold" style={{ fontSize:'clamp(24px,3.5vw,48px)', color:'#E87521' }}>{s.n}</div>
                <div className="text-[9.5px] font-bold tracking-[0.18em] uppercase mt-1 text-[#9C8170]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {stamps.map(s => (
            <div key={s.city}
              style={{ transform:`rotate(${s.rot})`, borderStyle:'dashed', borderColor:'#E87521' }}
              className="bg-[#FDFAF5] border-2 rounded-xl p-4 sm:p-5 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-1.5 mb-2.5">
                <span style={{ color:'#E87521', fontSize:10 }}>✈</span>
                <span className="text-[8.5px] font-bold tracking-[0.18em] uppercase text-[#E87521]">MY TRAVEL BOX</span>
              </div>
              <div className="font-fraunces font-bold text-[#2C1A0E]"
                style={{ fontSize:'clamp(16px,2.5vw,28px)' }}>{s.city}</div>
              <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#6B4F3F] mt-0.5">{s.country}</div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-[9px] tracking-[0.1em] uppercase text-[#9C8170]">ENTRY</span>
                <span className="text-[9px] tracking-[0.08em] text-[#9C8170]">{s.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROGRAMS ────────────────────────────────────────── */
function ProgramsSection({ nav }: { nav:(p:string)=>void }) {
  const sub = [
    { grade:'GRADES 6–8',  name:'Discover by MTB', desc:'First international steps. Singapore, Dubai, UK heritage trails.', photo:P.discover },
    { grade:'GRADES 9–12', name:'STEM by MTB',     desc:'NASA Kennedy, CERN, JAXA and university lab residencies.',        photo:P.stem },
    { grade:'ALL GRADES',  name:'Culture by MTB',  desc:'Japan, France, Italy — language, art, food, history.',            photo:P.culture },
  ]
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-8" style={{ background:'#F5EFE6' }} id="programs">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color:'#E87521' }}>Our Programs</p>
          <h2 className="font-fraunces text-[#2C1A0E]"
            style={{ fontSize:'clamp(26px,4.2vw,52px)', lineHeight:1.1 }}>
            One box. <span style={{ color:'#E87521' }}>Many doors.</span>
          </h2>
          <p className="text-[#6B4F3F] mx-auto mt-3 max-w-[480px]"
            style={{ fontSize:'clamp(13.5px,1.3vw,15px)', lineHeight:1.7 }}>
            Curated, curriculum-led journeys built for the age, ambition and academic frame of your school.
          </p>
        </div>

        {/* Flagship */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative overflow-hidden" style={{ height:'clamp(200px,30vw,380px)' }}>
              <img src={P.flagship} alt="Global by MTB — open passport on dark desk"
                className="w-full h-full object-cover" loading="lazy"/>
              <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(44,26,14,0.45),transparent)' }}/>
              <span className="absolute top-4 left-4 bg-[#E87521] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full">
                Flagship
              </span>
            </div>
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color:'#E87521' }}>Global by MTB</p>
              <h3 className="font-fraunces text-[#2C1A0E] mb-4"
                style={{ fontSize:'clamp(20px,2.8vw,34px)', lineHeight:1.12 }}>
                The flagship programme for IB &amp; international schools.
              </h3>
              <p className="text-[#6B4F3F] mb-5" style={{ fontSize:14, lineHeight:1.72 }}>
                A 10–14 day curriculum-integrated journey across two countries — co-designed with your leadership,
                mapped to IB MYP/DP, CAS and IGCSE outcomes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {['Pre-tour curriculum kit','Daily parent broadcasts','Background-verified mentors','Post-tour outcome report'].map(f=>(
                  <div key={f} className="flex items-start gap-2 text-[13px] text-[#6B4F3F]">
                    <span style={{ color:'#E87521', marginTop:2 }}>✦</span>{f}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={()=>nav('/register')}
                  className="bg-[#E87521] text-white font-bold rounded-full hover:opacity-90 transition-opacity"
                  style={{ padding:'10px 24px', fontSize:13.5 }}>
                  Download brochure ↓
                </button>
                <button onClick={()=>nav('/register')}
                  className="border border-[#E8DDD0] text-[#2C1A0E] font-semibold rounded-full hover:border-[#E87521] transition-colors"
                  style={{ padding:'10px 24px', fontSize:13.5 }}>
                  Talk to a designer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sub.map(p => (
            <div key={p.name} onClick={()=>nav('/register')}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden" style={{ height:180 }}>
                <img src={p.photo} alt={p.name} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 55%)' }}/>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-[9px] font-bold tracking-[0.12em] uppercase opacity-75 mb-0.5">{p.grade}</div>
                  <div className="font-fraunces font-semibold" style={{ fontSize:19 }}>{p.name}</div>
                </div>
              </div>
              <div className="bg-white px-4 py-3.5">
                <p className="text-[#6B4F3F]" style={{ fontSize:13, lineHeight:1.55 }}>{p.desc}</p>
                <span className="font-semibold mt-2 inline-block group-hover:translate-x-1 transition-transform"
                  style={{ color:'#E87521', fontSize:13 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── JOURNEY ─────────────────────────────────────────── */
function JourneySection() {
  const steps = [
    { n:'01', label:'Dream',   sub:'A spark at the window.',     photo:P.j1 },
    { n:'02', label:'Plan',    sub:'Mapped to your curriculum.', photo:P.j2 },
    { n:'03', label:'Explore', sub:'The world, walked in.',      photo:P.j3 },
    { n:'04', label:'Learn',   sub:'Hands-on, mind-open.',       photo:P.j4 },
    { n:'05', label:'Reflect', sub:'Pages of perspective.',      photo:P.j5 },
    { n:'06', label:'Grow',    sub:'Ready for the world.',       photo:P.j6 },
  ]
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-2" style={{ color:'#E87521' }}>Tours in Motion</p>
            <h2 className="font-fraunces text-[#2C1A0E]"
              style={{ fontSize:'clamp(22px,3.6vw,44px)', lineHeight:1.12 }}>
              Six chapters. One <span style={{ color:'#E87521' }}>becoming</span>.
            </h2>
          </div>
          <p className="text-[#6B4F3F] max-w-[340px] md:text-right"
            style={{ fontSize:'clamp(13.5px,1.3vw,15.5px)', lineHeight:1.7 }}>
            From the first map on the bedroom wall to the moment they walk taller into a board interview.
          </p>
        </div>

        {/* 3-col on mobile, 6-col on sm+ */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center group">
              <div className="relative mb-2.5 sm:mb-3">
                <div className="rounded-full overflow-hidden border-[3px] border-white shadow-md group-hover:shadow-xl transition-shadow"
                  style={{ width:'clamp(72px,10vw,110px)', height:'clamp(72px,10vw,110px)' }}>
                  <img src={s.photo} alt={s.label} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                <div style={{ background:'#2C1A0E', width:26, height:26, fontSize:10 }}
                  className="absolute -top-1 -right-1 rounded-full text-white font-bold flex items-center justify-center shadow">
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-3 h-px border-t border-dashed border-[#E8DDD0] hidden sm:block -translate-y-1/2"/>
                )}
              </div>
              <div className="font-fraunces font-semibold text-[#2C1A0E]"
                style={{ fontSize:'clamp(12px,1.2vw,16px)' }}>{s.label}</div>
              <div className="text-[#9C8170] mt-0.5 leading-[1.4]"
                style={{ fontSize:'clamp(10px,0.85vw,12px)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA ─────────────────────────────────────────────── */
function CTASection({ nav }: { nav:(p:string)=>void }) {
  return (
    <section className="py-10 sm:py-14 px-5 sm:px-8" style={{ background:'#FAF7F2' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden flex items-center" style={{ minHeight:340 }}>
          <img src={P.cta} alt="Teacher and students planning a tour at world map"
            className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy"/>
          <div className="absolute inset-0" style={{
            background:'linear-gradient(100deg,rgba(28,12,2,0.84) 0%,rgba(60,25,5,0.70) 50%,rgba(100,50,10,0.32) 100%)'
          }}/>
          <div className="relative z-10 p-7 sm:p-14 max-w-[520px]">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color:'rgba(232,117,33,0.9)' }}>
              Start the conversation
            </p>
            <h2 className="font-fraunces text-white"
              style={{ fontSize:'clamp(22px,3.6vw,44px)', lineHeight:1.12 }}>
              Let's design the journey your students deserve.
            </h2>
            <p className="text-white/72 mt-4" style={{ fontSize:'clamp(13px,1.3vw,15px)', lineHeight:1.72 }}>
              Tell us about your school and curriculum goals — we'll craft a proposal within 5 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8">
              <button onClick={()=>nav('/register')}
                className="bg-white font-bold rounded-full hover:bg-[#E87521] hover:text-white transition-all text-[#2C1A0E]"
                style={{ padding:'11px 26px', fontSize:13.5 }}>
                Request a proposal
              </button>
              <button onClick={()=>nav('/login')}
                className="border border-white/35 text-white font-semibold rounded-full hover:bg-white/12 transition-all"
                style={{ padding:'11px 26px', fontSize:13.5 }}>
                Speak to our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ──────────────────────────────────────────── */
function PageFooter({ nav }: { nav:(p:string)=>void }) {
  return (
    <footer className="border-t py-8 sm:py-10 px-5 sm:px-8" style={{ background:'#FAF7F2', borderColor:'#E8DDD0' }}>
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <button onClick={()=>nav('/')}
          className="font-semibold hover:opacity-70 transition-opacity"
          style={{ fontFamily:'Georgia,serif', fontSize:15, color:'#2C1A0E' }}>
          My <span style={{ color:'#E87521' }}>Travel</span> Box
        </button>
        <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
          {['About MTB','Programs','Parent Portal','Privacy','Contact'].map(l=>(
            <button key={l} className="hover:text-[#E87521] transition-colors"
              style={{ fontSize:12.5, color:'#9C8170' }}>{l}</button>
          ))}
        </div>
        <p style={{ fontSize:11.5, color:'#9C8170' }}>© 2025 MyTravelBox Private Limited</p>
      </div>
    </footer>
  )
}
