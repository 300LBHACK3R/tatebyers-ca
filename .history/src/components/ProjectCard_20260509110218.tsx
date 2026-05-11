import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/links";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  const Icon = item.icon;
  const isInternal = item.href.startsWith("#");

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.065]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.14),transparent_42%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="grid size-13 place-items-center rounded-2xl border border-white/10 bg-black/35">
            <Icon className="size-6 text-violet-200" />
          </div>

          <a
            href={item.href}
            target={isInternal ? undefined : "_blank"}
            rel={isInternal ? undefined : "noreferrer"}
            aria-label={`Open ${item.title}`}
            className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/30 text-slate-400 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100"
          >
            <ArrowUpRight className="size-5" />
          </a>
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