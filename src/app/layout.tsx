import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Chords",
  description: "Your open source chord book, play it your own way.",
  keywords: ['chord book', 'digital songbook', 'guitar chords', 'ChordPro viewer', 'open source sheet music', 'music tabs app'],
  authors: [{ name: 'gabrielmaiaf' }],
  creator: 'Gabriel Maia Francisco',
  openGraph: {
    title: "Open Chords",
    description: "Your open source chord book, play it your own way.",
    url: "https://open-chords.vercel.app",
    siteName: "Open Chords",
    images: [
      {
        url: "https://open-chords.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Chords - Your open source chord book, play it your own way.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Chords",
    description: "Your open source chord book, play it your own way.",
    images: [
      {
        url: "https://open-chords.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Chords - Your open source chord book, play it your own way.",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
