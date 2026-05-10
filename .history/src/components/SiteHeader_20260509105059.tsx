import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Links", href: "#links" },
  { label: "Projects", href: "#projects" },
  { label: "Creator", href: "#creator" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition group-hover:scale-105">
            <span className="text-sm font-black tracking-tight text-cyan-200">
              TB
            </span>
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-wide text-white">
              {siteConfig.name}
            </p>
            <p className="text-xs text-slate-400">Personal Tech Hub</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.businessUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.12)] transition hover:border-cyan-200/60 hover:bg-cyan-300/15 sm:inline-flex"
        >
          L&L Tech
        </a>
      </div>
    </header>
  );
}