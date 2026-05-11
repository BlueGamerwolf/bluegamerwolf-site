import Link from "next/link";
import Image from "next/image";

type ModrinthProject = {
  id: string;
  title: string;
  description: string;
  downloads: number;
  slug: string;
  icon_url?: string;
};

async function getModrinthMods(): Promise<ModrinthProject[]> {
  try {
    const userRes = await fetch(
      "https://api.modrinth.com/v2/user/BlueGamerwolf",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!userRes.ok) {
      return [];
    }

    const user = await userRes.json();

    const projectRes = await fetch(
      `https://api.modrinth.com/v2/user/${user.id}/projects`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!projectRes.ok) {
      return [];
    }

    return await projectRes.json();
  } catch (err) {
    console.error("Modrinth Error:", err);
    return [];
  }
}

export default async function ModsPage() {
  const modrinthMods = await getModrinthMods();

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
              className="text-zinc-300 transition hover:text-cyan-300"
            >
              Projects
            </Link>

            <Link
              href="/mods"
              className="text-green-300"
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
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-black to-black opacity-90" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-green-700 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-700 blur-3xl" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* Hero */}
        <div className="mt-20 text-center">

          <h1 className="text-6xl font-black tracking-tight text-green-300 drop-shadow-[0_0_25px_rgba(74,222,128,0.8)] md:text-8xl">
            Mods
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-green-100 md:text-2xl">
            Forge • Fabric • APIs • Backend Systems • Experimental Chaos
          </p>

          <p className="mt-4 text-zinc-400">
            Live synced from Modrinth.
          </p>

        </div>

        {/* Modrinth */}
        <section className="mt-24">

          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <h2 className="text-5xl font-black text-green-300">
                Modrinth
              </h2>

              <p className="mt-3 text-zinc-400">
                Minecraft mods published on Modrinth.
              </p>
            </div>

            <a
              href="https://modrinth.com/user/BlueGamerwolf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-green-500 bg-green-900/30 px-5 py-3 text-sm font-semibold transition hover:scale-105 hover:bg-green-700/40"
            >
              Open Modrinth
            </a>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {modrinthMods.length > 0 ? (
              modrinthMods.map((mod) => (
                <a
                  key={mod.id}
                  href={`https://modrinth.com/mod/${mod.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-green-900 bg-black/40 p-8 backdrop-blur-md shadow-[0_0_50px_rgba(74,222,128,0.08)] transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_50px_rgba(74,222,128,0.2)]"
                >

                  {mod.icon_url && (
                    <Image
                      src={mod.icon_url}
                      alt={mod.title}
                      width={80}
                      height={80}
                      className="mb-6 h-20 w-20 rounded-2xl border border-white/10 object-cover"
                    />
                  )}

                  <div className="mb-4 inline-flex rounded-xl border border-green-500/30 bg-green-900/20 px-3 py-1 text-sm text-green-200">
                    Modrinth Project
                  </div>

                  <h2 className="text-3xl font-bold text-green-300 transition group-hover:text-green-200">
                    {mod.title}
                  </h2>

                  <p className="mt-4 min-h-[90px] text-zinc-300">
                    {mod.description}
                  </p>

                  <div className="mt-6 inline-flex rounded-xl border border-green-500/30 bg-green-900/20 px-3 py-1 text-sm text-green-200">
                    ⬇ {mod.downloads.toLocaleString()} downloads
                  </div>

                </a>
              ))
            ) : (
              <div className="rounded-3xl border border-white/10 bg-black/30 p-8 text-zinc-500">
                No Modrinth mods found.
              </div>
            )}

          </div>

        </section>

      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 border-t border-white/10 py-8 text-center text-zinc-500">
        © 2026 Blue Gamerwolf - Mod Development Division
      </footer>

    </main>
  );
}