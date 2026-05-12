import Link from "next/link";

const partners = [
  {
    name: "Nick",
    description: "Chaotic energy, streams, content, and collabs.",
    links: [
      {
        label: "Twitch",
        url: "https://www.twitch.tv/nick_the_clownttv",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@nicktheclown",
      },
    ],
  },
  {
    name: "Sage",
    description: "Gaming streams and community collabs.",
    links: [
      {
        label: "Twitch",
        url: "https://www.twitch.tv/coolblacksage04?csr=a",
      },
    ],
  },
  {
    name: "Jackko",
    description: "Streamer and Voidstone collaborator.",
    links: [
      {
        label: "Twitch",
        url: "https://www.twitch.tv/oniimouto",
      },
    ],
  },
  {
    name: "Kag",
    description: "Wild energy, gaming content, and streams.",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@WildKagmaster",
      },
      {
        label: "Twitch",
        url: "https://www.twitch.tv/wildkagmaster",
      },
    ],
  },
  {
    name: "Justbetter",
    description: "Streams, gaming content, and collabs.",
    links: [
      {
        label: "Twitch",
        url: "https://www.twitch.tv/dreamz7252",
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Dreamz_18",
      },
    ],
  },
  {
    name: "Saint Alex",
    description: "Content creator and collaborator.",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Saint_.al3x",
      },
    ],
  },
  {
    name: "Chaosduck",
    description: "Chaotic creator vibes and gaming content.",
    links: [
      {
        label: "YouTube",
        url: "https://www.youtube.com/@Chaosduck",
      },
    ],
  },
  {
    name: "Siren",
    description: "Dark vibes, streams, and short-form content.",
    links: [
      {
        label: "TikTok",
        url: "https://vm.tiktok.com/ZN9FSndxwhC4L-Cvdbj/",
      },
      {
        label: "Twitch",
        url: "https://www.twitch.tv/sirenkissfromhell0",
      },
    ],
  },
  {
    name: "The Mystical Vineyard",
    description: "A place for gamers, nerds, streamers, and all-around good vibes.",
    links: [
      {
        label: "Discord",
        url: "https://discord.gg/B3H9NNTP6T",
      },
    ],
  }
];

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,0,255,0.12),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-400">
            Voidstone Network
          </p>

          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            Partners & Collaborators
          </h1>

          <p className="mx-auto max-w-3xl text-lg text-zinc-400 md:text-xl">
            Creators, streamers, developers, and chaotic gremlins that help
            shape the Voidstone universe.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-zinc-950/70 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-purple-900/40"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-2xl font-black text-purple-300">
                    {partner.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {partner.name}
                    </h2>

                    <p className="text-sm text-purple-300">
                      Voidstone Partner
                    </p>
                  </div>
                </div>

                <p className="mb-8 text-zinc-400">
                  {partner.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {partner.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/"
            className="inline-flex items-center rounded-2xl border border-purple-500/30 bg-purple-500/10 px-8 py-4 text-lg font-bold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
          >
            Return to Voidstone
          </Link>
        </div>
      </div>
    </main>
  );
}
