import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { PWAInstaller } from "@/components/PWAInstaller";

import "./globals.css";

const siteUrl = "https://www.tatebyers.ca";
const siteName = "Tate Byers";
const siteTitle = "Tate Byers | L&L Tech Solutions & Client Website Work";
const siteDescription =
  "The official personal hub for Tate Byers, founder of L&L Tech Solutions and creator of Tates TV, featuring owned brands, social links, and selected client websites including Crestline Painting and Tow-N-Go Trailers.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Tate Byers",
      url: siteUrl,
      image: `${siteUrl}/images/profile/tate-main.jpg`,
      jobTitle: "Founder of L&L Tech Solutions",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary",
        addressRegion: "Alberta",
        addressCountry: "CA",
      },
      sameAs: [
        "https://lltechsolutions.ca",
        "https://www.tatestv.ca",
        "https://www.linkedin.com/in/tatebyers/",
        "https://www.youtube.com/@Tate-byers/videos",
        "https://www.facebook.com/profile.php?id=61557129795810",
        "https://www.tiktok.com/@lltechsolutions",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://lltechsolutions.ca/#organization",
      name: "L&L Tech Solutions",
      url: "https://lltechsolutions.ca",
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      description:
        "Custom websites, technical support, networking, CCTV, troubleshooting, and technology services.",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      inLanguage: "en-CA",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ItemList",
      name: "Selected websites built by L&L Tech Solutions",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebSite",
            name: "Crestline Painting Ltd.",
            url: "https://www.crestlinepainting.ca",
            creator: {
              "@id": "https://lltechsolutions.ca/#organization",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebSite",
            name: "Tow-N-Go Trailers",
            url: "https://www.towandgotrailers.ca",
            creator: {
              "@id": "https://lltechsolutions.ca/#organization",
            },
          },
        },
      ],
    },
  ],
};

function serializeStructuredData() {
  return JSON.stringify(structuredData).replace(/</g, "\\u003c");
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: "Tate Byers",
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
    "Tates TV",
    "Calgary website developer",
    "Calgary website design",
    "custom business websites",
    "tech support Calgary",
    "networking Calgary",
    "CCTV Calgary",
    "Crestline Painting website",
    "Tow-N-Go Trailers website",
    "McKenzie House Massage website",
    "Canadian web developer",
    "client website portfolio",
  ],
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
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
    title: "Tate Byers",
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
        alt: "Tate Byers, founder of L&L Tech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
            __html: serializeStructuredData(),
          }}
        />

        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
