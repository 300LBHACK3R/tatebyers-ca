import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { PWAInstaller } from "@/components/PWAInstaller";

import "./globals.css";

const siteUrl = "https://www.tatebyers.ca";
const siteName = "Tate Byers";
const siteTitle = "Tate Byers | Businesses, Projects & Contact";
const siteDescription =
  "The official personal hub for Tate Byers in Calgary, featuring L&L Tech Solutions, Petal & Pulse Massage, Tates TV, business links, creator projects, contact information, and selected public memories.";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tate Byers",
    url: siteUrl,
    email: "mailto:tatebyers06@gmail.com",
    image: `${siteUrl}/images/profile/tate-main.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "Alberta",
      addressCountry: "CA",
    },
    sameAs: [
      "https://lltechsolutions.ca",
      "https://tatestv.ca",
      "https://www.tiktok.com/@tatebyers06",
    ],
    owns: [
      {
        "@type": "Organization",
        name: "L&L Tech Solutions",
        url: "https://lltechsolutions.ca",
      },
      {
        "@type": "LocalBusiness",
        name: "Petal & Pulse Massage",
        areaServed: "Calgary, Alberta, Canada",
        description:
          "Professional non-RMT massage services in Calgary, including relaxation, deep tissue, sensory flow, and mobile massage options.",
      },
      {
        "@type": "WebApplication",
        name: "Tates TV",
        url: "https://tatestv.ca",
        applicationCategory: "EntertainmentApplication",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "en-CA",
    description: siteDescription,
    publisher: {
      "@type": "Person",
      name: "Tate Byers",
    },
  },
];

function getStructuredDataScript() {
  return JSON.stringify(structuredData).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: "Tate Byers Premium Hub",
  authors: [{ name: "Tate Byers", url: siteUrl }],
  creator: "Tate Byers",
  publisher: "L&L Tech Solutions",
  referrer: "strict-origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Tate Byers",
    "Tate Byers Calgary",
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
    "creator projects",
    "Calgary business owner",
  ],
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tate Byers Premium Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@tatebyers06",
    images: ["/twitter-image"],
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
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#b70f1b",
    "theme-color": "#b70f1b",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: getStructuredDataScript(),
          }}
        />
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}