import Link from "next/link";

export const metadata = {
  title: "Web Build Projects | Tate Byers",
  description:
    "Custom website builds, landing pages, SEO-ready web systems, and digital portfolio work by Tate Byers.",
};

export default function WebBuildProjectsPage() {
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
          Web Build Systems
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          Web Build Projects
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          Custom websites, business landing pages, SEO-ready structures,
          interactive interfaces, and high-performance digital systems built
          through Tate Byers and L&amp;L Tech Solutions.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Custom Business Websites",
              body: "Modern sites built to give small businesses a stronger online presence, better trust, and clearer lead flow.",
            },
            {
              title: "SEO-Ready Page Structures",
              body: "Clean metadata, proper headings, page hierarchy, semantic layouts, and search-friendly foundations.",
            },
            {
              title: "Interactive Portfolio Interfaces",
              body: "Creative React/Next.js interfaces like Tate OS, Matrix mode, XP mode, terminal navigation, and animated UI systems.",
            },
            {
              title: "Performance-Focused Builds",
              body: "Fast-loading pages, optimized assets, clean component structure, and deployment-ready production builds.",
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