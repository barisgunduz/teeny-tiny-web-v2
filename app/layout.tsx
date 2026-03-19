import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { BackToTopButton } from "@/components/BackToTopButton";
import { CommandPalette } from "@/components/CommandPalette";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Teeny Tiny Web",
    template: "%s | Teeny Tiny Web"
  },
  description: "A compact toolbox of browser-based developer utilities, cheatsheets, prompts, roadmaps, and design helpers.",
  openGraph: {
    title: "Teeny Tiny Web",
    description: "A compact toolbox of browser-based developer utilities, cheatsheets, prompts, roadmaps, and design helpers.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="m-0 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <CommandPalette />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
