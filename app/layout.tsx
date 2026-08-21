import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
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
    "Real-time cross-device clipboard sync for your PC and phone over your home Wi-Fi. Share text, images, and files — no cloud, no accounts, zero setup.",
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
      "Real-time clipboard sync between your PC and phone over your home Wi-Fi. No cloud, no accounts.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipBoardSync — Copy once. Paste anywhere.",
    description:
      "Real-time clipboard sync between your PC and phone over your home Wi-Fi. No cloud, no accounts.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'light' || (!saved && !prefersDark)) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
