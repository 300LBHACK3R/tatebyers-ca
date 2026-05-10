import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/links";

type ProjectCardProps = {
  item: ProjectItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">
            {item.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
            {item.title}
          </h3>
        </div>

        <a
          href={item.href}
          target={item.href.startsWith("#") ? undefined : "_blank"}
          rel={item.href.startsWith("#") ? undefined : "noreferrer"}
          aria-label={`Open ${item.title}`}
          className="grid size-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/30 text-slate-400 transition group-hover:border-cyan-300/30 group-hover:text-cyan-100"
        >
          <ArrowUpRight className="size-5" />
        </a>
      </div>

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
    </article>
  );
}