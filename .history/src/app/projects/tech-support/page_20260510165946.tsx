import Link from "next/link";

export const metadata = {
  title: "Tech Support Projects | Tate Byers",
  description:
    "Tech support, diagnostics, repairs, troubleshooting, and client technical service work by Tate Byers.",
};

export default function TechSupportProjectsPage() {
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
          Technical Service Systems
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Tech Support Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Hands-on technical work through L&amp;L Tech Solutions, including
          diagnostics, repairs, device setup, troubleshooting, performance
          improvements, client support, and practical problem-solving.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Device Diagnostics",
              body: "Troubleshooting slow systems, boot issues, software problems, hardware concerns, and general device instability.",
            },
            {
              title: "Computer Setup & Optimization",
              body: "Preparing systems, cleaning up installs, improving performance, setting up user-ready machines, and resolving configuration issues.",
            },
            {
              title: "Client Tech Support",
              body: "Helping clients understand the problem, explaining options clearly, and delivering practical technical solutions.",
            },
            {
              title: "Repair Planning",
              body: "Assessing what is worth fixing, what should be upgraded, and what should be replaced before wasting client money.",
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