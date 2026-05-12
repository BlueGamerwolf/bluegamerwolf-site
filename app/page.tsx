import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            href="/"
            className="text-xl font-black tracking-wide text-purple-400 transition hover:text-purple-300"
          >
            Blue Gamerwolf
          </Link>

          <div className="flex gap-6 text-sm md:text-base">

            <Link
              href="/partner"
              className="text-zinc-300 transition hover:text-purple-300"
            >
              Partners
            </Link>

            <Link
              href="/vrc"
              className="text-zinc-300 transition hover:text-purple-300"
            >
              VRChat
            </Link>

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
              className="text-zinc-300 transition hover:text-cyan-300"
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

      {/* VOID BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Main Black Hole */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_180px_rgba(0,0,0,1)]" />

        {/* Purple Accretion Ring */}
        <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20 blur-sm" />

        {/* Cyan Warden Ring */}
        <div className="absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 blur-md" />

        {/* Rotating Void Energy */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.18),rgba(34,211,238,0.08),transparent,rgba(168,85,247,0.18))] blur-3xl animate-spin [animation-duration:40s]" />

        {/* Center Pull */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.72)_45%,rgba(0,0,0,0.98)_100%)]" />

        {/* Star Field */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.05]" />

        {/* Floating Glows */}
        <div className="absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-purple-700/20 blur-3xl" />

        <div className="absolute bottom-[10%] right-[15%] h-96 w-96 rounded-full bg-cyan-700/10 blur-3xl" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-24">

          <h1 className="text-6xl font-black tracking-tight text-purple-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.95)] md:text-8xl">
            Blue Gamerwolf
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-200 md:text-2xl">
            Warden Inspired Systems • Forge & Fabric Development • Voidstone Ecosystem
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            Creating immersive Minecraft experiences, experimental backend systems,
            custom ecosystems, and void-forged projects born from darkness.
          </p>

        </div>

        {/* Hero Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/mods"
            className="rounded-2xl border border-orange-500/40 bg-orange-900/20 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-orange-700/30 hover:shadow-[0_0_25px_rgba(251,146,60,0.5)]"
          >
            Mods
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-cyan-500/40 bg-cyan-900/20 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-700/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
          >
            Projects
          </Link>

          <Link
            href="/github"
            className="rounded-2xl border border-purple-500/40 bg-purple-900/20 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-purple-700/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            GitHub
          </Link>

          <Link
            href="/communities"
            className="rounded-2xl border border-pink-500/40 bg-pink-900/20 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-pink-700/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          >
            Communities
          </Link>

        </div>

        {/* Featured Section */}
        <section className="mt-24 w-full max-w-6xl">

          <h2 className="text-5xl font-black text-purple-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]">
            Featured Work
          </h2>

          <p className="mt-4 text-zinc-400">
            Current systems, projects, communities, and development ecosystems.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <Link
              href="/mods"
              className="group rounded-3xl border border-orange-900/60 bg-black/40 p-8 text-left backdrop-blur-xl shadow-[0_0_60px_rgba(251,146,60,0.12)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-500"
            >

              <h2 className="text-3xl font-bold text-orange-300 transition group-hover:text-orange-200">
                Minecraft Mods
              </h2>

              <p className="mt-4 text-zinc-300">
                Forge and Fabric projects including Sculk Void, experimental systems,
                APIs, mechanics, and gameplay overhauls.
              </p>

            </Link>

            <Link
              href="/github"
              className="group rounded-3xl border border-purple-900/60 bg-black/40 p-8 text-left backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.12)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-500"
            >

              <h2 className="text-3xl font-bold text-purple-300 transition group-hover:text-purple-200">
                GitHub Projects
              </h2>

              <p className="mt-4 text-zinc-300">
                Open source repositories, backend systems, development experiments,
                and public code projects.
              </p>

            </Link>

            <Link
              href="/communities"
              className="group rounded-3xl border border-pink-900/60 bg-black/40 p-8 text-left backdrop-blur-xl shadow-[0_0_60px_rgba(236,72,153,0.12)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-pink-500"
            >

              <h2 className="text-3xl font-bold text-pink-300 transition group-hover:text-pink-200">
                Communities
              </h2>

              <p className="mt-4 text-zinc-300">
                Forlorn, Warden Nation, and collaborative Minecraft communities
                focused on creativity and experimentation.
              </p>

            </Link>

            <Link
              href="/channels"
              className="group rounded-3xl border border-cyan-900/60 bg-black/40 p-8 text-left backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500"
            >

              <h2 className="text-3xl font-bold text-cyan-300 transition group-hover:text-cyan-200">
                Channels & Platforms
              </h2>

              <p className="mt-4 text-zinc-300">
                Twitch, Kick, YouTube, GitHub, and development platforms
                connected to the Blue Gamerwolf ecosystem.
              </p>

            </Link>

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/30 py-8 text-center text-zinc-500 backdrop-blur-xl">
        © 2026 Blue Gamerwolf • Voidstone Ecosystem
      </footer>

    </main>
  );
}
