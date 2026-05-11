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
  title: "Blue Gamerwolf",
  description:
    "Warden-inspired Minecraft modding, Sculk-powered systems, Forge & Fabric development, backend engineering, and experimental void-forged ecosystems by Blue Gamerwolf.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Blue Gamerwolf | Voidstone",
    description:
      "Enter the depths of Voidstone — a dark Minecraft modding ecosystem forged through Sculk, Warden energy, and experimental systems.",
    url: "https://www.voidstone.dev",
    siteName: "Voidstone",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Voidstone Banner",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blue Gamerwolf | Voidstone",
    description:
      "Forge & Fabric mods, Warden vibes, backend systems, and void-forged creations.",
    images: ["/banner.png"],
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
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
