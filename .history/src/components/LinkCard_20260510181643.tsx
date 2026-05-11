import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { HubLink } from "@/data/links";
import { cn } from "@/lib/utils";

type LinkCardProps = {
  item: HubLink;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isMailHref(href: string) {
  return href.startsWith("mailto:");
}

function isHashHref(href: string) {
  return href.startsWith("#");
}

export function LinkCard({ item }: LinkCardProps) {
  const Icon = item.icon;
  const isExternal = item.external ?? isExternalHref(item.href);
  const isMail = isMailHref(item.href);
  const isHash = isHashHref(item.href);

  const cardClassName = cn(
    "group relative overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50",
    item.featured
      ? "border-cyan-300/35 bg-cyan-300/[0.08] shadow-[0_0_60px_rgba(34,211,238,0.18)] md:col-span-2"
      : "border-white/10 bg-white/[0.04] hover:border-cyan-300/25 hover:bg-white/[0.065]",
  );

  const cardContent = (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_42%)] opacity-0 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="flex min-w-0 items-center gap-4">
            <div className="grid size-13 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/35 shadow-[0_0_35px_rgba(34,211,238,0.08)] transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10">
              <Icon className="size-6 text-cyan-100" />
            </div>

            <div className="min-w-0">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-200/80">
                {item.systemLabel}
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
                {item.title}
              </h3>
            </div>
          </div>

          <ArrowUpRight className="size-5 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-200" />
        </div>

        <p className="min-h-20 text-sm leading-7 text-slate-400">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="text-sm font-black text-cyan-100">
            {item.label}
          </span>

          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200">
            {item.status}
          </span>
        </div>
      </div>
    </>
  );

  if (isExternal || isMail || isHash) {
    return (
      <a
        href={item.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={`Open ${item.title}`}
        className={cardClassName}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-label={`Open ${item.title}`}
      className={cardClassName}
    >
      {cardContent}
    </Link>
  );
}