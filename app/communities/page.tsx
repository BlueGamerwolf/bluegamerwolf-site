import {
  CardLink,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";
import { communities } from "@/app/lib/site-data";

export default function CommunitiesPage() {
  return (
    <SiteShell active="/communities" footerLabel="Community Network">
      <Hero
        title="Communities"
        subtitle="Minecraft servers, creative groups, and development communities."
        description="Collaborative spaces built around creativity, modded Minecraft, roleplay, backend systems, and development."
        accent="pink"
      />

      <section className="mt-16">
        <SectionHeader
          title="Discord Communities"
          description="Primary community spaces connected to Blue Gamerwolf."
          accent="pink"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {communities.map((community) => (
            <CardLink
              key={community.name}
              href={community.url}
              title={community.name}
              description={community.description}
              accent={community.accent}
              external
            >
              <p className="mt-6 text-sm font-bold text-zinc-400">Open Discord</p>
            </CardLink>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
