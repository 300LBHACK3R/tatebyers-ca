import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

function getBaseUrl() {
  return siteConfig.domain.replace(/\/$/, "");
}

function getBusinessName() {
  if ("business" in siteConfig && siteConfig.business?.name) {
    return siteConfig.business.name;
  }

  if ("businessName" in siteConfig && siteConfig.businessName) {
    return siteConfig.businessName;
  }

  return "L&L Tech Solutions";
}

function getBusinessUrl() {
  if ("business" in siteConfig && siteConfig.business?.url) {
    return siteConfig.business.url;
  }

  if ("businessUrl" in siteConfig && siteConfig.businessUrl) {
    return siteConfig.businessUrl;
  }

  return "https://lltechsolutions.ca";
}

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "technology",
  keywords: [
    "Tate Byers",
    "L&L Tech Solutions",
    "Calgary tech services",
    "Calgary web developer",
    "website design",
    "custom websites",
    "tech support",
    "gaming creator",
    "tech creator",
    "personal brand",
    "digital projects",
    "Next.js portfolio",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: baseUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tate Byers personal tech, gaming, business, and digital project hub.",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const businessName = getBusinessName();
  const businessUrl = getBusinessUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    jobTitle: "Founder, Developer, Creator",
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    owns: {
      "@type": "Organization",
      name: businessName,
      url: businessUrl,
    },
    sameAs: [
      businessUrl,
      "https://youtube.com/@LLTechSolutions/videos",
      "https://www.tiktok.com/@lltechsolutions",
      "https://www.facebook.com/profile.php?id=61557129795810",
      "https://www.linkedin.com/in/tatebyers/",
    ],
  };

  return (
    <html lang="en-CA" className="scroll-smooth">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}