import { mainBusiness, primaryLinks, profile, quickStats } from "@/config/siteHub";

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
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7.5L12 13L20 7.5M5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V16.5C20 17.3284 19.3284 18 18.5 18H5.5C4.67157 18 4 17.3284 4 16.5V7.5C4 6.67157 4.67157 6 5.5 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkCard({
  title,
  description,
  href,
  label,
  featured,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
  featured?: boolean;
}) {
  const isMail = href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      className={[
        "group flex items-center justify-between gap-4 rounded-3xl border p-5 shadow-sm transition",
        "hover:-translate-y-0.5 hover:shadow-xl",
        featured
          ? "border-blue-500/30 bg-blue-600 text-white shadow-blue-950/20"
          : "border-slate-200 bg-white/90 text-slate-950 shadow-slate-950/5 backdrop-blur",
      ].join(" ")}
    >
      <div className="min-w-0">
        <p
          className={[
            "text-xs font-black uppercase tracking-[0.18em]",
            featured ? "text-blue-100" : "text-blue-700",
          ].join(" ")}
        >
          {label}
        </p>

        <h3 className="mt-2 text-xl font-black leading-tight">{title}</h3>

        <p
          className={[
            "mt-2 text-sm leading-6",
            featured ? "text-blue-50/90" : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>
      </div>

      <div
        className={[
          "grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition group-hover:scale-105",
          featured ? "bg-white/15 text-white" : "bg-blue-50 text-blue-700",
        ].join(" ")}
      >
        {isMail ? <MailIcon /> : <ArrowIcon />}
      </div>
    </a>
  );
}

export function SimpleLinkHub() {
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
            <div className="mx-auto grid h-28 w-28 place-items-center overflow-hidden rounded-[2rem] border border-white/15 bg-white p-3 shadow-2xl shadow-blue-950/40 sm:h-32 sm:w-32">
              <img
                src={profile.mainImage}
                alt="L&L Tech Solutions logo"
                className="h-full w-full object-contain"
              />
            </div>

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

          <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-5">
            <div className="rounded-[1.5rem] bg-white p-5 text-slate-950 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                  <img
                    src={mainBusiness.image}
                    alt={`${mainBusiness.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                    Main Business
                  </p>

                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                    {mainBusiness.name}
                  </h2>

                  <p className="mt-2 font-semibold text-blue-700">
                    {mainBusiness.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {mainBusiness.description}
                  </p>
                </div>
              </div>

              <a
                href={mainBusiness.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Visit L&L Tech Solutions
                <ArrowIcon />
              </a>
            </div>
          </section>

          <section className="mt-6 grid gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur"
              >
                <p className="text-lg font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-6 grid gap-4">
            {primaryLinks.map((link) => (
              <LinkCard key={link.title} {...link} />
            ))}
          </section>

          <footer className="py-10 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Tate Byers. Built for business, media, and digital systems.</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
