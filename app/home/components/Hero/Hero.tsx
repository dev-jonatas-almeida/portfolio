import { Download, Phone } from "lucide-react"
import CircleMask from "../../icons/CircleMask"
import GrungeLabel from "../../icons/GrungeLabel"

const Hero = () => {
  return (
    <div className="justify-between flex w-full h-[80%] items-center overflow-y-scroll scrollbar-none p-0.5 pt-2.5 border-dotted border-b-2 border-accent">
      {/* Image */}
      <div className="flex flex-1 h-full items-center justify-center">
        <div className="relative h-full max-h-[60dvh] pt-2">
          <CircleMask className="h-full ">
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
      </div>
      <section className="relative flex-1 h-full flex items-center justify-between">
  {/* camada dos pontos */}
  <div
    className="pointer-events-none absolute inset-0
               bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2.5px)]
               bg-size-[16px_16px]
               mask-[linear-gradient(to_bottom,black_0%,black_30%,transparent_65%)]"
  />

  <div className="relative z-10 flex flex-col w-fit">
    <h1 className="text-ink font-bold text-[2.3rem]">
      Desenvolvedor Web Fullstack.
    </h1>
    <h2 className="text-ink font-bold">
      Construo interfaces para sistemas B2B que precisam aguentar uso real.
    </h2>
    <p className="text-accent w-full text-end">
      — não só ficar bonito no Figma.
    </p>
    <button className="hover:bg-accent-hover bg-accent flex gap-1 items-center font-bold mt-1 cursor-pointer w-fit self-end px-1 py-0.5 rounded-full">
      <Phone />
      <p className="leading-none [text-box:trim-both_cap_alphabetic]">Contate-me</p>
    </button>
  </div>
</section>
  </div>
  )
}
export default Hero
