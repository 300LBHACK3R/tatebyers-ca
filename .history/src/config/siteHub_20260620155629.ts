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
  mainImage: "/images/profile/tate-main.jpg",
};

export const linkCollections: LinkCollection[] = [
  {
    slug: "ll-tech-solutions",
    title: "L&L Tech Solutions",
    label: "Tech Services",
    description:
      "Website design & Development, technical support, networking, CCTV, troubleshooting, and client systems for homes and businesses.",
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
        title: "L&L TikTok",
        label: "Short Form",
        description: "Short videos, quick updates, and public content.",
        href: "https://www.tiktok.com/@lltechsolutions",
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
    highlights: ["Calgary", "Mobile Massage", "Relaxation", "Deep Tissue"],
    links: [],
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
    ],
  },
  {
    slug: "social-links",
    title: "Social Links",
    label: "Social Links",
    description:
      "All of my public social platforms, creator updates, business activity, short-form posts, and behind-the-scenes content.",
    initials: "@",
    primaryHref: "https://www.tiktok.com/@tatebyers06",
    highlights: ["TikTok", "Facebook", "YouTube", "Instagram"],
    links: [
      {
        title: "Tate Byers TikTok",
        label: "Short Form",
        description: "Short videos, quick updates, and public content.",
        href: "https://www.tiktok.com/@tatebyers_",
      },
      {
        title: "The True Standard TikTok",
        label: "Short Form",
        description: "Short videos, quick updates, and public content.",
        href: "https://www.tiktok.com/@thetruestandard",
      },

      // Replace these with your exact profile links when ready.
      {
        title: "Facebook",
        label: "Social",
        description: "Public posts, updates, and business activity.",
        href: "https://www.facebook.com/profile.php?id=61557129795810",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Videos, uploads, project content, and future media.",
        href: "https://www.youtube.com/",
      },
      {
        title: "Instagram",
        label: "Social",
        description: "Photos, stories, updates, and public content.",
        href: "https://www.instagram.com/",
      },
    ],
  },
];

export function getCollectionBySlug(slug: string) {
  return linkCollections.find((collection) => collection.slug === slug);
}