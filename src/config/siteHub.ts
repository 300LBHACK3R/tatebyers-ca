export type HubLink = {
  title: string;
  description: string;
  href: string;
  label: string;
  featured?: boolean;
};

export const profile = {
  name: "Tate Byers",
  headline: "Websites, tech support, creator projects, and digital systems.",
  location: "Calgary, Alberta",
  email: "tatebyers06@gmail.com",
  mainImage: "/images/logos/ll-tech.jpg",
};

export const mainBusiness = {
  name: "L&L Tech Solutions",
  tagline: "Websites • Tech Support • Networking • CCTV",
  description:
    "My main technology business for website builds, digital support, troubleshooting, networking, CCTV, and client systems.",
  image: "/images/logos/ll-tech.jpg",
  href: "https://lltechsolutions.ca",
};

export const primaryLinks: HubLink[] = [
  {
    title: "L&L Tech Solutions",
    label: "Main Business",
    description: "Website design, tech support, networking, CCTV, and client systems.",
    href: "https://lltechsolutions.ca",
    featured: true,
  },
  {
    title: "Contact Tate",
    label: "Direct Contact",
    description: "Reach out for websites, tech help, business questions, or collaborations.",
    href: "mailto:tatebyers06@gmail.com",
    featured: true,
  },
  {
    title: "Tate’s TV",
    label: "Creator Project",
    description: "Custom live-TV style web platform with channels, themes, and media systems.",
    href: "https://tatestv.ca",
  },
  {
    title: "YouTube",
    label: "Video Archive",
    description: "Videos, updates, project logs, tutorials, and creator content.",
    href: "https://www.youtube.com/",
  },
  {
    title: "Facebook",
    label: "Social",
    description: "Personal updates, business updates, and public posts.",
    href: "https://www.facebook.com/",
  },
  {
    title: "TikTok",
    label: "Short Form",
    description: "Short videos, edits, clips, and quick updates.",
    href: "https://www.tiktok.com/",
  },
];

export const quickStats = [
  {
    value: "Websites",
    label: "Design and development",
  },
  {
    value: "Tech",
    label: "Support and troubleshooting",
  },
  {
    value: "Media",
    label: "Creator projects and platforms",
  },
];
