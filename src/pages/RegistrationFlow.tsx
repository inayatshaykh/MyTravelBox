import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

type Step = 1 | 2 | 3 | 4

function StepDots({ current }: { current: Step }) {
  return (
    <div
      className="flex gap-1.5 mb-5"
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={1}
      aria-valuemax={4}
      aria-label={`Step ${current} of 4`}
    >
      {[1, 2, 3, 4].map(n => (
        <div key={n} className={`h-1 flex-1 rounded-full ${n <= current ? 'bg-amber' : 'bg-line'}`} />
      ))}
    </div>
  )
}

/* shared input style */
const inputCls =
  'w-full px-3.5 py-3 sm:py-[13px] border-[1.5px] border-line rounded-[10px] text-[14px] bg-paper focus:outline-none focus:border-amber transition-colors'

export default function RegistrationFlow() {
  const [step, setStep] = useState<Step>(1)
  const [tourId, setTourId] = useState('')
  const [otp, setOtp] = useState(['', '', '', ''])
  const [gender, setGender] = useState('male')
  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]
  const navigate = useNavigate()

  function handleOtpChange(index: number, value: string) {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[index] = digit
    setOtp(next)
    if (digit && index < 3) otpRefs[index + 1].current?.focus()
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-paper flex flex-col">

      {/* ── Top bar ── */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 sm:py-[22px] border-b border-line">
        <button
          onClick={() => navigate('/')}
          className="font-fraunces font-semibold text-ink text-[16px] sm:text-[17px] hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-amber focus-visible:outline-none rounded"
          aria-label="Go to MyTravelBox home"
        >
          My<span className="text-amber">Travel</span>Box
        </button>
        <span className="text-[12px] font-semibold text-ink-faint">Step {step} of 4</span>
      </div>

      {/* ── Step stage ── */}
      <div className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 py-8 sm:pb-[60px]">

        {/* ── Step 1 ── */}
        {step === 1 && (
          <div className="bg-paper-raised border border-line rounded-[20px] p-6 sm:p-9 max-w-[440px] w-full shadow" aria-labelledby="s1-title">
            <StepDots current={1} />
            <p className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-amber-deep">Student Registration</p>
            <h2 id="s1-title" className="text-[22px] sm:text-[24px] font-semibold mt-2 tracking-[-0.01em]">Find your tour</h2>
            <p className="text-[13px] sm:text-[13.5px] text-ink-soft mt-2.5 leading-[1.55]">
              Enter the Tour ID shared by your school coordinator to get started.
            </p>
            <div className="mt-5">
              <label htmlFor="tour-id" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">Tour ID</label>
              <input
                id="tour-id"
                type="text"
                value={tourId}
                onChange={e => setTourId(e.target.value)}
                placeholder="e.g. MTB-YPS-2025-001"
                className={inputCls}
                aria-describedby="tour-id-hint"
              />
              <p id="tour-id-hint" className="text-[11.5px] text-ink-faint mt-2.5 leading-[1.5]">
                Your Tour ID was shared by your school coordinator
              </p>
            </div>
            <Button variant="primary" fullWidth className="mt-5 py-3 sm:py-[13px]" onClick={() => setStep(2)}>
              Find My Tour
            </Button>
          </div>
        )}

        {/* ── Step 2 ── */}
        {step === 2 && (
          <div className="bg-paper-raised border border-line rounded-[20px] p-6 sm:p-9 max-w-[440px] w-full shadow" aria-labelledby="s2-title">
            <StepDots current={2} />
            <p className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-amber-deep">Identity Verification</p>
            <h2 id="s2-title" className="text-[22px] sm:text-[24px] font-semibold mt-2 tracking-[-0.01em]">We found you!</h2>
            <p className="text-[13px] sm:text-[13.5px] text-ink-soft mt-2.5 leading-[1.55]">
              Confirm your identity with the OTP sent to your registered mobile.
            </p>

            {/* Found card */}
            <div className="flex gap-3 sm:gap-3.5 items-center bg-paper border border-line rounded-[14px] p-3.5 sm:p-4 mt-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-amber-soft text-amber-deep font-fraunces font-semibold text-[16px] sm:text-[17px] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                AS
              </div>
              <div>
                <div className="font-bold text-[14.5px] sm:text-[15px]">Arjun Sharma</div>
                <div className="text-[12px] sm:text-[12.5px] text-ink-soft mt-0.5">Class XI-A · Yadavindra Public School</div>
                <div className="text-[11px] sm:text-[11.5px] text-ink-faint mt-1">Japan Educational Tour 2025</div>
              </div>
            </div>

            {/* OTP boxes */}
            <div className="flex gap-2.5 sm:gap-3 mt-5" role="group" aria-label="Enter 4-digit OTP">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={otpRefs[i]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleOtpChange(i, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(i, e)}
                  className="otp-box"
                  aria-label={`OTP digit ${i + 1}`}
                />
              ))}
            </div>
            <p className="text-[11.5px] text-ink-faint mt-3 leading-[1.5]">
              Didn't receive OTP?{' '}
              <button className="text-amber-deep font-semibold hover:underline focus-visible:outline-none">
                Resend OTP
              </button>
            </p>

            <Button variant="primary" fullWidth className="mt-5 py-3 sm:py-[13px]" onClick={() => setStep(3)}>
              Verify OTP
            </Button>
            <button className="w-full text-center text-[12.5px] text-ink-faint mt-3 hover:text-ink transition-colors py-1" onClick={() => setStep(1)}>
              ← Back
            </button>
          </div>
        )}

        {/* ── Step 3 ── */}
        {step === 3 && (
          <div className="bg-paper-raised border border-line rounded-[20px] p-6 sm:p-9 max-w-[440px] w-full shadow" aria-labelledby="s3-title">
            <StepDots current={3} />
            <p className="text-[11.5px] sm:text-[12px] font-bold tracking-[0.1em] uppercase text-amber-deep">Student Details</p>
            <h2 id="s3-title" className="text-[22px] sm:text-[24px] font-semibold mt-2 tracking-[-0.01em]">Complete your profile</h2>
            <p className="text-[13px] sm:text-[13.5px] text-ink-soft mt-2.5 leading-[1.55]">
              Fill in the details below to complete your registration.
            </p>

            <form className="flex flex-col gap-3 sm:gap-3.5 mt-5" onSubmit={e => { e.preventDefault(); setStep(4) }}>
              {[
                { id: 'full-name', label: 'Student Full Name',      type: 'text',  defaultValue: 'Arjun Sharma' },
                { id: 'dob',       label: 'Date of Birth',          type: 'date' },
                { id: 'grade',     label: 'Grade / Section',         type: 'text',  defaultValue: 'XI-A' },
                { id: 'ec-name',   label: 'Emergency Contact Name', type: 'text',  placeholder: 'Parent / Guardian name' },
                { id: 'ec-phone',  label: 'Emergency Contact Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">{field.label}</label>
                  <input id={field.id} type={field.type} defaultValue={field.defaultValue} placeholder={field.placeholder} className={inputCls} />
                </div>
              ))}

              {/* Gender select */}
              <div>
                <label htmlFor="gender" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">Gender</label>
                <select id="gender" value={gender} onChange={e => setGender(e.target.value)} className={inputCls}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Medical */}
              <div>
                <label htmlFor="medical" className="block text-[11.5px] font-semibold text-ink-soft mb-1.5">
                  Medical Notes <span className="text-ink-faint font-normal">(optional)</span>
                </label>
                <textarea
                  id="medical"
                  rows={3}
                  placeholder="Allergies, medications, special needs..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              <p className="text-[11.5px] text-ink-faint leading-[1.5]">
                🔒 Your data is encrypted and shared only with your school and tour operator.
              </p>

              <Button type="submit" variant="primary" fullWidth className="py-3 sm:py-[13px]">
                Continue to Payment
              </Button>
              <button type="button" className="text-center text-[12.5px] text-ink-faint hover:text-ink transition-colors py-1" onClick={() => setStep(2)}>
                ← Back
              </button>
            </form>
          </div>
        )}

        {/* ── Step 4: Success ── */}
        {step === 4 && (
          <div className="bg-paper-raised border border-line rounded-[20px] p-6 sm:p-9 max-w-[440px] w-full shadow text-center" aria-labelledby="s4-title">
            <StepDots current={4} />
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sage-soft flex items-center justify-center mx-auto mb-4 sm:mb-5">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
                <path d="M6 16l7 7 13-13" stroke="#5B8A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 id="s4-title" className="text-[22px] sm:text-[24px] font-semibold">You're registered!</h2>
            <p className="text-[13px] sm:text-[13.5px] text-ink-soft mt-2.5 leading-[1.55]">
              Registration complete for <strong>Japan Educational Tour 2025</strong>.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {[
                { title: 'Payment',   sub: '₹18,500 due',         cta: 'Pay Now' },
                { title: 'Documents', sub: '3 of 7 uploaded', cta: 'Upload' },
              ].map(item => (
                <div key={item.title} className="flex items-center justify-between bg-paper border border-line rounded-xl px-4 py-3">
                  <div className="text-left">
                    <div className="text-[13.5px] font-semibold">{item.title}</div>
                    <div className="text-[11.5px] sm:text-[12px] text-ink-soft mt-0.5">{item.sub}</div>
                  </div>
                  <button className="text-[12.5px] font-bold text-amber-deep hover:underline focus-visible:outline-none flex-shrink-0 ml-3">
                    {item.cta} →
                  </button>
                </div>
              ))}
            </div>

            <Button variant="dark" fullWidth className="mt-5 py-3 sm:py-[13px]" onClick={() => navigate('/dashboard')}>
              Go to My Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
