export const navItems = [
  { href: "/partners", label: "Partners" },
  { href: "/vrc", label: "VRChat" },
  { href: "/projects", label: "Projects" },
  { href: "/mods", label: "Mods" },
  { href: "/github", label: "GitHub" },
  { href: "/communities", label: "Communities" },
  { href: "/channels", label: "Channels" },
];

export const accentClasses = {
  purple: {
    text: "text-purple-300",
    border: "border-purple-400/30",
    bg: "bg-purple-400/10",
    hover: "hover:border-purple-300/70 hover:bg-purple-400/15",
  },
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    bg: "bg-cyan-400/10",
    hover: "hover:border-cyan-300/70 hover:bg-cyan-400/15",
  },
  green: {
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/10",
    hover: "hover:border-emerald-300/70 hover:bg-emerald-400/15",
  },
  orange: {
    text: "text-orange-300",
    border: "border-orange-400/30",
    bg: "bg-orange-400/10",
    hover: "hover:border-orange-300/70 hover:bg-orange-400/15",
  },
  pink: {
    text: "text-pink-300",
    border: "border-pink-400/30",
    bg: "bg-pink-400/10",
    hover: "hover:border-pink-300/70 hover:bg-pink-400/15",
  },
  indigo: {
    text: "text-indigo-300",
    border: "border-indigo-400/30",
    bg: "bg-indigo-400/10",
    hover: "hover:border-indigo-300/70 hover:bg-indigo-400/15",
  },
  red: {
    text: "text-red-300",
    border: "border-red-400/30",
    bg: "bg-red-400/10",
    hover: "hover:border-red-300/70 hover:bg-red-400/15",
  },
} as const;

export type Accent = keyof typeof accentClasses;

export const featuredWork = [
  {
    href: "/mods",
    title: "Minecraft Mods",
    description:
      "Forge and Fabric projects including Sculk Void, APIs, custom mechanics, and gameplay systems.",
    accent: "orange",
  },
  {
    href: "/projects",
    title: "Live Projects",
    description:
      "Open repositories, backend experiments, tooling, and public development work synced from GitHub.",
    accent: "cyan",
  },
  {
    href: "/communities",
    title: "Communities",
    description:
      "Forlorn, Warden Nation, and collaborative Minecraft spaces built around experimentation.",
    accent: "pink",
  },
  {
    href: "/channels",
    title: "Channels",
    description:
      "Twitch, Kick, YouTube, GitHub, and the platforms that connect the wider ecosystem.",
    accent: "indigo",
  },
] satisfies {
  href: string;
  title: string;
  description: string;
  accent: Accent;
}[];

export const partners = [
  {
    name: "Nick",
    description: "Streams, gaming content, and creator collaborations.",
    links: [
      { label: "Twitch", url: "https://www.twitch.tv/nick_the_clownttv" },
      { label: "YouTube", url: "https://www.youtube.com/@nicktheclown" },
    ],
  },
  {
    name: "Sage",
    description: "Gaming streams and community collaborations.",
    links: [{ label: "Twitch", url: "https://www.twitch.tv/coolblacksage04?csr=a" }],
  },
  {
    name: "Kag",
    description: "Gaming content, streams, and creator energy.",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/@WildKagmaster" },
      { label: "Twitch", url: "https://www.twitch.tv/wildkagmaster" },
    ],
  },
  {
    name: "Justbetter",
    description: "Streams, gaming content, and collaborations.",
    links: [
      { label: "Twitch", url: "https://www.twitch.tv/dreamz7252" },
      { label: "YouTube", url: "https://www.youtube.com/@Dreamz_18" },
    ],
  },
  {
    name: "Saint Alex",
    description: "Content creator and collaborator.",
    links: [{ label: "YouTube", url: "https://www.youtube.com/@Saint_.al3x" }],
  },
  {
    name: "Chaosduck",
    description: "Gaming creator and community collaborator.",
    links: [{ label: "YouTube", url: "https://www.youtube.com/@Chaosduck" }],
  },
  {
    name: "Siren",
    description: "Streams, short-form content, and creator collaborations.",
    links: [
      { label: "TikTok", url: "https://vm.tiktok.com/ZN9FSndxwhC4L-Cvdbj/" },
      { label: "Twitch", url: "https://www.twitch.tv/sirenkissfromhell0" },
    ],
  },
  {
    name: "The Mystical Vineyard",
    description: "A place for gamers, nerds, streamers, and good community energy.",
    links: [{ label: "Discord", url: "https://discord.gg/B3H9NNTP6T" }],
  },
];

export const platforms = [
  {
    name: "GitHub",
    url: "https://github.com/BlueGamerwolf",
    description: "Repositories, Minecraft mods, backend systems, APIs, and experiments.",
    accent: "cyan",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@blue_gamerwolf",
    description: "Development showcases, mod previews, gameplay videos, tutorials, and updates.",
    accent: "red",
  },
  {
    name: "Twitch",
    url: "https://twitch.tv/blue_gamerwolf",
    description: "Livestreams for Minecraft development, modpacks, testing, and community work.",
    accent: "purple",
  },
  {
    name: "Kick",
    url: "https://kick.com/blue-gamerwolf",
    description: "Alternative livestream platform for gameplay, coding sessions, and experiments.",
    accent: "green",
  },
] satisfies {
  name: string;
  url: string;
  description: string;
  accent: Accent;
}[];

export const communities = [
  {
    name: "Forlorn",
    url: "https://discord.gg/7bBA9fj6bT",
    description:
      "A modded Minecraft community focused on advanced gameplay, experimentation, and collaborative worldbuilding.",
    accent: "pink",
  },
  {
    name: "Warden Nation",
    url: "https://discord.gg/784g7mNtHC",
    description:
      "A community around Blue Gamerwolf channels, fan projects, content, and Minecraft discussion.",
    accent: "cyan",
  },
] satisfies {
  name: string;
  url: string;
  description: string;
  accent: Accent;
}[];

export const vrcFeatures = [
  {
    title: "Avatars",
    description: "Custom avatars, edits, optimized models, and experimental avatar systems.",
    accent: "cyan",
  },
  {
    title: "Worlds",
    description: "Favorite hangouts, showcase worlds, horror maps, events, and social spaces.",
    accent: "purple",
  },
  {
    title: "Communities",
    description: "Friends, events, clubs, communities, and collaborative VR experiences.",
    accent: "pink",
  },
  {
    title: "Experiments",
    description: "VR social projects, testing sessions, and playful interaction ideas.",
    accent: "orange",
  },
] satisfies {
  title: string;
  description: string;
  accent: Accent;
}[];
