export type ProjectCategory = "web" | "tech" | "infrastructure" | "creator";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  image: string;
  href: string;
  year: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "tatebyers-ca",
    title: "TateByers.ca",
    slug: "tatebyers-ca",
    category: "web",
    description:
      "A personal operating-system style portfolio with Matrix and XP-inspired modes, grouped link routing, terminal navigation, and interactive desktop windows.",
    image: "/opengraph-image.png",
    href: "/",
    year: "2026",
    tags: ["Next.js", "React", "Tailwind", "Portfolio OS"],
    featured: true,
  },
  {
    id: "ll-tech-solutions",
    title: "L&L Tech Solutions",
    slug: "ll-tech-solutions",
    category: "web",
    description:
      "Main technology brand for custom websites, tech support, networking, CCTV, field service work, and digital systems.",
    image: "/opengraph-image.png",
    href: "https://lltechsolutions.ca",
    year: "2026",
    tags: ["Web Design", "Tech Support", "Networking", "CCTV"],
    featured: true,
  },
  {
    id: "retro-tv",
    title: "Retro TV / Tate’s TV",
    slug: "retro-tv",
    category: "creator",
    description:
      "A custom live-TV style web app concept with channels, guide systems, themes, creator-controlled media, and nostalgic broadcast UI.",
    image: "/opengraph-image.png",
    href: "/",
    year: "2026",
    tags: ["Next.js", "Streaming UI", "Gaming", "Creator Tools"],
    featured: true,
  },
  {
    id: "network-systems",
    title: "Network & Field Systems",
    slug: "network-systems",
    category: "infrastructure",
    description:
      "On-site technical work including Ethernet wall port activation, network cleanup, hardware setup, troubleshooting, and structured system planning.",
    image: "/opengraph-image.png",
    href: "/",
    year: "2026",
    tags: ["Networking", "Diagnostics", "Installations", "Field Work"],
  },
];