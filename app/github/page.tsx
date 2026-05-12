import {
  ActionLink,
  CardLink,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";

const featuredRepos = [
  {
    title: "Sculk Void",
    href: "https://github.com/BlueGamerwolf/sculk_void",
    description:
      "Large-scale Minecraft project with races, custom systems, backend APIs, progression mechanics, and gameplay overhauls.",
    accent: "purple" as const,
  },
  {
    title: "Void Multi",
    href: "https://github.com/BlueGamerwolf",
    description:
      "Multi-loader Minecraft development ecosystem for shared Forge and Fabric APIs, systems, and modular architecture.",
    accent: "cyan" as const,
  },
];

export default function GitHubPage() {
  return (
    <SiteShell active="/github" footerLabel="Open Source Development">
      <Hero
        title="GitHub Projects"
        subtitle="Open source systems, Minecraft mods, and backend development."
        description="Public repositories, experimental systems, APIs, modding frameworks, Discord integrations, and Minecraft development projects."
        accent="cyan"
        actions={
          <ActionLink href="https://github.com/BlueGamerwolf" accent="cyan" external>
            Visit GitHub
          </ActionLink>
        }
      />

      <section className="mt-16">
        <SectionHeader
          title="Featured Repositories"
          description="Main repositories and development ecosystems currently being worked on."
          accent="cyan"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredRepos.map((repo) => (
            <CardLink
              key={repo.title}
              href={repo.href}
              title={repo.title}
              description={repo.description}
              accent={repo.accent}
              external
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
