import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tate Byers Premium Hub",
    short_name: "Tate Hub",
    description:
      "The official personal hub for Tate Byers, featuring L&L Tech Solutions, Petal & Pulse Massage, Tates TV, business links, creator projects, contact information, and selected public memories.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#050505",
    theme_color: "#b70f1b",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}