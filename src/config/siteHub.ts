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
  links: HubLink[];
};

export type SiteSuggestion = {
  title: string;
  description: string;
};

export const profile = {
  name: "Tate Byers",
  headline:
    "A personal hub for my business, projects, links, public memories, and creative work.",
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
    highlights: ["Websites", "Tech Support", "Networking", "CCTV"],
    links: [
      {
        title: "Official Website",
        label: "Website",
        description: "Visit the main L&L Tech Solutions website.",
        href: "https://lltechsolutions.ca",
      },
      {
        title: "Email L&L Tech Solutions",
        label: "Contact",
        description: "Reach out for websites, tech support, networking, CCTV, or client systems.",
        href: "mailto:tatebyers06@gmail.com",
      },
      {
        title: "Facebook",
        label: "Social",
        description: "Business updates, local posts, service content, and public updates.",
        href: "https://www.facebook.com/",
      },
      {
        title: "TikTok",
        label: "Short Form",
        description: "Short clips, tech content, before-and-after work, and quick updates.",
        href: "https://www.tiktok.com/",
      },
      {
        title: "YouTube",
        label: "Video",
        description: "Project videos, tutorials, service content, and future uploads.",
        href: "https://www.youtube.com/",
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
    highlights: ["Live TV UI", "Channels", "Retro Media", "Web App"],
    links: [
      {
        title: "Tates TV Website",
        label: "Website",
        description: "Open the Tates TV platform.",
        href: "https://tatestv.ca",
      },
      {
        title: "Project Contact",
        label: "Contact",
        description: "Contact me about Tates TV updates, ideas, or development.",
        href: "mailto:tatebyers06@gmail.com",
      }
    ],
  },
  {
    slug: "creator-projects",
    title: "Creator Projects",
    label: "Projects",
    description:
      "A place for future brands, videos, music, experiments, side projects, and creative launches.",
    image: "/images/logos/creator-projects.jpg",
    initials: "CP",
    highlights: ["Creative Work", "Future Brands", "Media", "Ideas"],
    links: [
      {
        title: "Project Archive",
        label: "Coming Soon",
        description: "Future home for creator projects, screenshots, updates, and launches.",
        href: "mailto:tatebyers06@gmail.com",
      }
    ],
  },
  {
    slug: "personal-family",
    title: "Personal and Family",
    label: "Selected Memories",
    description:
      "A public-friendly area for selected memories, family moments, photos, and personal updates.",
    image: "/images/logos/personal-family.jpg",
    initials: "PF",
    highlights: ["Photos", "Memories", "Family", "Life"],
    links: [
      {
        title: "Public Albums",
        label: "Coming Soon",
        description: "Selected public albums and memories. Private family content should stay protected.",
        href: "mailto:tatebyers06@gmail.com",
      }
    ],
  },
  {
    slug: "hobbies-interests",
    title: "Hobbies and Interests",
    label: "Personal Side",
    description:
      "Collectibles, media, music, finds, ideas, and the personal interests I want to organize over time.",
    image: "/images/logos/hobbies.jpg",
    initials: "HI",
    highlights: ["Collectibles", "Media", "Music", "Finds"],
    links: [
      {
        title: "Hobby Archive",
        label: "Coming Soon",
        description: "Future space for collectibles, finds, media, and personal interests.",
        href: "mailto:tatebyers06@gmail.com",
      }
    ],
  },
  {
    slug: "socials-contact",
    title: "Socials and Contact",
    label: "Main Links",
    description:
      "Fast access to my contact information, social platforms, and public profiles.",
    image: "/images/logos/socials-contact.jpg",
    initials: "@",
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

export const strongSuggestions: SiteSuggestion[] = [
  {
    title: "Add real brand logos for every section",
    description:
      "Use matching square logo images for Tates TV, Creator Projects, Family, Hobbies, and Socials so the hub feels complete and branded.",
  },
  {
    title: "Build a public photo albums area",
    description:
      "Add selected public albums for work, memories, hobbies, and family-friendly moments while keeping private family photos off the public web.",
  },
  {
    title: "Add proof for L&L Tech Solutions",
    description:
      "Add screenshots, project examples, service highlights, before-and-after photos, reviews, and trust badges to make the business section stronger.",
  },
  {
    title: "Add a custom contact form",
    description:
      "Keep email links, but add a polished form for business inquiries so visitors can contact you without opening their email app.",
  },
  {
    title: "Add analytics and search tracking",
    description:
      "Track which cards people click, which sections are popular, and what content should be improved for Google and client outreach.",
  },
];

export function getCollectionBySlug(slug: string) {
  return linkCollections.find((collection) => collection.slug === slug);
}
