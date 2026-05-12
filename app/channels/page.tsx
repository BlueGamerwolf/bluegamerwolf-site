import {
  ActionLink,
  CardLink,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";
import { platforms } from "@/app/lib/site-data";

export default function ChannelsPage() {
  return (
    <SiteShell active="/channels" footerLabel="Connected Across Platforms">
      <Hero
        title="Channels & Platforms"
        subtitle="Content, streaming, development, and community platforms."
        description="The platforms connected to the Blue Gamerwolf ecosystem for streaming, development, community interaction, and content."
        accent="indigo"
        actions={
          <>
            {platforms.map((platform) => (
              <ActionLink
                key={platform.name}
                href={platform.url}
                accent={platform.accent}
                external
              >
                {platform.name}
              </ActionLink>
            ))}
          </>
        }
      />

      <section className="mt-16">
        <SectionHeader
          title="Connected Platforms"
          description="Main content, development, and communication hubs."
          accent="indigo"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {platforms.map((platform) => (
            <CardLink
              key={platform.name}
              href={platform.url}
              title={platform.name}
              description={platform.description}
              accent={platform.accent}
              external
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
