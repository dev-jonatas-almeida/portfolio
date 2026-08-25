import { Download, Phone } from "lucide-react"
import CircleMask from "../../icons/CircleMask"
import GrungeLabel from "../../icons/GrungeLabel"

const Hero = () => {
  return (
    <div className="justify-between flex w-full h-[80%] overflow-y-scroll scrollbar-none p-0.5 pt-2.5">
      {/* Image */}
      <div className="relative flex-1 h-full pt-2 self-end">
        <CircleMask className="h-full">
          <div className="relative h-full w-full z-0" >
            <img src="/BW2.jpg" className="w-full h-full w-full object-cover grayscale" />
            <div className="absolute inset-0 bg-ink mix-blend-color opacity-60" />
          </div>
        </CircleMask>
        <div className="absolute top-2.5 left-0 -rotate-15 whitespace-nowrap">
          <GrungeLabel className="font-bold">
            Web Developer
          </GrungeLabel>
        </div>
      </div>
      <section className="flex-1 flex items-center justify-between">
        <div className="flex flex-col w-fit">
          <h1 className="text-ink font-bold text-[2.3rem]">
            Desenvolvedor Web Fullstack.
          </h1>
          <h2 className="text-ink font-bold">
            Construo interfaces para sistemas B2B que precisam aguentar uso real.
          </h2>
          <p className="text-accent w-full text-end">
            — não só ficar bonito no Figma.
          </p>
          <button className="hover:bg-accent-hover bg-accent flex gap-1 items-center font-bold mt-1 cursor-pointer w-fit self-end px-1 py-0.5 rounded-full ">
            <Phone />
            <p className="leading-none [text-box:trim-both_cap_alphabetic]">Contate-me</p>
          </button>
        </div>
      </section>
    </div>
  )
}
export default Hero
