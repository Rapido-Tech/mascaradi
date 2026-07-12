import type { Metadata } from "next";
import { Providers } from "./providers";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mascaradi - Premium Car Dealership in Kenya",
    template: "%s | Mascaradi",
  },
  description:
    "Discover premium cars at Mascaradi. Your trusted car dealership in Kenya offering quality vehicles, financing, and excellent service.",
  authors: [{ name: "Mascaradi" }],
  openGraph: {
    title: "Mascaradi - Premium Car Dealership",
    description:
      "Discover premium cars at Mascaradi. Your trusted car dealership in Kenya offering quality vehicles, financing, and excellent service.",
    type: "website",
    url: siteUrl,
    siteName: "Mascaradi",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
