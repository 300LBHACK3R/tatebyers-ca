import Image from "next/image";

import {
  clientProjects,
  conceptBuilds,
  ownedBrands,
  profile,
  socialLinks,
  type ClientProject,
  type ConceptBuild,
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
  const staysOnCurrentSite =
    href.startsWith("/") ||
    href.startsWith("https://www.tatebyers.ca") ||
    href.startsWith("https://tatebyers.ca");

  if (staysOnCurrentSite) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function ProfileImage() {
  return (
    <div className="luxury-frame rounded-[2.65rem] p-[1px]">
      <div className="rounded-[2.6rem] bg-black/85 p-2">
        <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-[2.2rem] bg-[#111111] sm:w-48">
          <Image
            src={profile.image}
            alt="Tate Byers"
            fill
            priority
            sizes="(max-width: 640px) 160px, 192px"
            className="object-cover"
            style={{
              objectPosition: profile.imagePosition,
            }}
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
    <div className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-[1.8rem] border border-black/[0.08] bg-gradient-to-br from-white via-[#fffaf0] to-[#d7b958] p-3 shadow-[0_20px_44px_rgba(0,0,0,0.24)]">
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
        <span className="text-2xl font-black text-[#9e111b]">
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
      <p className="text-xs font-black uppercase tracking-[0.28em] text-[#e2bf62]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-white/[0.68] sm:text-base">
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
    <div className="luxury-frame rounded-[2rem] p-[1px]">
      <article className="flex h-full flex-col rounded-[1.95rem] bg-gradient-to-br from-white via-[#fffdf8] to-[#eee3c7] p-5 text-[#111111] shadow-[0_30px_70px_rgba(0,0,0,0.38)] sm:p-6">
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
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#9e111b] text-white shadow-[0_16px_34px_rgba(158,17,27,0.3)] transition hover:scale-105 hover:bg-[#111111]"
          >
            <ArrowIcon />
          </a>
        </div>

        <div className="mt-5 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8e1119]">
            {brand.eyebrow}
          </p>

          <a
            href={brand.href}
            {...getAnchorProps(brand.href)}
            className="mt-2 inline-flex items-center gap-3 text-3xl font-black leading-tight transition hover:text-[#9e111b]"
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
                className="rounded-full border border-[#b28b2f]/25 bg-[#fff8e3] px-3 py-1.5 text-xs font-black text-[#76580e]"
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
              title={link.description}
              className={
                index === 0
                  ? "inline-flex items-center gap-2 rounded-2xl bg-[#111111] px-4 py-3 text-sm font-black text-white shadow-[0_14px_28px_rgba(0,0,0,0.24)] transition hover:-translate-y-0.5 hover:bg-[#9e111b]"
                  : "inline-flex items-center gap-2 rounded-2xl border border-[#b28b2f]/30 bg-white px-4 py-3 text-sm font-black text-[#76580e] shadow-sm transition hover:-translate-y-0.5 hover:border-[#9e111b]/40 hover:bg-[#fff8e3] hover:text-[#9e111b]"
              }
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
  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.95rem] bg-gradient-to-br from-white via-[#fffdf8] to-[#eee5d2] text-[#111111] shadow-[0_28px_62px_rgba(0,0,0,0.34)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#141414]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="grid h-full place-items-center text-4xl font-black text-white">
            {project.initials}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
          {project.status}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f3d77d]">
            L&L Tech Solutions Client Build
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight text-white">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a6817]">
            {project.category}
          </p>

          <span className="text-xs font-bold text-black/[0.45]">
            {project.year}
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-[#444444]">
          {project.description}
        </p>

        <div className="mt-5 border-t border-black/[0.08] pt-4">
          {project.href ? (
            <span className="inline-flex items-center gap-2 text-sm font-black text-[#9e111b]">
              View Live Website
              <ArrowIcon small />
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-[#fff8e3] px-3 py-1.5 text-xs font-black text-[#76580e]">
              Launching Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (!project.href) {
    return (
      <div className="luxury-frame rounded-[2rem] p-[1px]">
        {card}
      </div>
    );
  }

  return (
    <a
      href={project.href}
      {...getAnchorProps(project.href)}
      className="luxury-frame group rounded-[2rem] p-[1px] transition hover:-translate-y-1"
      aria-label={`View ${project.title} website`}
    >
      {card}
    </a>
  );
}

function ConceptBuildCard({ concept }: { concept: ConceptBuild }) {
  return (
    <div className="luxury-frame rounded-[2rem] p-[1px]">
      <article className="flex h-full flex-col overflow-hidden rounded-[1.95rem] bg-[#0b0b0b] shadow-[0_28px_62px_rgba(0,0,0,0.38)]">
        <div className="relative aspect-video overflow-hidden bg-black">
          {concept.video ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={concept.image}
              className="h-full w-full object-cover"
              aria-label={`${concept.title} walkthrough video`}
            >
              <source src={concept.video} />
            </video>
          ) : (
            <Image
              src={concept.image}
              alt={`${concept.title} concept preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          )}

          <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-[#e2bf62]/30 bg-black/75 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#f3d77d] backdrop-blur">
            Independent Portfolio Concept
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#e2bf62]">
              {concept.industry}
            </p>

            <span className="text-xs font-bold text-white/[0.42]">
              {concept.year}
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-black leading-tight">
            {concept.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/[0.66]">
            {concept.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {concept.tags.map((tag) => (
              <span
                key={`${concept.slug}-${tag}`}
                className="rounded-full border border-[#e2bf62]/20 bg-[#e2bf62]/[0.08] px-3 py-1.5 text-xs font-black text-[#f3d77d]"
              >
                {tag}
              </span>
            ))}
          </div>

          {concept.href ? (
            <div className="mt-auto pt-6">
              <a
                href={concept.href}
                {...getAnchorProps(concept.href)}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#9e111b] px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#d7b34d] hover:text-black"
              >
                Open Concept
                <ArrowIcon small />
              </a>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="luxury-frame rounded-[2rem] p-[1px]">
      <div className="rounded-[1.95rem] bg-[#090909]/96 p-5 shadow-[0_24px_58px_rgba(0,0,0,0.36)] sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e2bf62]">
          Social Links
        </p>

        <h2 className="mt-2 text-2xl font-black text-white">
          Follow the work.
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/[0.65]">
          Professional updates, business content, project videos, and
          behind-the-scenes work.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              {...getAnchorProps(link.href)}
              title={link.description}
              className="inline-flex items-center gap-2 rounded-2xl border border-[#e2bf62]/30 bg-[#15120a] px-5 py-3 text-sm font-black text-[#f3d77d] shadow-[0_14px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-[#9e111b]/50 hover:bg-[#9e111b] hover:text-white"
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
        <div className="absolute left-1/2 top-[-320px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.13] blur-3xl" />
        <div className="absolute right-[-240px] top-[20%] h-[540px] w-[540px] rounded-full bg-[#9e111b]/[0.18] blur-3xl" />
        <div className="absolute bottom-[4%] left-[-240px] h-[500px] w-[500px] rounded-full bg-[#d4af37]/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.015),rgba(0,0,0,0.94))]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(226,191,98,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(226,191,98,.65)_1px,transparent_1px)] [background-size:38px_38px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
        <header className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <ProfileImage />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.34em] text-[#e7d39a]">
            {profile.location}
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/[0.76] sm:text-xl">
            {profile.headline}
          </p>

          <div className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-2">
            {["Founder", "Developer", "Business Owner", "Creator"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e2bf62]/20 bg-[#e2bf62]/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#e7d39a]"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </header>

        <section className="mt-16">
          <SectionHeading
            eyebrow="Owned & Operated"
            title="My business and platform"
            description="The brands and digital platforms I own, operate, and continue to develop."
          />

          <div className="grid gap-5 lg:grid-cols-2">
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

        {conceptBuilds.length > 0 ? (
          <section className="mt-16">
            <SectionHeading
              eyebrow="Concept Builds & Walkthroughs"
              title="Independent portfolio concepts"
              description="Website concepts and recorded walkthroughs created to demonstrate design, user-experience, and conversion ideas. These are independent portfolio concepts unless specifically identified as commissioned client work."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {conceptBuilds.map((concept) => (
                <ConceptBuildCard key={concept.slug} concept={concept} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-16">
          <SocialLinks />
        </section>

        <footer className="py-12 text-center text-sm leading-7 text-white/[0.46]">
          <p>
            © 2026 Tate Byers. Founder of L&L Tech Solutions and creator of
            Tates TV.
          </p>

          <p className="mt-2">
            Maintained and developed by{" "}
            <a
              href="https://lltechsolutions.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-[#e2bf62] underline-offset-4 hover:text-white hover:underline"
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
