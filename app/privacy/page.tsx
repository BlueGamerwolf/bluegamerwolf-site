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
    body: "This Privacy Policy applies to Blue Gamerwolf and related projects, including Voidstone websites, mods, tools, APIs, bots, repositories, hosted services, downloads, community platforms, and other software or digital products created or maintained by Blue Gamerwolf. Individual projects may provide additional privacy notices when required.",
  },
  {
    title: "Information You Provide",
    body: "When using Blue Gamerwolf services, you may provide information such as your username, display name, email address, account identifiers, messages, feedback, bug reports, files, screenshots, issue reports, support requests, and other information you choose to submit.",
  },
  {
    title: "Automatically Collected Information",
    body: "Some services may automatically collect limited technical information required for operation and security. This may include IP address, browser type, device information, operating system details, timestamps, server information, error logs, crash reports, API requests, and basic usage information.",
  },
  {
    title: "Minecraft Mods and Game Services",
    body: "Minecraft mods and related projects may process technical game information required for functionality, including Minecraft version, mod configuration data, server information, player identifiers provided by Minecraft or hosting platforms, and gameplay-related data needed for features. Mods generally do not collect personal information unless explicitly stated.",
  },
  {
    title: "Discord Bots and Communities",
    body: "Discord bots and community tools may process information required to provide their features. This may include Discord usernames, user IDs, server IDs, roles, messages used by commands, moderation data, logs, tickets, and configuration settings. Data collection depends on the features enabled by each server owner.",
  },
  {
    title: "VRChat and Platform Integrations",
    body: "Projects connected to platforms such as VRChat, GitHub, Discord, Minecraft services, hosting providers, or other third-party platforms may process information provided through those integrations. Each platform manages its own data collection under its own privacy policy.",
  },
  {
    title: "Cookies and Website Technologies",
    body: "Websites operated by Blue Gamerwolf may use cookies, local storage, analytics tools, or similar technologies to provide functionality, remember preferences, improve performance, and understand basic usage patterns. You may disable cookies through your browser settings, but some features may not function correctly.",
  },
  {
    title: "How Information Is Used",
    body: "Information may be used to operate services, provide requested features, maintain security, respond to support requests, investigate bugs, improve software, prevent abuse, monitor reliability, maintain backups, and comply with applicable laws or platform requirements.",
  },
  {
    title: "Third-Party Services",
    body: "Blue Gamerwolf may use third-party services including GitHub, Discord, hosting providers, analytics services, payment providers, content delivery services, APIs, and other integrations. These providers may collect or process information according to their own privacy policies and terms.",
  },
  {
    title: "Information Sharing",
    body: "Blue Gamerwolf does not sell personal information. Information may be shared with service providers, platform providers, collaborators, or authorities when necessary to operate services, comply with legal obligations, protect users, investigate abuse, or enforce rules.",
  },
  {
    title: "Public Information",
    body: "Information you intentionally make public may be visible to others. This includes GitHub activity, public issues, pull requests, Discord usernames, community posts, comments, project contributions, and other content shared through public platforms.",
  },
  {
    title: "Data Storage and Retention",
    body: "Information is stored only for as long as reasonably necessary for providing services, maintaining security, debugging problems, keeping backups, preventing abuse, or meeting legal requirements. Some information stored by third-party platforms may remain available according to their policies.",
  },
  {
    title: "Security",
    body: "Reasonable measures are taken to protect collected information. However, no website, application, server, API, or internet service can guarantee complete security. Users should avoid submitting unnecessary sensitive information.",
  },
  {
    title: "Children and Younger Users",
    body: "Blue Gamerwolf projects may be used by younger audiences depending on the platform. Users should follow the age requirements and rules of the platforms they use. We do not knowingly request unnecessary personal information from children.",
  },
  {
    title: "Your Rights and Choices",
    body: "You may choose not to provide optional information, stop using services, remove public content where supported by the platform, or contact Blue Gamerwolf regarding privacy questions or deletion requests. Some information may need to be retained for security, backups, legal, or abuse-prevention purposes.",
  },
  {
    title: "Changes to This Policy",
    body: "This Privacy Policy may be updated from time to time as projects, services, or legal requirements change. Updated versions will replace previous versions and include a revised update date.",
  },
  {
    title: "Contact",
    body: "Questions, concerns, or privacy requests can be sent to bluemoonsmp1231@gmail.com.",
  },
];
