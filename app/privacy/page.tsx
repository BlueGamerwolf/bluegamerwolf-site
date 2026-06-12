import type { Metadata } from "next";
import { Hero, SiteShell } from "@/app/components/site-frame";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Blue Gamerwolf coded products, projects, mods, websites, tools, and related services.",
};

const sections = [
  {
    title: "Scope",
    body: "This Privacy Policy applies to any and all Blue Gamerwolf coded products, including websites, mods, tools, APIs, bots, hosted services, downloads, repositories, and related project materials unless a specific product provides its own separate privacy policy.",
  },
  {
    title: "Information You Provide",
    body: "You may provide information when you contact Blue Gamerwolf, submit feedback, open issues or pull requests, join connected communities, use support channels, or interact with product features. This may include your name, username, email address, message content, attachments, and any details you choose to share.",
  },
  {
    title: "Technical Information",
    body: "Products may process technical information needed to operate, secure, debug, or improve them. This can include IP address, browser or device details, timestamps, request metadata, error logs, crash details, server identifiers, account IDs from connected platforms, and basic usage events.",
  },
  {
    title: "Third-Party Platforms",
    body: "Some products may rely on third-party platforms such as GitHub, Discord, Minecraft-related services, VRChat-related services, hosting providers, analytics providers, or API integrations. Those services may collect and process information under their own privacy policies and terms.",
  },
  {
    title: "How Information Is Used",
    body: "Information is used to operate products, provide features, respond to messages, review bug reports, maintain security, prevent abuse, troubleshoot issues, improve projects, comply with platform rules, and meet legal obligations when required.",
  },
  {
    title: "Sharing",
    body: "Blue Gamerwolf does not sell personal information. Information may be shared when needed to run products, work with service providers, comply with law, protect rights and safety, respond to abuse, or interact with public platforms where your submissions are already visible.",
  },
  {
    title: "Public Content",
    body: "Content you post publicly, such as GitHub issues, pull requests, comments, Discord messages, usernames, repository activity, or community posts, may be visible to others depending on the platform and channel where you posted it.",
  },
  {
    title: "Retention",
    body: "Information is kept only as long as reasonably needed for the purposes described here, including product operation, security, debugging, records, backups, abuse prevention, and legal compliance. Public platform content may remain available according to the platform's own controls.",
  },
  {
    title: "Security",
    body: "Reasonable steps are taken to protect information, but no website, mod, tool, API, server, or internet-connected service can be guaranteed fully secure. Do not submit sensitive information unless it is necessary for the product or support request.",
  },
  {
    title: "Your Choices",
    body: "You can avoid providing optional information, stop using products, remove public content where the platform allows it, or contact Blue Gamerwolf with privacy questions or deletion requests. Some information may need to be retained for security, legal, backup, or abuse-prevention reasons.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to bluemoonsmp1231@gmail.com.",
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell footerLabel="Privacy Policy">
      <Hero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How information is handled across Blue Gamerwolf coded products."
        description="This policy covers websites, mods, APIs, tools, bots, services, downloads, repositories, and other software projects made available by Blue Gamerwolf."
        accent="purple"
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
            <h2 className="text-2xl font-black text-purple-200">{section.title}</h2>
            <p className="mt-3 leading-8 text-zinc-300">{section.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
