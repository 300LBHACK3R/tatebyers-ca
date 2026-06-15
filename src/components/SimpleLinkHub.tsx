import Link from "next/link";
import { linkCollections, profile } from "@/config/siteHub";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CollectionVisual({
  title,
  image,
  initials,
  large = false,
}: {
  title: string;
  image?: string;
  initials: string;
  large?: boolean;
}) {
  return (
    <div
      className={[
        "grid shrink-0 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm",
        large ? "h-28 w-28 sm:h-32 sm:w-32" : "h-20 w-20",
      ].join(" ")}
    >
      {image ? (
        <img src={image} alt={`${title} logo`} className="h-full w-full object-contain" />
      ) : (
        <span className="text-2xl font-black text-blue-700">{initials}</span>
      )}
    </div>
  );
}

export function SimpleLinkHub() {
  const featured = linkCollections.find((collection) => collection.featured);
  const regularCollections = linkCollections.filter((collection) => !collection.featured);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-[-240px] right-[-180px] h-[560px] w-[560px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0),rgba(15,23,42,1))]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-8 sm:px-8 lg:py-12">
        <div className="mx-auto w-full max-w-3xl">
          <header className="text-center">
            <CollectionVisual
              title="Tate Byers"
              image={profile.mainImage}
              initials="TB"
              large
            />

            <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-blue-200">
              {profile.location}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              {profile.name}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {profile.headline}
            </p>
          </header>

          {featured ? (
            <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-5">
              <Link
                href={`/links/${featured.slug}`}
                className="group block rounded-[1.5rem] bg-white p-5 text-slate-950 transition hover:-translate-y-0.5 hover:shadow-2xl sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <CollectionVisual
                    title={featured.title}
                    image={featured.image}
                    initials={featured.initials}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                      {featured.label}
                    </p>

                    <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                      {featured.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {featured.description}
                    </p>
                  </div>

                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-105 group-hover:bg-blue-700">
                    <ArrowIcon />
                  </div>
                </div>
              </Link>
            </section>
          ) : null}

          <section className="mt-6 grid gap-4">
            {regularCollections.map((collection) => (
              <Link
                key={collection.slug}
                href={`/links/${collection.slug}`}
                className="group flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/90 p-5 text-slate-950 shadow-sm shadow-slate-950/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <CollectionVisual
                    title={collection.title}
                    image={collection.image}
                    initials={collection.initials}
                  />

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                      {collection.label}
                    </p>

                    <h3 className="mt-1 text-xl font-black leading-tight">
                      {collection.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {collection.description}
                    </p>
                  </div>
                </div>

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:scale-105">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </section>

          <footer className="py-10 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Tate Byers. Built for business, media, links, and selected memories.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
