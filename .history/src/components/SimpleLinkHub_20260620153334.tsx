import { linkCollections, profile } from "@/config/siteHub";

type LinkCollection = (typeof linkCollections)[number];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function getLinkProps(href: string) {
  if (!isExternalHref(href)) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}

function getCollectionHref(collection: LinkCollection) {
  return collection.primaryHref ?? collection.links[0]?.href ?? null;
}

function getPrimaryButtonLabel(collection: LinkCollection) {
  const websiteLink = collection.links.find((link) =>
    link.title.toLowerCase().includes("website"),
  );

  const socialLink = collection.links.find((link) =>
    ["tiktok", "facebook", "youtube", "instagram"].includes(link.title.toLowerCase()),
  );

  if (websiteLink) return "Website";
  if (socialLink) return "Socials";

  return "Open";
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

function BrandCard({ collection }: { collection: LinkCollection }) {
  const href = getCollectionHref(collection);
  const primaryButtonLabel = getPrimaryButtonLabel(collection);
  const secondaryLinks = collection.links.filter((link) => link.href !== href);

  return (
    <div className="electric-card rounded-[2rem] p-[1px]">
      <article className="flex h-full flex-col rounded-[1.95rem] border border-white/8 bg-gradient-to-br from-white via-[#fffaf0] to-[#f0f0f0] p-5 text-[#101010] shadow-[0_30px_70px_rgba(0,0,0,0.36)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <a
            href={href}
            {...getLinkProps(href)}
            className="transition hover:scale-[1.03]"
            aria-label={`Open ${collection.title}`}
          >
            <VisualTile
              title={collection.title}
              image={collection.image}
              initials={collection.initials}
            />
          </a>

          <a
            href={href}
            {...getLinkProps(href)}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#b70f1b] text-white shadow-[0_16px_35px_rgba(183,15,27,0.35)] transition hover:scale-105 hover:bg-[#111111]"
            aria-label={`Open ${collection.title}`}
          >
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-5 min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b70f1b]">
            {collection.label}
          </p>

          <a
            href={href}
            {...getLinkProps(href)}
            className="mt-2 inline-flex items-center gap-3 text-3xl font-black leading-tight text-[#111111] transition hover:text-[#b70f1b]"
          >
            {collection.title}
            <ExternalIcon />
          </a>

          <p className="mt-3 text-sm leading-7 text-[#333333] sm:text-base">
            {collection.description}
          </p>

          {collection.highlights && collection.highlights.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {collection.highlights.map((tag) => (
                <span
                  key={`${collection.slug}-${tag}`}
                  className="rounded-full border border-[#b70f1b]/15 bg-[#fff1f2] px-3 py-1.5 text-xs font-black text-[#b70f1b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={href}
            {...getLinkProps(href)}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#b70f1b] px-4 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(183,15,27,0.32)] transition hover:-translate-y-0.5 hover:bg-[#111111]"
          >
            {primaryButtonLabel}
            <ExternalIcon />
          </a>

          {secondaryLinks.slice(0, 4).map((link) => (
            <a
              key={`${collection.slug}-${link.title}`}
              href={link.href}
              {...getLinkProps(link.href)}
              className="inline-flex items-center gap-2 rounded-2xl border border-[#b70f1b]/20 bg-white px-4 py-3 text-sm font-black text-[#b70f1b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37]/40 hover:bg-[#fff7e0] hover:text-[#7a0a12]"
            >
              {link.title}
              <ExternalIcon />
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}

export function SimpleLinkHub() {
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
                  <VisualTile
                    title={profile.name}
                    image={profile.mainImage}
                    initials="TB"
                    large
                  />
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
              eyebrow="Businesses & Projects"
              title="Everything Connected to Tate"
              body="A clean place to find my active businesses, creative projects, socials, and contact links."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {linkCollections.map((collection) => (
                <BrandCard key={collection.slug} collection={collection} />
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
