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
  featured?: boolean;
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
    label: "Main Business",
    description:
      "Website design, tech support, networking, CCTV, troubleshooting, and client systems.",
    image: "/images/logos/ll-tech.jpg",
    initials: "L&L",
    featured: true,
    primaryHref: "https://lltechsolutions.ca",
    highlights: ["Websites", "Tech Support", "Networking", "CCTV"],
    links: [
      {
        title: "Website",
        label: "Official Site",
        description: "Visit the main L&L Tech Solutions website.",
        href: "https://lltechsolutions.ca",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Project videos, tutorials, service content, and future uploads.",
        href: "https://www.youtube.com/",
      },
      {
        title: "TikTok",
        label: "Short Form",
        description: "Short clips, tech content, before-and-after work, and quick updates.",
        href: "https://www.tiktok.com/",
      },
      {
        title: "Facebook",
        label: "Social",
        description: "Business updates, local posts, service content, and public updates.",
        href: "https://www.facebook.com/",
      },
      {
        title: "Email",
        label: "Contact",
        description: "Reach out for websites, tech support, networking, CCTV, or client systems.",
        href: "mailto:tatebyers06@gmail.com",
      }
    ],
  },
  {
    slug: "petal-pulse-massage",
    title: "Petal & Pulse Massage",
    label: "Massage Services",
    description:
      "Professional non-RMT massage services in Calgary, including relaxation, deep tissue, and mobile massage options.",
    image: "/images/logos/petal-pulse.jpg",
    initials: "P&P",
    primaryHref: "mailto:tatebyers06@gmail.com",
    highlights: ["Calgary", "Mobile Massage", "Relaxation", "Deep Tissue"],
    links: [
      {
        title: "Book or Inquire",
        label: "Contact",
        description: "Reach out to ask about availability, services, and booking options.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "Facebook",
        label: "Social",
        description: "Petal & Pulse updates, availability, posts, and service information.",
        href: "https://www.facebook.com/",
      },
      {
        title: "TikTok",
        label: "Short Form",
        description: "Massage content, updates, behind-the-scenes clips, and service posts.",
        href: "https://www.tiktok.com/",
      }
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
      }
    ],
  },
  {
    slug: "socials-contact",
    title: "Socials and Contact",
    label: "Main Links",
    description:
      "Fast access to my contact information, public profiles, and social platforms.",
    image: "/images/logos/socials-contact.jpg",
    initials: "@",
    primaryHref: "mailto:tatebyers06@gmail.com",
    highlights: ["Email", "Socials", "Profiles", "Contact"],
    links: [
      {
        title: "Email Tate",
        label: "Email",
        description: "Best direct contact for business, projects, questions, and collaborations.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "Facebook",
        label: "Social",
        description: "Public posts and updates.",
        href: "https://www.facebook.com/",
      },
      {
        title: "TikTok",
        label: "Short Form",
        description: "Short videos, clips, and quick updates.",
        href: "https://www.tiktok.com/",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Videos, uploads, project content, and future media.",
        href: "https://www.youtube.com/",
      }
    ],
  },
];

export function getCollectionBySlug(slug: string) {
  return linkCollections.find((collection) => collection.slug === slug);
}
