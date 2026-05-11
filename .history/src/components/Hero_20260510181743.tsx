import type { ComponentType } from "react";
import {
  ArrowRight,
  Cpu,
  Gamepad2,
  Signal,
  Terminal,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import { stats } from "@/data/links";

function getBusinessUrl() {
  if ("business" in siteConfig && siteConfig.business?.url) {
    return siteConfig.business.url;
  }

  if ("businessUrl" in siteConfig && siteConfig.businessUrl) {
    return siteConfig.businessUrl;
  }

  return "https://lltechsolutions.ca";
}

export function Hero() {
  const businessUrl = getBusinessUrl();

  return (
    <section
      id="dashboard"
      className="relative isolate overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="absolute inset-0 -z-30 bg-[#020617]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.24),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.13),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.055)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.95)]" />
            System Online
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            <Signal className="size-4" />
            Command Center Active
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

            <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-300" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>

              <p className="truncate text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                /home/tate/command-center
              </p>
            </div>

            <p className="mb-4 font-mono text-sm text-cyan-200">
              &gt; booting personal brand interface...
            </p>

            <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Tate OS
              <span className="block bg-gradient-to-r from-cyan-200 via-violet-200 to-emerald-200 bg-clip-text text-transparent">
                Digital Command Center
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {siteConfig.name}’s central hub for tech, business, gaming,
              content, projects, and everything being built online.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#links"
                className="group inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.32)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70"
              >
                Open Dashboard
                <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href={businessUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open L&L Tech Solutions in a new tab"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
              >
                L&amp;L Tech
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  Operator Profile
                </p>
                <Cpu className="size-5 text-cyan-200" />
              </div>

              <div className="grid gap-3">
                <SystemLine label="Name" value="Tate Byers" />
                <SystemLine label="Role" value="Founder / Developer / Creator" />
                <SystemLine label="Business" value="L&L Tech Solutions" />
                <SystemLine label="Mode" value="Building" />
                <SystemLine label="Location" value="Alberta, Canada" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <MiniPanel
                icon={Terminal}
                title="Tech"
                value="Systems"
                description="Websites, support, digital builds."
              />
              <MiniPanel
                icon={Gamepad2}
                title="Creator"
                value="Gaming"
                description="Clips, media, future streams."
              />
              <MiniPanel
                icon={Zap}
                title="Status"
                value="Online"
                description="Personal hub is active."
              />
              <MiniPanel
                icon={Signal}
                title="Portal"
                value="Open"
                description="All links routed here."
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.065]"
              >
                <Icon className="mb-4 size-5 text-cyan-200" />
                <p className="font-black uppercase tracking-[0.16em] text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SystemLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        {label}
      </span>
      <span className="text-right text-sm font-bold text-slate-100">
        {value}
      </span>
    </div>
  );
}

type MiniPanelProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  value: string;
  description: string;
};

function MiniPanel({ icon: Icon, title, value, description }: MiniPanelProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-300/25 hover:bg-white/[0.065]">
      <div className="mb-4 flex items-center justify-between">
        <Icon className="size-5 text-violet-200" />
        <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
      </div>
      <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}