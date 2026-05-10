import { ArrowRight, Gamepad2, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { stats } from "@/data/links";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_34%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_35%),linear-gradient(180deg,#050816_0%,#08111f_48%,#050816_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur">
            <Zap className="size-4 text-cyan-200" />
            Bright tech • gamer energy • professional brand
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Welcome to my personal hub for websites, tech projects, gaming
            content, business updates, and everything I’m building online.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#links"
              className="group inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.32)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View My Links
              <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-white/10"
            >
              See Projects
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
                >
                  <Icon className="mb-4 size-5 text-cyan-200" />
                  <p className="text-lg font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/20 via-violet-500/15 to-fuchsia-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-300" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                TateByers.ca
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_45%),rgba(255,255,255,0.04)] p-6">
              <div className="mb-6 grid size-16 place-items-center rounded-3xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_40px_rgba(34,211,238,0.22)]">
                <Gamepad2 className="size-8 text-cyan-100" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
                Personal Brand Hub
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
                One clean place for business, content, gaming, and projects.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Built to feel fast, modern, bright, tech-forward, and serious
                enough for clients, employers, collaborators, and followers.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-5 text-violet-200" />
                  <p className="text-sm font-bold text-white">
                    Founder • Developer • Creator • Gamer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}