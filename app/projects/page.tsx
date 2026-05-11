import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    "https://api.github.com/users/BlueGamerwolf/repos?sort=updated&per_page=100",
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await res.json();

  return repos.sort(
    (a: Repo, b: Repo) =>
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function ProjectsPage() {
  const repos = await getRepos();

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
              className="text-zinc-300 transition hover:text-cyan-300"
            >
              VRChat
            </Link>

            <Link
              href="/projects"
              className="text-cyan-300"
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
              className="text-zinc-300 transition hover:text-purple-300"
            >
              GitHub
            </Link>

          </div>

        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950 via-black to-black opacity-90" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-cyan-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-700 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* Hero */}
        <div className="mt-20 text-center">

          <h1 className="text-6xl font-black tracking-tight text-cyan-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] md:text-8xl">
            Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100 md:text-2xl">
            Open source systems, Minecraft mods, backend projects,
            experiments, APIs, tools, and chaos.
          </p>

          <p className="mt-4 text-zinc-400">
            Live synced from GitHub repositories.
          </p>

        </div>

        {/* Repo Grid */}
        <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-cyan-900 bg-black/40 p-8 backdrop-blur-md shadow-[0_0_50px_rgba(34,211,238,0.08)] transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]"
            >

              {/* Repo Name */}
              <h2 className="text-3xl font-bold text-cyan-300 transition group-hover:text-cyan-200">
                {repo.name}
              </h2>

              {/* Description */}
              <p className="mt-4 min-h-[80px] text-zinc-300">
                {repo.description || "No description provided."}
              </p>

              {/* Stats */}
              <div className="mt-6 flex flex-wrap gap-3">

                {repo.language && (
                  <div className="rounded-xl border border-purple-500/30 bg-purple-900/20 px-3 py-1 text-sm text-purple-200">
                    {repo.language}
                  </div>
                )}

                <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/20 px-3 py-1 text-sm text-cyan-200">
                  ⭐ {repo.stargazers_count}
                </div>

                <div className="rounded-xl border border-pink-500/30 bg-pink-900/20 px-3 py-1 text-sm text-pink-200">
                  🍴 {repo.forks_count}
                </div>

              </div>

              {/* Footer */}
              <div className="mt-8 border-t border-white/10 pt-4 text-sm text-zinc-500">
                Updated {formatDate(repo.updated_at)}
              </div>

            </a>
          ))}

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf - Projects System
      </footer>

    </main>
  );
}