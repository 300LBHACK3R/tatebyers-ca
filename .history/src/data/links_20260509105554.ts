import {
  BriefcaseBusiness,
  Gamepad2,
  Globe2,
  Mail,
  Play,
  Sparkles,
  Video,
  MessageCircle,
} from "lucide-react";

export type HubLink = {
  title: string;
  description: string;
  href: string;
  label: string;
  featured?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

export type ProjectItem = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  tags: string[];
};

export const hubLinks: HubLink[] = [
  {
    title: "L&L Tech Solutions",
    description:
      "Custom websites, tech support, networking, CCTV, digital setup, and professional technology services.",
    href: "https://lltechsolutions.ca",
    label: "Visit business site",
    featured: true,
    icon: BriefcaseBusiness,
  },
  {
    title: "Facebook",
    description:
      "Follow my updates, local service posts, marketplace listings, tech work, and business announcements.",
    href: "https://facebook.com/",
    label: "View Facebook",
    icon: MessageCircle,
  },
  {
    title: "TikTok",
    description:
      "Gaming clips, tech projects, behind-the-scenes builds, quick content, and creator updates.",
    href: "https://tiktok.com/",
    label: "Watch TikToks",
    icon: Play,
  },
  {
    title: "YouTube",
    description:
      "Long-form videos, future tech content, gaming uploads, tutorials, and project breakdowns.",
    href: "https://youtube.com/",
    label: "Open YouTube",
    icon: Video,
  },
  {
    title: "Gaming / Creator Hub",
    description:
      "My space for gaming content, future streams, creator links, highlights, and digital experiments.",
    href: "#creator",
    label: "View creator side",
    icon: Gamepad2,
  },
  {
    title: "Contact Tate",
    description:
      "Business inquiries, collaboration ideas, tech questions, website work, or general contact.",
    href: "mailto:hello@tatebyers.ca",
    label: "Contact me",
    icon: Mail,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "L&L Tech Solutions",
    eyebrow: "Business Brand",
    description:
      "My main technology company for custom websites, tech support, networking, CCTV, digital setup, and client-facing tech work.",
    href: "https://lltechsolutions.ca",
    tags: ["Websites", "Tech Support", "Networking", "CCTV"],
  },
  {
    title: "Retro TV / Tate’s TV",
    eyebrow: "Personal Build",
    description:
      "A custom live-TV inspired web app project with guide systems, channels, themes, and a nostalgic streaming-style experience.",
    href: "#",
    tags: ["Next.js", "React", "Streaming UI", "Gaming"],
  },
  {
    title: "Creator Content",
    eyebrow: "Gaming & Media",
    description:
      "A growing content lane for gaming clips, tech builds, behind-the-scenes work, business growth, and project showcases.",
    href: "#creator",
    tags: ["TikTok", "YouTube", "Gaming", "Tech"],
  },
];

export const stats = [
  {
    value: "Tech",
    label: "Websites, systems, troubleshooting, and digital setup.",
    icon: Globe2,
  },
  {
    value: "Gaming",
    label: "Content, clips, creator projects, and future streams.",
    icon: Gamepad2,
  },
  {
    value: "Business",
    label: "Founder of L&L Tech Solutions and builder of digital brands.",
    icon: Sparkles,
  },
];