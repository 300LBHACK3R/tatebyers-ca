import Link from "next/link";
import { linkCollections, profile, strongSuggestions } from "@/config/siteHub";

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

function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisualTile({
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
        "relative grid shrink-0 place-items-center overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white via-[#f8f3e8] to-[#c7a85a] shadow-[0_24px_55px_rgba(0,0,0,0.45)]",
        large ? "h-32 w-32 p-3 sm:h-40 sm:w-40" : "h-20 w-20 p-2.5 sm:h-24 sm:w-24",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),transparent_40%,rgba(255,255,255,0.22))]" />
      {image ? (
        <img
          src={image}
          alt={`${title} visual`}
          className="relative h-full w-full rounded-[1.35rem] object-cover"
        />
      ) : (
        <span className="relative text-2xl font-black tracking-tight text-[#b70f1b] sm:text-3xl">
          {initials}
        </span>
      )}
    </div>
  );
}

function SectionLabel({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-5">
      <p className="text-xs font-black uppercase tracking-[0.26em] text-[#ff5b66]">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {body ? <p className="mt-2 max-w-2xl text-sm leading-7 text-white/64">{body}</p> : null}
    </div>
  );
}

function SuggestionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="electric-card rounded-[1.75rem] p-[1px]">
      <div className="h-full rounded-[1.72rem] bg-[#080808]/95 p-5">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ff5b66]">
          {number}
        </p>
        <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/68">{description}</p>
      </div>
    </article>
  );
}

export function SimpleLinkHub() {
  const featured = linkCollections.find((collection) => collection.featured) ?? linkCollections[0];
  const secondaryCollections = linkCollections.filter(
    (collection) => collection.slug !== featured.slug,
  );

  const featuredWebsite = featured.links.find((link) => link.title.toLowerCase().includes("website"));
  const featuredSocialLinks = featured.links.filter((link) =>
    ["youtube", "tiktok", "facebook"].includes(link.title.toLowerCase()),
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#b70f1b]/40 blur-3xl" />
        <div className="absolute right-[-220px] top-[18%] h-[520px] w-[520px] rounded-full bg-[#ff2437]/22 blur-3xl" />
        <div className="absolute left-[-240px] bottom-[6%] h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(0,0,0,0.9))]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <section className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <div className="flex justify-center">
              <div className="electric-card rounded-[2.35rem] p-[1px]">
                <div className="rounded-[2.3rem] bg-black/70 p-2">
                  <VisualTile title={profile.name} image={profile.mainImage} initials="TB" large />
                </div>
              </div>
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.34em] text-white/66">
              {profile.location}
            </p>

            <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl">
              {profile.name}
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-lg">
              {profile.headline}
            </p>
          </header>

          <section className="mt-12">
            <SectionLabel
              eyebrow="Featured"
              title="Main business"
              body="The primary business brand and the first place for professional services."
            />

            <div className="electric-card rounded-[2rem] p-[1px]">
              <article className="rounded-[1.95rem] border border-white/8 bg-gradient-to-br from-white via-[#fffaf0] to-[#f0f0f0] p-5 text-[#101010] shadow-[0_30px_70px_rgba(0,0,0,0.36)] sm:p-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <a
                    href={featured.primaryHref ?? featuredWebsite?.href ?? `/links/${featured.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:scale-[1.03]"
                    aria-label={`Open ${featured.title}`}
                  >
                    <VisualTile title={featured.title} image={featured.image} initials={featured.initials} />
                  </a>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b70f1b]">
                      {featured.label}
                    </p>

                    <a
                      href={featured.primaryHref ?? featuredWebsite?.href ?? `/links/${featured.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group/title mt-2 inline-flex items-center gap-3 text-3xl font-black leading-tight text-[#111111] transition hover:text-[#b70f1b] sm:text-4xl"
                    >
                      {featured.title}
                      <ExternalIcon />
                    </a>

                    <p className="mt-3 text-sm leading-7 text-[#333333] sm:text-base">
                      {featured.description}
                    </p>

                    {featured.highlights && featured.highlights.length > 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {featured.highlights.map((tag) => (
                          <span
                            key={`${featured.slug}-${tag}`}
                            className="rounded-full border border-[#b70f1b]/15 bg-[#fff1f2] px-3 py-1.5 text-xs font-black text-[#b70f1b]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-2">
                      <a
                        href={featured.primaryHref ?? featuredWebsite?.href ?? `/links/${featured.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#111111] px-4 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#b70f1b]"
                      >
                        Website
                        <ExternalIcon />
                      </a>

                      {featuredSocialLinks.map((link) => (
                        <a
                          key={`${featured.slug}-${link.title}`}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-2xl border border-[#b70f1b]/20 bg-white px-4 py-3 text-sm font-black text-[#b70f1b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37]/40 hover:bg-[#fff7e0] hover:text-[#7a0a12]"
                        >
                          {link.title}
                          <ExternalIcon />
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href={featured.primaryHref ?? featuredWebsite?.href ?? `/links/${featured.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#b70f1b] text-white shadow-[0_16px_35px_rgba(183,15,27,0.35)] transition hover:scale-105 hover:bg-[#111111]"
                    aria-label={`Open ${featured.title} website`}
                  >
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="mt-10">
            <SectionLabel
              eyebrow="Directory"
              title="Sections"
              body="Choose a category below to open the links, projects, photos, or personal areas connected to it."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {secondaryCollections.map((collection) => (
                <Link
                  key={collection.slug}
                  href={`/links/${collection.slug}`}
                  className="electric-card group rounded-[1.8rem] p-[1px]"
                >
                  <div className="flex h-full items-center justify-between gap-4 rounded-[1.75rem] bg-[#090909]/94 p-5 shadow-[0_18px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl transition group-hover:bg-[#101010]">
                    <div className="flex min-w-0 items-center gap-4">
                      <VisualTile title={collection.title} image={collection.image} initials={collection.initials} />

                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5b66]">
                          {collection.label}
                        </p>

                        <h3 className="mt-1 text-xl font-black leading-tight text-white">
                          {collection.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-white/68">
                          {collection.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/8 text-white transition group-hover:scale-105 group-hover:bg-[#b70f1b]">
                      <ArrowIcon />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionLabel
              eyebrow="Next improvements"
              title="Strong suggestions"
              body="The next upgrades that will make this hub more useful, more trustworthy, and easier to grow."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {strongSuggestions.map((suggestion, index) => (
                <SuggestionCard
                  key={suggestion.title}
                  number={`Suggestion ${String(index + 1).padStart(2, "0")}`}
                  title={suggestion.title}
                  description={suggestion.description}
                />
              ))}
            </div>
          </section>

          <footer className="py-12 text-center text-sm leading-7 text-white/48">
            <p>
              © 2026 Tate Byers. Premium personal hub for business, projects, links, and selected memories.
            </p>
            <p className="mt-2">
              Maintained and developed by{" "}
              <a
                href="https://lltechsolutions.ca"
                target="_blank"
                rel="noreferrer"
                className="font-black text-[#ff6b74] underline-offset-4 hover:underline"
              >
                L&L Tech Solutions
              </a>
              .
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
