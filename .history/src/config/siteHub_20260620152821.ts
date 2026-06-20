export type HubLink = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export type LinkCollection = {
  slug: string;
  title: string;
  label: string;
  description: string;
  image?: string;
  initials: string;
  highlights?: string[];
  primaryHref?: string;
  links: HubLink[];
};

export const profile = {
  name: "Tate Byers",
  headline:
    "A premium personal hub for my businesses, projects, links, and selected public memories.",
  location: "Calgary, Alberta, Canada",
  email: "tatebyers06@gmail.com",
  mainImage: "/images/profile/tate-main.jpg",
};

export const linkCollections: LinkCollection[] = [
  {
    slug: "ll-tech-solutions",
    title: "L&L Tech Solutions",
    label: "Tech Services",
    description:
      "Website design, technical support, networking, CCTV, troubleshooting, and client systems for homes and businesses.",
    image: "/images/logos/ll-tech.jpg",
    initials: "L&L",
    primaryHref: "https://lltechsolutions.ca",
    highlights: ["Websites", "Tech Support", "Networking", "CCTV"],
    links: [
      {
        title: "Website",
        label: "Official Site",
        description: "Visit the official L&L Tech Solutions website.",
        href: "https://lltechsolutions.ca",
      },
      {
        title: "Email",
        label: "Contact",
        description:
          "Reach out for websites, tech support, networking, CCTV, or client systems.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "petal-pulse-massage",
    title: "Petal & Pulse Massage",
    label: "Massage Services",
    description:
      "Professional non-RMT massage services in Calgary, including relaxation, deep tissue, sensory flow, and mobile massage options.",
    image: "/images/logos/petal-pulse.jpg",
    initials: "P&P",
    primaryHref: "mailto:tatebyers06@gmail.com",
    highlights: ["Calgary", "Mobile Massage", "Relaxation", "Deep Tissue"],
    links: [
      {
        title: "Book or Inquire",
        label: "Contact",
        description:
          "Reach out to ask about availability, services, and booking options.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "tates-tv",
    title: "Tates TV",
    label: "Creator Project",
    description:
      "A custom live-TV style web platform with channels, guide systems, themes, uploads, and media controls.",
    image: "/images/logos/tates-tv.jpg",
    initials: "TTV",
    primaryHref: "https://tatestv.ca",
    highlights: ["Live TV UI", "Channels", "Retro Media", "Web App"],
    links: [
      {
        title: "Website",
        label: "Official Site",
        description: "Open the Tates TV platform.",
        href: "https://tatestv.ca",
      },
      {
        title: "Contact Tate",
        label: "Contact",
        description: "Contact me about Tates TV updates, ideas, or development.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "socials-contact",
    title: "Socials and Contact",
    label: "Contact Links",
    description:
      "Fast access to my direct contact information and public social profiles.",
    image: "/images/logos/socials-contact.jpg",
    initials: "@",
    primaryHref: "mailto:tatebyers06@gmail.com",
    highlights: ["Email", "Socials", "Profiles", "Contact"],
    links: [
      {
        title: "Email Tate",
        label: "Email",
        description:
          "Best direct contact for business, projects, questions, and collaborations.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "L&L TikTok",
        label: "Short Form",
        description: "Short videos, clips, quick updates, and public content.",
        href: "https://www.tiktok.com/@lltechsolutions",
      },
      {
        title: "Tate Byers TikTok",
        label: "Short Form",
        description: "Short videos, clips, quick updates, and public content.",
        href: "https://www.tiktok.com/@tatebyers_",
      },
    ],
  },
];

export function getCollectionBySlug(slug: string) {
  return linkCollections.find((collection) => collection.slug === slug);
}