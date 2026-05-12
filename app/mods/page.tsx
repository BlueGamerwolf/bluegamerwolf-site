import Image from "next/image";
import {
  ActionLink,
  CardLink,
  EmptyState,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";

type ModrinthProject = {
  id: string;
  title: string;
  description: string;
  downloads: number;
  slug: string;
  icon_url?: string;
};

type ModrinthUser = {
  id: string;
};

async function getModrinthMods(): Promise<ModrinthProject[]> {
  try {
    const userRes = await fetch("https://api.modrinth.com/v2/user/BlueGamerwolf", {
      next: { revalidate: 3600 },
    });

    if (!userRes.ok) {
      return [];
    }

    const user = (await userRes.json()) as ModrinthUser;
    const projectRes = await fetch(
      `https://api.modrinth.com/v2/user/${user.id}/projects`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!projectRes.ok) {
      return [];
    }

    return (await projectRes.json()) as ModrinthProject[];
  } catch (error) {
    console.error("Modrinth project fetch failed:", error);
    return [];
  }
}

export default async function ModsPage() {
  const modrinthMods = await getModrinthMods();

  return (
    <SiteShell active="/mods" footerLabel="Mod Development">
      <Hero
        title="Mods"
        subtitle="Forge, Fabric, APIs, backend systems, and experimental mechanics."
        description="Published projects are pulled from Modrinth so downloads and project listings stay current."
        accent="green"
        actions={
          <ActionLink href="https://modrinth.com/user/BlueGamerwolf" accent="green" external>
            Open Modrinth
          </ActionLink>
        }
      />

      <section className="mt-16">
        <SectionHeader
          title="Modrinth Projects"
          description="Minecraft mods published under BlueGamerwolf."
          accent="green"
        />

        {modrinthMods.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {modrinthMods.map((mod) => (
              <CardLink
                key={mod.id}
                href={`https://modrinth.com/mod/${mod.slug}`}
                title={mod.title}
                description={mod.description}
                accent="green"
                external
              >
                <div className="mt-6 flex items-center gap-4">
                  {mod.icon_url && (
                    <Image
                      src={mod.icon_url}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-md border border-white/10 object-cover"
                    />
                  )}
                  <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                    {mod.downloads.toLocaleString()} downloads
                  </span>
                </div>
              </CardLink>
            ))}
          </div>
        ) : (
          <EmptyState>
            Modrinth projects could not be loaded right now. The profile link above still works.
          </EmptyState>
        )}
      </section>
    </SiteShell>
  );
}
