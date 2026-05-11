export const PROJECT_CATEGORIES = [
  "Web Build",
  "Tech Support",
  "Infrastructure",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

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
  external?: boolean;
};

export const projects: Project[] = [
  {
    id: "tatebyers-ca",
    title: "TateByers.ca",
    slug: "tatebyers-ca",
    category: "Web Build",
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
    category: "Web Build",
    description:
      "Main technology brand for custom websites, tech support, networking, CCTV, field service work, and digital systems.",
    image: "/opengraph-image.png",
    href: "https://lltechsolutions.ca",
    year: "2026",
    tags: ["Web Design", "Tech Support", "Networking", "CCTV"],
    featured: true,
    external: true,
  },
  {
    id: "retro-tv",
    title: "Retro TV / Tate’s TV",
    slug: "retro-tv",
    category: "Web Build",
    description:
      "A custom live-TV style web app concept with channels, guide systems, themes, creator-controlled media, and nostalgic broadcast UI.",
    image: "/opengraph-image.png",
    href: "/projects/web-builds",
    year: "2026",
    tags: ["Next.js", "Streaming UI", "Gaming", "Creator Tools"],
    featured: true,
  },
  {
    id: "web-build-systems",
    title: "Web Build Systems",
    slug: "web-build-systems",
    category: "Web Build",
    description:
      "Custom websites, business landing pages, SEO-ready structures, interactive interfaces, and high-performance digital systems.",
    image: "/opengraph-image.png",
    href: "/projects/web-builds",
    year: "2026",
    tags: ["SEO", "Next.js", "React", "Business Websites"],
  },
  {
    id: "device-diagnostics",
    title: "Device Diagnostics & Support",
    slug: "device-diagnostics",
    category: "Tech Support",
    description:
      "Hands-on troubleshooting, computer setup, repair planning, performance cleanup, and client-facing technical support work.",
    image: "/opengraph-image.png",
    href: "/projects/tech-support",
    year: "2026",
    tags: [
      "Diagnostics",
      "Computer Setup",
      "Troubleshooting",
      "Client Support",
    ],
  },
  {
    id: "network-systems",
    title: "Network & Field Systems",
    slug: "network-systems",
    category: "Infrastructure",
    description:
      "On-site technical work including Ethernet wall port activation, network cleanup, hardware setup, troubleshooting, and structured system planning.",
    image: "/opengraph-image.png",
    href: "/projects/infrastructure",
    year: "2026",
    tags: ["Networking", "Diagnostics", "Installations", "Field Work"],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}