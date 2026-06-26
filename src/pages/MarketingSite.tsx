import { useNavigate } from 'react-router-dom'
import SiteHeader from '../components/layout/SiteHeader'

// ─── Unsplash photo URLs (free, no attribution needed for UI) ───────────────
const PHOTOS = {
  // Hero: Indian school girl at classroom window looking dreamily outward
  hero: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1800&q=85&fit=crop&crop=center',
  // Flagship program card: passport / travel documents on dark desk
  flagship: 'https://images.unsplash.com/photo-1473496169904-658ba7574b0d?w=900&q=80&fit=crop',
  // Discover: students at Eiffel Tower
  discover: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=700&q=80&fit=crop',
  // STEM: rocket / NASA launch site
  stem: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=700&q=80&fit=crop',
  // Culture: Japan temple / students
  culture: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80&fit=crop',
  // CTA background: teacher pointing at world map with students
  cta: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=1400&q=80&fit=crop',
  // Journey circles
  j1: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=75&fit=crop', // dream - mountain sunrise
  j2: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&q=75&fit=crop', // plan - books map
  j3: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=200&q=75&fit=crop', // explore - eiffel
  j4: 'https://images.unsplash.com/photo-1532094349884-543559822dc5?w=200&q=75&fit=crop', // learn - science
  j5: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=200&q=75&fit=crop', // reflect - writing
  j6: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&q=75&fit=crop', // grow - graduation
}

export default function MarketingSite() {
  const navigate = useNavigate()
  return (
    <div style={{ background: '#FAF7F2', color: '#2C1A0E', fontFamily: "'Inter',sans-serif" }}>
      <SiteHeader />
      <Hero navigate={navigate} />
      <Runway />
      <StampsSection />
      <Programs navigate={navigate} />
      <Journey />
      <CTA navigate={navigate} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}

/* ════════════════════════════════════════════════════════
   HERO — real photo: student at classroom window
════════════════════════════════════════════════════════ */
function Hero({ navigate }: { navigate: (p:string)=>void }) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" id="about">
      {/* Background photo */}
      <img
        src={PHOTOS.hero}
        alt="School student looking out a classroom window dreaming of the world"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.68) saturate(1.15)' }}
      />
      {/* warm left-to-right overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(100deg,rgba(44,12,2,0.82) 0%,rgba(90,40,10,0.62) 45%,rgba(200,130,50,0.18) 100%)' }} />
      {/* bottom gradient */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(to top,rgba(30,8,0,0.35) 0%,transparent 35%)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-8 py-24 sm:py-32 w-full">
        {/* pill badge */}
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20
          text-white/88 text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-8">
          For IB &amp; India's Premium Schools
        </div>

        {/* Headline */}
        <h1 style={{ fontSize:'clamp(38px,5.8vw,70px)', lineHeight:1.05, letterSpacing:'-0.02em',
          textShadow:'0 2px 24px rgba(0,0,0,0.35)', maxWidth:620 }}
          className="font-fraunces text-white">
          The walls of a<br/>classroom<br/>
          can hold{' '}
          <em className="not-italic" style={{ color:'#E87521', textShadow:'0 0 40px rgba(232,117,33,0.5)' }}>
            a whole world.
          </em>
        </h1>

        {/* Body */}
        <p style={{ fontSize:'clamp(13.5px,1.4vw,16.5px)', maxWidth:440, lineHeight:1.72,
          textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}
          className="text-white/82 mt-6 font-light">
          Every great journey begins with a student staring out of a window.
          My Travel Box turns that quiet curiosity into curriculum-led
          international travel for India's finest schools.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <button onClick={() => navigate('/register')}
            className="bg-[#E87521] hover:opacity-90 text-white font-bold px-8 py-3.5 rounded-full text-[14px] transition-opacity w-fit shadow-lg">
            Begin the journey →
          </button>
          <button onClick={() => document.querySelector('#programs')?.scrollIntoView({ behavior:'smooth' })}
            className="bg-white/12 hover:bg-white/22 backdrop-blur-sm border border-white/30
              text-white font-semibold px-8 py-3.5 rounded-full text-[14px] transition-all w-fit">
            See programs
          </button>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none">
          <span className="text-[8.5px] font-bold tracking-[0.24em] text-white/40 uppercase">Scroll · The World Opens</span>
          <div className="w-px h-7 bg-white/18"/>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   RUNWAY — editorial big type + animated flight path
════════════════════════════════════════════════════════ */
function Runway() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 text-center" style={{ background:'#FAF7F2' }}>
      <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color:'#E87521' }}>And then, one day —</p>
      <h2 style={{ fontSize:'clamp(30px,5.2vw,62px)', lineHeight:1.1, letterSpacing:'-0.02em', maxWidth:700 }}
        className="font-fraunces mx-auto text-[#2C1A0E]">
        the desk becomes a <span style={{ color:'#E87521' }}>runway</span>,<br/>
        and the textbook, a <span style={{ color:'#E87521' }}>boarding pass</span>.
      </h2>

      {/* Animated SVG flight path */}
      <div className="relative max-w-[820px] mx-auto mt-16 h-[170px] hidden sm:block">
        <svg viewBox="0 0 820 170" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M 40 148 Q 180 148 280 98 Q 440 32 600 58 Q 710 72 780 38"
            fill="none" stroke="#E87521" strokeWidth="2.2" strokeDasharray="7 5"/>
          <circle cx="40" cy="148" r="5.5" fill="#E87521"/>
          <text x="800" y="32" fontSize="18" textAnchor="middle" fill="#E87521">✈</text>
        </svg>
        {[
          { x:'3%',  y:'82%', t:'DELHI · BLR · MUM' },
          { x:'32%', y:'55%', t:'CURRICULUM-MAPPED' },
          { x:'54%', y:'20%', t:'1:8 MENTOR RATIO' },
          { x:'74%', y:'32%', t:'24/7 ON-TOUR CARE' },
          { x:'90%', y:'18%', t:'THE WORLD ✈' },
        ].map(p => (
          <div key={p.t}
            className="absolute text-[9.5px] font-bold tracking-[0.1em] uppercase whitespace-nowrap
              bg-white border border-[#E8DDD0] px-2.5 py-1 rounded-full shadow-sm text-[#2C1A0E]"
            style={{ left:p.x, top:p.y, transform:'translateY(-50%)' }}>
            {p.t}
          </div>
        ))}
      </div>

      <p style={{ fontSize:'clamp(14px,1.4vw,16.5px)', maxWidth:580, lineHeight:1.72 }}
        className="text-[#6B4F3F] mx-auto mt-14 sm:mt-8">
        We design every flight, every meal, every museum pass — so your teachers can do
        what they do best: teach. And your students can do what they were born to do:{' '}
        <em className="not-italic font-semibold" style={{ color:'#E87521' }}>wonder.</em>
      </p>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   PASSPORT STAMPS — stats + rotated stamp cards
════════════════════════════════════════════════════════ */
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
    <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background:'#FAF7F2' }} id="tours">
      <div className="max-w-[1180px] mx-auto">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color:'#E87521' }}>
              Stamps on our passport
            </p>
            <h2 style={{ fontSize:'clamp(26px,3.8vw,46px)', lineHeight:1.12 }}
              className="font-fraunces text-[#2C1A0E]">
              Every stamp is a{' '}
              <span style={{ color:'#E87521' }}>student</span>, changed.
            </h2>
          </div>
          <div className="flex gap-8 md:justify-end">
            {[{n:'40+',l:'SCHOOLS'},{n:'12+',l:'COUNTRIES'},{n:'6,400',l:'STUDENTS'}].map(s=>(
              <div key={s.l} className="text-center">
                <div style={{ fontSize:'clamp(26px,3.8vw,50px)', color:'#E87521' }} className="font-fraunces font-semibold">{s.n}</div>
                <div className="text-[9.5px] font-bold tracking-[0.18em] uppercase mt-1 text-[#9C8170]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stamp cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-7">
          {stamps.map(s=>(
            <div key={s.city}
              style={{ transform:`rotate(${s.rot})`, borderStyle:'dashed' }}
              className="bg-[#FDFAF5] border-2 border-[#E87521] rounded-xl p-4 sm:p-6
                hover:shadow-xl hover:-translate-y-1 transition-all cursor-default">
              <div className="flex items-center gap-1.5 mb-3">
                <span style={{ color:'#E87521', fontSize:11 }}>✈</span>
                <span className="text-[8.5px] font-bold tracking-[0.18em] uppercase text-[#E87521]">MY TRAVEL BOX</span>
              </div>
              <div style={{ fontSize:'clamp(18px,2.8vw,30px)' }} className="font-fraunces font-bold text-[#2C1A0E] mb-1">{s.city}</div>
              <div className="text-[10px] font-semibold tracking-[0.1em] text-[#6B4F3F] uppercase">{s.country}</div>
              <div className="flex justify-between items-end mt-5">
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

/* ════════════════════════════════════════════════════════
   PROGRAMS — flagship card with real photo + 3 sub cards
════════════════════════════════════════════════════════ */
function Programs({ navigate }: { navigate: (p:string)=>void }) {
  const subCards = [
    { grade:'GRADES 6–8',  name:'Discover by MTB', desc:'First international steps. Singapore, Dubai, UK heritage trails.', photo:PHOTOS.discover },
    { grade:'GRADES 9–12', name:'STEM by MTB',     desc:'NASA Kennedy, CERN, JAXA and university lab residencies.',        photo:PHOTOS.stem },
    { grade:'ALL GRADES',  name:'Culture by MTB',  desc:'Japan, France, Italy — language, art, food, history.',            photo:PHOTOS.culture },
  ]
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background:'#F5EFE6' }} id="programs">
      <div className="max-w-[1180px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color:'#E87521' }}>Our Programs</p>
          <h2 style={{ fontSize:'clamp(28px,4.4vw,54px)', lineHeight:1.1 }} className="font-fraunces text-[#2C1A0E]">
            One box. <span style={{ color:'#E87521' }}>Many doors.</span>
          </h2>
          <p style={{ fontSize:15, maxWidth:500, lineHeight:1.68 }} className="text-[#6B4F3F] mx-auto mt-4">
            Curated, curriculum-led journeys built for the age, ambition and academic frame of your school.
          </p>
        </div>

        {/* Flagship card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Photo side */}
            <div className="relative h-[260px] md:h-[380px] overflow-hidden">
              <img src={PHOTOS.flagship} alt="Global by MTB programme passport"
                className="w-full h-full object-cover"/>
              <div className="absolute inset-0" style={{ background:'linear-gradient(135deg,rgba(44,26,14,0.45),transparent)' }}/>
              <span className="absolute top-4 left-4 bg-[#E87521] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow">
                Flagship
              </span>
            </div>
            {/* Copy side */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color:'#E87521' }}>Global by MTB</p>
              <h3 style={{ fontSize:'clamp(20px,2.8vw,34px)', lineHeight:1.12 }} className="font-fraunces text-[#2C1A0E] mb-4">
                The flagship programme for IB &amp; international schools.
              </h3>
              <p style={{ fontSize:14, lineHeight:1.72 }} className="text-[#6B4F3F] mb-5">
                A 10–14 day curriculum-integrated journey across two countries — co-designed with your leadership,
                mapped to IB MYP/DP, CAS and IGCSE outcomes. From the foothills of Mt Fuji to the labs of CERN.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {['Pre-tour curriculum kit','Daily parent broadcasts','Background-verified mentors','Post-tour outcome report'].map(f=>(
                  <div key={f} className="flex items-start gap-2 text-[13px] text-[#6B4F3F]">
                    <span style={{ color:'#E87521', marginTop:2 }}>✦</span>{f}
                  </div>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <button onClick={()=>navigate('/register')}
                  className="bg-[#E87521] text-white font-bold text-[13.5px] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                  Download brochure ↓
                </button>
                <button onClick={()=>navigate('/register')}
                  className="border border-[#E8DDD0] text-[#2C1A0E] font-semibold text-[13.5px] px-6 py-2.5 rounded-full hover:border-[#E87521] transition-colors">
                  Talk to a designer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-program photo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subCards.map(p=>(
            <div key={p.name} onClick={()=>navigate('/register')}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative h-[200px] overflow-hidden">
                <img src={p.photo} alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0" style={{ background:'linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 55%)' }}/>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-[9px] font-bold tracking-[0.12em] uppercase opacity-75 mb-0.5">{p.grade}</div>
                  <div className="font-fraunces text-[19px] font-semibold">{p.name}</div>
                </div>
              </div>
              <div className="bg-white px-4 py-3.5">
                <p style={{ fontSize:13, lineHeight:1.55 }} className="text-[#6B4F3F]">{p.desc}</p>
                <span style={{ color:'#E87521', fontSize:13 }} className="font-semibold mt-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   JOURNEY — 6 steps with circular photos
════════════════════════════════════════════════════════ */
function Journey() {
  const steps = [
    { n:'01', label:'Dream',   sub:'A spark at the window.',     photo:PHOTOS.j1 },
    { n:'02', label:'Plan',    sub:'Mapped to your curriculum.', photo:PHOTOS.j2 },
    { n:'03', label:'Explore', sub:'The world, walked in.',      photo:PHOTOS.j3 },
    { n:'04', label:'Learn',   sub:'Hands-on, mind-open.',       photo:PHOTOS.j4 },
    { n:'05', label:'Reflect', sub:'Pages of perspective.',      photo:PHOTOS.j5 },
    { n:'06', label:'Grow',    sub:'Ready for the world.',       photo:PHOTOS.j6 },
  ]
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end mb-14">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color:'#E87521' }}>Tours in Motion</p>
            <h2 style={{ fontSize:'clamp(24px,3.8vw,46px)', lineHeight:1.12 }} className="font-fraunces text-[#2C1A0E]">
              Six chapters. One <span style={{ color:'#E87521' }}>becoming</span>.
            </h2>
          </div>
          <p style={{ fontSize:15, lineHeight:1.7 }} className="text-[#6B4F3F] md:text-right">
            From the first map on the bedroom wall to the moment they walk taller into a board interview.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center group">
              {/* Photo circle */}
              <div className="relative mb-3">
                <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden
                  border-[3px] border-white shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={s.photo} alt={s.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                </div>
                {/* Number badge */}
                <div style={{ background:'#2C1A0E' }}
                  className="absolute -top-1 -right-1 w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center shadow">
                  {s.n}
                </div>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-3 sm:w-4 h-px border-t border-dashed border-[#E8DDD0] hidden sm:block -translate-y-1/2"/>
                )}
              </div>
              <div style={{ fontSize:'clamp(13px,1.3vw,16px)' }} className="font-fraunces font-semibold text-[#2C1A0E]">{s.label}</div>
              <div style={{ fontSize:11, lineHeight:1.4 }} className="text-[#9C8170] mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   CTA — real photo background with teacher + world map
════════════════════════════════════════════════════════ */
function CTA({ navigate }: { navigate: (p:string)=>void }) {
  return (
    <section className="py-10 sm:py-14 px-5 sm:px-8" style={{ background:'#FAF7F2' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[360px] flex items-center">
          {/* Background photo */}
          <img src={PHOTOS.cta} alt="Teacher and students planning tour with world map"
            className="absolute inset-0 w-full h-full object-cover object-center"/>
          {/* Dark overlay */}
          <div className="absolute inset-0"
            style={{ background:'linear-gradient(100deg,rgba(28,12,2,0.82) 0%,rgba(60,25,5,0.70) 50%,rgba(100,50,10,0.35) 100%)' }}/>

          <div className="relative z-10 p-8 sm:p-14 max-w-[560px]">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-4" style={{ color:'rgba(232,117,33,0.9)' }}>
              Start the conversation
            </p>
            <h2 style={{ fontSize:'clamp(24px,3.8vw,46px)', lineHeight:1.12 }}
              className="font-fraunces text-white">
              Let's design the journey your students deserve.
            </h2>
            <p style={{ fontSize:'clamp(13.5px,1.3vw,15.5px)', lineHeight:1.7 }} className="text-white/72 mt-4">
              Tell us about your school and curriculum goals — we'll craft a proposal within 5 working days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button onClick={()=>navigate('/register')}
                className="bg-white font-bold text-[13.5px] px-7 py-3 rounded-full
                  hover:bg-[#E87521] hover:text-white transition-all text-[#2C1A0E]">
                Request a proposal
              </button>
              <button onClick={()=>navigate('/login')}
                className="border border-white/35 text-white font-semibold text-[13.5px] px-7 py-3 rounded-full hover:bg-white/12 transition-all">
                Speak to our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════════════════ */
function SiteFooter({ navigate }: { navigate: (p:string)=>void }) {
  return (
    <footer className="border-t py-10 px-5 sm:px-8" style={{ background:'#FAF7F2', borderColor:'#E8DDD0' }}>
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <button onClick={()=>navigate('/')} style={{ fontFamily:'Georgia,serif', fontSize:15, color:'#2C1A0E' }}
          className="hover:opacity-70 transition-opacity font-semibold">
          My <span style={{ color:'#E87521' }}>Travel</span> Box
        </button>
        <div className="flex flex-wrap justify-center gap-6">
          {['About MTB','Programs','Parent Portal','Privacy','Contact'].map(l=>(
            <button key={l} style={{ fontSize:12.5, color:'#9C8170' }}
              className="hover:text-[#E87521] transition-colors">{l}</button>
          ))}
        </div>
        <p style={{ fontSize:11.5, color:'#9C8170' }}>© 2025 MyTravelBox Private Limited</p>
      </div>
    </footer>
  )
}
