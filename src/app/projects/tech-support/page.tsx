import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ClipboardCheck,
  Cpu,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.domain.replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Tech Support Projects | Tate Byers",
  description:
    "Tech support, diagnostics, repairs, troubleshooting, device setup, optimization, and client technical service work by Tate Byers.",
  alternates: {
    canonical: `${baseUrl}/projects/tech-support`,
  },
  openGraph: {
    title: "Tech Support Projects | Tate Byers",
    description:
      "Tech support, diagnostics, repairs, troubleshooting, device setup, optimization, and client technical service work by Tate Byers.",
    url: `${baseUrl}/projects/tech-support`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tate Byers tech support projects and diagnostic systems.",
      },
    ],
  },
};

const techSupportItems = [
  {
    title: "Device Diagnostics",
    body: "Troubleshooting slow systems, boot issues, software problems, hardware concerns, instability, and unclear device problems before recommending a fix.",
    icon: Cpu,
  },
  {
    title: "Computer Setup & Optimization",
    body: "Preparing systems, cleaning up installs, improving performance, setting up user-ready machines, and resolving configuration issues.",
    icon: Gauge,
  },
  {
    title: "Client Tech Support",
    body: "Helping clients understand the problem, explaining options clearly, and delivering practical technical solutions without overcomplicating the process.",
    icon: ShieldCheck,
  },
  {
    title: "Repair Planning",
    body: "Assessing what is worth fixing, what should be upgraded, and what should be replaced before wasting client money on the wrong path.",
    icon: ClipboardCheck,
  },
];

export default function TechSupportProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative isolate px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-20 bg-[#020617]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.1),transparent_36%)]" />

        <div className="mx-auto max-w-6xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-emerald-200 transition hover:border-emerald-200/60 hover:bg-emerald-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Projects
          </Link>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-emerald-200">
              Technical Service Systems
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Diagnostics, Support, Optimization, and Practical Tech Fixes.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Hands-on technical work through L&amp;L Tech Solutions, including
              diagnostics, repairs, device setup, troubleshooting, performance
              improvements, client support, and practical problem-solving.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://lltechsolutions.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-300 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-slate-950 shadow-[0_0_45px_rgba(16,185,129,0.24)] transition hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
              >
                Visit L&amp;L Tech
                <ArrowRight className="ml-2 size-4" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
              >
                Open Tate OS
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {techSupportItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-emerald-300/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-white/[0.065]"
                >
                  <div className="mb-5 grid size-12 place-items-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 transition group-hover:bg-emerald-300/15">
                    <Icon className="size-6 text-emerald-200" />
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