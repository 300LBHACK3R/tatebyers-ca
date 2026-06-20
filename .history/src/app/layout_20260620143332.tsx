import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { PWAInstaller } from "@/components/PWAInstaller";

import "./globals.css";

const siteUrl = "https://www.tatebyers.ca";
const siteName = "Tate Byers";
const siteTitle = "Tate Byers | Premium Personal Hub";
const siteDescription =
  "The official personal hub for Tate Byers, featuring L&L Tech Solutions, Petal & Pulse Massage, Tates TV, business links, creator projects, contact information, and selected public memories.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: "Tate Byers Premium Hub",
  authors: [{ name: "Tate Byers" }],
  creator: "Tate Byers",
  publisher: "L&L Tech Solutions",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Tate Byers",
    "L&L Tech Solutions",
    "Petal & Pulse Massage",
    "Tates TV",
    "Calgary tech support",
    "Calgary website design",
    "website design Calgary",
    "tech support Calgary",
    "networking Calgary",
    "CCTV Calgary",
    "Calgary massage",
    "mobile massage Calgary",
    "non-RMT massage Calgary",
    "personal hub",
    "personal portfolio",
    "creator projects",
  ],
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "Tate Hub",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "Tate Byers Premium Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/icon-512.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#b70f1b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}