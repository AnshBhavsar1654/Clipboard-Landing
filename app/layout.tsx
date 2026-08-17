import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ClipBoardSync — Copy once. Paste anywhere.",
  description:
    "Real-time cross-device clipboard bridge for your PC and phone over your own Wi-Fi. Share text, images, and files — no cloud, no accounts. Free download for Windows.",
  keywords: [
    "clipboard sync",
    "clipboard manager",
    "cross device clipboard",
    "phone to pc clipboard",
    "local clipboard sync",
    "clipboardsync",
  ],
  openGraph: {
    title: "ClipBoardSync — Copy once. Paste anywhere.",
    description:
      "Real-time clipboard sync between your PC and phone over your own Wi-Fi. No cloud, no accounts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipBoardSync — Copy once. Paste anywhere.",
    description:
      "Real-time clipboard sync between your PC and phone over your own Wi-Fi. No cloud, no accounts.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
      </body>
    </html>
  );
}
