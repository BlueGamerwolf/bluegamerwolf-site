import {
  ActionLink,
  CardLink,
  Hero,
  SectionHeader,
  SiteShell,
} from "@/app/components/site-frame";
import { partners } from "@/app/lib/site-data";

export default function PartnersPage() {
  return (
    <SiteShell active="/partners" footerLabel="Partner Network">
      <Hero
        title="Partners & Collaborators"
        subtitle="Creators, streamers, developers, and community builders."
        description="A curated network of people and spaces connected to the Blue Gamerwolf and Voidstone ecosystem."
        accent="purple"
      />

      <section className="mt-16">
        <SectionHeader
          title="Network"
          description="Creator pages, streams, servers, and places to connect."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="rounded-lg border border-purple-300/25 bg-black/45 p-6 shadow-2xl shadow-black/20 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-purple-300/30 bg-purple-300/10 text-xl font-black text-purple-200">
                  {partner.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">{partner.name}</h3>
                  <p className="text-sm text-purple-200">Voidstone Partner</p>
                </div>
              </div>
              <p className="mt-5 leading-7 text-zinc-300">{partner.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {partner.links.map((link) => (
                  <ActionLink key={link.url} href={link.url} accent="purple" external>
                    {link.label}
                  </ActionLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <CardLink
          href="/"
          title="Return to Blue Gamerwolf"
          description="Go back to the main hub for mods, projects, communities, and channels."
          accent="cyan"
        />
      </section>
    </SiteShell>
  );
}
