import type { ComponentType } from "react";
import {
  Activity,
  BriefcaseBusiness,
  Cpu,
  Gamepad2,
  Globe2,
  Mail,
  MessageCircle,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Terminal,
  Video,
  Zap,
} from "lucide-react";

export type HubLink = {
  title: string;
  systemLabel: string;
  description: string;
  href: string;
  label: string;
  status: "PRIMARY" | "LIVE" | "READY" | "SOON";
  featured?: boolean;
  icon: ComponentType<{ className?: string }>;
};

export type ProjectItem = {
  title: string;
  systemLabel: string;
  description: string;
  href: string;
  tags: string[];
  status: string;
  icon: ComponentType<{ className?: string }>;
};

export type SystemStat = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export const hubLinks: HubLink[] = [
  {
    title: "L&L Tech Solutions",
    systemLabel: "BUSINESS_PORTAL",
    description:
      "Custom websites, tech support, networking, CCTV, digital setup, and professional technology services.",
    href: "https://lltechsolutions.ca",
    label: "Enter business portal",
    status: "PRIMARY",
    featured: true,
    icon: BriefcaseBusiness,
  },
  {
    title: "Facebook",
    systemLabel: "SOCIAL_FEED",
    description:
      "Service posts, updates, local work, business announcements, listings, and public-facing activity.",
    href: "https://facebook.com/",
    label: "Open Facebook",
    status: "LIVE",
    icon: MessageCircle,
  },
  {
    title: "TikTok",
    systemLabel: "CLIP_ENGINE",
    description:
      "Gaming clips, tech projects, behind-the-scenes work, creator content, and fast social posts.",
    href: "https://tiktok.com/",
    label: "Launch TikTok",
    status: "LIVE",
    icon: Play,
  },
  {
    title: "YouTube",
    systemLabel: "VIDEO_ARCHIVE",
    description:
      "Long-form videos, future tech breakdowns, gaming uploads, project logs, and tutorials.",
    href: "https://youtube.com/",
    label: "Open YouTube",
    status: "READY",
    icon: Video,
  },
  {
    title: "Gaming Hub",
    systemLabel: "CREATOR_MODE",
    description:
      "A future home for gaming content, streams, highlights, creator experiments, and digital identity.",
    href: "#creator",
    label: "View creator system",
    status: "SOON",
    icon: Gamepad2,
  },
  {
    title: "Contact Channel",
    systemLabel: "OPEN_CHANNEL",
    description:
      "Business inquiries, collaborations, website work, tech questions, or direct contact with Tate.",
    href: "mailto:hello@tatebyers.ca",
    label: "Open contact",
    status: "READY",
    icon: Mail,
  },
];

export const projects: ProjectItem[] = [
  {
    title: "L&L Tech Solutions",
    systemLabel: "ACTIVE BUSINESS SYSTEM",
    description:
      "The main technology company behind my website builds, client support, network work, CCTV installs, digital setup, and technical services.",
    href: "https://lltechsolutions.ca",
    tags: ["Websites", "Tech Support", "Networking", "CCTV"],
    status: "ONLINE",
    icon: ShieldCheck,
  },
  {
    title: "Retro TV / Tate’s TV",
    systemLabel: "EXPERIMENTAL BUILD",
    description:
      "A custom live-TV inspired web app with channels, guide systems, themes, nostalgia, and creator-controlled media.",
    href: "#",
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