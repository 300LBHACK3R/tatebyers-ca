import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cable,
  Camera,
  ClipboardCheck,
  Network,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.domain.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Infrastructure Projects | Tate Byers",
  description:
    "Infrastructure, networking, Ethernet wall-port activation, CCTV planning, field systems, diagnostics, and technical deployment work by Tate Byers.",
  alternates: {
    canonical: `${baseUrl}/projects/infrastructure`,
  },
  openGraph: {
    title: "Infrastructure Projects | Tate Byers",
    description:
      "Infrastructure, networking, Ethernet wall-port activation, CCTV planning, field systems, diagnostics, and technical deployment work by Tate Byers.",
    url: `${baseUrl}/projects/infrastructure`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tate Byers infrastructure, networking, and field systems projects.",
      },
    ],
  },
};

const infrastructureItems = [
  {
    title: "Network Diagnostics",
    body: "Tracing cabling, identifying live runs, checking network paths, cleaning up connection points, and solving real-world connectivity issues.",
    icon: Network,
  },
  {
    title: "Ethernet / RJ45 Work",
    body: "Wall-port activation, RJ11-to-RJ45 conversion, keystone planning, patching, switch setup, and router-side organization.",
    icon: Cable,
  },
  {
    title: "CCTV / Field Systems",
    body: "Planning, organizing, and supporting camera/network infrastructure for residential, commercial, and deployment-focused environments.",
    icon: Camera,
  },
  {
    title: "Technical Assessments",
    body: "Professional site checks, troubleshooting, documentation, equipment review, and install planning before full technical work begins.",
    icon: ClipboardCheck,
  },
];

export default function InfrastructureProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-20 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.16),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.1),transparent_36%)]" />

        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center rounded-full border border-[#f5d77a]/25 bg-[#d4af37]/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#f5d77a] transition hover:border-[#f5d77a]/60 hover:bg-[#d4af37]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d77a]/50"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-[#f5d77a]">
              Infrastructure Systems
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Networking, Field Systems, Cabling, and Technical Deployment.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Networking, Ethernet wall-port activation, technical diagnostics,
              field systems, CCTV planning, deployment support, and structured
              technical work connected to L&amp;L Tech Solutions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://lltechsolutions.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#f5d77a] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_45px_rgba(212,175,55,0.22)] transition hover:-translate-y-0.5 hover:bg-[#fff0a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d77a]/50"
              >
                Visit L&amp;L Tech
                <ArrowRight className="ml-2 size-4" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-[#f5d77a]/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d77a]/50"
              >
                Open Tate OS
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {infrastructureItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#f5d77a]/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f5d77a]/35 hover:bg-white/[0.065]"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl border border-[#f5d77a]/20 bg-[#d4af37]/10 transition group-hover:bg-[#d4af37]/15">
                    <Icon className="size-6 text-[#f5d77a]" />
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