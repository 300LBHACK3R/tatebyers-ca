import Link from "next/link";

export const metadata = {
  title: "Infrastructure Projects | Tate Byers",
  description:
    "Infrastructure, networking, field systems, diagnostics, and technical deployment work by Tate Byers.",
};

export default function InfrastructureProjectsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-green-400/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-green-300 transition hover:bg-green-400/10"
        >
          ← Back to Tate OS
        </Link>

        <p className="font-mono text-sm uppercase tracking-[0.25em] text-green-400">
          Infrastructure Systems
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Infrastructure Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Networking, Ethernet wall-port activation, technical diagnostics,
          field systems, CCTV planning, deployment support, and structured
          technical work connected to L&amp;L Tech Solutions.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Network Diagnostics",
              body: "Tracing cabling, identifying live runs, cleaning up network paths, and solving connection issues.",
            },
            {
              title: "Ethernet / RJ45 Work",
              body: "Wall-port activation, RJ11-to-RJ45 conversion, keystone planning, and switch/router setup.",
            },
            {
              title: "CCTV / Field Systems",
              body: "Planning, organizing, and supporting camera/network infrastructure for real-world deployments.",
            },
            {
              title: "Technical Assessments",
              body: "Professional site checks, troubleshooting, documentation, and install planning before full work begins.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-green-400/15 bg-green-950/10 p-6 shadow-2xl"
            >
              <h2 className="text-xl font-black text-green-100">
                {item.title}
              </h2>
              <p className="mt-3 leading-7 text-green-100/65">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}