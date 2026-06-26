/**
 * MTBLogo — matches the real MyTravelBox brand identity:
 *  • 3-D open box outline with M/T/B letters in orange
 *  • ® mark top-left
 *  • "My" orange italic + "Travel" dark/white italic + "Box.in" orange
 *  • "Surprising You Everyday" tagline
 *
 * Props:
 *   dark   — use white wordmark (for dark backgrounds like dashboards)
 *   height — CSS height string, default "36px"
 */
interface MTBLogoProps {
  dark?: boolean
  height?: string
  className?: string
}

export default function MTBLogo({ dark = false, height = '36px', className = '' }: MTBLogoProps) {
  const wordColor  = dark ? '#ffffff' : '#2C1A0E'
  const tagColor   = dark ? 'rgba(255,255,255,0.5)' : '#9C8170'

  return (
    <svg
      viewBox="0 0 164 46"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height, width: 'auto' }}
      className={className}
      aria-label="My Travel Box"
      role="img"
    >
      {/* ── 3-D Box icon ── */}
      {/* front face */}
      <polygon points="4,15 27,15 27,38 4,38"
        fill="none" stroke="#E87521" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* top face */}
      <polygon points="4,15 12,6 35,6 27,15"
        fill="none" stroke="#E87521" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* right face */}
      <polygon points="27,15 35,6 35,29 27,38"
        fill="none" stroke="#E87521" strokeWidth="1.8" strokeLinejoin="round"/>
      {/* M on front face */}
      <text x="7"  y="30" fontFamily="'Arial Black',sans-serif" fontSize="9.5" fontWeight="900" fill="#E87521">M</text>
      {/* T on top face */}
      <text x="17" y="13" fontFamily="'Arial Black',sans-serif" fontSize="7"   fontWeight="900" fill="#E87521">T</text>
      {/* B on right face */}
      <text x="28" y="26" fontFamily="'Arial Black',sans-serif" fontSize="8.5" fontWeight="900" fill="#E87521">B</text>
      {/* ® */}
      <text x="2" y="8" fontFamily="Arial,sans-serif" fontSize="5" fill="#E87521">®</text>

      {/* ── Wordmark ── */}
      {/* "My" — orange, italic, slightly raised */}
      <text x="42" y="19"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="14" fontWeight="700" fontStyle="italic"
        fill="#E87521">My</text>

      {/* "Travel" — main color, larger, italic */}
      <text x="42" y="34"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="17" fontWeight="700" fontStyle="italic"
        fill={wordColor}>Travel</text>

      {/* "Box" — orange, same size */}
      <text x="105" y="34"
        fontFamily="Georgia,'Times New Roman',serif"
        fontSize="17" fontWeight="700" fontStyle="italic"
        fill="#E87521">Box</text>

      {/* ".in" — small orange superscript-style */}
      <text x="136" y="30"
        fontFamily="Arial,sans-serif"
        fontSize="9" fontWeight="700"
        fill="#E87521">.in</text>

      {/* ── Tagline ── */}
      <text x="42" y="44"
        fontFamily="Arial,sans-serif"
        fontSize="6.8" letterSpacing="0.9"
        fill={tagColor}>Surprising You Everyday</text>
    </svg>
  )
}
