import type { MetadataRoute } from "next";
import { linkCollections } from "@/config/siteHub";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tatebyers.ca";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...linkCollections.map((collection) => ({
      url: `${baseUrl}/links/${collection.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: collection.featured ? 0.9 : 0.75,
    })),
  ];
}
