import type { ComponentType } from "react";
import {
  Activity,
  BriefcaseBusiness,
  Cpu,
  Gamepad2,
  Globe2,
  Mail,
  MessageCircle,
  Monitor,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Terminal,
  Video,
  Zap,
} from "lucide-react";

export type HubLinkStatus = "PRIMARY" | "LIVE" | "READY" | "SOON";

export type HubLinkGroup =
  | "Business"
  | "YouTube"
  | "Social"
  | "Creator"
  | "Contact";

export type HubLink = {
  title: string;
  systemLabel: string;
  description: string;
  href: string;
  label: string;
  status: HubLinkStatus;
  group: HubLinkGroup;
  featured?: boolean;
  external?: boolean;
  icon: ComponentType<{ className?: string }>;
};

export type ProjectItem = {
  title: string;
  systemLabel: string;
  description: string;
  href: string;
  tags: string[];
  status: string;
  external?: boolean;
  icon: ComponentType<{ className?: string }>;
};

export type SystemStat = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export const socialUrls = {
  llTech: "https://lltechsolutions.ca",
  facebook: "https://www.facebook.com/profile.php?id=61557129795810",
  tiktok: "https://www.tiktok.com/@lltechsolutions",
  youtubeMain: "https://youtube.com/@LLTechSolutions/videos",
  youtubeGaming: "https://youtube.com/@LLTechSolutions/videos",
  youtubeTech: "https://youtube.com/@LLTechSolutions/videos",
  linkedin: "https://www.linkedin.com/in/tatebyers/",
  email: "mailto:hello@tatebyers.ca",
} as const;

export const hubLinks: HubLink[] = [
  {
    title: "L&L Tech Solutions",
    systemLabel: "BUSINESS_PORTAL",
    description:
      "Custom websites, tech support, networking, CCTV, digital setup, and professional technology services.",
    href: socialUrls.llTech,
    label: "Enter business portal",
    status: "PRIMARY",
    group: "Business",
    featured: true,
    external: true,
    icon: BriefcaseBusiness,
  },
  {
    title: "Main YouTube",
    systemLabel: "VIDEO_ARCHIVE",
    description:
      "Long-form videos, project logs, tutorials, gaming uploads, and future creator content.",
    href: socialUrls.youtubeMain,
    label: "Open YouTube",
    status: "READY",
    group: "YouTube",
    featured: true,
    external: true,
    icon: Video,
  },
  {
    title: "Gaming YouTube",
    systemLabel: "GAMING_ARCHIVE",
    description:
      "Gaming clips, highlights, uploads, future streams, and creator experiments.",
    href: socialUrls.youtubeGaming,
    label: "Open gaming channel",
    status: "READY",
    group: "YouTube",
    external: true,
    icon: Gamepad2,
  },
  {
    title: "Tech / Builds YouTube",
    systemLabel: "TECH_MEDIA",
    description:
      "Website builds, technical projects, repair content, tutorials, and behind-the-scenes work.",
    href: socialUrls.youtubeTech,
    label: "Open tech channel",
    status: "READY",
    group: "YouTube",
    external: true,
    icon: Monitor,
  },
  {
    title: "Facebook",
    systemLabel: "SOCIAL_FEED",
    description:
      "Service posts, updates, local work, business announcements, listings, and public-facing activity.",
    href: socialUrls.facebook,
    label: "Open Facebook",
    status: "LIVE",
    group: "Social",
    external: true,
    icon: MessageCircle,
  },
  {
    title: "TikTok",
    systemLabel: "CLIP_ENGINE",
    description:
      "Gaming clips, tech projects, behind-the-scenes work, creator content, and fast social posts.",
    href: socialUrls.tiktok,
    label: "Launch TikTok",
    status: "LIVE",
    group: "Social",
    external: true,
    icon: Play,
  },
  {
    title: "LinkedIn",
    systemLabel: "PROFESSIONAL_PROFILE",
    description:
      "Professional updates, projects, business activity, technical work, and career-facing content.",
    href: socialUrls.linkedin,
    label: "Open LinkedIn",
    status: "READY",
    group: "Social",
    external: true,
    icon: BriefcaseBusiness,
  },
  {
    title: "Gaming Hub",
    systemLabel: "CREATOR_MODE",
    description:
      "A future home for gaming content, streams, highlights, creator experiments, and digital identity.",
    href: "#creator",
    label: "View creator system",
    status: "SOON",
    group: "Creator",
    icon: Gamepad2,
  },
  {
    title: "Contact Channel",
    systemLabel: "OPEN_CHANNEL",
    description:
      "Business inquiries, collaborations, website work, tech questions, or direct contact with Tate.",
    href: socialUrls.email,
    label: "Open contact",
    status: "READY",
    group: "Contact",
    icon: Mail,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "L&L Tech Solutions",
    systemLabel: "ACTIVE BUSINESS SYSTEM",
    description:
      "The main technology company behind website builds, client support, network work, CCTV installs, digital setup, and technical services.",
    href: socialUrls.llTech,
    tags: ["Websites", "Tech Support", "Networking", "CCTV"],
    status: "ONLINE",
    external: true,
    icon: ShieldCheck,
  },
  {
    title: "TateByers.ca",
    systemLabel: "PERSONAL PORTFOLIO OS",
    description:
      "A Matrix and XP-inspired personal operating-system interface for links, projects, creator channels, and digital identity.",
    href: "/",
    tags: ["Next.js", "React", "Tailwind", "Portfolio"],
    status: "LIVE",
    icon: Terminal,
  },
  {
    title: "Retro TV / Tate’s TV",
    systemLabel: "EXPERIMENTAL BUILD",
    description:
      "A custom live-TV inspired web app with channels, guide systems, themes, nostalgia, and creator-controlled media.",
    href: "/projects/web-builds",
    tags: ["Next.js", "React", "Streaming UI", "Gaming"],
    status: "IN DEVELOPMENT",
    icon: Radio,
  },
  {
    title: "Creator Content",
    systemLabel: "MEDIA PIPELINE",
    description:
      "Gaming clips, tech content, behind-the-scenes builds, business growth content, tutorials, and personal brand media.",
    href: "#creator",
    tags: ["TikTok", "YouTube", "Gaming", "Tech"],
    status: "EXPANDING",
    icon: Activity,
  },
];

export const stats: SystemStat[] = [
  {
    value: "TECH",
    label: "Websites, systems, troubleshooting, and digital builds.",
    icon: Cpu,
  },
  {
    value: "GAMING",
    label: "Creator content, clips, experiments, and future streams.",
    icon: Gamepad2,
  },
  {
    value: "BUSINESS",
    label: "Founder of L&L Tech Solutions and builder of digital brands.",
    icon: Sparkles,
  },
  {
    value: "ONLINE",
    label: "TateByers.ca command center active.",
    icon: Zap,
  },
  {
    value: "CANADA",
    label: "Personal brand and tech presence based in Alberta.",
    icon: Globe2,
  },
  {
    value: "BUILDING",
    label: "Current mode: projects, content, business, and growth.",
    icon: Terminal,
  },
];

export const featuredHubLinks = hubLinks.filter((link) => link.featured);

export function getHubLinksByGroup(group: HubLinkGroup) {
  return hubLinks.filter((link) => link.group === group);
}

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}