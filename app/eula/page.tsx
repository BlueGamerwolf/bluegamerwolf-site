import type { Metadata } from "next";
import { Hero, SiteShell } from "@/app/components/site-frame";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description:
    "End User License Agreement for Blue Gamerwolf products, mods, tools, websites, and related services.",
};

const sections = [
  {
    title: "License Grant",
    body: `Subject to compliance with this Agreement, Blue Gamerwolf grants users a limited, non-exclusive, non-transferable, revocable license to use our products for their intended purposes.

This license allows users to use legally obtained software, mods, tools, and digital content, as well as create compatible content where permitted.

Ownership of all Blue Gamerwolf products and intellectual property remains with Blue Gamerwolf.`,
  },
  {
    title: "Ownership and Intellectual Property",
    body: `All Blue Gamerwolf products, including software, source code, mods, tools, websites, designs, artwork, textures, models, sounds, logos, branding, and documentation remain the property of Blue Gamerwolf unless otherwise stated.

Users may not claim ownership of Blue Gamerwolf creations or present them as their own.`,
  },
  {
    title: "Restrictions and Permissions",
    body: `Users may not reverse engineer, redistribute complete copies, sell, remove ownership information, or falsely claim to be the creator of Blue Gamerwolf products.

Blue Gamerwolf supports community creativity. Users may create addons, extensions, compatibility patches, integrations, plugins, datapacks, and tools that interact with Blue Gamerwolf products where permitted.

Community projects must not imply official endorsement unless approved by Blue Gamerwolf.`,
  },
  {
    title: "Minecraft Mods and Community Addons",
    body: `Blue Gamerwolf Minecraft mods are designed to support creativity and community development.

Users may create addons, compatibility mods, datapacks, configurations, expansions, modpack support, tutorials, showcases, and other content that works with Blue Gamerwolf Minecraft mods.

Users may not:
- Reupload complete copies of Blue Gamerwolf mods.
- Redistribute modified versions without permission.
- Include protected source code, assets, textures, models, sounds, or other content without permission.
- Claim unofficial addons are official Blue Gamerwolf products.

Your own addon creations remain your property.`,
  },
  {
    title: "User-Created Content",
    body: `Users retain ownership of original content they create, including original code, textures, models, configurations, documentation, and artwork.

By publicly sharing content related to Blue Gamerwolf products, users allow Blue Gamerwolf to showcase or reference that content for community highlights, documentation, or promotional purposes.`,
  },
  {
    title: "Third-Party Content",
    body: `Some Blue Gamerwolf products may use or interact with third-party software, games, APIs, libraries, platforms, or services.

Third-party content remains owned by its respective creators and follows their own licenses and agreements.`,
  },
  {
    title: "Updates and Changes",
    body: `Blue Gamerwolf may update, modify, improve, or discontinue products at any time.

Updates may include bug fixes, security improvements, compatibility changes, and new features.`,
  },
  {
    title: "Termination",
    body: `Your license may be terminated if you violate this Agreement, distribute unauthorized copies, abuse services, or use Blue Gamerwolf products for illegal purposes.

After termination, affected products must no longer be used.`,
  },
  {
    title: "Disclaimer of Warranty",
    body: `Blue Gamerwolf products are provided "as is" without warranties of any kind.

Blue Gamerwolf does not guarantee products will always work without errors, remain compatible with future updates, or work on every system.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, Blue Gamerwolf is not responsible for data loss, hardware damage, crashes, server issues, lost progress, or problems caused by third-party software.`,
  },
  {
    title: "Privacy",
    body: `Use of Blue Gamerwolf websites, software, and services may also be governed by our Privacy Policy.

The Privacy Policy explains how information may be collected, used, and protected.`,
  },
  {
    title: "Changes to This Agreement",
    body: `Blue Gamerwolf may update this EULA at any time.

Continued use of Blue Gamerwolf products after changes are published means you accept the updated Agreement.`,
  },
  {
    title: "Contact Information",
    body: `Blue Gamerwolf

Website:
https://www.voidstone.dev

© 2026 Blue Gamerwolf. All rights reserved.`,
  },
];

export default function EulaPage() {
  return (
    <SiteShell>
      <Hero
        title="End User License Agreement"
        subtitle="EULA for Blue Gamerwolf products, mods, tools, and services"
        description="The terms governing the use of Blue Gamerwolf products, mods, tools, and services."
      />

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-12">
        <p className="text-sm text-muted-foreground">
          Effective Date: July 23, 2026
        </p>

        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="mb-3 text-xl font-semibold">
              {section.title}
            </h2>

            <p className="whitespace-pre-line text-muted-foreground leading-7">
              {section.body}
            </p>
          </section>
        ))}
      </main>
    </SiteShell>
  );
}