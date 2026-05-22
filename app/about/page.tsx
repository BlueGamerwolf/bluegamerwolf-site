import type { Metadata } from "next";
import {
  ActionLink,
  Hero,
  InfoCard,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Blue Gamerwolf, including personal background, location, contact details, and the work behind the Voidstone ecosystem.",
};

const profile = {
  name: "Blue Gamerwolf (Joshua Thomas Ward)",
  location: "United States, Delaware (EST timezone)",
  email: "bluemoonsmp1231@gmail.com",
  phone: "+1 (302) 833-9865)",
};

const contactItems = [
  { label: "Name", value: profile.name },
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Phone", value: profile.phone },
];

const focusAreas = [
  {
    title: "Minecraft Modding",
    description:
      "I build Forge and Fabric projects with custom gameplay systems, APIs, progression mechanics, and experimental ideas around the Voidstone ecosystem.",
    accent: "orange" as const,
  },
  {
    title: "Backend Systems",
    description:
      "I work on APIs, automation, integrations, repositories, and supporting services that connect projects, communities, and content platforms.",
    accent: "cyan" as const,
  },
  {
    title: "Community",
    description:
      "I spend time building community spaces for Minecraft, creators, streaming, friends, and collaborative projects across connected platforms.",
    accent: "pink" as const,
  },
];

export default function AboutPage() {
  return (
    <SiteShell active="/about" footerLabel="About Blue Gamerwolf">
      <Hero
        eyebrow="About"
        title={profile.name}
        subtitle="Creator, Minecraft modder, backend builder, and community organizer."
        description="This page is a quick introduction to who I am, what I build, where I am based, and how people can reach me."
        accent="purple"
        actions={
          <>
            <ActionLink href="/projects" accent="cyan">
              View Projects
            </ActionLink>
            <ActionLink href="/mods" accent="orange">
              View Mods
            </ActionLink>
            <ActionLink href="/channels" accent="indigo">
              My Channels
            </ActionLink>
          </>
        }
      />

      <section className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <InfoCard
          title="Who I Am"
          description="I am Blue Gamerwolf, a creator focused on Minecraft modding, backend development, open source projects, and community spaces. My work leans into custom systems, Sculk and Warden-inspired ideas, and tools that help people connect around games and development."
          accent="purple"
        >
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <span className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-cyan-100">
              Minecraft Mods
            </span>
            <span className="rounded-lg border border-purple-300/30 bg-purple-300/10 px-4 py-3 text-sm font-bold text-purple-100">
              Open Source
            </span>
            <span className="rounded-lg border border-pink-300/30 bg-pink-300/10 px-4 py-3 text-sm font-bold text-pink-100">
              Creator Spaces
            </span>
            <span className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-bold text-emerald-100">
              Backend Tools
            </span>
          </div>
        </InfoCard>

        <InfoCard
          title="Basic Info"
          description="A simple contact card with the core details people may need."
          accent="cyan"
        >
          <dl className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
              >
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                  {item.label}
                </dt>
                <dd className="mt-2 break-words text-lg font-black text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </InfoCard>
      </section>

      <section className="mt-16">
        <SectionHeader
          title="What I Work On"
          description="The main areas people will usually find me building around."
          accent="purple"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <InfoCard
              key={area.title}
              title={area.title}
              description={area.description}
              accent={area.accent}
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
