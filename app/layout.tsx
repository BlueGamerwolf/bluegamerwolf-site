import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Blue Gamerwolf",
    template: "%s | Blue Gamerwolf",
  },
  description:
    "Warden-inspired Minecraft modding, Sculk-powered systems, Forge and Fabric development, backend engineering, and experimental void-forged ecosystems by Blue Gamerwolf.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Blue Gamerwolf | Voidstone",
    description:
      "A dark Minecraft modding ecosystem forged through Sculk, Warden energy, and experimental systems.",
    url: "https://www.voidstone.dev",
    siteName: "Voidstone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Gamerwolf | Voidstone",
    description:
      "Forge and Fabric mods, Warden vibes, backend systems, and void-forged creations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
