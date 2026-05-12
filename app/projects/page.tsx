import {
  CardLink,
  EmptyState,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/BlueGamerwolf/repos?sort=updated&per_page=100",
      {
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!res.ok) {
      return [];
    }

    const repos = (await res.json()) as Repo[];

    return repos.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
  } catch (error) {
    console.error("GitHub repository fetch failed:", error);
    return [];
  }
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
    <SiteShell active="/projects" footerLabel="Projects System">
      <Hero
        title="Projects"
        subtitle="Open source systems, Minecraft mods, backend projects, APIs, and tools."
        description="This page pulls public repository data from GitHub and keeps the project list fresh without manual updates."
        accent="cyan"
      />

      <section className="mt-16">
        <SectionHeader
          title="Live Repositories"
          description="Sorted by the most recently updated public repository."
          accent="cyan"
        />

        {repos.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {repos.map((repo) => (
              <CardLink
                key={repo.id}
                href={repo.html_url}
                title={repo.name}
                description={repo.description || "No description provided."}
                accent="cyan"
                external
              >
                <div className="mt-6 flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="rounded-md border border-purple-300/30 bg-purple-300/10 px-3 py-1 text-xs font-bold text-purple-200">
                      {repo.language}
                    </span>
                  )}
                  <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                    Stars {repo.stargazers_count}
                  </span>
                  <span className="rounded-md border border-pink-300/30 bg-pink-300/10 px-3 py-1 text-xs font-bold text-pink-200">
                    Forks {repo.forks_count}
                  </span>
                </div>
                <p className="mt-6 border-t border-white/10 pt-4 text-sm text-zinc-500">
                  Updated {formatDate(repo.updated_at)}
                </p>
              </CardLink>
            ))}
          </div>
        ) : (
          <EmptyState>
            GitHub repositories could not be loaded right now. The site remains usable and the data will retry on the next refresh.
          </EmptyState>
        )}
      </section>
    </SiteShell>
  );
}
