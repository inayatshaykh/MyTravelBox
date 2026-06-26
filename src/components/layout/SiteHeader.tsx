import { useNavigate } from 'react-router-dom'
import Button from '../ui/Button'

export default function SiteHeader() {
  const navigate = useNavigate()

  return (
    <header
      className="sticky top-0 z-40 border-b border-line"
      style={{ background: 'rgba(250,247,242,0.92)', backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0"
          onClick={() => navigate('/')}
          role="link"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/')}
          aria-label="MyTravelBox home"
        >
          <span className="font-fraunces font-semibold text-ink text-[16px] sm:text-[17px]">
            My<span className="text-amber">Travel</span>Box
          </span>
          <span className="hidden sm:inline text-[10px] font-bold tracking-[0.13em] text-ink-faint uppercase pl-3 border-l border-line whitespace-nowrap">
            Learn. Explore. Grow.
          </span>
        </div>

        {/* Nav — hidden below lg */}
        <nav className="hidden lg:flex gap-6 items-center" aria-label="Main navigation">
          {['School Programs', 'Destinations', 'Safety & Risk', 'About Us', 'Testimonials'].map(item => (
            <a
              key={item}
              href="#"
              className="text-[13px] font-medium text-ink-soft hover:text-ink transition-colors duration-150 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Button
            variant="ghost"
            onClick={() => navigate('/onboarding')}
            className="text-[12.5px] sm:text-[13.5px] py-2 sm:py-[11px] px-3 sm:px-[18px]"
            aria-label="School Login"
          >
            Login
          </Button>
          <Button
            variant="primary"
            onClick={() => navigate('/register')}
            className="text-[12.5px] sm:text-[13.5px] py-2 sm:py-[11px] px-3 sm:px-5"
            aria-label="Request Proposal"
          >
            <span className="hidden sm:inline">Request </span>Proposal
          </Button>
        </div>
      </div>
    </header>
  )
}
