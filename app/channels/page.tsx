import Link from "next/link";

export default function ChannelsPage() {
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
              className="text-zinc-300 transition hover:text-pink-300"
            >
              Communities
            </Link>

            <Link
              href="/channels"
              className="text-indigo-300"
            >
              Channels
            </Link>

          </div>

        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black opacity-90" />

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-700 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-6 py-20 text-center">

        {/* Hero */}
        <div className="mt-24">

          <h1 className="text-6xl font-black tracking-tight text-indigo-400 drop-shadow-[0_0_25px_rgba(129,140,248,0.8)] md:text-8xl">
            Channels & Platforms
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-indigo-200 md:text-2xl">
            Content • Streaming • Development • Community Platforms
          </p>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
            The platforms connected to the Blue Gamerwolf ecosystem including
            streaming, development, community interaction, and content creation.
          </p>

        </div>

        {/* Main Platform Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="https://github.com/BlueGamerwolf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-cyan-500 bg-cyan-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-cyan-700/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          >
            GitHub
          </a>

          <a
            href="https://www.youtube.com/@blue_gamerwolf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-red-500 bg-red-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-red-700/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
          >
            YouTube
          </a>

          <a
            href="https://twitch.tv/blue_gamerwolf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-purple-500 bg-purple-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-purple-700/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            Twitch
          </a>

          <a
            href="https://kick.com/blue-gamerwolf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-green-500 bg-green-900/30 px-6 py-3 text-lg font-semibold transition duration-300 hover:scale-105 hover:bg-green-700/40 hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]"
          >
            Kick
          </a>

        </div>

        {/* Platform Cards */}
        <section className="mt-24 w-full max-w-6xl">

          <h2 className="text-5xl font-black text-indigo-300">
            Connected Platforms
          </h2>

          <p className="mt-4 text-zinc-400">
            Main content, development, and communication hubs.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* GitHub */}
            <a
              href="https://github.com/BlueGamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-cyan-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500"
            >

              <h2 className="text-3xl font-bold text-cyan-300">
                GitHub
              </h2>

              <p className="mt-4 text-zinc-300">
                Open source repositories, Minecraft mods, backend systems,
                APIs, experiments, and development projects.
              </p>

            </a>

            {/* Twitch */}
            <a
              href="https://twitch.tv/blue_gamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-purple-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-purple-500"
            >

              <h2 className="text-3xl font-bold text-purple-300">
                Twitch
              </h2>

              <p className="mt-4 text-zinc-300">
                Livestreams featuring Minecraft development, modpacks,
                backend systems, testing, and community interaction.
              </p>

            </a>

            {/* Kick */}
            <a
              href="https://kick.com/blue-gamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-green-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(74,222,128,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-green-500"
            >

              <h2 className="text-3xl font-bold text-green-300">
                Kick
              </h2>

              <p className="mt-4 text-zinc-300">
                Alternative livestream platform for gameplay,
                coding sessions, development streams,
                experiments, and community interaction.
              </p>

            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@blue_gamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-red-900 bg-black/40 p-8 text-left backdrop-blur-md shadow-[0_0_50px_rgba(239,68,68,0.15)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-red-500"
            >

              <h2 className="text-3xl font-bold text-red-300">
                YouTube
              </h2>

              <p className="mt-4 text-zinc-300">
                Development showcases, mod previews, gameplay videos,
                tutorials, updates, and experimental content.
              </p>

            </a>

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf — Connected Across Platforms
      </footer>

    </main>
  );
}