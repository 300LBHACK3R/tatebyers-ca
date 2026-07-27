export type HubLink = {
  title: string;
  href: string;
  description: string;
};

export type OwnedBrand = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image?: string;
  initials: string;
  href: string;
  tags: string[];
  links: HubLink[];
};

export type ClientProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  initials: string;
  status: "Live" | "Launching Soon";
  href?: string;
  year: string;
};

export type ConceptBuild = {
  slug: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  video?: string;
  href?: string;
  tags: string[];
  year: string;
};

export const profile = {
  name: "Tate Byers",
  location: "Calgary, Alberta, Canada",
  headline:
    "Founder of L&L Tech Solutions, creator of Tates TV, and builder of custom websites and digital systems for real businesses.",
  image: "/images/profile/tate-main.jpg",
  imagePosition: "50% 16%",
};

export const ownedBrands: OwnedBrand[] = [
  {
    slug: "ll-tech-solutions",
    title: "L&L Tech Solutions",
    eyebrow: "Technology Business",
    description:
      "Custom websites, technical support, networking, CCTV, troubleshooting, and dependable technology services for businesses and homeowners.",
    image: "/images/logos/ll-tech.jpg",
    initials: "L&L",
    href: "https://lltechsolutions.ca",
    tags: ["Websites", "Tech Support", "Networking", "CCTV"],
    links: [
      {
        title: "Website",
        href: "https://lltechsolutions.ca",
        description: "Visit the official L&L Tech Solutions website.",
      },
      {
        title: "YouTube",
        href: "https://youtube.com/@LLTechSolutions/videos",
        description:
          "Technology projects, tutorials, service videos, and business updates.",
      },
      {
        title: "TikTok",
        href: "https://www.tiktok.com/@lltechsolutions",
        description:
          "Short-form technology content and project updates.",
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61557129795810",
        description:
          "Business posts, local work, service updates, and public activity.",
      },
    ],
  },
  {
    slug: "tates-tv",
    title: "Tates TV",
    eyebrow: "Creator Platform",
    description:
      "A custom live-TV style platform with channels, guide systems, themed experiences, original uploads, and creator-controlled media.",
    image: "/images/logos/tates-tv.jpg",
    initials: "TTV",
    href: "https://www.tatestv.ca",
    tags: ["Live TV UI", "Channels", "Original Media", "Web Platform"],
    links: [
      {
        title: "Website",
        href: "https://www.tatestv.ca",
        description: "Open the official Tates TV platform.",
      },
    ],
  },
];

export const clientProjects: ClientProject[] = [
  {
    slug: "crestline-painting",
    title: "Crestline Painting Ltd.",
    category: "Painting Contractor Website",
    description:
      "A professional website for a British Columbia painting company serving commercial, multi-family, strata, custom-home, and interior painting projects.",
    image: "/images/client-work/crestline-painting.jpg",
    initials: "CP",
    status: "Live",
    href: "https://www.crestlinepainting.ca",
    year: "2026",
  },
  {
    slug: "tow-n-go-trailers",
    title: "Tow-N-Go Trailers",
    category: "Trailer Rental Website",
    description:
      "A clean, modern website built to present trailer rentals, services, available inventory, and future business growth clearly.",
    image: "/images/client-work/tow-n-go-trailers.jpg",
    initials: "TNG",
    status: "Live",
    href: "https://www.towandgotrailers.ca",
    year: "2026",
  },
  {
    slug: "mckenzie-house-massage",
    title: "McKenzie House Massage",
    category: "Massage Brand & Booking Website",
    description:
      "Heather's upcoming website and digital launch, including refreshed branding, booking integration, photography, video, local SEO, and Google launch support.",
    image: "/images/client-work/mckenzie-house-massage.jpg",
    initials: "MHM",
    status: "Launching Soon",
    year: "2026",
  },
];

/*
 * Add only real concept work here.
 *
 * Concept builds are displayed separately from commissioned client work so
 * visitors always understand which projects were independent portfolio demos.
 */
export const conceptBuilds: ConceptBuild[] = [];

export const socialLinks: HubLink[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tatebyers/",
    description:
      "Professional projects, business activity, and career updates.",
  },
  {
    title: "Tate YouTube",
    href: "https://www.youtube.com/@Tate-byers/videos",
    description:
      "Personal videos, creator content, and project uploads.",
  },
  {
    title: "L&L YouTube",
    href: "https://youtube.com/@LLTechSolutions/videos",
    description:
      "Technology projects, tutorials, and business content.",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@lltechsolutions",
    description:
      "Short-form content, updates, and behind-the-scenes work.",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61557129795810",
    description:
      "Public posts, business updates, and local activity.",
  },
];
