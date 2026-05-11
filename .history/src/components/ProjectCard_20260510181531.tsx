import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/links";

type ProjectCardProps = {
  item: ProjectItem;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isMailHref(href: string) {
  return href.startsWith("mailto:");
}

export function ProjectCard({ item }: ProjectCardProps) {
  const Icon = item.icon;
  const isHashLink = item.href.startsWith("#");
  const isExternal = item.external ?? isExternalHref(item.href);
  const isMail = isMailHref(item.href);

  const linkClassName =
    "grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/30 text-slate-400 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50";

  const linkLabel = `Open ${item.title}`;

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.065]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_42%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="grid size-13 place-items-center rounded-2xl border border-white/10 bg-black/35 shadow-[0_0_35px_rgba(168,85,247,0.08)] transition group-hover:border-violet-300/30 group-hover:bg-violet-300/10">
            <Icon className="size-6 text-violet-200" />
          </div>

          {isExternal || isHashLink || isMail ? (
            <a
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={linkLabel}
              className={linkClassName}
            >
              <ArrowUpRight className="size-5" />
            </a>
          ) : (
            <Link
              href={item.href}
              aria-label={linkLabel}
              className={linkClassName}
            >
              <ArrowUpRight className="size-5" />
            </Link>
          )}
        </div>

        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-violet-200">
          {item.systemLabel}
        </p>

        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          {item.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-400">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-xs font-bold text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-200">
            {item.status}
          </span>
        </div>
      </div>
    </article>
  );
}