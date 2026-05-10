import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LinkCard } from "@/components/LinkCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { hubLinks, projects } from "@/data/links";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />
      <Hero />

      <section id="links" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Main Links"
            title="Everything important, one click away."
            description="A clean personal hub for my business, social platforms, creator content, gaming projects, and contact links."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hubLinks.map((item) => (
              <LinkCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Work"
            title="Projects, brands, and digital builds."
            description="A snapshot of what I’m building across business, websites, tech systems, gaming, and creator content."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="creator" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Creator Side
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Gaming, tech clips, behind-the-scenes, and future content.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 leading-8 text-slate-300 backdrop-blur-xl sm:p-8">
            <p>
              This site gives my content a proper home instead of scattering
              everything across random platforms. TikTok, YouTube, Facebook,
              projects, and business updates can all connect back here.
            </p>

            <p className="mt-5">
              The direction is simple: bright gamer energy, serious tech
              branding, and a professional first impression for anyone checking
              out what I do.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%),rgba(255,255,255,0.045)] p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:p-12">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Want to connect?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            For business, web design, tech services, collaborations, content,
            or anything else, reach out through my main contact link.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.28)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              Email Tate
            </a>

            <a
              href={siteConfig.businessUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/10"
            >
              Visit L&L Tech Solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}