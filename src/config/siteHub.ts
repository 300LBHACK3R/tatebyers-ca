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
  links: HubLink[];
};

export const profile = {
  name: "Tate Byers",
  headline: "Business, technology, creator projects, personal links, and selected memories.",
  location: "Calgary, Alberta",
  email: "tatebyers06@gmail.com",
  mainImage: "/images/logos/ll-tech.jpg",
};

export const linkCollections: LinkCollection[] = [
  {
    slug: "ll-tech-solutions",
    title: "L&L Tech Solutions",
    label: "Main Business",
    description:
      "My technology business for websites, tech support, networking, CCTV, troubleshooting, and client systems.",
    image: "/images/logos/ll-tech.jpg",
    initials: "L&L",
    featured: true,
    links: [
      {
        title: "Official Website",
        label: "Website",
        description: "Main L&L Tech Solutions website.",
        href: "https://lltechsolutions.ca",
      },
      {
        title: "Contact L&L Tech",
        label: "Contact",
        description: "Reach out for websites, tech support, networking, CCTV, or digital systems.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Business videos, tutorials, project updates, and future uploads.",
        href: "https://www.youtube.com/",
      },
      {
        title: "TikTok",
        label: "Short Form",
        description: "Short tech clips, updates, before-and-after work, and business content.",
        href: "https://www.tiktok.com/",
      },
      {
        title: "Facebook",
        label: "Social",
        description: "Business updates, local posts, and public content.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  {
    slug: "tates-tv",
    title: "Tates TV",
    label: "Creator Project",
    description:
      "My custom live-TV style web platform with channels, guide systems, themes, and media experiments.",
    initials: "TTV",
    links: [
      {
        title: "Tates TV Website",
        label: "Website",
        description: "Open the live Tates TV project.",
        href: "https://tatestv.ca",
      },
      {
        title: "Project Updates",
        label: "Updates",
        description: "Future home for screenshots, logs, updates, and release notes.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "personal",
    title: "Personal / Family",
    label: "Selected Memories",
    description:
      "A public-friendly space for selected family photos, personal memories, and life updates.",
    initials: "TB",
    links: [
      {
        title: "Photo Albums",
        label: "Coming Soon",
        description: "Selected public albums and memories. Private family photos should stay protected.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "Contact Tate",
        label: "Direct",
        description: "Send me a message directly.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "hobbies",
    title: "Hobbies",
    label: "Personal Interests",
    description:
      "A place for collectibles, music, media, creative projects, experiments, and fun side interests.",
    initials: "FUN",
    links: [
      {
        title: "Collectibles / Finds",
        label: "Archive",
        description: "Future space for items, collections, finds, and valuation notes.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "Music / Creative",
        label: "Creative",
        description: "Future space for music, writing, videos, and creative work.",
        href: "mailto:tatebyers06@gmail.com",
      },
    ],
  },
  {
    slug: "socials-contact",
    title: "Socials / Contact",
    label: "Main Links",
    description:
      "Fast access to my main contact and social platforms.",
    initials: "@",
    links: [
      {
        title: "Email Tate",
        label: "Email",
        description: "Best direct contact for business, projects, and questions.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Videos, updates, project logs, and creator content.",
        href: "https://www.youtube.com/",
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
    ],
  },
];

export function getCollectionBySlug(slug: string) {
  return linkCollections.find((collection) => collection.slug === slug);
}
