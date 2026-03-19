import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { BackToTopButton } from "@/components/BackToTopButton";
import { CommandPalette } from "@/components/CommandPalette";
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
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      style={{ backgroundColor: "#0a0a0a", colorScheme: "dark" }}
    >
      <body className="m-0 bg-[#0a0a0a] text-[#e4e4e7] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <CommandPalette />
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
