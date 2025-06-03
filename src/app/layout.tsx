import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brighton-park-potholes.vercel.app";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Fix Our Alley - Demand Complete Reconstruction Now",
  description: "Join your neighbors in demanding complete alley reconstruction. The 3900 block alley (Pershing to 38th Place) is dangerous with potholes, glass, and nails. Send an urgent request to Alderwoman Ramirez.",
  keywords: ["Brighton Park", "potholes", "alley reconstruction", "Chicago", "Ward 12", "infrastructure", "community organizing", "Alderwoman Ramirez"],
  authors: [{ name: "3900 Block Residents" }],
  
  openGraph: {
    title: "Fix Our Alley - Brighton Park Pothole Crisis",
    description: "Dangerous alley conditions demand action. Help us get complete reconstruction for the 3900 block alley filled with potholes, glass, and nails.",
    url: siteUrl,
    siteName: "Brighton Park Alley Reconstruction",
    images: [
      {
        url: `${siteUrl}/og-potholes.png`,
        width: 1200,
        height: 630,
        alt: "Dangerous pothole-filled alley requiring complete reconstruction",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Fix Our Alley - Complete Reconstruction Needed",
    description: "Our alley is dangerous with potholes, glass, and nails. Help demand complete reconstruction from Alderwoman Ramirez.",
    images: [`${siteUrl}/twitter-potholes.png`],
    creator: "@ward12chicago",
  },
  
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
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
