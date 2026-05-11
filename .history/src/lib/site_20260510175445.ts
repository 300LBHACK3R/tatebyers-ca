export const siteConfig = {
  name: "Tate Byers",
  legalName: "Tate Byers",
  creator: "Tate Byers",

  domain: "https://tatebyers.ca",
  title: "Tate Byers | Tech, Gaming, Business & Digital Projects",
  description:
    "The personal hub for Tate Byers — tech builder, gamer, creator, founder of L&L Tech Solutions, and digital problem-solver.",
  tagline: "Tech. Gaming. Business. Built by Tate.",

  email: "hello@tatebyers.ca",
  location: "Calgary, Alberta, Canada",

  business: {
    name: "L&L Tech Solutions",
    url: "https://lltechsolutions.ca",
  },

  social: {
    youtube: "https://youtube.com/@LLTechSolutions/videos",
    tiktok: "https://www.tiktok.com/@lltechsolutions",
    facebook: "https://www.facebook.com/profile.php?id=61557129795810",
    linkedin: "https://www.linkedin.com/in/tatebyers/",
  },

  navigation: {
    home: "/",
    projects: "/projects",
    webBuilds: "/projects/web-builds",
    techSupport: "/projects/tech-support",
    infrastructure: "/projects/infrastructure",
  },
} as const;

export type SiteConfig = typeof siteConfig;