import Link from "next/link";

export default function CommunitiesPage() {
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
              className="text-zinc-300 transition hover:text-cyan-300"
            >
              GitHub
            </Link>

            <Link
              href="/communities"
              className="text-pink-300"
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
      <div className="absolute inset-0 bg-gradient-to-b from-pink-950 via-black to-black opacity-90" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-pink-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-24">

          <h1 className="text-6xl font-black tracking-tight text-pink-400 md:text-8xl">
            Communities
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-pink-200 md:text-2xl">
            Minecraft Servers • Creative Groups • Development Communities
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            Collaborative communities built around creativity, experimentation,
            modded Minecraft, backend systems, roleplay, and development.
          </p>

        </div>

        {/* Cards */}
        <section className="mt-24 w-full max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            <a
              href="https://discord.gg/7bBA9fj6bT"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-pink-900 bg-black/40 p-8 text-left backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-pink-500"
            >

              <h2 className="text-3xl font-bold text-pink-300">
                Forlorn
              </h2>

              <p className="mt-4 text-zinc-300">
                A modded Minecraft community focused on advanced gameplay,
                experimentation, and collaborative worldbuilding.
              </p>

              <p className="mt-6 text-sm font-semibold text-pink-400">
                Join Discord →
              </p>

            </a>

            <a
              href="https://discord.gg/784g7mNtHC"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-cyan-900 bg-black/40 p-8 text-left backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >

              <h2 className="text-3xl font-bold text-cyan-300">
                Warden Nation
              </h2>

              <p className="mt-4 text-zinc-300">
                A Group that focuses on channels of Blue Gamerwolf
                and their content, with their fan base.
              </p>

              <p className="mt-6 text-sm font-semibold text-cyan-400">
                Join Discord →
              </p>

            </a>

          </div>

        </section>

      </div>

    </main>
  );
}