interface ReadinessRingProps {
  percentage: number
  size?: number
}

const RADIUS = 50
const CIRCUMFERENCE = 2 * Math.PI * RADIUS // ~314

export default function ReadinessRing({ percentage, size = 120 }: ReadinessRingProps) {
  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * percentage) / 100

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        aria-label={`Tour readiness: ${percentage}%`}
        role="img"
      >
        {/* Track */}
        <circle
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="rgba(250,247,242,0.15)"
          strokeWidth="10"
        />
        {/* Progress */}
        <circle
          id="ringProgress"
          cx="60"
          cy="60"
          r={RADIUS}
          fill="none"
          stroke="#E87521"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${CIRCUMFERENCE}`}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      {/* Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-fraunces text-[26px] font-semibold text-paper">
          {percentage}%
        </span>
      </div>
    </div>
  )
}
