import { ArrowUpRight } from "lucide-react";
import type { HubLink } from "@/data/links";

type LinkCardProps = {
  item: HubLink;
};

export function LinkCard({ item }: LinkCardProps) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target={item.href.startsWith("#") || item.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={item.href.startsWith("#") || item.href.startsWith("mailto:") ? undefined : "noreferrer"}
      className={[
        "group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1",
        item.featured
          ? "border-cyan-300/35 bg-cyan-300/[0.075] shadow-[0_0_55px_rgba(34,211,238,0.16)]"
          : "border-white/10 bg-white/[0.045] hover:border-cyan-300/25 hover:bg-white/[0.07]",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_42%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="grid size-13 place-items-center rounded-2xl border border-white/10 bg-black/30">
            <Icon className="size-6 text-cyan-100" />
          </div>

          <ArrowUpRight className="size-5 text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-200" />
        </div>

        <h3 className="text-xl font-black tracking-tight text-white">
          {item.title}
        </h3>

        <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
          {item.description}
        </p>

        <p className="mt-6 text-sm font-black text-cyan-100">{item.label}</p>
      </div>
    </a>
  );
}