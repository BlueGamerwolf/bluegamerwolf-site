import Link from "next/link";

export default function GitHubPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-xl font-black text-purple-400 transition hover:text-purple-300"
          >
            Blue Gamerwolf
          </Link>

          <div className="flex gap-6 text-sm md:text-base">

            <Link
              href="/projects"
              className="text-zinc-300 transition hover:text-purple-300"
            >
              Projects
            </Link>

            <Link
              href="/mods"
              className="text-zinc-300 transition hover:text-orange-300"
            >
              Mods
            </Link>

            <Link
              href="/github"
              className="text-cyan-300"
            >
              GitHub
            </Link>

            <Link
              href="/communities"
              className="text-zinc-300 transition hover:text-pink-300"
            >
              Communities
            </Link>

            <Link
              href="/channels"
              className="text-zinc-300 transition hover:text-indigo-300"
            >
              Channels
            </Link>

          </div>

        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-black to-black opacity-90" />

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-24">

          <h1 className="text-6xl font-black tracking-tight text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] md:text-8xl">
            GitHub Projects
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-cyan-200 md:text-2xl">
            Open Source Systems • Minecraft Mods • Backend Development
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            Public repositories, experimental systems, APIs, modding frameworks,
            Discord integrations, and large-scale Minecraft development projects.
          </p>

        </div>

        {/* GitHub Button */}
        <div className="mt-10">

          <a
            href="https://github.com/BlueGamerwolf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl border border-cyan-500 bg-cyan-900/30 px-8 py-4 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-700/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            Visit GitHub
          </a>

        </div>

        {/* Repository Cards */}
        <section className="mt-24 w-full max-w-6xl">

          <h2 className="text-5xl font-black text-cyan-300">
            Featured Repositories
          </h2>

          <p className="mt-4 text-zinc-400">
            Main repositories and development ecosystems currently being worked on.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Sculk Void */}
            <a
              href="https://github.com/BlueGamerwolf/sculk_void"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-purple-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-500"
            >

              <h2 className="text-3xl font-bold text-purple-300">
                Sculk Void
              </h2>

              <p className="mt-4 text-zinc-300">
                Large-scale Minecraft Forge & Fabric project featuring races,
                custom systems, backend APIs, progression mechanics, and advanced
                gameplay overhauls.
              </p>

            </a>

            {/* Void Multi */}
            <a
              href="https://github.com/BlueGamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-cyan-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500"
            >

              <h2 className="text-3xl font-bold text-cyan-300">
                Void Multi
              </h2>

              <p className="mt-4 text-zinc-300">
                Multi-loader Minecraft development ecosystem supporting Forge
                and Fabric with shared APIs, systems, and modular architecture.
              </p>

            </a>

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf — Open Source Development
      </footer>

    </main>
  );
}