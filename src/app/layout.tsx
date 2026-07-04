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

export const metadata: Metadata = {
  title: "Ahmed Ibrahim | Senior Flutter Developer",
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
  ],
  authors: [{ name: "Ahmed Ibrahim" }],
  openGraph: {
    title: "Ahmed Ibrahim | Senior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ibrahim | Senior Flutter Developer",
    description:
      "Building scalable Flutter apps for Android & iOS with clean architecture and exceptional user experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
