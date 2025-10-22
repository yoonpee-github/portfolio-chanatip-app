import { LangSwitcher } from "@/components/common/lang-switcher";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import { LangProvider } from "@/providers/lang-provider";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LangProvider>
        <header className="container z-50 bg-background">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={routesConfig.mainNav} />
            <nav className="flex items-center gap-5">
              <ModeToggle />
              <LangSwitcher />
            </nav>
          </div>
        </header>
        <main className="container flex-1">{children}</main>
        <SiteFooter />
      </LangProvider>
    </div>
  );
}
