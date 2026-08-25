import { ReactNode, useId } from "react"

const GrungeLabel = ({ children, className }: { children: ReactNode; className?: string }) => {
  const rawId = useId()
  const id = `grunge-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`

  return (
    <span className={`relative isolate inline-block px-5 py-2 ${className ?? ""}`}>
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-accent"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id={id}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.06"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
        <rect
          x="4%" y="10%" width="92%" height="80%"
          fill="currentColor"
          filter={`url(#${id})`}
        />
      </svg>
      <span className="relative font-bold uppercase tracking-wider text-bright-snow">
        {children}
      </span>
    </span>
  )
}

export default GrungeLabel
