import Link from "next/link";
import { ExternalLink, Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Links", href: "#links" },
  { label: "Systems", href: "#systems" },
  { label: "Creator", href: "#creator" },
  { label: "Contact", href: "#contact" },
];

function getDisplayDomain(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function getBusinessUrl() {
  if ("business" in siteConfig && siteConfig.business?.url) {
    return siteConfig.business.url;
  }

  if ("businessUrl" in siteConfig && siteConfig.businessUrl) {
    return siteConfig.businessUrl;
  }

  return "https://lltechsolutions.ca";
}

export function SiteHeader() {
  const businessUrl = getBusinessUrl();
  const displayDomain = getDisplayDomain(siteConfig.domain);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/10 bg-[#020617]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="group flex items-center gap-3"
        >
          <div className="grid size-11 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.22)] transition group-hover:scale-105 group-hover:border-cyan-200/70 group-hover:bg-cyan-300/15">
            <Terminal className="size-5 text-cyan-200" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-black tracking-[0.22em] text-white">
              TATE_OS
            </p>
            <p className="text-xs font-medium text-cyan-200/75">
              {displayDomain}
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={businessUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open L&L Tech Solutions in a new tab"
          className="hidden items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-200 shadow-[0_0_35px_rgba(16,185,129,0.12)] transition hover:border-emerald-200/60 hover:bg-emerald-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50 sm:inline-flex"
        >
          L&amp;L Online
          <ExternalLink className="size-3.5" />
        </a>
      </div>
    </header>
  );
}