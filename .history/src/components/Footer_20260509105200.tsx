import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. Built as a personal brand and creator hub.
        </p>

        <div className="flex gap-5">
          <a className="transition hover:text-cyan-200" href="#links">
            Links
          </a>
          <a className="transition hover:text-cyan-200" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-cyan-200" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}