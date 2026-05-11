import Link from "next/link";

export default function Home() {
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

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-black to-black opacity-90" />

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-700 blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-20">

          <h1 className="text-6xl font-black tracking-tight text-purple-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] md:text-8xl">
            Blue Gamerwolf
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-purple-200 md:text-2xl">
            Minecraft Mod Developer • Backend Systems • Forge & Fabric Developer
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            Creating immersive Minecraft experiences, advanced backend systems,
            custom modpacks, communities, and experimental projects.
          </p>

        </div>

        {/* Hero Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/mods"
            className="rounded-2xl border border-orange-500 bg-orange-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-orange-700/40 hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]"
          >
            Mods
          </Link>

          <Link
            href="/projects"
            className="rounded-2xl border border-cyan-500 bg-cyan-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-700/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            Projects
          </Link>

          <Link
            href="/github"
            className="rounded-2xl border border-purple-500 bg-purple-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-purple-700/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            GitHub
          </Link>

          <Link
            href="/communities"
            className="rounded-2xl border border-pink-500 bg-pink-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-pink-700/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
          >
            Communities
          </Link>

        </div>

        {/* Featured Section */}
        <section className="mt-24 w-full max-w-6xl">

          <h2 className="text-5xl font-black text-purple-300">
            Featured Work
          </h2>

          <p className="mt-4 text-zinc-400">
            Current systems, projects, communities, and development ecosystems.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <Link
              href="/mods"
              className="rounded-3xl border border-orange-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(251,146,60,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-500"
            >

              <h2 className="text-3xl font-bold text-orange-300">
                Minecraft Mods
              </h2>

              <p className="mt-4 text-zinc-300">
                Forge and Fabric projects including Sculk Void, experimental systems,
                APIs, mechanics, and gameplay overhauls.
              </p>

            </Link>

            <Link
              href="/github"
              className="rounded-3xl border border-purple-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-500"
            >

              <h2 className="text-3xl font-bold text-purple-300">
                GitHub Projects
              </h2>

              <p className="mt-4 text-zinc-300">
                Open source repositories, backend systems, development experiments,
                and public code projects.
              </p>

            </Link>

            <Link
              href="/communities"
              className="rounded-3xl border border-pink-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(236,72,153,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-pink-500"
            >

              <h2 className="text-3xl font-bold text-pink-300">
                Communities
              </h2>

              <p className="mt-4 text-zinc-300">
                Forlorn, Warden Nation, and collaborative Minecraft communities
                focused on creativity and experimentation.
              </p>

            </Link>

            <Link
              href="/channels"
              className="rounded-3xl border border-cyan-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500"
            >

              <h2 className="text-3xl font-bold text-cyan-300">
                Channels & Platforms
              </h2>

              <p className="mt-4 text-zinc-300">
                Twitch, Discord, YouTube, GitHub, and development platforms
                connected to the Blue Gamerwolf ecosystem.
              </p>

            </Link>

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf - All rights reserved.
      </footer>

    </main>
  );
}