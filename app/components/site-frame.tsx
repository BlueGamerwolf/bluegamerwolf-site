import Link from "next/link";
import type { ReactNode } from "react";
import { BlackHoleBackground } from "@/app/components/black-hole-background";
import { accentClasses, navItems, type Accent } from "@/app/lib/site-data";

type SiteShellProps = {
  active?: string;
  children: ReactNode;
  footerLabel?: string;
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  description?: string;
  accent?: Accent;
  actions?: ReactNode;
};

type CardLinkProps = {
  href: string;
  title: string;
  description: string;
  accent?: Accent;
  external?: boolean;
  children?: ReactNode;
};

export function SiteShell({
  active,
  children,
  footerLabel = "Voidstone Ecosystem",
}: SiteShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <SiteBackground />
      <SiteNav active={active} />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 lg:px-8">
        {children}
      </div>
      <SiteFooter label={footerLabel} />
    </main>
  );
}

export function SiteNav({ active }: { active?: string }) {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="group inline-flex w-fit items-center gap-3 text-base font-black tracking-wide text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-sm text-cyan-200">
            BG
          </span>
          <span className="text-purple-200 transition group-hover:text-cyan-200">
            Blue Gamerwolf
          </span>
        </Link>

        <div className="flex gap-2 overflow-x-auto pb-1 text-sm lg:justify-end lg:overflow-visible lg:pb-0">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg border px-3 py-2 transition ${
                  isActive
                    ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100"
                    : "border-transparent text-zinc-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function SiteBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <BlackHoleBackground />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,32,0.12)_0%,rgba(5,7,10,0.18)_48%,rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent_0%,rgba(5,7,10,0.08)_34%,rgba(5,7,10,0.58)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
    </div>
  );
}

export function Hero({
  eyebrow = "Voidstone Network",
  title,
  subtitle,
  description,
  accent = "purple",
  actions,
}: HeroProps) {
  const colors = accentClasses[accent];

  return (
    <section className="mx-auto max-w-5xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.28em] ${colors.text}`}>
        {eyebrow}
      </p>
      <h1 className="mt-5 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      <p className={`mx-auto mt-6 max-w-3xl text-xl font-semibold sm:text-2xl ${colors.text}`}>
        {subtitle}
      </p>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
          {description}
        </p>
      )}
      {actions && <div className="mt-8 flex flex-wrap justify-center gap-3">{actions}</div>}
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  accent = "purple",
}: {
  title: string;
  description?: string;
  accent?: Accent;
}) {
  return (
    <div className="mb-8">
      <h2 className={`text-3xl font-black sm:text-4xl ${accentClasses[accent].text}`}>
        {title}
      </h2>
      {description && <p className="mt-3 max-w-2xl text-zinc-400">{description}</p>}
    </div>
  );
}

export function ActionLink({
  href,
  children,
  accent = "purple",
  external = false,
}: {
  href: string;
  children: ReactNode;
  accent?: Accent;
  external?: boolean;
}) {
  const colors = accentClasses[accent];

  return (
    <LinkOrAnchor
      href={href}
      external={external}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-3 text-sm font-bold transition ${colors.border} ${colors.bg} ${colors.text} ${colors.hover}`}
    >
      {children}
    </LinkOrAnchor>
  );
}

export function CardLink({
  href,
  title,
  description,
  accent = "purple",
  external = false,
  children,
}: CardLinkProps) {
  const colors = accentClasses[accent];

  return (
    <LinkOrAnchor
      href={href}
      external={external}
      className={`group block h-full rounded-lg border bg-black/45 p-6 text-left shadow-2xl shadow-black/20 backdrop-blur transition duration-200 hover:-translate-y-1 ${colors.border} ${colors.hover}`}
    >
      <h3 className={`text-2xl font-black ${colors.text}`}>{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{description}</p>
      {children}
    </LinkOrAnchor>
  );
}

export function InfoCard({
  title,
  description,
  accent = "purple",
  children,
}: {
  title: string;
  description: string;
  accent?: Accent;
  children?: ReactNode;
}) {
  const colors = accentClasses[accent];

  return (
    <div
      className={`h-full rounded-lg border bg-black/45 p-6 text-left shadow-2xl shadow-black/20 backdrop-blur ${colors.border}`}
    >
      <h3 className={`text-2xl font-black ${colors.text}`}>{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{description}</p>
      {children}
    </div>
  );
}

export function EmptyState({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/45 p-6 text-zinc-400">
      {children}
    </div>
  );
}

function LinkOrAnchor({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className: string;
  children: ReactNode;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function SiteFooter({ label }: { label: string }) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-8 text-center text-sm text-zinc-500">
      &copy; 2026 Blue Gamerwolf - {label}
    </footer>
  );
}
