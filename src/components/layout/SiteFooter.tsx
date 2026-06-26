export default function SiteFooter() {
  return (
    <footer className="border-t border-line px-4 sm:px-6 md:px-8 pt-8 sm:pt-11 pb-6 sm:pb-8">
      <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[12px] sm:text-[12.5px] text-ink-faint text-center sm:text-left">
          © 2025 MyTravelBox Private Limited. All rights reserved.
        </p>
        <nav className="flex gap-5 sm:gap-[26px]" aria-label="Footer navigation">
          {['Privacy Policy', 'Terms of Use', 'Contact'].map(link => (
            <a
              key={link}
              href="#"
              className="text-[12px] sm:text-[12.5px] text-ink-soft hover:text-ink transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
