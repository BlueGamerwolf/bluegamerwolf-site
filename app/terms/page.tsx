import type { Metadata } from "next";
import { Hero, SiteShell } from "@/app/components/site-frame";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Blue Gamerwolf coded products, projects, mods, websites, tools, and related services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using any Blue Gamerwolf coded product, including websites, mods, tools, APIs, bots, software, hosted services, downloads, repositories, or related project materials, you agree to these Terms of Service. If you do not agree, do not use the products.",
  },
  {
    title: "Products Covered",
    body: "These terms apply to any and all coded products created, maintained, published, hosted, or distributed by Blue Gamerwolf unless a specific product provides its own separate written terms. Separate open source licenses may also apply to code repositories and downloadable software.",
  },
  {
    title: "Permitted Use",
    body: "You may use the products for lawful personal, community, development, and gameplay purposes. You may not misuse the products, interfere with their operation, bypass access controls, attack infrastructure, scrape or automate abusive traffic, distribute malware, impersonate others, or use the products to harm people, communities, platforms, or services.",
  },
  {
    title: "Accounts, Access, and Integrations",
    body: "Some products may connect to third-party platforms, servers, APIs, accounts, Discord communities, GitHub repositories, Minecraft services, VRChat-related spaces, or other integrations. You are responsible for following the rules and terms of those third-party services when using connected features.",
  },
  {
    title: "Availability and Changes",
    body: "Products may change, break, be rate limited, lose support, move, or be discontinued at any time. Features may be added, removed, renamed, rebuilt, or restricted without notice, especially for experimental projects, public tests, mods, and developer tools.",
  },
  {
    title: "User Content and Contributions",
    body: "If you submit feedback, bug reports, pull requests, issue comments, messages, files, or other content, you confirm that you have the right to share it. You also allow Blue Gamerwolf to use that submission to operate, improve, document, debug, publish, and maintain the related product.",
  },
  {
    title: "Ownership and Licenses",
    body: "Blue Gamerwolf keeps ownership of original branding, site content, project names, assets, and software unless otherwise stated. Code or assets released under a specific license are governed by that license. Do not copy, rehost, sell, or claim Blue Gamerwolf products or branding as your own without permission.",
  },
  {
    title: "No Warranty",
    body: "Products are provided as is and as available. Blue Gamerwolf does not guarantee that any product will be secure, uninterrupted, error free, compatible with your setup, available forever, or suitable for a particular purpose. You use all products at your own risk.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent allowed by law, Blue Gamerwolf is not responsible for damages, data loss, account issues, server issues, gameplay problems, lost profits, downtime, corrupted files, third-party platform actions, or other losses related to your use of the products.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be sent to bluemoonsmp1231@gmail.com.",
  },
];

export default function TermsPage() {
  return (
    <SiteShell footerLabel="Terms of Service">
      <Hero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Rules for using Blue Gamerwolf coded products."
        description="These terms cover websites, mods, APIs, tools, bots, services, downloads, repositories, and other software projects made available by Blue Gamerwolf."
        accent="cyan"
      />

      <LegalContent updated="June 12, 2026" sections={sections} />
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
            <h2 className="text-2xl font-black text-cyan-200">{section.title}</h2>
            <p className="mt-3 leading-8 text-zinc-300">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
