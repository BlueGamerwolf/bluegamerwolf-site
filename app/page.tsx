import {
  ActionLink,
  CardLink,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";
import { featuredWork } from "@/app/lib/site-data";

export default function Home() {
  return (
    <SiteShell active="/">
      <Hero
        title="Blue Gamerwolf"
        subtitle="Minecraft modding, backend systems, and creator communities."
        description="I build Forge and Fabric projects, experimental gameplay systems, public repositories, and community spaces around the Voidstone ecosystem."
        actions={
          <>
            <ActionLink href="/mods" accent="orange">
              View Mods
            </ActionLink>
            <ActionLink href="/projects" accent="cyan">
              Live Projects
            </ActionLink>
            <ActionLink href="/github" accent="purple">
              GitHub
            </ActionLink>
            <ActionLink href="/communities" accent="pink">
              Communities
            </ActionLink>
          </>
        }
      />

      <section className="mt-16 grid gap-4 border-y border-white/10 py-6 text-left sm:grid-cols-3">
        <div>
          <p className="text-3xl font-black text-cyan-200">Forge + Fabric</p>
          <p className="mt-2 text-sm text-zinc-400">Multi-loader mod development and gameplay systems.</p>
        </div>
        <div>
          <p className="text-3xl font-black text-purple-200">Open Source</p>
          <p className="mt-2 text-sm text-zinc-400">Public repositories, experiments, APIs, and tools.</p>
        </div>
        <div>
          <p className="text-3xl font-black text-emerald-200">Community</p>
          <p className="mt-2 text-sm text-zinc-400">Discord spaces, streaming platforms, and creator partners.</p>
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          title="Featured Work"
          description="A cleaner path into the main areas of the site."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featuredWork.map((item) => (
            <CardLink
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.description}
              accent={item.accent}
            />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
