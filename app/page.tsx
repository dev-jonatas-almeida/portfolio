export default function Home() {
  return (
    <div className="h-screen w-full bg-bright-snow">
        <header className="flex flex-col w-full bg-dodger-blue">
        <nav className="flex p-0.5 gap-0.5 bg-space-indig w-full">
          <button className="cursor-pointer bg-bright-snow text-space-indig rounded-full w-5">
            Intro
          </button>
          <button className="cursor-pointer">
            Projetos
          </button>
          <button className="cursor-pointer">
            Experiências
          </button>
        </nav>
      </header>
    </div>
  );
}
