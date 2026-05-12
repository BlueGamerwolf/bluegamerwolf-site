import {
  ActionLink,
  Hero,
  InfoCard,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";
import { vrcFeatures } from "@/app/lib/site-data";

export default function VRCPage() {
  return (
    <SiteShell active="/vrc" footerLabel="VRChat Division">
      <Hero
        title="VRChat"
        subtitle="Worlds, avatars, communities, and VR experiments."
        description="A home for VRChat profile links, community spaces, avatar work, world exploration, events, and social projects."
        accent="cyan"
        actions={
          <>
            <ActionLink
              href="https://vrchat.com/home/user/usr_f037017d-3571-44f1-a623-9e92fe9ff227"
              accent="cyan"
              external
            >
              VRChat Profile
            </ActionLink>
            <ActionLink href="https://discord.gg/Fz6ePKWhv8" accent="purple" external>
              Discord
            </ActionLink>
          </>
        }
      />

      <section className="mt-16">
        <SectionHeader
          title="VRChat Universe"
          description="Everything related to VRChat experiences and creations."
          accent="cyan"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {vrcFeatures.map((feature) => (
            <InfoCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              accent={feature.accent}
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
