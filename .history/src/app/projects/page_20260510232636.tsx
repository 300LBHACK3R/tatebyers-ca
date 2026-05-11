import type { Metadata } from "next";
import Link from "next/link";
import Projects from "@/components/home/Projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects | Tate Byers",
  description:
    "Explore Tate Byers project categories including custom web builds, tech support, infrastructure systems, creator work, and digital projects.",
  alternates: {
    canonical: `${siteConfig.domain.replace(/\/$/, "")}/projects`,
  },
  openGraph: {
    title: "Projects | Tate Byers",
    description:
      "Explore Tate Byers project categories including custom web builds, tech support, infrastructure systems, creator work, and digital projects.",
    url: `${siteConfig.domain.replace(/\/$/, "")}/projects`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tate Byers projects and digital systems.",
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-5 pb-10 pt-28 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-cyan-200 transition hover:border-cyan-200/60 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
          >
            ← Back to Tate OS
          </Link>

          <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
            Project Directory
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
            Projects, Systems, Builds, and Digital Work.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            A categorized view of Tate Byers projects across web builds, tech
            support, infrastructure, creator systems, and active digital work.
          </p>
        </div>
      </section>

      <Projects />
    </main>
  );
}