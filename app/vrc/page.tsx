import Link from "next/link";

export default function VRCPage() {
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
              className="text-cyan-300"
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

      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-28">

          <h1 className="text-6xl font-black tracking-tight text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] md:text-8xl">
            VRChat
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-cyan-100 md:text-2xl">
            Worlds • Avatars • Communities • Chaos
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            My VRChat space featuring avatars, world exploration,
            community events, social spaces, and experimental creations.
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="https://vrchat.com/home/user/usr_f037017d-3571-44f1-a623-9e92fe9ff227"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-cyan-500 bg-cyan-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-700/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            VRChat
          </a>

          <a
            href="https://discord.gg/Fz6ePKWhv8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-purple-500 bg-purple-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-purple-700/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            Discord
          </a>

        </div>

        {/* Content Grid */}
        <section className="mt-24 w-full max-w-6xl">

          <h2 className="text-5xl font-black text-cyan-300">
            VRChat Universe
          </h2>

          <p className="mt-4 text-zinc-400">
            Everything related to my VRChat experience and creations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Avatars */}
            <div className="rounded-3xl border border-cyan-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-2 hover:border-cyan-500">

              <h2 className="text-3xl font-bold text-cyan-300">
                Avatars
              </h2>

              <p className="mt-4 text-zinc-300">
                Custom avatars, edits, optimized models,
                and experimental avatar systems.
              </p>

            </div>

            {/* Worlds */}
            <div className="rounded-3xl border border-purple-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.15)] transition duration-300 hover:-translate-y-2 hover:border-purple-500">

              <h2 className="text-3xl font-bold text-purple-300">
                Worlds
              </h2>

              <p className="mt-4 text-zinc-300">
                Favorite hangouts, showcase worlds,
                horror maps, events, and social spaces.
              </p>

            </div>

            {/* Groups */}
            <div className="rounded-3xl border border-pink-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(236,72,153,0.15)] transition duration-300 hover:-translate-y-2 hover:border-pink-500">

              <h2 className="text-3xl font-bold text-pink-300">
                Communities
              </h2>

              <p className="mt-4 text-zinc-300">
                Friends, events, clubs, communities,
                and collaborative VR experiences.
              </p>

            </div>

            {/* Chaos */}
            <div className="rounded-3xl border border-red-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(239,68,68,0.15)] transition duration-300 hover:-translate-y-2 hover:border-red-500">

              <h2 className="text-3xl font-bold text-red-300">
                Chaos Energy
              </h2>

              <p className="mt-4 text-zinc-300">
                Sleep deprivation, mirror dwelling,
                meme avatars, and absolute VR nonsense.
              </p>

            </div>

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf - VRChat Division
      </footer>

    </main>
  );
}