import Link from "next/link";
import { Terminal } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Links", href: "#links" },
  { label: "Systems", href: "#systems" },
  { label: "Creator", href: "#creator" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/10 bg-[#020617]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-xl border border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.22)] transition group-hover:scale-105">
            <Terminal className="size-5 text-cyan-200" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-black tracking-[0.22em] text-white">
              TATE_OS
            </p>
            <p className="text-xs font-medium text-cyan-200/75">
              {siteConfig.domain.replace("https://", "")}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.businessUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-emerald-200 shadow-[0_0_35px_rgba(16,185,129,0.12)] transition hover:border-emerald-200/60 hover:bg-emerald-300/15 sm:inline-flex"
        >
          L&L Online
        </a>
      </div>
    </header>
  );
}