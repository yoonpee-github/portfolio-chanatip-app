"use client";

import { LangSwitcher } from "@/components/common/lang-switcher";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { LangProvider } from "@/providers/lang-provider";
import { useEffect, useState } from "react";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <LangProvider>
        <header
          className={`sticky top-0 z-50 transition-all duration-700 ease-\[cubic-bezier\(0.4,0,0.2,1\)\] ${
            scrolled
              ? "bg-background/20 backdrop-blur-lg border-b border-border shadow-sm translate-y-0"
              : "bg-background/60 translate-y-0"
          }`}
        >
          <div className="container flex h-14 items-center justify-between transition-all duration-700 ease-\[cubic-bezier\(0.4,0,0.2,1\)\] px-4">
            <MainNav items={routesConfig.mainNav} />
            <nav className="flex items-center gap-3">
              <LangSwitcher />
              <ModeToggle />
            </nav>
          </div>
        </header>

        <main className="container flex-1">{children}</main>
        <SiteFooter />
      </LangProvider>
    </div>
  );
}
