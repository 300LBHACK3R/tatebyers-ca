import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: SitemapRoute[] = [
  {
    path: "",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: "/projects",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    path: "/projects/web-builds",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/projects/tech-support",
    changeFrequency: "monthly",
    priority: 0.75,
  },
  {
    path: "/projects/infrastructure",
    changeFrequency: "monthly",
    priority: 0.75,
  },
];

function buildUrl(path: string) {
  const domain = siteConfig.domain.replace(/\/$/, "");
  return `${domain}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: buildUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}