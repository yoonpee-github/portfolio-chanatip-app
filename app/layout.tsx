"use client";

import BgMusic from "@/components/common/bg-music";
import { ThemeProvider } from "@/components/common/theme-provider";
import Particles from "@/components/particles/particles";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  if (!GA_ID) {
    throw new Error("Missing Google Analytics ID");
  }

  const [particleQuantity, setParticleQuantity] = useState(400);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      setParticleQuantity(isMobile ? 100 : 800);
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={[
            "light",
            "dark",
            "retro",
            "cyberpunk",
            "paper",
            "aurora",
            "synthwave",
          ]}
        >
          <Particles
            className="absolute inset-0 -z-10 pointer-events-none"
            quantity={particleQuantity}
            refreshKey={pathname}
          />
          {children}
          <Toaster />
          <ModalProvider />
          <BgMusic />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
