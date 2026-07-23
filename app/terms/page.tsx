import type { Metadata } from "next";
import { Hero, SiteShell } from "@/app/components/site-frame";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Voidstone and Blue Gamerwolf projects, software, mods, websites, tools, communities, and hosted services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing, downloading, installing, joining, or using any Voidstone or Blue Gamerwolf project, including websites, Minecraft mods, software, bots, APIs, tools, communities, servers, repositories, or other digital services, you agree to these Terms of Service. If you do not agree with these terms, you should not use the related products or services.",
  },
  {
    title: "Services Covered",
    body: "These Terms apply to projects created, maintained, published, hosted, or distributed by Blue Gamerwolf and Voidstone. This includes but is not limited to websites, applications, Minecraft modifications, Discord bots, development tools, APIs, game-related projects, community services, downloads, and experimental software.",
  },
  {
    title: "Acceptable Use",
    body: "You may use our products for personal use, communities, development, gaming, and other lawful purposes. You may not abuse, exploit, reverse engineer protected systems, bypass security features, disrupt services, attack infrastructure, distribute malicious software, impersonate Blue Gamerwolf or Voidstone, or use our products to harm users, communities, platforms, or services.",
  },
  {
    title: "Third-Party Services",
    body: "Some projects may interact with third-party platforms including Discord, GitHub, Minecraft services, CurseForge, Modrinth, VRChat, hosting providers, APIs, and other external services. Your use of these integrations is also subject to the rules and terms of those third-party providers.",
  },
  {
    title: "Mods, Games, and Community Projects",
    body: "Mods, plugins, servers, and game-related projects may change gameplay, interact with other software, or depend on external libraries and services. Compatibility, performance, and availability are not guaranteed. Updates, removals, balance changes, and breaking changes may occur at any time.",
  },
  {
    title: "Accounts and Access",
    body: "Some services may require accounts, permissions, authentication, or access through external platforms. You are responsible for protecting your accounts and following the rules of any platform connected to our services. Access may be limited, suspended, or removed if misuse or abuse occurs.",
  },
  {
    title: "User Content and Feedback",
    body: "If you submit suggestions, bug reports, issues, pull requests, files, artwork, feedback, or other contributions, you confirm that you have permission to provide them. You allow Blue Gamerwolf and Voidstone to use those submissions to improve, maintain, document, test, and support related projects.",
  },
  {
    title: "Ownership and Licensing",
    body: "All original branding, names, logos, designs, documentation, and original content created by Blue Gamerwolf or Voidstone remain the property of their respective owners unless a different license is provided. Software, code, and assets released under open source or third-party licenses remain governed by those licenses.",
  },
  {
    title: "Redistribution and Modification",
    body: "You may not sell, claim ownership of, redistribute, reupload, or represent Voidstone or Blue Gamerwolf products as your own unless permission is provided or the applicable license allows it. Modifications and forks must follow the license terms provided with the project.",
  },
  {
    title: "Availability and Changes",
    body: "Projects may be updated, changed, paused, moved, discontinued, or removed at any time. Experimental features, beta releases, public tests, and development builds may contain bugs, unfinished features, or compatibility issues.",
  },
  {
    title: "No Warranty",
    body: "All products and services are provided \"as is\" and \"as available\". Blue Gamerwolf and Voidstone do not guarantee that services will always be secure, available, error-free, compatible, or meet your expectations.",
  },
  {
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Blue Gamerwolf and Voidstone are not responsible for damages, lost data, account problems, server issues, downtime, corrupted files, gameplay changes, third-party service failures, or other losses resulting from use of our products.",
  },
  {
    title: "Privacy",
    body: "Some services may collect limited information required for functionality, such as usernames, account identifiers, usage information, logs, or technical data. Information collected is only used for operating, maintaining, improving, and securing services.",
  },
  {
    title: "Changes to These Terms",
    body: "These Terms of Service may be updated as projects, services, and legal requirements change. Continued use of our products after updates means you accept the revised terms.",
  },
  {
    title: "Contact",
    body: "Questions regarding these Terms of Service can be sent to bluemoonsmp1231@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <SiteShell footerLabel="Terms of Service">
      <Hero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Rules and guidelines for using Voidstone and Blue Gamerwolf projects."
        description="These terms cover websites, software, Minecraft mods, Discord bots, APIs, communities, hosted services, downloads, repositories, and other digital projects created by Blue Gamerwolf and Voidstone."
        accent="cyan"
      />

      <LegalContent updated="July 23, 2026" sections={sections} />
    </SiteShell>
  );
}

function LegalContent({
  updated,
  sections,
}: {
  updated: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <section className="mx-auto mt-14 max-w-4xl rounded-lg border border-white/10 bg-black/45 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
        Last updated: {updated}
      </p>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl font-black text-cyan-200">
              {section.title}
            </h2>

            <p className="mt-3 leading-8 text-zinc-300">
              {section.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
