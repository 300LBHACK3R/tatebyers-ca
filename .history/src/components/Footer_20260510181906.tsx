import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

type FooterLink = {
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { label: "Links", href: "#links" },
  { label: "Systems", href: "#systems" },
  { label: "Creator", href: "#creator" },
  { label: "Contact", href: "#contact" },
];

function getBusinessUrl() {
  if ("business" in siteConfig && siteConfig.business?.url) {
    return siteConfig.business.url;
  }

  if ("businessUrl" in siteConfig && siteConfig.businessUrl) {
    return siteConfig.businessUrl;
  }

  return "https://lltechsolutions.ca";
}

export function Footer() {
  const year = new Date().getFullYear();
  const businessUrl = getBusinessUrl();

  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm leading-7 text-slate-500">
            © {year} {siteConfig.name}. Built as a personal brand, creator hub,
            and digital command center.
          </p>

          <a
            href={businessUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open L&L Tech Solutions in a new tab"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-200/80 transition hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50"
          >
            L&amp;L Tech Solutions
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
        >
          {footerLinks.map((item) => (
            <a
              key={item.href}
              className="text-sm font-bold text-slate-500 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}