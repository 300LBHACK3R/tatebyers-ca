import type { Metadata, Viewport } from "next";
import { PWAInstaller } from "@/components/PWAInstaller";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tatebyers.ca"),
  title: {
    default: "Tate Byers | Premium Personal Hub",
    template: "%s | Tate Byers",
  },
  description:
    "Premium personal hub for Tate Byers, L&L Tech Solutions, business links, creator projects, public memories, and contact information.",
  applicationName: "Tate Byers Premium Hub",
  appleWebApp: {
    capable: true,
    title: "Tate Hub",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Tate Byers",
    "L&L Tech Solutions",
    "Calgary tech support",
    "website design Calgary",
    "tech support Calgary",
    "networking Calgary",
    "CCTV Calgary",
    "personal portfolio",
    "creator projects",
    "Tates TV"
  ],
  authors: [{ name: "Tate Byers" }],
  creator: "Tate Byers",
  publisher: "L&L Tech Solutions",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.tatebyers.ca",
    siteName: "Tate Byers",
    title: "Tate Byers | Premium Personal Hub",
    description:
      "Business links, creator projects, contact information, and selected memories organized in one premium personal hub.",
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
    title: "Tate Byers | Premium Personal Hub",
    description:
      "Business links, creator projects, contact information, and selected memories organized in one premium personal hub.",
    images: ["/icon-512.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b70f1b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
