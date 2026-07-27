import Image from "next/image";

import {
  clientProjects,
  ownedBrands,
  profile,
  socialLinks,
  type ClientProject,
  type OwnedBrand,
} from "@/config/siteHub";

function ArrowIcon({ small = false }: { small?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={small ? "h-4 w-4 shrink-0" : "h-5 w-5 shrink-0"}
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

function getAnchorProps(href: string) {
  const isCurrentSite =
    href.startsWith("/") ||
    href.startsWith("https://www.tatebyers.ca") ||
    href.startsWith("https://tatebyers.ca");

  if (isCurrentSite) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function ProfileImage() {
  return (
    <div className="electric-card rounded-[2.6rem] p-[1px]">
      <div className="rounded-[2.55rem] bg-black/75 p-2">
        <div className="relative h-36 w-36 overflow-hidden rounded-[2.15rem] bg-[#111111] sm:h-44 sm:w-44">
          <Image
            src={profile.image}
            alt="Tate Byers"
            fill
            priority
            sizes="(max-width: 640px) 144px, 176px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function BrandLogo({
  brand,
  priority = false,
}: {
  brand: OwnedBrand;
  priority?: boolean;
}) {
  return (
    <div className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[1.8rem] border border-black/8 bg-gradient-to-br from-white via-[#fffaf0] to-[#e4c978] p-3 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
      {brand.image ? (
        <div className="relative h-full w-full">
          <Image
            src={brand.image}
            alt={`${brand.title} logo`}
            fill
            priority={priority}
            sizes="96px"
            className="object-contain"
          />
        </div>
      ) : (
        <span className="text-2xl font-black text-[#b70f1b]">
          {brand.initials}
        </span>
      )}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-6 max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff6973]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base">
        {description}
      </p>
    </header>
  );
}

function OwnedBrandCard({
  brand,
  priority = false,
}: {
  brand: OwnedBrand;
  priority?: boolean;
}) {
  return (
    <div className="electric-card rounded-[2rem] p-[1px]">
      <article className="flex h-full flex-col rounded-[1.95rem] bg-gradient-to-br from-white via-[#fffdf8] to-[#f1eadb] p-5 text-[#111111] shadow-[0_30px_70px_rgba(0,0,0,0.38)] sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <a
            href={brand.href}
            {...getAnchorProps(brand.href)}
            aria-label={`Open ${brand.title}`}
            className="transition hover:scale-[1.03]"
          >
            <BrandLogo brand={brand} priority={priority} />
          </a>

          <a
            href={brand.href}
            {...getAnchorProps(brand.href)}
            aria-label={`Open ${brand.title}`}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#b70f1b] text-white shadow-[0_16px_34px_rgba(183,15,27,0.34)] transition hover:scale-105 hover:bg-[#111111]"
          >
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-5 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b70f1b]">
            {brand.eyebrow}
          </p>

          <a
            href={brand.href}
            {...getAnchorProps(brand.href)}
            className="mt-2 inline-flex items-center gap-3 text-3xl font-black leading-tight transition hover:text-[#b70f1b]"
          >
            {brand.title}
            <ArrowIcon small />
          </a>

          <p className="mt-4 text-sm leading-7 text-[#414141] sm:text-base">
            {brand.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {brand.tags.map((tag) => (
              <span
                key={`${brand.slug}-${tag}`}
                className="rounded-full border border-[#b70f1b]/15 bg-[#fff1f2] px-3 py-1.5 text-xs font-black text-[#b70f1b]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {brand.links.map((link, index) => (
            <a
              key={`${brand.slug}-${link.title}`}
              href={link.href}
              {...getAnchorProps(link.href)}
              className={
                index === 0
                  ? "inline-flex items-center gap-2 rounded-2xl bg-[#b70f1b] px-4 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(183,15,27,0.3)] transition hover:-translate-y-0.5 hover:bg-[#111111]"
                  : "inline-flex items-center gap-2 rounded-2xl border border-[#b70f1b]/20 bg-white px-4 py-3 text-sm font-black text-[#b70f1b] shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4af37]/50 hover:bg-[#fff7e0]"
              }
              title={link.description}
            >
              {link.title}
              <ArrowIcon small />
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}

function ClientProjectCard({ project }: { project: ClientProject }) {
  const cardContent = (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.95rem] bg-gradient-to-br from-white via-[#fffdf8] to-[#f2ece0] text-[#111111] shadow-[0_28px_62px_rgba(0,0,0,0.34)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#161616]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="grid h-full place-items-center text-4xl font-black text-white">
            {project.initials}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
          {project.status}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ffd4d7]">
            L&L Tech Solutions Client Build
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b70f1b]">
            {project.category}
          </p>

          <span className="text-xs font-bold text-black/45">{project.year}</span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-[#444444]">
          {project.description}
        </p>

        <div className="mt-5 border-t border-black/8 pt-4">
          {project.href ? (
            <span className="inline-flex items-center gap-2 text-sm font-black text-[#b70f1b]">
              View Live Website
              <ArrowIcon small />
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-[#fff1f2] px-3 py-1.5 text-xs font-black text-[#b70f1b]">
              Launching Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (!project.href) {
    return (
      <div className="electric-card rounded-[2rem] p-[1px]">
        {cardContent}
      </div>
    );
  }

  return (
    <a
      href={project.href}
      {...getAnchorProps(project.href)}
      className="electric-card group rounded-[2rem] p-[1px] transition hover:-translate-y-1"
      aria-label={`View ${project.title} website`}
    >
      {cardContent}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="electric-card rounded-[2rem] p-[1px]">
      <div className="rounded-[1.95rem] bg-[#090909]/96 p-5 shadow-[0_24px_58px_rgba(0,0,0,0.36)] sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff6973]">
              Social Links
            </p>

            <h2 className="mt-2 text-2xl font-black text-white">
              Find me across the web.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/65">
              Professional updates, business content, videos, and behind-the-scenes work.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              {...getAnchorProps(link.href)}
              title={link.description}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b70f1b] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(183,15,27,0.28)] transition hover:-translate-y-0.5 hover:bg-white hover:text-[#b70f1b]"
            >
              {link.title}
              <ArrowIcon small />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SimpleLinkHub() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-[-300px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[#b70f1b]/42 blur-3xl" />
        <div className="absolute right-[-220px] top-[24%] h-[520px] w-[520px] rounded-full bg-[#ff2437]/20 blur-3xl" />
        <div className="absolute bottom-[4%] left-[-240px] h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_31%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.92))]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <ProfileImage />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.34em] text-white/62">
            {profile.location}
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/76 sm:text-xl">
            {profile.headline}
          </p>

          <div className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-2">
            {["Founder", "Developer", "Business Owner", "Creator"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white/72 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Owned & Operated"
            title="My businesses and platforms"
            description="These are the brands and digital platforms I own, operate, and continue to build."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {ownedBrands.map((brand, index) => (
              <OwnedBrandCard
                key={brand.slug}
                brand={brand}
                priority={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Selected L&L Client Work"
            title="Websites built for real businesses"
            description="Each project below was designed and developed through L&L Tech Solutions for a client business."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clientProjects.map((project) => (
              <ClientProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SocialLinks />
        </section>

        <footer className="py-12 text-center text-sm leading-7 text-white/48">
          <p>
            © 2026 Tate Byers. Founder of L&L Tech Solutions and creator of Tates TV.
          </p>

          <p className="mt-2">
            Maintained and developed by{" "}
            <a
              href="https://lltechsolutions.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#ff6973] underline-offset-4 hover:underline"
            >
              L&L Tech Solutions
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
}
