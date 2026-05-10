import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LinkCard } from "@/components/LinkCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteHeader } from "@/components/SiteHeader";
import { hubLinks, projects } from "@/data/links";
import { siteConfig } from "@/lib/site";
import { Mail, Terminal } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <SiteHeader />
      <Hero />

      <section id="links" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <CommandTitle
            eyebrow="LINK ROUTER"
            title="All channels routed through one command center."
            description="Business, socials, creator platforms, gaming projects, contact, and everything important connected in one custom personal hub."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hubLinks.map((item) => (
              <LinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="systems" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <CommandTitle
            eyebrow="ACTIVE SYSTEMS"
            title="What I’m building, running, testing, and growing."
            description="This is the project layer: business work, experimental builds, creator content, and everything that becomes part of the TateByers.ca ecosystem."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="creator" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-6 grid size-14 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10">
              <Terminal className="size-7 text-cyan-200" />
            </div>

            <p className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              CREATOR_MODE
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Gaming, content, tech clips, and behind-the-scenes builds.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 leading-8 text-slate-300 backdrop-blur-xl sm:p-8">
            <p>
              TateByers.ca is not just a link page. It is the central system for
              everything connected to my name: business, content, gaming,
              websites, tech work, and future projects.
            </p>

            <p className="mt-5">
              The goal is simple: make every platform feel connected. Someone
              finds me on TikTok, Facebook, YouTube, L&L Tech, or through a
              project — this site becomes the clean home base.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <CreatorBadge label="Gaming" />
              <CreatorBadge label="Tech" />
              <CreatorBadge label="Business" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_45%),rgba(255,255,255,0.045)] p-8 shadow-[0_0_90px_rgba(16,185,129,0.10)] backdrop-blur-xl sm:p-10 lg:p-12">
          <div className="mb-7 flex items-center gap-3">
            <span className="size-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.95)]" />
            <p className="font-mono text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
              OPEN_CHANNEL
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Business, collabs, tech work, or creator stuff — send it through.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                For websites, tech services, collaborations, project ideas,
                gaming/content opportunities, or direct contact, use the main
                channel below.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_45px_rgba(16,185,129,0.25)] transition hover:-translate-y-0.5 hover:bg-emerald-200"
              >
                <Mail className="mr-2 size-4" />
                Email Tate
              </a>

              <a
                href={siteConfig.businessUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/10"
              >
                Visit L&L Tech Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

type CommandTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function CommandTitle({ eyebrow, title, description }: CommandTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="mb-4 inline-flex rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2">
        <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
          {eyebrow}
        </p>
      </div>

      <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function CreatorBadge({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
        {label}
      </p>
    </div>
  );
}