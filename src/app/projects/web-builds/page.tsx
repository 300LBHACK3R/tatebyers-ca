import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Gauge, Globe2, Search } from "lucide-react";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.domain.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Web Build Projects | Tate Byers",
  description:
    "Custom website builds, landing pages, SEO-ready web systems, performance-focused interfaces, and digital portfolio work by Tate Byers.",
  alternates: {
    canonical: `${baseUrl}/projects/web-builds`,
  },
  openGraph: {
    title: "Web Build Projects | Tate Byers",
    description:
      "Custom website builds, landing pages, SEO-ready web systems, performance-focused interfaces, and digital portfolio work by Tate Byers.",
    url: `${baseUrl}/projects/web-builds`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tate Byers web build projects and digital systems.",
      },
    ],
  },
};

const webBuildItems = [
  {
    title: "Custom Business Websites",
    body: "Modern websites built to give small businesses a stronger online presence, better trust, cleaner navigation, and clearer lead flow.",
    icon: Globe2,
  },
  {
    title: "SEO-Ready Page Structures",
    body: "Clean metadata, proper headings, page hierarchy, semantic layouts, local search foundations, and Google-facing structure.",
    icon: Search,
  },
  {
    title: "Interactive Portfolio Interfaces",
    body: "Creative React and Next.js interfaces like Tate OS, Matrix mode, XP mode, terminal navigation, animated UI systems, and personal-brand hubs.",
    icon: Code2,
  },
  {
    title: "Performance-Focused Builds",
    body: "Fast-loading pages, optimized assets, clean component structure, responsive layouts, and deployment-ready production builds.",
    icon: Gauge,
  },
];

export default function WebBuildProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-20 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.14),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.1),transparent_36%)]" />

        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              Web Build Systems
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Custom Websites, Digital Systems, and Portfolio Interfaces.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Custom websites, business landing pages, SEO-ready structures,
              interactive interfaces, and high-performance digital systems built
              through Tate Byers and L&amp;L Tech Solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://lltechsolutions.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.24)] transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              >
                Visit L&amp;L Tech
                <ArrowRight className="ml-2 size-4" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              >
                Open Tate OS
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {webBuildItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-cyan-300/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 transition group-hover:bg-cyan-300/15">
                    <Icon className="size-6 text-cyan-200" />
                  </div>

                  <h2 className="text-xl font-black text-white">
                    {item.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-400">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}