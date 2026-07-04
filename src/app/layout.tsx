import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FloatingGradient from "@/components/FloatingGradient";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ahmedelsankary.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmed Ibrahim | Senior Flutter Developer",
    template: "%s | Ahmed Ibrahim - Senior Flutter Developer",
  },
  description:
    "Senior Flutter Developer with 4+ years of experience building production mobile applications for Android and iOS. Specializing in Flutter, Dart, Clean Architecture, and scalable software.",
  keywords: [
    "Flutter Developer",
    "Senior Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Clean Architecture",
    "Riverpod",
    "iOS",
    "Android",
    "Cairo",
    "Egypt",
    "Ahmed Ibrahim",
    "Ahmed Elsankary",
    "Flutter Cairo",
  ],
  authors: [{ name: "Ahmed Ibrahim", url: siteUrl }],
  creator: "Ahmed Ibrahim",
  publisher: "Ahmed Ibrahim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ahmed Ibrahim - Portfolio",
    url: siteUrl,
    title: "Ahmed Ibrahim | Senior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Ibrahim - Senior Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elsankary99",
    creator: "@elsankary99",
    title: "Ahmed Ibrahim | Senior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <FloatingGradient />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
