import { ReactNode, useId } from "react"

const CircleMask = ({ children, className }: { children: ReactNode, className?: string }) => {
  const id = useId()
  return (
    <>
      <svg width="0px" height="0px">
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.5" />
          </clipPath>
        </defs>
      </svg>
      <div className={`aspect-square ${className ?? ""}`} style={{ clipPath: `url(#${id})` }}>
        {children}
      </div>
    </>
  )
}
export default CircleMask
