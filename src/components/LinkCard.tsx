import { ArrowUpRight } from "lucide-react";
import type { HubLink } from "@/data/links";

type LinkCardProps = {
  item: HubLink;
};

export function LinkCard({ item }: LinkCardProps) {
  const Icon = item.icon;
  const isInternal = item.href.startsWith("#") || item.href.startsWith("mailto:");

  return (
    <a
      href={item.href}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noreferrer"}
      className={[
        "group relative overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1",
        item.featured
          ? "border-cyan-300/35 bg-cyan-300/[0.08] shadow-[0_0_60px_rgba(34,211,238,0.18)] md:col-span-2"
          : "border-white/10 bg-white/[0.04] hover:border-cyan-300/25 hover:bg-white/[0.065]",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_42%)] opacity-0 transition group-hover:opacity-100" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="grid size-13 place-items-center rounded-2xl border border-white/10 bg-black/35">
              <Icon className="size-6 text-cyan-100" />
            </div>

            <div>
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
    </a>
  );
}