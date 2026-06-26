import { flightInfo } from '../../data/mockData'

export default function BoardingPass() {
  return (
    <div className="relative bg-ink text-paper rounded-[18px] shadow overflow-hidden" aria-label="Boarding pass">
      {/* Top */}
      <div className="px-[22px] pt-[22px] pb-[18px] flex justify-between items-start">
        <div>
          <p className="text-[10.5px] font-bold tracking-[0.08em] uppercase text-paper/55">Boarding Pass</p>
          <div className="flex items-center gap-2.5 mt-3">
            <div>
              <div className="font-fraunces text-[21px] font-semibold">{flightInfo.from}</div>
              <div className="text-[10.5px] tracking-[0.08em] text-paper/55 uppercase mt-0.5">{flightInfo.fromCity}</div>
            </div>
            <div className="w-7 flex items-center justify-center opacity-75" aria-hidden="true">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px]" style={{ transform: 'rotate(90deg)' }}>
                <path d="M11 2.5C11 2.5 3.5 9 3.5 14C3.5 17 7 19.5 11 19.5C15 19.5 18.5 17 18.5 14C18.5 9 11 2.5 11 2.5Z" fill="rgba(250,247,242,0.6)" />
                <path d="M5 14.5L11 11L17 14.5" stroke="rgba(250,247,242,0.4)" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <div className="font-fraunces text-[21px] font-semibold">{flightInfo.to}</div>
              <div className="text-[10.5px] tracking-[0.08em] text-paper/55 uppercase mt-0.5">{flightInfo.toCity}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Student */}
      <p className="text-[12.5px] text-paper/70 px-[22px]">
        <strong className="text-paper font-semibold">Arjun Sharma</strong> · Yadavindra Public School
      </p>

      {/* Countdown */}
      <div className="flex items-baseline gap-2 px-[22px] mt-3.5">
        <span className="font-fraunces text-[38px] font-semibold leading-none text-amber">42</span>
        <span className="text-[12.5px] text-paper/65 pb-1">days to departure</span>
      </div>

      {/* Perforation */}
      <div className="perforation" aria-hidden="true" />

      {/* Bottom stub */}
      <div className="px-[22px] py-4 grid grid-cols-3 gap-1">
        <div>
          <div className="text-[9.5px] tracking-[0.08em] uppercase text-paper/50 mb-[5px]">Flight</div>
          <div className="text-[13.5px] font-semibold text-[#F2BC7B]">AI-306</div>
        </div>
        <div>
          <div className="text-[9.5px] tracking-[0.08em] uppercase text-paper/50 mb-[5px]">Visa</div>
          <div className="text-[13.5px] font-semibold text-[#F2A38C]">Pending</div>
        </div>
        <div>
          <div className="text-[9.5px] tracking-[0.08em] uppercase text-paper/50 mb-[5px]">Hotel</div>
          <div className="text-[13.5px] font-semibold text-[#8FD4A8]">✓</div>
        </div>
      </div>
    </div>
  )
}
